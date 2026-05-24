'use client';

import {useRef} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useTranslations, useLocale} from 'next-intl';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue
} from 'motion/react';

// EsperienzeScroll — 5 esperienze come capitoli scroll-driven.
// Contenitore alto 5×100vh, foto sticky che cambia col progresso di scroll.
// Background atmosferico per ogni momento. Reference: Diamond Rose + Blue Marine.

type Esperienza = {
  key: '1' | '2' | '3' | '4' | '5';
  href: string;
  image: string;
  bg: string;
  align: 'left' | 'right';
};

const ESPERIENZE: Esperienza[] = [
  {
    key: '1',
    href: '/tour/dolce-vita-siracusa',
    image:
      'https://images.unsplash.com/photo-1583435423797-be15ddffe3c2?w=2000&q=80&auto=format&fm=webp',
    bg: '#E8DBC4',
    align: 'left'
  },
  {
    key: '2',
    href: '/tour/silent-sailing',
    image:
      'https://images.unsplash.com/photo-1502780402662-acc01917298e?w=2000&q=80&auto=format&fm=webp',
    bg: '#1E3A4F',
    align: 'right'
  },
  {
    key: '3',
    href: '/tour/isola-delle-correnti',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2000&q=80&auto=format&fm=webp',
    bg: '#EDE5D6',
    align: 'left'
  },
  {
    key: '4',
    href: '/tour/etna-premium',
    image:
      'https://images.unsplash.com/photo-1604930571107-7e07e44f31b8?w=2000&q=80&auto=format&fm=webp',
    bg: '#B05E40',
    align: 'right'
  },
  {
    key: '5',
    href: '/tour-barocco',
    image:
      'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=2000&q=80&auto=format&fm=webp',
    bg: '#5F7367',
    align: 'left'
  }
];

const N = ESPERIENZE.length;

export function EsperienzeScroll() {
  const t = useTranslations('Home.esperienze');
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={ref} className="relative bg-canvas" aria-label={t('eyebrow')}>
      <div style={{height: `${N * 100}vh`}} className="relative">
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          {/* Backgrounds layer (uno per esperienza) */}
          {ESPERIENZE.map((e, i) => (
            <SceneBackground
              key={`${e.key}-bg`}
              index={i}
              total={N}
              bg={e.bg}
              scrollYProgress={scrollYProgress}
            />
          ))}

          {/* Foto layer (uno per esperienza) */}
          {ESPERIENZE.map((e, i) => (
            <SceneImage
              key={`${e.key}-img`}
              index={i}
              total={N}
              image={e.image}
              priority={i === 0}
              scrollYProgress={scrollYProgress}
            />
          ))}

          {/* Eyebrow + counter sticky top */}
          <div className="absolute top-0 inset-x-0 z-20 pt-8 sm:pt-10">
            <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex items-baseline justify-between">
              <p className="eyebrow text-cream-on-dark/85">{t('eyebrow')}</p>
              <Counter total={N} scrollYProgress={scrollYProgress} />
            </div>
          </div>

          {/* Testo per ogni esperienza */}
          {ESPERIENZE.map((e, i) => (
            <SceneText
              key={`${e.key}-text`}
              index={i}
              total={N}
              esperienzaKey={e.key}
              align={e.align}
              href={`/${locale}${e.href}`}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>

      {/* Riga finale "tour su misura" */}
      <div className="bg-canvas py-16 sm:py-20 border-t border-[var(--border)]">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-5">
          <p className="font-display text-display-sm font-light text-ink/80 max-w-[28ch]">
            {t('customTagline')}
          </p>
          <Link
            href={`/${locale}/contatti`}
            className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] font-medium text-primary border-b border-accent pb-1 hover:border-accent-hover transition-colors self-start"
          >
            {t('customCta')}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Subcomponents — ognuno chiama useTransform al top level
// ============================================================

function SceneBackground({
  index,
  total,
  bg,
  scrollYProgress
}: {
  index: number;
  total: number;
  bg: string;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const reduce = useReducedMotion();
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(start - 0.02, 0), start, end, Math.min(end + 0.02, 1)],
    [0, 1, 1, 0]
  );
  return (
    <motion.div
      className="absolute inset-0"
      style={{backgroundColor: bg, opacity: reduce ? 1 : opacity}}
    />
  );
}

function SceneImage({
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
    reduce ? [1, 1] : [1.08, 1]
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
        style={{filter: 'saturate(0.88) brightness(0.82) contrast(1.06)'}}
        priority={priority}
      />
      <div className="absolute inset-0 atmo-overlay-dark" />
    </motion.div>
  );
}

function SceneText({
  index,
  total,
  esperienzaKey,
  align,
  href,
  scrollYProgress
}: {
  index: number;
  total: number;
  esperienzaKey: '1' | '2' | '3' | '4' | '5';
  align: 'left' | 'right';
  href: string;
  scrollYProgress: MotionValue<number>;
}) {
  const t = useTranslations('Home.esperienze');
  const reduce = useReducedMotion();
  const start = index / total;
  const peakStart = start + 0.05;
  const peakEnd = (index + 1) / total - 0.05;
  const end = (index + 1) / total;

  const opacity = useTransform(
    scrollYProgress,
    [start, peakStart, peakEnd, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [start, peakStart, peakEnd, end],
    reduce ? ['0%', '0%', '0%', '0%'] : ['8%', '0%', '0%', '-6%']
  );

  const alignClass =
    align === 'left' ? 'items-start text-left' : 'items-end text-right';

  return (
    <motion.div
      className={`absolute inset-0 z-10 flex flex-col justify-end ${alignClass} px-6 sm:px-12 lg:px-20 pb-24 sm:pb-32`}
      style={{opacity: reduce ? 1 : opacity, y}}
    >
      <div
        className="max-w-[28ch]"
        style={{maxWidth: 'min(28ch, 44vw)'}}
      >
        <p className="eyebrow text-cream-on-dark/85 mb-5">
          {t(`card${esperienzaKey}Tag`)}
        </p>
        <h2
          className="hero-headline font-display text-display-lg font-medium text-cream-on-dark"
          style={{
            fontStretch: '92%',
            textShadow: '0 2px 18px rgba(0,0,0,0.3)'
          }}
        >
          {t(`card${esperienzaKey}Title`)}
        </h2>
        <p className="mt-6 max-w-[40ch] text-[18px] sm:text-[20px] text-cream-on-dark/90 leading-[1.55]">
          {t(`card${esperienzaKey}Body`)}
        </p>
        <Link
          href={href}
          className="mt-8 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] font-medium text-cream-on-dark border-b border-cream-on-dark/40 pb-1 hover:border-cream-on-dark transition-colors"
        >
          {t('cardCta')}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </motion.div>
  );
}

function Counter({
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
