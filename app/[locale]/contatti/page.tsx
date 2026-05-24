import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {breadcrumbSchema, localBusinessSchema, JsonLd} from '@/lib/schema';
import {getBreadcrumb} from '@/lib/breadcrumbs';
import {routing} from '@/i18n/routing';
import {ContactForm} from '@/components/sections/ContactForm';
import type {Locale} from '@/lib/cities';
import {AnimatedHeading} from '@/components/ui/AnimatedHeading';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Contatti.meta'});
  const itPath = '/it/contatti';
  const enPath = '/en/contact';
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

export default async function ContattiPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Contatti');

  const ways = [
    {
      label: t('ways.card1Label'),
      value: t('ways.card1Value'),
      note: t('ways.card1Note'),
      ctaLabel: t('ways.card1CtaLabel'),
      ctaHref: 'https://wa.me/393756413379',
      external: true
    },
    {
      label: t('ways.card2Label'),
      value: t('ways.card2Value'),
      note: t('ways.card2Note'),
      ctaLabel: t('ways.card2CtaLabel'),
      ctaHref: 'tel:+393756413379',
      external: false
    },
    {
      label: t('ways.card3Label'),
      value: t('ways.card3Value'),
      note: t('ways.card3Note'),
      ctaLabel: t('ways.card3CtaLabel'),
      ctaHref: 'mailto:info@ncctaxisiracusa.com',
      external: false
    }
  ];

  const bases = [
    {name: t('bases.base1Name'), address: t('bases.base1Address')},
    {name: t('bases.base2Name'), address: t('bases.base2Address')},
    {name: t('bases.base3Name'), address: t('bases.base3Address')}
  ];

  return (
    <>
      <JsonLd data={localBusinessSchema(locale as Locale)} />
      <JsonLd
        data={breadcrumbSchema(
          getBreadcrumb(
            'contatti',
            locale as Locale,
            `${t('hero.h1Pre')} ${t('hero.h1Accent')}`
          )
        )}
      />

      {/* 01 — HERO asciutta, cream */}
      <section className="bg-canvas pt-40 sm:pt-52 pb-24 sm:pb-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <p className="eyebrow mb-10">{t('hero.eyebrow')}</p>
          <h1
            className="font-display text-display-lg font-medium text-ink max-w-[24ch] leading-[0.95]"
            style={{fontStretch: '92%'}}
          >
            {t('hero.h1Pre')}{' '}
            <span className="italic text-accent">{t('hero.h1Accent')}</span>
          </h1>
          <p className="mt-12 max-w-[58ch] font-display text-[22px] sm:text-[26px] font-light text-ink-soft leading-[1.4]">
            {t('hero.subhead')}
          </p>
        </div>
      </section>

      {/* 02 — 3 MODI per raggiungerci — editorial restraint */}
      <section className="bg-canvas-deep py-32 sm:py-40 border-y border-[var(--border)]">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-14 sm:mb-16">
            <p className="eyebrow mb-7">{t('ways.eyebrow')}</p>
            <h2
              className="font-display text-display-md font-light text-ink"
              style={{fontStretch: '95%'}}
            >
              {t('ways.h2Pre')}{' '}
              <span className="italic text-accent">{t('ways.h2Accent')}</span>
            </h2>
          </div>

          <ul className="divide-y divide-[var(--border-strong)]">
            {ways.map((w, i) => (
              <li
                key={i}
                className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_auto] gap-6 lg:gap-16 items-baseline"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] font-medium text-secondary mb-3">
                    {w.label}
                  </p>
                  <p
                    className="font-display italic text-[28px] sm:text-[36px] font-light text-ink leading-tight tabular-nums"
                    style={{fontStretch: '95%'}}
                  >
                    {w.value}
                  </p>
                </div>
                <p className="text-[16px] leading-[1.65] text-ink-soft max-w-[42ch]">
                  {w.note}
                </p>
                <a
                  href={w.ctaHref}
                  {...(w.external
                    ? {target: '_blank', rel: 'noopener noreferrer'}
                    : {})}
                  className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-medium text-primary border-b border-accent pb-1 hover:border-accent-hover transition-colors self-end"
                >
                  {w.ctaLabel}
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-[13px] italic text-ink/50">{t('ways.pec')}</p>
        </div>
      </section>

      {/* 03 — FORM */}
      <section className="bg-canvas py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow mb-7">{t('form.eyebrow')}</p>
              <h2
                className="font-display text-display-md font-light text-ink max-w-[14ch] mb-7"
                style={{fontStretch: '95%'}}
              >
                {t('form.h2Pre')}{' '}
                <span className="italic text-accent">{t('form.h2Accent')}</span>
              </h2>
              <p className="text-[17px] leading-[1.7] text-ink-soft max-w-[44ch]">
                {t('form.subhead')}
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* 04 — SEDI */}
      <section className="bg-canvas-warm py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-14 sm:mb-16">
            <p className="eyebrow mb-7">{t('bases.eyebrow')}</p>
            <h2
              className="font-display text-display-md font-light text-ink"
              style={{fontStretch: '95%'}}
            >
              {t('bases.h2Pre')}{' '}
              <span className="italic text-accent">{t('bases.h2Accent')}</span>
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 md:gap-x-12 lg:gap-x-16">
            {bases.map((b, i) => (
              <li
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
                <p className="font-display italic text-[18px] text-accent">
                  {b.address}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 05 — TEMPI DI RISPOSTA */}
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
            {t('times.eyebrow')}
          </p>
          <AnimatedHeading
            as="h2"
            text={`${t('times.h2Pre')} ${t('times.h2Accent')}`}
            className="font-display text-display-lg font-light text-cream-on-dark max-w-[20ch] leading-[0.98]"
            style={{fontStretch: '95%'}}
          />
          <p className="mt-10 text-[19px] sm:text-[21px] text-cream-soft leading-[1.65] max-w-[58ch]">
            {t('times.body')}
          </p>
          <p className="mt-7 text-[16px] text-cream-on-dark/65 leading-[1.65] max-w-[58ch]">
            {t('times.businessNote')}
          </p>
        </div>
      </section>
    </>
  );
}
