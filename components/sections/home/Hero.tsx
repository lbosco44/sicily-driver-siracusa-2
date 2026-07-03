'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'motion/react';
import {useEffect, useRef} from 'react';
import {HERO_BLUR} from '@/lib/blur';
import {GoogleReviewsBadge} from '@/components/ui/GoogleReviewsBadge';
import {Link} from '@/i18n/navigation';

// Stop 01 — Hero atmosferica
// Foto Sicily golden hour full-bleed + headline Bricolage gigante + cue scroll discreta.
// Niente search bar, niente CTA visibili. La hero è atmosfera pura.

export function Hero() {
  const t = useTranslations('Home.hero');
  const tNav = useTranslations('Nav');
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
        {/* Scrim radiale localizzato dietro il blocco testo (headline + subhead
            + micro-form): garantisce leggibilità del sottotitolo bianco sottile
            ovunque cada rispetto all'immagine (es. sopra i palazzi chiari su
            laptop). Robusto a tutte le risoluzioni perché ancorato al 30% top. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 55% at 50% 30%, rgba(0,0,0,0.45), transparent 72%)'
          }}
          aria-hidden="true"
        />
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
              // Min alzato da 28 a 36: su mobile l'H1 era più piccolo del
              // bottone CTA → ribilanciato, ora va su 2 righe e torna
              // l'elemento dominante. Desktop/tablet invariati (li governa
              // il 7vw / il cap 104, non il minimo).
              fontSize: 'clamp(36px, 7vw, 104px)',
              fontStretch: '95%',
              letterSpacing: '-0.025em',
              lineHeight: '1.05',
              textShadow: '0 2px 24px rgba(0,0,0,0.3)'
            }}
          >
            {t('h1Post')}
            <span className="text-accent-decorative">{t('h1Punct')}</span>
          </h1>

          {/* Subhead sotto headline. Mobile: va a capo (prima era
              whitespace-nowrap → su 390px restava su una riga a 12px e
              veniva troncata, più piccola del bottone). Desktop (sm+):
              torna su una riga sola. */}
          <p
            className="mt-3 sm:mt-6 font-light text-cream-soft/95 text-balance max-w-[40ch] sm:max-w-none mx-auto sm:whitespace-nowrap"
            style={{
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              textShadow:
                '0 1px 3px rgba(0,0,0,0.6), 0 2px 20px rgba(0,0,0,0.55)'
            }}
          >
            {t('subhead')}
          </p>

          {/* CTA primaria: solo "Contattaci" → pagina contatti (coerente con
              la navbar). I campi Da→A del micro-form sono stati rimossi. */}
          <div className="mt-5 sm:mt-9 flex justify-center">
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-[13px] uppercase tracking-[0.08em] font-medium whitespace-nowrap transition-all duration-200 hover:bg-accent-hover"
              style={{color: 'var(--cream-on-dark)'}}
            >
              {tNav('bookNow')}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Badge Google — centrato (Instagram spostato in navbar) */}
          <div className="mt-4 sm:mt-5 flex items-center justify-center">
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
