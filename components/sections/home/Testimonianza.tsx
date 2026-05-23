'use client';

import {useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'motion/react';

// Una sola testimonianza, grande, centrata. No switcher 01/02/03.
// Pattern reference: Insider Madeira / Diamond Rose — quote dominant.

export function Testimonianza() {
  const t = useTranslations('Home.testimonianza');
  const reduce = useReducedMotion();

  return (
    <section className="bg-canvas-warm py-40 sm:py-56">
      <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
        <motion.figure
          initial={reduce ? false : {opacity: 0, y: 32}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-15%'}}
          transition={{duration: 1, ease: [0.16, 1, 0.3, 1]}}
        >
          <p className="eyebrow text-center mb-10">{t('eyebrow')}</p>
          <blockquote
            className="font-display text-display-md font-light text-ink text-center leading-[1.15] max-w-[26ch] mx-auto"
            style={{fontStretch: '95%'}}
          >
            <span aria-hidden="true" className="text-accent-decorative">
              “
            </span>
            {t('quote')}
            <span aria-hidden="true" className="text-accent-decorative">
              ”
            </span>
          </blockquote>
          <figcaption className="mt-12 text-center text-[13px] uppercase tracking-[0.2em] font-medium text-ink/60">
            — {t('author')} · {t('place')}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
