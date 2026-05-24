'use client';

import {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useTranslations, useLocale} from 'next-intl';
import {HERO_BLUR} from '@/lib/blur';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue
} from 'motion/react';

// EsperienzeScroll — 5 esperienze come capitoli scroll-driven.
// Desktop: sticky scroll-driven (foto cambia con scroll wheel).
// Mobile: stack verticale statico, 1 immagine per sezione, niente scroll-control.

type Esperienza = {
  key: '1' | '2' | '3' | '4' | '5';
  href: string;
  image: string;
  bg: string;
  align: 'left' | 'right';
};

const ESPERIENZE: Esperienza[] = [
  {
    key: '1',
    href: '/tour/dolce-vita-siracusa',
    image: '/images/home/dolce-vita.png',
    bg: '#E8DBC4',
    align: 'left'
  },
  {
    key: '2',
    href: '/tour/silent-sailing',
    image: '/images/home/sailing.png',
    bg: '#1E3A4F',
    align: 'right'
  },
  {
    key: '3',
    href: '/tour/isola-delle-correnti',
    image: '/images/home/isola.png',
    bg: '#EDE5D6',
    align: 'left'
  },
  {
    key: '4',
    href: '/tour/etna-premium',
    image: '/images/home/etna.png',
    bg: '#B05E40',
    align: 'right'
  },
  {
    key: '5',
    href: '/tour-barocco',
    image: '/images/home/barocco.png',
    bg: '#5F7367',
    align: 'left'
  }
];

const N = ESPERIENZE.length;

