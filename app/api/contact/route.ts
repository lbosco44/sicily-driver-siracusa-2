import {NextResponse} from 'next/server';
import {sendLeadEmail, leadEmailHtml, oneLine, clip} from '@/lib/email';

export const runtime = 'nodejs';

type Body = {
  name?: string;
  phone?: string;
  type?: string;
  message?: string;
  company?: string; // honeypot anti-spam (deve restare vuoto)
  locale?: string;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ok: false, error: 'bad_request'}, {status: 400});
  }

  // Honeypot: i bot compilano il campo nascosto "company". Fingiamo successo
  // senza inviare nulla (non diamo segnali allo spammer).
  if (body.company && body.company.trim() !== '') {
    return NextResponse.json({ok: true});
  }

  // Cap lunghezze: difesa contro payload abnormi verso la casella del cliente.
  const name = oneLine(body.name || '', 80);
  const phone = oneLine(body.phone || '', 40);
  const type = oneLine(body.type || '', 80);
  const message = clip(body.message || '', 2000);

  if (!name || !phone || !type || !message) {
    return NextResponse.json({ok: false, error: 'validation'}, {status: 400});
  }

  const locale = body.locale === 'en' ? 'EN' : 'IT';
  const rows: [string, string][] = [
    ['Nome', name],
    ['Telefono', phone],
    ['Tipo richiesta', type],
    ['Messaggio', message],
    ['Lingua sito', locale]
  ];

  const result = await sendLeadEmail({
    subject: `Sicily Driver — richiesta contatto: ${name}`,
    html: leadEmailHtml('Nuova richiesta dal sito — Contatti', rows),
    text: rows.map(([k, v]) => `${k}: ${v}`).join('\n')
  });

  if (!result.ok) {
    return NextResponse.json({ok: false, error: 'send'}, {status: 502});
  }
  return NextResponse.json({ok: true});
}
