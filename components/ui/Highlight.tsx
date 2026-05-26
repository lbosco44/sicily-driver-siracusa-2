'use client';

import {motion, useReducedMotion} from 'motion/react';
import type {ReactNode} from 'react';

// Highlight inline: marker terracotta wash che fa wipe sx→dx dietro al testo
// quando la sezione entra in viewport. Effetto stile "Hero Highlight" di
// Aceternity ma con palette nostra (gradient terracotta da #E07856 a #B05E40),
// niente viola. Box-decoration-break: clone gestisce eventuali line-wrap del
// segmento highlighted senza spezzare la pittura del background.

export function Highlight({children}: {children: ReactNode}) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      initial={reduce ? false : {backgroundSize: '0% 100%'}}
      whileInView={reduce ? undefined : {backgroundSize: '100% 100%'}}
      viewport={{once: true, margin: '-15%'}}
      transition={{
        duration: 1.4,
        delay: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(224, 120, 86, 0.42) 0%, rgba(176, 94, 64, 0.48) 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        backgroundSize: reduce ? '100% 100%' : '0% 100%',
        padding: '0.05em 0.2em',
        margin: '0 -0.05em',
        borderRadius: '0.15em',
        boxDecorationBreak: 'clone',
        WebkitBoxDecorationBreak: 'clone'
      }}
    >
      {children}
    </motion.span>
  );
}
