import type {Metadata} from 'next';
import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {breadcrumbSchema, localBusinessSchema, JsonLd} from '@/lib/schema';
import {getBreadcrumb} from '@/lib/breadcrumbs';
import {routing} from '@/i18n/routing';
import {HERO_BLUR, HERO_SIZES} from '@/lib/blur';
import type {Locale} from '@/lib/cities';
import {AnimatedHeading} from '@/components/ui/AnimatedHeading';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'ChiSiamo.meta'});
  const itPath = '/it/chi-siamo';
  const enPath = '/en/about';
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: locale === 'it' ? itPath : enPath,
      languages: {it: itPath, en: enPath, 'x-default': itPath}
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      type: 'website',
      url: `https://ncctaxisiracusa.com${locale === 'it' ? itPath : enPath}`,
      siteName: 'Sicily Driver Siracusa'
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function ChiSiamoPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations('ChiSiamo');
  const tNcc = await getTranslations('NccPage');

  const beliefs = [
    {title: t('beliefs.item1Title'), body: t('beliefs.item1Body')},
    {title: t('beliefs.item2Title'), body: t('beliefs.item2Body')},
    {title: t('beliefs.item3Title'), body: t('beliefs.item3Body')}
  ];

  const bases = [
    {
      name: t('bases.base1Name'),
      address: t('bases.base1Address'),
      note: t('bases.base1Note')
    },
    {
      name: t('bases.base2Name'),
      address: t('bases.base2Address'),
      note: t('bases.base2Note')
    },
    {
      name: t('bases.base3Name'),
      address: t('bases.base3Address'),
      note: t('bases.base3Note')
    }
  ];

  return (
    <>
      <JsonLd data={localBusinessSchema(locale as Locale)} />
      <JsonLd
        data={breadcrumbSchema(
          getBreadcrumb(
            'chi-siamo',
            locale as Locale,
            `${t('hero.h1Pre')} ${t('hero.h1Accent')}`
          )
        )}
      />

      {/* 01 — HERO ridotta narrativa */}
      <section className="hero-stage relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1800&q=80&auto=format&fm=webp"
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes={HERO_SIZES}
            quality={80}
            placeholder="blur"
            blurDataURL={HERO_BLUR}
            className="object-cover"
            style={{filter: 'saturate(0.82) brightness(0.78) contrast(1.08)'}}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/75" />
        </div>

        <div className="relative h-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex items-end pb-[18vh] sm:pb-[22vh]">
          <div className="max-w-[28ch]">
            <h1
              className="hero-headline font-display text-display-lg font-medium text-cream-on-dark"
              style={{
                fontStretch: '92%',
                textShadow: '0 2px 24px rgba(0,0,0,0.3)'
              }}
            >
              {t('hero.h1Pre')}{' '}
              <span className="text-accent-decorative">{t('hero.h1Accent')}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 02 — STORY 3 paragrafi */}
      <section className="bg-canvas py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow mb-10">{t('story.eyebrow')}</p>
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] mb-14 sm:mb-16"
            style={{fontStretch: '95%'}}
          >
            {t('story.h2Pre')}{' '}
            <span className="italic text-accent">{t('story.h2Accent')}</span>
          </h2>

          <div className="space-y-7 text-[19px] sm:text-[20px] leading-[1.7] text-ink-soft">
            <p>{t('story.body1')}</p>
            <p>{t('story.body2')}</p>
            <p>{t('story.body3')}</p>
          </div>
        </div>
      </section>

      {/* 03 — GALLERIA editorial asimmetrica */}
      <section className="bg-canvas-deep py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-12 gap-4 sm:gap-6 grain">
            <figure className="col-span-12 sm:col-span-7 relative aspect-[5/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1400&q=80&auto=format&fm=webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
                loading="lazy"
                style={{filter: 'saturate(0.85) brightness(0.94) contrast(1.06)'}}
              />
            </figure>
            <figure className="col-span-12 sm:col-span-5 relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?w=900&q=80&auto=format&fm=webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                loading="lazy"
                style={{filter: 'saturate(0.85) brightness(0.94) contrast(1.06)'}}
              />
            </figure>
            <figure className="col-span-12 sm:col-span-5 relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=900&q=80&auto=format&fm=webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                loading="lazy"
                style={{filter: 'saturate(0.85) brightness(0.94) contrast(1.06)'}}
              />
            </figure>
            <figure className="col-span-12 sm:col-span-7 relative aspect-[5/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=1400&q=80&auto=format&fm=webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
                loading="lazy"
                style={{filter: 'saturate(0.85) brightness(0.94) contrast(1.06)'}}
              />
            </figure>
          </div>
        </div>
      </section>

      {/* 04 — CONVINZIONI bento grid asimmetrico
            Cliente 28/05/2026: la versione precedente (3 righe text-wall)
            era "troppo basilare". Rielaborata in bento grid editorial:
            - Card 1 (big, sinistra): "Prezzi senza sorprese" — la promise
              piu' importante, occupa col-span-7 row-span-2 con numero 01
              gigante + icona BadgeCheck terracotta
            - Card 2 (top destra): "Van curati" col-span-5 con icona Sparkles
            - Card 3 (bottom destra): "Driver bilingue" col-span-5 con
              icona Languages
            - Padding sezione ridotto da py-32/40 a py-20/28
            - Mobile: stack 3 card vertical (1 col), aspetto card preservato
              ma scaled down (icone smaller, padding ridotto). */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <p className="eyebrow mb-5">{t('beliefs.eyebrow')}</p>
            <h2
              className="font-display text-display-sm sm:text-display-md font-light text-ink max-w-[14ch]"
              style={{fontStretch: '95%'}}
            >
              {t('beliefs.h2Pre')}{' '}
              <span className="italic text-accent">{t('beliefs.h2Accent')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-fr gap-4 lg:gap-5">
            {beliefs.map((b, i) => {
              // Card 0 (Prezzi) e' il "big" — span 7 col + 2 row (col sinistra)
              // Card 1, 2 sono "small" — span 5 col + 1 row (col destra stacked)
              const isBig = i === 0;
              const cellClass = isBig
                ? 'md:col-span-7 md:row-span-2 min-h-[260px]'
                : 'md:col-span-5 min-h-[140px]';

              // Numero italic display, large per big card, medium per small
              const numClass = isBig
                ? 'text-[80px] sm:text-[120px] lg:text-[140px]'
                : 'text-[52px] sm:text-[64px]';

              // Title size: big card piu' grande
              const titleClass = isBig
                ? 'text-[28px] sm:text-[32px] lg:text-[36px]'
                : 'text-[20px] sm:text-[22px]';

              return (
                <article
                  key={i}
                  className={`relative rounded-2xl bg-canvas-warm border border-[var(--border-strong)] p-7 sm:p-8 lg:p-9 flex flex-col justify-between overflow-hidden group hover:border-accent transition-colors duration-300 ${cellClass}`}
                >
                  {/* Numero italico display, lava-tinted in top-right */}
                  <span
                    aria-hidden="true"
                    className={`absolute top-3 right-5 font-display italic font-light text-accent/15 leading-none tabular-nums select-none ${numClass}`}
                    style={{fontStretch: '95%'}}
                  >
                    0{i + 1}
                  </span>

                  {/* Title + body */}
                  <div className="relative">
                    <h3
                      className={`font-display font-light text-ink leading-[1.1] mb-3 sm:mb-4 ${titleClass}`}
                      style={{fontStretch: '95%'}}
                    >
                      {b.title}
                    </h3>
                    <p
                      className={`leading-[1.55] text-ink-soft max-w-[42ch] ${
                        isBig
                          ? 'text-[16px] sm:text-[17px]'
                          : 'text-[14px] sm:text-[15px]'
                      }`}
                    >
                      {b.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 — SEDI con mappa stilizzata della Sicilia
            Cliente 28/05/2026: rifare DIVERSO dal bento delle convinzioni
            (era identico = noioso). Pattern nuovo: mappa SVG simplificata
            della Sicilia con 3 pin terracotta + lista sedi accanto.
            Visual specifico per "luoghi" — comunica geografia.
            Niente badge "sede principale" (rimosso) ne link Maps. */}
      <section className="bg-canvas-warm py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <p className="eyebrow mb-5">{t('bases.eyebrow')}</p>
            <h2
              className="font-display text-display-sm sm:text-display-md font-light text-ink"
              style={{fontStretch: '95%'}}
            >
              {t('bases.h2Pre')}{' '}
              <span className="italic text-accent">{t('bases.h2Accent')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT: lista sedi editorial */}
            <ul className="divide-y divide-[var(--border)]">
              {bases.map((b, i) => (
                <li key={i} className="py-7 first:pt-0 last:pb-0 flex gap-5 group">
                  {/* Pin number marker tondo */}
                  <span
                    className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent/12 text-accent inline-flex items-center justify-center font-display italic text-[16px] sm:text-[18px] tabular-nums transition-colors group-hover:bg-accent group-hover:text-cream-on-dark"
                    style={{fontStretch: '95%'}}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-display text-[26px] sm:text-[30px] font-light text-ink leading-[1.1] mb-1.5"
                      style={{fontStretch: '95%'}}
                    >
                      {b.name}
                    </h3>
                    <p className="font-display italic text-[16px] sm:text-[17px] text-accent mb-2">
                      {b.address}
                    </p>
                    <p className="text-[14px] sm:text-[15px] text-ink-soft leading-[1.55] max-w-[44ch]">
                      {b.note}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* RIGHT: Sicily SVG stilizzata.
                Simplified outline + 3 pin terracotta + labels.
                Le 3 sedi sono tutte nel sud-est, vicine: i pin si
                clustreranno in quella zona (geograficamente accurato). */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              <svg
                viewBox="0 0 120 80"
                className="w-full h-auto"
                role="img"
                aria-label="Mappa stilizzata della Sicilia con le 3 sedi Sicily Driver: Siracusa, Noto, Marzamemi"
              >
                {/* Sicily outline simplified */}
                <path
                  d="M 8,42 L 18,22 L 35,12 L 60,8 L 88,12 L 102,18 L 108,28 L 102,36 L 88,42 L 82,52 L 80,60 L 75,68 L 60,74 L 42,74 L 25,68 L 12,58 Z"
                  fill="var(--canvas)"
                  stroke="var(--ink-soft)"
                  strokeWidth="0.6"
                  strokeLinejoin="round"
                  opacity="0.55"
                />

                {/* Etna bump (small) */}
                <circle
                  cx="78"
                  cy="42"
                  r="3.5"
                  fill="var(--canvas)"
                  stroke="var(--ink-soft)"
                  strokeWidth="0.4"
                  opacity="0.4"
                />

                {/* Decorative dotted line connecting the 3 sedi (path: SR → Noto → Marzamemi) */}
                <path
                  d="M 82,55 L 75,63 L 78,71"
                  stroke="var(--accent)"
                  strokeWidth="0.4"
                  strokeDasharray="1,1"
                  fill="none"
                  opacity="0.6"
                />

                {/* Sedi pins terracotta */}
                {[
                  {x: 82, y: 55, label: 'Siracusa', labelX: 88, labelY: 56},
                  {x: 75, y: 63, label: 'Noto', labelX: 80, labelY: 65},
                  {x: 78, y: 71, label: 'Marzamemi', labelX: 82, labelY: 73}
                ].map((p, i) => (
                  <g key={i}>
                    {/* Pin halo */}
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r="3.5"
                      fill="var(--accent)"
                      opacity="0.18"
                    />
                    {/* Pin dot */}
                    <circle cx={p.x} cy={p.y} r="1.8" fill="var(--accent)" />
                    {/* Label */}
                    <text
                      x={p.labelX}
                      y={p.labelY}
                      fontSize="3.2"
                      fontFamily="var(--font-display)"
                      fontStyle="italic"
                      fill="var(--ink)"
                    >
                      {p.label}
                    </text>
                  </g>
                ))}

                {/* "Sicilia" label decorativo */}
                <text
                  x="38"
                  y="48"
                  fontSize="4"
                  fontFamily="var(--font-display)"
                  fontStyle="italic"
                  fill="var(--ink-soft)"
                  opacity="0.5"
                  letterSpacing="0.2em"
                >
                  SICILIA
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — CTA finale */}
      <section
        className="relative bg-primary-deep py-32 sm:py-40 overflow-hidden"
        style={{color: 'var(--cream-on-dark)'}}
      >
        <div
          className="absolute top-[-15%] right-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(176, 94, 64, 0.15) 0%, transparent 60%)'
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow text-cream-on-dark/65 mb-10">
            {t('ctaFinale.eyebrow')}
          </p>
          <AnimatedHeading
            as="h2"
            text={t('ctaFinale.h2')}
            className="font-display text-display-lg font-light text-cream-on-dark max-w-[22ch] leading-[0.98]"
            style={{fontStretch: '95%'}}
          />
          <p className="mt-9 text-[18px] sm:text-[20px] text-cream-soft leading-[1.65] max-w-[58ch]">
            {t('ctaFinale.subhead')}
          </p>

          <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-5">
          </div>
        </div>
      </section>
    </>
  );
}
