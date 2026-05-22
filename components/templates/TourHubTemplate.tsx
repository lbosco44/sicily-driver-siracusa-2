import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import type {TourHubContent} from '@/lib/tours';
import {HERO_BLUR, HERO_SIZES} from '@/lib/blur';

export async function TourHubTemplate({hub}: {hub: TourHubContent}) {
  const tNcc = await getTranslations('NccPage');

  return (
    <>
      {/* 1. HERO atmosferica — foto cinematic in attesa video loop */}
      <section className="relative isolate min-h-[min(92vh,780px)] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{filter: 'saturate(0.88) brightness(0.78) contrast(1.08)'}}
        >
          <Image
            src={hub.heroImage}
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
          {/* Gradient profondo per atmosfera cinematic */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/75" />
        </div>

        <div className="relative w-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 pb-16 sm:pb-24 pt-32 sm:pt-40">
          <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.18em] font-medium text-[#F5EFE4]/90 mb-7">
            {hub.heroEyebrow}
          </p>

          <h1 className="font-display font-medium text-[#F5EFE4] text-[52px] sm:text-[80px] lg:text-[112px] leading-[0.98] tracking-tight max-w-[14ch]">
            {hub.h1Pre}{' '}
            <span className="italic">{hub.h1Accent}</span>
          </h1>

          <p className="mt-7 font-display italic text-[#F5EFE4]/90 text-2xl sm:text-3xl max-w-[44ch] leading-snug">
            {hub.heroSubhead}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            <a
              href="#itineraries"
              className="inline-flex items-center justify-center gap-2 text-[#F5EFE4] border-b border-[#F5EFE4]/40 pb-1 text-[13px] uppercase tracking-[0.08em] font-medium hover:border-[#F5EFE4] transition-colors"
            >
              {tNcc('ctaQuote')} ↓
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

      {/* 2. INTRO paragraph */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
                {hub.introH2Pre}{' '}
                <span className="italic">{hub.introH2Accent}</span>
              </h2>
            </div>

            <div>
              <p className="text-[18px] sm:text-[20px] leading-[1.75] text-ink/90">
                {hub.introBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 ITINERARI cards asimmetriche */}
      <section id="itineraries" className="bg-canvas pb-24 sm:pb-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
              {hub.itinerariesEyebrow}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
              {hub.itinerariesH2Pre}{' '}
              <span className="italic">{hub.itinerariesH2Accent}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7">
            {hub.itineraries.map((card, i) => (
              <Link
                key={i}
                href={card.href}
                className="group relative overflow-hidden rounded-xl aspect-[4/5] sm:aspect-[3/4] lg:aspect-[5/6] block"
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading={i < 2 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15" />

                <div className="absolute inset-0 p-7 sm:p-9 flex flex-col justify-between">
                  <p
                    className="font-display italic font-medium text-[88px] sm:text-[120px] leading-[0.85]"
                    style={{color: 'var(--accent-decorative)'}}
                  >
                    {card.number}
                  </p>

                  <div>
                    <h3 className="font-display italic font-medium text-3xl sm:text-4xl lg:text-5xl text-[#F5EFE4] leading-tight">
                      {card.title}
                    </h3>
                    <p className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[#F5EFE4]/80 text-[14px]">
                      <span>{card.duration}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-display italic text-[#F5EFE4] text-lg">
                        {card.price}
                      </span>
                    </p>
                    <p className="mt-4 text-[14px] sm:text-[15px] text-[#F5EFE4]/85 leading-[1.55] max-w-[42ch]">
                      {card.body}
                    </p>
                    <p className="mt-6 text-[12px] uppercase tracking-[0.08em] font-medium text-[#F5EFE4] inline-flex items-center gap-2">
                      {card.href === '/contatti' ? '→' : '→'}{' '}
                      <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                        →
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STORYTELLING — una giornata tipo */}
      <section className="bg-muted-bg py-28 sm:py-40">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-7">
              {hub.storyEyebrow}
            </p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium text-primary leading-[1.04] mb-12 sm:mb-16">
              {hub.storyH2Pre}{' '}
              <span className="italic">{hub.storyH2Accent}</span>
            </h2>

            <div className="space-y-7 font-display italic text-[20px] sm:text-[22px] leading-[1.55] text-ink/85 max-w-[44ch]">
              {hub.storyParagraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? 'first-letter:text-[80px] first-letter:leading-[0.85] first-letter:text-[color:var(--accent-decorative)] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-medium'
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

      {/* 5. INCLUSO — lista editorial */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
                {hub.includedEyebrow}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
                {hub.includedH2Pre}{' '}
                <span className="italic">{hub.includedH2Accent}</span>
              </h2>
            </div>

            <ul className="space-y-5 lg:space-y-6">
              {hub.included.map((item, i) => (
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

      {/* 6. FAQ */}
      <section className="bg-muted-bg py-24 sm:py-32">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
                {hub.faqEyebrow}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
                {hub.faqH2Pre}{' '}
                <span className="italic">{hub.faqH2Accent}</span>
              </h2>
            </div>

            <ul className="divide-y divide-[var(--border)]">
              {hub.faqs.map((item, i) => (
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

      {/* 7. CTA FINALE */}
      <section
        className="bg-primary py-24 sm:py-32"
        style={{color: 'var(--cream-on-dark)'}}
      >
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#F5EFE4]/65 mb-5">
              {hub.ctaEyebrow}
            </p>
            <h2 className="font-display italic font-medium text-[#F5EFE4] text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
              {hub.ctaH2}
            </h2>
            <p className="mt-6 text-[18px] sm:text-[20px] text-[#F5EFE4]/80 leading-relaxed max-w-prose">
              {hub.ctaSubhead}
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
