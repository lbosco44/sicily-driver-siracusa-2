'use client';

import {useRef} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useTranslations, useLocale} from 'next-intl';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue
} from 'motion/react';
import type {TourContent} from '@/lib/tours';
import {HERO_BLUR, HERO_SIZES} from '@/lib/blur';

// TourDetailEtnaDark — variante mood dark/cinematic dedicata all'Etna.
// Mood: pietra lavica, notte sul vulcano, fuoco discreto.
// Palette: nero #0A0908 + cream + accent rosso lava #C0392B
// Pattern: sticky scroll cinematic per le tappe (fa salire sull'Etna)
// Filter: foto più contrastate, scure, drammatiche.
//
// Pensato come "uno dei pattern unici" — gli altri tour resteranno magazine.

const ETNA_BLACK = '#0A0908';
const ETNA_BLACK_SOFT = '#141210';
const LAVA_RED = '#C0392B';
const LAVA_GLOW = '#E84B36';

export function TourDetailEtnaDark({tour}: {tour: TourContent}) {
  const tCommon = useTranslations('NccPage');
  const locale = useLocale();

  const stagesRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: stagesRef,
    offset: ['start start', 'end end']
  });

  const N = tour.stages.length;

  return (
    <div style={{backgroundColor: ETNA_BLACK, color: 'var(--cream-on-dark)'}}>
      {/* 01 — HERO cinematic ultra-dark */}
      <section className="hero-stage relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={tour.heroImage}
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes={HERO_SIZES}
            quality={85}
            placeholder="blur"
            blurDataURL={HERO_BLUR}
            className="object-cover"
            style={{filter: 'saturate(0.7) brightness(0.55) contrast(1.18)'}}
          />
          {/* Doppio overlay per drama */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 70% 30%, rgba(232, 75, 54, 0.18) 0%, transparent 50%)'
            }}
          />
        </div>

        <div className="relative h-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex items-end pb-16 sm:pb-20">
          <div className="max-w-[44ch]">
            <p
              className="eyebrow mb-8"
              style={{color: LAVA_GLOW, letterSpacing: '0.28em'}}
            >
              {tour.heroEyebrow}
            </p>
            <h1
              className="hero-headline font-display text-display-lg font-light text-cream-on-dark"
              style={{
                fontStretch: '88%',
                textShadow: '0 4px 32px rgba(0,0,0,0.6)'
              }}
            >
              {tour.h1}
            </h1>
            <p className="mt-8 max-w-[44ch] font-display text-[18px] sm:text-[22px] font-light text-cream-on-dark/85 leading-[1.4]">
              {tour.heroSubhead}
            </p>
          </div>
        </div>

        {/* Glow bottom — fa "fumare" il bordo */}
        <div
          className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
          style={{
            boxShadow: `0 0 60px 12px ${LAVA_GLOW}30`
          }}
          aria-hidden="true"
        />
      </section>

      {/* 02 — INTRO dark drop-cap lava */}
      <section className="py-32 sm:py-44" style={{backgroundColor: ETNA_BLACK}}>
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p
            className="eyebrow mb-10"
            style={{color: LAVA_GLOW}}
          >
            {tour.introH2Pre}{' '}
            <span style={{color: LAVA_GLOW}}>{tour.introH2Accent}</span>
          </p>
          <div className="space-y-7 sm:space-y-8 text-[19px] sm:text-[20px] leading-[1.75] text-cream-on-dark/80">
            {tour.introBody.map((p, i) => (
              <p
                key={i}
                className={i === 0 ? 'etna-dropcap' : ''}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
        {/* Drop-cap targetato SOLO al paragrafo intro, non a cascata */}
        <style>{`
          .etna-dropcap::first-letter {
            font-family: var(--font-display), Georgia, serif;
            font-size: 96px;
            line-height: 0.82;
            color: ${LAVA_GLOW};
            float: left;
            margin-right: 12px;
            margin-top: 4px;
            font-weight: 300;
          }
        `}</style>
      </section>

      {/* 03 — IL TOUR IN NUMERI — riga orizzontale, dark */}
      <section
        className="py-20 sm:py-28"
        style={{backgroundColor: ETNA_BLACK_SOFT, borderTop: `1px solid ${LAVA_RED}40`, borderBottom: `1px solid ${LAVA_RED}40`}}
      >
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <p
            className="eyebrow mb-10 sm:mb-12"
            style={{color: LAVA_GLOW}}
          >
            {tour.numbersEyebrow}
          </p>

          <ul
            className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0"
            style={{}}
          >
            {tour.numbers.map((n, i) => (
              <li
                key={n.label}
                className={`min-w-0 ${
                  i > 0 ? 'lg:pl-8 xl:pl-10 lg:border-l' : ''
                } ${i < tour.numbers.length - 1 ? 'lg:pr-8 xl:pr-10' : ''}`}
                style={{borderColor: `${LAVA_RED}25`}}
              >
                <p
                  className="font-display font-light tabular-nums leading-[1] break-words"
                  style={{
                    color: 'var(--cream-on-dark)',
                    fontStretch: '88%',
                    fontSize: 'clamp(24px, 2.8vw, 44px)',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {n.value}
                </p>
                <p
                  className="mt-4 text-[12px] sm:text-[13px] uppercase tracking-[0.14em] font-medium leading-relaxed max-w-[28ch]"
                  style={{color: 'rgba(245, 239, 228, 0.55)'}}
                >
                  {n.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 04 — PARTNER cantine (condizionale) — citazioni dark */}
      {tour.partners && tour.partners.length > 0 && (
        <section className="py-32 sm:py-44" style={{backgroundColor: ETNA_BLACK}}>
          <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
            <p
              className="eyebrow mb-10"
              style={{color: LAVA_GLOW}}
            >
              {tour.partnersEyebrow}
            </p>
            <h2
              className="hero-headline font-display text-display-md font-light max-w-[20ch] mb-16 sm:mb-20"
              style={{color: 'var(--cream-on-dark)', fontStretch: '92%'}}
            >
              {tour.partnersH2}
            </h2>

            <div className="space-y-16 sm:space-y-20">
              {tour.partners.map((p) => (
                <article
                  key={p.name}
                  className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-start"
                >
                  <p
                    className="font-display italic text-display-sm font-light leading-[1.05] max-w-[16ch]"
                    style={{color: LAVA_GLOW, fontStretch: '95%'}}
                  >
                    {p.name}
                  </p>
                  <p
                    className="text-[17px] sm:text-[18px] leading-[1.7] max-w-[60ch] lg:pt-3"
                    style={{color: 'rgba(245, 239, 228, 0.75)'}}
                  >
                    {p.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 05 — TAPPE scroll-driven sticky cinematic dark */}
      <section ref={stagesRef} className="relative" aria-label={tour.stagesEyebrow}>
        {/* Header sezione */}
        <div className="py-24 sm:py-32" style={{backgroundColor: ETNA_BLACK}}>
          <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
            <p
              className="eyebrow mb-7"
              style={{color: LAVA_GLOW}}
            >
              {tour.stagesEyebrow}
            </p>
            <h2
              className="hero-headline font-display text-display-lg font-light max-w-[20ch]"
              style={{color: 'var(--cream-on-dark)', fontStretch: '92%'}}
            >
              {tour.stagesH2Pre}{' '}
              <span style={{color: LAVA_GLOW}}>{tour.stagesH2Accent}</span>
            </h2>
          </div>
        </div>

        <div style={{height: `${N * 100}vh`}} className="relative">
          <div className="sticky top-0 h-[100svh] overflow-hidden" style={{backgroundColor: ETNA_BLACK}}>
            {/* Foto sticky per ogni tappa */}
            {tour.stages.map((s, i) => (
              <EtnaStageImage
                key={`${s.number}-img`}
                index={i}
                total={N}
                image={s.image}
                priority={i === 0}
                scrollYProgress={scrollYProgress}
              />
            ))}

            {/* Counter + eyebrow sticky top */}
            <div className="absolute top-0 inset-x-0 z-20 pt-8 sm:pt-10">
              <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex items-baseline justify-between">
                <p className="eyebrow" style={{color: LAVA_GLOW}}>
                  {tour.stagesEyebrow}
                </p>
                <EtnaStageCounter total={N} scrollYProgress={scrollYProgress} />
              </div>
            </div>

            {/* Testo per ogni tappa */}
            {tour.stages.map((s, i) => (
              <EtnaStageText
                key={`${s.number}-text`}
                stage={s}
                index={i}
                total={N}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 06 — INCLUSO / NON INCLUSO dark */}
      <section className="py-32 sm:py-40" style={{backgroundColor: ETNA_BLACK_SOFT}}>
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <h2
            className="hero-headline font-display text-display-md font-light max-w-[20ch] mb-16 sm:mb-20"
            style={{color: 'var(--cream-on-dark)', fontStretch: '92%'}}
          >
            {tour.includedH2Pre}{' '}
            <span style={{color: LAVA_GLOW}}>{tour.includedH2Accent}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-16 lg:gap-x-24">
            <div>
              <p
                className="eyebrow mb-7"
                style={{color: LAVA_GLOW}}
              >
                {tour.includedLabel}
              </p>
              <ul className="space-y-4 text-[17px] sm:text-[18px] leading-[1.65]" style={{color: 'rgba(245, 239, 228, 0.75)'}}>
                {tour.included.map((item, i) => (
                  <li
                    key={i}
                    className="pb-4 last:border-b-0"
                    style={{borderBottom: i < tour.included.length - 1 ? `1px solid rgba(192, 57, 43, 0.18)` : 'none'}}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p
                className="eyebrow mb-7"
                style={{color: 'rgba(245, 239, 228, 0.4)'}}
              >
                {tour.excludedLabel}
              </p>
              <ul className="space-y-4 text-[17px] sm:text-[18px] leading-[1.65]" style={{color: 'rgba(245, 239, 228, 0.45)'}}>
                {tour.excluded.map((item, i) => (
                  <li
                    key={i}
                    className="pb-4 last:border-b-0"
                    style={{borderBottom: i < tour.excluded.length - 1 ? `1px solid rgba(245, 239, 228, 0.1)` : 'none'}}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — FAQ accordion dark */}
      <section className="py-32 sm:py-40" style={{backgroundColor: ETNA_BLACK}}>
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p
            className="eyebrow mb-10"
            style={{color: LAVA_GLOW}}
          >
            {tour.faqEyebrow}
          </p>
          <h2
            className="hero-headline font-display text-display-md font-light max-w-[18ch] mb-14 sm:mb-16"
            style={{color: 'var(--cream-on-dark)', fontStretch: '92%'}}
          >
            {tour.faqH2Pre}{' '}
            <span style={{color: LAVA_GLOW}}>{tour.faqH2Accent}</span>
          </h2>

          <ul style={{borderTop: `1px solid rgba(192, 57, 43, 0.2)`}}>
            {tour.faqs.map((item, i) => (
              <li key={i} style={{borderBottom: `1px solid rgba(192, 57, 43, 0.2)`}}>
                <details className="group py-2">
                  <summary className="cursor-pointer list-none py-7 flex items-start justify-between gap-8">
                    <h3
                      className="font-display text-[26px] sm:text-[32px] lg:text-[36px] font-light leading-[1.15] max-w-[48ch] transition-colors"
                      style={{
                        color: 'var(--cream-on-dark)',
                        fontStretch: '92%'
                      }}
                    >
                      {item.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="font-display text-3xl leading-none mt-2 transition-transform duration-300 group-open:rotate-45"
                      style={{color: LAVA_GLOW}}
                    >
                      +
                    </span>
                  </summary>
                  <div
                    className="pb-8 pr-12 text-[17px] sm:text-[18px] leading-[1.7] max-w-prose"
                    style={{color: 'rgba(245, 239, 228, 0.72)'}}
                  >
                    {item.a}
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 08 — CTA finale: glow lava */}
      <section
        className="relative py-40 sm:py-56 overflow-hidden"
        style={{backgroundColor: ETNA_BLACK}}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 75% 40%, ${LAVA_RED}22 0%, transparent 55%)`
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p
            className="eyebrow mb-10"
            style={{color: LAVA_GLOW}}
          >
            {tour.ctaEyebrow}
          </p>
          <h2
            className="hero-headline font-display text-display-xl font-light max-w-[18ch] leading-[0.95]"
            style={{
              color: 'var(--cream-on-dark)',
              fontStretch: '92%',
              textShadow: `0 4px 32px ${LAVA_RED}20`
            }}
          >
            {tour.ctaH2}
          </h2>
          <p
            className="mt-10 text-[19px] sm:text-[21px] leading-[1.6] max-w-[52ch]"
            style={{color: 'rgba(245, 239, 228, 0.7)'}}
          >
            {tour.ctaSubhead}
          </p>

          <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-5">
            <a
              href="https://wa.me/393756413379"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium transition-all duration-200"
              style={{
                backgroundColor: LAVA_RED,
                color: 'var(--cream-on-dark)',
                boxShadow: `0 8px 32px ${LAVA_RED}40`
              }}
            >
              {tCommon('ctaWhatsApp')}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              >
                →
              </span>
            </a>
            <Link
              href={`/${locale}/contatti`}
              className="inline-flex items-center justify-center gap-3 rounded-full px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium transition-colors"
              style={{
                color: 'var(--cream-on-dark)',
                border: `1px solid rgba(245, 239, 228, 0.3)`
              }}
            >
              {tCommon('ctaQuote')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// Subcomponents — Etna stages
// ============================================================

function EtnaStageImage({
  index,
  total,
  image,
  priority,
  scrollYProgress
}: {
  index: number;
  total: number;
  image: string;
  priority: boolean;
  scrollYProgress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(start - 0.02, 0), start, end, Math.min(end + 0.02, 1)],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [start, end],
    reduce ? [1, 1] : [1.06, 1]
  );

  return (
    <motion.div
      className="absolute inset-0"
      style={{opacity: reduce ? 1 : opacity, scale}}
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        quality={85}
        className="object-cover"
        style={{filter: 'saturate(0.75) brightness(0.55) contrast(1.18)'}}
        priority={priority}
      />
      {/* Doppio overlay dark + radial lava glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/85" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 30% 70%, rgba(192, 57, 43, 0.15) 0%, transparent 60%)'
        }}
      />
    </motion.div>
  );
}

function EtnaStageText({
  stage,
  index,
  total,
  scrollYProgress
}: {
  stage: TourContent['stages'][number];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  const start = index / total;
  const peakStart = start + 0.06;
  const peakEnd = (index + 1) / total - 0.06;
  const end = (index + 1) / total;

  const opacity = useTransform(
    scrollYProgress,
    [start, peakStart, peakEnd, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [start, peakStart, peakEnd, end],
    reduce ? ['0%', '0%', '0%', '0%'] : ['6%', '0%', '0%', '-4%']
  );

  return (
    <motion.div
      className="absolute inset-0 z-10 flex flex-col justify-end items-start text-left px-6 sm:px-12 lg:px-20 pb-24 sm:pb-32"
      style={{opacity: reduce ? 1 : opacity, y}}
    >
      <div className="max-w-[40ch]">
        <p
          className="font-display italic font-light text-[20px] sm:text-[22px] mb-4 tabular-nums"
          style={{
            color: LAVA_GLOW,
            textShadow: '0 2px 16px rgba(0,0,0,0.6)'
          }}
        >
          {stage.number} · {stage.duration}
        </p>
        <h3
          className="hero-headline font-display text-display-lg font-light text-cream-on-dark"
          style={{
            fontStretch: '90%',
            textShadow: '0 4px 32px rgba(0,0,0,0.5)'
          }}
        >
          {stage.title}
        </h3>
        <p
          className="mt-7 text-[18px] sm:text-[19px] leading-[1.6] max-w-[52ch]"
          style={{
            color: 'rgba(245, 239, 228, 0.88)',
            textShadow: '0 2px 12px rgba(0,0,0,0.4)'
          }}
        >
          {stage.body}
        </p>
      </div>
    </motion.div>
  );
}

function EtnaStageCounter({
  total,
  scrollYProgress
}: {
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const current = useTransform(scrollYProgress, (p) => {
    const idx = Math.min(Math.floor(p * total) + 1, total);
    return String(idx).padStart(2, '0');
  });
  return (
    <div className="flex items-baseline gap-2 text-cream-on-dark/85 tabular-nums">
      <motion.span
        className="font-display text-2xl sm:text-3xl"
        style={{color: LAVA_GLOW}}
      >
        {current}
      </motion.span>
      <span
        className="text-[11px] uppercase tracking-[0.18em]"
        style={{color: 'rgba(245, 239, 228, 0.5)'}}
      >
        / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
}
