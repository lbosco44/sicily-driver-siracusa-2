// ============================================================
// Sicily Driver Siracusa — City data (NCC pages)
// SEO-locked content per /ncc-{città} (IT) e /en/driver-{città} (EN)
//
// H1 e intro paragraph: estratti letterali dal sito attuale .php
// (vedi Brief/SEO.md §4 "Lock SEO" + §8 procedura estrazione).
// Mai cambiare la struttura semantica.
// ============================================================

export type CityKey = 'catania' | 'noto' | 'taormina' | 'ragusa';
export type Locale = 'it' | 'en';

export type Route = {from: string; to: string; price: string};
export type Faq = {q: string; a: string};
export type FleetCard = {model: string; pax: string; luggage: string; comfort: string; ideal: string};
export type TourCard = {title: string; image: string; href: '/tour-barocco' | '/tour/etna-premium' | '/tour/dolce-vita-siracusa'};

export type CityContent = {
  // SEO-LOCKED — estratti dal sito attuale (vedi WebFetch del 2026-05-22)
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;

  // Hero
  heroImage: string;
  heroEyebrow: string;
  heroSubhead: string;

  // Trust strip locale (3 items)
  trust: {number: string; label: string}[];

  // Tratte
  routesEyebrow: string;
  routesH2Pre: string;
  routesH2Accent: string;
  routes: Route[];
  routesMicrocopy: string;

  // Cosa include
  includesH2Pre: string;
  includesH2Accent: string;
  includes: string[];

  // Flotta (shared text, ma in array typed)
  fleetH2Pre: string;
  fleetH2Accent: string;
  fleet: FleetCard[];

  // FAQ
  faqEyebrow: string;
  faqH2Pre: string;
  faqH2Accent: string;
  faqs: Faq[];

  // Tour interni (3 card)
  nearbyToursEyebrow: string;
  nearbyToursH2Pre: string;
  nearbyToursH2Accent: string;
  nearbyTours: TourCard[];

  // CTA finale
  ctaEyebrow: string;
  ctaH2: string;
  ctaSubhead: string;
};

// ============================================================
// Fleet — shared across all cities (testo identico per locale)
// ============================================================
const FLEET_IT: FleetCard[] = [
  {
    model: 'Van di lusso 7 posti',
    pax: 'Fino a 7 passeggeri',
    luggage: '6 valigie grandi + bagaglio a mano',
    comfort: 'Aria condizionata, sedili in pelle, finestrini oscurati',
    ideal: 'Famiglie, gruppi, transfer aeroporto'
  },
  {
    model: 'SUV premium',
    pax: 'Fino a 4 passeggeri',
    luggage: '3 valigie grandi',
    comfort: 'SUV alto, vista comoda',
    ideal: 'Coppie, tour panoramici'
  },
  {
    model: 'Berlina di lusso',
    pax: 'Fino a 3 passeggeri',
    luggage: '2 valigie grandi',
    comfort: 'Berlina executive, eleganza per business',
    ideal: 'Viaggi d’affari, eventi, sposi'
  }
];

const FLEET_EN: FleetCard[] = [
  {
    model: 'Luxury van, 7 seats',
    pax: 'Up to 7 passengers',
    luggage: '6 large suitcases + carry-on',
    comfort: 'Air conditioning, leather seats, tinted windows',
    ideal: 'Families, groups, airport transfers'
  },
  {
    model: 'Premium SUV',
    pax: 'Up to 4 passengers',
    luggage: '3 large suitcases',
    comfort: 'Higher SUV ride, panoramic view',
    ideal: 'Couples, scenic tours'
  },
  {
    model: 'Luxury sedan',
    pax: 'Up to 3 passengers',
    luggage: '2 large suitcases',
    comfort: 'Executive sedan, business elegance',
    ideal: 'Business travel, events, wedding cars'
  }
];

const INCLUDES_IT = [
  'Seggiolini bambino su richiesta, senza costi',
  'Monitoraggio del volo in tempo reale',
  'Attesa gratuita all’aeroporto fino a 60 minuti',
  'Acqua fresca a bordo, sempre',
  'WhatsApp diretto con l’autista al momento del pickup',
  'Ricevuta fiscale o fattura (per business)'
];

const INCLUDES_EN = [
  'Child seats on request, no extra cost',
  'Real-time flight monitoring',
  'Free waiting time at airport up to 60 minutes',
  'Cold water on board, always',
  'Direct WhatsApp with driver at pickup',
  'Tax receipt or invoice for business'
];

