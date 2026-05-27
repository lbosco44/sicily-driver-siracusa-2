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
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      // #F5EFE4 = cream del background della foto cta-finale.png →
      // l'immagine si fonde col bg della sezione, niente edge visibile.
      // E' lo stesso colore del nostro --canvas-warm, ma usiamo l'hex
      // esplicito per garantire match esatto (la foto e' export su quel
      // colore preciso).
      style={{backgroundColor: '#F5EFE4'}}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative w-full max-w-5xl mx-auto aspect-[16/9]"
          initial={reduce ? false : {opacity: 0, y: 24}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-15%'}}
          transition={{duration: 1, ease: [0.16, 1, 0.3, 1]}}
        >
          <Image
            src="/images/home/cta-finale.png"
            alt={t('imageAlt')}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1024px"
            className="object-contain"
            priority={false}
          />

          {/* Overlay nel vano scuro della porta aperta del van.
              Position: percentuali calibrate sull'aspect 16:9 dell'immagine.
              Su mobile (immagine piu' piccola), il padding interno e' ridotto
              proporzionalmente via clamp() font sizes. */}
          <motion.div
            className="absolute flex flex-col items-center justify-center text-center"
            style={{
              top: '20%',
              bottom: '20%',
              left: '40%',
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
              className="font-display font-medium leading-[1.05] tracking-tight"
              style={{
                fontSize: 'clamp(14px, 2.6vw, 38px)',
                fontStretch: '95%'
              }}
            >
              {t('h2Line1')}
              <br />
              {t('h2Line2')}
            </h2>

            {/* 2 CTAs sotto. Su mobile diventano molto piccole per stare nel
                vano stretto. Stack verticale per economizzare larghezza. */}
            <div
              className="flex flex-col items-center gap-1.5 sm:gap-2 mt-3 sm:mt-5 lg:mt-6 w-full"
              style={{maxWidth: '90%'}}
            >
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-accent hover:bg-accent-hover px-3 sm:px-4 lg:px-5 transition-all duration-200 whitespace-nowrap"
                style={{
                  color: 'var(--cream-on-dark)',
                  padding: 'clamp(4px, 0.75vw, 10px) clamp(10px, 1.6vw, 22px)',
                  fontSize: 'clamp(8px, 0.85vw, 12px)',
                  letterSpacing: '0.16em',
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
                className="inline-flex items-center rounded-full border border-cream-on-dark/40 hover:border-cream-on-dark/70 hover:bg-cream-on-dark/8 transition-colors whitespace-nowrap tabular-nums"
                style={{
                  color: 'var(--cream-on-dark)',
                  padding: 'clamp(3px, 0.65vw, 9px) clamp(10px, 1.5vw, 20px)',
                  fontSize: 'clamp(7px, 0.78vw, 11px)',
                  letterSpacing: '0.14em',
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
