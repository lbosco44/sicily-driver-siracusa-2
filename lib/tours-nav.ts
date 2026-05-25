// Single source of truth per la lista tour mostrata nei menu di navigazione.
// Usata da: DesktopNav (dropdown), MobileMenu (sezione espandibile), Footer.

export type TourNavKey =
  | 'overview'
  | 'barocco'
  | 'etna'
  | 'isola'
  | 'dolceVita'
  | 'sailing';

export type TourNavHref =
  | '/tour-sicilia'
  | '/tour-barocco'
  | '/tour/etna-premium'
  | '/tour/isola-delle-correnti'
  | '/tour/dolce-vita-siracusa'
  | '/tour/silent-sailing';

export type TourNavEntry = {
  href: TourNavHref;
  key: TourNavKey;
};

// Ordine usato in nav menu: hub prima (Tutti i tour), poi i 5 tour
export const TOURS_NAV: readonly TourNavEntry[] = [
  {href: '/tour-sicilia', key: 'overview'},
  {href: '/tour-barocco', key: 'barocco'},
  {href: '/tour/etna-premium', key: 'etna'},
  {href: '/tour/isola-delle-correnti', key: 'isola'},
  {href: '/tour/dolce-vita-siracusa', key: 'dolceVita'},
  {href: '/tour/silent-sailing', key: 'sailing'}
] as const;

// Solo i 5 tour, senza la hub page. Usata nel Footer dove "Tour Sicilia" è già altrove.
export const TOURS_NAV_NO_HUB: readonly TourNavEntry[] = TOURS_NAV.filter(
  (t) => t.key !== 'overview'
);
