'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import {Link, usePathname} from '@/i18n/navigation';
import {motion, AnimatePresence, useReducedMotion} from 'motion/react';
import {useFocusTrap} from '@/lib/useFocusTrap';

// Mobile menu — drawer full-screen solid, slide-from-right.
// Background cream pieno (niente trasparenza), header dedicato con logo + X,
// tutti i link visibili. Niente backdrop perché copre tutto.

export type MobileMenuLink = {
  href: '/' | '/servizi' | '/tour-sicilia' | '/chi-siamo' | '/contatti';
  label: string;
};

export function MobileMenu({
  links,
  bookLabel,
  whatsappLabel,
  callLabel,
  callValue
}: {
  links: MobileMenuLink[];
  bookLabel: string;
  whatsappLabel: string;
  callLabel: string;
  callValue: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const drawerRef = useFocusTrap<HTMLDivElement>(open);

  // Lock body scroll quando drawer aperto
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Chiudi al cambio rotta (utente clicca link)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      {/* Hamburger toggle — visibile solo mobile, dietro al drawer quando aperto */}
      <button
        type="button"
        aria-label="Apri menu"
        aria-expanded={open}
        aria-controls="mobile-menu-drawer"
        onClick={() => setOpen(true)}
        className="md:hidden inline-flex flex-col items-center justify-center w-10 h-10 -mr-2 text-ink hover:text-primary transition-colors"
      >
        <span
          aria-hidden="true"
          className="block w-6 h-px bg-current -translate-y-[3px]"
        />
        <span
          aria-hidden="true"
          className="block w-6 h-px bg-current translate-y-[3px]"
        />
      </button>

      {/* Drawer full-screen solid */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={drawerRef}
            id="mobile-menu-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu di navigazione"
            className="md:hidden fixed inset-0 z-50 bg-canvas flex flex-col"
            initial={reduce ? {opacity: 0} : {x: '100%'}}
            animate={reduce ? {opacity: 1} : {x: 0}}
            exit={reduce ? {opacity: 0} : {x: '100%'}}
            transition={{duration: 0.35, ease: [0.16, 1, 0.3, 1]}}
          >
            {/* Header del drawer: logo + X */}
            <div className="h-16 sm:h-20 flex items-center justify-between px-6 border-b border-[var(--border)] shrink-0">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                aria-label="Home"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/logo-nero.png"
                  alt="Sicily Driver Siracusa"
                  width={180}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Chiudi menu"
                className="w-10 h-10 -mr-2 flex items-center justify-center text-ink hover:text-accent transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 6L18 18M6 18L18 6" />
                </svg>
              </button>
            </div>

            {/* Nav links + CTAs */}
            <nav
              aria-label="Mobile primary"
              className="flex-1 overflow-y-auto px-6 py-6 sm:py-8"
            >
              <ul>
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={reduce ? false : {opacity: 0, x: 12}}
                    animate={{opacity: 1, x: 0}}
                    transition={{
                      duration: 0.35,
                      delay: 0.05 + i * 0.04,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    <Link
                      href={link.href}
                      className="block py-4 font-display text-[24px] font-light text-ink leading-[1.1] tracking-tight border-b border-[var(--border)] hover:text-accent transition-colors"
                      style={{fontStretch: '95%'}}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* CTAs in fondo */}
              <motion.div
                className="mt-8 flex flex-col gap-3"
                initial={reduce ? false : {opacity: 0, y: 8}}
                animate={{opacity: 1, y: 0}}
                transition={{
                  duration: 0.4,
                  delay: 0.05 + links.length * 0.04,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <Link
                  href="/contatti"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 text-[13px] uppercase tracking-[0.1em] font-medium text-cream-on-dark hover:bg-accent-hover transition-colors"
                >
                  {bookLabel}
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  href="https://wa.me/393756413379"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-ink/25 px-7 py-4 text-[13px] uppercase tracking-[0.1em] font-medium text-ink hover:bg-ink hover:text-cream-on-dark transition-colors"
                >
                  {whatsappLabel}
                </a>
                <a
                  href="tel:+393756413379"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-3 py-4 text-[13px] uppercase tracking-[0.1em] font-medium text-ink/70 hover:text-ink transition-colors tabular-nums"
                >
                  {callLabel} · {callValue}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
