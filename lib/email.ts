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
    // Pre-lancio: non configurato. Non è un errore, è uno stato atteso.
    console.warn(
      '[lead] Resend non configurato (RESEND_API_KEY / LEAD_TO_EMAIL mancanti). Lead NON inviato:',
      opts.subject
    );
    return {ok: true, delivered: false};
  }

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
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