// ============================================================
// City data
// ============================================================

const CATANIA_IT: CityContent = {
  metaTitle: 'NCC Catania · Transfer Aeroporto e Autista Privato | Sicily Driver',
  metaDescription:
    'NCC Catania con van di lusso e autista privato. Transfer Aeroporto Catania-Fontanarossa verso Siracusa da €80, Taormina da €120, Noto, Ragusa Ibla. Servizio 24/7.',
  h1: 'NCC Catania – Transfer Aeroporto e Autista Privato',
  intro:
    'Servizio NCC professionale da e per Catania, inclusi transfer dall’Aeroporto di Catania verso Siracusa, Noto, Ragusa e Taormina. Van di lusso (tra cui Mercedes Classe V, GLB Premium, Classe E), autisti professionisti, servizio 24/7.',

  heroImage:
    'https://images.unsplash.com/photo-1532509774891-141d37f25ae9?w=1600&q=70&auto=format&fm=webp',
  heroEyebrow: 'NCC Catania · Aeroporto Fontanarossa · 24/7',
  heroSubhead:
    'Van di lusso con autista bilingue, monitoraggio volo, attesa gratuita 60 minuti. Dal terminal arrivi alla tua destinazione, senza pensieri.',

  trust: [
    {number: 'da €80', label: 'Catania → Siracusa in van di lusso'},
    {number: 'Van di lusso', label: 'tra cui Mercedes Classe V · GLB · Classe E'},
    {number: '24/7', label: 'su WhatsApp e telefono'}
  ],

  routesEyebrow: 'Tratte più richieste',
  routesH2Pre: 'Da Catania,',
  routesH2Accent: 'ti portiamo',
  routes: [
    {from: 'Catania Aeroporto', to: 'Siracusa (Ortigia)', price: 'da €80'},
    {from: 'Catania Aeroporto', to: 'Noto', price: 'da €100'},
    {from: 'Catania Aeroporto', to: 'Taormina', price: 'da €120'},
    {from: 'Catania Aeroporto', to: 'Ragusa Ibla', price: 'da €150'},
    {from: 'Catania Aeroporto', to: 'Modica', price: 'da €140'},
    {from: 'Catania Aeroporto', to: 'Marzamemi', price: 'da €130'},
    {from: 'Catania Aeroporto', to: 'Avola · Pachino', price: 'da €110'},
    {from: 'Catania Porto (crociere)', to: 'Ortigia', price: 'da €90'}
  ],
  routesMicrocopy:
    'Prezzi per van di lusso fino a 7 passeggeri. Per tratte non in elenco, scrivici su WhatsApp: ti rispondiamo con un preventivo entro un’ora.',

  includesH2Pre: 'Cosa include',
  includesH2Accent: 'il servizio',
  includes: INCLUDES_IT,

  fleetH2Pre: 'La',
  fleetH2Accent: 'flotta',
  fleet: FLEET_IT,

  faqEyebrow: 'Dubbi',
  faqH2Pre: 'Le domande che',
  faqH2Accent: 'ci fate da Catania',
  faqs: [
    {
      q: 'Quanto costa un transfer da Catania a Siracusa?',
      a: 'Le tariffe partono indicativamente da €80–€120 in base a orario, numero passeggeri e veicolo. Scrivici su Contatti per un preventivo preciso in pochi minuti.'
    },
    {
      q: 'È disponibile il servizio notturno?',
      a: 'Sì, operiamo 24/7. Per voli in tarda notte o di mattina presto consigliamo di prenotare con anticipo.'
    }
  ],

  nearbyToursEyebrow: 'Esperienze',
  nearbyToursH2Pre: 'Tour che partono',
  nearbyToursH2Accent: 'da Catania',
  nearbyTours: [
    {
      title: 'Tour del Barocco',
      image:
        'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&q=70&auto=format&fm=webp',
      href: '/tour-barocco'
    },
    {
      title: 'Tour Etna',
      image:
        'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=800&q=70&auto=format&fm=webp',
      href: '/tour/etna-premium'
    },
    {
      title: 'Ortigia + Taormina',
      image:
        'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?w=800&q=70&auto=format&fm=webp',
      href: '/tour/dolce-vita-siracusa'
    }
  ],

  ctaEyebrow: 'Per prima cosa',
  ctaH2: 'Da Catania, partiamo?',
  ctaSubhead:
    'Tre modi per dirci dove ti veniamo a prendere all’aeroporto o al porto.'
};

