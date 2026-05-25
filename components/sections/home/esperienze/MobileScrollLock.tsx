'use client';

import {useCallback, useEffect, useRef, useState} from 'react';
import {useTranslations} from 'next-intl';
import {useReducedMotion} from 'motion/react';
import {ESPERIENZE, N} from './data';
import {SceneLayer, SceneOverlay} from './SceneLayer';

// Mobile: scroll-lock pattern (Apple/Tesla style).
// 1 gesto wheel/touch = 1 cambio scena, niente skip, niente buco.
// Boundary release con smooth-scroll out.

const SCENE_COOLDOWN_MS = 450;
const TOUCH_SWIPE_THRESHOLD = 30;
const LOCK_INTERSECTION_THRESHOLD = 0.85;
const UNLOCK_INTERSECTION_THRESHOLD = 0.3;
const LOCK_SETTLE_MS = 600;

export function MobileScrollLock() {
  const t = useTranslations('Home.esperienze');
  const tCommon = useTranslations('NccPage');
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const isLockedRef = useRef(false);
  const lockSettleAtRef = useRef(0);
  const lastTriggerRef = useRef(0);
  const touchStartYRef = useRef<number | null>(null);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

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

  const advance = useCallback(
    (direction: 'up' | 'down') => {
      const now = Date.now();
      if (now - lockSettleAtRef.current < LOCK_SETTLE_MS) return;
      if (now - lastTriggerRef.current < SCENE_COOLDOWN_MS) return;

      const current = activeIndexRef.current;
      if (direction === 'up' && current === 0) {
        releaseAndScroll('up');
        return;
      }
      if (direction === 'down' && current === N - 1) {
        releaseAndScroll('down');
        return;
      }

      lastTriggerRef.current = now;
      const next =
        direction === 'down'
          ? Math.min(current + 1, N - 1)
          : Math.max(current - 1, 0);
      activeIndexRef.current = next;
      setActiveIndex(next);
    },
    [releaseAndScroll]
  );

  // IntersectionObserver: quando sezione raggiunge ~fullscreen,
  // 1. determina direzione di entrata via rect.top sign:
  //    - rect.top > 0  → utente scrolla giu', entra da sotto → scene 0
  //    - rect.top < 0  → utente scrolla su, entra da sopra → scene N-1
  // 2. attiva lock
  // 3. smooth-scroll per allineare PRECISAMENTE section.top a viewport.top
  useEffect(() => {
    if (reduce || !ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.intersectionRatio >= LOCK_INTERSECTION_THRESHOLD) {
          if (!isLockedRef.current) {
            const rect = entry.boundingClientRect;

            if (rect.top < -1) {
              activeIndexRef.current = N - 1;
              setActiveIndex(N - 1);
            } else if (rect.top > 1) {
              activeIndexRef.current = 0;
              setActiveIndex(0);
            }

            isLockedRef.current = true;
            lockSettleAtRef.current = Date.now();

            if (Math.abs(rect.top) > 1) {
              window.scrollTo({
                top: window.scrollY + rect.top,
                behavior: 'smooth'
              });
            }
          }
        } else if (entry.intersectionRatio < UNLOCK_INTERSECTION_THRESHOLD) {
          isLockedRef.current = false;
        }
      },
      {threshold: [0, 0.3, 0.5, 0.7, 0.85, 0.95, 1]}
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [reduce]);

  useEffect(() => {
    if (reduce) return;

    const handleWheel = (e: WheelEvent) => {
      if (!isLockedRef.current) return;
      e.preventDefault();
      advance(e.deltaY > 0 ? 'down' : 'up');
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isLockedRef.current) return;
      e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isLockedRef.current || touchStartYRef.current === null) return;
      const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;
      touchStartYRef.current = null;
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
    <div ref={ref} className="relative h-[100svh] overflow-hidden bg-canvas">
      {ESPERIENZE.map((e, i) => (
        <SceneLayer
          key={e.key}
          e={e}
          index={i}
          active={activeIndex === i}
          activeIndex={activeIndex}
          t={t}
          tCommon={tCommon}
          reduce={!!reduce}
        />
      ))}
      <SceneOverlay activeIndex={activeIndex} t={t} showDots />
    </div>
  );
}
