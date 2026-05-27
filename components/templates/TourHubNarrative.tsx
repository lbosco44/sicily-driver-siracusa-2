'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';
import type {TourHubContent} from '@/lib/tours';
import {HERO_BLUR, HERO_SIZES} from '@/lib/blur';
import {AnimatedHeading} from '@/components/ui/AnimatedHeading';
import {EsperienzeScroll} from '@/components/sections/home/EsperienzeScroll';

// TourHubNarrative — pagina /tour-sicilia + /en/sicily-tours.
// Stesso linguaggio della home: hero atmosferica, scroll-driven sticky per
// le 5 esperienze, storytelling narrative, CTA finale immersive.
// Diverso dalla home perché qui chi atterra HA già scelto "voglio un tour".

export function TourHubNarrative({hub}: {hub: TourHubContent}) {
  // Cliente 27/05/2026: la sezione itinerari/esperienze usa ora la stessa
  // sezione WebGL scroll-driven della homepage (EsperienzeScroll).
  // Stesso contenuto (5 esperienze hardcoded in components/sections/home/
  // esperienze/data.ts), stesso shader wipe, stesso behaviour mobile (lock).
  // Tutto il logic del precedente sticky vertical scroll (stickyRef,
  // useScroll, useTransform, ItineraryBackground/Image/Text/HubCounter)
  // e' stato deprecato. I subcomponents restano definiti sotto per
  // backward compat ma non sono piu' renderizzati.

  return (
    <>
      {/* 01 — HERO atmosferica */}
      <section className="hero-stage relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={hub.heroImage}
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes={HERO_SIZES}
            quality={80}
            placeholder="blur"
            blurDataURL={HERO_BLUR}
            className="object-cover"
            style={{filter: 'saturate(0.88) brightness(0.78) contrast(1.08)'}}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/80" />
        </div>

        <div className="relative h-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex items-end pb-[18vh] sm:pb-[22vh]">
          <div className="max-w-[28ch]">
            <h1
              className="hero-headline font-display text-display-lg font-medium text-cream-on-dark"
              style={{
                fontStretch: '92%',
                textShadow: '0 2px 24px rgba(0,0,0,0.3)'
              }}
            >
              {hub.h1Pre}{' '}
              <span className="text-accent-decorative">
                {hub.h1Accent}
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* 02 — INTRO breve narrativo */}
      <section className="bg-canvas py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow mb-10">{hub.itinerariesEyebrow}</p>
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] mb-10"
            style={{fontStretch: '95%'}}
          >
            {hub.introH2Pre}{' '}
            <span className="text-accent">{hub.introH2Accent}</span>
          </h2>
          <p className="text-[19px] sm:text-[20px] leading-[1.7] text-ink-soft max-w-[60ch]">
            {hub.introBody}
          </p>
        </div>
      </section>

      {/* 03 — ESPERIENZE scroll-driven WebGL (riusato dall'home)
            Cliente 27/05/2026: stesso identico layout della homepage:
            5 esperienze con foto + testo (Dolce Vita, Silent Sailing,
            Isola Correnti, Etna, Barocco), shader wipe orizzontale
            transition, testo SEMPRE a sinistra, mobile scroll-lock.
            Source: components/sections/home/EsperienzeScroll.tsx */}
      <EsperienzeScroll />

      {/* 04 — STORYTELLING giornata tipo */}
      <section className="bg-canvas py-40 sm:py-56">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow mb-10">{hub.storyEyebrow}</p>
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] mb-14 sm:mb-16"
            style={{fontStretch: '95%'}}
          >
            {hub.storyH2Pre}{' '}
            <span className="italic font-light">{hub.storyH2Accent}</span>
          </h2>

          <div className="space-y-7 text-[19px] sm:text-[20px] leading-[1.7] text-ink-soft">
            {hub.storyParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — COSA È SEMPRE INCLUSO — lista editorial */}
      <section className="bg-canvas-deep py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div>
              <p className="eyebrow mb-7">{hub.includedEyebrow}</p>
              <h2
                className="font-display text-display-md font-light text-ink max-w-[16ch]"
                style={{fontStretch: '95%'}}
              >
                {hub.includedH2Pre}{' '}
                <span className="text-accent">{hub.includedH2Accent}</span>
              </h2>
            </div>

            <ul className="space-y-4 text-[17px] sm:text-[18px] leading-[1.65] text-ink-soft">
              {hub.included.map((item, i) => (
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
      </section>

      {/* 06 — FAQ */}
      <section className="bg-canvas py-32 sm:py-40">
        <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
          <p className="eyebrow mb-10">{hub.faqEyebrow}</p>
          <h2
            className="font-display text-display-md font-light text-ink max-w-[18ch] mb-14 sm:mb-16"
            style={{fontStretch: '95%'}}
          >
            {hub.faqH2Pre}{' '}
            <span className="text-accent">{hub.faqH2Accent}</span>
          </h2>

          <ul className="divide-y divide-[var(--border-strong)]">
            {hub.faqs.map((item, i) => (
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

      {/* 07 — CTA finale */}
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
          <p className="eyebrow text-cream-on-dark/65 mb-10">{hub.ctaEyebrow}</p>
          <AnimatedHeading
            as="h2"
            text={hub.ctaH2}
            className="font-display text-display-xl font-light text-cream-on-dark max-w-[18ch] leading-[0.95]"
            style={{fontStretch: '95%'}}
          />
          <p className="mt-10 text-[19px] sm:text-[21px] text-cream-soft leading-[1.6] max-w-[52ch]">
            {hub.ctaSubhead}
          </p>

          <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-5">
          </div>
        </div>
      </section>
    </>
  );
}
