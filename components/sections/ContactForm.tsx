'use client';

import {useState, type FormEvent} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import {WHATSAPP_HREF} from '@/lib/contact';

export function ContactForm() {
  const t = useTranslations('Contatti.form');
  const locale = useLocale();
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
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...data, locale})
      });
      if (!res.ok) {
        let code = 'send';
        try {
          code = ((await res.json()) as {error?: string})?.error ?? 'send';
        } catch {}
        setError(code === 'validation' ? t('errorRequired') : t('errorSend'));
        return;
      }
      setSubmitted(true);
    } catch {
      // Rete/timeout: teniamo il form compilato e offriamo il fallback WhatsApp.
      setError(t('errorSend'));
    } finally {
      setIsSubmitting(false);
    }
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-secondary block mb-2">
            {t('fieldNameLabel')}
          </span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder={t('fieldNamePlaceholder')}
            className="w-full bg-canvas border border-[var(--border)] rounded-md px-4 py-3 text-[16px] sm:text-[15px] text-ink placeholder:text-ink/60 focus:outline-none focus:border-accent transition-colors"
          />
        </label>

        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-secondary block mb-2">
            {t('fieldPhoneLabel')}
          </span>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder={t('fieldPhonePlaceholder')}
            className="w-full bg-canvas border border-[var(--border)] rounded-md px-4 py-3 text-[16px] sm:text-[15px] text-ink placeholder:text-ink/60 focus:outline-none focus:border-accent transition-colors"
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
          className="w-full bg-canvas border border-[var(--border)] rounded-md px-4 py-3 text-[16px] sm:text-[15px] text-ink focus:outline-none focus:border-accent transition-colors appearance-none bg-no-repeat cursor-pointer"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%238B9B8E' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
            backgroundPosition: 'right 1rem center'
          }}
        >
          <option value="" disabled>
            {t('fieldTypePlaceholder')}
          </option>
          <option value={t('fieldTypeOption1')}>{t('fieldTypeOption1')}</option>
          <option value={t('fieldTypeOption2')}>{t('fieldTypeOption2')}</option>
          <option value={t('fieldTypeOption3')}>{t('fieldTypeOption3')}</option>
          <option value={t('fieldTypeOption4')}>{t('fieldTypeOption4')}</option>
          <option value={t('fieldTypeOption5')}>{t('fieldTypeOption5')}</option>
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
          className="w-full bg-canvas border border-[var(--border)] rounded-md px-4 py-3 text-[16px] sm:text-[15px] text-ink placeholder:text-ink/60 focus:outline-none focus:border-accent transition-colors resize-y"
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
        <p id="form-note" className="text-[13px] text-ink/70 leading-relaxed">
          {t('submitNote')}
        </p>
      </div>
    </form>
  );
}
