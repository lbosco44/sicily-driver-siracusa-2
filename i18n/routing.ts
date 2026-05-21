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
    '/tour-etna': {
      it: '/tour-etna',
      en: '/etna-tour'
    },
    '/tour-ortigia-taormina': {
      it: '/tour-ortigia-taormina',
      en: '/ortigia-taormina-tour'
    },
    '/wedding-eventi': {
      it: '/wedding-eventi',
      en: '/weddings'
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
