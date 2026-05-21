type FaqItem = {q: string; a: string};

const PHONE = '+39 375 641 3379';
const EMAIL = 'info@ncctaxisiracusa.com';
const URL_BASE = 'https://ncctaxisiracusa.com';

export function localBusinessSchema(locale: 'it' | 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${URL_BASE}#localbusiness`,
    name: 'Sicily Driver Siracusa',
    description:
      locale === 'it'
        ? 'NCC privato e tour della Sicilia orientale. Transfer aeroporti Catania, Comiso, Palermo, Trapani. Tour Barocco, Etna, Ortigia, Taormina con Mercedes Classe V, GLB Premium, Classe E.'
        : 'Private NCC and private tours across eastern Sicily. Airport transfers from Catania, Comiso, Palermo, Trapani. Baroque, Etna, Ortigia, Taormina tours with Mercedes Class V, GLB Premium, Class E.',
    url: locale === 'it' ? `${URL_BASE}/it` : `${URL_BASE}/en`,
    telephone: PHONE,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Siracusa',
      addressRegion: 'SR',
      addressCountry: 'IT'
    },
    areaServed: [
      {'@type': 'City', name: 'Siracusa'},
      {'@type': 'City', name: 'Noto'},
      {'@type': 'City', name: 'Catania'},
      {'@type': 'City', name: 'Taormina'},
      {'@type': 'City', name: 'Ragusa'},
      {'@type': 'City', name: 'Modica'},
      {'@type': 'City', name: 'Marzamemi'},
      {'@type': 'AdministrativeArea', name: 'Sicilia orientale'}
    ],
    priceRange: '€€',
    openingHours: 'Mo-Su 00:00-23:59',
    image: `${URL_BASE}/og/home-${locale}.jpg`,
    vatID: 'IT02150600894'
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

export function JsonLd({data}: {data: object}) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}
    />
  );
}
