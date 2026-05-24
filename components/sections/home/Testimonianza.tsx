'use client';

import {useRef} from 'react';
import {useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'motion/react';
import {GoogleReviewsBadge} from '@/components/ui/GoogleReviewsBadge';

// Testimonianza — scroll orizzontale di N recensioni (snap, mouse drag su
// desktop, swipe su mobile). Frecce navigazione discrete a destra del titolo.
// Pattern: reference Diamond Rose + Insider Madeira — niente carousel
// "industriale", solo un binario di card grandi che scorre orizzontalmente.

type Review = {quote: string; author: string; place: string};

export function Testimonianza() {
  const t = useTranslations('Home.testimonianze');
  const reduce = useReducedMotion();
  const scrollerRef = useRef<HTMLUListElement>(null);

  const items = t.raw('items') as Review[];

  const scrollBy = (dir: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('li');
    const step = card ? card.offsetWidth + 24 : 480;
    el.scrollBy({left: dir === 'right' ? step : -step, behavior: 'smooth'});
  };

  return (
    <section className="bg-canvas-warm py-32 sm:py-44 overflow-hidden">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 mb-14 sm:mb-16">
        <motion.div
          initial={reduce ? false : {opacity: 0, y: 20}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-12%'}}
          transition={{duration: 0.9, ease: [0.16, 1, 0.3, 1]}}
          className="flex items-end justify-between gap-8"
        >
          <div>
            <p className="eyebrow mb-7">{t('eyebrow')}</p>
            <h2
              className="font-display text-display-md font-light text-ink max-w-[18ch] leading-[1.05]"
              style={{fontStretch: '95%'}}
            >
              {t('h2Pre')}{' '}
              <span className="italic text-accent">{t('h2Accent')}</span>
            </h2>
            {/* Badge Google Reviews — visibile sotto il titolo, mobile + desktop */}
            <div className="mt-7">
              <GoogleReviewsBadge />
            </div>
          </div>

          {/* Frecce nav */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              type="button"
              aria-label="Recensione precedente"
              onClick={() => scrollBy('left')}
              className="w-12 h-12 rounded-full border border-ink/25 text-ink hover:bg-ink hover:text-cream-on-dark transition-colors flex items-center justify-center"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              aria-label="Recensione successiva"
              onClick={() => scrollBy('right')}
              className="w-12 h-12 rounded-full border border-ink/25 text-ink hover:bg-ink hover:text-cream-on-dark transition-colors flex items-center justify-center"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroller orizzontale */}
      <div className="relative">
        <ul
          ref={scrollerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 sm:px-10 pb-4"
          style={{
            scrollPaddingLeft: '24px',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(31, 26, 20, 0.25) transparent'
          }}
        >
          {/* Spazio iniziale per allineare la prima card al container */}
          <li
            aria-hidden="true"
            className="shrink-0"
            style={{width: 'max(calc((100vw - var(--container-editorial)) / 2), 0px)'}}
          />

          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={reduce ? false : {opacity: 0, y: 20}}
              whileInView={reduce ? undefined : {opacity: 1, y: 0}}
              viewport={{once: true, margin: '-10%', amount: 0.2}}
              transition={{
                duration: 0.8,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="snap-start shrink-0 bg-canvas border border-[var(--border)] px-8 sm:px-10 py-12 sm:py-14 grid grid-rows-[1fr_auto]"
              style={{
                width: 'min(420px, 84vw)',
                minHeight: 360
              }}
            >
              <blockquote
                className="font-display text-[20px] sm:text-[22px] font-light leading-[1.5] text-ink/90"
                style={{fontStretch: '98%'}}
              >
                <span
                  aria-hidden="true"
                  className="text-accent-decorative text-3xl leading-none mr-1"
                >
                  &ldquo;
                </span>
                {item.quote}
                <span
                  aria-hidden="true"
                  className="text-accent-decorative text-3xl leading-none ml-1"
                >
                  &rdquo;
                </span>
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-[var(--border)] text-[12px] uppercase tracking-[0.18em] font-medium text-ink/60">
                {item.author} · {item.place}
              </figcaption>
            </motion.li>
          ))}

          {/* Spazio finale per simmetria */}
          <li
            aria-hidden="true"
            className="shrink-0"
            style={{width: 'max(calc((100vw - var(--container-editorial)) / 2), 0px)'}}
          />
        </ul>
      </div>
    </section>
  );
}
