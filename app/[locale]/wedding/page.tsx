import type {Metadata} from 'next';
import Image from 'next/image';
import {setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {faqPageSchema, breadcrumbSchema, localBusinessSchema, JsonLd} from '@/lib/schema';
import {getBreadcrumb} from '@/lib/breadcrumbs';
import {routing} from '@/i18n/routing';
import {WeddingForm} from '@/components/sections/WeddingForm';
import {getWedding} from '@/lib/wedding';
import {HERO_BLUR, HERO_SIZES} from '@/lib/blur';
import type {Locale} from '@/lib/cities';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const wedding = getWedding(locale as Locale);
  const itPath = '/it/wedding';
  const enPath = '/en/weddings';
  return {
    title: wedding.metaTitle,
    description: wedding.metaDescription,
    alternates: {
      canonical: locale === 'it' ? itPath : enPath,
      languages: {it: itPath, en: enPath, 'x-default': itPath}
    },
    openGraph: {
      title: wedding.metaTitle,
      description: wedding.metaDescription,
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
  const w = getWedding(locale as Locale);

  const moments = [
    {n: '01', title: w.beforeTitle, body: w.beforeBody},
    {n: '02', title: w.duringTitle, body: w.duringBody},
    {n: '03', title: w.afterTitle, body: w.afterBody}
  ];

  return (
    <>
      <JsonLd data={localBusinessSchema(locale as Locale)} />
      <JsonLd data={faqPageSchema(w.faqs)} />
      <JsonLd
        data={breadcrumbSchema(
          getBreadcrumb('wedding', locale as Locale, `${w.h1Pre} ${w.h1Accent}`)
        )}
      />

      {/* 1. HERO emotivo */}
      <section className="relative isolate min-h-[min(92vh,780px)] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{filter: 'saturate(0.78) brightness(0.82) contrast(1.08)'}}
        >
          <Image
            src={w.heroImage}
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes={HERO_SIZES}
            quality={70}
            placeholder="blur"
            blurDataURL={HERO_BLUR}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/80" />
        </div>

        <div className="relative w-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 pb-16 sm:pb-24 pt-32 sm:pt-40">
          <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#F5EFE4]/90 mb-7">
            {w.heroEyebrow}
          </p>
          <h1 className="font-display font-medium text-[#F5EFE4] text-[52px] sm:text-[80px] lg:text-[104px] leading-[0.98] tracking-tight max-w-[14ch]">
            {w.h1Pre}{' '}
            <span className="italic">{w.h1Accent}</span>
          </h1>
          <p className="mt-7 font-display italic text-[#F5EFE4]/90 text-xl sm:text-2xl max-w-[52ch] leading-snug">
            {w.heroSubhead}
          </p>

          <div className="mt-12">
            <a
              href="#form"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-[13px] uppercase tracking-[0.05em] font-medium transition-all duration-200 hover:bg-accent-hover"
              style={{color: 'var(--cream-on-dark)'}}
            >
              {w.ctaHero}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. COME TI ACCOMPAGNIAMO — 3 momenti */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
              {w.storyEyebrow}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
              <span className="italic">{w.storyH2}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {moments.map((m, i) => (
              <article key={i}>
                <p
                  className="font-display italic font-medium text-[80px] sm:text-[96px] leading-none mb-4"
                  style={{color: 'var(--accent-decorative)'}}
                >
                  {m.n}
                </p>
                <h3 className="font-display italic font-medium text-2xl text-primary leading-tight mb-4">
                  {m.title}
                </h3>
                <p className="text-[16px] leading-[1.65] text-ink/85 max-w-[40ch]">
                  {m.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LE 6 AUTO D'EPOCA — sezione signature */}
      <section className="bg-muted-bg py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
              {w.carsEyebrow}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08] mb-7">
              <span className="italic">{w.carsH2}</span>
            </h2>
            <p className="text-[17px] sm:text-[18px] leading-[1.7] text-ink/85 max-w-[60ch]">
              {w.carsIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {w.cars.map((car, i) => (
              <article
                key={i}
                className="bg-canvas rounded-lg overflow-hidden border border-[var(--border)]/40 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={car.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading={i < 2 ? 'eager' : 'lazy'}
                  />
                </div>
                <div className="p-7">
                  <p className="text-[10px] uppercase tracking-[0.14em] font-medium text-secondary">
                    {String(i + 1).padStart(2, '0')} · {car.year}
                  </p>
                  <h3 className="font-display italic font-medium text-2xl text-primary mt-2 leading-tight">
                    {car.model}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
                    {car.character}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-[12px] italic text-ink/40">
            {/* TODO: replace placeholders con foto reali Enzo */}
            {w.carsTodoNote}
          </p>
        </div>
      </section>

      {/* 4. NAVETTA OSPITI */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
                {w.shuttleEyebrow}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.1]">
                <span className="italic">{w.shuttleH2}</span>
              </h2>
              <p className="mt-7 text-[17px] sm:text-[18px] leading-[1.7] text-ink/85 max-w-[60ch]">
                {w.shuttleBody}
              </p>
            </div>

            <div className="bg-muted-bg rounded-xl p-7 sm:p-8 border border-[var(--border)]/40">
              <p className="text-[10px] uppercase tracking-[0.14em] font-medium text-accent mb-5">
                {w.shuttleIncludesLabel}
              </p>
              <ul className="space-y-3 text-[15px] leading-[1.6] text-ink/85">
                {w.shuttleIncludes.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span aria-hidden="true" className="text-secondary shrink-0">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. I BORGHI DOVE SPOSARSI */}
      <section className="bg-muted-bg py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl mb-14 sm:mb-16">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
              {w.venuesEyebrow}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08] mb-7">
              <span className="italic">{w.venuesH2}</span>
            </h2>
            <p className="text-[17px] leading-[1.7] text-ink/80 max-w-[60ch]">
              {w.venuesIntro}
            </p>
          </div>

          <ul className="divide-y divide-[var(--border)]">
            {w.venues.map((v, i) => (
              <li
                key={i}
                className="py-7 sm:py-8 grid grid-cols-1 sm:grid-cols-[auto_2fr_3fr] gap-4 sm:gap-8 items-start"
              >
                <p
                  className="font-display italic font-medium text-[40px] sm:text-[56px] leading-none tabular-nums"
                  style={{color: 'var(--accent-decorative)'}}
                >
                  {String(i + 1).padStart(2, '0')}
                </p>
                <div>
                  <h3 className="font-display italic font-medium text-2xl sm:text-3xl text-primary leading-tight">
                    {v.name}
                  </h3>
                  <p className="mt-2 text-[12px] uppercase tracking-[0.08em] font-medium text-accent">
                    {v.tagline}
                  </p>
                </div>
                <p className="text-[16px] leading-[1.65] text-ink/80 max-w-[60ch]">
                  {v.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. GALLERIA wedding accompagnati */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
              {w.galleryEyebrow}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
              <span className="italic">{w.galleryH2}</span>
            </h2>
            <p className="mt-4 text-[14px] italic text-ink/60">
              {w.galleryCaption}
            </p>
          </div>

          {/* Mosaico 6 placeholder. TODO replace with portfolio cliente */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[CAR_GALLERY_1, CAR_GALLERY_2, CAR_GALLERY_3, CAR_GALLERY_4, CAR_GALLERY_5, CAR_GALLERY_6].map(
              (src, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-lg ${
                    i === 0
                      ? 'col-span-2 row-span-2 aspect-square'
                      : i === 3
                        ? 'col-span-2 aspect-[4/2]'
                        : 'aspect-square'
                  }`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                    loading="lazy"
                    style={{filter: 'saturate(0.82) brightness(0.96) contrast(1.05)'}}
                  />
                </div>
              )
            )}
          </div>

          <p className="mt-8 text-[12px] italic text-ink/40">
            {/* TODO: replace placeholders con portfolio wedding reale */}
            {w.galleryPlaceholderNote}
          </p>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-muted-bg py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
                {w.faqEyebrow}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
                {w.faqH2Pre}{' '}
                <span className="italic">{w.faqH2Accent}</span>
              </h2>
            </div>

            <ul className="divide-y divide-[var(--border)]">
              {w.faqs.map((item, i) => (
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

      {/* 8. FORM QUALIFYING */}
      <section id="form" className="bg-canvas py-24 sm:py-32 border-y border-[var(--border)]/50">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
                {w.formEyebrow}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
                {w.formH2Pre}{' '}
                <span className="italic">{w.formH2Accent}</span>
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink/75 max-w-prose">
                {w.formSubhead}
              </p>
            </div>

            <WeddingForm fields={w.formFields} />
          </div>
        </div>
      </section>

      {/* 9. CTA finale */}
      <section className="bg-primary py-24 sm:py-32" style={{color: 'var(--cream-on-dark)'}}>
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#F5EFE4]/65 mb-5">
              {w.ctaEyebrow}
            </p>
            <h2 className="font-display italic font-medium text-[#F5EFE4] text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
              {w.ctaH2}
            </h2>
            <p className="mt-6 text-[18px] sm:text-[20px] text-[#F5EFE4]/80 leading-relaxed max-w-prose">
              {w.ctaSubhead}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
              <a
                href="https://wa.me/393756413379"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-[13px] uppercase tracking-[0.05em] font-medium transition-all duration-200 hover:bg-accent-hover"
                style={{color: 'var(--cream-on-dark)'}}
              >
                WhatsApp
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="tel:+393756413379"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F5EFE4]/40 px-8 py-4 text-[13px] uppercase tracking-[0.05em] font-medium text-[#F5EFE4] hover:bg-[#F5EFE4]/10 transition-colors tabular-nums"
              >
                +39 375 641 3379
              </a>
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F5EFE4]/40 px-8 py-4 text-[13px] uppercase tracking-[0.05em] font-medium text-[#F5EFE4] hover:bg-[#F5EFE4]/10 transition-colors"
              >
                Email
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Gallery placeholders — TODO replace with real wedding portfolio
const CAR_GALLERY_1 =
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=70&auto=format&fm=webp';
const CAR_GALLERY_2 =
  'https://images.unsplash.com/photo-1583435423797-be15ddffe3c2?w=900&q=70&auto=format&fm=webp';
const CAR_GALLERY_3 =
  'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=900&q=70&auto=format&fm=webp';
const CAR_GALLERY_4 =
  'https://images.unsplash.com/photo-1604930571107-7e07e44f31b8?w=1200&q=70&auto=format&fm=webp';
const CAR_GALLERY_5 =
  'https://images.unsplash.com/photo-1493238792000-8113da705763?w=900&q=70&auto=format&fm=webp';
const CAR_GALLERY_6 =
  'https://images.unsplash.com/photo-1571687948252-c4f4d9d57c41?w=900&q=70&auto=format&fm=webp';
