'use client';

import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'motion/react';
import type {TourContent} from '@/lib/tours';
import {HERO_BLUR, HERO_SIZES} from '@/lib/blur';
import {AnimatedHeading} from '@/components/ui/AnimatedHeading';

// TourDetailDolceVita — variante mood vintage/diario per Dolce Vita Siracusa.
// Reference: pagina fotoalbum di viaggio anni '60. Foto polaroid stile diario,
// leggera rotazione, grain heavy, tipografia rétro-editorial. Palette
// cream più calda, tocchi di rosa/coral. Niente sticky scroll — il mood è
// rilassato, da sfogliare lentamente.

const ROTATIONS = [-2.5, 1.8, -1.5, 2.2];

export function TourDetailDolceVita({tour}: {tour: TourContent}) {
  const tCommon = useTranslations('NccPage');
  const reduce = useReducedMotion();

  return (
    <>
      {/* 01 — HERO ridotta, atmosferica, foto centrale come copertina */}
      <section className="hero-stage relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={tour.heroImage}
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes={HERO_SIZES}
            quality={85}
            placeholder="blur"
            blurDataURL={HERO_BLUR}
            className="object-cover"
            style={{filter: 'saturate(0.78) brightness(0.86) contrast(1.05) hue-rotate(-3deg)'}}
          />
          <div className="absolute inset-0 atmo-overlay-dark" />
          {/* Grain pesante per il mood diario */}
          <div
            className="absolute inset-0 opacity-[0.18] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
            }}
            aria-hidden="true"
          />
        </div>

        <div className="relative h-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex items-end pb-[18vh] sm:pb-[22vh]">
          <div className="max-w-[42ch]">
            <h1
              className="hero-headline font-display font-light text-cream-on-dark italic"
              style={{
                fontSize: 'clamp(48px, 8.4vw, 120px)',
                fontStretch: '95%',
                lineHeight: 0.98,
                letterSpacing: '-0.03em',
                textShadow: '0 2px 24px rgba(0,0,0,0.35)'
              }}
            >
              {tour.h1}
            </h1>
          </div>
        </div>
      </section>

      {/* 02 — INTRO come pagina di diario */}
      <section className="bg-[#F2E9D8] py-32 sm:py-44 grain relative overflow-hidden">
        <div className="relative mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow mb-10">
            {tour.introH2Pre}{' '}
            <span className="text-accent">{tour.introH2Accent}</span>
          </p>
          <div className="space-y-7 text-[19px] sm:text-[20px] leading-[1.75] text-ink-soft">
            {tour.introBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — TOUR IN 4 NUMERI — riga ordinata cream */}
      <section className="bg-[#E8DDC9] py-20 sm:py-28 border-y border-[var(--border-strong)]">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <p className="eyebrow mb-10 sm:mb-12">{tour.numbersEyebrow}</p>

          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 lg:divide-x lg:divide-ink/15">
            {tour.numbers.map((n, i) => (
              <li
                key={n.label}
                className={`${
                  i > 0 ? 'lg:pl-8 xl:pl-10' : ''
                } ${i < tour.numbers.length - 1 ? 'lg:pr-8 xl:pr-10' : ''} min-w-0`}
              >
                <p
                  className="font-display font-light text-ink tabular-nums leading-[1] break-words italic"
                  style={{
                    fontStretch: '92%',
                    fontSize: 'clamp(24px, 2.8vw, 44px)',
                    letterSpacing: '-0.015em'
                  }}
                >
                  {n.value}
                </p>
                <p className="mt-4 text-[12px] sm:text-[13px] uppercase tracking-[0.14em] font-medium text-ink/60 leading-relaxed max-w-[28ch]">
                  {n.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 04 — TAPPE come polaroid scattered del diario */}
      <section className="bg-[#F2E9D8] py-32 sm:py-44 grain relative">
        <div className="relative mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <p className="eyebrow mb-10">{tour.stagesEyebrow}</p>
          <h2
            className="font-display text-display-lg font-light text-ink max-w-[20ch] mb-20 sm:mb-28 italic"
            style={{fontStretch: '95%'}}
          >
            {tour.stagesH2Pre}{' '}
            <span className="text-accent not-italic">{tour.stagesH2Accent}</span>
          </h2>

          <div className="space-y-32 sm:space-y-40">
            {tour.stages.map((stage, i) => {
              const reverse = i % 2 === 1;
              const rotate = ROTATIONS[i % ROTATIONS.length];
              return (
                <article
                  key={stage.number}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                >
                  {/* Polaroid foto */}
                  <motion.figure
                    className={`relative lg:col-span-7 polaroid grain ${
                      reverse ? 'lg:order-2' : 'lg:order-1'
                    }`}
                    style={{transform: reduce ? 'none' : `rotate(${rotate}deg)`}}
                    initial={
                      reduce ? false : {opacity: 0, y: 36, rotate: 0}
                    }
                    whileInView={
                      reduce ? undefined : {opacity: 1, y: 0, rotate}
                    }
                    viewport={{once: true, margin: '-15%'}}
                    transition={{duration: 1.1, ease: [0.16, 1, 0.3, 1]}}
                  >
                    <div className="relative aspect-[5/4] overflow-hidden">
                      <Image
                        src={stage.image}
                        alt={stage.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover"
                        loading={i < 1 ? 'eager' : 'lazy'}
                        style={{
                          filter:
                            'saturate(0.82) brightness(0.96) contrast(1.06) sepia(0.05)'
                        }}
                      />
                    </div>
                    <figcaption className="absolute bottom-0 inset-x-0 px-5 pb-3 text-center font-display italic text-[15px] text-ink/85">
                      {stage.title} · {stage.duration}
                    </figcaption>
                  </motion.figure>

                  {/* Testo a fianco */}
                  <motion.div
                    className={`lg:col-span-5 ${
                      reverse ? 'lg:order-1' : 'lg:order-2'
                    }`}
                    initial={reduce ? false : {opacity: 0, y: 24}}
                    whileInView={reduce ? undefined : {opacity: 1, y: 0}}
                    viewport={{once: true, margin: '-15%'}}
                    transition={{
                      duration: 1,
                      delay: 0.15,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    <p className="font-display italic text-[20px] text-accent mb-4 tabular-nums">
                      {stage.number}
                    </p>
                    <h3
                      className="font-display text-display-md font-light text-ink leading-[1.02] mb-7 italic"
                      style={{fontStretch: '95%'}}
                    >
                      {stage.title}
                    </h3>
                    <p className="text-[18px] sm:text-[19px] leading-[1.7] text-ink-soft max-w-[48ch]">
                      {stage.body}
                    </p>
                  </motion.div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 — INCLUSO / NON INCLUSO */}
      <section className="bg-[#E8DDC9] py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <h2
            className="font-display text-display-md font-light text-ink max-w-[20ch] mb-16 sm:mb-20 italic"
            style={{fontStretch: '95%'}}
          >
            {tour.includedH2Pre}{' '}
            <span className="text-accent not-italic">{tour.includedH2Accent}</span>
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

      {/* 06 — FAQ accordion editorial italic */}
      <section className="bg-[#F2E9D8] py-32 sm:py-40 grain">
        <div className="relative mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow mb-10">{tour.faqEyebrow}</p>
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] mb-14 sm:mb-16 italic"
            style={{fontStretch: '95%'}}
          >
            {tour.faqH2Pre}{' '}
            <span className="text-accent not-italic">{tour.faqH2Accent}</span>
          </h2>

          <ul className="divide-y divide-[var(--border-strong)]">
            {tour.faqs.map((item, i) => (
              <li key={i}>
                <details className="group py-2">
                  <summary className="cursor-pointer list-none py-7 flex items-start justify-between gap-8">
                    <h3
                      className="font-display text-[26px] sm:text-[32px] lg:text-[36px] font-light text-ink leading-[1.15] max-w-[48ch] group-open:text-accent transition-colors italic"
                      style={{fontStretch: '92%'}}
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

      {/* 07 — CTA finale immersiva blu mare */}
      <section
        className="relative bg-primary-deep py-40 sm:py-56 overflow-hidden"
        style={{color: 'var(--cream-on-dark)'}}
      >
        <div
          className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(224, 120, 86, 0.18) 0%, transparent 60%)'
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow text-cream-on-dark/65 mb-10">{tour.ctaEyebrow}</p>
          <AnimatedHeading
            as="h2"
            text={tour.ctaH2}
            className="hero-headline font-display text-display-xl font-light text-cream-on-dark max-w-[18ch] leading-[0.95] italic"
            style={{fontStretch: '95%'}}
          />
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
