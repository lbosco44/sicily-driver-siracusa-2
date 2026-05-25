import {PHONE_DISPLAY, EMAIL} from './contact';

type FaqItem = {q: string; a: string};
type BreadcrumbItem = {name: string; url: string};

const PHONE = PHONE_DISPLAY;
const URL_BASE = 'https://ncctaxisiracusa.com';

// 3 sedi fisiche del cliente (Brief/SEO.md §10 dati raccolti)
const LOCATIONS = [
  {
    '@type': 'Place',
    name: 'Sicily Driver Siracusa — sede principale',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via della Maestranza, 28',
      addressLocality: 'Siracusa',
      postalCode: '96100',
      addressRegion: 'SR',
      addressCountry: 'IT'
    }
  },
  {
    '@type': 'Place',
    name: 'Sicily Driver Siracusa — sede Noto',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Alcide De Gasperi, 15',
      addressLocality: 'Noto',
      postalCode: '96017',
      addressRegion: 'SR',
      addressCountry: 'IT'
    }
  },
  {
    '@type': 'Place',
    name: 'Sicily Driver Siracusa — sede Marzamemi',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Marzamemi, 23',
      addressLocality: 'Marzamemi',
      postalCode: '96018',
      addressRegion: 'SR',
      addressCountry: 'IT'
    }
  }
];

export function localBusinessSchema(locale: 'it' | 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TaxiService'],
    '@id': `${URL_BASE}#localbusiness`,
    name: 'Sicily Driver Siracusa',
    description:
      locale === 'it'
        ? 'NCC privato e tour della Sicilia orientale. Transfer aeroporti Catania, Comiso, Palermo, Trapani. Tour Barocco, Etna, Ortigia, Taormina con Mercedes Classe V, GLB Premium, Classe E.'
        : 'Private NCC and private tours across eastern Sicily. Airport transfers from Catania, Comiso, Palermo, Trapani. Baroque, Etna, Ortigia, Taormina tours with Mercedes Class V, GLB Premium, Class E.',
    url: locale === 'it' ? `${URL_BASE}/it` : `${URL_BASE}/en`,
    telephone: PHONE,
    email: EMAIL,
    address: LOCATIONS[0].address,
    location: LOCATIONS,
    areaServed: [
      {'@type': 'City', name: 'Siracusa'},
      {'@type': 'City', name: 'Noto'},
      {'@type': 'City', name: 'Avola'},
      {'@type': 'City', name: 'Catania'},
      {'@type': 'City', name: 'Taormina'},
      {'@type': 'City', name: 'Ragusa'},
      {'@type': 'City', name: 'Modica'},
      {'@type': 'City', name: 'Marzamemi'},
      {'@type': 'AdministrativeArea', name: 'Provincia di Siracusa'},
      {'@type': 'AdministrativeArea', name: 'Val di Noto'},
      {'@type': 'AdministrativeArea', name: 'Sicilia orientale'}
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 37.0755,
        longitude: 15.2866
      },
      geoRadius: 150000
    },
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    // 24/7: usiamo openingHoursSpecification con array completo dei giorni
    // perché 'Mo-Su 00:00-23:59' viene letto da Rich Results come "chiuso 1 min/giorno".
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    image: `${URL_BASE}/og?locale=${locale}`,
    vatID: 'IT02150600894',
    taxID: '02150600894',
    sameAs: [
      // Google Business Profile — shortlink condiviso dal cliente.
      // TODO post-deploy: sostituire con URL maps.app.goo.gl/... esteso
      // per knowledge graph linking esplicito.
      'https://share.google/Lj0QSPY5y9nKanT76',
      // Facebook brand storico
      'https://www.facebook.com/nccautoservizisiracusa/'
      // TODO: aggiungere Instagram quando cliente fornisce handle
    ]
  };
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${URL_BASE}${item.url}`
    }))
  };
}

export function JsonLd({data}: {data: object}) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}
    />
  );
}
