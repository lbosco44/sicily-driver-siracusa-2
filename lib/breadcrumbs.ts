// Helper centralizzato per BreadcrumbList JSON-LD su tutte le pagine secondarie.
// URL coerenti con next-intl pathnames (canonical: /it/..., /en/...).

import type {Locale} from './cities';

type PageKey =
  | 'ncc-catania'
  | 'ncc-noto'
  | 'ncc-taormina'
  | 'ncc-ragusa'
  | 'servizi'
  | 'chi-siamo'
  | 'contatti'
  | 'tour-sicilia'
  | 'tour-barocco'
  | 'tour/etna-premium'
  | 'tour/isola-delle-correnti'
  | 'tour/dolce-vita-siracusa'
  | 'tour/silent-sailing'
  | 'wedding'
  | 'partner';

type Labels = {
  home: string;
  services: string;
  tours: string;
  about: string;
  contact: string;
  ncc: string;
  wedding: string;
  partner: string;
};

const LABELS_IT: Labels = {
  home: 'Home',
  services: 'Servizi',
  tours: 'Tour',
  about: 'Chi siamo',
  contact: 'Contatti',
  ncc: 'NCC città',
  wedding: 'Wedding',
  partner: 'Partner'
};

const LABELS_EN: Labels = {
  home: 'Home',
  services: 'Services',
  tours: 'Tours',
  about: 'About',
  contact: 'Contact',
  ncc: 'City driver',
  wedding: 'Weddings',
  partner: 'Partners'
};

// Map page → URL canonica per locale (matches i18n routing.ts pathnames)
const PATH: Record<PageKey, {it: string; en: string}> = {
  'ncc-catania': {it: '/it/ncc-catania', en: '/en/driver-catania'},
  'ncc-noto': {it: '/it/ncc-noto', en: '/en/driver-noto'},
  'ncc-taormina': {it: '/it/ncc-taormina', en: '/en/driver-taormina'},
  'ncc-ragusa': {it: '/it/ncc-ragusa', en: '/en/driver-ragusa'},
  servizi: {it: '/it/servizi', en: '/en/services'},
  'chi-siamo': {it: '/it/chi-siamo', en: '/en/about'},
  contatti: {it: '/it/contatti', en: '/en/contact'},
  'tour-sicilia': {it: '/it/tour-sicilia', en: '/en/sicily-tours'},
  'tour-barocco': {it: '/it/tour-barocco', en: '/en/baroque-tour'},
  'tour/etna-premium': {
    it: '/it/tour/etna-premium',
    en: '/en/tour/etna-premium'
  },
  'tour/isola-delle-correnti': {
    it: '/it/tour/isola-delle-correnti',
    en: '/en/tour/isola-delle-correnti'
  },
  'tour/dolce-vita-siracusa': {
    it: '/it/tour/dolce-vita-siracusa',
    en: '/en/tour/dolce-vita-siracusa'
  },
  'tour/silent-sailing': {
    it: '/it/tour/silent-sailing',
    en: '/en/tour/silent-sailing'
  },
  wedding: {it: '/it/wedding', en: '/en/weddings'},
  partner: {it: '/it/partner', en: '/en/partners'}
};

// Returns the breadcrumb trail (last item is current page).
export function getBreadcrumb(
  page: PageKey,
  locale: Locale,
  currentName: string
): {name: string; url: string}[] {
  const L = locale === 'it' ? LABELS_IT : LABELS_EN;
  const prefix = `/${locale}`;
  const home = {name: L.home, url: prefix};
  const here = {name: currentName, url: PATH[page][locale]};

  // Pagine NCC: Home > NCC città > {città}
  if (page.startsWith('ncc-')) {
    return [home, {name: L.ncc, url: prefix}, here];
  }
  // Pagine tour dedicate (sotto /tour/): Home > Tour > {tour}
  if (
    page === 'tour-barocco' ||
    page.startsWith('tour/')
  ) {
    return [
      home,
      {name: L.tours, url: PATH['tour-sicilia'][locale]},
      here
    ];
  }
  // Tutte le altre: Home > {pagina}
  return [home, here];
}
