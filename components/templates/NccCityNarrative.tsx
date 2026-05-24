import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import type {CityContent} from '@/lib/cities';
import {HERO_BLUR, HERO_SIZES} from '@/lib/blur';

// NccCityNarrative — pagina locale SEO (cluster Fast).
// Design language Diario Mediterraneo, ma SENZA scroll-driven sticky:
// le NCC pagine sono ricerca utile + SEO, non immersive. Editorial restraint.

export async function NccCityNarrative({city}: {city: CityContent}) {
  const tCommon = await getTranslations('NccPage');

  return (
    <>
      {/* 01 — HERO locale full-bleed con foto + H1 SEO-locked */}
      <section className="relative isolate h-[88svh] min-h-[560px] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={city.heroImage}
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes={HERO_SIZES}
            quality={80}
            placeholder="blur"
            blurDataURL={HERO_BLUR}
            className="object-cover"
            style={{filter: 'saturate(0.85) brightness(0.78) contrast(1.08)'}}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/75" />
        </div>

        <div className="relative h-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 grid grid-rows-[1fr_auto_auto] pb-12 sm:pb-16">
          <div />
          <div className="max-w-[36ch]">
            <p className="eyebrow text-cream-on-dark/85 mb-8">{city.heroEyebrow}</p>
            <h1
              className="font-display text-display-md font-medium text-cream-on-dark"
              style={{
                fontStretch: '90%',
                textShadow: '0 2px 24px rgba(0,0,0,0.3)'
              }}
            >
              {city.h1}
            </h1>
            <p className="mt-8 max-w-[44ch] font-display text-[19px] sm:text-[22px] font-light text-cream-on-dark/95 leading-[1.4]">
              {city.heroSubhead}
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/393756413379"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-[13px] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:bg-accent-hover"
              style={{color: 'var(--cream-on-dark)'}}
            >
              {tCommon('ctaWhatsApp')}
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="tel:+393756413379"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-cream-on-dark/35 px-8 py-4 text-[13px] uppercase tracking-[0.08em] font-medium text-cream-on-dark tabular-nums hover:bg-cream-on-dark/10 transition-colors"
            >
              {tCommon('ctaCall')}
            </a>
          </div>
        </div>
      </section>

      {/* 02 — INTRO keyword-dense SEO PRESERVE */}
      <section className="bg-canvas py-28 sm:py-36">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="text-[20px] sm:text-[22px] leading-[1.7] text-ink/90 first-letter:font-display first-letter:text-[80px] first-letter:leading-[0.85] first-letter:text-accent first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-light">
            {city.intro}
          </p>
        </div>
      </section>

      {/* 03 — TRUST STRIP locale: 3 numeri editorial */}
      <section className="bg-canvas-deep py-20 sm:py-24 border-y border-[var(--border)]">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-y-0 sm:gap-x-12 lg:gap-x-20">
            {city.trust.map((item, i) => (
              <li key={i}>
                <p
                  className="font-display text-display-sm font-light text-primary leading-[0.95]"
                  style={{fontStretch: '95%'}}
                >
                  {item.number}
                </p>
                <p className="mt-4 text-[15px] sm:text-[16px] text-ink-soft leading-relaxed max-w-[28ch]">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 04 — TRATTE come prosa narrativa, no tabella */}
      <section className="bg-canvas py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 mb-16 sm:mb-20">
            <div>
              <p className="eyebrow mb-7">{city.routesEyebrow}</p>
              <h2
                className="font-display text-display-md font-light text-ink max-w-[14ch]"
                style={{fontStretch: '95%'}}
              >
                {city.routesH2Pre}{' '}
                <span className="italic text-accent">{city.routesH2Accent}</span>
              </h2>
            </div>
            <p className="text-[17px] sm:text-[18px] leading-[1.7] text-ink-soft max-w-[58ch] lg:self-end">
              {city.routesMicrocopy}
            </p>
          </div>

          <ul className="divide-y divide-[var(--border-strong)]">
            {city.routes.map((row, i) => (
              <li
                key={i}
                className="py-7 sm:py-8 grid grid-cols-1 sm:grid-cols-[2.5fr_2.5fr_1fr] gap-y-2 gap-x-8 items-baseline"
              >
                <p className="font-display text-[20px] sm:text-[24px] font-light text-ink-soft leading-tight">
                  {row.from}
                </p>
                <p
                  className="font-display text-[22px] sm:text-[28px] font-medium text-ink leading-tight"
                  style={{fontStretch: '95%'}}
                >
                  {row.to}
                </p>
                <p className="font-display text-[22px] sm:text-[26px] font-medium text-accent tabular-nums whitespace-nowrap sm:text-right">
                  {row.price}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-6">
            <Link
              href="/contatti"
              className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-medium text-primary border-b border-accent pb-1 hover:border-accent-hover transition-colors self-start"
            >
              {tCommon('ctaQuote')}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — COSA INCLUDE IL SERVIZIO — lista editorial pulita */}
      <section className="bg-canvas-warm py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] mb-14 sm:mb-16"
            style={{fontStretch: '95%'}}
          >
            {city.includesH2Pre}{' '}
            <span className="italic text-accent">{city.includesH2Accent}</span>
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 divide-y md:divide-y-0 divide-[var(--border)]">
            {city.includes.map((item, i) => (
              <li
                key={i}
                className="py-6 md:py-7 md:border-b md:border-[var(--border)] last:md:border-b-0 text-[17px] sm:text-[18px] leading-[1.65] text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 06 — LA FLOTTA — 3 schede Mercedes editorial */}
      <section className="bg-canvas py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <h2
            className="font-display text-display-md font-light text-ink max-w-[14ch] mb-16 sm:mb-20"
            style={{fontStretch: '95%'}}
          >
            {city.fleetH2Pre}{' '}
            <span className="italic text-accent">{city.fleetH2Accent}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 md:gap-x-10 lg:gap-x-14">
            {city.fleet.map((f, i) => (
              <article
                key={i}
                className={`${
                  i < city.fleet.length - 1
                    ? 'md:border-r md:border-[var(--border-strong)] md:pr-10 lg:pr-14'
                    : ''
                }`}
              >
                <h3
                  className="font-display italic text-[26px] sm:text-[30px] font-light text-ink leading-tight mb-7"
                  style={{fontStretch: '95%'}}
                >
                  {f.model}
                </h3>
                <dl className="space-y-5 text-[15px] leading-[1.6] text-ink-soft">
                  <div>
                    <dt className="eyebrow text-secondary mb-1">
                      {tCommon('fleetTablePax')}
                    </dt>
                    <dd className="text-ink font-medium">{f.pax}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-secondary mb-1">
                      {tCommon('fleetTableLuggage')}
                    </dt>
                    <dd>{f.luggage}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-secondary mb-1">
                      {tCommon('fleetTableComfort')}
                    </dt>
                    <dd>{f.comfort}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-secondary mb-1">
                      {tCommon('fleetTableIdeal')}
                    </dt>
                    <dd className="font-display italic text-[16px]">
                      {f.ideal}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — FAQ editorial accordion */}
      <section className="bg-canvas-deep py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow mb-10">{city.faqEyebrow}</p>
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] mb-14 sm:mb-16"
            style={{fontStretch: '95%'}}
          >
            {city.faqH2Pre}{' '}
            <span className="italic text-accent">{city.faqH2Accent}</span>
          </h2>

          <ul className="divide-y divide-[var(--border-strong)]">
            {city.faqs.map((item, i) => (
              <li key={i}>
                <details className="group py-2">
                  <summary className="cursor-pointer list-none py-7 flex items-start justify-between gap-8">
                    <h3
                      className="font-display text-[24px] sm:text-[28px] lg:text-[32px] font-light text-ink leading-[1.2] max-w-[48ch] group-open:text-accent transition-colors"
                      style={{fontStretch: '95%'}}
                    >
                      {item.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="font-display text-3xl text-accent leading-none mt-2 transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="pb-8 pr-12 text-[17px] sm:text-[18px] leading-[1.7] text-ink-soft max-w-prose">
                    {item.a}
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 08 — TOUR DA {città} */}
      <section className="bg-canvas py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-14 sm:mb-16">
            <p className="eyebrow mb-7">{city.nearbyToursEyebrow}</p>
            <h2
              className="font-display text-display-md font-light text-ink"
              style={{fontStretch: '95%'}}
            >
              {city.nearbyToursH2Pre}{' '}
              <span className="italic text-accent">{city.nearbyToursH2Accent}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {city.nearbyTours.map((tour, i) => (
              <Link
                key={i}
                href={tour.href}
                className="group relative overflow-hidden aspect-[4/5] grain"
              >
                <Image
                  src={tour.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                  style={{filter: 'saturate(0.85) brightness(0.86) contrast(1.06)'}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-7 sm:p-8 flex flex-col justify-end">
                  <h3
                    className="font-display italic text-[26px] sm:text-[30px] font-light text-cream-on-dark leading-tight"
                    style={{fontStretch: '95%'}}
                  >
                    {tour.title}
                  </h3>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.18em] font-medium text-cream-on-dark/85 inline-flex items-center gap-2">
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — CTA finale */}
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
          <p className="eyebrow text-cream-on-dark/65 mb-10">{city.ctaEyebrow}</p>
          <h2
            className="font-display text-display-lg font-light text-cream-on-dark max-w-[22ch] leading-[0.98]"
            style={{fontStretch: '95%'}}
          >
            {city.ctaH2}
          </h2>
          <p className="mt-9 text-[18px] sm:text-[20px] text-cream-soft leading-[1.65] max-w-[58ch]">
            {city.ctaSubhead}
          </p>

          <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-5">
            <a
              href="https://wa.me/393756413379"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:bg-accent-hover"
              style={{color: 'var(--cream-on-dark)'}}
            >
              {tCommon('ctaWhatsApp')}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              >
                →
              </span>
            </a>
            <a
              href="tel:+393756413379"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-cream-on-dark/35 px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium text-cream-on-dark tabular-nums hover:bg-cream-on-dark/10 transition-colors"
            >
              {tCommon('ctaCall')}
            </a>
          </div>

          <p className="mt-12 text-[14px] text-cream-on-dark/60">
            {tCommon('ctaEmailPre')}{' '}
            <a
              href="mailto:info@ncctaxisiracusa.com"
              className="text-cream-on-dark underline underline-offset-4 decoration-accent/60 hover:decoration-accent transition-colors"
            >
              info@ncctaxisiracusa.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
