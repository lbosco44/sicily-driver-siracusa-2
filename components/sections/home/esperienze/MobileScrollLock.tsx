'use client';

import {useTranslations} from 'next-intl';
import {useReducedMotion} from 'motion/react';
import {ESPERIENZE} from './data';
import {SceneLayer, SceneOverlay} from './SceneLayer';

// Mobile: immagini una dopo l'altra, scroll NORMALE.
// Niente scroll-lock, niente scroll-snap, niente sticky, niente JS sullo
// scroll: solo le 4 scene impilate (foto + titolo + CTA) che scorrono come
// una pagina qualsiasi. Scelta esplicita dell'utente (2026-07-03) dopo che i
// tentativi di aggancio/snap davano problemi su touch: così è robusto e senza
// sorprese su qualsiasi telefono.
export function MobileScrollLock() {
  const t = useTranslations('Home.esperienze');
  const tCommon = useTranslations('NccPage');
  const reduce = useReducedMotion();

  return (
    <div>
      {ESPERIENZE.map((e, i) => (
        <div key={e.key} className="relative h-[100svh] overflow-hidden">
          <SceneLayer
            e={e}
            index={i}
            active
            activeIndex={i}
            t={t}
            tCommon={tCommon}
            reduce={!!reduce}
          />
          <SceneOverlay activeIndex={i} t={t} showDots={false} />
        </div>
      ))}
    </div>
  );
}
