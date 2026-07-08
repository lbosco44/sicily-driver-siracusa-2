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
  | 'transfer-aeroporti-porti-sicilia'
  | 'transfer-catania-siracusa'
  | 'transfer-catania-noto'
  | 'transfer-catania-taormina'
  | 'transfer-pozzallo-siracusa'
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
  transfer: string;
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
  transfer: 'Transfer',
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
  transfer: 'Transfers',
  wedding: 'Weddings',
  partner: 'Partners'
};

const LABELS_FR: Labels = {
  home: 'Accueil',
  services: 'Services',
  tours: 'Circuits',
  about: 'À propos',
  contact: 'Contact',
  ncc: 'Chauffeur par ville',
  transfer: 'Transferts',
  wedding: 'Mariages',
  partner: 'Partenaires'
};

// Map page → URL canonica per locale (matches i18n routing.ts pathnames)
const PATH: Record<PageKey, {it: string; en: string; fr: string}> = {
  'ncc-catania': {it: '/ncc-catania', en: '/en/driver-catania', fr: '/fr/chauffeur-catane'},
  'ncc-noto': {it: '/ncc-noto', en: '/en/driver-noto', fr: '/fr/chauffeur-noto'},
  'ncc-taormina': {it: '/ncc-taormina', en: '/en/driver-taormina', fr: '/fr/chauffeur-taormine'},
  'ncc-ragusa': {it: '/ncc-ragusa', en: '/en/driver-ragusa', fr: '/fr/chauffeur-raguse'},
  servizi: {it: '/servizi', en: '/en/services', fr: '/fr/services'},
  'chi-siamo': {it: '/chi-siamo', en: '/en/about', fr: '/fr/a-propos'},
  contatti: {it: '/contatti', en: '/en/contact', fr: '/fr/contact'},
  'tour-sicilia': {it: '/tour-sicilia', en: '/en/sicily-tours', fr: '/fr/tours-sicile'},
  'transfer-aeroporti-porti-sicilia': {
    it: '/transfer-aeroporti-porti-sicilia',
    en: '/en/sicily-airport-port-transfers',
    fr: '/fr/transferts-aeroports-ports-sicile'
  },
  'transfer-catania-siracusa': {
    it: '/transfer-catania-siracusa',
    en: '/en/catania-syracuse-transfer',
    fr: '/fr/transfert-catane-syracuse'
  },
  'transfer-catania-noto': {
    it: '/transfer-catania-noto',
    en: '/en/catania-noto-transfer',
    fr: '/fr/transfert-catane-noto'
  },
  'transfer-catania-taormina': {
    it: '/transfer-catania-taormina',
    en: '/en/catania-taormina-transfer',
    fr: '/fr/transfert-catane-taormine'
  },
  'transfer-pozzallo-siracusa': {
    it: '/transfer-pozzallo-siracusa',
    en: '/en/pozzallo-syracuse-transfer',
    fr: '/fr/transfert-pozzallo-syracuse'
  },
  'tour-barocco': {it: '/tour-barocco', en: '/en/baroque-tour', fr: '/fr/tour-baroque'},
  'tour/etna-premium': {
    it: '/tour/etna-premium',
    en: '/en/tour/etna-premium',
    fr: '/fr/tour/etna-premium'
  },
  'tour/isola-delle-correnti': {
    it: '/tour/isola-delle-correnti',
    en: '/en/tour/isola-delle-correnti',
    fr: '/fr/tour/isola-delle-correnti'
  },
  'tour/dolce-vita-siracusa': {
    it: '/tour/dolce-vita-siracusa',
    en: '/en/tour/dolce-vita-siracusa',
    fr: '/fr/tour/dolce-vita-siracusa'
  },
  'tour/silent-sailing': {
    it: '/tour/silent-sailing',
    en: '/en/tour/silent-sailing',
    fr: '/fr/tour/silent-sailing'
  },
  wedding: {it: '/wedding', en: '/en/weddings', fr: '/fr/mariages'},
  partner: {it: '/partner', en: '/en/partners', fr: '/fr/partenaires'}
};

// Returns the breadcrumb trail (last item is current page).
export function getBreadcrumb(
  page: PageKey,
  locale: Locale,
  currentName: string
): {name: string; url: string}[] {
  const L = locale === 'it' ? LABELS_IT : locale === 'fr' ? LABELS_FR : LABELS_EN;
  // IT su root (no prefisso), EN su /en, FR su /fr. (Audit SEO P0.1)
  const prefix = locale === 'it' ? '/' : `/${locale}`;
  const home = {name: L.home, url: prefix};
  const here = {name: currentName, url: PATH[page][locale] ?? PATH[page].it};

  // Pagine NCC: Home > NCC città > {città}
  if (page.startsWith('ncc-')) {
    return [home, {name: L.ncc, url: prefix}, here];
  }
  // Pagine tratta transfer: Home > Transfer (pagina-madre) > {tratta}
  if (page.startsWith('transfer-') && page !== 'transfer-aeroporti-porti-sicilia') {
    return [
      home,
      {name: L.transfer, url: PATH['transfer-aeroporti-porti-sicilia'][locale] ?? PATH['transfer-aeroporti-porti-sicilia'].it},
      here
    ];
  }
  // Pagine tour dedicate (sotto /tour/): Home > Tour > {tour}
  if (
    page === 'tour-barocco' ||
    page.startsWith('tour/')
  ) {
    return [
      home,
      {name: L.tours, url: PATH['tour-sicilia'][locale] ?? PATH['tour-sicilia'].it},
      here
    ];
  }
  // Tutte le altre: Home > {pagina}
  return [home, here];
}
