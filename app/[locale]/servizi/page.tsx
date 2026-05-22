import type {Metadata} from 'next';
import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {faqPageSchema, localBusinessSchema, JsonLd} from '@/lib/schema';
import {routing} from '@/i18n/routing';
import type {Locale} from '@/lib/cities';

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

  const cards = [
    {
      number: t('cards.card1Number'),
      kicker: t('cards.card1Kicker'),
      title: t('cards.card1Title'),
      body: t('cards.card1Body'),
      points: [t('cards.card1Point1'), t('cards.card1Point2'), t('cards.card1Point3')],
      cta: t('cards.card1Cta'),
      href: '/ncc-catania' as const,
      bg: 'bg-[#EDE5D6]',
      textColor: 'text-ink',
      numberColor: 'var(--accent-decorative)'
    },
    {
      number: t('cards.card2Number'),
      kicker: t('cards.card2Kicker'),
      title: t('cards.card2Title'),
      body: t('cards.card2Body'),
      points: [t('cards.card2Point1'), t('cards.card2Point2'), t('cards.card2Point3')],
      cta: t('cards.card2Cta'),
      href: '/tour-sicilia' as const,
      bg: 'bg-primary',
      textColor: 'text-[#F5EFE4]',
      numberColor: 'var(--accent-decorative)'
    },
    {
      number: t('cards.card3Number'),
      kicker: t('cards.card3Kicker'),
      title: t('cards.card3Title'),
      body: t('cards.card3Body'),
      points: [t('cards.card3Point1'), t('cards.card3Point2'), t('cards.card3Point3')],
      cta: t('cards.card3Cta'),
      href: '/wedding-eventi' as const,
      bg: 'bg-[#D9C9B8]',
      textColor: 'text-primary',
      numberColor: 'var(--primary)'
    },
    {
      number: t('cards.card4Number'),
      kicker: t('cards.card4Kicker'),
      title: t('cards.card4Title'),
      body: t('cards.card4Body'),
      points: [t('cards.card4Point1'), t('cards.card4Point2'), t('cards.card4Point3')],
      cta: t('cards.card4Cta'),
      href: '/contatti' as const,
      bg: 'bg-accent',
      textColor: 'text-[#F5EFE4]',
      numberColor: '#F5EFE4'
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

      {/* 1. HERO */}
      <section className="relative isolate min-h-[min(68vh,540px)] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{filter: 'saturate(0.85) brightness(0.88) contrast(1.06)'}}
        >
          <Image
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&q=70&auto=format&fm=webp"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={70}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/15" />
        </div>

        <div className="relative w-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 pb-12 sm:pb-16 pt-32 sm:pt-40">
          <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#F5EFE4]/90 mb-6">
            {t('hero.eyebrow')}
          </p>
          <h1 className="font-display font-medium text-[#F5EFE4] text-[44px] sm:text-[64px] lg:text-[80px] leading-[1.03] tracking-tight max-w-[14ch]">
            {t('hero.h1Pre')} <span className="italic">{t('hero.h1Accent')}</span>
          </h1>
          <p className="mt-6 max-w-[54ch] text-[16px] sm:text-[18px] text-[#F5EFE4]/90 leading-relaxed">
            {t('hero.subhead')}
          </p>
        </div>
      </section>

      {/* 2. INTRO */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl">
            <p className="text-[18px] sm:text-[20px] leading-[1.7] text-ink/90">
              {t('intro.body')}
            </p>
          </div>
        </div>
      </section>

      {/* 3. 4 SERVIZI — color blocking asimmetrico */}
      <section className="bg-canvas pb-24 sm:pb-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
              {t('cards.eyebrow')}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
              {t('cards.h2Pre')}{' '}
              <span className="italic">{t('cards.h2Accent')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {cards.map((card, i) => (
              <Link
                key={i}
                href={card.href}
                className={`group relative overflow-hidden rounded-xl ${card.bg} ${card.textColor} ${
                  i < 2 ? 'lg:col-span-6' : 'lg:col-span-6'
                } p-8 sm:p-10 min-h-[360px] flex flex-col justify-between transition-shadow duration-300 hover:shadow-[0_18px_48px_rgba(42,37,32,0.18)]`}
                style={{color: 'inherit'}}
              >
                <div className="flex items-start justify-between gap-4">
                  <p
                    className="font-display italic font-medium text-[88px] sm:text-[110px] leading-[0.85]"
                    style={{color: card.numberColor}}
                  >
                    {card.number}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.14em] font-medium opacity-90 mt-3 max-w-[14ch] text-right">
                    {card.kicker}
                  </p>
                </div>

                <div>
                  <h3 className="font-display italic font-medium text-2xl sm:text-3xl leading-tight max-w-[20ch]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.55] opacity-95 max-w-[44ch]">
                    {card.body}
                  </p>
                  <ul className="mt-5 space-y-1.5 text-[13px] opacity-90">
                    {card.points.map((p, j) => (
                      <li key={j} className="flex gap-3">
                        <span aria-hidden="true">—</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-7 text-[12px] uppercase tracking-[0.08em] font-medium opacity-95 inline-flex items-center gap-2">
                    {card.cta}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    >
                      →
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FLOTTA — 3 schede dettagliate */}
      <section className="bg-muted-bg py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
              {t('fleet.eyebrow')}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
              {t('fleet.h2Pre')}{' '}
              <span className="italic">{t('fleet.h2Accent')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
            {fleet.map((f, i) => (
              <article
                key={i}
                className="bg-canvas rounded-xl p-7 sm:p-8 flex flex-col gap-5 border border-[var(--border)]/40"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] font-medium text-secondary">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display italic font-medium text-2xl sm:text-[28px] text-primary mt-1 leading-tight">
                    {f.model}
                  </h3>
                </div>
                <dl className="space-y-3 text-[14px] leading-relaxed text-ink/80">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.12em] text-ink/50 font-medium">
                      {tNcc('fleetTablePax')}
                    </dt>
                    <dd className="mt-0.5 font-medium text-ink">{f.pax}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.12em] text-ink/50 font-medium">
                      {tNcc('fleetTableComfort')}
                    </dt>
                    <dd className="mt-0.5">{f.comfort}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.12em] text-ink/50 font-medium">
                      Listino
                    </dt>
                    <dd className="mt-0.5 font-display italic text-accent text-lg">
                      {f.price}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AREE SERVITE */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
                {t('areas.eyebrow')}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
                {t('areas.h2Pre')}{' '}
                <span className="italic">{t('areas.h2Accent')}</span>
              </h2>
            </div>

            <div className="space-y-6 text-[16px] sm:text-[17px] leading-[1.7] text-ink/85">
              <p className="font-display italic text-primary text-lg">
                {t('areas.bases')}
              </p>
              <p>{t('areas.cities')}</p>
              <p className="text-ink/65 text-[15px]">{t('areas.airports')}</p>

              <div className="pt-4 flex flex-wrap gap-3">
                {(
                  [
                    {href: '/ncc-catania', label: 'Catania'},
                    {href: '/ncc-noto', label: 'Noto'},
                    {href: '/ncc-taormina', label: 'Taormina'},
                    {href: '/ncc-ragusa', label: 'Ragusa'}
                  ] as const
                ).map((city) => (
                  <Link
                    key={city.href}
                    href={city.href}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-[13px] uppercase tracking-[0.06em] font-medium text-primary hover:bg-muted-bg transition-colors"
                  >
                    {city.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-muted-bg py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
                {t('faq.eyebrow')}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
                {t('faq.h2Pre')}{' '}
                <span className="italic">{t('faq.h2Accent')}</span>
              </h2>
            </div>

            <ul className="divide-y divide-[var(--border)]">
              {faqItems.map((item, i) => (
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

      {/* 7. CTA FINALE */}
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
