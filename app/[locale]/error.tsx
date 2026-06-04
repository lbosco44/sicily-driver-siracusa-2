'use client';

import {useEffect} from 'react';

// Error boundary localizzato: cattura gli errori runtime delle pagine
// mantenendo navbar/footer (a differenza di global-error che rimpiazza tutto).
export default function Error({
  error,
  reset
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error('[page error]', error);
  }, [error]);

  return (
    <main className="min-h-[68vh] flex items-center justify-center bg-canvas px-6 py-28 sm:py-36">
      <div className="text-center max-w-[44ch]">
        <h1
          className="font-display text-display-sm font-light text-ink"
          style={{fontStretch: '95%'}}
        >
          Qualcosa è andato storto.
        </h1>
        <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.6] text-ink-soft">
          Si è verificato un errore imprevisto. Riprova tra un istante.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-3 mt-10 rounded-full bg-accent px-8 py-4 text-[13px] uppercase tracking-[0.08em] font-medium text-cream-on-dark hover:bg-accent-hover transition-colors"
        >
          Riprova
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </main>
  );
}
