'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import {motion, useReducedMotion} from 'motion/react';

// Listino come prosa narrativa, no tabella. Le tratte principali in 1 paragrafo
// editoriale + prezzo come dato secco a fianco.

const ROUTES = ['cataniaSiracusa', 'cataniaTaormina', 'cataniaNoto', 'pozzalloSiracusa'];

export function ListinoProse() {
  const t = useTranslations('Home.listino');
  const locale = useLocale();
  const reduce = useReducedMotion();

  return (
    <section className="bg-canvas py-32 sm:py-40">
      <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
        <motion.div
          className="mb-16 sm:mb-20"
          initial={reduce ? false : {opacity: 0, y: 24}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-10%'}}
          transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}}
        >
          <h2
            className="font-display text-display-md font-light text-ink"
            style={{fontStretch: '95%'}}
          >
            {t('h2')}
          </h2>
        </motion.div>

        <motion.div
          className="space-y-3 sm:space-y-2"
          initial={reduce ? false : {opacity: 0, y: 16}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-10%'}}
          transition={{duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
        >
          {ROUTES.map((r, i) => (
            <div
              key={r}
              className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-y-2 gap-x-12 py-5 sm:py-7 border-b border-[var(--border-strong)] last:border-b-0"
            >
              <p className="font-display text-[24px] sm:text-[28px] lg:text-[32px] font-light text-ink leading-[1.2] max-w-[36ch]">
                {t(`${r}Label`)}
              </p>
              <p className="font-display text-[22px] sm:text-[26px] font-medium text-accent tabular-nums whitespace-nowrap sm:text-right sm:self-baseline">
                {t(`${r}Price`)}
              </p>
              {/* Note micro sotto */}
              {(() => {
                const note = t(`${r}Note`);
                return note ? (
                  <p className="col-span-full -mt-1 text-[14px] text-ink/55 leading-relaxed max-w-[58ch]">
                    {note}
                  </p>
                ) : null;
              })()}
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-baseline"
          initial={reduce ? false : {opacity: 0, y: 16}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-10%'}}
          transition={{duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1]}}
        >
          <p className="font-display italic text-[18px] sm:text-[20px] font-light text-ink-soft leading-[1.55] max-w-[58ch]">
            {t('disclaimer')}
          </p>
          <Link
            href={`/${locale}/contatti`}
            className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-medium text-primary border-b border-accent pb-1 hover:border-accent-hover transition-colors self-start"
          >
            {t('cta')}
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
