'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {motion, useReducedMotion} from 'motion/react';

// Interni — sezione discreta sotto-screen che mostra i dettagli dell'auto
// (bottiglia d'acqua, sedile in pelle, tablet wifi). Niente big "FLOTTA",
// niente specifiche tecniche. Solo 3 dettagli che fanno sentire la cura.
//
// Rielaborato 04/06/2026.
// Vecchio: header a due colonne (h2 a sx / body a dx → orfano), poi mosaico
// "tetris" 12-col con altezza FISSA (lg:h-[600px]) che forzava la foto acqua
// (quadrata) in una cella alta col-span-7 row-span-2 e schiacciava le due
// landscape → crop sbagliati + vuoti tipografici. Cliente: "gli spazi sono
// gestiti male, le foto pure, e il titolo è messo accanto al sottotitolo".
//
// Nuovo: header IMPILATO (h2 → body lead sotto, misura leggibile) e le tre
// foto rese come TRITTICO editoriale — tre studi verticali nello stesso
// formato 4/5 (la quadrata e le due landscape diventano finalmente un set
// coerente), sfalsati come una parete di galleria invece che incastrati in
// una griglia rigida → niente altezza forzata, niente vuoti. Caption
// promossa a chiusura editoriale con filetto terracotta.

const DETAILS = [
  {
    key: 'water',
    // Foto cliente 27/05/2026: acqua.webp (598KB, sostituisce interni-acqua.png 2.1MB)
    image: '/images/home/acqua.webp',
    // Sfalsamento desktop per ritmo "parete di galleria" (niente grid rigida)
    offset: 'lg:mt-0',
    mobileAspect: 'aspect-[4/5]'
  },
  {
    key: 'leather',
    // Foto cliente 27/05/2026: sedile.webp (374KB, sostituisce interni-sedile.png 2.2MB)
    image: '/images/home/sedile.webp',
    offset: 'lg:mt-20',
    mobileAspect: 'aspect-[16/11]'
  },
  {
    key: 'screen',
    // Foto cliente 27/05/2026: tablet.webp (455KB, sostituisce interni-tablet.png 2.0MB)
    image: '/images/home/tablet.webp',
    offset: 'lg:mt-10',
    mobileAspect: 'aspect-[16/11]'
  }
];

export function Interni() {
  const t = useTranslations('Home.interni');
  const reduce = useReducedMotion();

  return (
    <section className="bg-canvas-deep py-28 sm:py-36">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        {/* HEADER — orizzontale e compatto: h2 su una riga (desktop), body
            su ~2 righe a piena larghezza. Niente colonna stretta/orfana. */}
        <motion.div
          className="mb-14 sm:mb-20"
          initial={reduce ? false : {opacity: 0, y: 24}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-10%'}}
          transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}}
        >
          <p className="eyebrow mb-7">{t('eyebrow')}</p>
          <h2
            className="font-display text-[clamp(40px,7vw,72px)] font-light text-ink lg:whitespace-nowrap"
            style={{fontStretch: '95%'}}
          >
            {t('h2')}
          </h2>
          <p className="mt-6 text-[16px] sm:text-[17px] leading-[1.6] text-ink-soft lg:text-balance">
            {t('body')}
          </p>
        </motion.div>

        {/* TRITTICO — tre studi 4/5 sfalsati, hover-zoom (lens) leggero */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-start">
          {DETAILS.map((d, i) => (
            <motion.figure
              key={d.key}
              className={`group relative overflow-hidden rounded-sm grain ${d.mobileAspect} sm:aspect-[4/5] ${d.offset}`}
              initial={reduce ? false : {opacity: 0, y: 32}}
              whileInView={reduce ? undefined : {opacity: 1, y: 0}}
              viewport={{once: true, margin: '-10%'}}
              transition={{
                duration: 1,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <Image
                src={d.image}
                alt={t(`${d.key}Alt`)}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                loading="lazy"
                style={{filter: 'saturate(0.85) brightness(0.96) contrast(1.05)'}}
              />
            </motion.figure>
          ))}
        </div>

        {/* CHIUSURA — caption come outro editoriale, con filetto terracotta */}
        <motion.div
          className="mt-20 sm:mt-28 max-w-[46ch]"
          initial={reduce ? false : {opacity: 0, y: 16}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-10%'}}
          transition={{duration: 0.9, ease: [0.16, 1, 0.3, 1]}}
        >
          <span className="block w-12 h-px bg-accent mb-7" aria-hidden="true" />
          <p
            className="font-display italic text-[22px] sm:text-[26px] font-light text-ink leading-[1.45]"
            style={{fontStretch: '95%'}}
          >
            {t('caption')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
