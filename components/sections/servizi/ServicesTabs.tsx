'use client';

import {useState} from 'react';
import {Link} from '@/i18n/navigation';
import {motion, AnimatePresence, useReducedMotion} from 'motion/react';

// ServicesTabs — pattern "tabbed product overview" stile Apple/Stripe.
// 4 servizi mostrati come tab orizzontali in alto; il pannello attivo
// renderizza il content del servizio selezionato.
// Vantaggi: -75% verticale rispetto a 4 card stacked, +interattivita',
// pattern unico rispetto al bento usato altrove sul sito.
//
// Cliente 28/05/2026 esplicitamente: "non usare 4 schede 2x2 con
// numerazione 01 02 03 04 come sempre, cerca qualcosa di particolare
// nelle libraries". Tabs e' diverso dal bento.

export type ServiceItem = {
  key: string;
  kicker: string;
  title: string;
  body: string;
  points: readonly string[];
  cta: string;
  href:
    | '/ncc-catania'
    | '/tour-sicilia'
    | '/wedding'
    | '/contatti';
};

export function ServicesTabs({services}: {services: readonly ServiceItem[]}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduce = useReducedMotion();
  const current = services[activeIndex];

  return (
    <div>
      {/* Tab pills row — design "button-like" per essere chiaramente
          cliccabili (cliente 28/05/2026: precedente sembrava poco
          riconoscibile come interattivo).
          Pattern: pill rotonde, attiva = bg-accent + cream text,
          inattive = border + ink, hover = border-accent. Stesso
          linguaggio usato altrove sul sito per CTAs. */}
      <div
        className="flex flex-wrap gap-2 sm:gap-3 overflow-x-auto scrollbar-hidden -mx-6 px-6 sm:-mx-10 sm:px-10 lg:mx-0 lg:px-0 pb-2"
        role="tablist"
      >
        {services.map((s, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={s.key}
              onClick={() => setActiveIndex(i)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`service-panel-${s.key}`}
              id={`service-tab-${s.key}`}
              className={`relative flex-shrink-0 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-[12px] sm:text-[13px] uppercase tracking-[0.14em] font-medium transition-all duration-200 whitespace-nowrap ${
                isActive
                  ? 'bg-accent text-cream-on-dark border-2 border-accent'
                  : 'bg-transparent text-ink border-2 border-[var(--border-strong)] hover:border-accent hover:text-accent'
              }`}
            >
              {s.title}
            </button>
          );
        })}
      </div>

      {/* Active panel: content del servizio selezionato.
          AnimatePresence per cross-fade smooth tra tab. */}
      <div className="mt-10 sm:mt-14 lg:mt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            role="tabpanel"
            id={`service-panel-${current.key}`}
            aria-labelledby={`service-tab-${current.key}`}
            initial={reduce ? false : {opacity: 0, y: 12}}
            animate={{opacity: 1, y: 0}}
            exit={reduce ? undefined : {opacity: 0, y: -8}}
            transition={{duration: 0.4, ease: [0.16, 1, 0.3, 1]}}
            className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16"
          >
            {/* Left col: title big */}
            <div>
              <h4
                className="font-display text-display-sm sm:text-display-md font-light text-ink leading-[1.05]"
                style={{fontStretch: '95%'}}
              >
                {current.title}
              </h4>
              <Link
                href={current.href}
                className="group inline-flex items-center gap-3 mt-7 sm:mt-9 rounded-full bg-accent hover:bg-accent-hover px-7 py-3 text-[12px] uppercase tracking-[0.16em] font-medium text-cream-on-dark transition-all duration-200 self-start"
              >
                {current.cta}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>

            {/* Right col: body + bullets */}
            <div>
              <p className="text-[17px] sm:text-[18px] leading-[1.65] text-ink-soft mb-7 sm:mb-9 max-w-[58ch]">
                {current.body}
              </p>
              <ul className="space-y-3 text-[15px] sm:text-[16px] text-ink/75">
                {current.points.map((p, j) => (
                  <li key={j} className="flex gap-3 leading-[1.55]">
                    <span aria-hidden="true" className="text-accent mt-0.5">
                      —
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
