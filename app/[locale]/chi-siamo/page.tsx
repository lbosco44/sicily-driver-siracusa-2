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

      {/* 04 — BELIEFS — NO numerazione 01/02/03, solo titoli e prose */}
      <section className="bg-canvas py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <p className="eyebrow mb-10">{t('beliefs.eyebrow')}</p>
          <h2
            className="font-display text-display-md font-light text-ink max-w-[14ch] mb-16 sm:mb-20"
            style={{fontStretch: '95%'}}
          >
            {t('beliefs.h2Pre')}{' '}
            <span className="italic text-accent">{t('beliefs.h2Accent')}</span>
          </h2>

          <ul className="divide-y divide-[var(--border-strong)]">
            {beliefs.map((b, i) => (
              <li
                key={i}
                className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-6 lg:gap-16 items-baseline"
              >
                <h3
                  className="font-display italic text-display-sm font-light text-ink leading-[1.05]"
                  style={{fontStretch: '95%'}}
                >
                  {b.title}
                </h3>
                <p className="text-[17px] sm:text-[18px] leading-[1.7] text-ink-soft max-w-[58ch]">
                  {b.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 05 — LE 3 SEDI */}
      <section className="bg-canvas-warm py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-16 sm:mb-20">
            <p className="eyebrow mb-7">{t('bases.eyebrow')}</p>
            <h2
              className="font-display text-display-md font-light text-ink"
              style={{fontStretch: '95%'}}
            >
              {t('bases.h2Pre')}{' '}
              <span className="italic text-accent">{t('bases.h2Accent')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 md:gap-x-12 lg:gap-x-16">
            {bases.map((b, i) => (
              <article
                key={i}
                className={
                  i < bases.length - 1
                    ? 'md:border-r md:border-[var(--border-strong)] md:pr-12 lg:pr-16'
                    : ''
                }
              >
                <h3
                  className="font-display text-display-sm font-light text-ink leading-[1.05] mb-5"
                  style={{fontStretch: '95%'}}
                >
                  {b.name}
                </h3>
                <p className="font-display italic text-[18px] text-accent mb-4">
                  {b.address}
                </p>
                <p className="text-[15px] text-ink-soft leading-relaxed max-w-[36ch]">
                  {b.note}
                </p>
              </article>
            ))}
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
            <a
              href="https://wa.me/393756413379"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:bg-accent-hover"
              style={{color: 'var(--cream-on-dark)'}}
            >
              {tNcc('ctaWhatsApp')}
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
              {tNcc('ctaQuote')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
