'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import {ChevronDownIcon} from 'lucide-react';
import {Link, usePathname} from '@/i18n/navigation';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription
} from '@/components/ui/sheet';
import {HomeLink} from './HomeLink';
import {LanguageSwitcher} from './LanguageSwitcher';
import {TOURS_NAV} from '@/lib/tours-nav';
import type {ToursListLabels} from '@/lib/nav-types';

// Mobile menu — drawer side-from-right via shadcn/ui Sheet (Radix-based).
// Focus trap, ESC to close, click-outside, body-scroll-lock, ARIA: tutto
// gestito nativamente dalla primitive. Niente piu' motion custom.

export type MobileMenuLink = {
  href:
    | '/'
    | '/servizi'
    | '/transfer-aeroporti-porti-sicilia'
    | '/tour-sicilia'
    | '/chi-siamo'
    | '/contatti';
  label: string;
};

export function MobileMenu({
  links,
  toursList,
  bookLabel,
  languageLabel,
  closeLabel
}: {
  links: MobileMenuLink[];
  toursList: ToursListLabels;
  bookLabel: string;
  languageLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [tourExpanded, setTourExpanded] = useState(false);
  const pathname = usePathname();

  // Chiudi al cambio rotta. setState in effect è intenzionale qui: reagiamo
  // a un valore esterno (pathname) che cambia tra i render.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Hamburger toggle — solo mobile */}
      <button
        type="button"
        aria-label="Apri menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="md:hidden inline-flex flex-col items-center justify-center w-11 h-11 -mr-2 text-ink hover:text-primary transition-colors"
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

      <SheetContent
        side="right"
        closeLabel={closeLabel}
        className="w-[min(420px,88vw)] bg-canvas p-0 border-l border-[var(--border)]"
      >
        <SheetTitle className="sr-only">Menu di navigazione</SheetTitle>
        <SheetDescription className="sr-only">
          Naviga tra le sezioni del sito Sicily Driver Siracusa
        </SheetDescription>

        {/* Header drawer: logo + X (X gestito da Sheet built-in) */}
        <div className="h-16 sm:h-20 flex items-center px-6 border-b border-[var(--border)]">
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
            />
          </Link>
        </div>

        {/* Nav links + CTAs */}
        <nav
          aria-label="Mobile primary"
          className="flex-1 overflow-y-auto px-6 py-7"
        >
          <ul>
            {links.map((link) => {
              // Tour Sicilia: espandibile con sub-link ai tour
              if (link.href === '/tour-sicilia') {
                return (
                  <li key={link.href} className="border-b border-[var(--border)]">
                    <button
                      type="button"
                      onClick={() => setTourExpanded((v) => !v)}
                      aria-expanded={tourExpanded}
                      className="w-full flex items-center justify-between py-4 font-display text-[26px] font-light text-ink leading-[1.1] tracking-tight hover:text-accent transition-colors"
                      style={{fontStretch: '95%'}}
                    >
                      <span>{link.label}</span>
                      <ChevronDownIcon
                        className={`size-5 text-ink/60 transition-transform duration-300 ${
                          tourExpanded ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {/* Sub-list espandibile con max-height transition */}
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        tourExpanded
                          ? 'grid-rows-[1fr] opacity-100 pb-2'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <ul className="overflow-hidden">
                        {TOURS_NAV.map((tour) => (
                          <li key={tour.href}>
                            <Link
                              href={tour.href}
                              onClick={() => setOpen(false)}
                              className="block py-2.5 pl-4 border-l-2 border-[var(--border)] hover:border-accent transition-colors group"
                            >
                              <p
                                className="font-display text-[18px] text-ink/85 group-hover:text-accent transition-colors leading-tight"
                                style={{fontStretch: '95%'}}
                              >
                                {toursList[tour.key]}
                              </p>
                              <p className="mt-0.5 text-[12px] text-ink/55 leading-snug">
                                {toursList[`${tour.key}Desc` as keyof ToursListLabels]}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }
              // Home: usa HomeLink che gestisce scroll-to-top anche se gia' su /
              if (link.href === '/') {
                return (
                  <li key={link.href}>
                    <HomeLink
                      className="block py-4 font-display text-[26px] font-light text-ink leading-[1.1] tracking-tight border-b border-[var(--border)] hover:text-accent transition-colors"
                      style={{fontStretch: '95%'}}
                      onNavigate={() => setOpen(false)}
                    >
                      {link.label}
                    </HomeLink>
                  </li>
                );
              }
              // Altri link: normali
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-4 font-display text-[26px] font-light text-ink leading-[1.1] tracking-tight border-b border-[var(--border)] hover:text-accent transition-colors"
                    style={{fontStretch: '95%'}}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTAs in fondo */}
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/contatti"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 text-[13px] uppercase tracking-[0.1em] font-medium text-cream-on-dark hover:bg-accent-hover transition-colors"
            >
              {bookLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Language switcher — spostato qui dalla navbar su mobile
              (cliente 10/06/2026). */}
          <div className="mt-8 pt-6 border-t border-[var(--border)] flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary">
              {languageLabel}
            </span>
            <LanguageSwitcher className="text-[14px]" />
          </div>

          {/* Instagram — spostato qui dall'header su mobile (cliente 2026-07-08). */}
          <div className="mt-6 pt-6 border-t border-[var(--border)]">
            <a
              href="https://www.instagram.com/sicilydriversyracuse?igsh=NmJrYjFuZWgyYWl0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              aria-label="Instagram Sicily Driver Syracuse"
              className="inline-flex items-center gap-3 text-ink hover:text-accent transition-colors"
            >
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-[15px]">Instagram</span>
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
