'use client';

import {Fragment} from 'react';
import {motion, useReducedMotion} from 'motion/react';
import {Highlight} from '@/components/ui/Highlight';

// Whisper = schermo solo testo a piena viewport, una frase grande sola.
// Usato come "respiro" tra capitoli narrativi.
// Word-by-word fade-in on enter view (no scroll-linked, semplice e leggero).

type Bg = 'canvas' | 'canvas-deep' | 'canvas-warm' | 'primary' | 'primary-deep';

const bgClass: Record<Bg, string> = {
  canvas: 'bg-canvas text-ink',
  'canvas-deep': 'bg-canvas-deep text-ink',
  'canvas-warm': 'bg-canvas-warm text-ink',
  primary: 'bg-primary text-cream-on-dark',
  'primary-deep': 'bg-primary-deep text-cream-on-dark'
};

export function Whisper({
  eyebrow,
  text,
  align = 'center',
  bg = 'canvas',
  size = 'lg',
  maxWidthCh = 18
}: {
  eyebrow?: string;
  text: string;
  align?: 'left' | 'center';
  bg?: Bg;
  size?: 'md' | 'lg' | 'xl';
  /** Larghezza massima testo in unità ch (default 18). Bumpare per testi lunghi
   *  che a 18ch andrebbero in troppe righe (es. tagline narrative). */
  maxWidthCh?: number;
}) {
  const reduce = useReducedMotion();
  // Spezza prima per linea (\n = forced break), poi ogni linea per parole.
  // Le righe si rendono con <br> esplicito, le parole con motion.span animate.
  const lines = text.split('\n');

  const sizeClass =
    size === 'xl'
      ? 'text-display-xl'
      : size === 'lg'
        ? 'text-display-lg'
        : 'text-display-md';

  const alignClass =
    align === 'center'
      ? 'items-center text-center'
      : 'items-start text-left';

  const eyebrowColor =
    bg === 'primary' || bg === 'primary-deep'
      ? 'text-cream-on-dark/70'
      : 'text-secondary';

  return (
    <section
      className={`relative ${bgClass[bg]} py-32 sm:py-48 lg:py-56 overflow-hidden`}
    >
      <div
        className={`relative mx-auto px-6 sm:px-10 flex flex-col gap-8 ${alignClass}`}
      >
        {eyebrow && (
          <motion.p
            className={`eyebrow ${eyebrowColor}`}
            initial={reduce ? false : {opacity: 0, y: 8}}
            whileInView={reduce ? undefined : {opacity: 1, y: 0}}
            viewport={{once: true, margin: '-15%'}}
            transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
          >
            {eyebrow}
          </motion.p>
        )}

        <p
          className={`font-display ${sizeClass} font-light ${
            align === 'center' ? 'mx-auto' : ''
          }`}
          style={{fontStretch: '95%', maxWidth: `${maxWidthCh}ch`}}
        >
          {(() => {
            // Indice globale parola attraversa righe + segmenti per stagger continuo
            let wordIdx = 0;

            // Render dei token di un segmento (highlight o plain) con motion.span
            // per ogni parola. Increment di wordIdx globale per mantenere stagger.
            const renderTokens = (text: string, keyPrefix: string) =>
              text.split(/(\s+)/).map((token, tokenIdx) => {
                if (/\s+/.test(token) || token === '') {
                  return <span key={`${keyPrefix}-${tokenIdx}`}>{token}</span>;
                }
                const myIdx = wordIdx++;
                return (
                  <motion.span
                    key={`${keyPrefix}-${tokenIdx}`}
                    className="inline-block"
                    initial={reduce ? false : {opacity: 0, y: '0.4em'}}
                    whileInView={reduce ? undefined : {opacity: 1, y: 0}}
                    viewport={{once: true, margin: '-15%'}}
                    transition={{
                      duration: 0.7,
                      delay: myIdx * 0.04,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    {token}
                  </motion.span>
                );
              });

            return lines.map((line, lineIdx) => {
              // Spezza la linea in segmenti alternati: plain text e **highlight**.
              // Es: "La Sicilia non **si vive**." → ["La Sicilia non ", "**si vive**", "."]
              const segments = line
                .split(/(\*\*[^*]+\*\*)/g)
                .filter((s) => s.length > 0);
              return (
                <Fragment key={`line-${lineIdx}`}>
                  {lineIdx > 0 && <br />}
                  {segments.map((segment, segIdx) => {
                    const isHl =
                      segment.startsWith('**') && segment.endsWith('**');
                    const text = isHl ? segment.slice(2, -2) : segment;
                    const keyPrefix = `${lineIdx}-${segIdx}`;
                    if (isHl) {
                      return (
                        <Highlight key={keyPrefix}>
                          {renderTokens(text, keyPrefix)}
                        </Highlight>
                      );
                    }
                    return (
                      <Fragment key={keyPrefix}>
                        {renderTokens(text, keyPrefix)}
                      </Fragment>
                    );
                  })}
                </Fragment>
              );
            });
          })()}
        </p>
      </div>
    </section>
  );
}
