'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import {Link, usePathname} from '@/i18n/navigation';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription
} from '@/components/ui/sheet';

// Mobile menu — drawer side-from-right via shadcn/ui Sheet (Radix-based).
// Focus trap, ESC to close, click-outside, body-scroll-lock, ARIA: tutto
// gestito nativamente dalla primitive. Niente piu' motion custom.

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
            {links.map((link) => (
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
            ))}
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
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