const NOTO_IT: CityContent = {
  metaTitle: 'NCC Noto · Transfer Privati e Tour Barocco | Sicily Driver',
  metaDescription:
    'NCC Noto: transfer privati da/per gli aeroporti di Catania e Comiso e tour del Val di Noto. Van di lusso con autista, servizio 24/7. Da Noto a Siracusa da €60.',
  h1: 'NCC Noto – Transfer Privati e Tour Barocco',
  intro:
    'Servizio NCC a Noto per transfer da/per aeroporti (Catania, Comiso) e tour nel Val di Noto: Noto, Modica, Ragusa Ibla e Marzamemi. Autista dedicato e comfort premium.',

  heroImage:
    'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1600&q=70&auto=format&fm=webp',
  heroEyebrow: 'NCC Noto · Val di Noto · 24/7',
  heroSubhead:
    'La capitale del Barocco siciliano come punto di partenza. Da Noto verso Siracusa, Marzamemi o Modica con van di lusso e autista dedicato.',

  trust: [
    {number: 'da €60', label: 'Noto → Siracusa in van di lusso'},
    {number: 'Val di Noto', label: 'ogni giorno, tutto l’anno'},
    {number: '24/7', label: 'su WhatsApp e telefono'}
  ],

  routesEyebrow: 'Tratte più richieste',
  routesH2Pre: 'Da Noto,',
  routesH2Accent: 'ti portiamo',
  routes: [
    {from: 'Noto', to: 'Siracusa (Ortigia)', price: 'da €60'},
    {from: 'Noto', to: 'Catania Aeroporto', price: 'da €100'},
    {from: 'Noto', to: 'Marzamemi', price: 'da €40'},
    {from: 'Noto', to: 'Ragusa Ibla', price: 'da €90'},
    {from: 'Noto', to: 'Modica', price: 'da €70'},
    {from: 'Noto', to: 'Avola', price: 'da €30'}
  ],
  routesMicrocopy:
    'Prezzi per van di lusso fino a 7 passeggeri. Per tratte fuori elenco (Comiso, Pozzallo, Catania porto crociere) scrivici su WhatsApp.',

  includesH2Pre: 'Cosa include',
  includesH2Accent: 'il servizio',
  includes: INCLUDES_IT,

  fleetH2Pre: 'La',
  fleetH2Accent: 'flotta',
  fleet: FLEET_IT,

  faqEyebrow: 'Dubbi',
  faqH2Pre: 'Le domande che',
  faqH2Accent: 'ci fate da Noto',
  faqs: [
    {
      q: 'Quanto dura un tour Barocco da Noto?',
      a: 'In media 6–8 ore, con possibilità di personalizzare tappe e tempi in base alle preferenze.'
    },
    {
      q: 'Posso aggiungere una degustazione?',
      a: 'Certo: possiamo includere cantine, oleifici o soste gastronomiche su richiesta.'
    }
  ],

  nearbyToursEyebrow: 'Esperienze',
  nearbyToursH2Pre: 'Tour che partono',
  nearbyToursH2Accent: 'da Noto',
  nearbyTours: [
    {
      title: 'Tour del Barocco',
      image:
        'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&q=70&auto=format&fm=webp',
      href: '/tour-barocco'
    },
    {
      title: 'Tour Etna',
      image:
        'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=800&q=70&auto=format&fm=webp',
      href: '/tour/etna-premium'
    },
    {
      title: 'Ortigia + Taormina',
      image:
        'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?w=800&q=70&auto=format&fm=webp',
      href: '/tour/dolce-vita-siracusa'
    }
  ],

  ctaEyebrow: 'Per prima cosa',
  ctaH2: 'Da Noto, partiamo?',
  ctaSubhead: 'Scrivici o chiamaci: rispondiamo entro un’ora, anche di notte.'
};