export function EsperienzeScroll() {
  const t = useTranslations('Home.esperienze');
  const locale = useLocale();

  return (
    <section aria-label={t('eyebrow')}>
      {/* ── MOBILE: scrollytelling verticale. Outer 5×80svh, inner sticky.
            Lo scroll della pagina rivela una scena alla volta. Niente
            swipe, niente hint da leggere — la scoperta è automatica. ── */}
      <div className="md:hidden">
        <MobileVerticalScrollytelling locale={locale} />
      </div>

      {/* ── DESKTOP: sticky scroll-driven ── */}
      <div className="hidden md:block">
        <DesktopScroll locale={locale} />
      </div>

      {/* Band terracotta finale — anche snap target su mobile per uscire pulito */}
      <div className="bg-accent py-20 sm:py-24 esperienze-band-snap">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-7">
          <p
            className="font-display text-display-sm font-light text-cream-on-dark max-w-[28ch]"
            style={{fontStretch: '95%'}}
          >
            {t('customTagline')}
          </p>
          <Link
            href={`/${locale}/contatti`}
            className="inline-flex items-center gap-3 rounded-full bg-cream-on-dark px-7 py-3 text-[12px] uppercase tracking-[0.16em] font-medium text-accent hover:bg-cream-soft transition-colors self-start"
          >
            {t('customCta')}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Mobile: scrollytelling verticale ──────────────────────────────────────
// Outer section h = N * 80svh in flusso pagina. Inner sticky h-[100svh] mostra
// 5 scene layered con crossfade. IntersectionObserver tracks current scene
// via markers a 1px piazzati al centro di ogni "fascia" di scroll.
// Nessuna gesture custom: l'utente scrolla la pagina come al solito; la
// sezione esperienze cambia scena durante lo scroll (scrollytelling pattern).

function MobileVerticalScrollytelling({locale}: {locale: string}) {
  const t = useTranslations('Home.esperienze');
  const tCommon = useTranslations('NccPage');
  const [activeIndex, setActiveIndex] = useState(0);

  // ogni scena occupa SCENE_HEIGHT_VH di scroll verticale
  const SCENE_HEIGHT_VH = 80;

  return (
    <section
      className="relative"
      style={{height: `${N * SCENE_HEIGHT_VH}svh`}}
      aria-label="Esperienze — scorri per scoprirle"
    >
      {/* Sticky stage — mostra la scena attiva */}
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-canvas">
        {ESPERIENZE.map((e, i) => (
          <SceneLayer
            key={e.key}
            e={e}
            index={i}
            active={activeIndex === i}
            locale={locale}
            t={t}
            tCommon={tCommon}
          />
        ))}

        {/* Counter + eyebrow top */}
        <div className="pointer-events-none absolute top-0 inset-x-0 z-30 pt-6">
          <div className="px-6 flex items-baseline justify-between">
            <p className="eyebrow text-cream-on-dark/85">{t('eyebrow')}</p>
            <div className="flex items-baseline gap-2 text-cream-on-dark/85 tabular-nums">
              <span className="font-display text-2xl">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em]">
                / {String(N).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Dots indicator verticale a destra */}
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2">
          {ESPERIENZE.map((_, i) => (
            <span
              key={i}
              className={`block w-1.5 rounded-full transition-all ${
                i === activeIndex ? 'bg-cream-on-dark h-6' : 'bg-cream-on-dark/40 h-1.5'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Triggers — markers a 1px piazzati al CENTRO della fascia di scroll
          di ogni scena. IntersectionObserver fa fire quando il marker
          attraversa il middle line del viewport (rootMargin -50% top+bot). */}
      {ESPERIENZE.map((_, i) => (
        <SceneTrigger
          key={`t-${i}`}
          index={i}
          sceneHeightVh={SCENE_HEIGHT_VH}
          onActive={setActiveIndex}
        />
      ))}
    </section>
  );
}

function SceneLayer({
  e,
  index,
  active,
  locale,
  t,
  tCommon
}: {
  e: Esperienza;
  index: number;
  active: boolean;
  locale: string;
  t: ReturnType<typeof useTranslations>;
  tCommon: ReturnType<typeof useTranslations>;
}) {
  const alignClass =
    e.align === 'left' ? 'items-start text-left' : 'items-end text-right';
  return (
    <div
      className="absolute inset-0 transition-opacity duration-500 ease-out"
      style={{
        opacity: active ? 1 : 0,
        pointerEvents: active ? 'auto' : 'none',
        backgroundColor: e.bg
      }}
      aria-hidden={!active}
    >
      <Image
        src={e.image}
        alt=""
        fill
        sizes="100vw"
        quality={75}
        className="object-cover pointer-events-none select-none"
        placeholder="blur"
        blurDataURL={HERO_BLUR}
        priority={index === 0}
        draggable={false}
        style={{filter: 'saturate(0.88) brightness(0.78) contrast(1.06)'}}
      />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Testo in basso */}
      <div
        className={`absolute inset-0 z-10 flex flex-col justify-end ${alignClass} px-6 pb-24`}
      >
        <div style={{maxWidth: 'min(480px, 90vw)'}}>
          <h2
            className="font-display text-[44px] font-medium text-cream-on-dark"
            style={{
              fontStretch: '92%',
              textShadow: '0 2px 18px rgba(0,0,0,0.4)',
              lineHeight: '1.05'
            }}
          >
            {t(`card${e.key}Title`)}
          </h2>
          <p className="mt-4 text-[16px] text-cream-on-dark/90 leading-[1.55] max-w-[36ch]">
            {t(`card${e.key}Body`)}
          </p>
          <div
            className={`mt-6 flex flex-wrap gap-3 ${
              e.align === 'left' ? 'justify-start' : 'justify-end'
            }`}
          >
            <Link
              href={`/${locale}${e.href}`}
              className="inline-flex items-center gap-3 rounded-full bg-cream-on-dark px-6 py-3 text-[12px] uppercase tracking-[0.16em] font-medium text-primary-deep"
            >
              {tCommon('ctaDiscoverTour')}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function SceneTrigger({
  index,
  sceneHeightVh,
  onActive
}: {
  index: number;
  sceneHeightVh: number;
  onActive: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onActive(index);
      },
      {
        // root viewport ridotta a una linea orizzontale al centro:
        // -50% top + -50% bottom = altezza effettiva 0 al middle.
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index, onActive]);

  return (
    <div
      ref={ref}
      className="absolute left-0 right-0 pointer-events-none"
      style={{
        // marker al CENTRO della fascia di scroll della scena i
        top: `${index * sceneHeightVh + sceneHeightVh / 2}svh`,
        height: '1px'
      }}
      aria-hidden="true"
    />
  );
}

// ── Desktop: sticky scroll-driven ─────────────────────────────────────────

function DesktopScroll({locale}: {locale: string}) {
  const t = useTranslations('Home.esperienze');
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={ref} style={{height: `${N * 100}vh`}} className="relative bg-canvas">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {ESPERIENZE.map((e, i) => (
          <SceneBackground
            key={`${e.key}-bg`}
            index={i}
            total={N}
            bg={e.bg}
            scrollYProgress={scrollYProgress}
            reduce={!!reduce}
          />
        ))}
        {ESPERIENZE.map((e, i) => (
          <SceneImage
            key={`${e.key}-img`}
            index={i}
            total={N}
            image={e.image}
            priority={i === 0}
            scrollYProgress={scrollYProgress}
            reduce={!!reduce}
          />
        ))}

        {/* Eyebrow + counter sticky top */}
        <div className="absolute top-0 inset-x-0 z-20 pt-8 sm:pt-10">
          <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex items-baseline justify-between">
            <p className="eyebrow text-cream-on-dark/85">{t('eyebrow')}</p>
            <Counter total={N} scrollYProgress={scrollYProgress} />
          </div>
        </div>

        {ESPERIENZE.map((e, i) => (
          <SceneText
            key={`${e.key}-text`}
            index={i}
            total={N}
            esperienzaKey={e.key}
            align={e.align}
            href={`/${locale}${e.href}`}
            scrollYProgress={scrollYProgress}
            reduce={!!reduce}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Subcomponents desktop
// ============================================================

function sceneOpacityKeyframes(index: number, total: number) {
  const start = index / total;
  const end = (index + 1) / total;
  const FADE = 0.02;
  const fadeInStart = Math.max(start - FADE, 0);
  const fadeOutEnd = Math.min(end + FADE, 1);

  if (index === 0) {
    return {times: [0, end, fadeOutEnd, 1], values: [1, 1, 0, 0]};
  }
  if (index === total - 1) {
    return {times: [0, fadeInStart, start, 1], values: [0, 0, 1, 1]};
  }
  return {
    times: [0, fadeInStart, start, end, fadeOutEnd, 1],
    values: [0, 0, 1, 1, 0, 0]
  };
}

function SceneBackground({
  index, total, bg, scrollYProgress, reduce
}: {
  index: number; total: number; bg: string;
  scrollYProgress: MotionValue<number>; reduce: boolean;
}) {
  const {times, values} = sceneOpacityKeyframes(index, total);
  const opacity = useTransform(scrollYProgress, times, values);
  return (
    <motion.div
      className="absolute inset-0"
      style={{backgroundColor: bg, opacity: reduce ? 1 : opacity}}
    />
  );
}

function SceneImage({
  index, total, image, priority, scrollYProgress, reduce
}: {
  index: number; total: number; image: string; priority: boolean;
  scrollYProgress: MotionValue<number>; reduce: boolean;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const {times, values} = sceneOpacityKeyframes(index, total);
  const opacity = useTransform(scrollYProgress, times, values);
  const scale = useTransform(scrollYProgress, [start, end], reduce ? [1, 1] : [1.08, 1]);

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
        placeholder="blur"
        blurDataURL={HERO_BLUR}
        className="object-cover"
        style={{filter: 'saturate(0.88) brightness(0.82) contrast(1.06)'}}
        priority={priority}
        {...(priority ? {fetchPriority: 'high' as const} : {})}
      />
      <div className="absolute inset-0 atmo-overlay-dark" />
    </motion.div>
  );
}

function SceneText({
  index, total, esperienzaKey, align, href, scrollYProgress, reduce
}: {
  index: number; total: number; esperienzaKey: '1' | '2' | '3' | '4' | '5';
  align: 'left' | 'right'; href: string;
  scrollYProgress: MotionValue<number>; reduce: boolean;
}) {
  const t = useTranslations('Home.esperienze');
  const tCommon = useTranslations('NccPage');
  const start = index / total;
  const end = (index + 1) / total;
  const peakStart = start + 0.05;
  const peakEnd = end - 0.05;

  let opacityTimes: number[], opacityValues: number[];
  let yTimes: number[], yValues: string[];

  if (index === 0) {
    opacityTimes = [0, peakEnd, end, 1];
    opacityValues = [1, 1, 0, 0];
    yTimes = [0, peakEnd, end, 1];
    yValues = reduce ? ['0%', '0%', '0%', '0%'] : ['0%', '0%', '-6%', '-6%'];
  } else if (index === total - 1) {
    opacityTimes = [0, start, peakStart, 1];
    opacityValues = [0, 0, 1, 1];
    yTimes = [0, start, peakStart, 1];
    yValues = reduce ? ['0%', '0%', '0%', '0%'] : ['8%', '8%', '0%', '0%'];
  } else {
    opacityTimes = [0, start, peakStart, peakEnd, end, 1];
    opacityValues = [0, 0, 1, 1, 0, 0];
    yTimes = [0, start, peakStart, peakEnd, end, 1];
    yValues = reduce
      ? ['0%', '0%', '0%', '0%', '0%', '0%']
      : ['8%', '8%', '0%', '0%', '-6%', '-6%'];
  }

  const opacity = useTransform(scrollYProgress, opacityTimes, opacityValues);
  const y = useTransform(scrollYProgress, yTimes, yValues);
  const pointerEvents = useTransform(opacity, (v: number) =>
    v > 0.15 ? 'auto' : 'none'
  );

  const alignClass = align === 'left' ? 'items-start text-left' : 'items-end text-right';

  return (
    <motion.div
      className={`absolute inset-0 z-10 flex flex-col justify-end ${alignClass} px-6 sm:px-12 lg:px-20 pb-24 sm:pb-32`}
      style={{opacity: reduce ? 1 : opacity, y, pointerEvents}}
    >
      <div style={{maxWidth: 'min(560px, 84vw)'}}>
        <h2
          className="hero-headline font-display text-display-lg font-medium text-cream-on-dark"
          style={{fontStretch: '92%', textShadow: '0 2px 18px rgba(0,0,0,0.3)'}}
        >
          {t(`card${esperienzaKey}Title`)}
        </h2>
        <p className="mt-6 max-w-[40ch] text-[18px] sm:text-[20px] text-cream-on-dark/90 leading-[1.55]">
          {t(`card${esperienzaKey}Body`)}
        </p>

        <div
          className={`mt-8 flex flex-wrap gap-3 sm:gap-4 ${
            align === 'left' ? 'justify-start' : 'justify-end'
          }`}
        >
          <Link
            href={href}
            className="inline-flex items-center gap-3 rounded-full bg-cream-on-dark px-7 py-3 text-[12px] uppercase tracking-[0.16em] font-medium text-primary-deep hover:bg-cream-soft transition-colors"
          >
            {tCommon('ctaDiscoverTour')}
            <span aria-hidden="true">→</span>
          </Link>
          <a
            href="https://wa.me/393756413379"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-cream-on-dark/50 px-7 py-3 text-[12px] uppercase tracking-[0.16em] font-medium text-cream-on-dark hover:bg-cream-on-dark/10 hover:border-cream-on-dark transition-colors"
          >
            {tCommon('ctaWhatsApp')}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function Counter({
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
