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
    <section className="bg-canvas py-28 sm:py-36">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        <motion.h2
          className="font-display text-display-lg font-light text-ink max-w-[18ch] mb-10 sm:mb-12"
          style={{fontStretch: '95%'}}
          initial={reduce ? false : {opacity: 0, y: 24}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-10%'}}
          transition={{duration: 0.9, ease: [0.16, 1, 0.3, 1]}}
        >
          {t('h2')}
        </motion.h2>

        <motion.p
          className="font-display italic text-[22px] sm:text-[26px] font-light text-ink-soft max-w-[42ch] leading-[1.4] mb-16 sm:mb-20"
          style={{fontStretch: '95%'}}
          initial={reduce ? false : {opacity: 0, y: 16}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-10%'}}
          transition={{duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1]}}
        >
          {t('lead')}
        </motion.p>

        <ul className="border-t border-[var(--border-strong)]">
          {rows.map((r, i) => (
            <motion.li
              key={r.number}
              className="border-b border-[var(--border-strong)] grid grid-cols-1 lg:grid-cols-12 gap-x-8 lg:gap-x-12 gap-y-3 lg:gap-y-0 py-10 sm:py-12"
              initial={reduce ? false : {opacity: 0, y: 20}}
              whileInView={reduce ? undefined : {opacity: 1, y: 0}}
              viewport={{once: true, margin: '-10%'}}
              transition={{
                duration: 0.8,
                delay: 0.1 + i * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {/* Numero italico large terracotta — colonna sx desktop,
                  inline top mobile */}
              <div className="lg:col-span-2">
                <span
                  className="font-display italic text-[56px] sm:text-[72px] lg:text-[80px] font-light text-accent leading-none block tabular-nums"
                  style={{fontStretch: '95%'}}
                >
                  {r.number}
                </span>
              </div>

              {/* Title + body — colonna dx desktop, sotto numero mobile */}
              <div className="lg:col-span-10 lg:pl-4">
                <h3
                  className="font-display text-[28px] sm:text-[36px] lg:text-[40px] font-light text-ink leading-[1.1] mb-4"
                  style={{fontStretch: '95%'}}
                >
                  {r.title}
                </h3>
                <p className="text-[17px] sm:text-[18px] leading-[1.65] text-ink-soft max-w-[58ch]">
                  {r.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* Body legacy nascosto per SEO. NextIntl renderizza solo se
            chiamato, quindi non vengono renderizzati. Restano nei
            messages.json per backward compat / revert facile. */}
      </div>
    </section>
  );
}
