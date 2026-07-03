import {NextResponse} from 'next/server';
import {sendLeadEmail, leadEmailHtml} from '@/lib/email';

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

function clean(v: string | undefined): string {
  return (v || '').trim();
}

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

  const date = clean(body.date);
  const ceremony = clean(body.ceremony);
  const carsCount = clean(body.carsCount);
  const name = clean(body.name);
  const phone = clean(body.phone);
  const email = clean(body.email);

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
    ['Location ricevimento', clean(body.reception) || '—'],
    ['N° auto', carsCount],
    ['N° invitati', clean(body.guests) || '—'],
    ['Note', clean(body.notes) || '—'],
    ['Lingua sito', locale]
  ];

  const result = await sendLeadEmail({
    subject: `Sicily Driver — richiesta wedding: ${name} (${date})`,
    html: leadEmailHtml('Nuova richiesta dal sito — Wedding', rows),
    text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
    // Il wedding form raccoglie l'email → il cliente può rispondere diretto.
    replyTo: email || undefined
  });

  if (!result.ok) {
    return NextResponse.json({ok: false, error: 'send'}, {status: 502});
  }
  return NextResponse.json({ok: true});
}
