'use client';

import {useState, type FormEvent} from 'react';
import {useTranslations} from 'next-intl';

export function ContactForm() {
  const t = useTranslations('Contatti.form');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // Phase 1: no backend reale, log + toast/success message.
    // Phase 2 (TODO): POST a /api/contact con Resend.
    // eslint-disable-next-line no-console
    console.log('[ContactForm] submission', data);
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
      noValidate
    >
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
            className="w-full bg-canvas border border-[var(--border)] rounded-md px-4 py-3 text-[15px] text-ink placeholder:text-ink/40 focus:outline-none focus:border-accent transition-colors"
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
            className="w-full bg-canvas border border-[var(--border)] rounded-md px-4 py-3 text-[15px] text-ink placeholder:text-ink/40 focus:outline-none focus:border-accent transition-colors"
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
          className="w-full bg-canvas border border-[var(--border)] rounded-md px-4 py-3 text-[15px] text-ink focus:outline-none focus:border-accent transition-colors"
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
          className="w-full bg-canvas border border-[var(--border)] rounded-md px-4 py-3 text-[15px] text-ink placeholder:text-ink/40 focus:outline-none focus:border-accent transition-colors resize-y"
        />
      </label>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7 pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-[13px] uppercase tracking-[0.05em] font-medium transition-all duration-200 hover:bg-accent-hover"
          style={{color: 'var(--cream-on-dark)'}}
        >
          {t('submit')}
          <span aria-hidden="true">→</span>
        </button>
        <p id="form-note" className="text-[13px] text-ink/55 leading-relaxed">
          {t('submitNote')}
        </p>
      </div>
    </form>
  );
}
