'use client';

import {useState, useEffect, type FormEvent} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import {WHATSAPP_HREF} from '@/lib/contact';
import {trackEvent} from '@/lib/analytics';
import {TRANSFER_PREFILL_EVENT} from './PopularDestinations';

// Form richiesta transfer — stile Nexus (coerente con ContactForm).
// Partenza = menu (aeroporti / porti / città / altro indirizzo).
// Arrivo = stesso menu (aeroporti / porti / città + Etna / altro indirizzo).
// Passeggeri e Bagagli = menu. Invia a /api/transfer → email a info@ via Resend.
// Successo inline + fallback WhatsApp (stesso pattern del form contatti).

type Place = {it: string; en: string};

const AIRPORTS: Place[] = [
  {it: 'Aeroporto di Catania', en: 'Catania Airport'},
  {it: 'Aeroporto di Comiso', en: 'Comiso Airport'},
  {it: 'Aeroporto di Palermo', en: 'Palermo Airport'},
  {it: 'Aeroporto di Trapani', en: 'Trapani Airport'}
];
const PORTS: Place[] = [
  {it: 'Porto di Pozzallo', en: 'Pozzallo Port'},
  {it: 'Porto di Augusta', en: 'Augusta Port'}
];
const CITIES: Place[] = [
  {it: 'Siracusa', en: 'Syracuse'},
  {it: 'Ortigia', en: 'Ortigia'},
  {it: 'Noto', en: 'Noto'},
  {it: 'Taormina', en: 'Taormina'},
  {it: 'Modica', en: 'Modica'},
  {it: 'Ragusa Ibla', en: 'Ragusa Ibla'},
  {it: 'Marzamemi', en: 'Marzamemi'},
  {it: 'Catania', en: 'Catania'},
  {it: 'Palermo', en: 'Palermo'}
];
// Etna: valida come ARRIVO (non come punto di partenza tipico).
// Nota: il valore ('Etna' in entrambe le lingue) deve combaciare con il chip
// "Destinazioni più richieste" (PopularDestinations), che precompila l'Arrivo.
const ETNA: Place = {it: 'Etna', en: 'Etna'};
// Città e centri selezionabili come ARRIVO (le città di partenza + l'Etna).
const DEST_CITIES: Place[] = [...CITIES, ETNA];
const PAX_OPTIONS = ['1', '2', '3', '4', '5', '6', '7', '7+'];
const OTHER = '__other__';

