'use client';

import {Link, usePathname} from '@/i18n/navigation';
import {ChevronDownIcon} from 'lucide-react';
import {useState} from 'react';
import {HomeLink} from './HomeLink';
import {TOURS_NAV} from '@/lib/tours-nav';
import type {NavLabels} from '@/lib/nav-types';

// Desktop nav con dropdown elegante per Tour Sicilia.
// Implementazione custom hover-aware con CSS transitions (no libreria pesante).
// Pattern: hover trigger → fade-in panel con tour list + descrizioni.

export function DesktopNav({labels}: {labels: NavLabels}) {
  const pathname = usePathname();
  const [tourOpen, setTourOpen] = useState(false);

  // Costruisci tour items lookup-ando i label/desc tradotti dal map TOURS_NAV
  const tourItems = TOURS_NAV.map((t) => ({
    href: t.href,
    label: labels.toursList[t.key],
    desc: labels.toursList[`${t.key}Desc` as keyof typeof labels.toursList]
  }));

  const isTourActive =
    pathname === '/tour-sicilia' ||
    pathname.startsWith('/tour-') ||
    pathname.startsWith('/tour/');

  return (
    <nav
      className="hidden md:flex items-center gap-8"
      aria-label="Primary"
    >
      <HomeLink
        className={`inline-flex items-center h-5 text-[13px] uppercase tracking-[0.08em] font-medium leading-none transition-colors ${
          pathname === '/'
            ? 'text-accent'
            : 'text-ink/75 hover:text-accent'
        }`}
      >
        {labels.home}
      </HomeLink>
      <NavItem href="/servizi" label={labels.services} pathname={pathname} />

      {/* Tour Sicilia con dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setTourOpen(true)}
        onMouseLeave={() => setTourOpen(false)}
      >
        <Link
          href="/tour-sicilia"
          onFocus={() => setTourOpen(true)}
          aria-expanded={tourOpen}
          aria-haspopup="true"
          className={`inline-flex items-center gap-1 h-5 text-[13px] uppercase tracking-[0.08em] font-medium leading-none transition-colors ${
            isTourActive ? 'text-accent' : 'text-ink/75 hover:text-accent'
          }`}
        >
          {labels.tours}
          <ChevronDownIcon
            className={`size-3 transition-transform duration-300 ${
              tourOpen ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </Link>

        {/* Dropdown panel */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 ${
            tourOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="w-[560px] bg-canvas rounded-2xl border border-[var(--border)] shadow-xl shadow-ink/10 overflow-hidden">
            <ul className="grid grid-cols-2 gap-1 p-3">
              {tourItems.map((tour, i) => {
                const isFirst = i === 0;
                return (
                  <li key={tour.href} className={isFirst ? 'col-span-2' : ''}>
                    <Link
                      href={tour.href}
                      onClick={() => setTourOpen(false)}
                      className={`block rounded-lg p-4 transition-colors hover:bg-canvas-deep group ${
                        isFirst
                          ? 'bg-canvas-warm/40 hover:bg-canvas-warm/60'
                          : ''
                      }`}
                    >
                      <p
                        className={`font-display font-medium text-ink leading-tight transition-colors group-hover:text-accent ${
                          isFirst
                            ? 'text-[20px] italic'
                            : 'text-[15px]'
                        }`}
                        style={{fontStretch: '95%'}}
                      >
                        {tour.label}
                      </p>
                      <p className="mt-1 text-[12px] text-ink/60 leading-snug">
                        {tour.desc}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <NavItem href="/chi-siamo" label={labels.about} pathname={pathname} />
      <NavItem href="/contatti" label={labels.contact} pathname={pathname} />
    </nav>
  );
}

type NavItemHref = '/' | '/servizi' | '/chi-siamo' | '/contatti';

function NavItem({
  href,
  label,
  pathname
}: {
  href: NavItemHref;
  label: string;
  pathname: string;
}) {
  // Per Home (/), match esatto (altrimenti matcherebbe ogni pagina).
  // Per le altre, prefix match per supportare sub-pagine.
  const isActive =
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={`inline-flex items-center h-5 text-[13px] uppercase tracking-[0.08em] font-medium leading-none transition-colors ${
        isActive ? 'text-accent' : 'text-ink/75 hover:text-accent'
      }`}
    >
      {label}
    </Link>
  );
}
