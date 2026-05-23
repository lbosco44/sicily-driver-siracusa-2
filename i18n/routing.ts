import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['it', 'en'],
  defaultLocale: 'it',
  localePrefix: {
    mode: 'always'
  },
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
    }
  }
});

export type Locale = (typeof routing.locales)[number];
