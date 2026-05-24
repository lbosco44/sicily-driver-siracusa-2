'use client';

import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'motion/react';
import type {TourContent} from '@/lib/tours';
import {HERO_BLUR, HERO_SIZES} from '@/lib/blur';

// TourDetailIsola — variante mood "vacanza luminosa kodachrome" per Isola
// delle Correnti. Reference: foto vacanza anni '70 — Kodak Gold, sun-baked.
// Palette: cream caldo + giallo sole + azzurro pallido + terra cotta.
// Tappe come "cartoline da Portopalo" in griglia 2x2 — niente alternato.
// Mood: rilassato, estivo, luminoso, niente sticky-scroll cinematografico.

const SUN_YELLOW = '#E8B547';
const SUN_YELLOW_DEEP = '#C99427';
const SKY = '#A9D2E0';
const CREAM_HOT = '#F8F1E1';
const CREAM_DEEPER = '#F0E4CB';

export function TourDetailIsola({tour}: {tour: TourContent}) {
  const tCommon = useTranslations('NccPage');
  const reduce = useReducedMotion();

  return (
    <>
      {/* 01 — HERO: foto vibrante, eyebrow giallo sole, h1 luminoso */}
      <section
        className="hero-stage relative isolate overflow-hidden"
        style={{backgroundColor: CREAM_HOT}}
      >
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
            style={{filter: 'saturate(1.08) brightness(1.0) contrast(1.04) sepia(0.06)'}}
          />
          {/* Gradient più caldo, niente dark heavy */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(232, 181, 71, 0.05) 0%, rgba(20, 18, 14, 0.20) 50%, rgba(20, 18, 14, 0.65) 100%)'
            }}
          />
        </div>

        <div className="relative h-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex items-end pb-[18vh] sm:pb-[22vh]">
          <div style={{maxWidth: 'min(680px, 90vw)'}}>
            <h1
              className="hero-headline font-display font-light text-cream-on-dark"
              style={{
                fontSize: 'clamp(56px, 9.5vw, 132px)',
                fontStretch: '92%',
                lineHeight: 0.94,
                letterSpacing: '-0.035em',
                textShadow: '0 4px 28px rgba(0,0,0,0.45)'
              }}
            >
              {tour.h1}
            </h1>
          </div>
        </div>
      </section>

      {/* 02 — INTRO: testo full-width con drop-cap giallo sole */}
      <section style={{backgroundColor: CREAM_HOT}} className="py-32 sm:py-44">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p
            className="eyebrow mb-10"
            style={{color: SUN_YELLOW_DEEP}}
          >
            {tour.introH2Pre}{' '}
            <span style={{color: SUN_YELLOW_DEEP}}>{tour.introH2Accent}</span>
          </p>
          <div className="space-y-7 text-[19px] sm:text-[20px] leading-[1.75] text-ink-soft">
            {tour.introBody.map((p, i) => (
              <p
                key={i}
                className={i === 0 ? 'isola-dropcap' : ''}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
        {/* Drop-cap targetato solo al paragrafo intro */}
        <style>{`
          .isola-dropcap::first-letter {
            font-family: var(--font-display), Georgia, serif;
            font-size: 104px;
            line-height: 0.82;
            color: ${SUN_YELLOW};
            float: left;
            margin-right: 14px;
            margin-top: 6px;
            font-weight: 300;
          }
        `}</style>
      </section>

      {/* 03 — NUMERI: 4 "pill cards" colorate sparpagliate
              (giallo, azzurro, cream, terracotta) — playful */}
      <section
        className="py-24 sm:py-32"
        style={{backgroundColor: CREAM_DEEPER}}
      >
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <p
            className="eyebrow mb-12 sm:mb-14"
            style={{color: SUN_YELLOW_DEEP}}
          >
            {tour.numbersEyebrow}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {tour.numbers.map((n, i) => {
              const palette = [
                {bg: SUN_YELLOW, fg: '#3D2A0B', tilt: -1.5},
                {bg: SKY, fg: '#0F2A3D', tilt: 1.2},
                {bg: CREAM_HOT, fg: 'var(--ink)', tilt: -0.8},
                {bg: '#E07856', fg: '#FFFFFF', tilt: 1.8}
              ];
              const p = palette[i % palette.length];
              return (
                <motion.li
                  key={n.label}
                  initial={reduce ? false : {opacity: 0, y: 32, rotate: 0}}
                  whileInView={
                    reduce
                      ? undefined
                      : {opacity: 1, y: 0, rotate: p.tilt}
                  }
                  viewport={{once: true, margin: '-10%'}}
                  transition={{duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1]}}
                  className="px-7 py-9 sm:px-8 sm:py-10"
                  style={{
                    backgroundColor: p.bg,
                    color: p.fg,
                    transform: reduce ? 'none' : `rotate(${p.tilt}deg)`,
                    boxShadow:
                      '0 2px 8px rgba(31, 26, 20, 0.06), 0 16px 36px rgba(31, 26, 20, 0.12)'
                  }}
                >
                  <p
                    className="font-display font-light tabular-nums leading-[1] break-words"
                    style={{
                      fontStretch: '90%',
                      fontSize: 'clamp(30px, 3vw, 48px)',
                      letterSpacing: '-0.025em'
                    }}
                  >
                    {n.value}
                  </p>
                  <p
                    className="mt-5 text-[11px] sm:text-[12px] uppercase tracking-[0.18em] font-medium"
                    style={{opacity: 0.78}}
                  >
                    {n.label}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 04 — PARTNER Pura Vida — citazione con vibe estivo */}
      {tour.partners && tour.partners.length > 0 && (
        <section
          style={{backgroundColor: CREAM_HOT}}
          className="py-32 sm:py-44"
        >
          <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
            <p
              className="eyebrow mb-10"
              style={{color: SUN_YELLOW_DEEP}}
            >
              {tour.partnersEyebrow}
            </p>
            <h2
              className="font-display text-display-md font-light text-ink max-w-[22ch] mb-14 sm:mb-16"
              style={{fontStretch: '95%'}}
            >
              {tour.partnersH2}
            </h2>

            <div className="space-y-14 sm:space-y-16">
              {tour.partners.map((p) => (
                <article
                  key={p.name}
                  className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-7 lg:gap-14 items-start"
                >
                  <p
                    className="font-display italic text-display-sm font-light leading-[1.05] max-w-[14ch]"
                    style={{color: SUN_YELLOW_DEEP, fontStretch: '95%'}}
                  >
                    {p.name}
                  </p>
                  <p className="text-[18px] sm:text-[19px] leading-[1.7] text-ink-soft max-w-[58ch] lg:pt-3">
                    {p.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 05 — TAPPE: griglia 2x2 cartoline kodachrome.
              Numero grande colorato + foto bordata + titolo + body */}
      <section
        style={{backgroundColor: CREAM_DEEPER}}
        className="py-32 sm:py-44 relative overflow-hidden"
      >
        {/* Sole decorativo angolo (subtle) */}
        <div
          className="absolute -top-[20%] -right-[10%] w-[55vw] h-[55vw] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${SUN_YELLOW}28 0%, transparent 65%)`
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <p
            className="eyebrow mb-10"
            style={{color: SUN_YELLOW_DEEP}}
          >
            {tour.stagesEyebrow}
          </p>
          <h2
            className="font-display text-display-lg font-light text-ink max-w-[20ch] mb-20 sm:mb-24"
            style={{fontStretch: '92%'}}
          >
            {tour.stagesH2Pre}{' '}
            <span style={{color: SUN_YELLOW_DEEP}}>{tour.stagesH2Accent}</span>
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-20 sm:gap-y-24">
            {tour.stages.map((stage, i) => {
              const numberColors = [SUN_YELLOW_DEEP, SKY, '#B05E40', SUN_YELLOW_DEEP];
              return (
                <motion.li
                  key={stage.number}
                  initial={reduce ? false : {opacity: 0, y: 40}}
                  whileInView={reduce ? undefined : {opacity: 1, y: 0}}
                  viewport={{once: true, margin: '-12%'}}
                  transition={{
                    duration: 1,
                    delay: (i % 2) * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative"
                >
                  {/* Numero grande colorato */}
                  <p
                    className="font-display italic font-light tabular-nums leading-[1] mb-6"
                    style={{
                      color: numberColors[i % numberColors.length],
                      fontStretch: '95%',
                      fontSize: 'clamp(56px, 7vw, 104px)',
                      letterSpacing: '-0.035em'
                    }}
                  >
                    {stage.number}
                  </p>

                  {/* Foto con bordo bianco "cartolina" */}
                  <figure
                    className="relative aspect-[5/4] overflow-hidden mb-7"
                    style={{
                      backgroundColor: '#FFFFFF',
                      padding: 10,
                      boxShadow:
                        '0 1px 3px rgba(31, 26, 20, 0.08), 0 14px 32px rgba(31, 26, 20, 0.10)'
                    }}
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={stage.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 92vw, 44vw"
                        className="object-cover"
                        loading={i < 2 ? 'eager' : 'lazy'}
                        style={{
                          filter:
                            'saturate(1.12) brightness(1.0) contrast(1.05) sepia(0.06)'
                        }}
                      />
                    </div>
                  </figure>

                  {/* Durata in piccolo accent giallo */}
                  <p
                    className="font-display italic text-[15px] sm:text-[16px] mb-3 tabular-nums"
                    style={{color: SUN_YELLOW_DEEP}}
                  >
                    {stage.duration}
                  </p>

                  {/* Titolo medium */}
                  <h3
                    className="font-display font-light text-ink leading-[1.05] mb-5"
                    style={{
                      fontStretch: '92%',
                      fontSize: 'clamp(28px, 3.4vw, 44px)',
                      letterSpacing: '-0.025em'
                    }}
                  >
                    {stage.title}
                  </h3>

                  {/* Body */}
                  <p className="text-[17px] sm:text-[18px] leading-[1.7] text-ink-soft max-w-[48ch]">
                    {stage.body}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 06 — INCLUSO / NON INCLUSO — pill style giallo-azzurro */}
      <section
        style={{backgroundColor: CREAM_HOT}}
        className="py-32 sm:py-40"
      >
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <h2
            className="font-display text-display-md font-light text-ink max-w-[20ch] mb-16 sm:mb-20"
            style={{fontStretch: '92%'}}
          >
            {tour.includedH2Pre}{' '}
            <span style={{color: SUN_YELLOW_DEEP}}>{tour.includedH2Accent}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-16 lg:gap-x-24">
            <div>
              <p
                className="eyebrow mb-7"
                style={{color: SUN_YELLOW_DEEP}}
              >
                {tour.includedLabel}
              </p>
              <ul className="space-y-4 text-[17px] sm:text-[18px] leading-[1.65] text-ink-soft">
                {tour.included.map((item, i) => (
                  <li
                    key={i}
                    className="pb-4 border-b last:border-b-0"
                    style={{borderColor: `${SUN_YELLOW}50`}}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-7 text-ink/40">
                {tour.excludedLabel}
              </p>
              <ul className="space-y-4 text-[17px] sm:text-[18px] leading-[1.65] text-ink/55">
                {tour.excluded.map((item, i) => (
                  <li
                    key={i}
                    className="pb-4 border-b last:border-b-0"
                    style={{borderColor: 'var(--border)'}}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — FAQ accordion — minimal, giallo accent */}
      <section
        style={{backgroundColor: CREAM_DEEPER}}
        className="py-32 sm:py-40"
      >
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p
            className="eyebrow mb-10"
            style={{color: SUN_YELLOW_DEEP}}
          >
            {tour.faqEyebrow}
          </p>
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] mb-14 sm:mb-16"
            style={{fontStretch: '92%'}}
          >
            {tour.faqH2Pre}{' '}
            <span style={{color: SUN_YELLOW_DEEP}}>{tour.faqH2Accent}</span>
          </h2>

          <ul className="divide-y" style={{borderColor: `${SUN_YELLOW}50`}}>
            {tour.faqs.map((item, i) => (
              <li key={i} style={{borderColor: `${SUN_YELLOW}50`}}>
                <details className="group py-2">
                  <summary className="cursor-pointer list-none py-7 flex items-start justify-between gap-8">
                    <h3
                      className="font-display text-[26px] sm:text-[32px] lg:text-[36px] font-light text-ink leading-[1.15] max-w-[48ch] transition-colors"
                      style={{fontStretch: '92%'}}
                    >
                      {item.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="font-display text-3xl leading-none mt-2 transition-transform duration-300 group-open:rotate-45"
                      style={{color: SUN_YELLOW_DEEP}}
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

      {/* 08 — CTA finale: gradient sun-baked, niente foto, vibe estivo */}
      <section
        className="relative py-40 sm:py-56 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${CREAM_HOT} 0%, #F5E0AA 45%, ${SUN_YELLOW} 100%)`,
          color: 'var(--ink)'
        }}
      >
        {/* Glow sole top-right */}
        <div
          className="absolute -top-[30%] -right-[20%] w-[70vw] h-[70vw] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, rgba(255, 255, 255, 0.55) 0%, transparent 60%)`
          }}
          aria-hidden="true"
        />
        {/* Azzurro mare bottom-left subtle */}
        <div
          className="absolute -bottom-[30%] -left-[20%] w-[60vw] h-[60vw] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${SKY}40 0%, transparent 60%)`
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p
            className="eyebrow mb-10"
            style={{color: SUN_YELLOW_DEEP}}
          >
            {tour.ctaEyebrow}
          </p>
          <h2
            className="hero-headline font-display font-light text-ink leading-[0.96]"
            style={{
              fontSize: 'clamp(48px, 8.5vw, 132px)',
              fontStretch: '90%',
              letterSpacing: '-0.035em',
              maxWidth: 'min(640px, 90vw)'
            }}
          >
            {tour.ctaH2}
          </h2>
          <p
            className="mt-10 text-[19px] sm:text-[21px] text-ink-soft leading-[1.6] max-w-[52ch]"
          >
            {tour.ctaSubhead}
          </p>

          <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-5">
            <a
              href="https://wa.me/393756413379"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:bg-[#3D2A0B]"
              style={{
                backgroundColor: 'var(--ink)',
                color: CREAM_HOT
              }}
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
              className="inline-flex items-center justify-center gap-3 rounded-full px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium text-ink transition-colors hover:bg-ink/8"
              style={{
                border: `1px solid rgba(31, 26, 20, 0.35)`
              }}
            >
              {tCommon('ctaQuote')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
