'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'motion/react';
import {useEffect, useRef} from 'react';
import {Link} from '@/i18n/navigation';
import {HERO_BLUR} from '@/lib/blur';
import {GoogleReviewsBadge} from '@/components/ui/GoogleReviewsBadge';

// Stop 01 — Hero atmosferica
// Foto Sicily golden hour full-bleed + headline Bricolage gigante + cue scroll discreta.
// Niente search bar, niente CTA visibili. La hero è atmosfera pura.

export function Hero() {
  const t = useTranslations('Home.hero');
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // iOS Safari ha update DISCRETI di svh durante il collapse dell'address
  // bar — ogni scatto rifa' il crop di object-cover dell'immagine = zoom
  // percepito. Locko l'altezza section in pixel al primo mount.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(max-width: 640px)').matches) return;
    if (!sectionRef.current) return;

    const lockHeight = () => {
      if (sectionRef.current) {
        sectionRef.current.style.height = `${window.innerHeight}px`;
      }
    };
    lockHeight();
    // Solo orientationchange ri-misura (non resize, perche' su mobile
    // resize fa rumore con l'address bar)
    const handler = () => setTimeout(lockHeight, 200);
    window.addEventListener('orientationchange', handler);
    return () => window.removeEventListener('orientationchange', handler);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-stage relative isolate overflow-hidden"
      aria-label={t('a11yLabel')}
    >
      {/* Foto background ancorata a 100lvh (large viewport, stabile su iOS).
          Il section ha overflow-hidden e clipa l'eccesso. L'immagine NON
          si rescala mai durante il collapse dell'address bar mobile. */}
      <div
        className="absolute top-0 left-0 right-0 -z-10"
        style={{height: '100lvh'}}
      >
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
      </div>

      {/* Headline centrata in alto + subhead + bottoni + scroll cue in basso.
          Mobile: alta (pt-20), spazi stretti. Desktop: pt-32, spazi più ariosi. */}
      <div className="relative h-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex flex-col items-center justify-start pt-20 sm:pt-32 pb-12 sm:pb-16">
        {/* HEADLINE + subhead + bottoni — tutti centrati in alto */}
        <motion.div
          className="text-center w-full"
          initial={reduce ? false : {opacity: 0, y: 40}}
          animate={reduce ? false : {opacity: 1, y: 0}}
          transition={{duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15}}
        >
          <h1
            className="font-display font-medium text-cream-on-dark"
            style={{
              fontSize: 'clamp(28px, 7vw, 104px)',
              fontStretch: '95%',
              letterSpacing: '-0.025em',
              lineHeight: '1.05',
              textShadow: '0 2px 24px rgba(0,0,0,0.3)'
            }}
          >
            {t('h1Post')}
            <span className="text-accent-decorative">{t('h1Punct')}</span>
          </h1>

          {/* Subhead: una riga sotto headline (mt stretto su mobile) */}
          <p
            className="mt-3 sm:mt-6 font-light text-cream-soft/95 whitespace-nowrap"
            style={{
              fontSize: 'clamp(12px, 1.5vw, 18px)',
              textShadow: '0 1px 12px rgba(0,0,0,0.35)'
            }}
          >
            {t('subhead')}
          </p>

          {/* Bottoni: CTA Contattaci + Instagram + Badge Google — centrati */}
          <div className="mt-5 sm:mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contatti"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-[13px] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:bg-accent-hover"
              style={{color: 'var(--cream-on-dark)'}}
            >
              {t('ctaPrimary')}
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href="https://www.instagram.com/sicilydriversyracuse?igsh=NmJrYjFuZWgyYWl0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Sicily Driver Syracuse"
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-cream-on-dark/60 px-6 py-3.5 text-[13px] uppercase tracking-[0.08em] font-medium text-cream-on-dark transition-all duration-200 hover:border-cream-on-dark hover:bg-cream-on-dark/10"
            >
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            <GoogleReviewsBadge size="sm" />
          </div>
        </motion.div>

        {/* Spacer — spinge la scroll cue in fondo */}
        <div className="flex-1" />

        {/* SCROLL CUE — sempre in basso centrato */}
        <motion.div
          className="flex flex-col items-center"
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
