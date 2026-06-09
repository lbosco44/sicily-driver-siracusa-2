// ============================================================
// Sicily Driver — Pagine figlie SEO per singola tratta transfer.
// Landing transazionali raggiunte da /transfer-aeroporti-porti-sicilia
// (pagina-madre) e dalle ricerche tipo "transfer aeroporto Catania Siracusa
// prezzo". Prezzi presi dalla sezione "I transfer più richiesti" della
// homepage (Home.listino). Creato 09/06/2026.
// ============================================================

import type {Locale} from './cities';

export type TransferRouteKey =
  | 'catania-siracusa'
  | 'catania-noto'
  | 'catania-taormina'
  | 'pozzallo-siracusa';

// Slug IT = chiave interna del routing next-intl → tipizzata come union
// così i <Link> typed la accettano.
export type TransferRouteSlug =
  | '/transfer-catania-siracusa'
  | '/transfer-catania-noto'
  | '/transfer-catania-taormina'
  | '/transfer-pozzallo-siracusa';

export type TransferRouteContent = {
  key: TransferRouteKey;
  slugIt: TransferRouteSlug;
  slugEn: string;

  metaTitle: string;
  metaDescription: string;

  from: string;
  to: string;
  h1: string;
  heroSubhead: string;
  heroImage: string;

  priceFrom: string; // "da €90" / "from €90"
  priceBaseNote: string; // "1–3 passeggeri · a tratta"
  priceGroup: string; // "€120"
  priceGroupNote: string; // "da 4 passeggeri · a tratta"
  duration: string;

  intro: string;
  includes: string[];
  faqs: {q: string; a: string}[];

  ctaH2: string;
  ctaSubhead: string;
};

// Ordine di visualizzazione delle tratte (per il blocco "altre tratte")
export const TRANSFER_ROUTE_ORDER: TransferRouteKey[] = [
  'catania-siracusa',
  'catania-noto',
  'catania-taormina',
  'pozzallo-siracusa'
];

// ============================================================
// IT
// ============================================================

