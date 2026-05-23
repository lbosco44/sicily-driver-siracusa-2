'use client';

import {useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'motion/react';

// Manifesto — paragrafo keyword-dense SEO-locked (Pattern B preserve forte)
// per la home Cat 1. Reso in chiave narrativa: titolo gigante, body in colonna
// stretta, prima lettera drop-cap. Mantiene tutte le keyword senza essere brochure.

export function Manifesto() {
  const t = useTranslations('Home.manifesto');
  const reduce = useReducedMotion();

  return (
    <section className="bg-canvas py-32 sm:py-48">
      <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
        <motion.p
          className="eyebrow mb-10"
          initial={reduce ? false : {opacity: 0, y: 8}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-10%'}}
          transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
        >
          {t('eyebrow')}
        </motion.p>

        <motion.h2
          className="font-display text-display-lg font-light text-ink max-w-[18ch] mb-14 sm:mb-16"
          style={{fontStretch: '95%'}}
          initial={reduce ? false : {opacity: 0, y: 24}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-10%'}}
          transition={{duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
        >
          {t('h2')}
        </motion.h2>

        <motion.div
          className="space-y-6 sm:space-y-7 text-[19px] sm:text-[20px] leading-[1.65] text-ink-soft"
          initial={reduce ? false : {opacity: 0, y: 16}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-10%'}}
          transition={{duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1]}}
        >
          <p className="first-letter:font-display first-letter:text-[88px] first-letter:leading-[0.85] first-letter:text-accent first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-light">
            {t('body1')}
          </p>
          <p>{t('body2')}</p>
        </motion.div>
      </div>
    </section>
  );
}
