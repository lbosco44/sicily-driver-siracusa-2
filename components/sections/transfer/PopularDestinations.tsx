'use client';

import {useTranslations, useLocale} from 'next-intl';

// Destinazioni più richieste — chip cliccabili con "pin". Al click:
// 1) precompila il campo "Arrivo" del TransferForm (via CustomEvent),
// 2) scrolla al modulo (#organizza-transfer).
// Niente mappa geografica (asset pesante): stesso risultato funzionale.
// Il TransferForm ascolta l'evento 'sds-transfer-prefill'.

export const TRANSFER_PREFILL_EVENT = 'sds-transfer-prefill';

const DESTINATIONS = [
  {it: 'Aeroporto di Catania', en: 'Catania Airport'},
  {it: 'Siracusa', en: 'Syracuse'},
  {it: 'Ortigia', en: 'Ortigia'},
  {it: 'Noto', en: 'Noto'},
  {it: 'Taormina', en: 'Taormina'},
  {it: 'Modica', en: 'Modica'},
  {it: 'Ragusa Ibla', en: 'Ragusa Ibla'},
  {it: 'Marzamemi', en: 'Marzamemi'},
  {it: 'Etna', en: 'Etna'}
] as const;

export function PopularDestinations() {
  const t = useTranslations('TransferForm');
  const locale = useLocale();

  function pick(dropoff: string) {
    window.dispatchEvent(
      new CustomEvent(TRANSFER_PREFILL_EVENT, {detail: {dropoff}})
    );
    document
      .getElementById('organizza-transfer')
      ?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  return (
    <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
      <div className="max-w-2xl mb-10 sm:mb-12">
        <h2
          className="font-display text-display-sm sm:text-display-md font-light text-ink leading-[1.1] text-balance"
          style={{fontStretch: '95%'}}
        >
          {t('destTitle')}
        </h2>
        <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.6] text-ink-soft">
          {t('destSubtitle')}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 sm:gap-4">
        {DESTINATIONS.map((d) => {
          const label = locale === 'en' ? d.en : d.it;
          return (
            <button
              key={d.it}
              type="button"
              onClick={() => pick(label)}
              className="group inline-flex items-center gap-2.5 rounded-full border-2 border-[var(--border-strong)] hover:border-accent bg-canvas hover:bg-accent px-5 py-3 text-[13px] sm:text-[14px] font-medium text-ink hover:text-cream-on-dark transition-all duration-200"
            >
              <svg
                aria-hidden="true"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent group-hover:text-cream-on-dark transition-colors"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