const ROUTES_IT: Record<TransferRouteKey, TransferRouteContent> = {
  'catania-siracusa': {
    key: 'catania-siracusa',
    slugIt: '/transfer-catania-siracusa',
    slugEn: '/catania-syracuse-transfer',
    metaTitle: 'Transfer Aeroporto Catania → Siracusa da €90 | Sicily Driver',
    metaDescription:
      'Transfer privato Aeroporto di Catania → Siracusa e Ortigia in van di lusso. Da €90 a tratta, circa 50 minuti, autista agli arrivi, monitoraggio volo. 24/7.',
    from: 'Aeroporto di Catania',
    to: 'Siracusa / Ortigia',
    h1: 'Transfer Aeroporto Catania → Siracusa',
    heroSubhead:
      'Dall’Aeroporto di Catania-Fontanarossa a Siracusa e Ortigia in van di lusso, in circa 50 minuti. Autista che ti aspetta agli arrivi, monitoraggio del volo e prezzo fisso concordato.',
    heroImage: '/images/home/hero.jpeg',
    priceFrom: 'da €90',
    priceBaseNote: '1–3 passeggeri · a tratta',
    priceGroup: '€120',
    priceGroupNote: 'da 4 passeggeri · a tratta',
    duration: 'Circa 50 minuti',
    intro:
      'Atterri a Catania e in meno di un’ora sei a Ortigia. Il nostro autista ti aspetta all’uscita degli arrivi e ti porta direttamente al tuo hotel, B&B o appartamento a Siracusa, senza cambi e senza attese ai taxi. Van di lusso fino a 7 passeggeri, ideale anche con tanti bagagli, seggiolini per bambini e aria condizionata. È la tratta che ci chiedono più spesso: prezzo fisso, niente tassametro, niente sorprese.',
    includes: [
      'Autista all’uscita arrivi con cartello nominativo',
      'Monitoraggio del volo in tempo reale',
      'Attesa gratuita fino a 60 minuti dall’atterraggio',
      'Seggiolini bambino gratuiti su richiesta',
      'Acqua fresca a bordo',
      'Pagamento in contanti, carta o bonifico'
    ],
    faqs: [
      {
        q: 'Quanto dura il transfer da Catania a Siracusa?',
        a: 'Circa 50 minuti, traffico permettendo. L’autista monitora il tuo volo e ti aspetta anche in caso di ritardo, senza costi aggiuntivi.'
      },
      {
        q: 'Quanto costa il transfer Catania → Siracusa?',
        a: 'Da €90 a tratta per 1–3 passeggeri, €120 da 4 passeggeri in poi. Prezzo fisso concordato prima della partenza, senza sorprese al ritorno.'
      },
      {
        q: 'Dove mi aspetta l’autista all’aeroporto?',
        a: 'All’uscita degli arrivi, con un cartello con il tuo nome. Se il volo è in ritardo l’attesa resta gratuita fino a 60 minuti dall’atterraggio.'
      }
    ],
    ctaH2: 'Pronti per Siracusa?',
    ctaSubhead:
      'Scrivici data, orario del volo e numero di passeggeri: confermiamo il transfer Catania → Siracusa in pochi minuti.'
  },

  'catania-noto': {
    key: 'catania-noto',
    slugIt: '/transfer-catania-noto',
    slugEn: '/catania-noto-transfer',
    metaTitle: 'Transfer Aeroporto Catania → Noto da €100 | Sicily Driver',
    metaDescription:
      'Transfer privato Aeroporto di Catania → Noto in van di lusso. Da €100 a tratta, circa 1 ora e 20 minuti, attesa aeroporto inclusa, monitoraggio volo. 24/7.',
    from: 'Aeroporto di Catania',
    to: 'Noto',
    h1: 'Transfer Aeroporto Catania → Noto',
    heroSubhead:
      'Dall’Aeroporto di Catania al cuore barocco di Noto in van di lusso, in circa 1 ora e 20 minuti. Attesa aeroporto inclusa, monitoraggio del volo e prezzo fisso.',
    heroImage: '/images/ncc/noto.webp',
    priceFrom: 'da €100',
    priceBaseNote: '1–3 passeggeri · a tratta',
    priceGroup: '€130',
    priceGroupNote: 'da 4 passeggeri · a tratta',
    duration: 'Circa 1 ora e 20 minuti',
    intro:
      'Da Catania Fontanarossa fino a Noto, capitale del Barocco siciliano e Patrimonio UNESCO. Ti veniamo a prendere agli arrivi e ti portiamo direttamente nel centro storico, al tuo hotel o alla tua villa, in van di lusso con autista. Una tratta comoda per chi vuole iniziare la vacanza nel Val di Noto senza pensieri di guida o parcheggi: prezzo fisso, attesa in aeroporto inclusa, flessibilità sugli orari.',
    includes: [
      'Attesa gratuita all’aeroporto inclusa',
      'Monitoraggio del volo in tempo reale',
      'Autista all’uscita arrivi con cartello nominativo',
      'Seggiolini bambino gratuiti su richiesta',
      'Acqua fresca a bordo',
      'Pagamento in contanti, carta o bonifico'
    ],
    faqs: [
      {
        q: 'Quanto dura il transfer da Catania a Noto?',
        a: 'Circa 1 ora e 20 minuti. L’autista segue il tuo volo e ti aspetta agli arrivi, anche in caso di ritardo.'
      },
      {
        q: 'Quanto costa il transfer Catania → Noto?',
        a: 'Da €100 a tratta per 1–3 passeggeri, €130 da 4 passeggeri in poi. Prezzo fisso concordato prima della partenza.'
      },
      {
        q: 'Potete portarci anche a Marzamemi o nelle ville fuori Noto?',
        a: 'Sì. Possiamo proseguire verso Marzamemi, Avola o le ville e i resort del Val di Noto: scrivici l’indirizzo e ti diamo il prezzo esatto.'
      }
    ],
    ctaH2: 'Pronti per Noto?',
    ctaSubhead:
      'Dimmi data, orario del volo e numero di passeggeri: confermiamo il transfer Catania → Noto in pochi minuti.'
  },

  'catania-taormina': {
    key: 'catania-taormina',
    slugIt: '/transfer-catania-taormina',
    slugEn: '/catania-taormina-transfer',
    metaTitle: 'Transfer Aeroporto Catania → Taormina da €80 | Sicily Driver',
    metaDescription:
      'Transfer privato Aeroporto di Catania → Taormina in van di lusso. Da €80 a tratta, circa 1 ora sulla costa ionica, monitoraggio volo, soste panoramiche. 24/7.',
    from: 'Aeroporto di Catania',
    to: 'Taormina',
    h1: 'Transfer Aeroporto Catania → Taormina',
    heroSubhead:
      'Dall’Aeroporto di Catania a Taormina, lungo la costa ionica, in van di lusso e circa 1 ora. Monitoraggio del volo, soste panoramiche su richiesta e prezzo fisso.',
    heroImage: '/images/ncc/taormina.webp',
    priceFrom: 'da €80',
    priceBaseNote: '1–3 passeggeri · a tratta',
    priceGroup: '€100',
    priceGroupNote: 'da 4 passeggeri · a tratta',
    duration: 'Circa 1 ora',
    intro:
      'Da Catania Fontanarossa a Taormina, la perla della costa ionica, in poco più di un’ora. Il nostro autista ti accoglie agli arrivi e ti porta fino al tuo hotel — anche nei punti più scomodi del centro pedonale, dove l’auto privata fa la differenza. Van di lusso con aria condizionata, ideale dopo un volo lungo, con la possibilità di una sosta panoramica sull’Etna o sulla baia di Isola Bella lungo il tragitto.',
    includes: [
      'Autista all’uscita arrivi con cartello nominativo',
      'Monitoraggio del volo in tempo reale',
      'Soste panoramiche su richiesta',
      'Attesa gratuita fino a 60 minuti dall’atterraggio',
      'Seggiolini bambino gratuiti su richiesta',
      'Pagamento in contanti, carta o bonifico'
    ],
    faqs: [
      {
        q: 'Quanto dura il transfer da Catania a Taormina?',
        a: 'Circa 1 ora, lungo la costa ionica. Comodo anche di sera, con l’autista che monitora il tuo volo e ti aspetta agli arrivi.'
      },
      {
        q: 'Quanto costa il transfer Catania → Taormina?',
        a: 'Da €80 a tratta per 1–3 passeggeri, €100 da 4 passeggeri in poi. Prezzo fisso concordato prima della partenza.'
      },
      {
        q: 'Si può aggiungere una sosta all’Etna lungo il tragitto?',
        a: 'Sì, possiamo inserire una sosta panoramica o trasformare il transfer in una mezza giornata con tappa sull’Etna: scrivici e organizziamo l’itinerario.'
      }
    ],
    ctaH2: 'Pronti per Taormina?',
    ctaSubhead:
      'Scrivici data, orario del volo e numero di passeggeri: confermiamo il transfer Catania → Taormina in pochi minuti.'
  },

  'pozzallo-siracusa': {
    key: 'pozzallo-siracusa',
    slugIt: '/transfer-pozzallo-siracusa',
    slugEn: '/pozzallo-syracuse-transfer',
    metaTitle: 'Transfer Porto di Pozzallo → Siracusa da €150 | Sicily Driver',
    metaDescription:
      'Transfer privato Porto di Pozzallo (traghetto da Malta) → Siracusa e Ortigia in van di lusso. Da €150 a tratta, circa 1 ora, attesa al porto inclusa. 24/7.',
    from: 'Porto di Pozzallo',
    to: 'Siracusa / Ortigia',
    h1: 'Transfer Porto di Pozzallo → Siracusa',
    heroSubhead:
      'Dal Porto di Pozzallo (traghetto da Malta) a Siracusa e Ortigia in van di lusso, in circa 1 ora. Attesa al porto inclusa e coordinamento con l’orario del traghetto.',
    heroImage: '/images/home/hero.jpeg',
    priceFrom: 'da €150',
    priceBaseNote: '1–3 passeggeri · a tratta',
    priceGroup: '€195',
    priceGroupNote: 'da 4 passeggeri · a tratta',
    duration: 'Circa 1 ora',
    intro:
      'Sbarchi a Pozzallo dal traghetto da Malta e in circa un’ora sei a Ortigia. Coordiniamo il pickup con l’orario di arrivo del traghetto e l’autista ti aspetta al porto, pronto a partire appena scendi. Van di lusso con spazio per i bagagli, perfetto dopo una traversata: niente code, niente cambi, direttamente al tuo alloggio a Siracusa con un prezzo fisso concordato in anticipo.',
    includes: [
      'Attesa al porto inclusa',
      'Coordinamento con l’orario del traghetto da Malta',
      'Autista che ti aspetta allo sbarco',
      'Seggiolini bambino gratuiti su richiesta',
      'Acqua fresca a bordo',
      'Pagamento in contanti, carta o bonifico'
    ],
    faqs: [
      {
        q: 'Quanto dura il transfer da Pozzallo a Siracusa?',
        a: 'Circa 1 ora. Coordiniamo l’orario con il traghetto da Malta, così l’autista è già al porto quando sbarchi.'
      },
      {
        q: 'Quanto costa il transfer Pozzallo → Siracusa?',
        a: 'Da €150 a tratta per 1–3 passeggeri, €195 da 4 passeggeri in poi. Prezzo fisso concordato prima della partenza.'
      },
      {
        q: 'E se il traghetto arriva in ritardo?',
        a: 'Nessun problema: monitoriamo l’arrivo e l’attesa al porto è inclusa. Tu pensa a sbarcare, al resto pensiamo noi.'
      }
    ],
    ctaH2: 'Sbarchi a Pozzallo?',
    ctaSubhead:
      'Dicci l’orario del traghetto e quante persone siete: ti aspettiamo al porto e ti portiamo a Siracusa senza attese.'
  }
};

