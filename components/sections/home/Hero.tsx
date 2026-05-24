'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {motion, useScroll, useTransform, useReducedMotion} from 'motion/react';
import {useRef} from 'react';
import {HERO_BLUR} from '@/lib/blur';

// Stop 01 — Hero atmosferica
// Foto Sicily golden hour full-bleed + headline Bricolage gigante + cue scroll discreta.
// Niente search bar, niente CTA visibili. La hero è atmosfera pura.

export function Hero() {
  const t = useTranslations('Home.hero');
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Parallax leggero della foto (max 8% per non disorientare)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const photoY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '8%']);
  const headlineY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '-12%']);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="hero-stage relative isolate overflow-hidden"
      aria-label={t('a11yLabel')}
    >
      {/* Foto background con parallax sottile */}
      <motion.div className="absolute inset-0 -z-10" style={{y: photoY}}>
        <Image
          src="/images/home/hero.jpeg"
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
        {/* Overlay graduale per leggibilità testo in basso */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/15 to-black/70" />
      </motion.div>

      {/* Headline + scroll cue
          Mobile: H1 in alto a sinistra, no subtitle, scroll cue in basso
          Desktop: H1 in basso center-right + subtitle piccolo su 2 righe */}
      <div className="relative h-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex flex-col pt-24 sm:pt-0 pb-12 sm:pb-16">
        {/* HEADLINE — order 1 mobile (top), order 2 desktop (bottom via flex-1 spacer) */}
        <motion.div
          className="order-1 sm:order-2 sm:w-[55%] sm:ml-[40%] lg:ml-[42%]"
          style={{y: headlineY, opacity: headlineOpacity}}
          initial={reduce ? false : {opacity: 0, y: 40}}
          animate={reduce ? false : {opacity: 1, y: 0}}
          transition={{duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15}}
        >
          <h1
            className="font-display text-[44px] sm:text-[80px] md:text-[100px] lg:text-[128px] xl:text-[148px] font-medium text-cream-on-dark"
            style={{
              fontStretch: '95%',
              textShadow: '0 2px 24px rgba(0,0,0,0.25)',
              lineHeight: '1.05',
              letterSpacing: '-0.035em',
              overflowWrap: 'break-word',
              hyphens: 'auto'
            }}
          >
            {t('h1Pre')}
            <br />
            {t('h1Post')}
            <span className="text-accent-decorative">{t('h1Punct')}</span>
          </h1>

          {/* Subhead: solo desktop, piccolo, 2 righe */}
          <p className="hidden sm:block mt-5 sm:mt-6 max-w-[55ch] text-[14px] sm:text-[15px] font-light text-cream-soft/90 leading-[1.55]">
            {t('subhead')}
          </p>
        </motion.div>

        {/* SPACER — mobile sotto headline, desktop sopra (per spingere headline in basso) */}
        <div className="order-2 sm:order-1 flex-1" />

        {/* SCROLL CUE — sempre in basso centrato */}
        <motion.div
          className="order-3 flex flex-col items-center self-center mt-12 sm:mt-16"
          initial={reduce ? false : {opacity: 0}}
          animate={reduce ? false : {opacity: 1}}
          transition={{duration: 0.8, delay: 1.4}}
        >
          <p className="text-[10px] uppercase tracking-[0.32em] font-medium text-cream-on-dark/65 mb-3">
            {t('scrollCue')}
          </p>
          <motion.div
            className="w-px h-12 sm:h-16 bg-cream-on-dark/40"
            initial={{scaleY: 0, transformOrigin: 'top'}}
            animate={{scaleY: 1}}
            transition={{duration: 1.2, delay: 1.6, ease: 'easeOut'}}
          />
        </motion.div>
      </div>
    </section>
  );
}
