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
  type MotionValue,
  type PanInfo
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
      {/* ── MOBILE: swipe Reels-style via motion drag ── */}
      <div className="md:hidden">
        <MobileSwipeReels locale={locale} />
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

// ── Mobile: swipe Reels-style via motion drag ──────────────────────────────
// Section h-[100svh] in flusso pagina. Dentro, motion.div con drag="y" che
// contiene le 5 scene stackate. Snap su drag-end via velocity+offset.
// Boundary force-exit: swipe forte oltre la prima/ultima scena scrolla la
// pagina fuori dalla sezione (niente trap).

function MobileSwipeReels({locale}: {locale: string}) {
  const t = useTranslations('Home.esperienze');
  const tCommon = useTranslations('NccPage');
  const sectionRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const [vh, setVh] = useState(0);
  // active = sezione a schermo intero (>=90% visibile). Solo quando active
  // catturiamo lo swipe; altrimenti il dito scrolla la pagina normalmente.
  const [active, setActive] = useState(false);

  // Misuro l'altezza reale del container (svh varia con address bar mobile)
  useEffect(() => {
    if (!sectionRef.current) return;
    const measure = () => {
      if (sectionRef.current) setVh(sectionRef.current.clientHeight);
    };
    measure();
    window.addEventListener('resize', measure);
    window.addEventListener('orientationchange', measure);
    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('orientationchange', measure);
    };
  }, []);

  // IntersectionObserver: attiva drag solo a fullscreen (>=92%).
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setActive(entry.intersectionRatio >= 0.92);
      },
      {threshold: [0, 0.5, 0.92, 1]}
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Magnete entry in JS: quando lo scroll si ferma (debounce 130ms) e la
  // sezione è 25-90% visibile + il suo top è entro ±75% di vh dal viewport
  // top, fa smooth-scroll per allinearla a fullscreen.
  // didSnap one-shot per evitare loop infiniti. Reset quando esce <10%.
  useEffect(() => {
    if (!sectionRef.current) return;
    let didSnap = false;
    let scrollEndTimer: ReturnType<typeof setTimeout> | undefined;

    const checkSnap = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const winH = window.innerHeight;
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(winH, rect.bottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const ratio = visibleHeight / Math.max(1, rect.height);

      if (ratio < 0.1) {
        didSnap = false;
        return;
      }
      if (
        !didSnap &&
        ratio > 0.25 &&
        ratio < 0.9 &&
        Math.abs(rect.top) < winH * 0.75
      ) {
        didSnap = true;
        window.scrollTo({
          top: window.scrollY + rect.top,
          behavior: 'smooth'
        });
      }
    };

    const onScroll = () => {
      if (scrollEndTimer) clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(checkSnap, 130);
    };

    window.addEventListener('scroll', onScroll, {passive: true});
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollEndTimer) clearTimeout(scrollEndTimer);
    };
  }, []);

  const handleDragEnd = (_e: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => {
    const {offset, velocity} = info;
    const SCENE_THRESHOLD = vh / 5; // 20% di scena = cambio
    const VEL_THRESHOLD = 350;
    const EXIT_OFFSET = vh / 2.5;
    const EXIT_VELOCITY = 900;

    // Exit forward: ultima scena, swipe forte verso l'alto → scroll page giù
    if (
      index === N - 1 &&
      (offset.y < -EXIT_OFFSET || velocity.y < -EXIT_VELOCITY) &&
      sectionRef.current
    ) {
      const rect = sectionRef.current.getBoundingClientRect();
      const targetY = window.scrollY + rect.bottom + 1;
      window.scrollTo({top: targetY, behavior: 'smooth'});
      return;
    }
    // Exit backward: prima scena, swipe forte verso il basso → scroll page su
    if (
      index === 0 &&
      (offset.y > EXIT_OFFSET || velocity.y > EXIT_VELOCITY) &&
      sectionRef.current
    ) {
      const rect = sectionRef.current.getBoundingClientRect();
      const targetY = window.scrollY + rect.top - vh + 1;
      window.scrollTo({top: Math.max(0, targetY), behavior: 'smooth'});
      return;
    }

    // Snap a scena vicina
    let target = index;
    if (offset.y < -SCENE_THRESHOLD || velocity.y < -VEL_THRESHOLD) {
      target = Math.min(index + 1, N - 1);
    } else if (offset.y > SCENE_THRESHOLD || velocity.y > VEL_THRESHOLD) {
      target = Math.max(index - 1, 0);
    }
    setIndex(target);
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] overflow-hidden bg-canvas"
      style={{touchAction: active ? 'none' : 'pan-y'}}
      aria-label="Esperienze — swipe per navigare"
    >
      <motion.div
        drag={active && vh > 0 ? 'y' : false}
        dragConstraints={{top: -(N - 1) * vh, bottom: 0}}
        dragElastic={0.12}
        dragMomentum={false}
        animate={{y: -index * vh}}
        transition={{type: 'tween', duration: 0.32, ease: [0.2, 0.85, 0.25, 1]}}
        onDragEnd={handleDragEnd}
        className="will-change-transform"
        style={{height: vh > 0 ? `${N * vh}px` : `${N * 100}svh`}}
      >
        {ESPERIENZE.map((e, i) => (
          <ReelsScene key={e.key} e={e} index={i} locale={locale} t={t} tCommon={tCommon} />
        ))}
      </motion.div>

      {/* Counter + dots overlay (fuori dal drag, fissi sulla viewport) */}
      <div className="pointer-events-none absolute top-0 inset-x-0 z-20 pt-6">
        <div className="px-6 flex items-baseline justify-between">
          <p className="eyebrow text-cream-on-dark/85">{t('eyebrow')}</p>
          <div className="flex items-baseline gap-2 text-cream-on-dark/85 tabular-nums">
            <span className="font-display text-2xl">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em]">
              / {String(N).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Dots indicator + hint */}
      <div className="pointer-events-none absolute bottom-6 inset-x-0 z-20 flex flex-col items-center gap-3">
        <div className="flex gap-2">
          {ESPERIENZE.map((_, i) => (
            <span
              key={i}
              className={`block w-1.5 h-1.5 rounded-full transition-all ${
                i === index ? 'bg-cream-on-dark w-6' : 'bg-cream-on-dark/40'
              }`}
            />
          ))}
        </div>
        <p className="text-[10px] uppercase tracking-[0.22em] font-medium text-cream-on-dark/55">
          {index === N - 1 ? t('swipeExit') : t('swipeHint')}
        </p>
      </div>
    </section>
  );
}

function ReelsScene({
  e,
  index,
  locale,
  t,
  tCommon
}: {
  e: Esperienza;
  index: number;
  locale: string;
  t: ReturnType<typeof useTranslations>;
  tCommon: ReturnType<typeof useTranslations>;
}) {
  const alignClass =
    e.align === 'left' ? 'items-start text-left' : 'items-end text-right';
  return (
    <div className="relative h-[100svh] overflow-hidden" style={{backgroundColor: e.bg}}>
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
