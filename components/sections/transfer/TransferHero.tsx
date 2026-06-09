'use client';

import Image from 'next/image';
import {motion, useReducedMotion} from 'motion/react';
import {HERO_BLUR} from '@/lib/blur';
import {GoogleReviewsBadge} from '@/components/ui/GoogleReviewsBadge';
import {HeroQuickQuote} from '@/components/sections/home/HeroQuickQuote';

// TransferHero — hero pagina /transfer-sicilia. Stessa impostazione della
// hero della homepage (titolo Bricolage centrato + micro-form "Da → A" verso
// WhatsApp + badge Google), ma con il copy della pagina transfer passato come
// prop. Cliente 09/06/2026: "metti il testo come nella hero della homepage,
// compreso di pill per il preventivo su whatsapp e le recensioni google sotto".

export function TransferHero({
  title,
  subhead,
  image
}: {
  title: string;
  subhead: string;
  image: string;
}) {
  const reduce = useReducedMotion();

  return (
    <section className="hero-stage relative isolate overflow-hidden">
      {/* Foto background full-bleed + overlay graduale + scrim radiale dietro
          il blocco testo (identico trattamento della home per leggibilità). */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={85}
          placeholder="blur"
          blurDataURL={HERO_BLUR}
          className="object-cover"
          style={{filter: 'saturate(0.85) brightness(0.78) contrast(1.08)'}}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 55% at 50% 42%, rgba(0,0,0,0.45), transparent 72%)'
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative h-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex flex-col items-center justify-center text-center py-24 sm:py-28">
        <motion.div
          className="w-full"
          initial={reduce ? false : {opacity: 0, y: 40}}
          animate={reduce ? false : {opacity: 1, y: 0}}
          transition={{duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15}}
        >
          <h1
            className="font-display font-medium text-cream-on-dark mx-auto max-w-[16ch] text-balance"
            style={{
              fontSize: 'clamp(34px, 5.4vw, 80px)',
              fontStretch: '95%',
              letterSpacing: '-0.025em',
              lineHeight: '1.04',
              textShadow: '0 2px 24px rgba(0,0,0,0.3)'
            }}
          >
            {title}
          </h1>

          <p
            className="mt-4 sm:mt-6 mx-auto font-light text-cream-soft/95 text-balance max-w-[34ch] sm:max-w-[60ch]"
            style={{
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              lineHeight: '1.5',
              textShadow:
                '0 1px 3px rgba(0,0,0,0.6), 0 2px 20px rgba(0,0,0,0.55)'
            }}
          >
            {subhead}
          </p>

          {/* Micro-form rapido "Da → A" → WhatsApp (stesso componente della home) */}
          <div className="mt-7 sm:mt-9">
            <HeroQuickQuote />
          </div>

          {/* Badge recensioni Google — centrato */}
          <div className="mt-4 sm:mt-5 flex items-center justify-center">
            <GoogleReviewsBadge size="sm" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
