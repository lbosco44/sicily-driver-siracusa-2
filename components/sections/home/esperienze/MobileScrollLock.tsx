'use client';

import {useRef, useState} from 'react';
import {useTranslations} from 'next-intl';
import {useReducedMotion, useScroll, useMotionValueEvent} from 'motion/react';
import {ESPERIENZE, N} from './data';
import {SceneLayer, SceneOverlay} from './SceneLayer';

// Mobile: sticky vertical scroll — stesso pattern robusto del desktop
// (DesktopWebGL): un contenitore ALTO + un inner `sticky`, e la scena attiva
// è derivata dalla POSIZIONE di scroll, non intercettando i gesti.
//
// PERCHÉ (fix 2026-07-03): la versione precedente era uno "scroll-lock" che
// bloccava wheel/touch con preventDefault e cambiava scena 1-per-gesto. Su
// touch è inaffidabile: (1) il lock si arma via IntersectionObserver ASINCRONO,
// troppo lento per un flick veloce; (2) su iOS lo scroll inerziale dopo il
// touchend NON è bloccabile via JS. Risultato: con uno scroll forte la sezione
// (alta 1 sola schermata) usciva dal viewport "senza agganciare", saltando le
// foto. Qui non c'è nulla da intercettare: le foto SONO lo scroll. Niente
// scroll-jacking, niente blocco iOS, niente salti.
//
// Ogni scena occupa VH_PER_SCENE di scroll: più alto = serve scrollare di più
// per cambiare foto (feel più "lento/deciso"); più basso = cambio più rapido.
const VH_PER_SCENE = 70;

export function MobileScrollLock() {
  const t = useTranslations('Home.esperienze');
  const tCommon = useTranslations('NccPage');
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });

  // La foto mostrata è sempre quella più vicina alla posizione di scroll
  // (Math.round): niente stati "a metà dissolvenza", una foto alla volta.
  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const idx = Math.max(0, Math.min(N - 1, Math.round(p * (N - 1))));
    setActiveIndex((prev) => (prev === idx ? prev : idx));
  });

  return (
    <div
      ref={ref}
      style={{height: `${100 + VH_PER_SCENE * (N - 1)}svh`}}
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
        <SceneOverlay activeIndex={activeIndex} t={t} showDots />
      </div>
    </div>
  );
}
