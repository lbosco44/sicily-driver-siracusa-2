'use client';

import {useTranslations} from 'next-intl';
import {useReducedMotion} from 'motion/react';
import {ESPERIENZE} from './data';
import {SceneLayer, SceneOverlay} from './SceneLayer';

// Mobile: le 4 scene sono slide a tutta schermata con CSS scroll-snap.
//
// Ogni scena ha `snap-start` + `snap-always` (scroll-snap-align: start +
// scroll-snap-stop: always). `scroll-snap-stop: always` impedisce al browser di
// "passare sopra" una scena: anche con un flick fortissimo lo scroll si ferma
// alla PRIMA foto che incontra → avanza ESATTAMENTE una foto per scroll, forte
// o piano allo stesso modo. È tutto NATIVO del browser: niente intercettazione
// dei gesti (lo scroll-lock via preventDefault era inaffidabile su touch: lock
// asincrono troppo lento sui flick + momentum iOS non bloccabile), quindi
// niente salti e niente "resto bloccato".
//
// Lo `scroll-snap-type: y proximity` sta su <html> SOLO su mobile (globals.css);
// solo queste scene hanno snap-align, quindi il resto della pagina scrolla
// normale.
export function MobileScrollLock() {
  const t = useTranslations('Home.esperienze');
  const tCommon = useTranslations('NccPage');
  const reduce = useReducedMotion();

  return (
    <div>
      {ESPERIENZE.map((e, i) => (
        <div
          key={e.key}
          className="relative h-[100svh] overflow-hidden snap-start snap-always"
        >
          <SceneLayer
            e={e}
            index={i}
            active
            activeIndex={i}
            t={t}
            tCommon={tCommon}
            reduce={!!reduce}
          />
          <SceneOverlay activeIndex={i} t={t} showDots />
        </div>
      ))}
    </div>
  );
}
