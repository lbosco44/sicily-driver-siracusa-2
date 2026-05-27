'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'motion/react';
import {PHONE_TEL_HREF} from '@/lib/contact';
import {WHATSAPP_HREF} from '@/lib/contact';

// CtaFinale — rielaborato 27/05/2026.
// Vecchio: sezione blu deep full-bleed con headline + 2 CTA.
// Nuovo: foto del van Mercedes Classe V col portellone aperto (cta-finale.png)
// su sfondo cream #F5EFE4 (matcha il bg della foto), testo + CTA overlay nel
// vano scuro della porta. L'idea: il visitatore "vede dentro" il van e legge
// l'invito direttamente li' dentro, mentre l'autista lo accoglie a sinistra.
//
// Tecnica: posizionamento assoluto dei contenuti overlay con percentuali
// calibrate sull'immagine (16:9). L'area scura della porta nella foto e':
// - x: 40% to 64% (~24% wide)
// - y: 18% to 78% (~60% tall)
// I valori sotto sono leggermente piu' stretti per dare margine al testo.

export function CtaFinale() {
  const t = useTranslations('Home.ctaFinale');
  const reduce = useReducedMotion();

  return (
    <section
      className="relative py-10 sm:py-14 lg:py-16 overflow-hidden"
      // #F5EFE4 = cream del background della foto cta-finale.png →
      // l'immagine si fonde col bg della sezione, niente edge visibile.
      style={{backgroundColor: '#F5EFE4'}}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{maxWidth: '1700px'}}>
        <motion.div
          // Van molto piu' grande: max-w-5xl (1024px) → max-w 1700px. Su
          // viewport 1920 occupa ~85% larghezza → quasi full-bleed come
          // richiesto dal cliente "occupasse tutta la sezione quasi".
          className="relative w-full mx-auto aspect-[16/9]"
          initial={reduce ? false : {opacity: 0, y: 24}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-15%'}}
          transition={{duration: 1, ease: [0.16, 1, 0.3, 1]}}
        >
          <Image
            src="/images/home/cta-finale.png"
            alt={t('imageAlt')}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1700px) 95vw, 1700px"
            className="object-contain"
            priority={false}
          />

          {/* Overlay nel vano scuro del van.
              POSIZIONI ITERAZIONE 5 (27/05/2026): coordinate MISURATE via
              pixel sampling sul file naturale (1480x833):
              - x 42% (lum 2 = deep black, dopo la mano del driver a 38-40%
                con lum 40)
              - x 58% (lum 2 = ancora deep black)
              - x 60% transizione (lum 16) → sedile inizia
              - x 64% (lum 21 = sedile dorato/scuro ma ancora dark)
              Safe range per overlay: 43-64% (cap 21% wide).
              Eviato 42-43% e 64-65% come buffer. */}
          <motion.div
            className="absolute flex flex-col items-center justify-center text-center"
            style={{
              top: '24%',
              bottom: '24%',
              left: '43%',
              right: '36%',
              color: 'var(--cream-on-dark)'
            }}
            initial={reduce ? false : {opacity: 0, y: 12}}
            whileInView={
              reduce ? undefined : {opacity: 1, y: 0, transition: {delay: 0.35}}
            }
            viewport={{once: true, margin: '-15%'}}
            transition={{duration: 0.9, ease: [0.16, 1, 0.3, 1]}}
          >
            <h2
              className="font-display font-medium leading-[1.02] tracking-tight"
              style={{
                // Container 21% × 1700px image = 357px wide.
                // "Ti aspettiamo" a 50px font ≈ 340-345px → fits con 12px
                // margine. Cap a 50px massimizza il "molto piu' grande"
                // chiesto dal cliente senza overflow.
                fontSize: 'clamp(22px, 2.85vw, 50px)',
                fontStretch: '95%'
              }}
            >
              {t('h2Line1')}
              <br />
              {t('h2Line2')}
            </h2>

            {/* 2 CTAs stack vertical. Cap padding/font ingranditi: cliente
                vuole che riempiano lo spazio nero. */}
            <div className="flex flex-col items-center gap-2.5 sm:gap-3 mt-5 sm:mt-7 lg:mt-8 w-full">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 sm:gap-2.5 rounded-full bg-accent hover:bg-accent-hover transition-all duration-200 whitespace-nowrap"
                style={{
                  color: 'var(--cream-on-dark)',
                  padding: 'clamp(10px, 1.1vw, 18px) clamp(18px, 2vw, 32px)',
                  fontSize: 'clamp(12px, 1vw, 16px)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 500
                }}
              >
                {t('ctaWhatsApp')}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

              <a
                href={PHONE_TEL_HREF}
                className="inline-flex items-center rounded-full border border-cream-on-dark/50 hover:border-cream-on-dark/80 hover:bg-cream-on-dark/8 transition-colors whitespace-nowrap tabular-nums"
                style={{
                  color: 'var(--cream-on-dark)',
                  padding: 'clamp(8px, 0.9vw, 15px) clamp(16px, 1.8vw, 28px)',
                  fontSize: 'clamp(11px, 0.9vw, 14px)',
                  letterSpacing: '0.12em',
                  fontWeight: 500
                }}
              >
                {t('ctaCall')}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