const TAORMINA_IT: CityContent = {
  metaTitle: 'NCC Taormina · Transfer di Lusso e Tour Etna | Sicily Driver',
  metaDescription:
    'NCC Taormina: transfer privato Aeroporto di Catania, Siracusa, costa ionica. Van di lusso tra cui Mercedes Classe V, GLB, Classe E. Tour Etna con degustazione. 24/7.',
  h1: 'NCC Taormina – Transfer di Lusso e Tour Etna',
  intro:
    'NCC per Taormina con transfer da/per Aeroporto di Catania, Siracusa e tutta la costa ionica. Opzione Tour Etna con degustazione in cantina e soste panoramiche.',

  heroImage:
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=70&auto=format&fm=webp',
  heroEyebrow: 'NCC Taormina · Costa Ionica · 24/7',
  heroSubhead:
    'Dal teatro greco a Isola Bella, da Catania Fontanarossa al cratere dell’Etna. Van di lusso con autista bilingue, orari flessibili, tariffa concordata.',

  trust: [
    {number: 'da €120', label: 'Taormina → Catania Aeroporto'},
    {number: 'Isola Bella', label: 'in giù, tutta la costa ionica'},
    {number: '24/7', label: 'su WhatsApp e telefono'}
  ],

  routesEyebrow: 'Tratte più richieste',
  routesH2Pre: 'Da Taormina,',
  routesH2Accent: 'ti portiamo',
  routes: [
    {from: 'Taormina', to: 'Catania Aeroporto', price: 'da €120'},
    {from: 'Taormina', to: 'Siracusa (Ortigia)', price: 'da €180'},
    {from: 'Taormina', to: 'Etna (Crateri Silvestri)', price: 'da €100'},
    {from: 'Taormina', to: 'Noto', price: 'da €200'},
    {from: 'Taormina', to: 'Catania Porto (crociere)', price: 'da €110'}
  ],
  routesMicrocopy:
    'Prezzi per van di lusso fino a 7 passeggeri. Combina transfer Taormina → Etna con un’escursione vinicola: vedi Tour Etna per i dettagli.',

  includesH2Pre: 'Cosa include',
  includesH2Accent: 'il servizio',
  includes: INCLUDES_IT,

  fleetH2Pre: 'La',
  fleetH2Accent: 'flotta',
  fleet: FLEET_IT,

  faqEyebrow: 'Dubbi',
  faqH2Pre: 'Le domande che',
  faqH2Accent: 'ci fate da Taormina',
  faqs: [
    {
      q: 'Effettuate transfer Taormina ↔ Aeroporto di Catania?',
      a: 'Sì, con monitoraggio volo e orari flessibili. Autista in attesa all’uscita arrivi.'
    },
    {
      q: 'È possibile un tour Etna + Taormina in giornata?',
      a: 'Assolutamente sì: programma tipico 6–8 ore, con soste personalizzate.'
    }
  ],

  nearbyToursEyebrow: 'Esperienze',
  nearbyToursH2Pre: 'Tour che partono',
  nearbyToursH2Accent: 'da Taormina',
  nearbyTours: [
    {
      title: 'Tour Etna',
      image:
        'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=800&q=70&auto=format&fm=webp',
      href: '/tour/etna-premium'
    },
    {
      title: 'Ortigia + Taormina',
      image:
        'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?w=800&q=70&auto=format&fm=webp',
      href: '/tour/dolce-vita-siracusa'
    },
    {
      title: 'Tour del Barocco',
      image:
        'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&q=70&auto=format&fm=webp',
      href: '/tour-barocco'
    }
  ],

  ctaEyebrow: 'Per prima cosa',
  ctaH2: 'Da Taormina, partiamo?',
  ctaSubhead:
    'Transfer aeroporto, tour Etna, transfer per crociere: scrivici, ti rispondiamo entro un’ora.'
};

