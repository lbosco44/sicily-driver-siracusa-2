import {NextResponse} from 'next/server';
import {
  sendLeadEmail,
  leadEmailHtml,
  isValidEmail,
  oneLine,
  clip
} from '@/lib/email';

export const runtime = 'nodejs';

type Body = {
  date?: string;
  ceremony?: string;
  reception?: string;
  carsCount?: string;
  guests?: string;
  notes?: string;
  name?: string;
  phone?: string;
  email?: string;
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

  if (body.company && body.company.trim() !== '') {
    return NextResponse.json({ok: true});
  }

  // Cap lunghezze: difesa contro payload abnormi verso la casella del cliente.
  const date = oneLine(body.date || '', 40);
  const ceremony = oneLine(body.ceremony || '', 120);
  const carsCount = oneLine(body.carsCount || '', 10);
  const name = oneLine(body.name || '', 80);
  const phone = oneLine(body.phone || '', 40);
  const email = oneLine(body.email || '', 120);

  // Obbligatori nel form: data, cerimonia, n° auto, nome, telefono.
  if (!date || !ceremony || !carsCount || !name || !phone) {
    return NextResponse.json({ok: false, error: 'validation'}, {status: 400});
  }

  const locale = body.locale === 'en' ? 'EN' : 'IT';
  const rows: [string, string][] = [
    ['Nome', name],
    ['Telefono', phone],
    ['Email', email || '—'],
    ['Data evento', date],
    ['Location cerimonia', ceremony],
    ['Location ricevimento', oneLine(body.reception || '', 120) || '—'],
    ['N° auto', carsCount],
    ['N° invitati', oneLine(body.guests || '', 60) || '—'],
    ['Note', clip(body.notes || '', 2000) || '—'],
    ['Lingua sito', locale]
  ];

  const result = await sendLeadEmail({
    subject: `Sicily Driver — richiesta wedding: ${name} (${date})`,
    html: leadEmailHtml('Nuova richiesta dal sito — Wedding', rows),
    text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
    // Il wedding form raccoglie l'email → il cliente può rispondere diretto.
    // Solo se valida: un indirizzo sporco farebbe rifiutare l'intera email.
    replyTo: email && isValidEmail(email) ? email : undefined
  });

  if (!result.ok) {
    return NextResponse.json({ok: false, error: 'send'}, {status: 502});
  }
  return NextResponse.json({ok: true});
}
