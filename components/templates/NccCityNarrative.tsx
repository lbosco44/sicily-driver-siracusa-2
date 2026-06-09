import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import type {CityContent} from '@/lib/cities';
import {HERO_BLUR, HERO_SIZES} from '@/lib/blur';
import {AnimatedHeading} from '@/components/ui/AnimatedHeading';
import {WHATSAPP_HREF} from '@/lib/contact';

// NccCityNarrative — pagina locale SEO (cluster Fast).
// Design language Diario Mediterraneo, ma SENZA scroll-driven sticky:
// le NCC pagine sono ricerca utile + SEO, non immersive. Editorial restraint.

export async function NccCityNarrative({city}: {city: CityContent}) {
  const tCommon = await getTranslations('NccPage');

  return (
    <>
      {/* 01 — HERO locale full-bleed con foto + H1 SEO-locked */}
      <section className="hero-stage relative isolate overflow-hidden">
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

        <div className="relative h-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 grid grid-rows-[1fr_auto_auto] pb-[16vh] sm:pb-[20vh]">
          <div />
          <div className="max-w-[60ch]">
            <p className="eyebrow text-cream-on-dark/85 mb-6">{city.heroEyebrow}</p>
            <h1
              className="hero-headline font-display font-medium text-cream-on-dark leading-[1.05]"
              style={{
                fontSize: 'clamp(32px, 4.4vw, 64px)',
                fontStretch: '90%',
                letterSpacing: '-0.025em',
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
          </div>
        </div>
      </section>

      {/* 05 — COSA INCLUDE IL SERVIZIO — checklist editorial (rielaborato
            04/06/2026: da lista piatta a 2 colonne con check terracotta che si
            riempiono in hover, padding ridotti). Copy invariato. */}
      <section className="bg-canvas-warm py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] mb-12 sm:mb-14"
            style={{fontStretch: '95%'}}
          >
            {city.includesH2Pre}{' '}
            <span className="italic text-accent">{city.includesH2Accent}</span>
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-14 gap-y-1">
            {city.includes.map((item, i) => (
              <li
                key={i}
                className="group flex items-start gap-4 rounded-md -mx-3 px-3 py-4 transition-colors duration-200 hover:bg-canvas"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/12 text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-cream-on-dark"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[16px] sm:text-[17px] leading-[1.55] text-ink-soft">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 06 — LA FLOTTA — schede prodotto editorial (rielaborato 04/06/2026:
            le label dl usavano la classe .eyebrow (display:none) → erano
            INVISIBILI, restava testo sciolto. Ora card con capienza in
            evidenza, label visibili Bagagli/Comfort, tagline "ideale per"
            come footer accent + hover lift. Padding ridotti. Copy invariato. */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <h2
            className="font-display text-display-md font-light text-ink max-w-[14ch] mb-12 sm:mb-14"
            style={{fontStretch: '95%'}}
          >
            {city.fleetH2Pre}{' '}
            <span className="italic text-accent">{city.fleetH2Accent}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {city.fleet.map((f, i) => (
              <article
                key={i}
                className="group flex flex-col rounded-sm border border-[var(--border-strong)] bg-canvas-warm/40 p-7 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent hover:bg-canvas-warm/70 hover:shadow-[0_16px_40px_rgba(31,26,20,0.08)]"
              >
                <h3
                  className="font-display text-[24px] sm:text-[28px] font-light text-ink leading-tight"
                  style={{fontStretch: '95%'}}
                >
                  {f.model}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-4 block h-px w-10 bg-accent"
                />
                <p className="mt-5 text-[17px] sm:text-[18px] font-medium text-ink">
                  {f.pax}
                </p>
                <dl className="mt-5 space-y-4 flex-1">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary mb-1">
                      {tCommon('fleetTableLuggage')}
                    </dt>
                    <dd className="text-[15px] leading-[1.5] text-ink-soft">
                      {f.luggage}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary mb-1">
                      {tCommon('fleetTableComfort')}
                    </dt>
                    <dd className="text-[15px] leading-[1.5] text-ink-soft">
                      {f.comfort}
                    </dd>
                  </div>
                </dl>
                <p className="mt-6 pt-5 border-t border-[var(--border)] font-display italic text-[15px] sm:text-[16px] text-accent leading-snug">
                  {f.ideal}
                </p>
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
                  alt={tour.title}
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
          <AnimatedHeading
            as="h2"
            text={city.ctaH2}
            className="font-display text-display-lg font-light text-cream-on-dark max-w-[22ch] leading-[0.98]"
            style={{fontStretch: '95%'}}
          />
          <p className="mt-9 text-[18px] sm:text-[20px] text-cream-soft leading-[1.65] max-w-[58ch]">
            {city.ctaSubhead}
          </p>

          <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-5">
            <a
              href={WHATSAPP_HREF}
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
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-cream-on-dark/35 px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium text-cream-on-dark hover:bg-cream-on-dark/10 transition-colors"
            >
              {tCommon('ctaQuote')}
            </Link>
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
