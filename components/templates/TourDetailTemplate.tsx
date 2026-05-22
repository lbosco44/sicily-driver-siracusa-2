import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import type {TourContent} from '@/lib/tours';
import {HERO_BLUR, HERO_SIZES} from '@/lib/blur';

export async function TourDetailTemplate({tour}: {tour: TourContent}) {
  const tNcc = await getTranslations('NccPage');

  return (
    <>
      {/* 1. HERO cinematica */}
      <section className="relative isolate min-h-[min(92vh,780px)] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{filter: 'saturate(0.88) brightness(0.76) contrast(1.1)'}}
        >
          <Image
            src={tour.heroImage}
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/80" />
        </div>

        <div className="relative w-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 pb-16 sm:pb-24 pt-32 sm:pt-40">
          <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.18em] font-medium text-[#F5EFE4]/90 mb-7">
            {tour.heroEyebrow}
          </p>

          <h1 className="font-display font-medium text-[#F5EFE4] text-[40px] sm:text-[58px] lg:text-[80px] leading-[1.04] tracking-tight max-w-[22ch]">
            {tour.h1}
          </h1>

          <p className="mt-6 font-display italic text-[#F5EFE4]/90 text-xl sm:text-2xl max-w-[44ch] leading-snug">
            {tour.heroSubhead}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            <a
              href="#stages"
              className="inline-flex items-center justify-center gap-2 text-[#F5EFE4] border-b border-[#F5EFE4]/40 pb-1 text-[13px] uppercase tracking-[0.08em] font-medium hover:border-[#F5EFE4] transition-colors"
            >
              {tour.stagesEyebrow} ↓
            </a>
            <a
              href="https://wa.me/393756413379"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#F5EFE4]/85 text-[13px] uppercase tracking-[0.08em] font-medium hover:text-[#F5EFE4] transition-colors"
            >
              {tNcc('ctaWhatsApp')} →
            </a>
          </div>
        </div>
      </section>

      {/* 2. INTRO paragraphs */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
                {tour.introH2Pre}{' '}
                <span className="italic">{tour.introH2Accent}</span>
              </h2>
            </div>

            <div className="space-y-6 text-[17px] sm:text-[18px] leading-[1.7] text-ink/85">
              {tour.introBody.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? 'first-letter:font-display first-letter:italic first-letter:text-[64px] first-letter:leading-[0.85] first-letter:text-[color:var(--accent-decorative)] first-letter:float-left first-letter:mr-3 first-letter:mt-1'
                      : ''
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. IL TOUR IN 4 NUMERI */}
      <section className="bg-primary py-20 sm:py-28" style={{color: 'var(--cream-on-dark)'}}>
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#F5EFE4]/65 mb-6">
            {tour.numbersEyebrow}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-[#F5EFE4] leading-[1.08] mb-14 sm:mb-16">
            {tour.numbersH2Pre}{' '}
            <span className="italic">{tour.numbersH2Accent}</span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
            {tour.numbers.map((n, i) => (
              <div key={i}>
                <p
                  className="font-display italic font-medium text-[48px] sm:text-[64px] lg:text-[72px] leading-none text-[color:var(--accent-decorative)] tabular-nums"
                >
                  {n.value}
                </p>
                <p className="mt-4 text-[14px] text-[#F5EFE4]/85 leading-relaxed max-w-[24ch]">
                  {n.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TAPPA PER TAPPA — stacked editorial (fallback per scroll-driven) */}
      <section id="stages" className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
              {tour.stagesEyebrow}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
              {tour.stagesH2Pre}{' '}
              <span className="italic">{tour.stagesH2Accent}</span>
            </h2>
          </div>

          <div className="space-y-24 sm:space-y-32">
            {tour.stages.map((stage, i) => {
              const reverse = i % 2 === 1;
              return (
                <article
                  key={i}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    reverse ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  <div
                    className={`relative aspect-[5/6] sm:aspect-[4/5] rounded-xl overflow-hidden lg:col-span-7 ${
                      reverse ? 'lg:[direction:ltr]' : ''
                    }`}
                  >
                    <Image
                      src={stage.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                      loading={i < 1 ? 'eager' : 'lazy'}
                    />
                  </div>

                  <div className={`lg:col-span-5 ${reverse ? 'lg:[direction:ltr]' : ''}`}>
                    <p
                      className="font-display italic font-medium text-[96px] sm:text-[120px] leading-none mb-4"
                      style={{color: 'var(--accent-decorative)'}}
                    >
                      {stage.number}
                    </p>
                    <h3 className="font-display italic font-medium text-4xl sm:text-5xl text-primary leading-tight">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.14em] font-medium text-secondary">
                      {stage.duration}
                    </p>
                    <p className="mt-7 text-[17px] sm:text-[18px] leading-[1.7] text-ink/85 max-w-[44ch]">
                      {stage.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. INCLUSO / NON INCLUSO — 2 colonne editorial */}
      <section className="bg-muted-bg py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
              {tour.includedH2Pre}{' '}
              <span className="italic">{tour.includedH2Accent}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] font-medium text-accent mb-6">
                {tour.includedLabel}
              </p>
              <ul className="space-y-4 text-[16px] leading-[1.65] text-ink/85">
                {tour.included.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span
                      className="font-display italic text-secondary tabular-nums shrink-0 leading-none mt-1"
                      aria-hidden="true"
                    >
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] font-medium text-secondary mb-6">
                {tour.excludedLabel}
              </p>
              <ul className="space-y-4 text-[16px] leading-[1.65] text-ink/65">
                {tour.excluded.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span
                      className="font-display italic text-secondary tabular-nums shrink-0 leading-none mt-1"
                      aria-hidden="true"
                    >
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

      {/* 6. FAQ */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
                {tour.faqEyebrow}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
                {tour.faqH2Pre}{' '}
                <span className="italic">{tour.faqH2Accent}</span>
              </h2>
            </div>

            <ul className="divide-y divide-[var(--border)]">
              {tour.faqs.map((item, i) => (
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

      {/* 7. CTA finale */}
      <section
        className="bg-primary py-24 sm:py-32"
        style={{color: 'var(--cream-on-dark)'}}
      >
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#F5EFE4]/65 mb-5">
              {tour.ctaEyebrow}
            </p>
            <h2 className="font-display italic font-medium text-[#F5EFE4] text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
              {tour.ctaH2}
            </h2>
            <p className="mt-6 text-[18px] sm:text-[20px] text-[#F5EFE4]/80 leading-relaxed max-w-prose">
              {tour.ctaSubhead}
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
