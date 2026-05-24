import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import type {TourContent} from '@/lib/tours';
import {StagesMagazine} from '@/components/sections/tour/StagesMagazine';
import {HERO_BLUR, HERO_SIZES} from '@/lib/blur';

// TourDetailNarrative — template pagina tour, design language Diario Mediterraneo.
//
// Sequenza (scroll verticale narrativo):
// 01. Hero cinematic full-bleed + H1 Bricolage gigante
// 02. Whisper-style intro narrativo (paragrafo SEO PRESERVE per /tour-barocco)
// 03. Tour in 4 numeri — banda blu scuro con valori display grandi
// 04. Partner del tour (condizionale) — citazioni grandi
// 05. Tappe scroll-driven sticky (StagesScroll)
// 06. Cosa includi/escludi — due colonne editorial in prosa
// 07. FAQ — accordion editorial con Bricolage grande
// 08. CTA finale immersive blu mare profondo

export async function TourDetailNarrative({tour}: {tour: TourContent}) {
  const tCommon = await getTranslations('NccPage');

  return (
    <>
      {/* 01 — HERO cinematic */}
      <section className="hero-stage relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={tour.heroImage}
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes={HERO_SIZES}
            quality={80}
            placeholder="blur"
            blurDataURL={HERO_BLUR}
            className="object-cover"
            style={{filter: 'saturate(0.88) brightness(0.76) contrast(1.08)'}}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 to-black/80" />
        </div>

        <div className="relative h-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex items-end pb-[18vh] sm:pb-[22vh]">
          <div className="max-w-[48ch]">
            {(() => {
              // Se l'H1 contiene ":", lo splitto in display grande + subhead piccolo.
              // Mantiene H1 semantico SEO unico ma visivamente respira.
              const parts = tour.h1.split(/:\s*/);
              const main = parts[0];
              const sub = parts.length > 1 ? parts.slice(1).join(': ') : null;
              return (
                <h1
                  className="hero-headline font-display font-medium text-cream-on-dark"
                  style={{textShadow: '0 2px 24px rgba(0,0,0,0.3)'}}
                >
                  <span
                    className="block text-display-lg"
                    style={{fontStretch: '92%'}}
                  >
                    {main}
                  </span>
                  {sub && (
                    <span
                      className="block mt-5 sm:mt-6 font-light text-cream-on-dark/85 leading-[1.1]"
                      style={{
                        fontSize: 'clamp(22px, 2.6vw, 38px)',
                        fontStretch: '94%'
                      }}
                    >
                      {sub}
                    </span>
                  )}
                </h1>
              );
            })()}
          </div>
        </div>
      </section>

      {/* 02 — INTRO narrativo */}
      <section className="bg-canvas py-32 sm:py-48">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow mb-10">
            {tour.introH2Pre}{' '}
            <span className="text-accent">{tour.introH2Accent}</span>
          </p>
          <div className="space-y-7 sm:space-y-8 text-[19px] sm:text-[20px] leading-[1.7] text-ink-soft">
            {tour.introBody.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'first-letter:font-display first-letter:text-[88px] first-letter:leading-[0.85] first-letter:text-accent first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-light'
                    : ''
                }
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — TOUR IN 4 NUMERI — riga orizzontale ordinata con divisori */}
      <section
        className="bg-primary-deep py-20 sm:py-28"
        style={{color: 'var(--cream-on-dark)'}}
      >
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <p className="eyebrow text-cream-on-dark/65 mb-10 sm:mb-12">
            {tour.numbersEyebrow}
          </p>

          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 lg:divide-x lg:divide-cream-on-dark/15">
            {tour.numbers.map((n, i) => (
              <li
                key={n.label}
                className={`${
                  i > 0 ? 'lg:pl-8 xl:pl-10' : ''
                } ${i < tour.numbers.length - 1 ? 'lg:pr-8 xl:pr-10' : ''} min-w-0`}
              >
                <p
                  className="font-display font-light text-cream-on-dark tabular-nums leading-[1] break-words"
                  style={{
                    fontStretch: '88%',
                    fontSize: 'clamp(24px, 2.8vw, 44px)',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {n.value}
                </p>
                <p className="mt-4 text-[12px] sm:text-[13px] uppercase tracking-[0.14em] font-medium text-cream-on-dark/65 leading-relaxed max-w-[28ch]">
                  {n.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 04 — PARTNER del tour (condizionale) */}
      {tour.partners && tour.partners.length > 0 && (
        <section className="bg-canvas-warm py-32 sm:py-40">
          <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
            <p className="eyebrow mb-10">{tour.partnersEyebrow}</p>
            <h2
              className="font-display text-display-md font-light text-ink max-w-[20ch] mb-16 sm:mb-20"
              style={{fontStretch: '95%'}}
            >
              {tour.partnersH2}
            </h2>

            <div className="space-y-16 sm:space-y-20">
              {tour.partners.map((p) => (
                <article
                  key={p.name}
                  className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-start"
                >
                  <p
                    className="font-display italic text-display-sm font-light text-ink leading-[1.05] max-w-[14ch]"
                    style={{fontStretch: '95%'}}
                  >
                    {p.name}
                  </p>
                  <p className="text-[17px] sm:text-[18px] leading-[1.65] text-ink-soft max-w-[60ch] lg:pt-3">
                    {p.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 05 — TAPPE come scene editorial magazine alternate (no sticky scroll,
              distingue dalla home + tour hub che usano sticky) */}
      <StagesMagazine
        stages={tour.stages}
        eyebrow={tour.stagesEyebrow}
        h2Pre={tour.stagesH2Pre}
        h2Accent={tour.stagesH2Accent}
      />

      {/* 06 — INCLUSO / NON INCLUSO — due colonne editorial */}
      <section className="bg-canvas py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <h2
            className="font-display text-display-md font-light text-ink max-w-[20ch] mb-16 sm:mb-20"
            style={{fontStretch: '95%'}}
          >
            {tour.includedH2Pre}{' '}
            <span className="text-accent">{tour.includedH2Accent}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-16 lg:gap-x-24">
            <div>
              <p className="eyebrow text-accent mb-7">{tour.includedLabel}</p>
              <ul className="space-y-4 text-[17px] sm:text-[18px] leading-[1.65] text-ink-soft">
                {tour.included.map((item, i) => (
                  <li
                    key={i}
                    className="pb-4 border-b border-[var(--border)] last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-secondary mb-7">{tour.excludedLabel}</p>
              <ul className="space-y-4 text-[17px] sm:text-[18px] leading-[1.65] text-ink/60">
                {tour.excluded.map((item, i) => (
                  <li
                    key={i}
                    className="pb-4 border-b border-[var(--border)] last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — FAQ — editorial accordion */}
      <section className="bg-canvas-deep py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow mb-10">{tour.faqEyebrow}</p>
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] mb-14 sm:mb-16"
            style={{fontStretch: '95%'}}
          >
            {tour.faqH2Pre}{' '}
            <span className="text-accent">{tour.faqH2Accent}</span>
          </h2>

          <ul className="divide-y divide-[var(--border-strong)]">
            {tour.faqs.map((item, i) => (
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

      {/* 08 — CTA finale immersiva */}
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
          <p className="eyebrow text-cream-on-dark/65 mb-10">{tour.ctaEyebrow}</p>
          <h2
            className="font-display text-display-xl font-light text-cream-on-dark max-w-[18ch] leading-[0.95]"
            style={{fontStretch: '95%'}}
          >
            {tour.ctaH2}
          </h2>
          <p className="mt-10 text-[19px] sm:text-[21px] text-cream-soft leading-[1.6] max-w-[52ch]">
            {tour.ctaSubhead}
          </p>

          <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-5">
            <a
              href="https://wa.me/393756413379"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:bg-accent-hover"
              style={{color: 'var(--cream-on-dark)'}}
            >
              {tCommon('ctaWhatsApp')}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              >
                →
              </span>
            </a>
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-cream-on-dark/35 px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium text-cream-on-dark hover:bg-cream-on-dark/8 transition-colors"
            >
              {tCommon('ctaQuote')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
