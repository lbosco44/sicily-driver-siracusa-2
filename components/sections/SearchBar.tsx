'use client';

import {useTranslations} from 'next-intl';
import {useState} from 'react';

export function SearchBar() {
  const t = useTranslations('Home.hero');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [pax, setPax] = useState('2');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = `Salve, vorrei un preventivo per:\n• Da: ${from || '—'}\n• A: ${to || '—'}\n• Data: ${date || '—'}\n• Passeggeri: ${pax}`;
    const url = `https://wa.me/393756413379?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-canvas/95 backdrop-blur-md
        border border-[var(--border)]/80
        rounded-lg
        p-2 sm:p-2.5
        grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_auto_auto] gap-2 sm:gap-1
        shadow-[var(--shadow-lg)]
      "
    >
      <Field
        label={t('searchFromLabel')}
        placeholder={t('searchFromPlaceholder')}
        value={from}
        onChange={setFrom}
      />
      <div className="hidden sm:block w-px bg-[var(--border)] self-stretch my-2" />
      <Field
        label={t('searchToLabel')}
        placeholder={t('searchToPlaceholder')}
        value={to}
        onChange={setTo}
      />
      <div className="hidden sm:block w-px bg-[var(--border)] self-stretch my-2" />
      <Field
        label={t('searchDateLabel')}
        placeholder={t('searchDatePlaceholder')}
        value={date}
        onChange={setDate}
        type="date"
      />
      <div className="hidden sm:block w-px bg-[var(--border)] self-stretch my-2" />
      <div className="hidden sm:flex flex-col px-3 py-1.5 min-w-[78px]">
        <label className="text-[10px] uppercase tracking-[0.12em] font-medium text-ink/55">
          {t('searchPaxLabel')}
        </label>
        <select
          value={pax}
          onChange={(e) => setPax(e.target.value)}
          className="text-[15px] font-medium bg-transparent text-ink outline-none cursor-pointer"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="
          inline-flex items-center justify-center gap-2
          rounded-full bg-accent text-cream-on-dark
          px-6 py-3.5
          text-[13px] uppercase tracking-[0.05em] font-medium
          transition-all duration-200 ease-out
          hover:bg-accent-hover
          focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-3
        "
        style={{color: 'var(--cream-on-dark)'}}
      >
        {t('searchCta')}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = 'text'
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div className="flex flex-col px-3 py-1.5">
      <label className="text-[10px] uppercase tracking-[0.12em] font-medium text-ink/55">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="text-[15px] font-medium bg-transparent text-ink placeholder-ink/40 outline-none"
      />
    </div>
  );
}
