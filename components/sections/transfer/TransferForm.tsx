'use client';

import {useState, useEffect, type FormEvent} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import {WHATSAPP_HREF} from '@/lib/contact';
import {trackEvent} from '@/lib/analytics';
import {TRANSFER_PREFILL_EVENT} from './PopularDestinations';

// Form richiesta transfer — stile Nexus (coerente con ContactForm).
// Campi a testo libero (partenza/arrivo li compila l'utente, niente dropdown
// di località). Invia a /api/transfer → email a info@ via Resend. Successo
// inline + fallback WhatsApp per urgenze (stesso pattern del form contatti).
export function TransferForm() {
  const t = useTranslations('TransferForm');
  const locale = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [roundtrip, setRoundtrip] = useState(false);
  const [dropoff, setDropoff] = useState('');

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
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/transfer', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...data, roundtrip: roundtrip ? 'on' : '', locale})
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

      {/* Partenza / Arrivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="block">
          <span className={labelClass}>{t('pickupLabel')}</span>
          <input
            name="pickup"
            type="text"
            required
            placeholder={t('pickupPlaceholder')}
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>{t('dropoffLabel')}</span>
          <input
            name="dropoff"
            type="text"
            required
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            placeholder={t('dropoffPlaceholder')}
            className={inputClass}
          />
        </label>
      </div>

      {/* Data / Ora / Passeggeri */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        <label className="block">
          <span className={labelClass}>{t('dateLabel')}</span>
          <input name="date" type="date" className={inputClass} />
        </label>
        <label className="block">
          <span className={labelClass}>{t('timeLabel')}</span>
          <input name="time" type="time" className={inputClass} />
        </label>
        <label className="block col-span-2 sm:col-span-1">
          <span className={labelClass}>{t('paxLabel')}</span>
          <input
            name="pax"
            type="text"
            inputMode="numeric"
            placeholder={t('paxPlaceholder')}
            className={inputClass}
          />
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
            required
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
            placeholder={t('emailPlaceholder')}
            className={inputClass}
          />
        </label>
      </div>

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
