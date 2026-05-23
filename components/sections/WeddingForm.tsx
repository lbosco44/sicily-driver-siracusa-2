'use client';

import {useState, type FormEvent} from 'react';

export type WeddingFormFields = {
  dateLabel: string;
  datePlaceholder: string;
  ceremonyLabel: string;
  ceremonyPlaceholder: string;
  receptionLabel: string;
  receptionPlaceholder: string;
  carsCountLabel: string;
  carsCountOption1: string;
  carsCountOption2: string;
  carsCountOption3: string;
  guestsLabel: string;
  guestsPlaceholder: string;
  notesLabel: string;
  notesPlaceholder: string;
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  submit: string;
  submitNote: string;
  successTitle: string;
  successBody: string;
  errorRequired: string;
};

export function WeddingForm({fields}: {fields: WeddingFormFields}) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setError(fields.errorRequired);
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    // Phase 1: log + success state. Phase 2 (TODO): POST /api/wedding-quote con Resend.
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
          {fields.successTitle}
        </p>
        <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-ink/75 max-w-prose">
          {fields.successBody}
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full bg-canvas border border-[var(--border)] rounded-md px-4 py-3 text-[15px] text-ink placeholder:text-ink/40 focus:outline-none focus:border-accent transition-colors';
  const labelClass =
    'text-[11px] uppercase tracking-[0.12em] font-medium text-secondary block mb-2';

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {error && (
        <div
          role="alert"
          aria-live="assertive"
          className="rounded-md border border-accent/40 bg-accent/10 px-4 py-3 text-[14px] text-ink"
        >
          {error}
        </div>
      )}

      <label className="block">
        <span className={labelClass}>{fields.dateLabel}</span>
        <input
          name="date"
          type="date"
          required
          placeholder={fields.datePlaceholder}
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className={labelClass}>{fields.ceremonyLabel}</span>
        <input
          name="ceremony"
          type="text"
          required
          placeholder={fields.ceremonyPlaceholder}
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className={labelClass}>{fields.receptionLabel}</span>
        <input
          name="reception"
          type="text"
          placeholder={fields.receptionPlaceholder}
          className={inputClass}
        />
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="block">
          <span className={labelClass}>{fields.carsCountLabel}</span>
          <select
            name="carsCount"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              —
            </option>
            <option value="1">{fields.carsCountOption1}</option>
            <option value="2">{fields.carsCountOption2}</option>
            <option value="3+">{fields.carsCountOption3}</option>
          </select>
        </label>

        <label className="block">
          <span className={labelClass}>{fields.guestsLabel}</span>
          <input
            name="guests"
            type="text"
            placeholder={fields.guestsPlaceholder}
            className={inputClass}
          />
        </label>
      </div>

      <label className="block">
        <span className={labelClass}>{fields.notesLabel}</span>
        <textarea
          name="notes"
          rows={4}
          placeholder={fields.notesPlaceholder}
          className={`${inputClass} resize-y`}
        />
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <label className="block">
          <span className={labelClass}>{fields.nameLabel}</span>
          <input
            name="name"
            type="text"
            required
            placeholder={fields.namePlaceholder}
            className={inputClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>{fields.phoneLabel}</span>
          <input
            name="phone"
            type="tel"
            required
            placeholder={fields.phonePlaceholder}
            className={inputClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>{fields.emailLabel}</span>
          <input
            name="email"
            type="email"
            placeholder={fields.emailPlaceholder}
            className={inputClass}
          />
        </label>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7 pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-[13px] uppercase tracking-[0.05em] font-medium transition-all duration-200 hover:bg-accent-hover"
          style={{color: 'var(--cream-on-dark)'}}
        >
          {fields.submit}
          <span aria-hidden="true">→</span>
        </button>
        <p className="text-[13px] text-ink/55 leading-relaxed max-w-md">
          {fields.submitNote}
        </p>
      </div>
    </form>
  );
}
