import type {Metadata} from 'next';
import Image from 'next/image';
import {setRequestLocale, getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {faqPageSchema, breadcrumbSchema, localBusinessSchema, JsonLd} from '@/lib/schema';
import {getBreadcrumb} from '@/lib/breadcrumbs';
import {routing} from '@/i18n/routing';
import {WeddingForm} from '@/components/sections/WeddingForm';
import {getWedding} from '@/lib/wedding';
import {HERO_BLUR, HERO_SIZES} from '@/lib/blur';
import type {Locale} from '@/lib/cities';
import {AnimatedHeading} from '@/components/ui/AnimatedHeading';

// Wedding narrative restructure — design language Diario Mediterraneo.
// Hero atmosferico → 3 momenti (before/during/after) → 6 auto d'epoca
// editorial gallery → navetta ospiti discreto → 6 borghi insider →
// galleria portfolio → FAQ → form qualifying → CTA.

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

  // Gallery placeholders — TODO replace with portfolio reale cliente
  const GALLERY = [
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1400&q=80&auto=format&fm=webp',
    'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?w=900&q=80&auto=format&fm=webp',
    'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=900&q=80&auto=format&fm=webp',
    'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=1400&q=80&auto=format&fm=webp',
    'https://images.unsplash.com/photo-1493238792000-8113da705763?w=900&q=80&auto=format&fm=webp',
    'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=900&q=80&auto=format&fm=webp'
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

      {/* 01 — HERO emotivo */}
      <section className="relative isolate min-h-[88svh] sm:min-h-[92svh] overflow-hidden flex items-end pt-32 pb-[18vh] sm:pb-[22vh]">
        <div className="absolute inset-0 -z-10">
          <Image
            src={w.heroImage}
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes={HERO_SIZES}
            quality={80}
            placeholder="blur"
            blurDataURL={HERO_BLUR}
            className="object-cover"
            style={{filter: 'saturate(0.82) brightness(0.78) contrast(1.08)'}}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />
        </div>

        <div className="relative w-full mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-[40ch]">
            <h1
              className="hero-headline font-display text-display-lg font-medium text-cream-on-dark"
              style={{
                fontStretch: '92%',
                textShadow: '0 2px 24px rgba(0,0,0,0.3)'
              }}
            >
              {w.h1Pre}{' '}
              <span className="text-accent-decorative">{w.h1Accent}</span>
            </h1>
            <a
              href="#form"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-[13px] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:bg-accent-hover"
              style={{color: 'var(--cream-on-dark)'}}
            >
              {w.ctaHero}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 02 — 3 MOMENTI (before/during/after) — full-bleed editorial */}
      <section className="bg-canvas py-32 sm:py-48">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <p className="eyebrow mb-10">{w.storyEyebrow}</p>
          <h2
            className="font-display text-display-md font-light text-ink max-w-[16ch] mb-16 sm:mb-20"
            style={{fontStretch: '95%'}}
          >
            {w.storyH2}
          </h2>

          <div className="space-y-24 sm:space-y-32">
            {[
              {title: w.beforeTitle, body: w.beforeBody},
              {title: w.duringTitle, body: w.duringBody},
              {title: w.afterTitle, body: w.afterBody}
            ].map((m, i) => (
              <article
                key={i}
                className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-20 items-baseline"
              >
                <h3
                  className="font-display italic text-display-sm font-light text-accent leading-[1.05] max-w-[10ch]"
                  style={{fontStretch: '95%'}}
                >
                  {m.title}
                </h3>
                <p className="text-[19px] sm:text-[20px] leading-[1.7] text-ink-soft max-w-[60ch]">
                  {m.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — LE 6 AUTO D'EPOCA — sezione signature, cinematic editorial */}
      <section className="bg-canvas-deep py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <p className="eyebrow mb-7">{w.carsEyebrow}</p>
            <h2
              className="font-display text-display-md font-light text-ink mb-10"
              style={{fontStretch: '95%'}}
            >
              {w.carsH2}
            </h2>
            <p className="text-[19px] sm:text-[20px] leading-[1.7] text-ink-soft max-w-[58ch]">
              {w.carsIntro}
            </p>
          </div>

          {/* Layout asimmetrico editoriale: 2 grandi + 4 medie, alternati */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            {w.cars.map((car, i) => {
              // i = 0, 3 → grande (col-span-8); i = 1, 2, 4, 5 → media (col-span-4)
              const isLarge = i === 0 || i === 3;
              const colSpan = isLarge
                ? 'col-span-12 lg:col-span-8'
                : 'col-span-12 sm:col-span-6 lg:col-span-4';
              const aspect = isLarge ? 'aspect-[16/10]' : 'aspect-[4/5]';
              return (
                <article key={i} className={`${colSpan} group`}>
                  <figure
                    className={`relative ${aspect} overflow-hidden mb-5 grain`}
                  >
                    <Image
                      src={car.image}
                      alt={`${car.model} ${car.year}`}
                      fill
                      sizes={
                        isLarge
                          ? '(max-width: 1024px) 100vw, 66vw'
                          : '(max-width: 768px) 100vw, 33vw'
                      }
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading={i < 2 ? 'eager' : 'lazy'}
                      style={{filter: 'saturate(0.85) brightness(0.94) contrast(1.06)'}}
                    />
                  </figure>
                  <div className="flex items-baseline gap-4">
                    <p className="font-display italic text-[15px] text-accent tabular-nums">
                      {car.year}
                    </p>
                    <h3
                      className="font-display text-[24px] sm:text-[28px] font-light text-ink leading-tight"
                      style={{fontStretch: '95%'}}
                    >
                      {car.model}
                    </h3>
                  </div>
                  <p className="mt-2 text-[16px] italic font-display font-light text-ink-soft max-w-[36ch]">
                    {car.character}
                  </p>
                </article>
              );
            })}
          </div>

          <p className="mt-12 sm:mt-16 text-[13px] italic text-ink/45 max-w-prose">
            {w.carsTodoNote}
          </p>
        </div>
      </section>

      {/* 04 — NAVETTA OSPITI — discreto */}
      <section className="bg-canvas py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow mb-10">{w.shuttleEyebrow}</p>
          <h2
            className="font-display text-display-md font-light text-ink max-w-[20ch] mb-12"
            style={{fontStretch: '95%'}}
          >
            {w.shuttleH2}
          </h2>
          <p className="text-[19px] sm:text-[20px] leading-[1.7] text-ink-soft max-w-[58ch] mb-14">
            {w.shuttleBody}
          </p>

          <div className="border-l-2 border-accent pl-7 sm:pl-10">
            <p className="eyebrow text-accent mb-5">{w.shuttleIncludesLabel}</p>
            <ul className="space-y-3 text-[17px] leading-[1.6] text-ink/85">
              {w.shuttleIncludes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 05 — I BORGHI DOVE SPOSARSI — consulenza editorial */}
      <section className="bg-canvas-warm py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <p className="eyebrow mb-7">{w.venuesEyebrow}</p>
            <h2
              className="font-display text-display-md font-light text-ink mb-10"
              style={{fontStretch: '95%'}}
            >
              {w.venuesH2}
            </h2>
            <p className="text-[18px] sm:text-[19px] leading-[1.7] text-ink-soft max-w-[60ch]">
              {w.venuesIntro}
            </p>
          </div>

          <ul className="divide-y divide-[var(--border-strong)]">
            {w.venues.map((v, i) => (
              <li
                key={i}
                className="py-9 sm:py-10 grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-6 lg:gap-16 items-baseline"
              >
                <div>
                  <h3
                    className="font-display text-[32px] sm:text-[40px] lg:text-[48px] font-light text-ink leading-[1.05]"
                    style={{fontStretch: '95%'}}
                  >
                    {v.name}
                  </h3>
                  <p className="mt-3 font-display italic text-[18px] text-accent leading-snug max-w-[30ch]">
                    {v.tagline}
                  </p>
                </div>
                <p className="text-[17px] leading-[1.7] text-ink-soft max-w-[60ch]">
                  {v.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 06 — GALLERIA wedding accompagnati */}
      <section className="bg-canvas py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl mb-14 sm:mb-16">
            <p className="eyebrow mb-7">{w.galleryEyebrow}</p>
            <h2
              className="font-display text-display-md font-light text-ink mb-5"
              style={{fontStretch: '95%'}}
            >
              {w.galleryH2}
            </h2>
            <p className="text-[14px] italic font-display text-ink/55">
              {w.galleryCaption}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 grain">
            {GALLERY.map((src, i) => (
              <figure
                key={i}
                className={`relative overflow-hidden ${
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
                  style={{filter: 'saturate(0.82) brightness(0.96) contrast(1.06)'}}
                />
              </figure>
            ))}
          </div>

          <p className="mt-10 text-[13px] italic text-ink/45">
            {w.galleryPlaceholderNote}
          </p>
        </div>
      </section>

      {/* 07 — FAQ */}
      <section className="bg-canvas-deep py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow mb-10">{w.faqEyebrow}</p>
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] mb-14 sm:mb-16"
            style={{fontStretch: '95%'}}
          >
            {w.faqH2Pre}{' '}
            <span className="text-accent">{w.faqH2Accent}</span>
          </h2>

          <ul className="divide-y divide-[var(--border-strong)]">
            {w.faqs.map((item, i) => (
              <li key={i}>
                <details className="group py-2">
                  <summary className="cursor-pointer list-none py-7 flex items-start justify-between gap-8">
                    <h3
                      className="font-display text-[26px] sm:text-[32px] lg:text-[36px] font-light text-ink leading-[1.15] max-w-[48ch] group-open:text-accent transition-colors"
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

      {/* 08 — FORM QUALIFYING */}
      <section id="form" className="bg-canvas py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow mb-7">{w.formEyebrow}</p>
              <h2
                className="font-display text-display-md font-light text-ink max-w-[16ch] mb-7"
                style={{fontStretch: '95%'}}
              >
                {w.formH2Pre}{' '}
                <span className="text-accent">{w.formH2Accent}</span>
              </h2>
              <p className="text-[17px] leading-[1.65] text-ink-soft max-w-[44ch]">
                {w.formSubhead}
              </p>
            </div>

            <WeddingForm fields={w.formFields} />
          </div>
        </div>
      </section>

      {/* 09 — CTA finale */}
      <section
        className="relative bg-primary-deep py-40 sm:py-56 overflow-hidden"
        style={{color: 'var(--cream-on-dark)'}}
      >
        <div
          className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(176, 94, 64, 0.18) 0%, transparent 60%)'
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow text-cream-on-dark/65 mb-10">{w.ctaEyebrow}</p>
          <AnimatedHeading
            as="h2"
            text={w.ctaH2}
            className="font-display text-display-xl font-light text-cream-on-dark max-w-[18ch] leading-[0.95]"
            style={{fontStretch: '95%'}}
          />
          <p className="mt-10 text-[19px] sm:text-[21px] text-cream-soft leading-[1.6] max-w-[52ch]">
            {w.ctaSubhead}
          </p>

          <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-5">
            <a
              href="https://wa.me/393756413379"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:bg-accent-hover"
              style={{color: 'var(--cream-on-dark)'}}
            >
              WhatsApp
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              >
                →
              </span>
            </a>
            <a
              href="tel:+393756413379"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-cream-on-dark/35 px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium text-cream-on-dark tabular-nums hover:bg-cream-on-dark/8 transition-colors"
            >
              +39 375 641 3379
            </a>
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-cream-on-dark/35 px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium text-cream-on-dark hover:bg-cream-on-dark/8 transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