const RAGUSA_IT: CityContent = {
  metaTitle: 'NCC Ragusa · Transfer Privati e Servizio Conducente | Sicily Driver',
  metaDescription:
    'NCC Ragusa e Ragusa Ibla: transfer privati da/per gli aeroporti di Catania e Comiso, tour del Barocco, collegamenti Siracusa e Noto. Van di lusso con autista 24/7.',
  h1: 'NCC Ragusa – Transfer Privati e Servizio con Conducente',
  intro:
    'Servizio NCC a Ragusa e Ragusa Ibla per transfer privati da/per Aeroporto di Catania e Comiso, tour del Barocco e collegamenti per Siracusa e Noto.',

  heroImage:
    'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=1600&q=70&auto=format&fm=webp',
  heroEyebrow: 'NCC Ragusa Ibla · Val di Noto · 24/7',
  heroSubhead:
    'Dalla cattedrale di San Giorgio agli aeroporti di Comiso e Catania. Van di lusso con autista per Ragusa, Modica, Scicli e tutta la provincia.',

  trust: [
    {number: 'Ragusa Ibla', label: 'e Modica nel cuore'},
    {number: '2 aeroporti', label: 'Comiso e Catania serviti'},
    {number: '24/7', label: 'su WhatsApp e telefono'}
  ],

  routesEyebrow: 'Tratte più richieste',
  routesH2Pre: 'Da Ragusa,',
  routesH2Accent: 'ti portiamo',
  routes: [
    {from: 'Ragusa', to: 'Comiso Aeroporto', price: 'da €40'},
    {from: 'Ragusa', to: 'Catania Aeroporto', price: 'da €150'},
    {from: 'Ragusa', to: 'Siracusa (Ortigia)', price: 'da €120'},
    {from: 'Ragusa', to: 'Modica', price: 'da €40'},
    {from: 'Ragusa', to: 'Noto', price: 'da €90'},
    {from: 'Ragusa', to: 'Marzamemi', price: 'da €110'}
  ],
  routesMicrocopy:
    'Prezzi per van di lusso fino a 7 passeggeri. Comiso è l’aeroporto più vicino (40 min), Catania richiede 1h30 ma offre più voli.',

  includesH2Pre: 'Cosa include',
  includesH2Accent: 'il servizio',
  includes: INCLUDES_IT,

  fleetH2Pre: 'La',
  fleetH2Accent: 'flotta',
  fleet: FLEET_IT,

  faqEyebrow: 'Dubbi',
  faqH2Pre: 'Le domande che',
  faqH2Accent: 'ci fate da Ragusa',
  faqs: [
    {
      q: 'Fornite seggiolini o rialzi per bambini?',
      a: 'Sì, disponibili su richiesta al momento della prenotazione, senza costi aggiuntivi.'
    },
    {
      q: 'Con quanto anticipo devo prenotare?',
      a: 'Consigliamo almeno 12–24 ore, ma per urgenze proviamo sempre ad accomodare la richiesta.'
    }
  ],

  nearbyToursEyebrow: 'Esperienze',
  nearbyToursH2Pre: 'Tour che partono',
  nearbyToursH2Accent: 'da Ragusa',
  nearbyTours: [
    {
      title: 'Tour del Barocco',
      image:
        'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&q=70&auto=format&fm=webp',
      href: '/tour-barocco'
    },
    {
      title: 'Ortigia + Taormina',
      image:
        'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?w=800&q=70&auto=format&fm=webp',
      href: '/tour/dolce-vita-siracusa'
    },
    {
      title: 'Tour Etna',
      image:
        'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=800&q=70&auto=format&fm=webp',
      href: '/tour/etna-premium'
    }
  ],

  ctaEyebrow: 'Per prima cosa',
  ctaH2: 'Da Ragusa, partiamo?',
  ctaSubhead:
    'Comiso, Catania, Siracusa: dimmi solo data, orario e numero passeggeri. Pensiamo a tutto noi.'
};

// ============================================================
// EN versions
// ============================================================

