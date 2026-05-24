'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'motion/react';

// PolaroidMosaic — 6 foto in stile diario polaroid, leggermente ruotate
// e disposte in modo organico. Hover lift sottile. No griglia rigida.

const PLACES = [
  {
    key: 'ortigia',
    image:
      'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?w=900&q=80&auto=format&fm=webp',
    rotate: -2.5,
    span: 'sm:col-span-5'
  },
  {
    key: 'noto',
    image:
      'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=900&q=80&auto=format&fm=webp',
    rotate: 1.5,
    span: 'sm:col-span-4'
  },
  {
    key: 'marzamemi',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format&fm=webp',
    rotate: -1.2,
    span: 'sm:col-span-3'
  },
  {
    key: 'ragusa',
    image:
      'https://images.unsplash.com/photo-1581922814484-0b48460b7010?w=900&q=80&auto=format&fm=webp',
    rotate: 2.2,
    span: 'sm:col-span-3'
  },
  {
    key: 'etna',
    image:
      'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=900&q=80&auto=format&fm=webp',
    rotate: -1.8,
    span: 'sm:col-span-4'
  },
  {
    key: 'taormina',
    image:
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=80&auto=format&fm=webp',
    rotate: 1.3,
    span: 'sm:col-span-5'
  }
];

export function PolaroidMosaic() {
  const t = useTranslations('Home.mosaico');
  const reduce = useReducedMotion();

  return (
    <section className="bg-canvas py-32 sm:py-40">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        <motion.div
          className="max-w-3xl mb-16 sm:mb-24"
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

        {/* Griglia polaroid asimmetrica: 2 righe, ognuna 12-col con span variabili */}
        <div className="grid grid-cols-12 gap-y-12 sm:gap-y-16 gap-x-4 sm:gap-x-8">
          {PLACES.map((p, i) => (
            <motion.figure
              key={p.key}
              className={`col-span-12 ${p.span} polaroid grain`}
              style={{
                transform: reduce ? 'none' : `rotate(${p.rotate}deg)`,
                marginTop: i % 2 === 1 ? '2rem' : '0'
              }}
              initial={reduce ? false : {opacity: 0, y: 36, rotate: 0}}
              whileInView={
                reduce
                  ? undefined
                  : {opacity: 1, y: 0, rotate: p.rotate}
              }
              viewport={{once: true, margin: '-10%'}}
              transition={{
                duration: 1.1,
                delay: (i % 3) * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={p.image}
                  alt={t(`${p.key}Alt`)}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                  style={{filter: 'saturate(0.82) brightness(0.96) contrast(1.06)'}}
                />
              </div>
              <figcaption className="absolute bottom-0 inset-x-0 px-4 pb-3 text-center font-display italic text-[15px] text-ink/85">
                {t(p.key)}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
