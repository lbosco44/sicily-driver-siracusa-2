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

// ============================================================
// FR
// ============================================================

const ROUTES_FR: Record<TransferRouteKey, TransferRouteContent> = {
  'catania-siracusa': {
    key: 'catania-siracusa',
    slugIt: '/transfer-catania-siracusa',
    slugEn: '/catania-syracuse-transfer',
    metaTitle: 'Transfert Aéroport de Catane → Syracuse dès €90 | Sicily Driver',
    metaDescription:
      'Transfert privé Aéroport de Catane → Syracuse et Ortigia en van de luxe. Dès €90 par trajet, environ 50 minutes, chauffeur aux arrivées, suivi du vol. 24/7.',
    from: 'Aéroport de Catane',
    to: 'Syracuse / Ortigia',
    h1: 'Transfert Aéroport de Catane → Syracuse',
    heroSubhead:
      'De l’aéroport de Catane-Fontanarossa à Syracuse et Ortigia en van de luxe, en environ 50 minutes. Chauffeur qui vous attend aux arrivées, suivi du vol et tarif fixe convenu.',
    heroImage: '/images/home/hero.jpeg',
    priceFrom: 'dès €90',
    priceBaseNote: '1–3 passagers · par trajet',
    priceGroup: '€120',
    priceGroupNote: 'à partir de 4 passagers · par trajet',
    duration: 'Environ 50 minutes',
    intro:
      'Vous atterrissez à Catane et vous êtes à Ortigia en moins d’une heure. Notre chauffeur vous attend à la sortie des arrivées et vous conduit directement à votre hôtel, B&B ou appartement à Syracuse, sans changement et sans file d’attente pour les taxis. Van de luxe jusqu’à 7 passagers, idéal même avec beaucoup de bagages, avec sièges enfant et climatisation. C’est le trajet qu’on nous demande le plus souvent : tarif fixe, sans compteur, sans surprises.',
    includes: [
      'Chauffeur à la sortie des arrivées avec panonceau nominatif',
      'Suivi du vol en temps réel',
      'Attente gratuite jusqu’à 60 minutes après l’atterrissage',
      'Sièges enfant gratuits sur demande',
      'Eau fraîche à bord',
      'Paiement en espèces, par carte ou par virement'
    ],
    faqs: [
      {
        q: 'Combien de temps dure le transfert de Catane à Syracuse ?',
        a: 'Environ 50 minutes, selon le trafic. Le chauffeur suit votre vol et vous attend même en cas de retard, sans frais supplémentaires.'
      },
      {
        q: 'Combien coûte le transfert Catane → Syracuse ?',
        a: 'Dès €90 par trajet pour 1–3 passagers, €120 à partir de 4 passagers. Tarif fixe convenu avant le départ, sans surprises au retour.'
      },
      {
        q: 'Où le chauffeur m’attend-il à l’aéroport ?',
        a: 'À la sortie des arrivées, avec un panonceau à votre nom. Si le vol est en retard, l’attente reste gratuite jusqu’à 60 minutes après l’atterrissage.'
      }
    ],
    ctaH2: 'Prêts pour Syracuse ?',
    ctaSubhead:
      'Envoyez-nous la date, l’heure du vol et le nombre de passagers : nous confirmons votre transfert Catane → Syracuse en quelques minutes.'
  },

  'catania-noto': {
    key: 'catania-noto',
    slugIt: '/transfer-catania-noto',
    slugEn: '/catania-noto-transfer',
    metaTitle: 'Transfert Aéroport de Catane → Noto dès €100 | Sicily Driver',
    metaDescription:
      'Transfert privé Aéroport de Catane → Noto en van de luxe. Dès €100 par trajet, environ 1h20, attente à l’aéroport incluse, suivi du vol. 24/7.',
    from: 'Aéroport de Catane',
    to: 'Noto',
    h1: 'Transfert Aéroport de Catane → Noto',
    heroSubhead:
      'De l’aéroport de Catane au cœur baroque de Noto en van de luxe, en environ 1 heure et 20 minutes. Attente à l’aéroport incluse, suivi du vol et tarif fixe.',
    heroImage: '/images/ncc/noto.webp',
    priceFrom: 'dès €100',
    priceBaseNote: '1–3 passagers · par trajet',
    priceGroup: '€130',
    priceGroupNote: 'à partir de 4 passagers · par trajet',
    duration: 'Environ 1 heure et 20 minutes',
    intro:
      'De Catane Fontanarossa jusqu’à Noto, capitale du baroque sicilien et joyau classé au patrimoine mondial de l’UNESCO. Nous venons vous chercher aux arrivées et vous conduisons directement dans le centre historique, à votre hôtel ou à votre villa, en van de luxe avec chauffeur. Un trajet confortable pour commencer vos vacances dans le Val di Noto sans vous soucier de la conduite ni du stationnement : tarif fixe, attente à l’aéroport incluse, souplesse sur les horaires.',
    includes: [
      'Attente gratuite à l’aéroport incluse',
      'Suivi du vol en temps réel',
      'Chauffeur à la sortie des arrivées avec panonceau nominatif',
      'Sièges enfant gratuits sur demande',
      'Eau fraîche à bord',
      'Paiement en espèces, par carte ou par virement'
    ],
    faqs: [
      {
        q: 'Combien de temps dure le transfert de Catane à Noto ?',
        a: 'Environ 1 heure et 20 minutes. Le chauffeur suit votre vol et vous attend aux arrivées, même en cas de retard.'
      },
      {
        q: 'Combien coûte le transfert Catane → Noto ?',
        a: 'Dès €100 par trajet pour 1–3 passagers, €130 à partir de 4 passagers. Tarif fixe convenu avant le départ.'
      },
      {
        q: 'Pouvez-vous aussi nous emmener à Marzamemi ou dans les villas autour de Noto ?',
        a: 'Oui. Nous pouvons continuer vers Marzamemi, Avola ou les villas et resorts du Val di Noto : envoyez-nous l’adresse et nous vous indiquons le prix exact.'
      }
    ],
    ctaH2: 'Prêts pour Noto ?',
    ctaSubhead:
      'Indiquez-nous la date, l’heure du vol et le nombre de passagers : nous confirmons votre transfert Catane → Noto en quelques minutes.'
  },

  'catania-taormina': {
    key: 'catania-taormina',
    slugIt: '/transfer-catania-taormina',
    slugEn: '/catania-taormina-transfer',
    metaTitle: 'Transfert Aéroport de Catane → Taormine dès €80 | Sicily Driver',
    metaDescription:
      'Transfert privé Aéroport de Catane → Taormine en van de luxe. Dès €80 par trajet, environ 1 heure sur la côte ionienne, suivi du vol, arrêts panoramiques. 24/7.',
    from: 'Aéroport de Catane',
    to: 'Taormine',
    h1: 'Transfert Aéroport de Catane → Taormine',
    heroSubhead:
      'De l’aéroport de Catane à Taormine, le long de la côte ionienne, en van de luxe et environ 1 heure. Suivi du vol, arrêts panoramiques sur demande et tarif fixe.',
    heroImage: '/images/ncc/taormina.webp',
    priceFrom: 'dès €80',
    priceBaseNote: '1–3 passagers · par trajet',
    priceGroup: '€100',
    priceGroupNote: 'à partir de 4 passagers · par trajet',
    duration: 'Environ 1 heure',
    intro:
      'De Catane Fontanarossa à Taormine, la perle de la côte ionienne, en un peu plus d’une heure. Notre chauffeur vous accueille aux arrivées et vous conduit jusqu’à votre hôtel — même dans les recoins les plus difficiles du centre piéton, où une voiture privée fait toute la différence. Van de luxe climatisé, idéal après un long vol, avec la possibilité d’un arrêt panoramique sur l’Etna ou sur la baie d’Isola Bella en chemin.',
    includes: [
      'Chauffeur à la sortie des arrivées avec panonceau nominatif',
      'Suivi du vol en temps réel',
      'Arrêts panoramiques sur demande',
      'Attente gratuite jusqu’à 60 minutes après l’atterrissage',
      'Sièges enfant gratuits sur demande',
      'Paiement en espèces, par carte ou par virement'
    ],
    faqs: [
      {
        q: 'Combien de temps dure le transfert de Catane à Taormine ?',
        a: 'Environ 1 heure, le long de la côte ionienne. Confortable même en soirée, avec le chauffeur qui suit votre vol et vous attend aux arrivées.'
      },
      {
        q: 'Combien coûte le transfert Catane → Taormine ?',
        a: 'Dès €80 par trajet pour 1–3 passagers, €100 à partir de 4 passagers. Tarif fixe convenu avant le départ.'
      },
      {
        q: 'Peut-on ajouter un arrêt à l’Etna en chemin ?',
        a: 'Oui, nous pouvons inclure un arrêt panoramique ou transformer le transfert en une demi-journée avec une halte sur l’Etna : écrivez-nous et nous organisons l’itinéraire.'
      }
    ],
    ctaH2: 'Prêts pour Taormine ?',
    ctaSubhead:
      'Envoyez-nous la date, l’heure du vol et le nombre de passagers : nous confirmons votre transfert Catane → Taormine en quelques minutes.'
  },

  'pozzallo-siracusa': {
    key: 'pozzallo-siracusa',
    slugIt: '/transfer-pozzallo-siracusa',
    slugEn: '/pozzallo-syracuse-transfer',
    metaTitle: 'Transfert Port de Pozzallo → Syracuse dès €150 | Sicily Driver',
    metaDescription:
      'Transfert privé Port de Pozzallo (ferry depuis Malte) → Syracuse et Ortigia en van de luxe. Dès €150 par trajet, environ 1 heure, attente au port incluse. 24/7.',
    from: 'Port de Pozzallo',
    to: 'Syracuse / Ortigia',
    h1: 'Transfert Port de Pozzallo → Syracuse',
    heroSubhead:
      'Du port de Pozzallo (ferry depuis Malte) à Syracuse et Ortigia en van de luxe, en environ 1 heure. Attente au port incluse et coordination avec l’horaire du ferry.',
    heroImage: '/images/home/hero.jpeg',
    priceFrom: 'dès €150',
    priceBaseNote: '1–3 passagers · par trajet',
    priceGroup: '€195',
    priceGroupNote: 'à partir de 4 passagers · par trajet',
    duration: 'Environ 1 heure',
    intro:
      'Vous débarquez à Pozzallo du ferry en provenance de Malte et vous êtes à Ortigia en environ une heure. Nous coordonnons la prise en charge avec l’heure d’arrivée du ferry et le chauffeur vous attend au port, prêt à partir dès que vous descendez. Van de luxe avec de la place pour les bagages, parfait après une traversée : pas de files d’attente, pas de changement, directement à votre hébergement à Syracuse avec un tarif fixe convenu à l’avance.',
    includes: [
      'Attente au port incluse',
      'Coordination avec l’horaire du ferry depuis Malte',
      'Chauffeur qui vous attend au débarquement',
      'Sièges enfant gratuits sur demande',
      'Eau fraîche à bord',
      'Paiement en espèces, par carte ou par virement'
    ],
    faqs: [
      {
        q: 'Combien de temps dure le transfert de Pozzallo à Syracuse ?',
        a: 'Environ 1 heure. Nous coordonnons les horaires avec le ferry depuis Malte, afin que le chauffeur soit déjà au port lorsque vous débarquez.'
      },
      {
        q: 'Combien coûte le transfert Pozzallo → Syracuse ?',
        a: 'Dès €150 par trajet pour 1–3 passagers, €195 à partir de 4 passagers. Tarif fixe convenu avant le départ.'
      },
      {
        q: 'Et si le ferry est en retard ?',
        a: 'Aucun problème : nous surveillons l’arrivée et l’attente au port est incluse. Vous n’avez qu’à débarquer — nous nous occupons du reste.'
      }
    ],
    ctaH2: 'Vous débarquez à Pozzallo ?',
    ctaSubhead:
      'Indiquez-nous l’heure du ferry et combien vous êtes : nous vous attendons au port et vous conduisons à Syracuse sans attente.'
  }
};

const DATA: Record<Locale, Record<TransferRouteKey, TransferRouteContent>> = {
  it: ROUTES_IT,
  en: ROUTES_EN,
  fr: ROUTES_FR
};

export function getTransferRoute(
  key: TransferRouteKey,
  locale: Locale
): TransferRouteContent {
  return (DATA[locale] ?? DATA.it)[key];
}

export function getAllTransferRoutes(locale: Locale): TransferRouteContent[] {
  return TRANSFER_ROUTE_ORDER.map((k) => (DATA[locale] ?? DATA.it)[k]);
}
