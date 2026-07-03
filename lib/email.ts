// Invio email dei lead via Resend REST API — nessuna dipendenza npm, solo
// fetch nativo (evita i problemi di build-scripts pnpm e funziona nel Node
// runtime delle route handler).
//
// Config via env (Vercel, mai committare valori reali):
//   RESEND_API_KEY   → chiave API Resend
//   LEAD_TO_EMAIL    → casella del cliente dove arrivano le richieste
//   LEAD_FROM_EMAIL  → mittente verificato su Resend (default noreply@dominio)
//
// Comportamento pre-lancio: finché RESEND_API_KEY / LEAD_TO_EMAIL non sono
// configurate (es. preview), l'invio è "staged": logghiamo e restituiamo
// delivered:false SENZA errore, così il form mostra comunque la conferma in
// demo. In produzione, con key presente, un invio fallito restituisce ok:false
// → il form mostra errore + fallback WhatsApp (nessun lead perso in silenzio).

type SendResult = {ok: true; delivered: boolean} | {ok: false; error: string};

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const DEFAULT_FROM = 'Sicily Driver <noreply@ncctaxisiracusa.com>';

// Validazione email minimale (per decidere se usarla come reply_to).
export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Cap lunghezza (difesa payload enormi). Preserva i newline interni.
export function clip(value: string, max: number): string {
  return value.trim().slice(0, max);
}

// Riga singola normalizzata: per subject e campi mono-linea (nome, telefono).
export function oneLine(value: string, max: number): string {
  return value.replace(/\s+/g, ' ').trim().slice(0, max);
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Tabella HTML semplice e robusta per i client email (stili inline).
export function leadEmailHtml(title: string, rows: [string, string][]): string {
  const body = rows
    .map(
      ([k, v]) =>
        `<tr>` +
        `<td style="padding:8px 12px;font:600 13px/1.4 Arial,sans-serif;color:#556356;vertical-align:top;white-space:nowrap">${escapeHtml(
          k
        )}</td>` +
        `<td style="padding:8px 12px;font:400 15px/1.5 Arial,sans-serif;color:#1a1a1a">${escapeHtml(
          v
        ).replace(/\n/g, '<br>')}</td>` +
        `</tr>`
    )
    .join('');
  return (
    `<div style="max-width:560px;margin:0 auto;font-family:Arial,sans-serif">` +
    `<h2 style="font:600 18px/1.3 Arial,sans-serif;color:#A5532F;margin:0 0 16px">${escapeHtml(
      title
    )}</h2>` +
    `<table style="border-collapse:collapse;width:100%;border:1px solid #e5e0d5">${body}</table>` +
    `<p style="margin:16px 0 0;font:400 12px/1.5 Arial,sans-serif;color:#8b8a85">Inviata automaticamente dal sito ncctaxisiracusa.com</p>` +
    `</div>`
  );
}

export async function sendLeadEmail(opts: {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL || DEFAULT_FROM;

  if (!apiKey || !to) {
    console.warn(
      '[lead] Resend non configurato (RESEND_API_KEY / LEAD_TO_EMAIL mancanti). Lead NON inviato:',
      opts.subject
    );
    // Fuori dalla produzione (preview Vercel / dev locale) è uno stato atteso:
    // "staging", nessun errore, il form mostra comunque la conferma in demo.
    // In PRODUZIONE una env mancante è un guasto: restituiamo errore → il form
    // mostra il fallback WhatsApp invece di una finta conferma con lead perso.
    // Usiamo VERCEL_ENV (non NODE_ENV, che è "production" anche in preview).
    // Override esplicito con LEAD_STAGING=1.
    const staging =
      process.env.VERCEL_ENV !== 'production' ||
      process.env.LEAD_STAGING === '1';
    return staging
      ? {ok: true, delivered: false}
      : {ok: false, error: 'not_configured'};
  }

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      // Timeout: se Resend è lento/appeso non blocchiamo la function e non
      // lasciamo il bottone in "Invio..." all'infinito (rischio doppio invio).
      signal: AbortSignal.timeout(8000),
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: opts.subject,
        html: opts.html,
        text: opts.text,
        ...(opts.replyTo ? {reply_to: opts.replyTo} : {})
      })
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('[lead] Resend send failed', res.status, detail);
      return {ok: false, error: `resend_${res.status}`};
    }
    return {ok: true, delivered: true};
  } catch (err) {
    console.error('[lead] Resend fetch error', err);
    return {ok: false, error: 'network'};
  }
}
