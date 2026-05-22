import type {Metadata} from 'next';
import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {breadcrumbSchema, localBusinessSchema, JsonLd} from '@/lib/schema';
import {getBreadcrumb} from '@/lib/breadcrumbs';
import {routing} from '@/i18n/routing';
import type {Locale} from '@/lib/cities';
import {HERO_BLUR, HERO_SIZES} from '@/lib/blur';

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
    {n: '01', title: t('beliefs.item1Title'), body: t('beliefs.item1Body')},
    {n: '02', title: t('beliefs.item2Title'), body: t('beliefs.item2Body')},
    {n: '03', title: t('beliefs.item3Title'), body: t('beliefs.item3Body')}
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

      {/* 1. HERO RIDOTTA */}
      <section className="relative isolate min-h-[min(64vh,520px)] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{filter: 'saturate(0.82) brightness(0.88) contrast(1.08)'}}
        >
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=70&auto=format&fm=webp"
            alt=""
            fill
            priority
            sizes={HERO_SIZES}
            quality={70}
            placeholder="blur"
            blurDataURL={HERO_BLUR}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
        </div>

        <div className="relative w-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 pb-12 sm:pb-16 pt-32 sm:pt-40">
          <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#F5EFE4]/90 mb-6">
            {t('hero.eyebrow')}
          </p>
          <h1 className="font-display font-medium text-[#F5EFE4] text-[44px] sm:text-[64px] lg:text-[80px] leading-[1.03] tracking-tight max-w-[16ch]">
            {t('hero.h1Pre')} <span className="italic">{t('hero.h1Accent')}</span>
          </h1>
          <p className="mt-6 max-w-[56ch] text-[16px] sm:text-[18px] text-[#F5EFE4]/90 leading-relaxed">
            {t('hero.subhead')}
          </p>
        </div>
      </section>

      {/* 2. STORY — 3 paragrafi */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
                {t('story.eyebrow')}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
                {t('story.h2Pre')}{' '}
                <span className="italic">{t('story.h2Accent')}</span>
              </h2>
            </div>

            <div className="space-y-7 text-[17px] sm:text-[18px] leading-[1.75] text-ink/85">
              <p className="first-letter:font-display first-letter:italic first-letter:text-[64px] first-letter:leading-[0.85] first-letter:text-[color:var(--accent-decorative)] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                {t('story.body1')}
              </p>
              <p>{t('story.body2')}</p>
              <p>{t('story.body3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GALLERIA EDITORIAL — placeholder asimmetrico */}
      <section className="bg-muted-bg py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 lg:auto-rows-[220px]">
            <div className="sm:col-span-7 sm:row-span-2 relative overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=70&auto=format&fm=webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="sm:col-span-5 relative overflow-hidden rounded-xl aspect-[4/3] sm:aspect-auto">
              <Image
                src="https://images.unsplash.com/photo-1583435423797-be15ddffe3c2?w=900&q=70&auto=format&fm=webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="sm:col-span-5 relative overflow-hidden rounded-xl aspect-[4/3] sm:aspect-auto">
              <Image
                src="https://images.unsplash.com/photo-1571687948252-c4f4d9d57c41?w=900&q=70&auto=format&fm=webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. BELIEFS — 3 colonne */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
              {t('beliefs.eyebrow')}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
              {t('beliefs.h2Pre')}{' '}
              <span className="italic">{t('beliefs.h2Accent')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {beliefs.map((b, i) => (
              <article key={i}>
                <p
                  className="font-display italic font-medium text-[64px] sm:text-[80px] leading-[0.85] mb-4"
                  style={{color: 'var(--accent-decorative)'}}
                >
                  {b.n}
                </p>
                <h3 className="font-display italic font-medium text-2xl sm:text-[28px] text-primary leading-tight mb-3 max-w-[20ch]">
                  {b.title}
                </h3>
                <p className="text-[16px] leading-[1.65] text-ink/80 max-w-[40ch]">
                  {b.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SEDI — 3 card con indirizzo */}
      <section className="bg-muted-bg py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
              {t('bases.eyebrow')}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
              {t('bases.h2Pre')}{' '}
              <span className="italic">{t('bases.h2Accent')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
            {bases.map((b, i) => (
              <article
                key={i}
                className="bg-canvas rounded-xl p-7 sm:p-8 border border-[var(--border)]/40"
              >
                <p className="text-[10px] uppercase tracking-[0.14em] font-medium text-secondary mb-2">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display italic font-medium text-2xl text-primary leading-tight mb-3">
                  {b.name}
                </h3>
                <p className="text-[15px] text-ink/85 font-medium">{b.address}</p>
                <p className="mt-3 text-[14px] text-ink/60 leading-relaxed">{b.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA FINALE */}
      <section className="bg-primary py-24 sm:py-32" style={{color: 'var(--cream-on-dark)'}}>
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#F5EFE4]/65 mb-5">
              {t('ctaFinale.eyebrow')}
            </p>
            <h2 className="font-display italic font-medium text-[#F5EFE4] text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
              {t('ctaFinale.h2')}
            </h2>
            <p className="mt-6 text-[18px] sm:text-[20px] text-[#F5EFE4]/80 leading-relaxed max-w-prose">
              {t('ctaFinale.subhead')}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
              <a
                href="https://wa.me/393756413379"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-[13px] uppercase tracking-[0.05em] font-medium transition-all duration-200 hover:bg-accent-hover"
                style={{color: 'var(--cream-on-dark)'}}
              >
                {tNcc('ctaWhatsApp')}
                <span aria-hidden="true">→</span>
              </a>
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F5EFE4]/40 px-8 py-4 text-[13px] uppercase tracking-[0.05em] font-medium text-[#F5EFE4] hover:bg-[#F5EFE4]/10 transition-colors"
              >
                {tNcc('ctaQuote')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