const CATANIA_EN: CityContent = {
  metaTitle: 'Catania Airport Transfer · Private Driver from Catania | Sicily Driver',
  metaDescription:
    'Private luxury-van driver from Catania Fontanarossa Airport to Syracuse from €80, Taormina from €120, Noto, Ragusa Ibla. 24/7 chauffeur service across Sicily.',
  h1: 'Private Driver Catania – Airport Transfer & Chauffeur Service',
  intro:
    'Private driver in Catania for airport transfers (CTA) and custom trips to Siracusa, Noto, Taormina and Ragusa. Luxury vans (including Mercedes V-Class, GLB Premium, E-Class), English-speaking chauffeurs, 24/7 service.',

  heroImage:
    'https://images.unsplash.com/photo-1532509774891-141d37f25ae9?w=1600&q=70&auto=format&fm=webp',
  heroEyebrow: 'Private driver Catania · Fontanarossa · 24/7',
  heroSubhead:
    'Luxury van with chauffeur, real-time flight tracking, free 60-minute waiting time. From the arrivals gate to your destination, hassle-free.',

  trust: [
    {number: 'from €80', label: 'Catania → Syracuse in a luxury van'},
    {number: 'Luxury vans', label: 'including Mercedes V-Class · GLB · E-Class'},
    {number: '24/7', label: 'on WhatsApp and phone'}
  ],

  routesEyebrow: 'Most requested routes',
  routesH2Pre: 'From Catania,',
  routesH2Accent: 'we drive you',
  routes: [
    {from: 'Catania Airport', to: 'Syracuse (Ortigia)', price: 'from €80'},
    {from: 'Catania Airport', to: 'Noto', price: 'from €100'},
    {from: 'Catania Airport', to: 'Taormina', price: 'from €120'},
    {from: 'Catania Airport', to: 'Ragusa Ibla', price: 'from €150'},
    {from: 'Catania Airport', to: 'Modica', price: 'from €140'},
    {from: 'Catania Airport', to: 'Marzamemi', price: 'from €130'},
    {from: 'Catania Cruise Port', to: 'Ortigia', price: 'from €90'}
  ],
  routesMicrocopy:
    'Prices for our luxury van (up to 7 passengers). For routes not listed, message us on WhatsApp — you’ll get a quote within one hour.',

  includesH2Pre: 'What’s',
  includesH2Accent: 'included',
  includes: INCLUDES_EN,

  fleetH2Pre: 'Our',
  fleetH2Accent: 'fleet',
  fleet: FLEET_EN,

  faqEyebrow: 'FAQ',
  faqH2Pre: 'Questions from',
  faqH2Accent: 'Catania travellers',
  faqs: [
    {
      q: 'How much is a transfer Catania Airport to Siracusa?',
      a: 'Prices usually start from €80–€120 depending on time, passengers and vehicle. Send your request on the contact page for an exact quote.'
    },
    {
      q: 'Do you operate at night?',
      a: 'Yes, 24/7 service. For late-night/early-morning flights we recommend booking in advance.'
    }
  ],

  nearbyToursEyebrow: 'Experiences',
  nearbyToursH2Pre: 'Tours that start',
  nearbyToursH2Accent: 'from Catania',
  nearbyTours: [
    {
      title: 'Baroque Tour',
      image:
        'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&q=70&auto=format&fm=webp',
      href: '/tour-barocco'
    },
    {
      title: 'Etna Tour',
      image:
        'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=800&q=70&auto=format&fm=webp',
      href: '/tour/etna-premium'
    },
    {
      title: 'Ortigia + Taormina',
      image:
        'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?w=800&q=70&auto=format&fm=webp',
      href: '/tour/dolce-vita-siracusa'
    }
  ],

  ctaEyebrow: 'First things first',
  ctaH2: 'From Catania, shall we go?',
  ctaSubhead:
    'Three ways to tell us where to pick you up at the airport or cruise port.'
};

const NOTO_EN: CityContent = {
  metaTitle: 'Private Driver Noto · Transfers & Baroque Tour | Sicily Driver',
  metaDescription:
    'Private driver in Noto for transfers from Catania and Comiso airports and Val di Noto Baroque tours. Luxury van with chauffeur, 24/7 service. From Noto to Syracuse from €60.',
  h1: 'Private Driver Noto – Transfers & Baroque Tour',
  intro:
    'Private driver in Noto for transfers from Catania or Comiso airport and Baroque Valley tours: Noto, Modica, Ragusa Ibla and Marzamemi.',

  heroImage:
    'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1600&q=70&auto=format&fm=webp',
  heroEyebrow: 'Private driver Noto · Val di Noto · 24/7',
  heroSubhead:
    'The capital of Sicilian Baroque as a base. From Noto to Syracuse, Marzamemi or Modica in a luxury van with dedicated chauffeur.',

  trust: [
    {number: 'from €60', label: 'Noto → Syracuse in a luxury van'},
    {number: 'Val di Noto', label: 'every day, year-round'},
    {number: '24/7', label: 'on WhatsApp and phone'}
  ],

  routesEyebrow: 'Most requested routes',
  routesH2Pre: 'From Noto,',
  routesH2Accent: 'we drive you',
  routes: [
    {from: 'Noto', to: 'Syracuse (Ortigia)', price: 'from €60'},
    {from: 'Noto', to: 'Catania Airport', price: 'from €100'},
    {from: 'Noto', to: 'Marzamemi', price: 'from €40'},
    {from: 'Noto', to: 'Ragusa Ibla', price: 'from €90'},
    {from: 'Noto', to: 'Modica', price: 'from €70'}
  ],
  routesMicrocopy:
    'Prices for our luxury van (up to 7 passengers). For routes not listed (Comiso, Pozzallo, Catania cruise port) message us on WhatsApp.',

  includesH2Pre: 'What’s',
  includesH2Accent: 'included',
  includes: INCLUDES_EN,

  fleetH2Pre: 'Our',
  fleetH2Accent: 'fleet',
  fleet: FLEET_EN,

  faqEyebrow: 'FAQ',
  faqH2Pre: 'Questions from',
  faqH2Accent: 'Noto travellers',
  faqs: [
    {
      q: 'How long is a Baroque Tour from Noto?',
      a: 'Usually 6–8 hours, with flexible stops and timing based on your preferences.'
    },
    {
      q: 'Can we add a wine tasting?',
      a: 'Of course. We can include wineries or gourmet stops on request.'
    }
  ],

  nearbyToursEyebrow: 'Experiences',
  nearbyToursH2Pre: 'Tours that start',
  nearbyToursH2Accent: 'from Noto',
  nearbyTours: [
    {
      title: 'Baroque Tour',
      image:
        'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&q=70&auto=format&fm=webp',
      href: '/tour-barocco'
    },
    {
      title: 'Etna Tour',
      image:
        'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=800&q=70&auto=format&fm=webp',
      href: '/tour/etna-premium'
    },
    {
      title: 'Ortigia + Taormina',
      image:
        'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?w=800&q=70&auto=format&fm=webp',
      href: '/tour/dolce-vita-siracusa'
    }
  ],

  ctaEyebrow: 'First things first',
  ctaH2: 'From Noto, shall we go?',
  ctaSubhead: 'Message or call — we reply within an hour, even at night.'
};

