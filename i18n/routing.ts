import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['it', 'en', 'fr'],
  defaultLocale: 'it',
  // as-needed: l'italiano (default) è servito SENZA prefisso sulla root /
  // (/, /chi-siamo, /servizi…), l'inglese su /en. La root torna a essere la
  // pagina IT vera e indicizzabile = URL storico che ranka per
  // 'taxi siracusa'/'ncc siracusa'. (Audit SEO P0.1)
  localePrefix: {
    mode: 'as-needed'
  },
  // localeDetection false: nessun auto-redirect per cookie/Accept-Language.
  // La root / serve sempre l'italiano; l'utente cambia lingua con lo switcher
  // e gli hreflang dicono a Google quale versione mostrare a chi cerca.
  // Rimuove l'anti-pattern geo-redirect. (Audit SEO P0.2)
  localeDetection: false,
  pathnames: {
    '/': '/',
    '/chi-siamo': {
      it: '/chi-siamo',
      en: '/about',
      fr: '/a-propos'
    },
    '/servizi': {
      it: '/servizi',
      en: '/services',
      fr: '/services'
    },
    '/contatti': {
      it: '/contatti',
      en: '/contact',
      fr: '/contact'
    },
    '/tour-sicilia': {
      it: '/tour-sicilia',
      en: '/sicily-tours',
      fr: '/tours-sicile'
    },
    '/transfer-aeroporti-porti-sicilia': {
      it: '/transfer-aeroporti-porti-sicilia',
      en: '/sicily-airport-port-transfers',
      fr: '/transferts-aeroports-ports-sicile'
    },
    '/transfer-catania-siracusa': {
      it: '/transfer-catania-siracusa',
      en: '/catania-syracuse-transfer',
      fr: '/transfert-catane-syracuse'
    },
    '/transfer-catania-noto': {
      it: '/transfer-catania-noto',
      en: '/catania-noto-transfer',
      fr: '/transfert-catane-noto'
    },
    '/transfer-catania-taormina': {
      it: '/transfer-catania-taormina',
      en: '/catania-taormina-transfer',
      fr: '/transfert-catane-taormine'
    },
    '/transfer-pozzallo-siracusa': {
      it: '/transfer-pozzallo-siracusa',
      en: '/pozzallo-syracuse-transfer',
      fr: '/transfert-pozzallo-syracuse'
    },
    '/tour-barocco': {
      it: '/tour-barocco',
      en: '/baroque-tour',
      fr: '/tour-baroque'
    },
    '/tour/etna-premium': {
      it: '/tour/etna-premium',
      en: '/tour/etna-premium',
      fr: '/tour/etna-premium'
    },
    '/tour/isola-delle-correnti': {
      it: '/tour/isola-delle-correnti',
      en: '/tour/isola-delle-correnti',
      fr: '/tour/isola-delle-correnti'
    },
    '/tour/dolce-vita-siracusa': {
      it: '/tour/dolce-vita-siracusa',
      en: '/tour/dolce-vita-siracusa',
      fr: '/tour/dolce-vita-siracusa'
    },
    '/tour/silent-sailing': {
      it: '/tour/silent-sailing',
      en: '/tour/silent-sailing',
      fr: '/tour/silent-sailing'
    },
    '/wedding': {
      it: '/wedding',
      en: '/weddings',
      fr: '/mariages'
    },
    '/partner': {
      it: '/partner',
      en: '/partners',
      fr: '/partenaires'
    },
    '/ncc-catania': {
      it: '/ncc-catania',
      en: '/driver-catania',
      fr: '/chauffeur-catane'
    },
    '/ncc-noto': {
      it: '/ncc-noto',
      en: '/driver-noto',
      fr: '/chauffeur-noto'
    },
    '/ncc-taormina': {
      it: '/ncc-taormina',
      en: '/driver-taormina',
      fr: '/chauffeur-taormine'
    },
    '/ncc-ragusa': {
      it: '/ncc-ragusa',
      en: '/driver-ragusa',
      fr: '/chauffeur-raguse'
    },
    '/privacy': {
      it: '/privacy',
      en: '/privacy',
      fr: '/privacy'
    }
  }
});

export type Locale = (typeof routing.locales)[number];
