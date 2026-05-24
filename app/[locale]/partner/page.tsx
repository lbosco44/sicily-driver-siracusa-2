import type {Metadata} from 'next';
import Image from 'next/image';
import {setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {breadcrumbSchema, localBusinessSchema, JsonLd} from '@/lib/schema';
import {getBreadcrumb} from '@/lib/breadcrumbs';
import {routing} from '@/i18n/routing';
import {getPartners} from '@/lib/partners';
import {HERO_BLUR, HERO_SIZES} from '@/lib/blur';
import type {Locale} from '@/lib/cities';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const p = getPartners(locale as Locale);
  const itPath = '/it/partner';
  const enPath = '/en/partners';
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: {
      canonical: locale === 'it' ? itPath : enPath,
      languages: {it: itPath, en: enPath, 'x-default': itPath}
    },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
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

      {/* 01 — HERO ridotto editoriale */}
      <section className="hero-stage relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={p.heroImage}
            alt=""
            fill
            priority
            sizes={HERO_SIZES}
            quality={80}
            placeholder="blur"
            blurDataURL={HERO_BLUR}
            className="object-cover"
            style={{filter: 'saturate(0.85) brightness(0.78) contrast(1.08)'}}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 to-black/75" />
        </div>

        <div className="relative h-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 grid grid-rows-[1fr_auto] pb-12 sm:pb-16">
          <div />
          <div className="max-w-[40ch]">
            <p className="eyebrow text-cream-on-dark/85 mb-6">{p.heroEyebrow}</p>
            <h1
              className="hero-headline font-display text-display-lg font-medium text-cream-on-dark"
              style={{
                fontStretch: '92%',
                textShadow: '0 2px 24px rgba(0,0,0,0.3)'
              }}
            >
              {p.h1Pre}{' '}
              <span className="text-accent-decorative">{p.h1Accent}</span>
            </h1>
            <p className="mt-7 max-w-[48ch] font-display text-[18px] sm:text-[22px] font-light text-cream-on-dark/95 leading-[1.4]">
              {p.heroSubhead}
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Partners come citazioni grandi alternate */}
      <section className="bg-canvas py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="space-y-32 sm:space-y-48">
            {p.partners.map((partner, i) => {
              const reverse = i % 2 === 1;
              return (
                <article
                  key={i}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                >
                  {/* Quote + body */}
                  <div
                    className={`lg:col-span-7 ${
                      reverse ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <p className="text-[12px] uppercase tracking-[0.22em] font-medium text-secondary mb-7">
                      {partner.eyebrow}
                    </p>
                    <h2
                      className="font-display italic text-display-md font-light text-ink leading-[1.05] max-w-[18ch] mb-8"
                      style={{fontStretch: '95%'}}
                    >
                      {partner.name}
                    </h2>
                    <p className="text-[18px] sm:text-[19px] leading-[1.7] text-ink-soft max-w-[58ch]">
                      {partner.body}
                    </p>

                    <div className="mt-10 pt-7 border-t border-[var(--border)]">
                      <p className="eyebrow mb-3">{partner.whereYouFindThem}</p>
                      <Link
                        href={partner.tourHref}
                        className="inline-flex items-center gap-3 font-display italic text-[20px] text-accent border-b border-accent/60 pb-1 hover:border-accent-hover transition-colors"
                      >
                        {partner.tourName}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>

                  {/* Foto */}
                  <figure
                    className={`relative lg:col-span-5 aspect-[4/5] overflow-hidden grain ${
                      reverse ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <Image
                      src={partner.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                      loading={i < 1 ? 'eager' : 'lazy'}
                      style={{
                        filter: 'saturate(0.85) brightness(0.94) contrast(1.06)'
                      }}
                    />
                  </figure>
                </article>
              );
            })}
          </div>

          {/* 5° slot — partner futuro */}
          <div className="mt-32 sm:mt-40 max-w-3xl">
            <p className="font-display italic text-[20px] sm:text-[22px] font-light text-ink/60 leading-relaxed border-l-2 border-accent-decorative pl-7 py-3">
              {p.fifthSlotIntro}
            </p>
          </div>
        </div>
      </section>

      {/* 03 — CTA finale collaborazioni */}
      <section
        className="bg-primary-deep py-32 sm:py-40"
        style={{color: 'var(--cream-on-dark)'}}
      >
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow text-cream-on-dark/65 mb-10">{p.ctaEyebrow}</p>
          <h2
            className="font-display text-display-lg font-light text-cream-on-dark max-w-[22ch] leading-[0.98]"
            style={{fontStretch: '95%'}}
          >
            {p.ctaH2Pre}{' '}
            <span className="text-accent-decorative">{p.ctaH2Accent}</span>
          </h2>
          <p className="mt-9 text-[18px] sm:text-[20px] text-cream-soft leading-[1.6] max-w-[58ch]">
            {p.ctaBody}
          </p>

          <div className="mt-12">
            <a
              href="mailto:info@ncctaxisiracusa.com"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:bg-accent-hover"
              style={{color: 'var(--cream-on-dark)'}}
            >
              {p.ctaButton}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
