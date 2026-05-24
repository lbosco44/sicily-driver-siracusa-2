'use client';

import {motion, useReducedMotion} from 'motion/react';

// AnimatedHeading — testo che entra parola-per-parola quando appare in
// viewport. Stesso pattern del componente Whisper della home, estratto
// per essere riusabile in qualunque hero/CTA grande.
//
// Usage:
//   <AnimatedHeading as="h2" text={t('h2')} className="..." style={...} />
//
// `as` accetta h1 | h2 | h3 | p — il default è h2 per il caso più comune
// (CTA finale, sezioni hub). Se l'utente non vuole il fade, rispetta
// useReducedMotion automaticamente.

type Tag = 'h1' | 'h2' | 'h3' | 'p';

export function AnimatedHeading({
  as = 'h2',
  text,
  className,
  style,
  delayPerWord = 0.04,
  initialOffset = '0.4em'
}: {
  as?: Tag;
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delayPerWord?: number;
  initialOffset?: string;
}) {
  const reduce = useReducedMotion();
  // Split mantenendo whitespace così non si schiaccia tutto su una riga.
  const words = text.split(/(\s+)/);

  // Polymorphic render con motion.h2 etc. — Motion ha un wrapper per ogni tag.
  const Tag: keyof React.JSX.IntrinsicElements = as;

  return (
    <Tag className={className} style={style}>
      {words.map((w, i) =>
        /\s+/.test(w) ? (
          <span key={i}>{w}</span>
        ) : (
          <motion.span
            key={i}
            className="inline-block"
            initial={reduce ? false : {opacity: 0, y: initialOffset}}
            whileInView={reduce ? undefined : {opacity: 1, y: 0}}
            viewport={{once: true, margin: '-15%'}}
            transition={{
              duration: 0.7,
              delay: i * delayPerWord,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {w}
          </motion.span>
        )
      )}
    </Tag>
  );
}
