'use client';

import {useRef} from 'react';
import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue
} from 'motion/react';
import type {TourContent} from '@/lib/tours';
import {HERO_BLUR, HERO_SIZES} from '@/lib/blur';
import {AnimatedHeading} from '@/components/ui/AnimatedHeading';

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
  const stagesRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: stagesRef,
    offset: ['start start', 'end end']
  });

  const N = tour.stages.length;

  return (
    <div className="tour-etna-page" style={{backgroundColor: ETNA_BLACK, color: 'var(--cream-on-dark)'}}>
      {/* 01 — HERO cinematic ultra-dark con video background.
            Cliente 27/05/2026: aggiunto video-hero.mp4 in loop muto al posto
            dell'Image. autoPlay + muted + loop + playsInline = standard per
            video background autoplayable su tutti i browser (Safari iOS
            blocca autoplay con audio, ma muted lo permette).
            preload="auto" perche' e' above-the-fold critical content.
            Image rimane come poster fallback per reduced-motion / no-video
            browsers / preload prima del primo frame. */}
      <section className="hero-stage relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <video
            src="/images/tour-etna/video-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={tour.heroImage}
            className="absolute inset-0 w-full h-full object-cover"
            style={{filter: 'saturate(0.85) brightness(0.65) contrast(1.1)'}}
            aria-hidden="true"
          />
          {/* Overlay neutro per leggibilità testo */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/85" />
        </div>

        <div className="relative h-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex items-end pb-[18vh] sm:pb-[22vh]">
          <div className="max-w-[44ch]">
            <h1
              className="hero-headline font-display text-display-lg font-light text-cream-on-dark"
              style={{
                fontStretch: '88%',
                textShadow: '0 4px 32px rgba(0,0,0,0.6)'
              }}
            >
              {tour.h1}
            </h1>
          </div>
        </div>

      </section>

      {/* 02 — INTRO + NUMBERS unificati (rielaborato 27/05/2026)
            Layout cinematic: body con drop-cap a sinistra (col 7) + stats
            verticali "movie credits style" a destra (col 5) separati da
            linee lava. Atmospheric glow lava sull'edge destro.
            Sostituisce le precedenti sezioni 02 (intro drop-cap full-width)
            e 03 (numbers row orizzontale full-width) in un unico layout
            piu' compatto e visivamente connesso. */}
      <section
        className="relative py-32 sm:py-40 overflow-hidden"
        style={{backgroundColor: ETNA_BLACK}}
      >
        {/* Glow lava radiale a destra → atmosfera, cinematic */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 85% 50%, ${LAVA_RED}18 0%, transparent 60%)`
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          {/* Header eyebrow + lava line */}
          <motion.div
            className="mb-16 sm:mb-20 max-w-2xl"
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-10%'}}
            transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}}
          >
            <p className="eyebrow mb-6" style={{color: LAVA_GLOW}}>
              {tour.introH2Pre}{' '}
              <span style={{color: LAVA_GLOW}}>{tour.introH2Accent}</span>
            </p>
            {/* Thin lava line decorativa */}
            <div
              className="h-px w-16 sm:w-20"
              style={{backgroundColor: LAVA_GLOW}}
              aria-hidden="true"
            />
          </motion.div>

          {/* Grid 2-col: body sx, stats dx */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20">
            {/* LEFT: body con drop-cap */}
            <motion.div
              className="lg:col-span-7"
              initial={{opacity: 0, y: 24}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-10%'}}
              transition={{duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
            >
              <div
                className="space-y-7 sm:space-y-8 text-[18px] sm:text-[19px] leading-[1.75]"
                style={{color: 'rgba(245, 239, 228, 0.82)'}}
              >
                {tour.introBody.map((p, i) => (
                  <p key={i} className={i === 0 ? 'etna-dropcap' : ''}>
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* RIGHT: stats stack verticale "movie credits" */}
            <motion.div
              className="lg:col-span-5"
              initial={{opacity: 0, y: 24}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-10%'}}
              transition={{duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1]}}
            >
              <p
                className="eyebrow mb-6 sm:mb-7"
                style={{color: 'rgba(245, 239, 228, 0.45)'}}
              >
                {tour.numbersEyebrow}
              </p>

              <ul style={{borderTop: `1px solid ${LAVA_RED}30`}}>
                {tour.numbers.map((n, i) => (
                  <motion.li
                    key={n.label}
                    className="py-5 sm:py-6 grid grid-cols-[auto_1fr] gap-x-6 items-baseline"
                    style={{borderBottom: `1px solid ${LAVA_RED}25`}}
                    initial={{opacity: 0, x: 12}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true, margin: '-10%'}}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    {/* Label small uppercase, allineata in basso */}
                    <p
                      className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium whitespace-nowrap"
                      style={{color: 'rgba(245, 239, 228, 0.5)'}}
                    >
                      {n.label}
                    </p>
                    {/* Value display large, right-aligned */}
                    <p
                      className="font-display font-light tabular-nums text-right leading-none"
                      style={{
                        color: 'var(--cream-on-dark)',
                        fontStretch: '88%',
                        fontSize: 'clamp(24px, 2.2vw, 36px)',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {n.value}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
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
          <AnimatedHeading
            as="h2"
            text={tour.ctaH2}
            className="hero-headline font-display text-display-xl font-light max-w-[18ch] leading-[0.95]"
            style={{
              color: 'var(--cream-on-dark)',
              fontStretch: '92%',
              textShadow: `0 4px 32px ${LAVA_RED}20`
            }}
          />
          <p
            className="mt-10 text-[19px] sm:text-[21px] leading-[1.6] max-w-[52ch]"
            style={{color: 'rgba(245, 239, 228, 0.7)'}}
          >
            {tour.ctaSubhead}
          </p>

          <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-5">
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

  // Bulletproof keyframes: hard-anchor a 0 e 1 per evitare che la prima
  // immagine "rispunti" dopo l'ultima tappa (era duplicate keyframes con start=0).
  const FADE = 0.02;
  const fadeInStart = Math.max(start - FADE, 0);
  const fadeOutEnd = Math.min(end + FADE, 1);
  let times: number[];
  let values: number[];
  if (index === 0) {
    times = [0, end, fadeOutEnd, 1];
    values = [1, 1, 0, 0];
  } else if (index === total - 1) {
    times = [0, fadeInStart, start, 1];
    values = [0, 0, 1, 1];
  } else {
    times = [0, fadeInStart, start, end, fadeOutEnd, 1];
    values = [0, 0, 1, 1, 0, 0];
  }
  const opacity = useTransform(scrollYProgress, times, values);
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
        placeholder="blur"
        blurDataURL={HERO_BLUR}
        className="object-cover"
        style={{filter: 'saturate(0.9) brightness(0.7) contrast(1.08)'}}
        priority={priority}
        {...(priority ? {fetchPriority: 'high' as const} : {})}
      />
      {/* Overlay dark uniforme — niente più sfumatura rossa */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/75" />
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
