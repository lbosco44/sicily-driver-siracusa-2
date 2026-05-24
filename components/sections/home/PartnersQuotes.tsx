'use client';

import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'motion/react';

// Partners come citazioni serif italic grandi, ognuno con foto a fianco.
// Niente card. Niente "01 02 03". Solo voce.

const PARTNERS = [
  {
    key: 'puravida',
    image:
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1400&q=80&auto=format&fm=webp',
    side: 'right' as const
  },
  {
    key: 'burgio',
    image:
      'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=1400&q=80&auto=format&fm=webp',
    side: 'left' as const
  },
  {
    key: 'benanti',
    image:
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1400&q=80&auto=format&fm=webp',
    side: 'right' as const
  },
  {
    key: 'palmeri',
    image:
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1400&q=80&auto=format&fm=webp',
    side: 'left' as const
  }
];

export function PartnersQuotes() {
  const t = useTranslations('Home.partners');
  const reduce = useReducedMotion();

  return (
    <section className="bg-canvas-warm py-32 sm:py-40">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        <motion.div
          className="max-w-3xl mb-20 sm:mb-28"
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
          <p className="mt-7 max-w-[52ch] text-[17px] sm:text-[18px] leading-[1.65] text-ink-soft">
            {t('subhead')}
          </p>
        </motion.div>

        <div className="space-y-32 sm:space-y-40">
          {PARTNERS.map((p, i) => {
            const isRight = p.side === 'right';
            return (
              <motion.article
                key={p.key}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                initial={reduce ? false : {opacity: 0}}
                whileInView={reduce ? undefined : {opacity: 1}}
                viewport={{once: true, margin: '-12%'}}
                transition={{duration: 1, ease: [0.16, 1, 0.3, 1]}}
              >
                {/* Quote */}
                <motion.div
                  className={`lg:col-span-7 ${
                    isRight ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  initial={reduce ? false : {opacity: 0, y: 24}}
                  whileInView={reduce ? undefined : {opacity: 1, y: 0}}
                  viewport={{once: true, margin: '-12%'}}
                  transition={{
                    duration: 1,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <p className="text-[12px] uppercase tracking-[0.22em] font-medium text-secondary mb-7">
                    {t(`${p.key}Place`)}
                  </p>
                  <blockquote
                    className="font-display text-display-sm font-light text-ink leading-[1.1] max-w-[24ch]"
                    style={{fontStretch: '95%'}}
                  >
                    <span aria-hidden="true" className="text-accent-decorative">
                      “
                    </span>
                    {t(`${p.key}Quote`)}
                    <span aria-hidden="true" className="text-accent-decorative">
                      ”
                    </span>
                  </blockquote>
                  <p className="mt-7 text-[16px] leading-[1.65] text-ink-soft max-w-[50ch]">
                    {t(`${p.key}Body`)}
                  </p>
                  <p className="mt-7 text-[12px] uppercase tracking-[0.2em] font-medium text-ink/60">
                    — {t(`${p.key}Name`)}
                  </p>
                </motion.div>

                {/* Foto */}
                <motion.figure
                  className={`relative lg:col-span-5 aspect-[3/4] overflow-hidden grain ${
                    isRight ? 'lg:order-2' : 'lg:order-1'
                  }`}
                  initial={
                    reduce
                      ? false
                      : {opacity: 0, x: isRight ? 40 : -40}
                  }
                  whileInView={
                    reduce ? undefined : {opacity: 1, x: 0}
                  }
                  viewport={{once: true, margin: '-12%'}}
                  transition={{
                    duration: 1.1,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <Image
                    src={p.image}
                    alt={t(`${p.key}Alt`)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    loading="lazy"
                    style={{
                      filter: 'saturate(0.85) brightness(0.94) contrast(1.06)'
                    }}
                  />
                </motion.figure>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="mt-20 sm:mt-24 pt-8 border-t border-[var(--border-strong)]"
          initial={reduce ? false : {opacity: 0, y: 16}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-10%'}}
          transition={{duration: 0.7, ease: [0.16, 1, 0.3, 1]}}
        >
          <Link
            href="/partner"
            className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-medium text-primary border-b border-accent pb-1 hover:border-accent-hover transition-colors"
          >
            {t('cta')}
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
