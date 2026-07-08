'use client';

import {useEffect, useRef, useState, useTransition} from 'react';
import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {Globe, Check, ChevronDown} from 'lucide-react';

// Selettore lingua per MOBILE (header): pulsante compatto che apre a tendina
// i 3 idiomi con tap grandi (≥48px). Su desktop resta l'inline LanguageSwitcher.
// Endonimi (nome della lingua nella sua lingua), standard per i language picker.
const LOCALES = [
  {code: 'it', name: 'Italiano'},
  {code: 'en', name: 'English'},
  {code: 'fr', name: 'Français'}
] as const;

export function MobileLangMenu({label}: {label: string}) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  // Chiudi su click fuori + ESC.
  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const switchLocale = (next: string) => {
    setOpen(false);
    if (next === locale || isPending) return;
    startTransition(() => {
      // pathname è la rotta interna; next-intl mappa allo slug localizzato.
      router.replace(pathname, {locale: next as 'it' | 'en' | 'fr'});
    });
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-strong)] h-11 pl-3 pr-2.5 text-ink hover:border-accent transition-colors"
      >
        <Globe aria-hidden="true" className="size-4 shrink-0 text-ink/70" strokeWidth={2} />
        <span className="text-[13px] font-medium uppercase tracking-[0.06em]">
          {locale}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`size-3.5 text-ink/50 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          strokeWidth={2.5}
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={label}
          className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-[var(--border-strong)] bg-canvas shadow-[0_20px_50px_-15px_rgba(31,26,20,0.4)] overflow-hidden z-50"
        >
          {LOCALES.map((l) => {
            const active = l.code === locale;
            return (
              <button
                key={l.code}
                type="button"
                role="menuitem"
                aria-current={active ? 'true' : undefined}
                onClick={() => switchLocale(l.code)}
                className={`w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors ${
                  active
                    ? 'bg-accent/10 text-accent-strong'
                    : 'text-ink hover:bg-ink/[0.04]'
                }`}
              >
                <span className="flex items-baseline gap-2.5">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.08em] w-6">
                    {l.code}
                  </span>
                  <span className="text-[15px]">{l.name}</span>
                </span>
                {active && <Check aria-hidden="true" className="size-4 shrink-0" strokeWidth={2.5} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
