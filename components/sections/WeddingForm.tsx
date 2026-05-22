'use client';

import {useState, type FormEvent} from 'react';
import {useTranslations} from 'next-intl';

export function WeddingForm() {
  const t = useTranslations('Wedding.form');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setError(t('errorRequired'));
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    // Phase 1: log + success state. Phase 2 (TODO): POST a /api/wedding-quote.
    // eslint-disable-next-line no-console
    console.log('[WeddingForm] submission', data);
    setSubmitted(true);
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
          {t('successBody')}
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full bg-canvas border border-[var(--border)] rounded-md px-4 py-3 text-[15px] text-ink placeholder:text-ink/40 focus:outline-none focus:border-accent transition-colors';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
            className={inputClass}
          />
        </label>

        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-secondary block mb-2">
            {t('fieldContactLabel')}
          </span>
          <input
            name="contact"
            type="text"
            required
            placeholder={t('fieldContactPlaceholder')}
            className={inputClass}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-secondary block mb-2">
            {t('fieldDateLabel')}
          </span>
          <input
            name="date"
            type="date"
            required
            placeholder={t('fieldDatePlaceholder')}
            className={inputClass}
          />
        </label>

        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-secondary block mb-2">
            {t('fieldCarsLabel')}
          </span>
          <input
            name="cars"
            type="text"
            required
            placeholder={t('fieldCarsPlaceholder')}
            className={inputClass}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-secondary block mb-2">
            {t('fieldCeremonyLabel')}
          </span>
          <input
            name="ceremony"
            type="text"
            required
            placeholder={t('fieldCeremonyPlaceholder')}
            className={inputClass}
          />
        </label>

        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-secondary block mb-2">
            {t('fieldReceptionLabel')}
          </span>
          <input
            name="reception"
            type="text"
            placeholder={t('fieldReceptionPlaceholder')}
            className={inputClass}
          />
        </label>
      </div>

      <label className="block">
        <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-secondary block mb-2">
          {t('fieldGuestsLabel')}
        </span>
        <input
          name="guests"
          type="text"
          placeholder={t('fieldGuestsPlaceholder')}
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-secondary block mb-2">
          {t('fieldNotesLabel')}
        </span>
        <textarea
          name="notes"
          rows={4}
          placeholder={t('fieldNotesPlaceholder')}
          className={`${inputClass} resize-y`}
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
        <p className="text-[13px] text-ink/55 leading-relaxed max-w-md">
          {t('submitNote')}
        </p>
      </div>
    </form>
  );
}
