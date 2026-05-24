'use client';

import {useRef} from 'react';
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
// Contenitore alto 5×100vh, foto sticky che cambia col progresso di scroll.
// Background atmosferico per ogni momento. Reference: Diamond Rose + Blue Marine.

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
  const ref = useRef<HTMLDivElement>(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={ref} className="relative bg-canvas" aria-label={t('eyebrow')}>
      <div style={{height: `${N * 100}vh`}} className="relative">
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          {/* Backgrounds layer (uno per esperienza) */}
          {ESPERIENZE.map((e, i) => (
            <SceneBackground
              key={`${e.key}-bg`}
              index={i}
              total={N}
              bg={e.bg}
              scrollYProgress={scrollYProgress}
            />
          ))}

          {/* Foto layer (uno per esperienza) */}
          {ESPERIENZE.map((e, i) => (
            <SceneImage
              key={`${e.key}-img`}
              index={i}
              total={N}
              image={e.image}
              priority={i === 0}
              scrollYProgress={scrollYProgress}
            />
          ))}

          {/* Eyebrow + counter sticky top */}
          <div className="absolute top-0 inset-x-0 z-20 pt-8 sm:pt-10">
            <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex items-baseline justify-between">
              <p className="eyebrow text-cream-on-dark/85">{t('eyebrow')}</p>
              <Counter total={N} scrollYProgress={scrollYProgress} />
            </div>
          </div>

          {/* Testo per ogni esperienza */}
          {ESPERIENZE.map((e, i) => (
            <SceneText
              key={`${e.key}-text`}
              index={i}
              total={N}
              esperienzaKey={e.key}
              align={e.align}
              href={`/${locale}${e.href}`}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>

      {/* Riga finale "tour su misura" — band accent terracotta per spiccare
          rispetto alle sezioni cream sopra/sotto */}
      <div className="bg-accent py-20 sm:py-24">
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

// ============================================================
// Subcomponents — ognuno chiama useTransform al top level
// ============================================================

// Bulletproof keyframes: EXPLICITLY cover the full [0, 1] range so Motion
// never has to extrapolate. Every scene gets a "0 before, peak during,
// 0 after" envelope with hard anchors at progress=0 and progress=1.
function sceneOpacityKeyframes(index: number, total: number) {
  const start = index / total;
  const end = (index + 1) / total;
  const FADE = 0.02;
  const fadeInStart = Math.max(start - FADE, 0);
  const fadeOutEnd = Math.min(end + FADE, 1);

  if (index === 0) {
    return {
      times: [0, end, fadeOutEnd, 1],
      values: [1, 1, 0, 0]
    };
  }
  if (index === total - 1) {
    return {
      times: [0, fadeInStart, start, 1],
      values: [0, 0, 1, 1]
    };
  }
  return {
    times: [0, fadeInStart, start, end, fadeOutEnd, 1],
    values: [0, 0, 1, 1, 0, 0]
  };
}

function SceneBackground({
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
  const {times, values} = sceneOpacityKeyframes(index, total);
  const opacity = useTransform(scrollYProgress, times, values);
  const scale = useTransform(
    scrollYProgress,
    [start, end],
    reduce ? [1, 1] : [1.08, 1]
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
  index,
  total,
  esperienzaKey,
  align,
  href,
  scrollYProgress
}: {
  index: number;
  total: number;
  esperienzaKey: '1' | '2' | '3' | '4' | '5';
  align: 'left' | 'right';
  href: string;
  scrollYProgress: MotionValue<number>;
}) {
  const t = useTranslations('Home.esperienze');
  const tCommon = useTranslations('NccPage');
  const reduce = useReducedMotion();
  const start = index / total;
  const end = (index + 1) / total;
  const peakStart = start + 0.05;
  const peakEnd = end - 0.05;

  // Same full-range strategy as scene bg/img — explicit 4-6 point keyframes
  // that hard-anchor progress=0 AND progress=1, no extrapolation guesswork.
  let opacityTimes: number[];
  let opacityValues: number[];
  let yTimes: number[];
  let yValues: string[];

  if (index === 0) {
    opacityTimes = [0, peakEnd, end, 1];
    opacityValues = [1, 1, 0, 0];
    yTimes = [0, peakEnd, end, 1];
    yValues = reduce
      ? ['0%', '0%', '0%', '0%']
      : ['0%', '0%', '-6%', '-6%'];
  } else if (index === total - 1) {
    opacityTimes = [0, start, peakStart, 1];
    opacityValues = [0, 0, 1, 1];
    yTimes = [0, start, peakStart, 1];
    yValues = reduce
      ? ['0%', '0%', '0%', '0%']
      : ['8%', '8%', '0%', '0%'];
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
  // Only the visible scene catches clicks — without this, all 5 stacked
  // motion.divs (z-10 absolute inset-0) block pointer even when invisible.
  const pointerEvents = useTransform(opacity, (v: number) =>
    v > 0.15 ? 'auto' : 'none'
  );

  const alignClass =
    align === 'left' ? 'items-start text-left' : 'items-end text-right';

  return (
    <motion.div
      className={`absolute inset-0 z-10 flex flex-col justify-end ${alignClass} px-6 sm:px-12 lg:px-20 pb-24 sm:pb-32`}
      style={{opacity: reduce ? 1 : opacity, y, pointerEvents}}
    >
      <div style={{maxWidth: 'min(560px, 84vw)'}}>
        <p className="eyebrow text-cream-on-dark/85 mb-5">
          {t(`card${esperienzaKey}Tag`)}
        </p>
        <h2
          className="hero-headline font-display text-display-lg font-medium text-cream-on-dark"
          style={{
            fontStretch: '92%',
            textShadow: '0 2px 18px rgba(0,0,0,0.3)'
          }}
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
