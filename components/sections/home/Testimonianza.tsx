'use client';

import {useLocale, useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'motion/react';
import {GoogleReviewsBadge} from '@/components/ui/GoogleReviewsBadge';
import {isItalianReview} from '@/lib/reviewLang';

// Testimonianza — marquee infinito di recensioni, stesso pattern di PartnersBar.
// Auto-scroll: doppia copia + CSS keyframes reviews-marquee (55s).
// Pause su hover (CSS .animate-reviews-marquee:hover).
// Ogni card ha 5 stelle dorate + quote + autore/luogo.
// Reduced-motion: animazione CSS disabilitata automaticamente.

type Review = {quote: string; author: string; place: string};

function Stars() {
  return (
    <div className="flex gap-0.5 mb-5" aria-hidden="true">
      {Array.from({length: 5}).map((_, i) => (
        <svg
          key={i}
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-accent-decorative"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonianza() {
  const t = useTranslations('Home.testimonianze');
  const locale = useLocale();
  const reduce = useReducedMotion();
  // Recensioni Google reali: mostriamo solo quelle nella lingua della pagina
  // (IT → recensioni in italiano, EN → recensioni in inglese). I testi non
  // vengono tradotti: sono parole originali dei clienti.
  const allReviews = t.raw('items') as Review[];
  const items = allReviews.filter((r) =>
    locale === 'it' ? isItalianReview(r.author) : !isItalianReview(r.author)
  );

  // Doppia copia identica → loop seamless (la seconda copia occupa
  // la posizione iniziale quando la prima esce dal viewport).
  const allItems = [...items, ...items];

  return (
    <section className="bg-canvas-warm py-20 sm:py-28 overflow-hidden">
      {/* Header */}
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 mb-14 sm:mb-16">
        <motion.div
          initial={reduce ? false : {opacity: 0, y: 20}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-12%'}}
          transition={{duration: 0.9, ease: [0.16, 1, 0.3, 1]}}
        >
          <p className="eyebrow mb-7">{t('eyebrow')}</p>
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] leading-[1.05]"
            style={{fontStretch: '95%'}}
          >
            {t('h2Pre')}{' '}
            <span className="italic text-accent">{t('h2Accent')}</span>
          </h2>
          <div className="mt-7">
            <GoogleReviewsBadge />
          </div>
        </motion.div>
      </div>

      {/* Marquee su desktop, carosello swipeabile su mobile.
          Mobile (< sm): overflow-x-auto + snap → l'utente scorre a mano
          (l'auto-scroll è spento via CSS, così funziona anche con
          "riduci movimento" attivo). Desktop: marquee automatico. */}
      <div
        className="reviews-viewport scrollbar-hidden relative w-full overflow-x-auto sm:overflow-hidden snap-x"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
        }}
      >
        <ul
          className="flex gap-6 sm:gap-8 w-max items-stretch animate-reviews-marquee"
          aria-label={t('eyebrow')}
        >
          {allItems.map((item, i) => {
            const isClone = i >= items.length;
            return (
              <li
                key={i}
                aria-hidden={isClone || undefined}
                className={`shrink-0 snap-start bg-canvas border border-[var(--border)] px-8 sm:px-10 py-10 sm:py-12 flex flex-col ${
                  isClone ? 'max-sm:hidden' : ''
                }`}
                style={{width: 'min(380px, 82vw)', minHeight: 280}}
              >
                <Stars />
                <blockquote
                  className="font-display text-[18px] sm:text-[20px] font-light leading-[1.55] text-ink/90 flex-1"
                  style={{fontStretch: '98%'}}
                >
                  <span
                    aria-hidden="true"
                    className="text-accent-decorative text-2xl leading-none mr-1"
                  >
                    &ldquo;
                  </span>
                  {item.quote}
                  <span
                    aria-hidden="true"
                    className="text-accent-decorative text-2xl leading-none ml-1"
                  >
                    &rdquo;
                  </span>
                </blockquote>
                <figcaption className="mt-7 pt-5 border-t border-[var(--border)] text-[11px] uppercase tracking-[0.18em] font-medium text-ink/55">
                  {item.author} · {item.place}
                </figcaption>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
