import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import type {CityContent} from '@/lib/cities';

type Props = {
  city: CityContent;
};

export async function NccCityTemplate({city}: Props) {
  const t = await getTranslations('NccPage');

  return (
    <>
      {/* ============================================================
          1. HERO LOCALE — foto reale + H1 SEO-locked + sub + CTA WhatsApp
          ============================================================ */}
      <section className="relative isolate min-h-[min(78vh,640px)] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{filter: 'saturate(0.85) brightness(0.88) contrast(1.06)'}}
        >
          <Image
            src={city.heroImage}
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={70}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/55" />
        </div>

        <div className="relative w-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 pb-12 sm:pb-16 pt-32 sm:pt-40">
          <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.18em] font-medium text-[#F5EFE4]/90 mb-6">
            {city.heroEyebrow}
          </p>

          <h1 className="font-display font-medium text-[#F5EFE4] text-[40px] sm:text-[58px] lg:text-[76px] leading-[1.04] tracking-tight max-w-[20ch]">
            {city.h1}
          </h1>

          <p className="mt-6 sm:mt-8 max-w-[52ch] text-[16px] sm:text-[18px] text-[#F5EFE4]/90 leading-relaxed">
            {city.heroSubhead}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/393756413379"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[13px] uppercase tracking-[0.05em] font-medium transition-all duration-200 hover:bg-accent-hover"
              style={{color: 'var(--cream-on-dark)'}}
            >
              {t('ctaWhatsApp')}
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="tel:+393756413379"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F5EFE4]/40 px-7 py-3.5 text-[13px] uppercase tracking-[0.05em] font-medium tabular-nums text-[#F5EFE4] transition-colors hover:bg-[#F5EFE4]/10"
            >
              {t('ctaCall')}
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. PARAGRAFO INTRO KEYWORD-DENSE — SEO-locked
          ============================================================ */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl">
            <p className="text-[18px] sm:text-[20px] leading-[1.7] text-ink/90">
              <span className="font-display italic first-letter:text-[56px] first-letter:leading-[0.85] first-letter:text-[color:var(--accent-decorative)] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:font-medium first-letter:not-italic" />
              {city.intro}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. TRUST STRIP LOCALE
          ============================================================ */}
      <section className="bg-muted-bg py-10 sm:py-14 border-y border-[var(--border)]/60">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-[var(--border)]">
            {city.trust.map((item, i) => (
              <div
                key={i}
                className="sm:px-10 first:sm:pl-0 last:sm:pr-0 flex flex-col items-start sm:items-center text-left sm:text-center"
              >
                <p className="font-display text-2xl sm:text-3xl font-medium text-primary tabular-nums">
                  {item.number}
                </p>
                <p className="mt-2 text-[14px] text-ink/70 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. TRATTE — "Da {città} a..."
          ============================================================ */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
                {city.routesEyebrow}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
                {city.routesH2Pre}{' '}
                <span className="italic">{city.routesH2Accent}</span>
              </h2>
            </div>

            <div>
              <ul className="divide-y divide-[var(--border)]">
                {city.routes.map((row, i) => (
                  <li
                    key={i}
                    className="py-5 sm:py-6 grid grid-cols-[1fr_auto] sm:grid-cols-[2.5fr_1.5fr_auto] gap-4 items-center"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-[15px] sm:text-[16px] text-ink/85 font-medium">
                        {row.from}
                      </span>
                      <span aria-hidden="true" className="hidden sm:inline text-ink/40">
                        →
                      </span>
                      <span className="sm:hidden text-[11px] text-ink/50 uppercase tracking-wider">
                        →
                      </span>
                    </div>
                    <span className="hidden sm:block text-[16px] text-ink font-medium">
                      {row.to}
                    </span>
                    <span className="sm:hidden text-[14px] text-ink/85 font-medium col-span-2 -mt-2">
                      {row.to}
                    </span>
                    <span className="font-display text-2xl sm:text-3xl font-medium text-accent tabular-nums whitespace-nowrap">
                      {row.price}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-10 text-[13px] leading-relaxed text-ink/55 max-w-prose">
                {city.routesMicrocopy}
              </p>

              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 mt-8 rounded-full bg-accent px-7 py-3.5 text-[13px] uppercase tracking-[0.05em] font-medium transition-all duration-200 hover:bg-accent-hover"
                style={{color: 'var(--cream-on-dark)'}}
              >
                {t('ctaQuote')}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. COSA INCLUDE IL SERVIZIO — lista editorial
          ============================================================ */}
      <section className="bg-muted-bg py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
                {city.includesH2Pre}{' '}
                <span className="italic">{city.includesH2Accent}</span>
              </h2>
            </div>

            <ul className="space-y-5 lg:space-y-6">
              {city.includes.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-5 sm:gap-7 text-[17px] sm:text-[18px] leading-[1.55] text-ink/85"
                >
                  <span
                    className="font-display italic text-2xl text-[color:var(--accent-decorative)] tabular-nums shrink-0 leading-none mt-1"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================
          6. LA FLOTTA — 3 schede Mercedes
          ============================================================ */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
              {city.fleetH2Pre}{' '}
              <span className="italic">{city.fleetH2Accent}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
            {city.fleet.map((f, i) => (
              <article
                key={i}
                className="bg-muted-bg rounded-xl p-7 sm:p-8 flex flex-col gap-5 border border-[var(--border)]/40"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] font-medium text-secondary">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display italic font-medium text-2xl sm:text-3xl text-primary mt-1 leading-tight">
                    {f.model}
                  </h3>
                </div>
                <dl className="space-y-3 text-[14px] leading-relaxed text-ink/80">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.12em] text-ink/50 font-medium">
                      {t('fleetTablePax')}
                    </dt>
                    <dd className="mt-0.5 font-medium text-ink">{f.pax}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.12em] text-ink/50 font-medium">
                      {t('fleetTableLuggage')}
                    </dt>
                    <dd className="mt-0.5">{f.luggage}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.12em] text-ink/50 font-medium">
                      {t('fleetTableComfort')}
                    </dt>
                    <dd className="mt-0.5">{f.comfort}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.12em] text-ink/50 font-medium">
                      {t('fleetTableIdeal')}
                    </dt>
                    <dd className="mt-0.5 italic font-display text-[15px]">{f.ideal}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          7. FAQ — accordion + schema.org FAQPage (in page.tsx)
          ============================================================ */}
      <section className="bg-muted-bg py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
                {city.faqEyebrow}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
                {city.faqH2Pre}{' '}
                <span className="italic">{city.faqH2Accent}</span>
              </h2>
            </div>

            <ul className="divide-y divide-[var(--border)]">
              {city.faqs.map((item, i) => (
                <li key={i} className="py-2">
                  <details className="group">
                    <summary className="cursor-pointer list-none py-5 sm:py-6 flex items-start justify-between gap-6">
                      <h3 className="font-display text-xl sm:text-2xl font-medium text-primary leading-snug max-w-[55ch] group-open:italic transition-all">
                        {item.q}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="font-display text-2xl text-accent leading-none mt-1 transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <div className="pb-6 pr-10 text-[16px] sm:text-[17px] leading-[1.7] text-ink/80 max-w-prose">
                      {item.a}
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================
          8. TOUR INTERNI — 3 mini card per internal linking SEO
          ============================================================ */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
              {city.nearbyToursEyebrow}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
              {city.nearbyToursH2Pre}{' '}
              <span className="italic">{city.nearbyToursH2Accent}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-7">
            {city.nearbyTours.map((tour, i) => (
              <Link
                key={i}
                href={tour.href}
                className="group relative overflow-hidden rounded-xl aspect-[4/5] block"
              >
                <Image
                  src={tour.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end">
                  <h3 className="font-display italic font-medium text-2xl sm:text-3xl text-[#F5EFE4] leading-tight">
                    {tour.title}
                  </h3>
                  <p className="mt-3 text-[12px] uppercase tracking-[0.08em] font-medium text-[#F5EFE4]/85 inline-flex items-center gap-2">
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          9. CTA FINALE
          ============================================================ */}
      <section
        className="bg-primary py-24 sm:py-32"
        style={{color: 'var(--cream-on-dark)'}}
      >
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#F5EFE4]/65 mb-5">
              {city.ctaEyebrow}
            </p>
            <h2 className="font-display italic font-medium text-[#F5EFE4] text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
              {city.ctaH2}
            </h2>
            <p className="mt-6 text-[18px] sm:text-[20px] text-[#F5EFE4]/80 leading-relaxed max-w-prose">
              {city.ctaSubhead}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
              <a
                href="https://wa.me/393756413379"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-[13px] uppercase tracking-[0.05em] font-medium transition-all duration-200 hover:bg-accent-hover"
                style={{color: 'var(--cream-on-dark)'}}
              >
                {t('ctaWhatsApp')}
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="tel:+393756413379"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-[13px] uppercase tracking-[0.05em] font-medium tabular-nums transition-all duration-200 hover:bg-accent-hover"
                style={{color: 'var(--cream-on-dark)'}}
              >
                {t('ctaCall')}
              </a>
            </div>

            <p className="mt-8 text-[14px] text-[#F5EFE4]/65">
              {t('ctaEmailPre')}{' '}
              <a
                href="mailto:info@ncctaxisiracusa.com"
                className="text-[#F5EFE4] underline underline-offset-4 decoration-accent/70 hover:decoration-accent transition-colors"
              >
                info@ncctaxisiracusa.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
