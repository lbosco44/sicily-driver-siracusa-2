'use client';

import {useEffect, useState} from 'react';
import {Link, usePathname} from '@/i18n/navigation';
import {motion, AnimatePresence, useReducedMotion} from 'motion/react';
import {useFocusTrap} from '@/lib/useFocusTrap';

// Mobile menu drawer slide-down. Triggered da hamburger button.
// Server component Navbar passa i link e i label (già tradotti server-side).
// Su md+ il toggle è hidden (lì c'è il menu inline).

export type MobileMenuLink = {
  href: '/servizi' | '/tour-sicilia' | '/chi-siamo' | '/contatti';
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
      {/* Hamburger toggle — visibile solo mobile */}
      <button
        type="button"
        aria-label={open ? 'Chiudi menu' : 'Apri menu'}
        aria-expanded={open}
        aria-controls="mobile-menu-drawer"
        onClick={() => setOpen((v) => !v)}
        className="md:hidden inline-flex flex-col items-center justify-center w-10 h-10 -mr-2 text-ink hover:text-primary transition-colors"
      >
        <span
          aria-hidden="true"
          className={`block w-6 h-px bg-current transition-transform duration-300 origin-center ${
            open ? 'translate-y-[3px] rotate-45' : '-translate-y-[3px]'
          }`}
        />
        <span
          aria-hidden="true"
          className={`block w-6 h-px bg-current transition-transform duration-300 origin-center ${
            open ? '-translate-y-[1px] -rotate-45' : 'translate-y-[3px]'
          }`}
        />
      </button>

      {/* Drawer fullscreen */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={drawerRef}
            id="mobile-menu-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu di navigazione"
            className="md:hidden fixed inset-0 top-16 z-30 bg-canvas flex flex-col"
            initial={reduce ? false : {opacity: 0, y: -8}}
            animate={{opacity: 1, y: 0}}
            exit={reduce ? {opacity: 0} : {opacity: 0, y: -8}}
            transition={{duration: 0.3, ease: [0.16, 1, 0.3, 1]}}
          >
            <nav
              aria-label="Mobile primary"
              className="flex-1 overflow-y-auto px-6 py-8"
            >
              <ul>
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={reduce ? false : {opacity: 0, y: 8}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                      duration: 0.4,
                      delay: 0.05 + i * 0.04,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    <Link
                      href={link.href}
                      className="block py-5 font-display text-[28px] font-light text-ink leading-[1.1] tracking-tight border-b border-[var(--border)] hover:text-accent transition-colors"
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
