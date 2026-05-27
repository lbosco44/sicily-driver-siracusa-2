'use client';

import {useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'motion/react';

// Manifesto — rielaborato 27/05/2026.
// Vecchio: 2 paragrafi body lunghi (~180 parole) keyword-dense come muro
// di testo sotto un h2 gigante. Cliente: "muro di testo, troppo testo,
// cambia layout/estetica".
//
// Nuovo: H2 invariato (SEO + claim), poi una lead di 1 riga, poi 3 righe
// editoriali numerate (01 / 02 / 03) ognuna con titolo + 2-3 frasi di
// descrizione. Layout magazine-style, scannable, ritmato. Le keyword SEO
// preservate (aeroporti, porti, van di lusso, modelli Mercedes, Barocco,
// Etna, Ortigia, Taormina, matrimoni, eventi aziendali) sono distribuite
// nelle 3 righe → SEO equivalente con metà del testo visibile.
//
// Stile righe: large display italic number a sinistra (col-span-12 mobile,
// col-span-2 desktop) + content a destra (col-span-10). Border-t divider
// tra righe. Numeri in terracotta accent.

export function Manifesto() {
  const t = useTranslations('Home.manifesto');
  const reduce = useReducedMotion();

  const rows = [
    {
      number: t('row1Number'),
      title: t('row1Title'),
      body: t('row1Body')
    },
    {
      number: t('row2Number'),
      title: t('row2Title'),
      body: t('row2Body')
    },
    {
      number: t('row3Number'),
      title: t('row3Title'),
      body: t('row3Body')
    }
  ];

  return (
    <section className="bg-canvas py-20 sm:py-24">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        <motion.h2
          className="font-display text-display-md sm:text-display-lg font-light text-ink max-w-[18ch] mb-8"
          style={{fontStretch: '95%'}}
          initial={reduce ? false : {opacity: 0, y: 24}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-10%'}}
          transition={{duration: 0.9, ease: [0.16, 1, 0.3, 1]}}
        >
          {t('h2')}
        </motion.h2>

        <motion.p
          className="font-display italic text-[18px] sm:text-[20px] lg:text-[22px] font-light text-ink-soft leading-[1.4] mb-12 sm:mb-14"
          style={{fontStretch: '95%'}}
          initial={reduce ? false : {opacity: 0, y: 16}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-10%'}}
          transition={{duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1]}}
        >
          {t('lead')}
        </motion.p>

        {/* Grid 3 colonne side-by-side (1 col mobile). Cliente 27/05/2026:
            "tipo 01 a sinistra, 02 a destra, falla piu' bassa, e' troppo
            ampia". 3 colonne dimezzano l'altezza verticale rispetto a 3
            righe full-width. Border-t sopra come unica linea, niente
            divider verticali tra colonne per non spezzare il rhythm. */}
        <div className="border-t border-[var(--border-strong)] pt-10 sm:pt-12 grid grid-cols-1 sm:grid-cols-3 gap-x-8 sm:gap-x-10 lg:gap-x-14 gap-y-12 sm:gap-y-0">
          {rows.map((r, i) => (
            <motion.div
              key={r.number}
              initial={reduce ? false : {opacity: 0, y: 20}}
              whileInView={reduce ? undefined : {opacity: 1, y: 0}}
              viewport={{once: true, margin: '-10%'}}
              transition={{
                duration: 0.8,
                delay: 0.1 + i * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <span
                className="font-display italic text-[44px] sm:text-[52px] lg:text-[60px] font-light text-accent leading-none block tabular-nums mb-5"
                style={{fontStretch: '95%'}}
              >
                {r.number}
              </span>
              <h3
                className="font-display text-[22px] sm:text-[24px] lg:text-[28px] font-light text-ink leading-[1.15] mb-3"
                style={{fontStretch: '95%'}}
              >
                {r.title}
              </h3>
              <p className="text-[15px] sm:text-[16px] leading-[1.6] text-ink-soft">
                {r.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
