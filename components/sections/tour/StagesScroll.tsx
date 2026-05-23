'use client';

import {useRef} from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue
} from 'motion/react';
import type {TourStage} from '@/lib/tours';

// StagesScroll — pattern scroll-driven sticky per le tappe di un tour.
// Identico spirito all'EsperienzeScroll della home, ma per la singola tour:
// 4 tappe full-bleed che si succedono, foto cambia, testo (numero/titolo/
// durata/body) si compone. La "sezione cuore" cinematografica.

export function StagesScroll({
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
  const ref = useRef<HTMLDivElement>(null);
  const N = stages.length;

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={ref} className="relative bg-canvas" aria-label={eyebrow}>
      {/* Intro sopra lo sticky — eyebrow + h2 grande */}
      <div className="bg-canvas py-24 sm:py-32">
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
      </div>

      <div style={{height: `${N * 100}vh`}} className="relative">
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          {/* Foto sticky per ogni tappa */}
          {stages.map((s, i) => (
            <StageImage
              key={`${s.number}-img`}
              index={i}
              total={N}
              image={s.image}
              priority={i === 0}
              scrollYProgress={scrollYProgress}
            />
          ))}

          {/* Counter "Tappa 01/04" sticky top */}
          <div className="absolute top-0 inset-x-0 z-20 pt-8 sm:pt-10">
            <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex items-baseline justify-between">
              <p className="eyebrow text-cream-on-dark/85">{eyebrow}</p>
              <StageCounter total={N} scrollYProgress={scrollYProgress} />
            </div>
          </div>

          {/* Testo per ogni tappa */}
          {stages.map((s, i) => (
            <StageText
              key={`${s.number}-text`}
              stage={s}
              index={i}
              total={N}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StageImage({
  index,
  total,
  image,
  priority,
  scrollYProgress
}: {
  index: number;
  total: number;
  image: string;
  priority: boolean;
  scrollYProgress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(start - 0.02, 0), start, end, Math.min(end + 0.02, 1)],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [start, end],
    reduce ? [1, 1] : [1.06, 1]
  );

  return (
    <motion.div
      className="absolute inset-0"
      style={{opacity: reduce ? 1 : opacity, scale}}
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        quality={80}
        className="object-cover"
        style={{filter: 'saturate(0.88) brightness(0.78) contrast(1.08)'}}
        priority={priority}
      />
      <div className="absolute inset-0 atmo-overlay-dark" />
    </motion.div>
  );
}

function StageText({
  stage,
  index,
  total,
  scrollYProgress
}: {
  stage: TourStage;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  const start = index / total;
  const peakStart = start + 0.06;
  const peakEnd = (index + 1) / total - 0.06;
  const end = (index + 1) / total;

  const opacity = useTransform(
    scrollYProgress,
    [start, peakStart, peakEnd, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [start, peakStart, peakEnd, end],
    reduce ? ['0%', '0%', '0%', '0%'] : ['6%', '0%', '0%', '-4%']
  );

  // Alterno l'allineamento tra tappa pari e dispari per varietà cinematica
  const alignClass =
    index % 2 === 0 ? 'items-start text-left' : 'items-end text-right';

  return (
    <motion.div
      className={`absolute inset-0 z-10 flex flex-col justify-end ${alignClass} px-6 sm:px-12 lg:px-20 pb-24 sm:pb-32`}
      style={{opacity: reduce ? 1 : opacity, y}}
    >
      <div className="max-w-[36ch]">
        <p
          className="font-display italic font-light text-cream-on-dark/65 text-[20px] sm:text-[22px] mb-4 tabular-nums"
          style={{textShadow: '0 2px 16px rgba(0,0,0,0.4)'}}
        >
          {stage.number} · {stage.duration}
        </p>
        <h3
          className="font-display text-display-lg font-medium text-cream-on-dark"
          style={{
            fontStretch: '95%',
            textShadow: '0 2px 24px rgba(0,0,0,0.35)'
          }}
        >
          {stage.title}
        </h3>
        <p className="mt-7 text-[18px] sm:text-[19px] text-cream-on-dark/90 leading-[1.6] max-w-[48ch]">
          {stage.body}
        </p>
      </div>
    </motion.div>
  );
}

function StageCounter({
  total,
  scrollYProgress
}: {
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const current = useTransform(scrollYProgress, (p) => {
    const idx = Math.min(Math.floor(p * total) + 1, total);
    return String(idx).padStart(2, '0');
  });
  return (
    <div className="flex items-baseline gap-2 text-cream-on-dark/85 tabular-nums">
      <motion.span className="font-display text-2xl sm:text-3xl">
        {current}
      </motion.span>
      <span className="text-[11px] uppercase tracking-[0.18em]">
        / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
}
