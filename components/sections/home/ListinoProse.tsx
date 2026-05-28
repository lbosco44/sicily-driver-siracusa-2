'use client';

import {useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import {motion, useReducedMotion} from 'motion/react';
import {Check, Users} from 'lucide-react';
import {WHATSAPP_HREF} from '@/lib/contact';

// Listino — rielaborato 27/05/2026 da "prose lista" a "pricing cards".
// Ispirato a 21st.dev/community/brijr/pricing-section/pricing-four,
// adattato al nostro caso (transfer NCC, non subscription).
//
// Layout:
// - H2 + intro centrati
// - Slider passeggeri (1-8) con nota contestuale che cambia in base alla
//   selezione. Non modifica i prezzi (NCC non e' modello per-utente)
//   ma fornisce informazione utile su quale van useremo e se serve quote.
// - 4 card affiancate (1 col mobile, 2 col md, 4 col xl). Ogni card:
//   - Badge "Più richiesta" su Catania → Siracusa (la piu' venduta)
//   - Titolo tratta + subtitle
//   - Prezzo big con prefisso "a tratta, da"
//   - Features list (Durata / Van di lusso / 2 extra) con Check icon
//   - CTA "Richiedi su WhatsApp" full-width
// - Disclaimer + CTA "Preventivo personalizzato"
//
// Tutto client-side perche' lo slider e' interattivo (useState).

const ROUTES = [
  {key: 'cataniaSiracusa', popular: true},
  {key: 'cataniaTaormina', popular: false},
  {key: 'cataniaNoto', popular: false},
  {key: 'pozzalloSiracusa', popular: false}
] as const;

export function ListinoProse() {
  const t = useTranslations('Home.listino');
  const locale = useLocale();
  const reduce = useReducedMotion();
  const [passengers, setPassengers] = useState(2);
  const isLargeGroup = passengers > 4;

  return (
    <section className="bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        {/* Header centrato */}
        <motion.div
          className="text-center mb-12 sm:mb-14 max-w-2xl mx-auto"
          initial={reduce ? false : {opacity: 0, y: 24}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-10%'}}
          transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}}
        >
          <h2
            className="font-display text-display-md sm:text-display-lg font-light text-ink mb-6"
            style={{fontStretch: '95%'}}
          >
            {t('h2')}
          </h2>
          <p className="text-[16px] sm:text-[17px] leading-[1.6] text-ink-soft">
            {t('intro')}
          </p>
        </motion.div>

        {/* Passenger slider */}
        <motion.div
          className="max-w-md mx-auto mb-12 sm:mb-14"
          initial={reduce ? false : {opacity: 0, y: 16}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-10%'}}
          transition={{duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
        >
          <div className="flex items-center justify-between mb-3">
            <label
              htmlFor="passengers-slider"
              className="flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] font-medium text-secondary"
            >
              <Users size={15} strokeWidth={1.8} />
              {t('passengersLabel')}
            </label>
            <span className="font-display italic text-[20px] sm:text-[22px] font-light text-accent tabular-nums">
              {t('passengersValue', {count: passengers})}
            </span>
          </div>
          <input
            id="passengers-slider"
            type="range"
            min={1}
            max={8}
            step={1}
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
            className="w-full h-1.5 bg-[var(--border-strong)] rounded-full appearance-none cursor-pointer accent-accent"
            aria-label={t('passengersLabel')}
          />
          <p
            className={`mt-3 text-[13px] italic transition-colors ${
              isLargeGroup ? 'text-accent' : 'text-ink/55'
            }`}
          >
            {isLargeGroup ? t('passengersNoteLarge') : t('passengersNoteSmall')}
          </p>
        </motion.div>

        {/* Cards container.
            Cliente 27/05/2026: su mobile 4 card stack verticale era troppo
            lungo (~2800px scroll solo per questa sezione).
            FIX: orizzontale swipeable con CSS scroll-snap su mobile, grid
            normale su desktop.
            Tecnica:
            - <md: flex orizzontale con overflow-x-auto + snap-x mandatory
            - cards: w-[85%] flex-shrink-0 snap-center → ogni card occupa
              85% del viewport, hint della prossima visibile a destra
            - md+: grid normale come prima
            - margine negativo -mx-6/-mx-10 + padding interno per estendere
              lo scroll fino al bordo viewport (full-bleed) */}
        <div className="scrollbar-hidden flex md:grid md:grid-cols-2 xl:grid-cols-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-4 lg:gap-5 -mx-6 px-6 md:mx-0 md:px-0 pt-4 md:pt-0 pb-4 md:pb-0">
          {ROUTES.map((r, i) => {
            const features = [
              {label: t('feature1'), value: t(`${r.key}Duration`)},
              {label: t('feature2'), value: null},
              {label: t(`${r.key}Extra1`), value: null},
              {label: t(`${r.key}Extra2`), value: null}
            ];

            return (
              <motion.article
                key={r.key}
                className={`relative rounded-2xl bg-canvas-warm p-6 sm:p-7 flex flex-col transition-shadow duration-200 flex-shrink-0 w-[85%] sm:w-[60%] md:w-auto snap-center ${
                  r.popular
                    ? 'border-2 border-accent shadow-[0_10px_30px_rgba(176,94,64,0.12)]'
                    : 'border border-[var(--border-strong)]'
                }`}
                initial={reduce ? false : {opacity: 0, y: 24}}
                whileInView={reduce ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true, margin: '-10%'}}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {/* Popular badge */}
                {r.popular && (
                  <span className="absolute -top-3 left-6 inline-flex items-center px-3 py-1 rounded-full bg-accent text-cream-on-dark text-[10px] uppercase tracking-[0.18em] font-medium">
                    {t('popular')}
                  </span>
                )}

                {/* Title + subtitle */}
                <div className="mb-5">
                  <h3
                    className="font-display text-[22px] sm:text-[24px] font-medium text-ink leading-[1.15] mb-1"
                    style={{fontStretch: '95%'}}
                  >
                    {t(`${r.key}Label`)}
                  </h3>
                  <p className="text-[13px] text-ink-soft leading-tight">
                    {t(`${r.key}Subtitle`)}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-[var(--border-strong)]">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-secondary mb-1">
                    {t(`${r.key}PriceNote`)}
                  </p>
                  <p
                    className="font-display text-[40px] sm:text-[44px] font-medium text-ink leading-none tabular-nums"
                    style={{fontStretch: '92%'}}
                  >
                    {t(`${r.key}Price`)}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-7 flex-1">
                  {features.map((f, fi) => (
                    <li
                      key={fi}
                      className="flex items-start gap-2.5 text-[14px] leading-[1.45] text-ink-soft"
                    >
                      <Check
                        size={16}
                        strokeWidth={2.2}
                        className="text-accent flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>
                        {f.label}
                        {f.value && (
                          <span className="text-ink font-medium ml-1">
                            {f.value}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center px-5 py-3 rounded-full text-[12px] uppercase tracking-[0.18em] font-medium transition-colors ${
                    r.popular
                      ? 'bg-accent text-cream-on-dark hover:bg-accent-hover'
                      : 'bg-canvas border border-[var(--border-strong)] text-primary hover:border-accent hover:text-accent'
                  }`}
                >
                  {t('ctaCard')}
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* Disclaimer + CTA */}
        <motion.div
          className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 items-baseline"
          initial={reduce ? false : {opacity: 0, y: 16}}
          whileInView={reduce ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: '-10%'}}
          transition={{duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1]}}
        >
          <p className="font-display italic text-[17px] sm:text-[19px] font-light text-ink-soft leading-[1.55] max-w-[58ch]">
            {t('disclaimer')}
          </p>
          <Link
            href={`/${locale}/contatti`}
            className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-medium text-primary border-b border-accent pb-1 hover:border-accent-hover transition-colors self-start"
          >
            {t('cta')}
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
