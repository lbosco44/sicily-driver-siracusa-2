'use client';

import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'motion/react';

// Dietro al volante — rielaborato 04/06/2026.
// Vecchio: griglia 7/5 con la foto panoramica (16:9) forzata in una cella
// quasi quadrata (aspect-6/5) a sinistra e una colonna testo molto piu' alta
// a destra; con items-center la foto "galleggiava" al centro mentre l'h2
// (7 righe nella colonna stretta) usciva sopra e il body sotto la foto.
// Cliente: "layout fatto male, immagine quadrata e testo sopra/sotto".
//
// Nuovo: titolo grande a PIENA LARGHEZZA in alto (si spezza in ~2 righe
// invece di 7), poi sotto la foto panoramica valorizzata wide accanto alle
// 3 righe narrative, allineate in alto (items-start). Copy invariato.

export function DietroAlVolante() {
  const t = useTranslations('Home.dietro');
  const reduce = useReducedMotion();

  return (
    <section className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        {/* Titolo a piena larghezza: niente piu' colonna stretta che lo
            spezzava in 7 righe. */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={reduce ? false : {opacity: 0, y: 24}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-10%'}}
          transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}}
        >
          <p className="eyebrow mb-7">{t('eyebrow')}</p>
          <h2
            className="font-display text-display-sm font-light text-ink max-w-[34ch] text-balance"
            style={{fontStretch: '95%'}}
          >
            {t('h2')}
          </h2>
        </motion.div>

        {/* Foto wide + 3 righe narrative, allineate in alto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.figure
            className="lg:col-span-7 relative aspect-[16/10] overflow-hidden grain"
            initial={reduce ? false : {opacity: 0, x: -36}}
            whileInView={reduce ? undefined : {opacity: 1, x: 0}}
            viewport={{once: true, margin: '-10%'}}
            transition={{duration: 1.1, ease: [0.16, 1, 0.3, 1]}}
          >
            <Image
              src="/images/home/driver-2.jpeg"
              alt={t('alt')}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
              loading="lazy"
              style={{filter: 'saturate(0.85) brightness(0.96) contrast(1.05)'}}
            />
          </motion.figure>

          <motion.div
            className="lg:col-span-5 lg:pt-2"
            initial={reduce ? false : {opacity: 0, y: 24}}
            whileInView={reduce ? undefined : {opacity: 1, y: 0}}
            viewport={{once: true, margin: '-10%'}}
            transition={{duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
          >
            <div className="space-y-5 text-[18px] sm:text-[19px] leading-[1.65] text-ink-soft max-w-[46ch]">
              <p>{t('body1')}</p>
              <p>{t('body2')}</p>
              <p>{t('body3')}</p>
            </div>
            <Link
              href="/chi-siamo"
              className="inline-flex items-center gap-3 mt-10 text-[12px] uppercase tracking-[0.2em] font-medium text-primary border-b border-accent pb-1 hover:border-accent-hover transition-colors"
            >
              {t('cta')}
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
