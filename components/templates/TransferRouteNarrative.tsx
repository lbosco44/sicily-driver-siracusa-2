import {Testimonianza} from '@/components/sections/home/Testimonianza';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import type {TransferRouteContent} from '@/lib/transferRoutes';
import {AnimatedHeading} from '@/components/ui/AnimatedHeading';
import {TransferHero} from '@/components/sections/transfer/TransferHero';

// TransferRouteNarrative — pagina figlia SEO per singola tratta transfer
// (es. /transfer-catania-siracusa). Landing transazionale: hero stile home
// con pill + recensioni, blocco prezzo/durata + cosa include, descrizione
// SEO, FAQ specifiche, cross-link alle altre tratte e alla pagina-madre.
// Creato 09/06/2026.

export async function TransferRouteNarrative({
  route,
  others
}: {
  route: TransferRouteContent;
  others: TransferRouteContent[];
}) {
  const tCommon = await getTranslations('NccPage');

  return (
    <>
      {/* 01 — HERO: titolo tratta + solo bottone Contattaci (no selettore Da→A,
            cliente 10/06/2026) + recensioni */}
      <TransferHero
        title={route.h1}
        subhead={route.heroSubhead}
        image={route.heroImage}
        ctaLabel={tCommon('ctaWhatsApp')}
      />

      {/* 02 — DETTAGLI TRATTA: prezzo + durata (card) accanto a "cosa include" */}
      <section className="bg-canvas-warm py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
            {/* Price card */}
            <div className="rounded-sm border border-[var(--border-strong)] bg-canvas p-8 sm:p-10 lg:sticky lg:top-28">
              <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-secondary">
                {route.from} → {route.to}
              </p>
              <p
                className="mt-5 font-display font-light text-ink leading-none"
                style={{fontSize: 'clamp(44px, 6vw, 64px)', fontStretch: '95%'}}
              >
                {route.priceFrom}
              </p>
              <p className="mt-2 text-[14px] text-ink-soft">{route.priceBaseNote}</p>

              <dl className="mt-7 space-y-4 border-t border-[var(--border)] pt-6">
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="text-[14px] text-ink-soft">{route.priceGroupNote}</dt>
                  <dd className="font-display text-[20px] font-light text-ink">
                    {route.priceGroup}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="text-[14px] text-ink-soft">{tCommon('routeDuration')}</dt>
                  <dd className="font-display text-[18px] font-light text-ink text-right">
                    {route.duration}
                  </dd>
                </div>
              </dl>

              <Link
                href="/contatti"
                className="group mt-8 flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 text-[13px] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:bg-accent-hover"
                style={{color: 'var(--cream-on-dark)'}}
              >
                {tCommon('routeQuoteCta')}
              </Link>
              <p className="mt-4 text-center text-[13px] text-ink-soft">
                {tCommon('routePriceFootnote')}
              </p>
            </div>

            {/* Cosa include */}
            <div>
              <h2
                className="font-display text-display-sm sm:text-display-md font-light text-ink mb-8 sm:mb-10"
                style={{fontStretch: '95%'}}
              >
                {tCommon('routeIncludesPre')}{' '}
                <span className="italic text-accent">{tCommon('routeIncludesAccent')}</span>
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-1">
                {route.includes.map((item, i) => (
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
          </div>
        </div>
      </section>

      {/* 03 — DESCRIZIONE / SEO copy */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="font-display text-[22px] sm:text-[27px] lg:text-[30px] font-light text-ink leading-[1.5]">
            {route.intro}
          </p>
        </div>
      </section>

      {/* 04 — FAQ specifiche della tratta */}
      <section className="bg-canvas-deep py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] mb-12 sm:mb-14"
            style={{fontStretch: '95%'}}
          >
            {tCommon('routeFaqPre')}{' '}
            <span className="italic text-accent">{tCommon('routeFaqAccent')}</span>
          </h2>

          <ul className="divide-y divide-[var(--border-strong)]">
            {route.faqs.map((item, i) => (
              <li key={i}>
                <details className="group py-2">
                  <summary className="cursor-pointer list-none py-7 flex items-start justify-between gap-8">
                    <h3
                      className="font-display text-[22px] sm:text-[27px] lg:text-[30px] font-light text-ink leading-[1.2] max-w-[48ch] group-open:text-accent transition-colors"
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

      {/* 05 — ALTRE TRATTE (cross-link SEO) + pagina-madre */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10 sm:mb-12">
            <h2
              className="font-display text-display-sm sm:text-display-md font-light text-ink"
              style={{fontStretch: '95%'}}
            >
              {tCommon('routeOthersPre')}{' '}
              <span className="italic text-accent">{tCommon('routeOthersAccent')}</span>
            </h2>
            <Link
              href="/transfer-aeroporti-porti-sicilia"
              className="group inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.12em] font-medium text-accent hover:text-accent-hover transition-colors"
            >
              {tCommon('routeAllRoutes')}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
            {others.map((r) => (
              <li key={r.key}>
                <Link
                  href={r.slugIt}
                  className="group flex h-full flex-col justify-between gap-6 rounded-sm border border-[var(--border-strong)] bg-canvas-warm/40 p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent hover:bg-canvas-warm/70 hover:shadow-[0_16px_40px_rgba(31,26,20,0.08)]"
                >
                  <span
                    className="font-display text-[18px] sm:text-[20px] font-light text-ink leading-snug"
                    style={{fontStretch: '95%'}}
                  >
                    {r.from}
                    <span className="text-accent"> → </span>
                    {r.to}
                  </span>
                  <span className="flex items-center justify-between gap-4">
                    <span className="font-display text-[17px] font-light text-accent">
                      {r.priceFrom}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-accent transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonianza />

      {/* 06 — CTA finale */}
      <section
        className="relative bg-primary-deep py-24 sm:py-32 overflow-hidden"
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
          <AnimatedHeading
            as="h2"
            text={route.ctaH2}
            className="font-display text-display-lg font-light text-cream-on-dark max-w-[22ch] leading-[0.98]"
            style={{fontStretch: '95%'}}
          />
          <p className="mt-9 text-[18px] sm:text-[20px] text-cream-soft leading-[1.65] max-w-[58ch]">
            {route.ctaSubhead}
          </p>

          <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-5">
            <Link
              href="/contatti"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:bg-accent-hover"
              style={{color: 'var(--cream-on-dark)'}}
            >
              {tCommon('ctaQuote')}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              >
                →
              </span>
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
