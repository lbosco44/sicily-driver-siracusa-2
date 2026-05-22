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
  | 'tour-etna'
  | 'tour-ortigia-taormina'
  | 'wedding-eventi';

type Labels = {
  home: string;
  services: string;
  tours: string;
  about: string;
  contact: string;
  ncc: string;
  driver: string;
  wedding: string;
};

const LABELS_IT: Labels = {
  home: 'Home',
  services: 'Servizi',
  tours: 'Tour',
  about: 'Chi siamo',
  contact: 'Contatti',
  ncc: 'NCC città',
  driver: 'NCC città',
  wedding: 'Wedding ed eventi'
};

const LABELS_EN: Labels = {
  home: 'Home',
  services: 'Services',
  tours: 'Tours',
  about: 'About',
  contact: 'Contact',
  ncc: 'City driver',
  driver: 'City driver',
  wedding: 'Weddings'
};

// Map page → trail (last item is the current page). URL uses canonical IT/EN.
export function getBreadcrumb(
  page: PageKey,
  locale: Locale,
  currentName: string
): {name: string; url: string}[] {
  const L = locale === 'it' ? LABELS_IT : LABELS_EN;
  const prefix = `/${locale}`;
  const home = {name: L.home, url: prefix};

  // Mappa pagina → URL canonica per locale
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
    'tour-etna': {it: '/it/tour-etna', en: '/en/etna-tour'},
    'tour-ortigia-taormina': {
      it: '/it/tour-ortigia-taormina',
      en: '/en/ortigia-taormina-tour'
    },
    'wedding-eventi': {it: '/it/wedding-eventi', en: '/en/weddings'}
  };

  const here = {name: currentName, url: PATH[page][locale]};

  // Pagine NCC: Home > NCC città > {città}
  if (page.startsWith('ncc-')) {
    return [home, {name: locale === 'it' ? L.ncc : L.driver, url: prefix}, here];
  }
  // Pagine tour dedicate: Home > Tour > {tour}
  if (
    page === 'tour-barocco' ||
    page === 'tour-etna' ||
    page === 'tour-ortigia-taormina'
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
