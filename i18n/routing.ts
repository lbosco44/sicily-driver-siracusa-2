import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['it', 'en'],
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
      en: '/about'
    },
    '/servizi': {
      it: '/servizi',
      en: '/services'
    },
    '/contatti': {
      it: '/contatti',
      en: '/contact'
    },
    '/tour-sicilia': {
      it: '/tour-sicilia',
      en: '/sicily-tours'
    },
    '/transfer-aeroporti-porti-sicilia': {
      it: '/transfer-aeroporti-porti-sicilia',
      en: '/sicily-airport-port-transfers'
    },
    '/tour-barocco': {
      it: '/tour-barocco',
      en: '/baroque-tour'
    },
    '/tour/etna-premium': {
      it: '/tour/etna-premium',
      en: '/tour/etna-premium'
    },
    '/tour/isola-delle-correnti': {
      it: '/tour/isola-delle-correnti',
      en: '/tour/isola-delle-correnti'
    },
    '/tour/dolce-vita-siracusa': {
      it: '/tour/dolce-vita-siracusa',
      en: '/tour/dolce-vita-siracusa'
    },
    '/tour/silent-sailing': {
      it: '/tour/silent-sailing',
      en: '/tour/silent-sailing'
    },
    '/wedding': {
      it: '/wedding',
      en: '/weddings'
    },
    '/partner': {
      it: '/partner',
      en: '/partners'
    },
    '/ncc-catania': {
      it: '/ncc-catania',
      en: '/driver-catania'
    },
    '/ncc-noto': {
      it: '/ncc-noto',
      en: '/driver-noto'
    },
    '/ncc-taormina': {
      it: '/ncc-taormina',
      en: '/driver-taormina'
    },
    '/ncc-ragusa': {
      it: '/ncc-ragusa',
      en: '/driver-ragusa'
    },
    '/privacy': {
      it: '/privacy',
      en: '/privacy'
    }
  }
});

export type Locale = (typeof routing.locales)[number];
