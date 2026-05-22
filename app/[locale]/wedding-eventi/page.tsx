import type {Metadata} from 'next';
import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {faqPageSchema, localBusinessSchema, JsonLd} from '@/lib/schema';
import {routing} from '@/i18n/routing';
import {WeddingForm} from '@/components/sections/WeddingForm';
import type {Locale} from '@/lib/cities';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Wedding.meta'});
  const itPath = '/it/wedding-eventi';
  const enPath = '/en/weddings';
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

export default async function WeddingPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Wedding');
  const tNcc = await getTranslations('NccPage');

  const includedItems = t.raw('included.items') as string[];

  const faqItems = [
    {q: t('faq.q1'), a: t('faq.a1')},
    {q: t('faq.q2'), a: t('faq.a2')},
    {q: t('faq.q3'), a: t('faq.a3')},
    {q: t('faq.q4'), a: t('faq.a4')},
    {q: t('faq.q5'), a: t('faq.a5')}
  ];

  const fleet = [
    {
      name: t('fleet.card1Name'),
      pax: t('fleet.card1Pax'),
      note: t('fleet.card1Note')
    },
    {
      name: t('fleet.card2Name'),
      pax: t('fleet.card2Pax'),
      note: t('fleet.card2Note')
    },
    {
      name: t('fleet.card3Name'),
      pax: t('fleet.card3Pax'),
      note: t('fleet.card3Note')
    }
  ];

  return (
    <>
      <JsonLd data={localBusinessSchema(locale as Locale)} />
      <JsonLd data={faqPageSchema(faqItems)} />

      {/* 1. HERO emotivo */}
      <section className="relative isolate min-h-[min(92vh,780px)] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{filter: 'saturate(0.78) brightness(0.82) contrast(1.08)'}}
        >
          <Image
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1800&q=70&auto=format&fm=webp"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={75}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/80" />
        </div>

        <div className="relative w-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 pb-16 sm:pb-24 pt-32 sm:pt-40">
          <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#F5EFE4]/90 mb-7">
            {t('hero.eyebrow')}
          </p>
          <h1 className="font-display font-medium text-[#F5EFE4] text-[52px] sm:text-[80px] lg:text-[104px] leading-[0.98] tracking-tight max-w-[14ch]">
            {t('hero.h1Pre')}{' '}
            <span className="italic">{t('hero.h1Accent')}</span>
          </h1>
          <p className="mt-7 font-display italic text-[#F5EFE4]/90 text-xl sm:text-2xl max-w-[52ch] leading-snug">
            {t('hero.subhead')}
          </p>

          <div className="mt-12">
            <a
              href="#form"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-[13px] uppercase tracking-[0.05em] font-medium transition-all duration-200 hover:bg-accent-hover"
              style={{color: 'var(--cream-on-dark)'}}
            >
              {t('form.h2Pre')} {t('form.h2Accent').toLowerCase()}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. STORY — 3 momenti */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
              {t('story.eyebrow')}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
              {t('story.h2Pre')}{' '}
              <span className="italic">{t('story.h2Accent')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {n: '01', body: t('story.before')},
              {n: '02', body: t('story.during')},
              {n: '03', body: t('story.after')}
            ].map((m, i) => (
              <article key={i}>
                <p
                  className="font-display italic font-medium text-[80px] sm:text-[96px] leading-none mb-6"
                  style={{color: 'var(--accent-decorative)'}}
                >
                  {m.n}
                </p>
                <p className="font-display italic text-[20px] sm:text-[22px] leading-[1.5] text-ink/85 max-w-[36ch]">
                  {m.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INCLUSO */}
      <section className="bg-muted-bg py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
                {t('included.eyebrow')}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
                {t('included.h2Pre')}{' '}
                <span className="italic">{t('included.h2Accent')}</span>
              </h2>
            </div>

            <ul className="space-y-5 lg:space-y-6">
              {includedItems.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-5 sm:gap-7 text-[17px] sm:text-[18px] leading-[1.55] text-ink/85"
                >
                  <span
                    className="font-display italic text-2xl text-[color:var(--accent-decorative)] tabular-nums shrink-0 leading-none mt-1"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. FLOTTA WEDDING */}
      <section className="bg-canvas py-24 sm:py-32">
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
                className="bg-muted-bg rounded-xl p-7 sm:p-8 border border-[var(--border)]/40 flex flex-col gap-5"
              >
                <p className="text-[10px] uppercase tracking-[0.14em] font-medium text-secondary">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display italic font-medium text-2xl sm:text-[28px] text-primary leading-tight">
                  {f.name}
                </h3>
                <p className="text-[14px] uppercase tracking-[0.06em] font-medium text-accent">
                  {f.pax}
                </p>
                <p className="text-[15px] leading-relaxed text-ink/75">{f.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
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

      {/* 6. FORM QUALIFYING */}
      <section id="form" className="bg-canvas py-24 sm:py-32 border-y border-[var(--border)]/50">
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

            <WeddingForm />
          </div>
        </div>
      </section>

      {/* 7. CTA finale */}
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
