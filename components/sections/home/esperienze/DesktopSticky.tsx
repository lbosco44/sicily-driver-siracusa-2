'use client';

import {useRef, useState} from 'react';
import {useTranslations} from 'next-intl';
import {useReducedMotion, useScroll, useMotionValueEvent} from 'motion/react';
import {ESPERIENZE, N} from './data';
import {SceneLayer, SceneOverlay} from './SceneLayer';

// Desktop: container outer 5×60svh, sticky inner h-[100svh].
// 1 useMotionValueEvent deriva activeIndex da scrollYProgress (0→1 sulla
// lunghezza del container). CSS opacity transitions tra scene.

export function DesktopSticky() {
  const t = useTranslations('Home.esperienze');
  const tCommon = useTranslations('NccPage');
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const idx = Math.min(Math.floor(latest * N), N - 1);
    setActiveIndex((prev) => (prev === idx ? prev : idx));
  });

  return (
    <div
      ref={ref}
      style={{height: `${N * 60}svh`}}
      className="relative bg-canvas"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
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
        <SceneOverlay activeIndex={activeIndex} t={t} />
      </div>
    </div>
  );
}
