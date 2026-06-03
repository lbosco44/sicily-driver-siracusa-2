'use client';

import {useState, type FormEvent} from 'react';
import {useTranslations} from 'next-intl';

// Micro-form rapido in hero: "Da → A" → apre WhatsApp con messaggio precompilato.
// Lead-gen NCC: cattura l'intento al primo schermo senza far scrollare fino a
// /contatti. EXPERIMENTAL (27/05/2026): da validare col cliente, rimovibile.
// Numero WhatsApp: 393756413379 (lib/contact PHONE).

const WA_NUMBER = '393756413379';

export function HeroQuickQuote() {
  const t = useTranslations('Home.heroQuote');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  function openWhatsApp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = from.trim();
    const dest = to.trim();
    const msg =
      f && dest
        ? t('waMessage', {from: f, to: dest})
        : t('waMessageGeneric');
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <form
      onSubmit={openWhatsApp}
      className="mx-auto w-full max-w-[560px] flex flex-col sm:flex-row items-stretch gap-2.5 rounded-2xl sm:rounded-full bg-cream-on-dark/12 backdrop-blur-md border border-cream-on-dark/25 p-2.5"
    >
      <div className="flex flex-1 items-center gap-2">
        <input
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          type="text"
          aria-label={t('fromLabel')}
          placeholder={t('fromPlaceholder')}
          className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-[14px] text-cream-on-dark placeholder:text-cream-on-dark/55 focus:outline-none"
        />
        <span aria-hidden="true" className="text-cream-on-dark/50 shrink-0">
          →
        </span>
        <input
          value={to}
          onChange={(e) => setTo(e.target.value)}
          type="text"
          aria-label={t('toLabel')}
          placeholder={t('toPlaceholder')}
          className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-[14px] text-cream-on-dark placeholder:text-cream-on-dark/55 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-[13px] uppercase tracking-[0.06em] font-medium whitespace-nowrap transition-all duration-200 hover:bg-accent-hover shrink-0"
        style={{color: 'var(--cream-on-dark)'}}
      >
        <svg
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="shrink-0"
        >
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.045z"/>
        </svg>
        {t('cta')}
      </button>
    </form>
  );
}
