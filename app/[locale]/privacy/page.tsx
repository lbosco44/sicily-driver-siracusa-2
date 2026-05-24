import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {breadcrumbSchema, JsonLd} from '@/lib/schema';
import {routing} from '@/i18n/routing';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Privacy.meta'});
  const path = `/${locale}/privacy`;
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: path,
      languages: {it: '/it/privacy', en: '/en/privacy', 'x-default': '/it/privacy'}
    },
    robots: {index: false, follow: true}
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function PrivacyPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Privacy');

  const sections = [
    {h: t('s1.h'), p: t('s1.p')},
    {h: t('s2.h'), p: t('s2.p')},
    {h: t('s3.h'), p: t('s3.p')},
    {h: t('s4.h'), p: t('s4.p')},
    {h: t('s5.h'), p: t('s5.p')},
    {h: t('s6.h'), p: t('s6.p')},
    {h: t('s7.h'), p: t('s7.p')},
    {h: t('s8.h'), p: t('s8.p')}
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          {name: 'Home', url: `/${locale}`},
          {name: t('h1'), url: `/${locale}/privacy`}
        ])}
      />

      {/* Hero */}
      <section className="bg-canvas pt-40 sm:pt-52 pb-20 sm:pb-24">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow mb-8">{t('eyebrow')}</p>
          <h1
            className="font-display text-display-lg font-medium text-ink leading-[1]"
            style={{fontStretch: '92%'}}
          >
            {t('h1')}
          </h1>
          <p className="mt-10 text-[15px] text-ink/55">{t('updated')}</p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-canvas pb-32 sm:pb-40">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <div className="space-y-14 sm:space-y-16">
            <p className="text-[18px] sm:text-[19px] leading-[1.7] text-ink-soft">
              {t('intro')}
            </p>

            {sections.map((s, i) => (
              <section key={i}>
                <h2
                  className="font-display text-[28px] sm:text-[34px] lg:text-[40px] font-light text-ink leading-[1.1] mb-6"
                  style={{fontStretch: '95%'}}
                >
                  {s.h}
                </h2>
                <p className="text-[17px] sm:text-[18px] leading-[1.75] text-ink-soft whitespace-pre-line">
                  {s.p}
                </p>
              </section>
            ))}

            {/* Contatti rapidi */}
            <section className="bg-canvas-deep px-7 sm:px-9 py-9 sm:py-10 border-l-2 border-accent">
              <p className="eyebrow mb-4">{t('contact.eyebrow')}</p>
              <p className="text-[17px] leading-[1.7] text-ink-soft">
                {t('contact.body')}{' '}
                <a
                  href="mailto:info@ncctaxisiracusa.com"
                  className="text-accent underline underline-offset-4 hover:text-accent-hover transition-colors"
                >
                  info@ncctaxisiracusa.com
                </a>
              </p>
              <Link
                href="/contatti"
                className="mt-7 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] font-medium text-primary border-b border-accent pb-1 hover:border-accent-hover transition-colors"
              >
                {t('contact.cta')}
                <span aria-hidden="true">→</span>
              </Link>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