// ============================================================
// EN
// ============================================================

const ROUTES_EN: Record<TransferRouteKey, TransferRouteContent> = {
  'catania-siracusa': {
    key: 'catania-siracusa',
    slugIt: '/transfer-catania-siracusa',
    slugEn: '/catania-syracuse-transfer',
    metaTitle: 'Catania Airport → Syracuse Transfer from €90 | Sicily Driver',
    metaDescription:
      'Private transfer Catania Airport → Syracuse and Ortigia in a luxury van. From €90 per trip, about 50 minutes, driver at arrivals, flight tracking. 24/7.',
    from: 'Catania Airport',
    to: 'Syracuse / Ortigia',
    h1: 'Catania Airport → Syracuse Transfer',
    heroSubhead:
      'From Catania-Fontanarossa Airport to Syracuse and Ortigia in a luxury van, in about 50 minutes. Driver waiting at arrivals, flight tracking and an agreed flat rate.',
    heroImage: '/images/home/hero.jpeg',
    priceFrom: 'from €90',
    priceBaseNote: '1–3 passengers · per trip',
    priceGroup: '€120',
    priceGroupNote: 'from 4 passengers · per trip',
    duration: 'About 50 minutes',
    intro:
      'You land in Catania and you’re in Ortigia in under an hour. Our driver meets you at the arrivals exit and takes you straight to your hotel, B&B or apartment in Syracuse — no changes, no taxi queues. Luxury van for up to 7 passengers, perfect even with plenty of luggage, with child seats and air conditioning. It’s the route we’re asked for most: flat rate, no meter, no surprises.',
    includes: [
      'Driver at arrivals exit with name sign',
      'Real-time flight tracking',
      'Free waiting up to 60 minutes after landing',
      'Free child seats on request',
      'Cold water on board',
      'Payment by cash, card or bank transfer'
    ],
    faqs: [
      {
        q: 'How long is the transfer from Catania to Syracuse?',
        a: 'About 50 minutes, traffic permitting. The driver tracks your flight and waits even if it’s delayed, at no extra cost.'
      },
      {
        q: 'How much is the Catania → Syracuse transfer?',
        a: 'From €90 per trip for 1–3 passengers, €120 from 4 passengers. Flat rate agreed before departure, no surprises afterwards.'
      },
      {
        q: 'Where does the driver wait at the airport?',
        a: 'At the arrivals exit, with a sign showing your name. If the flight is delayed, waiting stays free up to 60 minutes after landing.'
      }
    ],
    ctaH2: 'Ready for Syracuse?',
    ctaSubhead:
      'Send us the date, flight time and number of passengers: we confirm your Catania → Syracuse transfer in minutes.'
  },

  'catania-noto': {
    key: 'catania-noto',
    slugIt: '/transfer-catania-noto',
    slugEn: '/catania-noto-transfer',
    metaTitle: 'Catania Airport → Noto Transfer from €100 | Sicily Driver',
    metaDescription:
      'Private transfer Catania Airport → Noto in a luxury van. From €100 per trip, about 1h 20m, airport waiting included, flight tracking. 24/7.',
    from: 'Catania Airport',
    to: 'Noto',
    h1: 'Catania Airport → Noto Transfer',
    heroSubhead:
      'From Catania Airport to the Baroque heart of Noto in a luxury van, in about 1 hour and 20 minutes. Airport waiting included, flight tracking and a flat rate.',
    heroImage: '/images/ncc/noto.webp',
    priceFrom: 'from €100',
    priceBaseNote: '1–3 passengers · per trip',
    priceGroup: '€130',
    priceGroupNote: 'from 4 passengers · per trip',
    duration: 'About 1 hour and 20 minutes',
    intro:
      'From Catania Fontanarossa all the way to Noto, capital of Sicilian Baroque and a UNESCO World Heritage town. We pick you up at arrivals and take you straight into the old town, to your hotel or villa, in a luxury van with driver. A comfortable route to start your Val di Noto holiday without worrying about driving or parking: flat rate, airport waiting included, flexible timing.',
    includes: [
      'Free airport waiting included',
      'Real-time flight tracking',
      'Driver at arrivals exit with name sign',
      'Free child seats on request',
      'Cold water on board',
      'Payment by cash, card or bank transfer'
    ],
    faqs: [
      {
        q: 'How long is the transfer from Catania to Noto?',
        a: 'About 1 hour and 20 minutes. The driver follows your flight and waits at arrivals, even if it’s delayed.'
      },
      {
        q: 'How much is the Catania → Noto transfer?',
        a: 'From €100 per trip for 1–3 passengers, €130 from 4 passengers. Flat rate agreed before departure.'
      },
      {
        q: 'Can you also take us to Marzamemi or villas outside Noto?',
        a: 'Yes. We can continue to Marzamemi, Avola or the villas and resorts of Val di Noto: send us the address and we’ll give you the exact price.'
      }
    ],
    ctaH2: 'Ready for Noto?',
    ctaSubhead:
      'Tell us the date, flight time and number of passengers: we confirm your Catania → Noto transfer in minutes.'
  },

  'catania-taormina': {
    key: 'catania-taormina',
    slugIt: '/transfer-catania-taormina',
    slugEn: '/catania-taormina-transfer',
    metaTitle: 'Catania Airport → Taormina Transfer from €80 | Sicily Driver',
    metaDescription:
      'Private transfer Catania Airport → Taormina in a luxury van. From €80 per trip, about 1 hour on the Ionian coast, flight tracking, scenic stops. 24/7.',
    from: 'Catania Airport',
    to: 'Taormina',
    h1: 'Catania Airport → Taormina Transfer',
    heroSubhead:
      'From Catania Airport to Taormina, along the Ionian coast, in a luxury van and about 1 hour. Flight tracking, scenic stops on request and a flat rate.',
    heroImage: '/images/ncc/taormina.webp',
    priceFrom: 'from €80',
    priceBaseNote: '1–3 passengers · per trip',
    priceGroup: '€100',
    priceGroupNote: 'from 4 passengers · per trip',
    duration: 'About 1 hour',
    intro:
      'From Catania Fontanarossa to Taormina, the jewel of the Ionian coast, in just over an hour. Our driver greets you at arrivals and takes you to your hotel — even to the trickiest spots in the pedestrian centre, where a private car really makes the difference. Air-conditioned luxury van, ideal after a long flight, with the option of a scenic stop over Etna or Isola Bella bay along the way.',
    includes: [
      'Driver at arrivals exit with name sign',
      'Real-time flight tracking',
      'Scenic stops on request',
      'Free waiting up to 60 minutes after landing',
      'Free child seats on request',
      'Payment by cash, card or bank transfer'
    ],
    faqs: [
      {
        q: 'How long is the transfer from Catania to Taormina?',
        a: 'About 1 hour along the Ionian coast. Comfortable even in the evening, with the driver tracking your flight and waiting at arrivals.'
      },
      {
        q: 'How much is the Catania → Taormina transfer?',
        a: 'From €80 per trip for 1–3 passengers, €100 from 4 passengers. Flat rate agreed before departure.'
      },
      {
        q: 'Can we add an Etna stop along the way?',
        a: 'Yes, we can include a scenic stop or turn the transfer into a half-day with an Etna stop: message us and we’ll plan the itinerary.'
      }
    ],
    ctaH2: 'Ready for Taormina?',
    ctaSubhead:
      'Send us the date, flight time and number of passengers: we confirm your Catania → Taormina transfer in minutes.'
  },

  'pozzallo-siracusa': {
    key: 'pozzallo-siracusa',
    slugIt: '/transfer-pozzallo-siracusa',
    slugEn: '/pozzallo-syracuse-transfer',
    metaTitle: 'Pozzallo Port → Syracuse Transfer from €150 | Sicily Driver',
    metaDescription:
      'Private transfer Pozzallo Port (Malta ferry) → Syracuse and Ortigia in a luxury van. From €150 per trip, about 1 hour, port waiting included. 24/7.',
    from: 'Pozzallo Port',
    to: 'Syracuse / Ortigia',
    h1: 'Pozzallo Port → Syracuse Transfer',
    heroSubhead:
      'From Pozzallo Port (Malta ferry) to Syracuse and Ortigia in a luxury van, in about 1 hour. Port waiting included and coordinated with the ferry schedule.',
    heroImage: '/images/home/hero.jpeg',
    priceFrom: 'from €150',
    priceBaseNote: '1–3 passengers · per trip',
    priceGroup: '€195',
    priceGroupNote: 'from 4 passengers · per trip',
    duration: 'About 1 hour',
    intro:
      'You disembark at Pozzallo from the Malta ferry and you’re in Ortigia in about an hour. We coordinate the pickup with the ferry arrival time and the driver waits at the port, ready to leave as soon as you step off. Luxury van with room for luggage, perfect after a crossing: no queues, no changes, straight to your accommodation in Syracuse with a flat rate agreed in advance.',
    includes: [
      'Port waiting included',
      'Coordinated with the Malta ferry schedule',
      'Driver waiting as you disembark',
      'Free child seats on request',
      'Cold water on board',
      'Payment by cash, card or bank transfer'
    ],
    faqs: [
      {
        q: 'How long is the transfer from Pozzallo to Syracuse?',
        a: 'About 1 hour. We coordinate the timing with the Malta ferry, so the driver is already at the port when you disembark.'
      },
      {
        q: 'How much is the Pozzallo → Syracuse transfer?',
        a: 'From €150 per trip for 1–3 passengers, €195 from 4 passengers. Flat rate agreed before departure.'
      },
      {
        q: 'What if the ferry is delayed?',
        a: 'No problem: we monitor the arrival and port waiting is included. You just disembark — we handle the rest.'
      }
    ],
    ctaH2: 'Arriving at Pozzallo?',
    ctaSubhead:
      'Tell us the ferry time and how many of you there are: we wait at the port and take you to Syracuse with no delays.'
  }
};

const DATA: Record<Locale, Record<TransferRouteKey, TransferRouteContent>> = {
  it: ROUTES_IT,
  en: ROUTES_EN
};

export function getTransferRoute(
  key: TransferRouteKey,
  locale: Locale
): TransferRouteContent {
  return DATA[locale][key];
}

export function getAllTransferRoutes(locale: Locale): TransferRouteContent[] {
  return TRANSFER_ROUTE_ORDER.map((k) => DATA[locale][k]);
}
