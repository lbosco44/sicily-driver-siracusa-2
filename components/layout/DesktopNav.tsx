'use client';

import {Link, usePathname} from '@/i18n/navigation';
import {ChevronDownIcon} from 'lucide-react';
import {useState} from 'react';

// Desktop nav con dropdown elegante per Tour Sicilia.
// Implementazione custom hover-aware con CSS transitions (no libreria pesante).
// Pattern: hover trigger → fade-in panel con tour list + descrizioni.

export type DesktopNavLabels = {
  home: string;
  services: string;
  tours: string;
  about: string;
  contact: string;
  toursList: {
    overview: string;
    overviewDesc: string;
    barocco: string;
    baroccoDesc: string;
    etna: string;
    etnaDesc: string;
    isola: string;
    isolaDesc: string;
    dolceVita: string;
    dolceVitaDesc: string;
    sailing: string;
    sailingDesc: string;
  };
};

type TourItem = {
  href:
    | '/tour-sicilia'
    | '/tour-barocco'
    | '/tour/etna-premium'
    | '/tour/isola-delle-correnti'
    | '/tour/dolce-vita-siracusa'
    | '/tour/silent-sailing';
  label: string;
  desc: string;
};

export function DesktopNav({labels}: {labels: DesktopNavLabels}) {
  const pathname = usePathname();
  const [tourOpen, setTourOpen] = useState(false);

  const tourItems: TourItem[] = [
    {
      href: '/tour-sicilia',
      label: labels.toursList.overview,
      desc: labels.toursList.overviewDesc
    },
    {
      href: '/tour-barocco',
      label: labels.toursList.barocco,
      desc: labels.toursList.baroccoDesc
    },
    {
      href: '/tour/etna-premium',
      label: labels.toursList.etna,
      desc: labels.toursList.etnaDesc
    },
    {
      href: '/tour/isola-delle-correnti',
      label: labels.toursList.isola,
      desc: labels.toursList.isolaDesc
    },
    {
      href: '/tour/dolce-vita-siracusa',
      label: labels.toursList.dolceVita,
      desc: labels.toursList.dolceVitaDesc
    },
    {
      href: '/tour/silent-sailing',
      label: labels.toursList.sailing,
      desc: labels.toursList.sailingDesc
    }
  ];

  const isTourActive =
    pathname === '/tour-sicilia' ||
    pathname.startsWith('/tour-') ||
    pathname.startsWith('/tour/');

  return (
    <nav
      className="hidden md:flex items-center gap-8"
      aria-label="Primary"
    >
      <NavItem href="/" label={labels.home} pathname={pathname} />
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
          className={`inline-flex items-center gap-1 text-[13px] uppercase tracking-[0.08em] font-medium transition-colors ${
            isTourActive ? 'text-primary' : 'text-ink/75 hover:text-primary'
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
      className={`text-[13px] uppercase tracking-[0.08em] font-medium transition-colors ${
        isActive ? 'text-primary' : 'text-ink/75 hover:text-primary'
      }`}
    >
      {label}
    </Link>
  );
}
