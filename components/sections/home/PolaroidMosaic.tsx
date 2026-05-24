'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'motion/react';

// PolaroidMosaic — 6 foto in stile diario polaroid, leggermente ruotate
// e disposte in modo organico. Hover lift sottile. No griglia rigida.

const PLACES = [
  {key: 'ortigia',   image: '/images/home/polaroid-ortigia.png',   rotate: -2.5, offset: false},
  {key: 'noto',      image: '/images/home/polaroid-noto.jpeg',      rotate: 1.5,  offset: true},
  {key: 'marzamemi', image: '/images/home/polaroid-marzamemi.jpeg', rotate: -1.2, offset: false},
  {key: 'ragusa',    image: '/images/home/polaroid-ragusa.png',      rotate: 2.2,  offset: true},
  {key: 'etna',      image: '/images/home/polaroid-etna.jpeg',       rotate: -1.8, offset: false},
  {key: 'taormina',  image: '/images/home/polaroid-taormina.png',   rotate: 1.3,  offset: true}
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

        {/* Griglia polaroid: 1 col su mobile (perfetto), 3 col uniformi su desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10">
          {PLACES.map((p, i) => (
            <motion.figure
              key={p.key}
              className="polaroid grain"
              style={{
                transform: reduce ? 'none' : `rotate(${p.rotate}deg)`,
                marginTop: p.offset && !reduce ? '2.5rem' : '0'
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
                  sizes="(max-width: 640px) 100vw, 33vw"
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
