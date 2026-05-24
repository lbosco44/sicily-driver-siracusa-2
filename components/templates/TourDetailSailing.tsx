'use client';

import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'motion/react';
import type {TourContent} from '@/lib/tours';
import {HERO_BLUR, HERO_SIZES} from '@/lib/blur';

// TourDetailSailing — variante mood contemplativo blu mare per Silent Sailing.
// Reference: "respiro lento, mare aperto, niente fretta".
// Palette: blu profondo notturno + cream + sea-foam pallido.
// Ritmo: spazi negativi ENORMI, scroll naturale lento, foto poche ma grandi.
// Filtri cool-tones (più blu, meno saturazione).
// Niente sticky, niente polaroid: il pattern è "pagine di un libro silenzioso".

const SEA_NIGHT = '#0F2A3D';
const SEA_NIGHT_DEEP = '#0A1F2E';
const SEA_FOAM = '#A8C5C2';
const SEA_LINE = '#7FA5A2';

export function TourDetailSailing({tour}: {tour: TourContent}) {
  const tCommon = useTranslations('NccPage');
  const reduce = useReducedMotion();

  return (
    <>
      {/* 01 — HERO: vela isolata + tipografia in basso a sinistra,
              molto vuoto sopra. Cinematic, blu freddo. */}
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
            style={{filter: 'saturate(0.7) brightness(0.7) contrast(1.05) hue-rotate(12deg)'}}
          />
          {/* Gradient bottom-up blu profondo */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(15, 42, 61, 0.20) 0%, rgba(15, 42, 61, 0.45) 50%, rgba(10, 31, 46, 0.88) 100%)'
            }}
          />
          {/* Gradient side per leggibilità testo */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(10, 31, 46, 0.55) 0%, transparent 55%)'
            }}
          />
        </div>

        <div className="relative h-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex items-end pb-16 sm:pb-20">
          <div style={{maxWidth: 'min(520px, 86vw)'}}>
            <p
              className="eyebrow mb-8"
              style={{
                color: SEA_FOAM,
                letterSpacing: '0.32em'
              }}
            >
              {tour.heroEyebrow}
            </p>
            <h1
              className="hero-headline font-display font-light text-cream-on-dark"
              style={{
                fontSize: 'clamp(56px, 9.5vw, 144px)',
                fontStretch: '88%',
                lineHeight: 0.92,
                letterSpacing: '-0.035em',
                textShadow: '0 4px 32px rgba(0,0,0,0.5)'
              }}
            >
              {tour.h1}
            </h1>
            <p
              className="mt-9 font-display text-[18px] sm:text-[22px] font-light leading-[1.45]"
              style={{
                maxWidth: 'min(440px, 84vw)',
                color: 'rgba(245, 239, 228, 0.86)'
              }}
            >
              {tour.heroSubhead}
            </p>
          </div>
        </div>
      </section>

      {/* 02 — INTRO: layout asimmetrico, una colonna stretta a destra
              con spazi enormi tra paragrafi. Cream caldo + accent sea-foam. */}
      <section className="bg-canvas py-44 sm:py-56">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Eyebrow + label minimal a sinistra */}
            <div className="lg:col-span-4">
              <p
                className="eyebrow mb-6"
                style={{color: SEA_LINE}}
              >
                {tour.introH2Pre}{' '}
                <span style={{color: SEA_LINE}}>{tour.introH2Accent}</span>
              </p>
              <motion.div
                initial={reduce ? false : {opacity: 0, y: 24}}
                whileInView={reduce ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true, margin: '-15%'}}
                transition={{duration: 1.1, ease: [0.16, 1, 0.3, 1]}}
              >
                <p
                  className="font-display italic text-[28px] sm:text-[36px] font-light leading-[1.1] max-w-[12ch]"
                  style={{color: SEA_NIGHT, fontStretch: '95%'}}
                >
                  &mdash; vento, vela, mare.
                </p>
              </motion.div>
            </div>

            {/* Paragrafi a destra, spaziati */}
            <motion.div
              className="lg:col-span-7 lg:col-start-6 space-y-14 sm:space-y-20 text-[20px] sm:text-[22px] leading-[1.65] text-ink-soft"
              initial={reduce ? false : {opacity: 0, y: 32}}
              whileInView={reduce ? undefined : {opacity: 1, y: 0}}
              viewport={{once: true, margin: '-15%'}}
              transition={{duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1]}}
            >
              {tour.introBody.map((p, i) => (
                <p key={i} className="max-w-[44ch]">
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03 — NUMERI: 4 numeri ognuno su riga propria, separati da linee
              sottili sea-foam. Tipografia HUGE, ritmo molto lento. */}
      <section
        className="py-32 sm:py-44"
        style={{backgroundColor: SEA_NIGHT, color: 'var(--cream-on-dark)'}}
      >
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <p
            className="eyebrow mb-16 sm:mb-20"
            style={{color: SEA_FOAM}}
          >
            {tour.numbersEyebrow}
          </p>

          <ul>
            {tour.numbers.map((n, i) => (
              <motion.li
                key={n.label}
                initial={reduce ? false : {opacity: 0, x: -20}}
                whileInView={reduce ? undefined : {opacity: 1, x: 0}}
                viewport={{once: true, margin: '-10%'}}
                transition={{duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1]}}
                className="grid grid-cols-12 gap-6 items-baseline py-9 sm:py-12 border-t"
                style={{borderColor: `${SEA_LINE}35`}}
              >
                <span
                  className="col-span-1 font-display italic text-[18px] sm:text-[22px] tabular-nums"
                  style={{color: SEA_FOAM, opacity: 0.7}}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p
                  className="col-span-7 sm:col-span-7 font-display font-light leading-[0.95] tabular-nums break-words"
                  style={{
                    color: 'var(--cream-on-dark)',
                    fontStretch: '88%',
                    fontSize: 'clamp(36px, 5.2vw, 84px)',
                    letterSpacing: '-0.035em'
                  }}
                >
                  {n.value}
                </p>
                <p
                  className="col-span-12 sm:col-span-4 sm:text-right text-[12px] sm:text-[13px] uppercase tracking-[0.18em] font-medium"
                  style={{color: 'rgba(245, 239, 228, 0.55)'}}
                >
                  {n.label}
                </p>
              </motion.li>
            ))}
            <li
              className="border-t"
              style={{borderColor: `${SEA_LINE}35`}}
            />
          </ul>
        </div>
      </section>

      {/* 04 — PARTNER cantine/burgio — minimal, una citazione grande */}
      {tour.partners && tour.partners.length > 0 && (
        <section className="bg-canvas py-32 sm:py-44">
          <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
            <p
              className="eyebrow mb-10"
              style={{color: SEA_LINE}}
            >
              {tour.partnersEyebrow}
            </p>
            <h2
              className="font-display text-display-md font-light text-ink max-w-[22ch] mb-16 sm:mb-20"
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
                    className="font-display italic text-display-sm font-light leading-[1.05] max-w-[14ch]"
                    style={{color: SEA_NIGHT, fontStretch: '95%'}}
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

      {/* 05 — TAPPE: pagine di un libro silenzioso.
              Ogni tappa = una pagina full-bleed con foto enorme centrata
              e testo sotto stretto. Sfondo cream e blu profondo alternati. */}
      <section className="relative" aria-label={tour.stagesEyebrow}>
        {/* Header sezione */}
        <div className="bg-canvas py-24 sm:py-32">
          <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
            <p
              className="eyebrow mb-7"
              style={{color: SEA_LINE}}
            >
              {tour.stagesEyebrow}
            </p>
            <h2
              className="font-display text-display-lg font-light text-ink max-w-[20ch]"
              style={{fontStretch: '92%'}}
            >
              {tour.stagesH2Pre}{' '}
              <span style={{color: SEA_NIGHT}}>{tour.stagesH2Accent}</span>
            </h2>
          </div>
        </div>

        {tour.stages.map((stage, i) => {
          const isDark = i % 2 === 1;
          return (
            <section
              key={stage.number}
              className="py-32 sm:py-44 lg:py-56"
              style={{
                backgroundColor: isDark ? SEA_NIGHT : 'var(--canvas)',
                color: isDark ? 'var(--cream-on-dark)' : 'var(--ink)'
              }}
            >
              <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
                {/* Numero romano centrato sopra */}
                <motion.div
                  className="mb-14 sm:mb-20 text-center"
                  initial={reduce ? false : {opacity: 0, y: 16}}
                  whileInView={reduce ? undefined : {opacity: 1, y: 0}}
                  viewport={{once: true, margin: '-15%'}}
                  transition={{duration: 1, ease: [0.16, 1, 0.3, 1]}}
                >
                  <p
                    className="font-display italic font-light tabular-nums"
                    style={{
                      color: isDark ? SEA_FOAM : SEA_LINE,
                      fontSize: 'clamp(36px, 4vw, 60px)',
                      fontStretch: '95%',
                      letterSpacing: '0.02em',
                      opacity: 0.85
                    }}
                  >
                    {toRoman(i + 1)}
                  </p>
                </motion.div>

                {/* Foto centrale grande */}
                <motion.figure
                  className="relative aspect-[16/10] overflow-hidden mb-16 sm:mb-20"
                  initial={reduce ? false : {opacity: 0, scale: 1.04}}
                  whileInView={reduce ? undefined : {opacity: 1, scale: 1}}
                  viewport={{once: true, margin: '-15%'}}
                  transition={{duration: 1.4, ease: [0.16, 1, 0.3, 1]}}
                >
                  <Image
                    src={stage.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 92vw, 880px"
                    className="object-cover"
                    loading={i < 1 ? 'eager' : 'lazy'}
                    style={{
                      filter: 'saturate(0.78) brightness(0.92) contrast(1.05) hue-rotate(8deg)'
                    }}
                  />
                </motion.figure>

                {/* Testo sotto, centrato, stretto */}
                <motion.div
                  className="text-center"
                  initial={reduce ? false : {opacity: 0, y: 24}}
                  whileInView={reduce ? undefined : {opacity: 1, y: 0}}
                  viewport={{once: true, margin: '-15%'}}
                  transition={{duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1]}}
                >
                  <p
                    className="font-display italic font-light text-[18px] sm:text-[20px] mb-5 tabular-nums"
                    style={{color: isDark ? SEA_FOAM : SEA_LINE, opacity: 0.85}}
                  >
                    {stage.duration}
                  </p>
                  <h3
                    className="hero-headline font-display font-light leading-[1.04] mb-9 mx-auto max-w-[18ch]"
                    style={{
                      color: isDark ? 'var(--cream-on-dark)' : 'var(--ink)',
                      fontStretch: '90%',
                      fontSize: 'clamp(36px, 5.5vw, 80px)',
                      letterSpacing: '-0.025em'
                    }}
                  >
                    {stage.title}
                  </h3>
                  <p
                    className="mx-auto max-w-[54ch] text-[18px] sm:text-[19px] leading-[1.75]"
                    style={{
                      color: isDark
                        ? 'rgba(245, 239, 228, 0.82)'
                        : 'var(--ink-soft)'
                    }}
                  >
                    {stage.body}
                  </p>
                </motion.div>
              </div>
            </section>
          );
        })}
      </section>

      {/* 06 — INCLUSO / NON INCLUSO: layout 2-col cream */}
      <section className="bg-canvas py-32 sm:py-40 border-t" style={{borderColor: `${SEA_LINE}25`}}>
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <h2
            className="font-display text-display-md font-light text-ink max-w-[20ch] mb-16 sm:mb-20"
            style={{fontStretch: '92%'}}
          >
            {tour.includedH2Pre}{' '}
            <span style={{color: SEA_NIGHT}}>{tour.includedH2Accent}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-16 lg:gap-x-24">
            <div>
              <p className="eyebrow mb-7" style={{color: SEA_LINE}}>
                {tour.includedLabel}
              </p>
              <ul className="space-y-4 text-[17px] sm:text-[18px] leading-[1.65] text-ink-soft">
                {tour.included.map((item, i) => (
                  <li
                    key={i}
                    className="pb-4 border-b last:border-b-0"
                    style={{borderColor: `${SEA_LINE}25`}}
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

      {/* 07 — FAQ accordion sea-foam — minimal */}
      <section className="bg-canvas-deep py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow mb-10" style={{color: SEA_LINE}}>
            {tour.faqEyebrow}
          </p>
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] mb-14 sm:mb-16"
            style={{fontStretch: '92%'}}
          >
            {tour.faqH2Pre}{' '}
            <span style={{color: SEA_NIGHT}}>{tour.faqH2Accent}</span>
          </h2>

          <ul className="divide-y" style={{borderColor: `${SEA_LINE}30`}}>
            {tour.faqs.map((item, i) => (
              <li key={i} style={{borderColor: `${SEA_LINE}30`}}>
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
                      style={{color: SEA_LINE}}
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

      {/* 08 — CTA finale: solo gradient cielo+mare, niente foto */}
      <section
        className="relative py-44 sm:py-64 overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${SEA_NIGHT_DEEP} 0%, ${SEA_NIGHT} 60%, #1B3F5A 100%)`,
          color: 'var(--cream-on-dark)'
        }}
      >
        <div
          className="absolute top-1/3 right-[-20%] w-[80vw] h-[80vw] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(168, 197, 194, 0.10) 0%, transparent 60%)'
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p
            className="eyebrow mb-12"
            style={{color: SEA_FOAM}}
          >
            {tour.ctaEyebrow}
          </p>
          <h2
            className="hero-headline font-display font-light text-cream-on-dark leading-[0.95]"
            style={{
              fontSize: 'clamp(48px, 8.5vw, 128px)',
              fontStretch: '88%',
              letterSpacing: '-0.035em',
              maxWidth: 'min(680px, 90vw)'
            }}
          >
            {tour.ctaH2}
          </h2>
          <p
            className="mt-12 text-[19px] sm:text-[21px] leading-[1.6] max-w-[52ch]"
            style={{color: 'rgba(245, 239, 228, 0.78)'}}
          >
            {tour.ctaSubhead}
          </p>

          <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row gap-4 sm:gap-5">
            <a
              href="https://wa.me/393756413379"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium transition-all duration-200"
              style={{
                backgroundColor: SEA_FOAM,
                color: SEA_NIGHT_DEEP
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
              className="inline-flex items-center justify-center gap-3 rounded-full px-9 py-5 text-[14px] uppercase tracking-[0.08em] font-medium text-cream-on-dark transition-colors"
              style={{
                border: `1px solid rgba(245, 239, 228, 0.3)`
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

// Numeri romani per le tappe (I, II, III, IV...)
function toRoman(n: number): string {
  const map: Array<[number, string]> = [
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  let result = '';
  let num = n;
  for (const [v, s] of map) {
    while (num >= v) {
      result += s;
      num -= v;
    }
  }
  return result;
}
