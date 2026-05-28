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
import {CtaFinale} from '@/components/sections/home/CtaFinale';

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
      capacity: t('fleet.card1Capacity'),
      pax: t('fleet.card1Pax'),
      type: t('fleet.card1Type'),
      detail: t('fleet.card1Detail'),
      brands: t('fleet.card1Brands'),
      price: t('fleet.card1Price')
    },
    {
      capacity: t('fleet.card2Capacity'),
      pax: t('fleet.card2Pax'),
      type: t('fleet.card2Type'),
      detail: t('fleet.card2Detail'),
      brands: t('fleet.card2Brands'),
      price: t('fleet.card2Price')
    },
    {
      capacity: t('fleet.card3Capacity'),
      pax: t('fleet.card3Pax'),
      type: t('fleet.card3Type'),
      detail: t('fleet.card3Detail'),
      brands: t('fleet.card3Brands'),
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

      {/* 02 — INTRO rimossa interamente (cliente 28/05/2026: la frase
            italic ripeteva i 4 servizi che gia' compaiono nella sezione
            tabs sotto → ridondante). */}

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

      {/* 04 — LA FLOTTA: design MINIMAL (iterazione 3)
            Cliente 28/05/2026: la versione precedente era "incasinata,
            troppi pesi di font, sizes, caps, grassetti diversi".
            Riprogettato MINIMAL: 1 sola gerarchia font, no decorazioni
            (no numeri giganti, no caps brand stamp, no italic price),
            solo info essenziale per colonna: tipo, passeggeri, prezzo.
            Brand mention spostato nel lead generale al top → niente
            piu' ripetizione 3 volte. */}
      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <h2
              className="font-display text-display-sm sm:text-display-md font-light text-ink leading-[1.1]"
              style={{fontStretch: '95%'}}
            >
              {t('fleet.h2Pre')}{' '}
              <span className="italic text-accent">{t('fleet.h2Accent')}</span>
            </h2>
            <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.55] text-ink-soft max-w-[58ch]">
              {t('fleet.lead')}
            </p>
          </div>

          {/* 3 colonne minimal: stesso peso font (light), 3 size hierarchy
              solo (title 28px / pax 17px / price 17px), niente bold uppercase
              brand, niente italic decorativo. Divider sottili tra colonne. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 md:divide-x md:divide-[var(--border)]">
            {fleet.map((f, i) => (
              <article
                key={i}
                className={`${
                  i === 0
                    ? 'md:pr-10 lg:pr-14'
                    : i === fleet.length - 1
                      ? 'md:pl-10 lg:pl-14'
                      : 'md:px-10 lg:px-14'
                }`}
              >
                <h3
                  className="font-display text-[24px] sm:text-[28px] font-light text-ink leading-[1.15] mb-4"
                  style={{fontStretch: '95%'}}
                >
                  {f.type}
                </h3>
                <p className="text-[16px] sm:text-[17px] text-ink-soft leading-[1.55]">
                  {f.capacity} {f.pax}
                </p>
                <p className="text-[16px] sm:text-[17px] text-accent leading-[1.55] mt-1">
                  {f.price}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — TUTTA LA SICILIA (riprogettata 28/05/2026 + 2nd iter)
            Cliente: 1) il framing "Le città che conosciamo" sembrava
            che servissimo solo quelle citta' → cambiato a "Tutta la
            Sicilia". 2) Supporting info (sedi/altre/aeroporti) era
            in una row sotto separata, allungava la sezione. Spostata
            in colonna destra accanto al lead → -50% vertical. */}
      <section className="bg-canvas-warm py-20 sm:py-24">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
            {/* LEFT: H2 + lead + 4 chip CTA */}
            <div>
              <h2
                className="font-display text-display-md sm:text-display-lg font-light text-ink leading-[1.02]"
                style={{fontStretch: '95%'}}
              >
                {t('areas.h2Pre')}{' '}
                <span className="italic text-accent">{t('areas.h2Accent')}</span>
              </h2>
              <p className="mt-6 sm:mt-7 text-[17px] sm:text-[18px] leading-[1.6] text-ink-soft max-w-[52ch]">
                {t('areas.lead')}
              </p>

              {/* 4 chip-CTA prominenti */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-9 sm:mt-10">
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
                    className="group inline-flex items-center gap-3 rounded-full border-2 border-[var(--border-strong)] hover:border-accent bg-canvas hover:bg-accent px-6 py-3 text-[13px] sm:text-[14px] uppercase tracking-[0.14em] font-medium text-ink hover:text-cream-on-dark transition-all duration-200"
                  >
                    {c.label}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT: supporting info stacked verticale (sidebar style).
                Spostato qui dalla row sotto per accorciare la sezione. */}
            <aside className="space-y-6 lg:space-y-7 lg:max-w-[300px] lg:pt-2 lg:border-l lg:border-[var(--border)] lg:pl-12 text-[13px] sm:text-[14px] leading-[1.55]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] font-medium text-secondary mb-2">
                  Sedi
                </p>
                <p className="font-display italic text-[16px] text-primary">
                  {t('areas.bases')}
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] font-medium text-secondary mb-2">
                  Altre destinazioni
                </p>
                <p className="text-ink-soft">{t('areas.cities')}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] font-medium text-secondary mb-2">
                  Aeroporti
                </p>
                <p className="text-ink-soft">{t('areas.airports')}</p>
              </div>
            </aside>
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

      {/* 07 — CTA finale "Saliamo a bordo" (riusato dall'home)
            Cliente 28/05/2026: sostituita la sezione blu deep con il
            CtaFinale van overlay della home. Coerente come closing
            pattern in tutto il sito. */}
      <CtaFinale />
    </>
  );
}
