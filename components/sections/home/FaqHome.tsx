'use client';

import {useState} from 'react';
import {motion, AnimatePresence, useReducedMotion} from 'motion/react';

// FaqHome — sezione FAQ reintegrata (Audit SEO P0.3). Il vecchio sito aveva
// 3 FAQ keyword-dense marcate [PRESERVE] che generavano rich-snippet in SERP;
// erano sparite dalla home Next.js. Reintegrate con FAQPage schema (montato
// lato server in page.tsx) + questo accordion accessibile.
// Penultima sezione della home (prima del CTA finale), su richiesta cliente.

type FaqItem = {q: string; a: string};

export function FaqHome({h2, items}: {h2: string; items: readonly FaqItem[]}) {
  // Prima FAQ aperta di default: dà subito contenuto visibile + indicizzabile.
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section className="bg-canvas-deep py-24 sm:py-32">
      <div className="mx-auto max-w-(--container-narrow) px-6 sm:px-10">
        <h2
          className="font-display text-display-sm sm:text-display-md font-light text-ink leading-[1.1] mb-12 sm:mb-16 max-w-[18ch]"
          style={{fontStretch: '95%'}}
        >
          {h2}
        </h2>

        <ul className="border-t border-[var(--border-strong)]">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={i} className="border-b border-[var(--border-strong)]">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-6 py-6 sm:py-7 text-left"
                  >
                    <span
                      className="font-display text-[20px] sm:text-[24px] font-light text-ink leading-[1.3]"
                      style={{fontStretch: '97%'}}
                    >
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 mt-1 text-accent text-[24px] leading-none transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduce ? false : {height: 0, opacity: 0}}
                      animate={{height: 'auto', opacity: 1}}
                      exit={reduce ? undefined : {height: 0, opacity: 0}}
                      transition={{duration: 0.4, ease: [0.16, 1, 0.3, 1]}}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 sm:pb-7 pr-8 sm:pr-12 text-[16px] sm:text-[17px] leading-[1.65] text-ink-soft max-w-[60ch]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
