'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'motion/react';

// Interni — sezione discreta sotto-screen che mostra i dettagli dell'auto
// (bottiglia d'acqua, sedile in pelle, tablet wifi). Niente big "FLOTTA",
// niente specifiche tecniche. Solo 3 dettagli che fanno sentire la cura.

const DETAILS = [
  {
    key: 'water',
    image: '/images/home/interni-acqua.png'
  },
  {
    key: 'leather',
    image: '/images/home/interni-sedile.png'
  },
  {
    key: 'screen',
    image: '/images/home/interni-tablet.png'
  }
];

export function Interni() {
  const t = useTranslations('Home.interni');
  const reduce = useReducedMotion();

  return (
    <section className="bg-canvas-deep py-32 sm:py-40">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 mb-16 sm:mb-20">
          <motion.div
            initial={reduce ? false : {opacity: 0, y: 24}}
            whileInView={reduce ? undefined : {opacity: 1, y: 0}}
            viewport={{once: true, margin: '-10%'}}
            transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}}
          >
            <p className="eyebrow mb-7">{t('eyebrow')}</p>
            <h2
              className="font-display text-display-md font-light text-ink"
              style={{fontStretch: '95%'}}
            >
              {t('h2')}
            </h2>
          </motion.div>

          <motion.p
            className="text-[18px] sm:text-[19px] leading-[1.65] text-ink-soft max-w-[42ch] lg:self-end"
            initial={reduce ? false : {opacity: 0, y: 24}}
            whileInView={reduce ? undefined : {opacity: 1, y: 0}}
            viewport={{once: true, margin: '-10%'}}
            transition={{duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1]}}
          >
            {t('body')}
          </motion.p>
        </div>

        {/* 3 foto dettaglio in griglia asimmetrica leggera */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {DETAILS.map((d, i) => {
            // Foto 1: larga-sinistra (8 col); 2: stretta-destra (4 col); 3: full-width sotto
            const span =
              i === 0
                ? 'col-span-12 sm:col-span-8 aspect-[5/4]'
                : i === 1
                  ? 'col-span-12 sm:col-span-4 aspect-[4/5]'
                  : 'col-span-12 aspect-[16/8] sm:aspect-[16/6]';
            return (
              <motion.figure
                key={d.key}
                className={`relative overflow-hidden rounded-sm ${span} grain`}
                initial={reduce ? false : {opacity: 0, y: 32}}
                whileInView={reduce ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true, margin: '-10%'}}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <Image
                  src={d.image}
                  alt={t(`${d.key}Alt`)}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                  style={{filter: 'saturate(0.85) brightness(0.96) contrast(1.05)'}}
                />
              </motion.figure>
            );
          })}
        </div>

        <motion.p
          className="mt-12 sm:mt-16 max-w-[58ch] font-display italic text-[20px] sm:text-[22px] font-light text-ink-soft leading-[1.5]"
          initial={reduce ? false : {opacity: 0, y: 16}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-10%'}}
          transition={{duration: 0.9, ease: [0.16, 1, 0.3, 1]}}
        >
          {t('caption')}
        </motion.p>
      </div>
    </section>
  );
}
