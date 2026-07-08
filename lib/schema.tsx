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

export function localBusinessSchema(locale: 'it' | 'en' | 'fr') {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TaxiService'],
    '@id': `${URL_BASE}#localbusiness`,
    name: 'Sicily Driver Siracusa',
    description:
      locale === 'it'
        ? 'NCC privato e tour della Sicilia orientale. Transfer aeroporti Catania, Comiso, Palermo, Trapani. Tour Barocco, Etna, Ortigia, Taormina con van di lusso (tra cui Mercedes Classe V, GLB Premium, Classe E).'
        : locale === 'fr'
          ? 'Chauffeur privé (NCC) et circuits privés dans l’est de la Sicile. Transferts aéroports Catane, Comiso, Palerme, Trapani. Circuits Baroque, Etna, Ortigia, Taormine en van de luxe (dont Mercedes Classe V, GLB Premium, Classe E).'
          : 'Private NCC and private tours across eastern Sicily. Airport transfers from Catania, Comiso, Palermo, Trapani. Baroque, Etna, Ortigia, Taormina tours with luxury vans (including Mercedes V-Class, GLB Premium, E-Class).',
    url:
      locale === 'it'
        ? `${URL_BASE}/`
        : locale === 'fr'
          ? `${URL_BASE}/fr`
          : `${URL_BASE}/en`,
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
    // Founder confermato dal cliente (29/05/2026).
    founder: {
      '@type': 'Person',
      name: 'Vincenzo Izzo'
    },
    // Recensioni Google reali (le stesse mostrate nella sezione Testimonianze):
    // accompagnano l'aggregateRating così non è "self-serving" senza review
    // on-page (requisito Google per i review snippet). 5★ = come visualizzate.
    review: [
      {
        '@type': 'Review',
        author: {'@type': 'Person', name: 'Evan Long'},
        reviewRating: {'@type': 'Rating', ratingValue: '5', bestRating: '5'},
        reviewBody:
          "We used Sicily Driver Syracuse this week for all of our travel needs and were blown away by Alberto's punctuality and hospitality. He always arrived earlier than he said he would for pickups, in a pristinely clean vehicle, and was extremely helpful. Whether you are doing tours or simply need transfers, I would definitely recommend them for all of your needs."
      },
      {
        '@type': 'Review',
        author: {'@type': 'Person', name: 'Jenni Wilson'},
        reviewRating: {'@type': 'Rating', ratingValue: '5', bestRating: '5'},
        reviewBody:
          'Vincenzo was prompt, courteous, and professional. The vehicles are spotless, and he speaks impeccable English. We plan to be in Syracuse again and will definitely hire Sicily Driver Siracusa.'
      },
      {
        '@type': 'Review',
        author: {'@type': 'Person', name: 'Giulia Magnano'},
        reviewRating: {'@type': 'Rating', ratingValue: '5', bestRating: '5'},
        reviewBody:
          "Mia moglie ed io abbiamo fatto il Tour del Barocco visitando Noto, Modica e Ragusa. È stato bellissimo e l'autista è stato molto gentile! L'auto era pulitissima."
      }
    ],
    // AggregateRating reale da Google Business Profile (29/05/2026): 4,9★ su
    // 32 recensioni. Abilita le stelline in SERP. Valori MAI inventati.
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '32',
      bestRating: '5'
    },
    sameAs: [
      // Google Business Profile — URL canonico (cid) per knowledge graph linking.
      // È la fonte lead principale del cliente: collegarla irradia autorevolezza.
      'https://www.google.com/maps?cid=16944631268431014158',
      // Instagram
      'https://www.instagram.com/sicilydriversyracuse',
      // Facebook brand storico
      'https://www.facebook.com/nccautoservizisiracusa/'
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

// TouristTrip per le 5 pagine tour dedicate (Audit SEO P1.2). Abilita
// l'eleggibilità ai rich-result "things to do" e collega il tour al provider
// (LocalBusiness/TaxiService). Niente prezzo hardcoded → no invenzioni.
export function touristTripSchema(params: {
  name: string;
  description: string;
  image: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: params.name,
    description: params.description,
    image: params.image.startsWith('http')
      ? params.image
      : `${URL_BASE}${params.image}`,
    url: `${URL_BASE}${params.url}`,
    provider: {
      '@type': ['LocalBusiness', 'TaxiService'],
      name: 'Sicily Driver Siracusa',
      url: `${URL_BASE}/`
    }
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
