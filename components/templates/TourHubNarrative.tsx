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
import type {TourHubContent} from '@/lib/tours';
import {HERO_BLUR, HERO_SIZES} from '@/lib/blur';

// TourHubNarrative — pagina /tour-sicilia + /en/sicily-tours.
// Stesso linguaggio della home: hero atmosferica, scroll-driven sticky per
// le 5 esperienze, storytelling narrative, CTA finale immersive.
// Diverso dalla home perché qui chi atterra HA già scelto "voglio un tour".

// I 5 (+1 custom) itinerari sono colorati come nella home per coerenza.
const ITINERARY_COLORS = [
  '#E8DBC4', // Dolce Vita — sand
  '#1E3A4F', // Silent Sailing — blu mare
  '#EDE5D6', // Isola delle Correnti — cream
  '#B05E40', // Etna Premium — terracotta
  '#5F7367', // Barocco — ulivo
  '#142838' // Custom — primary deep
];

export function TourHubNarrative({hub}: {hub: TourHubContent}) {
  const tCommon = useTranslations('NccPage');

  const stickyRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: stickyRef,
    offset: ['start start', 'end end']
  });

  const N = hub.itineraries.length;

  return (
    <>
      {/* 01 — HERO atmosferica */}
      <section className="hero-stage relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={hub.heroImage}
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes={HERO_SIZES}
            quality={80}
            placeholder="blur"
            blurDataURL={HERO_BLUR}
            className="object-cover"
            style={{filter: 'saturate(0.88) brightness(0.78) contrast(1.08)'}}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/80" />
        </div>

        <div className="relative h-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 grid grid-rows-[1fr_auto_auto] pb-12 sm:pb-16">
          <div />
          <div className="max-w-[28ch]">
            <p className="eyebrow text-cream-on-dark/85 mb-8">
              {hub.heroEyebrow}
            </p>
            <h1
              className="font-display text-display-lg font-medium text-cream-on-dark"
              style={{
                fontStretch: '92%',
                textShadow: '0 2px 24px rgba(0,0,0,0.3)'
              }}
            >
              {hub.h1Pre}{' '}
              <span className="text-accent-decorative">
                {hub.h1Accent}
              </span>
            </h1>
            <p className="mt-8 sm:mt-10 max-w-[42ch] font-display text-[20px] sm:text-[24px] font-light text-cream-on-dark/95 leading-[1.35]">
              {hub.heroSubhead}
            </p>
          </div>

          <div className="justify-self-center mt-12 sm:mt-16 flex flex-col items-center">
            <p className="text-[10px] uppercase tracking-[0.32em] font-medium text-cream-on-dark/65 mb-3">
              {hub.itinerariesEyebrow}
            </p>
            <div className="w-px h-12 sm:h-16 bg-cream-on-dark/40" />
          </div>
        </div>
      </section>

      {/* 02 — INTRO breve narrativo */}
      <section className="bg-canvas py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow mb-10">{hub.itinerariesEyebrow}</p>
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] mb-10"
            style={{fontStretch: '95%'}}
          >
            {hub.introH2Pre}{' '}
            <span className="text-accent">{hub.introH2Accent}</span>
          </h2>
          <p className="text-[19px] sm:text-[20px] leading-[1.7] text-ink-soft max-w-[60ch]">
            {hub.introBody}
          </p>
        </div>
      </section>

      {/* 03 — ITINERARI scroll-driven sticky */}
      <section ref={stickyRef} className="relative" aria-label={hub.itinerariesEyebrow}>
        <div style={{height: `${N * 100}vh`}} className="relative">
          <div className="sticky top-0 h-[100svh] overflow-hidden">
            {/* Backgrounds */}
            {hub.itineraries.map((it, i) => (
              <ItineraryBackground
                key={`${it.number}-bg`}
                index={i}
                total={N}
                bg={ITINERARY_COLORS[i] ?? '#1E3A4F'}
                scrollYProgress={scrollYProgress}
              />
            ))}

            {/* Foto */}
            {hub.itineraries.map((it, i) => (
              <ItineraryImage
                key={`${it.number}-img`}
                index={i}
                total={N}
                image={it.image}
                priority={i === 0}
                scrollYProgress={scrollYProgress}
              />
            ))}

            {/* Counter sticky top */}
            <div className="absolute top-0 inset-x-0 z-20 pt-8 sm:pt-10">
              <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex items-baseline justify-between">
                <p className="eyebrow text-cream-on-dark/85">
                  {hub.itinerariesEyebrow}
                </p>
                <HubCounter total={N} scrollYProgress={scrollYProgress} />
              </div>
            </div>

            {/* Testo per ogni itinerario */}
            {hub.itineraries.map((it, i) => (
              <ItineraryText
                key={`${it.number}-text`}
                itinerary={it}
                index={i}
                total={N}
                cta={tCommon('ctaWhatsApp')}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 04 — STORYTELLING giornata tipo */}
      <section className="bg-canvas py-40 sm:py-56">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow mb-10">{hub.storyEyebrow}</p>
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] mb-14 sm:mb-16"
            style={{fontStretch: '95%'}}
          >
            {hub.storyH2Pre}{' '}
            <span className="italic font-light">{hub.storyH2Accent}</span>
          </h2>

          <div className="space-y-7 text-[19px] sm:text-[20px] leading-[1.7] text-ink-soft">
            {hub.storyParagraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'first-letter:font-display first-letter:text-[88px] first-letter:leading-[0.85] first-letter:text-accent first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-light'
                    : ''
                }
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — COSA È SEMPRE INCLUSO — lista editorial */}
      <section className="bg-canvas-deep py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div>
              <p className="eyebrow mb-7">{hub.includedEyebrow}</p>
              <h2
                className="font-display text-display-md font-light text-ink max-w-[16ch]"
                style={{fontStretch: '95%'}}
              >
                {hub.includedH2Pre}{' '}
                <span className="text-accent">{hub.includedH2Accent}</span>
              </h2>
            </div>

            <ul className="space-y-4 text-[17px] sm:text-[18px] leading-[1.65] text-ink-soft">
              {hub.included.map((item, i) => (
                <li
                  key={i}
                  className="pb-4 border-b border-[var(--border)] last:border-b-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 06 — FAQ */}
      <section className="bg-canvas py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow mb-10">{hub.faqEyebrow}</p>
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] mb-14 sm:mb-16"
            style={{fontStretch: '95%'}}
          >
            {hub.faqH2Pre}{' '}
            <span className="text-accent">{hub.faqH2Accent}</span>
          </h2>

          <ul className="divide-y divide-[var(--border-strong)]">
            {hub.faqs.map((item, i) => (
              <li key={i}>
                <details className="group py-2">
                  <summary className="cursor-pointer list-none py-7 flex items-start justify-between gap-8">
                    <h3
                      className="font-display text-[26px] sm:text-[32px] lg:text-[36px] font-light text-ink leading-[1.15] max-w-[48ch] group-open:text-accent transition-colors"
                      style={{fontStretch: '95%'}}
                    >
                      {item.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="font-display text-3xl text-accent leading-none mt-2 transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="pb-8 pr-12 text-[17px] sm:text-[18px] leading-[1.7] text-ink-soft max-w-prose">
                    {item.a}
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 07 — CTA finale */}
      <section
        className="relative bg-primary-deep py-40 sm:py-56 overflow-hidden"
        style={{color: 'var(--cream-on-dark)'}}
      >
        <div
          className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(176, 94, 64, 0.18) 0%, transparent 60%)'
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow text-cream-on-dark/65 mb-10">{hub.ctaEyebrow}</p>
          <h2
            className="font-display text-display-xl font-light text-cream-on-dark max-w-[18ch] leading-[0.95]"
            style={{fontStretch: '95%'}}
          >
            {hub.ctaH2}
          </h2>
          <p className="mt-10 text-[19px] sm:text-[21px] text-cream-soft leading-[1.6] max-w-[52ch]">
            {hub.ctaSubhead}
          </p>

          <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-5">
            <a
              href="https://wa.me/393756413379"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:bg-accent-hover"
              style={{color: 'var(--cream-on-dark)'}}
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
              href="/contatti"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-cream-on-dark/35 px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium text-cream-on-dark hover:bg-cream-on-dark/8 transition-colors"
            >
              {tCommon('ctaQuote')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ============================================================
// Subcomponents — scroll-driven layers
// ============================================================

function ItineraryBackground({
  index,
  total,
  bg,
  scrollYProgress
}: {
  index: number;
  total: number;
  bg: string;
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
  return (
    <motion.div
      className="absolute inset-0"
      style={{backgroundColor: bg, opacity: reduce ? 1 : opacity}}
    />
  );
}

function ItineraryImage({
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
        quality={80}
        className="object-cover"
        style={{filter: 'saturate(0.88) brightness(0.78) contrast(1.06)'}}
        priority={priority}
      />
      <div className="absolute inset-0 atmo-overlay-dark" />
    </motion.div>
  );
}

function ItineraryText({
  itinerary,
  index,
  total,
  cta,
  scrollYProgress
}: {
  itinerary: TourHubContent['itineraries'][number];
  index: number;
  total: number;
  cta: string;
  scrollYProgress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  const start = index / total;
  const peakStart = start + 0.05;
  const peakEnd = (index + 1) / total - 0.05;
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

  const alignClass =
    index % 2 === 0 ? 'items-start text-left' : 'items-end text-right';

  return (
    <motion.div
      className={`absolute inset-0 z-10 flex flex-col justify-end ${alignClass} px-6 sm:px-12 lg:px-20 pb-24 sm:pb-32`}
      style={{opacity: reduce ? 1 : opacity, y}}
    >
      <div
        className="max-w-[28ch]"
        style={{maxWidth: 'min(28ch, 44vw)'}}
      >
        <p className="eyebrow text-cream-on-dark/85 mb-5">
          {itinerary.duration} · {itinerary.price}
        </p>
        <h2
          className="hero-headline font-display text-display-lg font-medium text-cream-on-dark"
          style={{
            fontStretch: '92%',
            textShadow: '0 2px 18px rgba(0,0,0,0.3)'
          }}
        >
          {itinerary.title}
        </h2>
        <p className="mt-6 max-w-[42ch] text-[18px] sm:text-[20px] text-cream-on-dark/90 leading-[1.55]">
          {itinerary.body}
        </p>
        {itinerary.href !== '/contatti' && (
          <Link
            href={itinerary.href}
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-cream-on-dark/50 px-7 py-3 text-[12px] uppercase tracking-[0.16em] font-medium text-cream-on-dark hover:bg-cream-on-dark/10 hover:border-cream-on-dark transition-colors"
          >
            {cta}
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </motion.div>
  );
}

function HubCounter({
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
      <motion.span className="font-display text-2xl sm:text-3xl">
        {current}
      </motion.span>
      <span className="text-[11px] uppercase tracking-[0.18em]">
        / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
}
