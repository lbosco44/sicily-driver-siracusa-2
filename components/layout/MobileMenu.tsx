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
import {PHONE_TEL_HREF, WHATSAPP_HREF} from '@/lib/contact';
import {TOURS_NAV} from '@/lib/tours-nav';
import type {ToursListLabels} from '@/lib/nav-types';

// Mobile menu — drawer side-from-right via shadcn/ui Sheet (Radix-based).
// Focus trap, ESC to close, click-outside, body-scroll-lock, ARIA: tutto
// gestito nativamente dalla primitive. Niente piu' motion custom.

export type MobileMenuLink = {
  href: '/' | '/servizi' | '/tour-sicilia' | '/chi-siamo' | '/contatti';
  label: string;
};

export function MobileMenu({
  links,
  toursList,
  bookLabel,
  whatsappLabel,
  callLabel,
  callValue
}: {
  links: MobileMenuLink[];
  toursList: ToursListLabels;
  bookLabel: string;
  whatsappLabel: string;
  callLabel: string;
  callValue: string;
}) {
  const [open, setOpen] = useState(false);
  const [tourExpanded, setTourExpanded] = useState(false);
  const pathname = usePathname();

  // Chiudi al cambio rotta
  useEffect(() => {
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

      <SheetContent
        side="right"
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
              priority
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
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-ink/25 px-7 py-4 text-[13px] uppercase tracking-[0.1em] font-medium text-ink hover:bg-ink hover:text-cream-on-dark transition-colors"
            >
              {whatsappLabel}
            </a>
            <a
              href={PHONE_TEL_HREF}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-3 py-4 text-[13px] uppercase tracking-[0.1em] font-medium text-ink/70 hover:text-ink transition-colors tabular-nums"
            >
              {callLabel} · {callValue}
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
