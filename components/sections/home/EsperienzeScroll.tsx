'use client';

import {Link} from '@/i18n/navigation';
import {useCallback, useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {HERO_BLUR} from '@/lib/blur';
import {useReducedMotion} from 'motion/react';

// EsperienzeScroll — 5 esperienze come capitoli scroll-driven.
// Implementazione ottimizzata: 1 useMotionValueEvent calcola activeIndex,
// CSS opacity transitions (GPU-accelerate) gestiscono il fade tra scene.
// Era con 31+ useTransform che ricalcolavano su ogni scroll frame.

type EsperienzaHref =
  | '/tour/dolce-vita-siracusa'
  | '/tour/silent-sailing'
  | '/tour/isola-delle-correnti'
  | '/tour/etna-premium'
  | '/tour-barocco';

type Esperienza = {
  key: '1' | '2' | '3' | '4' | '5';
  href: EsperienzaHref;
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

  return (
    <section aria-label={t('eyebrow')}>
      {/* Sticky scroll-driven — stesso pattern di /tour-sicilia, attivo su
          tutti i breakpoint. Da iterare su mobile in futuro. */}
      <ExperienceStickyScroll />

      {/* Band terracotta finale */}
      <div className="bg-accent py-20 sm:py-24">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-7">
          <p
            className="font-display text-display-sm font-light text-cream-on-dark max-w-[28ch]"
            style={{fontStretch: '95%'}}
          >
            {t('customTagline')}
          </p>
          <Link
            href="/contatti"
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

// ── Scroll-lock carousel (mobile + desktop) ────────────────────────────────
// Pattern Apple/Tesla: quando la sezione è in fullscreen viewport, attiva
// "lock" che cattura ogni gesto wheel/touch e li traduce in 1 cambio scena
// alla volta. Cooldown 500ms tra cambi → niente skip se scrolli forte,
// niente "buco" se scrolli piano. Ai boundary (prima scena +up / ultima +down)
// rilascia il lock e fa smooth-scroll out, così l'utente esce naturalmente.

const SCENE_COOLDOWN_MS = 500;
const TOUCH_SWIPE_THRESHOLD = 30;
const LOCK_INTERSECTION_THRESHOLD = 0.7;
const UNLOCK_INTERSECTION_THRESHOLD = 0.3;

function ExperienceStickyScroll() {
  const t = useTranslations('Home.esperienze');
  const tCommon = useTranslations('NccPage');
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  // Ref invece di state per accesso sincrono nei listener (no re-render).
  const isLockedRef = useRef(false);
  const lastTriggerRef = useRef(0);
  const touchStartYRef = useRef(0);
  const activeIndexRef = useRef(0);
  // Mantiene activeIndexRef sincronizzato con state (per i listener).
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Smooth-scroll oltre la sezione e rilascio del lock.
  const releaseAndScroll = useCallback((direction: 'up' | 'down') => {
    isLockedRef.current = false;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const target =
      direction === 'down'
        ? window.scrollY + rect.bottom + 1
        : Math.max(0, window.scrollY + rect.top - window.innerHeight - 1);
    window.scrollTo({top: target, behavior: 'smooth'});
  }, []);

  // Avanza/retrocede una scena. Ritorna true se è avvenuto un cambio.
  const advance = useCallback(
    (direction: 'up' | 'down') => {
      const now = Date.now();
      if (now - lastTriggerRef.current < SCENE_COOLDOWN_MS) return true;

      const current = activeIndexRef.current;
      // Boundary: rilascia il lock e fa scroll out
      if (direction === 'up' && current === 0) {
        releaseAndScroll('up');
        return false;
      }
      if (direction === 'down' && current === N - 1) {
        releaseAndScroll('down');
        return false;
      }

      lastTriggerRef.current = now;
      setActiveIndex((prev) => {
        const next =
          direction === 'down'
            ? Math.min(prev + 1, N - 1)
            : Math.max(prev - 1, 0);
        activeIndexRef.current = next;
        return next;
      });
      return true;
    },
    [releaseAndScroll]
  );

  // IntersectionObserver: lock quando >=70% visibile, unlock quando <30%.
  // Reduce motion: skippa il lock entirely (no scroll-jacking per chi non vuole).
  useEffect(() => {
    if (reduce || !ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.intersectionRatio >= LOCK_INTERSECTION_THRESHOLD) {
          isLockedRef.current = true;
        } else if (entry.intersectionRatio < UNLOCK_INTERSECTION_THRESHOLD) {
          isLockedRef.current = false;
        }
      },
      {threshold: [0, 0.3, 0.5, 0.7, 0.9, 1]}
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [reduce]);

  // Wheel + touch listeners che catturano i gesti durante il lock.
  useEffect(() => {
    if (reduce) return;

    const handleWheel = (e: WheelEvent) => {
      if (!isLockedRef.current) return;
      // Preventiamo SEMPRE lo scroll quando lock attivo (anche se cooldown attivo).
      e.preventDefault();
      advance(e.deltaY > 0 ? 'down' : 'up');
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (!isLockedRef.current) return;
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isLockedRef.current) return;
      e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isLockedRef.current) return;
      const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) < TOUCH_SWIPE_THRESHOLD) return;
      advance(deltaY > 0 ? 'down' : 'up');
    };

    window.addEventListener('wheel', handleWheel, {passive: false});
    window.addEventListener('touchstart', handleTouchStart, {passive: true});
    window.addEventListener('touchmove', handleTouchMove, {passive: false});
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [advance, reduce]);

  return (
    <div
      ref={ref}
      className="relative h-[100svh] overflow-hidden bg-canvas"
    >
      {ESPERIENZE.map((e, i) => (
        <SceneLayer
          key={e.key}
          e={e}
          index={i}
          active={activeIndex === i}
          t={t}
          tCommon={tCommon}
          reduce={!!reduce}
        />
      ))}

      {/* Eyebrow + counter top */}
      <div className="absolute top-0 inset-x-0 z-20 pt-8 sm:pt-10 pointer-events-none">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex items-baseline justify-between">
          <p className="eyebrow text-cream-on-dark/85">{t('eyebrow')}</p>
          <div className="flex items-baseline gap-2 text-cream-on-dark/85 tabular-nums">
            <span className="font-display text-2xl sm:text-3xl">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em]">
              / {String(N).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Dots indicator bottom */}
      <div className="absolute bottom-6 inset-x-0 z-20 flex justify-center pointer-events-none">
        <div className="flex gap-2">
          {ESPERIENZE.map((_, i) => (
            <span
              key={i}
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'bg-cream-on-dark w-6'
                  : 'bg-cream-on-dark/40 w-1.5'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Una singola scena: background + image + text + cta, controllata via prop `active`.
// CSS opacity transition con will-change → GPU compositor.
function SceneLayer({
  e,
  index,
  active,
  t,
  tCommon,
  reduce
}: {
  e: Esperienza;
  index: number;
  active: boolean;
  t: ReturnType<typeof useTranslations>;
  tCommon: ReturnType<typeof useTranslations>;
  reduce: boolean;
}) {
  const alignClass =
    e.align === 'left' ? 'items-start text-left' : 'items-end text-right';

  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundColor: e.bg,
        opacity: reduce ? (active ? 1 : 0) : active ? 1 : 0,
        transition: reduce ? 'none' : 'opacity 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity',
        pointerEvents: active ? 'auto' : 'none'
      }}
      aria-hidden={!active}
    >
      {/* Immagine + overlay */}
      <Image
        src={e.image}
        alt=""
        fill
        sizes="100vw"
        quality={80}
        placeholder="blur"
        blurDataURL={HERO_BLUR}
        className="object-cover"
        style={{filter: 'saturate(0.88) brightness(0.82) contrast(1.06)'}}
        priority={index === 0}
        {...(index === 0 ? {fetchPriority: 'high' as const} : {})}
      />
      <div className="absolute inset-0 atmo-overlay-dark" />

      {/* Testo */}
      <div
        className={`absolute inset-0 z-10 flex flex-col justify-end ${alignClass} px-6 sm:px-12 lg:px-20 pb-24 sm:pb-32`}
        style={{
          transform: active ? 'translateY(0)' : 'translateY(2%)',
          transition: reduce
            ? 'none'
            : 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform'
        }}
      >
        <div style={{maxWidth: 'min(560px, 84vw)'}}>
          <h2
            className="hero-headline font-display text-display-lg font-medium text-cream-on-dark whitespace-pre-line"
            style={{fontStretch: '92%', textShadow: '0 2px 18px rgba(0,0,0,0.3)'}}
          >
            {t(`card${e.key}Title`)}
          </h2>
          <p className="mt-6 max-w-[40ch] text-[18px] sm:text-[20px] text-cream-on-dark/90 leading-[1.55]">
            {t(`card${e.key}Body`)}
          </p>

          <div
            className={`mt-8 flex flex-wrap gap-3 sm:gap-4 ${
              e.align === 'left' ? 'justify-start' : 'justify-end'
            }`}
          >
            <Link
              href={e.href}
              className="inline-flex items-center gap-3 rounded-full bg-cream-on-dark px-7 py-3 text-[12px] uppercase tracking-[0.16em] font-medium text-primary-deep hover:bg-cream-soft transition-colors"
            >
              {tCommon('ctaDiscoverTour')}
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-3 rounded-full border border-cream-on-dark/50 px-7 py-3 text-[12px] uppercase tracking-[0.16em] font-medium text-cream-on-dark hover:bg-cream-on-dark/10 hover:border-cream-on-dark transition-colors"
            >
              {tCommon('ctaWhatsApp')}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