const TAORMINA_EN: CityContent = {
  metaTitle: 'Private Driver Taormina · Luxury Transfers & Etna Tour | Sicily Driver',
  metaDescription:
    'Private driver Taormina with Catania Airport transfer, Syracuse and Ionian coast routes. Luxury vans including Mercedes V-Class, GLB, E-Class. Etna tour with wine tasting. 24/7.',
  h1: 'Private Driver Taormina – Luxury Transfers & Etna Tour',
  intro:
    'Private driver to/from Taormina with transfers from Catania Airport, Siracusa and the Ionian coast. Add an Etna wine-tasting tour with scenic stops.',

  heroImage:
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=70&auto=format&fm=webp',
  heroEyebrow: 'Private driver Taormina · Ionian Coast · 24/7',
  heroSubhead:
    'From the Greek theatre to Isola Bella, from Catania Fontanarossa to the Etna craters. Luxury van with chauffeur, flexible hours, agreed flat rate.',

  trust: [
    {number: 'from €120', label: 'Taormina → Catania Airport'},
    {number: 'Isola Bella', label: 'and the Ionian coast'},
    {number: '24/7', label: 'on WhatsApp and phone'}
  ],

  routesEyebrow: 'Most requested routes',
  routesH2Pre: 'From Taormina,',
  routesH2Accent: 'we drive you',
  routes: [
    {from: 'Taormina', to: 'Catania Airport', price: 'from €120'},
    {from: 'Taormina', to: 'Syracuse (Ortigia)', price: 'from €180'},
    {from: 'Taormina', to: 'Etna (Silvestri Craters)', price: 'from €100'},
    {from: 'Taormina', to: 'Noto', price: 'from €200'},
    {from: 'Taormina', to: 'Catania Cruise Port', price: 'from €110'}
  ],
  routesMicrocopy:
    'Prices for our luxury van (up to 7 passengers). Combine Taormina → Etna transfer with a wine tour: see the Etna Tour page for details.',

  includesH2Pre: 'What’s',
  includesH2Accent: 'included',
  includes: INCLUDES_EN,

  fleetH2Pre: 'Our',
  fleetH2Accent: 'fleet',
  fleet: FLEET_EN,

  faqEyebrow: 'FAQ',
  faqH2Pre: 'Questions from',
  faqH2Accent: 'Taormina travellers',
  faqs: [
    {
      q: 'Do you provide Taormina ⇄ Catania Airport transfer?',
      a: 'Yes, with flight monitoring and flexible timing. The driver waits at arrivals.'
    },
    {
      q: 'Can we combine Etna + Taormina in one day?',
      a: 'Absolutely. Typical plan 6–8 hours with customized stops.'
    }
  ],

  nearbyToursEyebrow: 'Experiences',
  nearbyToursH2Pre: 'Tours that start',
  nearbyToursH2Accent: 'from Taormina',
  nearbyTours: [
    {
      title: 'Etna Tour',
      image:
        'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=800&q=70&auto=format&fm=webp',
      href: '/tour/etna-premium'
    },
    {
      title: 'Ortigia + Taormina',
      image:
        'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?w=800&q=70&auto=format&fm=webp',
      href: '/tour/dolce-vita-siracusa'
    },
    {
      title: 'Baroque Tour',
      image:
        'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&q=70&auto=format&fm=webp',
      href: '/tour-barocco'
    }
  ],

  ctaEyebrow: 'First things first',
  ctaH2: 'From Taormina, shall we go?',
  ctaSubhead:
    'Airport transfer, Etna tour, cruise transfer — message us, we reply within an hour.'
};

