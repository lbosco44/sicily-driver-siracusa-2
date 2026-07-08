import type {Metadata} from 'next';
import {ogImage, twitterCard} from '@/lib/seo';
import {Testimonianza} from '@/components/sections/home/Testimonianza';
import {setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {breadcrumbSchema, localBusinessSchema, JsonLd} from '@/lib/schema';
import {getBreadcrumb} from '@/lib/breadcrumbs';
import {routing} from '@/i18n/routing';
import {getPartners} from '@/lib/partners';
import type {Locale} from '@/lib/cities';
import {AnimatedHeading} from '@/components/ui/AnimatedHeading';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const p = getPartners(locale as Locale);
  const itPath = '/partner';
  const enPath = '/en/partners';
  const frPath = '/fr/partenaires';
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: {
      canonical: locale === 'fr' ? frPath : locale === 'en' ? enPath : itPath,
      languages: {it: itPath, en: enPath, fr: frPath, 'x-default': itPath}
    },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : 'it_IT',
      type: 'website',
      url: `https://ncctaxisiracusa.com${locale === 'fr' ? frPath : locale === 'en' ? enPath : itPath}`,
      siteName: 'Sicily Driver Siracusa',
      images: ogImage(locale, p.metaTitle)
    },
    twitter: twitterCard(p.metaTitle, p.metaDescription, locale)
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function PartnerPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const p = getPartners(locale as Locale);

  return (
    <>
      <JsonLd data={localBusinessSchema(locale as Locale)} />
      <JsonLd
        data={breadcrumbSchema(
          getBreadcrumb('partner', locale as Locale, `${p.h1Pre} ${p.h1Accent}`)
        )}
      />

      {/* 01 — HERO editoriale chiaro (cliente 10/06/2026: niente full-bleed
            come le altre pagine). Titolo tipografico a sinistra + "muro delle
            eccellenze" con tutti i loghi monocromi. Atmosfera via grain +
            glow terracotta, non foto. */}
      <section className="relative isolate overflow-hidden bg-canvas-deep grain pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div
          aria-hidden="true"
          className="absolute -top-[18%] right-[-12%] w-[55vw] h-[55vw] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(176,94,64,0.12) 0%, transparent 62%)'
          }}
        />

        <div className="relative mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <p className="eyebrow mb-6">{p.heroEyebrow}</p>
          <h1
            className="font-display font-medium text-ink max-w-[22ch] text-balance"
            style={{
              fontSize: 'clamp(38px, 6.2vw, 88px)',
              fontStretch: '92%',
              letterSpacing: '-0.03em',
              lineHeight: '1.0'
            }}
          >
            {p.h1Pre}{' '}
            <span className="italic font-light text-accent">{p.h1Accent}</span>
          </h1>
          <p className="mt-7 sm:mt-9 text-[18px] sm:text-[21px] leading-[1.6] text-ink-soft max-w-[56ch]">
            {p.heroSubhead}
          </p>

          {/* Muro delle eccellenze — tutti i loghi */}
          <div className="mt-14 sm:mt-20 pt-9 sm:pt-10 border-t border-[var(--border-strong)]">
            <ul className="flex flex-wrap items-center gap-x-10 gap-y-7 sm:gap-x-14 lg:gap-x-16">
              {p.wallLogos.map((logo) => (
                <li key={logo.name} className="flex items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.image}
                    alt={logo.name}
                    width={logo.w}
                    height={logo.h}
                    className="h-8 sm:h-9 lg:h-10 w-auto object-contain opacity-65 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 02 — IL PERCORSO: ogni partner è una tappa numerata, connessa da una
            linea verticale. Logo in plaque + scheda editoriale + dove trovarli. */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          {p.partners.map((partner, i) => (
            <article
              key={i}
              className="grid grid-cols-[auto_1fr] gap-5 sm:gap-10 lg:gap-14"
            >
              {/* Colonna percorso: numero tappa + filo verticale */}
              <div className="flex flex-col items-center">
                <span
                  className="font-display italic text-[28px] sm:text-[40px] font-light text-accent leading-none tabular-nums"
                  style={{fontStretch: '95%'}}
                >
                  0{i + 1}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-5 w-px flex-1 bg-accent/25"
                />
              </div>

              {/* Contenuto tappa */}
              <div className="pb-16 sm:pb-24">
                <p className="text-[12px] uppercase tracking-[0.22em] font-medium text-secondary mb-6">
                  {partner.eyebrow}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-14 items-start">
                  {/* Logo plaque */}
                  <div className="grid place-items-center rounded-sm border border-[var(--border-strong)] bg-canvas-warm px-8 py-10 min-h-[150px] sm:min-h-[170px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.logoW}
                      height={partner.logoH}
                      className="max-h-[70px] sm:max-h-[84px] w-auto max-w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Testo */}
                  <div>
                    <h2
                      className="font-display italic text-display-sm sm:text-[40px] font-light text-ink leading-[1.05] mb-5"
                      style={{fontStretch: '95%'}}
                    >
                      {partner.name}
                    </h2>
                    <p className="text-[17px] sm:text-[18px] leading-[1.7] text-ink-soft max-w-[60ch]">
                      {partner.body}
                    </p>

                    <div className="mt-8 pt-6 border-t border-[var(--border)]">
                      <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-secondary mb-3">
                        {partner.whereYouFindThem}
                      </p>
                      <Link
                        href={partner.tourHref}
                        className="group inline-flex items-center gap-3 font-display italic text-[20px] text-accent border-b border-accent/50 pb-1 hover:border-accent-hover transition-colors"
                      >
                        {partner.tourName}
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* 5ª tappa — partner futuro (prossima tappa del percorso) */}
          <article className="grid grid-cols-[auto_1fr] gap-5 sm:gap-10 lg:gap-14">
            <div className="flex flex-col items-center">
              <span
                className="font-display italic text-[28px] sm:text-[40px] font-light text-ink/25 leading-none tabular-nums"
                style={{fontStretch: '95%'}}
              >
                {String(p.partners.length + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="pt-1">
              <p className="font-display italic text-[20px] sm:text-[24px] font-light text-ink/55 leading-relaxed max-w-[60ch]">
                {p.fifthSlotIntro}
              </p>
            </div>
          </article>
        </div>
      </section>

      <Testimonianza />

      {/* 03 — CTA finale collaborazioni */}
      <section
        className="bg-primary-deep py-28 sm:py-36"
        style={{color: 'var(--cream-on-dark)'}}
      >
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow text-cream-on-dark/65 mb-10">{p.ctaEyebrow}</p>
          <AnimatedHeading
            as="h2"
            text={`${p.ctaH2Pre} ${p.ctaH2Accent}`}
            className="font-display text-display-lg font-light text-cream-on-dark max-w-[22ch] leading-[0.98]"
            style={{fontStretch: '95%'}}
          />
          <p className="mt-9 text-[18px] sm:text-[20px] text-cream-soft leading-[1.6] max-w-[58ch]">
            {p.ctaBody}
          </p>

          <div className="mt-12">
            <a
              href="mailto:info@ncctaxisiracusa.com"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:bg-accent-hover"
              style={{color: 'var(--cream-on-dark)'}}
            >
              {p.ctaButton}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
