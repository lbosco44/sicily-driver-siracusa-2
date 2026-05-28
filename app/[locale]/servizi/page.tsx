import type {Metadata} from 'next';
import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {faqPageSchema, breadcrumbSchema, localBusinessSchema, JsonLd} from '@/lib/schema';
import {getBreadcrumb} from '@/lib/breadcrumbs';
import {routing} from '@/i18n/routing';
import {HERO_BLUR, HERO_SIZES} from '@/lib/blur';
import type {Locale} from '@/lib/cities';
import {ServicesTabs} from '@/components/sections/servizi/ServicesTabs';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Servizi.meta'});
  const itPath = '/it/servizi';
  const enPath = '/en/services';
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

export default async function ServiziPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Servizi');
  const tNcc = await getTranslations('NccPage');

  const faqItems = [
    {q: t('faq.q1'), a: t('faq.a1')},
    {q: t('faq.q2'), a: t('faq.a2')},
    {q: t('faq.q3'), a: t('faq.a3')},
    {q: t('faq.q4'), a: t('faq.a4')}
  ];

  // 4 servizi come blocchi editorial — niente card-grid, niente 01/02/03
  const services = [
    {
      key: '1',
      kicker: t('cards.card1Kicker'),
      title: t('cards.card1Title'),
      body: t('cards.card1Body'),
      points: [t('cards.card1Point1'), t('cards.card1Point2'), t('cards.card1Point3')],
      cta: t('cards.card1Cta'),
      href: '/ncc-catania' as const
    },
    {
      key: '2',
      kicker: t('cards.card2Kicker'),
      title: t('cards.card2Title'),
      body: t('cards.card2Body'),
      points: [t('cards.card2Point1'), t('cards.card2Point2'), t('cards.card2Point3')],
      cta: t('cards.card2Cta'),
      href: '/tour-sicilia' as const
    },
    {
      key: '3',
      kicker: t('cards.card3Kicker'),
      title: t('cards.card3Title'),
      body: t('cards.card3Body'),
      points: [t('cards.card3Point1'), t('cards.card3Point2'), t('cards.card3Point3')],
      cta: t('cards.card3Cta'),
      href: '/wedding' as const
    },
    {
      key: '4',
      kicker: t('cards.card4Kicker'),
      title: t('cards.card4Title'),
      body: t('cards.card4Body'),
      points: [t('cards.card4Point1'), t('cards.card4Point2'), t('cards.card4Point3')],
      cta: t('cards.card4Cta'),
      href: '/contatti' as const
    }
  ];

  const fleet = [
    {
      model: t('fleet.card1Model'),
      pax: t('fleet.card1Pax'),
      comfort: t('fleet.card1Comfort'),
      price: t('fleet.card1Price')
    },
    {
      model: t('fleet.card2Model'),
      pax: t('fleet.card2Pax'),
      comfort: t('fleet.card2Comfort'),
      price: t('fleet.card2Price')
    },
    {
      model: t('fleet.card3Model'),
      pax: t('fleet.card3Pax'),
      comfort: t('fleet.card3Comfort'),
      price: t('fleet.card3Price')
    }
  ];

  return (
    <>
      <JsonLd data={localBusinessSchema(locale as Locale)} />
      <JsonLd data={faqPageSchema(faqItems)} />
      <JsonLd
        data={breadcrumbSchema(
          getBreadcrumb(
            'servizi',
            locale as Locale,
            `${t('hero.h1Pre')} ${t('hero.h1Accent')}`
          )
        )}
      />

      {/* 01 — HERO ridotta */}
      <section className="hero-stage relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1800&q=80&auto=format&fm=webp"
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/75" />
        </div>

        <div className="relative h-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex items-end pb-[18vh] sm:pb-[22vh]">
          <div className="max-w-[24ch]">
            <h1
              className="font-display text-display-lg font-medium text-cream-on-dark"
              style={{fontStretch: '92%'}}
            >
              {t('hero.h1Pre')}{' '}
              <span className="text-accent-decorative">{t('hero.h1Accent')}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 02 — INTRO compatto + chip preview dei 4 servizi
            Cliente 28/05/2026: era text wall pesante che ripeteva i 4
            servizi gia' presenti nella sezione sotto. Sostituito con
            un titolo punchy + chip row preview cliccabile (anchor link
            agli scroll target). */}
      <section className="bg-canvas py-16 sm:py-20">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p
            className="font-display italic text-[22px] sm:text-[28px] lg:text-[32px] font-light text-ink-soft leading-[1.35] max-w-[44ch]"
            style={{fontStretch: '95%'}}
          >
            {t('intro.body')}
          </p>
        </div>
      </section>

      {/* 03 — 4 SERVIZI come TABS interattivi
            Cliente 28/05/2026: "non usare 4 schede 2x2 con numerazione
            01/02/03/04 come sempre". Tabs pattern stile Apple/Stripe
            implementato in <ServicesTabs>. Riduce ~75% vertical space
            (un solo servizio visibile alla volta), aggiunge interattivita',
            visivamente diverso dal bento. */}
      <section className="bg-canvas-deep py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <p className="eyebrow mb-5">{t('cards.eyebrow')}</p>
            <h2
              className="font-display text-display-sm sm:text-display-md font-light text-ink leading-[1.1]"
              style={{fontStretch: '95%'}}
            >
              {t('cards.h2Pre')}{' '}
              <span className="italic text-accent">{t('cards.h2Accent')}</span>
            </h2>
          </div>

          <ServicesTabs services={services} />
        </div>
      </section>

      {/* 04 — LA FLOTTA */}
      <section className="bg-canvas py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-16 sm:mb-20">
            <p className="eyebrow mb-7">{t('fleet.eyebrow')}</p>
            <h2
              className="font-display text-display-md font-light text-ink"
              style={{fontStretch: '95%'}}
            >
              {t('fleet.h2Pre')}{' '}
              <span className="italic text-accent">{t('fleet.h2Accent')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 md:gap-x-12 lg:gap-x-16">
            {fleet.map((f, i) => (
              <article
                key={i}
                className={
                  i < fleet.length - 1
                    ? 'md:border-r md:border-[var(--border-strong)] md:pr-12 lg:pr-16'
                    : ''
                }
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
                      {tNcc('fleetTablePax')}
                    </dt>
                    <dd className="text-ink font-medium">{f.pax}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-secondary mb-1">
                      {tNcc('fleetTableComfort')}
                    </dt>
                    <dd>{f.comfort}</dd>
                  </div>
                  <div className="pt-2 border-t border-[var(--border)]">
                    <p className="font-display italic text-[22px] text-accent">
                      {f.price}
                    </p>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — AREE SERVITE */}
      <section className="bg-canvas-warm py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div>
              <p className="eyebrow mb-7">{t('areas.eyebrow')}</p>
              <h2
                className="font-display text-display-md font-light text-ink leading-[1.05]"
                style={{fontStretch: '95%'}}
              >
                {t('areas.h2Pre')}{' '}
                <span className="italic text-accent">{t('areas.h2Accent')}</span>
              </h2>
            </div>

            <div className="space-y-6 text-[17px] sm:text-[18px] leading-[1.7] text-ink-soft">
              <p className="font-display italic text-[20px] text-primary">
                {t('areas.bases')}
              </p>
              <p>{t('areas.cities')}</p>
              <p className="text-[15px] text-ink/60">{t('areas.airports')}</p>

              <div className="pt-6 flex flex-wrap gap-3">
                {(
                  [
                    {href: '/ncc-catania', label: 'Catania'},
                    {href: '/ncc-noto', label: 'Noto'},
                    {href: '/ncc-taormina', label: 'Taormina'},
                    {href: '/ncc-ragusa', label: 'Ragusa'}
                  ] as const
                ).map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-2.5 text-[12px] uppercase tracking-[0.12em] font-medium text-primary hover:border-accent hover:text-accent transition-colors"
                  >
                    {c.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — FAQ */}
      <section className="bg-canvas-deep py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow mb-10">{t('faq.eyebrow')}</p>
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] mb-14 sm:mb-16"
            style={{fontStretch: '95%'}}
          >
            {t('faq.h2Pre')}{' '}
            <span className="italic text-accent">{t('faq.h2Accent')}</span>
          </h2>

          <ul className="divide-y divide-[var(--border-strong)]">
            {faqItems.map((item, i) => (
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

      {/* 07 — CTA finale */}
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
          <h2
            className="font-display text-display-lg font-light text-cream-on-dark max-w-[22ch] leading-[0.98]"
            style={{fontStretch: '95%'}}
          >
            {t('ctaFinale.h2')}
          </h2>
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
