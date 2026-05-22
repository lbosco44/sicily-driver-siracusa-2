import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {breadcrumbSchema, localBusinessSchema, JsonLd} from '@/lib/schema';
import {getBreadcrumb} from '@/lib/breadcrumbs';
import {routing} from '@/i18n/routing';
import {ContactForm} from '@/components/sections/ContactForm';
import type {Locale} from '@/lib/cities';

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

      {/* 1. HERO RIDOTTA */}
      <section className="bg-canvas pt-28 sm:pt-40 pb-16 sm:pb-20 border-b border-[var(--border)]/50">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-6">
            {t('hero.eyebrow')}
          </p>
          <h1 className="font-display font-medium text-primary text-[48px] sm:text-[72px] lg:text-[92px] leading-[1.02] tracking-tight max-w-[18ch]">
            {t('hero.h1Pre')}{' '}
            <span className="italic">{t('hero.h1Accent')}</span>
          </h1>
          <p className="mt-7 max-w-[56ch] text-[16px] sm:text-[18px] text-ink/75 leading-relaxed">
            {t('hero.subhead')}
          </p>
        </div>
      </section>

      {/* 2. 3 MODI DI RAGGIUNGERCI — card pari grandezza */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
              {t('ways.eyebrow')}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
              {t('ways.h2Pre')}{' '}
              <span className="italic">{t('ways.h2Accent')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
            {ways.map((w, i) => (
              <article
                key={i}
                className="bg-muted-bg rounded-xl p-7 sm:p-8 flex flex-col justify-between gap-6 border border-[var(--border)]/40 min-h-[280px]"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] font-medium text-secondary mb-3">
                    {String(i + 1).padStart(2, '0')} · {w.label}
                  </p>
                  <p className="font-display italic text-2xl sm:text-3xl text-primary leading-tight tabular-nums">
                    {w.value}
                  </p>
                  <p className="mt-4 text-[14px] text-ink/70 leading-relaxed">{w.note}</p>
                </div>

                <a
                  href={w.ctaHref}
                  {...(w.external
                    ? {target: '_blank', rel: 'noopener noreferrer'}
                    : {})}
                  className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.08em] font-medium text-primary border-b border-accent/60 pb-1 self-start hover:border-accent transition-colors"
                >
                  {w.ctaLabel}
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>

          <p className="mt-10 text-[13px] text-ink/55">{t('ways.pec')}</p>
        </div>
      </section>

      {/* 3. FORM CONTATTI */}
      <section className="bg-muted-bg py-24 sm:py-32 border-y border-[var(--border)]/50">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
                {t('form.eyebrow')}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
                {t('form.h2Pre')}{' '}
                <span className="italic">{t('form.h2Accent')}</span>
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink/75 max-w-prose">
                {t('form.subhead')}
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* 4. SEDI */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
              {t('bases.eyebrow')}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
              {t('bases.h2Pre')}{' '}
              <span className="italic">{t('bases.h2Accent')}</span>
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-10">
            {bases.map((b, i) => (
              <li key={i} className="border-l-2 border-accent/50 pl-6">
                <p className="text-[10px] uppercase tracking-[0.14em] font-medium text-secondary mb-2">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display italic font-medium text-2xl text-primary leading-tight">
                  {b.name}
                </h3>
                <p className="mt-3 text-[15px] text-ink/85">{b.address}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. TEMPI DI RISPOSTA */}
      <section className="bg-primary py-24 sm:py-32" style={{color: 'var(--cream-on-dark)'}}>
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#F5EFE4]/65 mb-5">
              {t('times.eyebrow')}
            </p>
            <h2 className="font-display font-medium text-[#F5EFE4] text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
              {t('times.h2Pre')}{' '}
              <span className="italic">{t('times.h2Accent')}</span>
            </h2>
            <p className="mt-7 text-[18px] sm:text-[20px] text-[#F5EFE4]/85 leading-relaxed">
              {t('times.body')}
            </p>
            <p className="mt-5 text-[15px] text-[#F5EFE4]/65 leading-relaxed max-w-prose">
              {t('times.businessNote')}
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
