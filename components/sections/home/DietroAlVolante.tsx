'use client';

import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'motion/react';

// Dietro al volante — foto larga + 3 righe narrative. NO bio card.

export function DietroAlVolante() {
  const t = useTranslations('Home.dietro');
  const reduce = useReducedMotion();

  return (
    <section className="bg-canvas py-32 sm:py-40">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Foto larga */}
          <motion.figure
            className="lg:col-span-7 relative aspect-[5/4] sm:aspect-[6/5] overflow-hidden grain"
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

          {/* 3 righe narrative */}
          <motion.div
            className="lg:col-span-5"
            initial={reduce ? false : {opacity: 0, y: 24}}
            whileInView={reduce ? undefined : {opacity: 1, y: 0}}
            viewport={{once: true, margin: '-10%'}}
            transition={{duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
          >
            <p className="eyebrow mb-7">{t('eyebrow')}</p>
            <h2
              className="font-display text-display-md font-light text-ink mb-8"
              style={{fontStretch: '95%'}}
            >
              {t('h2')}
            </h2>
            <div className="space-y-5 text-[18px] sm:text-[19px] leading-[1.65] text-ink-soft max-w-[48ch]">
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
