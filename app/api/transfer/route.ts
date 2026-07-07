import {NextResponse} from 'next/server';
import {sendLeadEmail, leadEmailHtml, oneLine, clip, isValidEmail} from '@/lib/email';

export const runtime = 'nodejs';

type Body = {
  pickup?: string;
  dropoff?: string;
  date?: string;
  time?: string;
  pax?: string;
  bags?: string;
  roundtrip?: string; // 'on' se richiesto anche il ritorno
  returnDate?: string;
  returnTime?: string;
  name?: string;
  phone?: string;
  email?: string;
  note?: string;
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

  const name = oneLine(body.name || '', 80);
  const phone = oneLine(body.phone || '', 40);
  const email = oneLine(body.email || '', 120);
  const pickup = oneLine(body.pickup || '', 120);
  const dropoff = oneLine(body.dropoff || '', 120);
  const date = oneLine(body.date || '', 30);
  const time = oneLine(body.time || '', 20);
  const pax = oneLine(body.pax || '', 30);
  const bags = oneLine(body.bags || '', 30);
  const note = clip(body.note || '', 1000);
  const returnDate = oneLine(body.returnDate || '', 30);
  const returnTime = oneLine(body.returnTime || '', 20);
  const roundtrip = body.roundtrip === 'on' || body.roundtrip === 'true';

  // Email obbligatoria (canale di risposta + Reply-To verso il cliente);
  // telefono ora facoltativo. Servono anche partenza e arrivo per la tratta.
  if (!name || !email || !isValidEmail(email) || !pickup || !dropoff) {
    return NextResponse.json({ok: false, error: 'validation'}, {status: 400});
  }

  const locale = body.locale === 'en' ? 'EN' : 'IT';
  const rows: [string, string][] = [
    ['Nome', name],
    ['Email', email]
  ];
  if (phone) rows.push(['Telefono', phone]);
  rows.push(['Partenza', pickup], ['Arrivo', dropoff]);
  if (date) rows.push(['Data', date]);
  if (time) rows.push(['Ora', time]);
  if (pax) rows.push(['Passeggeri', pax]);
  if (bags) rows.push(['Bagagli', bags]);
  if (roundtrip) {
    rows.push(['Andata e ritorno', 'Sì']);
    if (returnDate) rows.push(['Data ritorno', returnDate]);
    if (returnTime) rows.push(['Ora ritorno', returnTime]);
  }
  if (note) rows.push(['Note', note]);
  rows.push(['Lingua sito', locale]);

  const result = await sendLeadEmail({
    subject: `Sicily Driver — richiesta transfer: ${pickup} → ${dropoff}`,
    html: leadEmailHtml('Nuova richiesta transfer dal sito', rows),
    text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
    replyTo: email && isValidEmail(email) ? email : undefined
  });

  if (!result.ok) {
    return NextResponse.json({ok: false, error: 'send'}, {status: 502});
  }
  return NextResponse.json({ok: true});
}
