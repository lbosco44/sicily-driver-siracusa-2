'use client';

import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
import {HERO_BLUR} from '@/lib/blur';
import {ESPERIENZE, N, type Esperienza} from './data';

// Una singola scena: background + image + text + cta, controllata via prop `active`.
// CSS opacity transition con will-change → GPU compositor.
//
// Lazy-render (T5): renderizziamo l'<Image> SOLO se la scena è quella attiva,
// la precedente o la successiva. Le scene "distanti" (es. scena 5 mentre sei
// sulla 1) hanno solo il colore di background + placeholder bg ma niente
// Image montata. Riduce payload iniziale mobile da ~1.2MB a ~600KB e libera
// memoria GPU per i layer non visibili.

export function SceneLayer({
  e,
  index,
  active,
  activeIndex,
  t,
  tCommon,
  reduce
}: {
  e: Esperienza;
  index: number;
  active: boolean;
  activeIndex: number;
  t: ReturnType<typeof useTranslations>;
  tCommon: ReturnType<typeof useTranslations>;
  reduce: boolean;
}) {
  const alignClass =
    e.align === 'left' ? 'items-start text-left' : 'items-end text-right';

  // Render Image solo se siamo entro 1 step dalla scena attiva (current ± 1).
  // La prima scena è sempre montata (priority + LCP).
  const shouldRenderImage =
    index === 0 || Math.abs(index - activeIndex) <= 1;

  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundColor: e.bg,
        opacity: reduce ? (active ? 1 : 0) : active ? 1 : 0,
        transition: reduce
          ? 'none'
          : 'opacity 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity',
        pointerEvents: active ? 'auto' : 'none'
      }}
      aria-hidden={!active}
    >
      {shouldRenderImage && (
        <>
          <Image
            src={e.image}
            alt=""
            fill
            sizes="100vw"
            quality={80}
            placeholder="blur"
            blurDataURL={HERO_BLUR}
            className="object-cover"
            style={{filter: 'saturate(0.88) brightness(0.82) contrast(1.06)'}}
            priority={index === 0}
            {...(index === 0 ? {fetchPriority: 'high' as const} : {})}
          />
          <div className="absolute inset-0 atmo-overlay-dark" />
        </>
      )}

      <div
        className={`absolute inset-0 z-10 flex flex-col justify-end ${alignClass} px-6 sm:px-12 lg:px-20 pb-24 sm:pb-32`}
        style={{
          transform: active ? 'translateY(0)' : 'translateY(2%)',
          transition: reduce
            ? 'none'
            : 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform'
        }}
      >
        <div style={{maxWidth: 'min(560px, 84vw)'}}>
          <h2
            className="hero-headline font-display text-display-lg font-medium text-cream-on-dark whitespace-pre-line"
            style={{
              fontStretch: '92%',
              textShadow: '0 2px 18px rgba(0,0,0,0.3)'
            }}
          >
            {t(`card${e.key}Title`)}
          </h2>
          <p className="mt-6 max-w-[40ch] text-[18px] sm:text-[20px] text-cream-on-dark/90 leading-[1.55]">
            {t(`card${e.key}Body`)}
          </p>

          <div
            className={`mt-8 flex flex-wrap gap-3 sm:gap-4 ${
              e.align === 'left' ? 'justify-start' : 'justify-end'
            }`}
          >
            <Link
              href={e.href}
              className="inline-flex items-center gap-3 rounded-full bg-cream-on-dark px-7 py-3 text-[12px] uppercase tracking-[0.16em] font-medium text-primary-deep hover:bg-cream-soft transition-colors"
            >
              {tCommon('ctaDiscoverTour')}
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-3 rounded-full border border-cream-on-dark/50 px-7 py-3 text-[12px] uppercase tracking-[0.16em] font-medium text-cream-on-dark hover:bg-cream-on-dark/10 hover:border-cream-on-dark transition-colors"
            >
              {tCommon('ctaWhatsApp')}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Overlay condiviso: eyebrow + counter top + dots opzionali bottom
export function SceneOverlay({
  activeIndex,
  t,
  showDots = false
}: {
  activeIndex: number;
  t: ReturnType<typeof useTranslations>;
  showDots?: boolean;
}) {
  return (
    <>
      <div className="absolute top-0 inset-x-0 z-20 pt-8 sm:pt-10 pointer-events-none">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex items-baseline justify-between">
          <p className="eyebrow text-cream-on-dark/85">{t('eyebrow')}</p>
          <div className="flex items-baseline gap-2 text-cream-on-dark/85 tabular-nums">
            <span className="font-display text-2xl sm:text-3xl">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em]">
              / {String(N).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {showDots && (
        <div className="absolute bottom-6 inset-x-0 z-20 flex justify-center pointer-events-none">
          <div className="flex gap-2">
            {ESPERIENZE.map((_, i) => (
              <span
                key={i}
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'bg-cream-on-dark w-6'
                    : 'bg-cream-on-dark/40 w-1.5'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