const RAGUSA_EN: CityContent = {
  metaTitle: 'Private Driver Ragusa · Chauffeur & Airport Transfers | Sicily Driver',
  metaDescription:
    'Private driver in Ragusa and Ragusa Ibla: transfers to/from Catania and Comiso airport, Baroque tours, links to Syracuse and Noto. Luxury van with chauffeur 24/7.',
  h1: 'Private Driver Ragusa – Chauffeur & Airport Transfers',
  intro:
    'Private driver in Ragusa and Ragusa Ibla for transfers to/from Catania and Comiso Airport, Baroque tours and connections to Siracusa and Noto.',

  heroImage:
    'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=1600&q=70&auto=format&fm=webp',
  heroEyebrow: 'Private driver Ragusa Ibla · Val di Noto · 24/7',
  heroSubhead:
    'From San Giorgio Cathedral to Comiso and Catania airports. Luxury van with chauffeur across Ragusa, Modica, Scicli and the whole province.',

  trust: [
    {number: 'Ragusa Ibla', label: 'and Modica at the heart'},
    {number: '2 airports', label: 'Comiso and Catania served'},
    {number: '24/7', label: 'on WhatsApp and phone'}
  ],

  routesEyebrow: 'Most requested routes',
  routesH2Pre: 'From Ragusa,',
  routesH2Accent: 'we drive you',
  routes: [
    {from: 'Ragusa', to: 'Comiso Airport', price: 'from €40'},
    {from: 'Ragusa', to: 'Catania Airport', price: 'from €150'},
    {from: 'Ragusa', to: 'Syracuse (Ortigia)', price: 'from €120'},
    {from: 'Ragusa', to: 'Modica', price: 'from €40'},
    {from: 'Ragusa', to: 'Noto', price: 'from €90'},
    {from: 'Ragusa', to: 'Marzamemi', price: 'from €110'}
  ],
  routesMicrocopy:
    'Prices for our luxury van (up to 7 passengers). Comiso is the closest airport (40 min), Catania takes 1h30 but offers more flights.',

  includesH2Pre: 'What’s',
  includesH2Accent: 'included',
  includes: INCLUDES_EN,

  fleetH2Pre: 'Our',
  fleetH2Accent: 'fleet',
  fleet: FLEET_EN,

  faqEyebrow: 'FAQ',
  faqH2Pre: 'Questions from',
  faqH2Accent: 'Ragusa travellers',
  faqs: [
    {
      q: 'Do you offer child seats?',
      a: 'Yes, on request during booking, at no extra cost.'
    },
    {
      q: 'How early should we book?',
      a: 'We suggest 12–24 hours in advance; for urgent requests we do our best to accommodate.'
    }
  ],

  nearbyToursEyebrow: 'Experiences',
  nearbyToursH2Pre: 'Tours that start',
  nearbyToursH2Accent: 'from Ragusa',
  nearbyTours: [
    {
      title: 'Baroque Tour',
      image:
        'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&q=70&auto=format&fm=webp',
      href: '/tour-barocco'
    },
    {
      title: 'Ortigia + Taormina',
      image:
        'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?w=800&q=70&auto=format&fm=webp',
      href: '/tour/dolce-vita-siracusa'
    },
    {
      title: 'Etna Tour',
      image:
        'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=800&q=70&auto=format&fm=webp',
      href: '/tour/etna-premium'
    }
  ],

  ctaEyebrow: 'First things first',
  ctaH2: 'From Ragusa, shall we go?',
  ctaSubhead:
    'Comiso, Catania, Syracuse — give us date, time and passenger count. We handle the rest.'
};

// ============================================================
// Lookup
// ============================================================

const DATA: Record<Locale, Record<CityKey, CityContent>> = {
  it: {catania: CATANIA_IT, noto: NOTO_IT, taormina: TAORMINA_IT, ragusa: RAGUSA_IT},
  en: {catania: CATANIA_EN, noto: NOTO_EN, taormina: TAORMINA_EN, ragusa: RAGUSA_EN}
};

export function getCity(key: CityKey, locale: Locale): CityContent {
  return DATA[locale][key];
}
