'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {motion, useScroll, useTransform, useReducedMotion} from 'motion/react';
import {useRef} from 'react';

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
      className="relative isolate h-[100svh] min-h-[640px] overflow-hidden"
      aria-label={t('a11yLabel')}
    >
      {/* Foto background con parallax sottile */}
      <motion.div className="absolute inset-0 -z-10" style={{y: photoY}}>
        <Image
          src="https://images.unsplash.com/photo-1583435423797-be15ddffe3c2?w=2400&q=80&auto=format&fm=webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={80}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wCEAAkGBxAQEBAQEBAQEA8QDxAQDw8PDw8PDw8PFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAQGi0lHR8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAAoAFAMBIgACEQEDEQH/xAAVAAEBAQAAAAAAAAAAAAAAAAACAAH/xAAYEAEAAwEAAAAAAAAAAAAAAAAAAQIDEf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AzhfElQ2H/9k="
          className="object-cover"
          style={{filter: 'saturate(0.85) brightness(0.78) contrast(1.08)'}}
        />
        {/* Overlay graduale per leggibilità testo in basso */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/15 to-black/70" />
      </motion.div>

      {/* Headline + scroll cue */}
      <div className="relative h-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 grid grid-rows-[1fr_auto_auto] pb-12 sm:pb-16">
        {/* Top: vuoto, lascia respirare */}
        <div />

        {/* Headline gigante in basso a sinistra */}
        <motion.div
          className="max-w-[20ch]"
          style={{y: headlineY, opacity: headlineOpacity}}
          initial={reduce ? false : {opacity: 0, y: 40}}
          animate={reduce ? false : {opacity: 1, y: 0}}
          transition={{duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15}}
        >
          <h1
            className="font-display text-display-xl font-medium text-cream-on-dark"
            style={{
              fontStretch: '95%',
              textShadow: '0 2px 24px rgba(0,0,0,0.25)'
            }}
          >
            {t('h1Pre')}
            <span className="text-accent-decorative">{t('h1Punct')}</span>
            <br />
            {t('h1Post')}
            <span className="text-accent-decorative">{t('h1Punct')}</span>
          </h1>

          <p className="mt-7 sm:mt-9 max-w-[42ch] font-display text-[20px] sm:text-[24px] font-light text-cream-soft/95 leading-[1.35] tracking-[-0.005em]">
            {t('subhead')}
          </p>
        </motion.div>

        {/* Scroll cue in basso al centro */}
        <motion.div
          className="flex flex-col items-center justify-self-center mt-12 sm:mt-16"
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