export function TransferForm() {
  const t = useTranslations('TransferForm');
  const locale = useLocale();
  const L = (p: Place) => (locale === 'en' ? p.en : p.it);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [roundtrip, setRoundtrip] = useState(false);
  const [pickup, setPickup] = useState('');
  const [pickupCustom, setPickupCustom] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [dropoffCustom, setDropoffCustom] = useState('');
  const [pax, setPax] = useState('');
  const [bags, setBags] = useState('');

  // Precompilazione "Arrivo" dai chip "Destinazioni più richieste".
  useEffect(() => {
    function onPrefill(e: Event) {
      const detail = (e as CustomEvent<{dropoff?: string}>).detail;
      if (detail?.dropoff) setDropoff(detail.dropoff);
    }
    window.addEventListener(TRANSFER_PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(TRANSFER_PREFILL_EVENT, onPrefill);
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setError(t('errorRequired'));
      form.reportValidity();
      return;
    }
    setIsSubmitting(true);
    const fd = new FormData(form);
    const body = {
      pickup: pickup === OTHER ? pickupCustom.trim() : pickup,
      dropoff: dropoff === OTHER ? dropoffCustom.trim() : dropoff.trim(),
      date: String(fd.get('date') ?? ''),
      time: String(fd.get('time') ?? ''),
      pax,
      bags,
      roundtrip: roundtrip ? 'on' : '',
      returnDate: String(fd.get('returnDate') ?? ''),
      returnTime: String(fd.get('returnTime') ?? ''),
      name: String(fd.get('name') ?? ''),
      phone: String(fd.get('phone') ?? ''),
      email: String(fd.get('email') ?? ''),
      note: String(fd.get('note') ?? ''),
      company: String(fd.get('company') ?? ''),
      locale
    };
    try {
      const res = await fetch('/api/transfer', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      });
      if (!res.ok) {
        let code = 'send';
        try {
          code = ((await res.json()) as {error?: string})?.error ?? 'send';
        } catch {}
        setError(code === 'validation' ? t('errorRequired') : t('errorSend'));
        return;
      }
      trackEvent('form_submit', {form: 'transfer'});
      setSubmitted(true);
    } catch {
      setError(t('errorSend'));
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-canvas rounded-xl p-10 sm:p-12 border border-[var(--border)]">
        <p
          className="font-display italic text-3xl sm:text-4xl text-primary leading-tight"
          role="status"
          aria-live="polite"
        >
          {t('successTitle')}
        </p>
        <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-ink/75 max-w-prose">
          {t('successBody')}{' '}
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-2 text-accent-strong"
          >
            WhatsApp
          </a>
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full bg-canvas-warm border border-[var(--border-strong)] rounded-md px-4 py-3 text-[16px] sm:text-[15px] text-ink placeholder:text-ink/60 focus:outline-none focus:border-accent focus:bg-canvas transition-colors';
  const selectClass = `${inputClass} appearance-none bg-no-repeat cursor-pointer pr-10`;
  const selectArrow = {
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%238B9B8E' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
    backgroundPosition: 'right 1rem center'
  } as const;
  const labelClass =
    'text-[11px] uppercase tracking-[0.12em] font-medium text-secondary block mb-2';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot anti-spam: invisibile agli umani, i bot lo compilano. */}
      <div aria-hidden="true" style={{position: 'absolute', left: '-9999px', top: 'auto', width: 1, height: 1, overflow: 'hidden'}}>
        <label>
          Company
          <input name="company" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      {error && (
        <div
          role="alert"
          aria-live="assertive"
          className="rounded-md border border-accent/40 bg-accent/10 px-4 py-3 text-[14px] text-ink"
        >
          {error}{' '}
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-2"
          >
            WhatsApp
          </a>
        </div>
      )}

      {/* Partenza (menu) / Arrivo (ricerca) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block">
            <span className={labelClass}>{t('pickupLabel')}</span>
            <select
              required
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className={selectClass}
              style={selectArrow}
            >
              <option value="" disabled>
                {t('selectPlaceholder')}
              </option>
              <optgroup label={t('pickupGroupAirports')}>
                {AIRPORTS.map((p) => (
                  <option key={p.it} value={L(p)}>
                    {L(p)}
                  </option>
                ))}
              </optgroup>
              <optgroup label={t('pickupGroupPorts')}>
                {PORTS.map((p) => (
                  <option key={p.it} value={L(p)}>
                    {L(p)}
                  </option>
                ))}
              </optgroup>
              <optgroup label={t('pickupGroupCities')}>
                {CITIES.map((p) => (
                  <option key={p.it} value={L(p)}>
                    {L(p)}
                  </option>
                ))}
              </optgroup>
              <option value={OTHER}>{t('pickupOther')}</option>
            </select>
          </label>
          {pickup === OTHER && (
            <input
              type="text"
              required
              value={pickupCustom}
              onChange={(e) => setPickupCustom(e.target.value)}
              placeholder={t('pickupOtherPlaceholder')}
              className={`${inputClass} mt-3`}
            />
          )}
        </div>

        <div>
          <label className="block">
            <span className={labelClass}>{t('dropoffLabel')}</span>
            <select
              required
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              className={selectClass}
              style={selectArrow}
            >
              <option value="" disabled>
                {t('selectPlaceholder')}
              </option>
              <optgroup label={t('pickupGroupCities')}>
                {DEST_CITIES.map((p) => (
                  <option key={p.it} value={L(p)}>
                    {L(p)}
                  </option>
                ))}
              </optgroup>
              <optgroup label={t('pickupGroupAirports')}>
                {AIRPORTS.map((p) => (
                  <option key={p.it} value={L(p)}>
                    {L(p)}
                  </option>
                ))}
              </optgroup>
              <optgroup label={t('pickupGroupPorts')}>
                {PORTS.map((p) => (
                  <option key={p.it} value={L(p)}>
                    {L(p)}
                  </option>
                ))}
              </optgroup>
              <option value={OTHER}>{t('pickupOther')}</option>
            </select>
          </label>
          {dropoff === OTHER && (
            <input
              type="text"
              required
              value={dropoffCustom}
              onChange={(e) => setDropoffCustom(e.target.value)}
              placeholder={t('dropoffOtherPlaceholder')}
              className={`${inputClass} mt-3`}
            />
          )}
        </div>
      </div>

      {/* Data / Ora / Passeggeri / Bagagli */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
        <label className="block">
          <span className={labelClass}>{t('dateLabel')}</span>
          <input name="date" type="date" className={inputClass} />
        </label>
        <label className="block">
          <span className={labelClass}>{t('timeLabel')}</span>
          <input name="time" type="time" className={inputClass} />
        </label>
        <label className="block">
          <span className={labelClass}>{t('paxLabel')}</span>
          <select
            required
            value={pax}
            onChange={(e) => setPax(e.target.value)}
            className={selectClass}
            style={selectArrow}
          >
            <option value="" disabled>
              {t('selectPlaceholder')}
            </option>
            {PAX_OPTIONS.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={labelClass}>{t('bagsLabel')}</span>
          <select
            value={bags}
            onChange={(e) => setBags(e.target.value)}
            className={selectClass}
            style={selectArrow}
          >
            <option value="">{t('selectPlaceholder')}</option>
            <option value={t('bagsNone')}>{t('bagsNone')}</option>
            <option value={t('bags1')}>{t('bags1')}</option>
            <option value={t('bags2')}>{t('bags2')}</option>
            <option value={t('bags3')}>{t('bags3')}</option>
          </select>
        </label>
      </div>

      {/* Andata e ritorno (opzionale) */}
      <div>
        <button
          type="button"
          role="switch"
          aria-checked={roundtrip}
          onClick={() => setRoundtrip((v) => !v)}
          className="inline-flex items-center gap-3 text-[13px] uppercase tracking-[0.1em] font-medium text-ink-soft hover:text-accent transition-colors"
        >
          <span
            aria-hidden="true"
            className={`relative w-11 h-6 rounded-full transition-colors ${roundtrip ? 'bg-accent' : 'bg-ink/25'}`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-cream-on-dark transition-transform ${roundtrip ? 'translate-x-5' : ''}`}
            />
          </span>
          {t('returnToggle')}
        </button>

        {roundtrip && (
          <div className="grid grid-cols-2 gap-5 mt-5">
            <label className="block">
              <span className={labelClass}>{t('returnDateLabel')}</span>
              <input name="returnDate" type="date" required className={inputClass} />
            </label>
            <label className="block">
              <span className={labelClass}>{t('returnTimeLabel')}</span>
              <input name="returnTime" type="time" className={inputClass} />
            </label>
          </div>
        )}
      </div>

      {/* Nome / Telefono / Email */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <label className="block">
          <span className={labelClass}>{t('nameLabel')}</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder={t('namePlaceholder')}
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>{t('phoneLabel')}</span>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={t('phonePlaceholder')}
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>{t('emailLabel')}</span>
          <input
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder={t('emailPlaceholder')}
            className={inputClass}
          />
        </label>
      </div>

      {/* Note */}
      <label className="block">
        <span className={labelClass}>{t('noteLabel')}</span>
        <textarea
          name="note"
          rows={3}
          placeholder={t('notePlaceholder')}
          className={`${inputClass} resize-y`}
        />
      </label>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-[13px] uppercase tracking-[0.05em] font-medium transition-all duration-200 hover:bg-accent-hover disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-accent"
          style={{color: 'var(--cream-on-dark)'}}
        >
          {isSubmitting ? t('submitting') : t('submit')}
          <span aria-hidden="true">{isSubmitting ? '…' : '→'}</span>
        </button>
        <p className="text-[13px] text-ink/70 leading-relaxed">{t('submitNote')}</p>
      </div>
    </form>
  );
}
