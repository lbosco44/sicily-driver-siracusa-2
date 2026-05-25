'use client';

import {useState, type FormEvent} from 'react';
import {useTranslations} from 'next-intl';

export function ContactForm() {
  const t = useTranslations('Contatti.form');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    // Phase 1: no backend reale, log + toast/success message.
    // Phase 2 (TODO): POST a /api/contact con Resend.
    // eslint-disable-next-line no-console
    console.log('[ContactForm] submission', data);
    // Microdelay per garantire che lo stato "Invio..." sia percepibile anche
    // quando il submit e' istantaneo (Phase 1). In Phase 2 Resend la latenza
    // reale lo rende naturale.
    await new Promise((r) => setTimeout(r, 400));
    setIsSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-muted-bg rounded-xl p-10 sm:p-12 border border-[var(--border)]">
        <p
          className="font-display italic text-3xl sm:text-4xl text-primary leading-tight"
          role="status"
          aria-live="polite"
        >
          {t('successTitle')}
        </p>
        <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-ink/75 max-w-prose">
          {t('successBody')}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      aria-describedby="form-note"
    >
      {error && (
        <div
          role="alert"
          aria-live="assertive"
          className="rounded-md border border-accent/40 bg-accent/10 px-4 py-3 text-[14px] text-ink"
        >
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-secondary block mb-2">
            {t('fieldNameLabel')}
          </span>
          <input
            name="name"
            type="text"
            required
            placeholder={t('fieldNamePlaceholder')}
            className="w-full bg-canvas border border-[var(--border)] rounded-md px-4 py-3 text-[15px] text-ink placeholder:text-ink/60 focus:outline-none focus:border-accent transition-colors"
          />
        </label>

        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-secondary block mb-2">
            {t('fieldPhoneLabel')}
          </span>
          <input
            name="phone"
            type="tel"
            required
            placeholder={t('fieldPhonePlaceholder')}
            className="w-full bg-canvas border border-[var(--border)] rounded-md px-4 py-3 text-[15px] text-ink placeholder:text-ink/60 focus:outline-none focus:border-accent transition-colors"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-secondary block mb-2">
          {t('fieldTypeLabel')}
        </span>
        <select
          name="type"
          required
          defaultValue=""
          className="w-full bg-canvas border border-[var(--border)] rounded-md px-4 py-3 text-[15px] text-ink focus:outline-none focus:border-accent transition-colors appearance-none bg-[length:18px] bg-no-repeat bg-[position:right_1rem_center] pr-12"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%231F1A14' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")"
          }}
        >
          <option value="" disabled>
            —
          </option>
          <option value="transfer">{t('fieldTypeOption1')}</option>
          <option value="tour">{t('fieldTypeOption2')}</option>
          <option value="wedding">{t('fieldTypeOption3')}</option>
          <option value="business">{t('fieldTypeOption4')}</option>
          <option value="other">{t('fieldTypeOption5')}</option>
        </select>
      </label>

      <label className="block">
        <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-secondary block mb-2">
          {t('fieldMessageLabel')}
        </span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder={t('fieldMessagePlaceholder')}
          className="w-full bg-canvas border border-[var(--border)] rounded-md px-4 py-3 text-[15px] text-ink placeholder:text-ink/60 focus:outline-none focus:border-accent transition-colors resize-y"
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
        <p id="form-note" className="text-[13px] text-ink/55 leading-relaxed">
          {t('submitNote')}
        </p>
      </div>
    </form>
  );
}
