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

      {/* 1. HERO ridotta editoriale */}
      <section className="relative isolate min-h-[min(70vh,600px)] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{filter: 'saturate(0.85) brightness(0.85) contrast(1.06)'}}
        >
          <Image
            src={p.heroImage}
            alt=""
            fill
            priority
            sizes={HERO_SIZES}
            quality={70}
            placeholder="blur"
            blurDataURL={HERO_BLUR}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/75" />
        </div>

        <div className="relative w-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 pb-12 sm:pb-16 pt-32 sm:pt-40">
          <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#F5EFE4]/90 mb-7">
            {p.heroEyebrow}
          </p>
          <h1 className="font-display font-medium text-[#F5EFE4] text-[48px] sm:text-[72px] lg:text-[92px] leading-[1.02] tracking-tight max-w-[16ch]">
            {p.h1Pre}{' '}
            <span className="italic">{p.h1Accent}</span>
          </h1>
          <p className="mt-7 font-display italic text-[#F5EFE4]/90 text-xl sm:text-2xl max-w-[54ch] leading-snug">
            {p.heroSubhead}
          </p>
        </div>
      </section>

      {/* 2. Partners — verticale alternato editoriale */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="space-y-24 sm:space-y-32">
            {p.partners.map((partner, i) => {
              const reverse = i % 2 === 1;
              return (
                <article
                  key={i}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    reverse ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  <div
                    className={`relative aspect-[5/6] sm:aspect-[4/5] rounded-xl overflow-hidden lg:col-span-7 ${
                      reverse ? 'lg:[direction:ltr]' : ''
                    }`}
                  >
                    <Image
                      src={partner.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                      loading={i < 1 ? 'eager' : 'lazy'}
                    />
                  </div>

                  <div className={`lg:col-span-5 ${reverse ? 'lg:[direction:ltr]' : ''}`}>
                    <p className="text-[11px] uppercase tracking-[0.14em] font-medium text-secondary mb-4">
                      {String(i + 1).padStart(2, '0')} · {partner.eyebrow}
                    </p>
                    <h2 className="font-display italic font-medium text-4xl sm:text-5xl text-primary leading-tight mb-7">
                      {partner.name}
                    </h2>
                    <p className="text-[17px] sm:text-[18px] leading-[1.7] text-ink/85 max-w-[52ch]">
                      {partner.body}
                    </p>

                    <p className="mt-7 text-[12px] uppercase tracking-[0.1em] font-medium text-secondary">
                      {partner.whereYouFindThem}
                    </p>
                    <Link
                      href={partner.tourHref}
                      className="mt-2 inline-flex items-center gap-2 text-[16px] font-display italic text-primary border-b border-accent/60 pb-0.5 hover:border-accent transition-colors"
                    >
                      {partner.tourName}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* 5th slot — partner futuro */}
          <div className="mt-24 sm:mt-32 max-w-3xl">
            <p className="text-[15px] sm:text-[16px] italic font-display text-ink/60 leading-relaxed border-l-2 border-accent-decorative/60 pl-6 py-2">
              {p.fifthSlotIntro}
            </p>
          </div>
        </div>
      </section>

      {/* 3. CTA finale */}
      <section className="bg-primary py-24 sm:py-32" style={{color: 'var(--cream-on-dark)'}}>
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#F5EFE4]/65 mb-5">
              {p.ctaEyebrow}
            </p>
            <h2 className="font-display font-medium text-[#F5EFE4] text-4xl sm:text-5xl lg:text-6xl leading-[1.08]">
              {p.ctaH2Pre}{' '}
              <span className="italic">{p.ctaH2Accent}</span>
            </h2>
            <p className="mt-6 text-[17px] sm:text-[18px] text-[#F5EFE4]/85 leading-relaxed max-w-prose">
              {p.ctaBody}
            </p>

            <div className="mt-12">
              <a
                href="mailto:info@ncctaxisiracusa.com"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-[13px] uppercase tracking-[0.05em] font-medium transition-all duration-200 hover:bg-accent-hover"
                style={{color: 'var(--cream-on-dark)'}}
              >
                {p.ctaButton}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
