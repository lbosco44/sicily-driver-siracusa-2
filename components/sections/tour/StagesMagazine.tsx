'use client';

import Image from 'next/image';
import {motion, useReducedMotion} from 'motion/react';
import type {TourStage} from '@/lib/tours';

// StagesMagazine — 4 tappe come scene editorial alternate side-by-side.
// Pattern diverso dal sticky scroll della home (no ridondanza).
// Reference: Diamond Rose lifestyle moments — foto grandi, testo accanto,
// alternato, scroll normale.

const BG_VARIANTS = [
  'bg-canvas',
  'bg-canvas-deep',
  'bg-canvas-warm',
  'bg-canvas'
] as const;

export function StagesMagazine({
  stages,
  eyebrow,
  h2Pre,
  h2Accent
}: {
  stages: TourStage[];
  eyebrow: string;
  h2Pre: string;
  h2Accent: string;
}) {
  const reduce = useReducedMotion();

  return (
    <>
      {/* Header sezione */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <p className="eyebrow mb-7">{eyebrow}</p>
          <h2
            className="font-display text-display-lg font-light text-ink max-w-[20ch]"
            style={{fontStretch: '95%'}}
          >
            {h2Pre}{' '}
            <span className="text-accent">{h2Accent}</span>
          </h2>
        </div>
      </section>

      {/* Scene alternate */}
      {stages.map((stage, i) => {
        const reverse = i % 2 === 1;
        const bg = BG_VARIANTS[i % BG_VARIANTS.length];
        // Aspect ratio alternato per dinamica visiva
        const aspect = i % 2 === 0 ? 'aspect-[4/5]' : 'aspect-[5/4]';

        return (
          <section key={stage.number} className={`${bg} py-24 sm:py-32 lg:py-40`}>
            <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Foto */}
                <motion.figure
                  className={`relative lg:col-span-7 ${aspect} overflow-hidden grain ${
                    reverse ? 'lg:order-2' : 'lg:order-1'
                  }`}
                  initial={reduce ? false : {opacity: 0, y: 32}}
                  whileInView={
                    reduce ? undefined : {opacity: 1, y: 0}
                  }
                  viewport={{once: true, margin: '-12%'}}
                  transition={{duration: 1.1, ease: [0.16, 1, 0.3, 1]}}
                >
                  <Image
                    src={stage.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                    loading={i < 1 ? 'eager' : 'lazy'}
                    style={{
                      filter: 'saturate(0.88) brightness(0.92) contrast(1.06)'
                    }}
                  />
                </motion.figure>

                {/* Testo a fianco */}
                <motion.div
                  className={`lg:col-span-5 ${
                    reverse ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  initial={reduce ? false : {opacity: 0, x: reverse ? -24 : 24}}
                  whileInView={
                    reduce ? undefined : {opacity: 1, x: 0}
                  }
                  viewport={{once: true, margin: '-12%'}}
                  transition={{
                    duration: 1,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {/* Numero + durata */}
                  <p className="font-display italic font-light text-accent text-[20px] sm:text-[22px] mb-5 tabular-nums">
                    {stage.number} · {stage.duration}
                  </p>

                  {/* Titolo grande Bricolage */}
                  <h3
                    className="font-display text-display-md font-light text-ink leading-[1.02] mb-8"
                    style={{fontStretch: '95%'}}
                  >
                    {stage.title}
                  </h3>

                  {/* Body */}
                  <p className="text-[18px] sm:text-[19px] leading-[1.7] text-ink-soft max-w-[48ch]">
                    {stage.body}
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
