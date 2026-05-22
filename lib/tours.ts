// ============================================================
// Sicily Driver Siracusa — Tour data (Cluster Esperienziale)
//
// SEO-locked content per /tour-* (IT) e /en/*-tour (EN)
// H1 + intro paragraphs estratti dal sito attuale .php dove esistenti.
// Sezione "tappe" — scroll-driven previsto in WIREFRAME §4, fallback
// stacked editorial per Phase 1.
// ============================================================

import type {Locale} from './cities';

export type TourKey = 'barocco' | 'etna' | 'ortigia-taormina';

export type TourStage = {
  number: string;
  title: string;
  duration: string;
  body: string;
  image: string;
};

export type TourNumber = {value: string; label: string};

export type TourContent = {
  metaTitle: string;
  metaDescription: string;

  heroImage: string;
  heroEyebrow: string;
  h1: string;
  heroSubhead: string;

  introH2Pre: string;
  introH2Accent: string;
  introBody: string[];

  numbersEyebrow: string;
  numbersH2Pre: string;
  numbersH2Accent: string;
  numbers: TourNumber[];

  stagesEyebrow: string;
  stagesH2Pre: string;
  stagesH2Accent: string;
  stages: TourStage[];

  includedH2Pre: string;
  includedH2Accent: string;
  included: string[];
  excluded: string[];
  includedLabel: string;
  excludedLabel: string;

  faqEyebrow: string;
  faqH2Pre: string;
  faqH2Accent: string;
  faqs: {q: string; a: string}[];

  ctaEyebrow: string;
  ctaH2: string;
  ctaSubhead: string;
};

// ============================================================
// HUB content type (different shape — 4 itinerari card + storytelling)
// ============================================================

export type ItineraryCard = {
  number: string;
  title: string;
  duration: string;
  price: string;
  body: string;
  image: string;
  href: '/tour-barocco' | '/tour-etna' | '/tour-ortigia-taormina' | '/contatti';
};

export type TourHubContent = {
  metaTitle: string;
  metaDescription: string;

  heroImage: string;
  heroEyebrow: string;
  h1Pre: string;
  h1Accent: string;
  heroSubhead: string;

  introH2Pre: string;
  introH2Accent: string;
  introBody: string;

  itinerariesEyebrow: string;
  itinerariesH2Pre: string;
  itinerariesH2Accent: string;
  itineraries: ItineraryCard[];

  storyEyebrow: string;
  storyH2Pre: string;
  storyH2Accent: string;
  storyParagraphs: string[];

  includedEyebrow: string;
  includedH2Pre: string;
  includedH2Accent: string;
  included: string[];

  faqEyebrow: string;
  faqH2Pre: string;
  faqH2Accent: string;
  faqs: {q: string; a: string}[];

  ctaEyebrow: string;
  ctaH2: string;
  ctaSubhead: string;
};

// ============================================================
// TOUR HUB IT/EN
// ============================================================

const HUB_IT: TourHubContent = {
  metaTitle: 'Tour Sicilia con Autista Privato — Sicily Driver Siracusa',
  metaDescription:
    'Tour privati in Sicilia con autista bilingue e Mercedes Classe V. Barocco, Etna, Ortigia, Taormina. 6–8 ore con soste su misura. Da €350.',

  heroImage:
    'https://images.unsplash.com/photo-1583435423797-be15ddffe3c2?w=1800&q=70&auto=format&fm=webp',
  heroEyebrow: 'Tour privati · Sicilia orientale',
  h1Pre: 'I tour che facciamo',
  h1Accent: 'di Sicilia',
  heroSubhead: 'Quattro itinerari, infinite combinazioni.',

  introH2Pre: 'Quattro mondi',
  introH2Accent: 'in un giorno',
  introBody:
    'Scopri la Sicilia con un driver dedicato: itinerari su misura, Mercedes di classe e autisti professionisti. Partenze da Siracusa, Catania, Noto, Ragusa, Taormina. Servizio attivo 24/7.',

  itinerariesEyebrow: 'Scegli un itinerario',
  itinerariesH2Pre: 'Gli',
  itinerariesH2Accent: 'itinerari',
  itineraries: [
    {
      number: '01',
      title: 'Tour del Barocco',
      duration: '6–8 ore',
      price: 'da €350',
      body: 'Noto, Modica, Ragusa Ibla. Le tre città simbolo del barocco siciliano in giornata.',
      image:
        'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1000&q=70&auto=format&fm=webp',
      href: '/tour-barocco'
    },
    {
      number: '02',
      title: 'Tour Etna',
      duration: '5–7 ore',
      price: 'da €320',
      body: 'Crateri Silvestri a 1900m, cantina con degustazione, Valle del Bove. Combinabile con Taormina.',
      image:
        'https://images.unsplash.com/photo-1604930571107-7e07e44f31b8?w=1000&q=70&auto=format&fm=webp',
      href: '/tour-etna'
    },
    {
      number: '03',
      title: 'Ortigia e Taormina',
      duration: '7–9 ore',
      price: 'da €380',
      body: 'Ortigia con Duomo e Fonte Aretusa al mattino, pranzo vista mare, Taormina e teatro greco al pomeriggio.',
      image:
        'https://images.unsplash.com/photo-1568797629192-2e6ce1f5b1d6?w=1000&q=70&auto=format&fm=webp',
      href: '/tour-ortigia-taormina'
    },
    {
      number: '04',
      title: 'Tour su misura',
      duration: 'durata personalizzata',
      price: 'preventivo dedicato',
      body: 'Ci dici dove vuoi andare. Costruiamo l’itinerario insieme: foto-spot, ristoranti, soste, ritmo del giorno.',
      image:
        'https://images.unsplash.com/photo-1571687948252-c4f4d9d57c41?w=1000&q=70&auto=format&fm=webp',
      href: '/contatti'
    }
  ],

  storyEyebrow: 'Cosa succede quando prenoti',
  storyH2Pre: 'Una',
  storyH2Accent: 'giornata tipo',
  storyParagraphs: [
    'Ti veniamo a prendere alle otto, all’ingresso del tuo hotel. La Mercedes è già accesa, l’aria condizionata regolata, l’acqua fresca nelle bottigliette.',
    'Partiamo verso Noto. Strada panoramica per la prima mezz’ora, poi una sosta a Avola per il caffè — il primo della giornata, in un bar che conosciamo dove la granita di mandorla non è quella che fanno per i turisti.',
    'A Noto camminiamo. Ti aspettiamo per il tempo che vuoi alla Cattedrale, scattiamo le foto giuste sulla scala, raccontiamo cosa c’era qui prima del terremoto del 1693. Niente fretta, è la tua giornata.',
    'Riprendiamo verso Modica per pranzo. Ti consigliamo dove sederti — non perché abbiamo accordi, ma perché ci mangiamo anche noi quando passiamo. Cioccolato dopo, ovviamente.',
    'Pomeriggio a Ragusa Ibla, con il sole basso e la cattedrale che si illumina. Risaliamo verso casa con la luce d’oro che ci accompagna. Arriviamo per cena.',
    'Questo è uno dei modi possibili. L’altro è dirci tu come lo vuoi.'
  ],

  includedEyebrow: 'Sempre con noi',
  includedH2Pre: 'Cosa è',
  includedH2Accent: 'sempre incluso',
  included: [
    'Mercedes Classe V (fino a 7 passeggeri)',
    'Driver bilingue italiano/inglese',
    'Soste fotografiche dove vuoi',
    'Acqua fresca a bordo',
    'Flessibilità oraria piena',
    'Wi-Fi su richiesta',
    'Seggiolini bambino senza costi'
  ],

  faqEyebrow: 'Dubbi',
  faqH2Pre: 'Le domande',
  faqH2Accent: 'che ci fate',
  faqs: [
    {
      q: 'Possiamo personalizzare le soste?',
      a: 'Sì, ogni tour è modulabile: foto-spot, tempo libero, degustazioni e visite guidate su richiesta.'
    },
    {
      q: 'Quanto dura un tour tipico?',
      a: 'Da 6 a 9 ore in base al percorso. Per itinerari più lunghi possiamo estendere a giornata intera.'
    },
    {
      q: 'Sono disponibili seggiolini per bambini?',
      a: 'Certo, basta richiederli in fase di prenotazione. Inclusi senza costi extra.'
    },
    {
      q: 'Si può combinare Etna e Taormina nello stesso giorno?',
      a: 'Sì, il tour Etna + Taormina è uno dei più richiesti. Mattina sull’Etna, pranzo in cantina o a Taormina, pomeriggio al teatro greco.'
    },
    {
      q: 'Da dove si parte?',
      a: 'Partenze comode anche da Catania, Noto, Taormina, Ragusa. Ti veniamo a prendere ovunque tu sia in Sicilia orientale.'
    }
  ],

  ctaEyebrow: 'Per prima cosa',
  ctaH2: 'Pronto a scegliere?',
  ctaSubhead:
    'Scrivici tipo di tour, data e numero passeggeri: ti rispondiamo con un preventivo entro un’ora.'
};

const HUB_EN: TourHubContent = {
  metaTitle: 'Sicily Private Tours with Driver — Sicily Driver Syracuse',
  metaDescription:
    'Private Sicily tours with English-speaking driver and Mercedes V-Class. Baroque, Etna, Ortigia, Taormina. 6–8 hours with bespoke stops. From €350.',

  heroImage:
    'https://images.unsplash.com/photo-1583435423797-be15ddffe3c2?w=1800&q=70&auto=format&fm=webp',
  heroEyebrow: 'Private tours · Eastern Sicily',
  h1Pre: 'The tours we make',
  h1Accent: 'of Sicily',
  heroSubhead: 'Four itineraries, endless combinations.',

  introH2Pre: 'Four worlds',
  introH2Accent: 'in one day',
  introBody:
    'Discover Sicily with a dedicated private driver. Tailor-made itineraries, Mercedes vehicles and English-speaking chauffeurs. Departures from Siracusa, Catania, Noto, Ragusa and Taormina — 24/7.',

  itinerariesEyebrow: 'Pick an itinerary',
  itinerariesH2Pre: 'The',
  itinerariesH2Accent: 'itineraries',
  itineraries: [
    {
      number: '01',
      title: 'Baroque Tour',
      duration: '6–8 hours',
      price: 'from €350',
      body: 'Noto, Modica, Ragusa Ibla. The three Sicilian Baroque towns in one day.',
      image:
        'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1000&q=70&auto=format&fm=webp',
      href: '/tour-barocco'
    },
    {
      number: '02',
      title: 'Etna Tour',
      duration: '5–7 hours',
      price: 'from €320',
      body: 'Silvestri Craters at 1,900m, winery with tasting, Valle del Bove. Combinable with Taormina.',
      image:
        'https://images.unsplash.com/photo-1604930571107-7e07e44f31b8?w=1000&q=70&auto=format&fm=webp',
      href: '/tour-etna'
    },
    {
      number: '03',
      title: 'Ortigia and Taormina',
      duration: '7–9 hours',
      price: 'from €380',
      body: 'Ortigia with Cathedral and Arethusa fountain in the morning, seaside lunch, Taormina and Greek theatre in the afternoon.',
      image:
        'https://images.unsplash.com/photo-1568797629192-2e6ce1f5b1d6?w=1000&q=70&auto=format&fm=webp',
      href: '/tour-ortigia-taormina'
    },
    {
      number: '04',
      title: 'Custom tour',
      duration: 'custom length',
      price: 'on request',
      body: 'You tell us where you want to go. We build the itinerary together: photo-spots, restaurants, stops, the rhythm of the day.',
      image:
        'https://images.unsplash.com/photo-1571687948252-c4f4d9d57c41?w=1000&q=70&auto=format&fm=webp',
      href: '/contatti'
    }
  ],

  storyEyebrow: 'What happens when you book',
  storyH2Pre: 'A',
  storyH2Accent: 'typical day',
  storyParagraphs: [
    'We pick you up at eight, at your hotel entrance. The Mercedes is already running, AC dialed in, cold water in the bottles.',
    'We head toward Noto. Scenic road for the first half hour, then a stop in Avola for coffee — the first of the day, at a bar we know where the almond granita isn’t the one they make for tourists.',
    'In Noto we walk. We wait however long you want at the Cathedral, take the right photos from the staircase, tell you what was here before the 1693 earthquake. No rush, it’s your day.',
    'We move on to Modica for lunch. We tell you where to sit — not because we have deals, but because we eat there too when we pass through. Chocolate after, obviously.',
    'Afternoon in Ragusa Ibla, with the sun low and the cathedral lit up. We drive back home with the golden hour with us. We arrive for dinner.',
    'This is one possible way. The other is for you to tell us how you want it.'
  ],

  includedEyebrow: 'Always with us',
  includedH2Pre: 'What’s',
  includedH2Accent: 'always included',
  included: [
    'Mercedes V-Class (up to 7 passengers)',
    'English-speaking driver',
    'Photo stops wherever you want',
    'Cold water on board',
    'Full schedule flexibility',
    'Wi-Fi on request',
    'Child seats at no extra cost'
  ],

  faqEyebrow: 'FAQ',
  faqH2Pre: 'Frequent',
  faqH2Accent: 'questions',
  faqs: [
    {
      q: 'Can we customise the stops?',
      a: 'Yes, every tour is modular: photo-spots, free time, tastings and guided visits on request.'
    },
    {
      q: 'How long does a typical tour last?',
      a: 'From 6 to 9 hours depending on the route. For longer itineraries we can extend to a full day.'
    },
    {
      q: 'Are child seats available?',
      a: 'Of course — just request them at booking. Included at no extra cost.'
    },
    {
      q: 'Can Etna and Taormina be combined in the same day?',
      a: 'Yes, the Etna + Taormina tour is one of the most popular. Morning on Etna, lunch at the winery or in Taormina, afternoon at the Greek theatre.'
    },
    {
      q: 'Where do we start from?',
      a: 'Convenient departures from Catania, Noto, Taormina and Ragusa as well. We pick you up wherever you are in eastern Sicily.'
    }
  ],

  ctaEyebrow: 'First things first',
  ctaH2: 'Ready to choose?',
  ctaSubhead:
    'Tell us tour type, date and passenger count: we reply with a quote within an hour.'
};

// ============================================================
// TOUR DETAILS - shared "included/excluded" templates
// ============================================================

const INCLUDED_IT = [
  'Mercedes Classe V o GLB Premium, fino a 7 passeggeri',
  'Driver bilingue italiano/inglese per tutta la giornata',
  'Soste fotografiche dove vuoi, senza fretta',
  'Acqua fresca a bordo, sempre',
  'Flessibilità oraria piena',
  'Wi-Fi su richiesta',
  'Seggiolini bambino senza costi'
];

const EXCLUDED_IT = [
  'Pranzo (te lo consigliamo, ma scegli tu dove e come)',
  'Ingressi a siti archeologici, musei, ville chiuse',
  'Mance al driver (facoltative)',
  'Degustazioni dolci o vino (organizzabili in anticipo)'
];

const INCLUDED_EN = [
  'Mercedes V-Class or GLB Premium, up to 7 passengers',
  'English-speaking driver throughout the day',
  'Photo stops wherever you want, no rush',
  'Cold water on board, always',
  'Full schedule flexibility',
  'Wi-Fi on request',
  'Child seats at no extra cost'
];

const EXCLUDED_EN = [
  'Lunch (we recommend, you choose where and how)',
  'Entry tickets to archaeological sites, museums, closed villas',
  'Driver tips (optional)',
  'Sweet or wine tastings (can be arranged in advance)'
];

// ============================================================
// BAROCCO
// ============================================================

const BAROCCO_IT: TourContent = {
  metaTitle:
    'Tour del Barocco · Noto, Modica & Ragusa in un Giorno | Sicily Driver Siracusa',
  metaDescription:
    'Tour privato di una giornata tra Noto, Modica e Ragusa Ibla. Mercedes Classe V con autista bilingue. 6–8 ore, partenza da Siracusa. Da €350.',

  heroImage:
    'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1800&q=70&auto=format&fm=webp',
  heroEyebrow: 'Tour privato · 6–8 ore',
  h1: 'Tour del Barocco: Noto, Modica & Ragusa in un Giorno',
  heroSubhead: 'Le tre città simbolo del barocco siciliano, in giornata.',

  introH2Pre: 'Quello che',
  introH2Accent: 'vivrai',
  introBody: [
    'Vivi l’emozione del Tour del Barocco in Sicilia: un’esperienza indimenticabile tra le città di Noto, Modica e Ragusa. Scopri la maestosità delle facciate barocche, i palazzi storici e le chiese simbolo di una cultura artistica senza eguali.',
    'Partendo da Siracusa, ti accompagniamo attraverso le meraviglie di Noto con la sua Cattedrale di San Nicolò, proseguendo verso la suggestiva Modica, patria del pregiato cioccolato artigianale e della chiesa di San Pietro, fino alla celebre Ragusa Ibla con la magnifica Cattedrale di San Giorgio. Ogni tappa è studiata per offrirti comfort, storia e gusto autentico.',
    'Questo tour privato NCC garantisce puntualità e professionalità dei nostri autisti, parco auto di lusso (Mercedes Classe V, GLB Premium, Classe E), itinerario personalizzabile e supporto 24/7.'
  ],

  numbersEyebrow: 'Il tour in numeri',
  numbersH2Pre: 'In',
  numbersH2Accent: 'quattro numeri',
  numbers: [
    {value: '6–8h', label: 'Durata totale'},
    {value: '4 tappe', label: 'Noto · Modica · Ragusa Ibla · Scicli (opzionale)'},
    {value: '2 lingue', label: 'Driver IT/EN nativi'},
    {value: 'da €350', label: 'Per auto, fino a 7 pax'}
  ],

  stagesEyebrow: 'Tappa per tappa',
  stagesH2Pre: 'Le città',
  stagesH2Accent: 'che attraversiamo',
  stages: [
    {
      number: '01',
      title: 'Noto',
      duration: '1h 30min',
      body: 'Arriviamo a Noto verso le nove, quando la luce inizia a scaldare la pietra calcarea della Cattedrale di San Nicolò. Saliamo i 25 scalini, ci fermiamo per le foto, raccontiamo quello che c’era qui prima del terremoto del 1693. Tempo libero per camminare sul Corso e fermarsi davanti a Palazzo Nicolaci.',
      image:
        'https://images.unsplash.com/photo-1571687948252-c4f4d9d57c41?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '02',
      title: 'Modica',
      duration: '2h (include pranzo)',
      body: 'A mezzogiorno scendiamo a Modica. La città si arrampica su due valloni. Ti facciamo scendere vicino al Duomo di San Giorgio e poi giù per Corso Umberto fino alla chiesa di San Pietro. Pranzo dove ti consigliamo, e dopo il cioccolato di Modica — non quello dei souvenir, quello di una bottega che lo fa da generazioni con la ricetta del cacao a freddo.',
      image:
        'https://images.unsplash.com/photo-1612965103229-d8e0d2c9dafd?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '03',
      title: 'Ragusa Ibla',
      duration: '1h 30min',
      body: 'Nel pomeriggio la luce è ancora ferma. Ti portiamo a Ragusa Ibla, parcheggiamo nella piazza alta e scendiamo a piedi verso la Cattedrale di San Giorgio. La via è in discesa, si cammina bene. Vicoli, palazzi, terrazze sui valloni. C’è chi riconosce qualcosa da una serie italiana famosa — ma lo lasciamo scoprire a te.',
      image:
        'https://images.unsplash.com/photo-1604501748863-22a0e6f63a4f?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '04',
      title: 'Il rientro',
      duration: '1h',
      body: 'Per il ritorno scegli tu: dritto a casa con la luce d’oro, oppure una mezz’ora a Scicli (se l’hai amata in TV) o quaranta minuti a Marzamemi (se vuoi un aperitivo sul mare prima di cena). Arriviamo per cena, sempre.',
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=70&auto=format&fm=webp'
    }
  ],

  includedH2Pre: 'Cosa',
  includedH2Accent: 'includi (e cosa no)',
  included: INCLUDED_IT,
  excluded: EXCLUDED_IT,
  includedLabel: 'Incluso',
  excludedLabel: 'Non incluso',

  faqEyebrow: 'Dubbi',
  faqH2Pre: 'Le domande',
  faqH2Accent: 'più frequenti',
  faqs: [
    {
      q: 'Quando si parte?',
      a: 'Tipicamente alle 8:30 dal tuo hotel a Siracusa o sedi limitrofe. Possiamo partire prima (alle 7) o più tardi (alle 10) — la giornata si adatta a te.'
    },
    {
      q: 'Si può fare il tour senza fermarsi a Modica per pranzo?',
      a: 'Certo, puoi pranzare a Ragusa Ibla o non pranzare affatto. Il tour è modulabile: ti diamo l’itinerario tipo, poi lo cuciamo sulla tua giornata.'
    },
    {
      q: 'Quante persone entrano?',
      a: 'La Mercedes Classe V trasporta fino a 7 passeggeri con bagagli da giornata. Per gruppi più grandi coordiniamo più auto in parallelo.'
    },
    {
      q: 'Quanto costa il tour?',
      a: 'Da €350 per la giornata completa con Mercedes Classe V e autista bilingue. Il prezzo non cambia con il numero di passeggeri (fino a 7). Per Classe E o GLB il listino è diverso.'
    },
    {
      q: 'Si può prenotare last-minute?',
      a: 'Se abbiamo l’auto libera, sì — anche il giorno prima. Scrivici su WhatsApp e ti diciamo subito.'
    }
  ],

  ctaEyebrow: 'Pronto a partire?',
  ctaH2: 'Vediamoci a Noto.',
  ctaSubhead: 'Scrivici data e numero passeggeri: la giornata la cuciamo insieme.'
};

const BAROCCO_EN: TourContent = {
  metaTitle:
    'Baroque Tour · Noto, Modica & Ragusa in One Day | Sicily Driver Syracuse',
  metaDescription:
    'Private day tour through Noto, Modica and Ragusa Ibla. Mercedes V-Class with English-speaking driver. 6–8 hours, departing from Syracuse. From €350.',

  heroImage:
    'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1800&q=70&auto=format&fm=webp',
  heroEyebrow: 'Private tour · 6–8 hours',
  h1: 'Baroque Tour: Noto, Modica & Ragusa in One Day',
  heroSubhead: 'The three Sicilian Baroque towns, in one day.',

  introH2Pre: 'What',
  introH2Accent: "you'll experience",
  introBody: [
    'Experience the magic of our Baroque Tour in Sicily: an unforgettable journey through the Baroque masterpieces of Noto, Modica, and Ragusa.',
    'Starting from Syracuse, we guide you to the majestic Cathedral of San Nicolò in Noto, then to the charming Church of San Pietro in Modica, famous for its artisanal chocolate, and finally to the enchanting Cathedral of San Giorgio in Ragusa Ibla.',
    'This private NCC tour ensures punctuality and professionalism of our drivers, a luxury fleet (Mercedes V-Class, GLB Premium, E-Class), a customisable itinerary and 24/7 support.'
  ],

  numbersEyebrow: 'The tour by numbers',
  numbersH2Pre: 'In',
  numbersH2Accent: 'four numbers',
  numbers: [
    {value: '6–8h', label: 'Total length'},
    {value: '4 stops', label: 'Noto · Modica · Ragusa Ibla · Scicli (optional)'},
    {value: '2 languages', label: 'Native IT/EN drivers'},
    {value: 'from €350', label: 'Per car, up to 7 passengers'}
  ],

  stagesEyebrow: 'Stop by stop',
  stagesH2Pre: 'The towns',
  stagesH2Accent: 'we cross',
  stages: [
    {
      number: '01',
      title: 'Noto',
      duration: '1h 30min',
      body: 'We arrive in Noto around nine, when the light starts warming the limestone of the Cathedral of San Nicolò. We climb the 25 steps, stop for photos, and tell you what was here before the 1693 earthquake. Free time to walk along Corso and pause in front of Palazzo Nicolaci.',
      image:
        'https://images.unsplash.com/photo-1571687948252-c4f4d9d57c41?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '02',
      title: 'Modica',
      duration: '2h (lunch included)',
      body: 'At noon we descend to Modica. The city climbs across two valleys. We drop you near the Duomo of San Giorgio, then down Corso Umberto to the Church of San Pietro. Lunch where we recommend, and afterwards Modica chocolate — not the souvenir kind, but from a shop that has made it for generations with the cold cacao recipe.',
      image:
        'https://images.unsplash.com/photo-1612965103229-d8e0d2c9dafd?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '03',
      title: 'Ragusa Ibla',
      duration: '1h 30min',
      body: 'In the afternoon the light is still. We take you to Ragusa Ibla, park in the upper square and walk down to the Cathedral of San Giorgio. The way is downhill, easy to walk. Alleys, palazzi, terraces over the valleys. Some travellers recognise something from a famous Italian series — we let you discover it.',
      image:
        'https://images.unsplash.com/photo-1604501748863-22a0e6f63a4f?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '04',
      title: 'The way back',
      duration: '1h',
      body: 'For the return you choose: straight home with the golden light, or half an hour in Scicli (if you loved it on TV) or forty minutes in Marzamemi (for a seaside aperitif before dinner). We always arrive in time for dinner.',
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=70&auto=format&fm=webp'
    }
  ],

  includedH2Pre: 'What’s',
  includedH2Accent: 'included (and what’s not)',
  included: INCLUDED_EN,
  excluded: EXCLUDED_EN,
  includedLabel: 'Included',
  excludedLabel: 'Not included',

  faqEyebrow: 'FAQ',
  faqH2Pre: 'Frequent',
  faqH2Accent: 'questions',
  faqs: [
    {
      q: 'When do we start?',
      a: 'Typically at 8:30 from your hotel in Syracuse or nearby. We can start earlier (7am) or later (10am) — the day fits you.'
    },
    {
      q: 'Can we do the tour without stopping in Modica for lunch?',
      a: 'Of course — you can have lunch in Ragusa Ibla or skip it. The tour is modular: we give you the template, then tailor it to your day.'
    },
    {
      q: 'How many people fit?',
      a: 'The Mercedes V-Class carries up to 7 passengers with day luggage. For larger groups we coordinate multiple cars in parallel.'
    },
    {
      q: 'How much does the tour cost?',
      a: 'From €350 for the full day with Mercedes V-Class and English-speaking driver. The price doesn’t change with the number of passengers (up to 7). For E-Class or GLB the rate is different.'
    },
    {
      q: 'Can we book last-minute?',
      a: 'If we have a car free, yes — even the day before. Message us on WhatsApp and we’ll let you know straight away.'
    }
  ],

  ctaEyebrow: 'Ready to go?',
  ctaH2: 'See you in Noto.',
  ctaSubhead: 'Send us the date and passenger count: we tailor the day together.'
};

// ============================================================
// ETNA
// ============================================================

const ETNA_IT: TourContent = {
  metaTitle:
    'Tour Etna · Da Catania, Taormina o Siracusa con Autista | Sicily Driver',
  metaDescription:
    'Tour privato sull’Etna con Mercedes e autista bilingue. Crateri Silvestri 1900m, cantina con degustazione, Valle del Bove. 5–7 ore, da €320.',

  heroImage:
    'https://images.unsplash.com/photo-1604930571107-7e07e44f31b8?w=1800&q=70&auto=format&fm=webp',
  heroEyebrow: 'Tour privato · 5–7 ore',
  h1: 'Tour Etna: Crateri Silvestri e cantina, in giornata',
  heroSubhead: 'Il vulcano più alto d’Europa, raggiunto comodamente in Mercedes.',

  introH2Pre: 'Quello che',
  introH2Accent: 'vivrai',
  introBody: [
    'Saliamo sull’Etna dal versante sud, fino a Rifugio Sapienza e ai Crateri Silvestri (1900m s.l.m.). Una mattinata fra la pietra lavica, i panorami sulla Valle del Bove e l’aria sottile delle alte quote.',
    'Dopo i crateri scendiamo per una sosta in cantina, dove la vite vive sulle colate fossili: degustazione di Etna Rosso e Bianco, con prodotti tipici locali. Per i pranzi più lunghi possiamo allungare la sosta o aggiungere una visita guidata.',
    'Il tour è perfetto da combinare con Taormina o Catania nel pomeriggio: a 45 minuti di Mercedes hai il mare ionico e il teatro greco.'
  ],

  numbersEyebrow: 'Il tour in numeri',
  numbersH2Pre: 'In',
  numbersH2Accent: 'quattro numeri',
  numbers: [
    {value: '5–7h', label: 'Durata totale'},
    {value: '1900m', label: 'Quota Crateri Silvestri'},
    {value: '3 vini', label: 'Degustazione Etna in cantina'},
    {value: 'da €320', label: 'Per auto, fino a 7 pax'}
  ],

  stagesEyebrow: 'Tappa per tappa',
  stagesH2Pre: 'Come',
  stagesH2Accent: 'si sale',
  stages: [
    {
      number: '01',
      title: 'Rifugio Sapienza',
      duration: '45 min di salita',
      body: 'Dalla pianura di Catania saliamo per la SP92 attraverso i paesi etnei. La vegetazione cambia rapidamente: dagli ulivi alla ginestra dell’Etna, fino alla pietra lavica nuda. Arriviamo a Rifugio Sapienza (1900m), punto di partenza ufficiale per i Crateri Silvestri.',
      image:
        'https://images.unsplash.com/photo-1604930571107-7e07e44f31b8?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '02',
      title: 'Crateri Silvestri',
      duration: '1h 30min',
      body: 'Passeggiata fra i crateri inattivi formati dall’eruzione del 1892. Si cammina sulla sabbia lavica nera, si scendono nelle conche dei crateri, si vede la Valle del Bove dall’alto. È una camminata facile, accessibile anche a famiglie. Tempo per le foto, per respirare l’aria sottile, per capire quanto è grande l’Etna.',
      image:
        'https://images.unsplash.com/photo-1612965103229-d8e0d2c9dafd?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '03',
      title: 'Cantina con degustazione',
      duration: '1h 30min',
      body: 'Scendiamo di quota e fermiamo in una delle cantine che amiamo, sui versanti nord o est dell’Etna. La vite vive su terreni lavici di duemila anni. Degustazione di tre vini DOC Etna (Rosso, Bianco, Rosato) con tagliere di formaggi e salumi locali. Per chi vuole, visita guidata alle barricaie.',
      image:
        'https://images.unsplash.com/photo-1568797629192-2e6ce1f5b1d6?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '04',
      title: 'Discesa',
      duration: '45 min',
      body: 'Per il ritorno scegli tu: rientro diretto al tuo hotel, oppure prosecuzione verso Taormina (45 min) per il teatro greco e Isola Bella nel pomeriggio. Si può anche fare la combo Etna-Taormina full-day, lo organizziamo con un piccolo extra.',
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=70&auto=format&fm=webp'
    }
  ],

  includedH2Pre: 'Cosa',
  includedH2Accent: 'includi (e cosa no)',
  included: [
    ...INCLUDED_IT,
    'Degustazione di 3 vini DOC Etna in cantina (Etna Rosso, Bianco, Rosato)',
    'Tagliere formaggi e salumi locali in cantina'
  ],
  excluded: [
    'Eventuale funivia ai Crateri Centrali (€68 a persona, opzionale)',
    'Pranzo se aggiuntivo alla degustazione',
    'Mance al driver',
    'Visita guidata escursionistica oltre i Crateri Silvestri'
  ],
  includedLabel: 'Incluso',
  excludedLabel: 'Non incluso',

  faqEyebrow: 'Dubbi',
  faqH2Pre: 'Le domande',
  faqH2Accent: 'più frequenti',
  faqs: [
    {
      q: 'È sicuro salire sull’Etna?',
      a: 'I Crateri Silvestri sono crateri inattivi dal 1892. La zona è sempre aperta e monitorata. In caso di attività vulcanica in atto modifichiamo il programma senza costi.'
    },
    {
      q: 'Quanto si cammina?',
      a: 'La passeggiata ai Crateri Silvestri dura 30–45 minuti su terreno sabbioso facile, accessibile anche a bambini e anziani in forma. Niente arrampicata.'
    },
    {
      q: 'Cosa indossare?',
      a: 'Scarpe chiuse comode (no sandali), giacca a vento anche d’estate (a 1900m c’è sempre vento), occhiali da sole. Acqua e snack ti aspettano in auto.'
    },
    {
      q: 'Si può salire più in alto?',
      a: 'Sì, oltre i Crateri Silvestri c’è la funivia per i Crateri Centrali (2500m). Costa €68 a persona e dura altre 2 ore. Lo aggiungiamo al programma se vuoi — chiedici prima.'
    },
    {
      q: 'Si può combinare con Taormina?',
      a: 'Sì. Etna mattina + Taormina pomeriggio è un classico. Aggiungiamo 1h e mezza al programma; trovi i dettagli su /tour-ortigia-taormina o richiedi un preventivo combinato.'
    }
  ],

  ctaEyebrow: 'Pronto?',
  ctaH2: 'Ti aspettiamo all’hotel.',
  ctaSubhead: 'Scrivici quando e quanti siete: organizziamo la salita per il giorno giusto.'
};

const ETNA_EN: TourContent = {
  metaTitle:
    'Etna Tour · From Catania, Taormina or Syracuse with Driver | Sicily Driver',
  metaDescription:
    'Private Etna tour with Mercedes and English-speaking driver. Silvestri Craters 1900m, winery tasting, Valle del Bove. 5–7 hours, from €320.',

  heroImage:
    'https://images.unsplash.com/photo-1604930571107-7e07e44f31b8?w=1800&q=70&auto=format&fm=webp',
  heroEyebrow: 'Private tour · 5–7 hours',
  h1: 'Etna Tour: Silvestri Craters and winery, in a day',
  heroSubhead: 'Europe’s highest volcano, reached comfortably by Mercedes.',

  introH2Pre: 'What',
  introH2Accent: "you'll experience",
  introBody: [
    'We climb Etna from the south side, up to Rifugio Sapienza and the Silvestri Craters (1,900m above sea level). A morning between lava stone, the views over Valle del Bove and the thin air of high altitudes.',
    'After the craters we descend for a stop at a winery, where the vine lives on fossil lava flows: tasting of Etna Rosso and Bianco, with local products. For longer lunches we can extend the stop or add a guided cellar visit.',
    'The tour combines beautifully with Taormina or Catania in the afternoon: 45 minutes by Mercedes and you have the Ionian sea and the Greek theatre.'
  ],

  numbersEyebrow: 'The tour by numbers',
  numbersH2Pre: 'In',
  numbersH2Accent: 'four numbers',
  numbers: [
    {value: '5–7h', label: 'Total length'},
    {value: '1900m', label: 'Silvestri Craters altitude'},
    {value: '3 wines', label: 'Etna DOC winery tasting'},
    {value: 'from €320', label: 'Per car, up to 7 passengers'}
  ],

  stagesEyebrow: 'Stop by stop',
  stagesH2Pre: 'How',
  stagesH2Accent: 'we climb',
  stages: [
    {
      number: '01',
      title: 'Rifugio Sapienza',
      duration: '45 min ascent',
      body: 'From the plain of Catania we drive up the SP92 through the Etna towns. Vegetation changes fast: from olive groves to Etna broom, to bare lava stone. We reach Rifugio Sapienza (1,900m), the official starting point for the Silvestri Craters.',
      image:
        'https://images.unsplash.com/photo-1604930571107-7e07e44f31b8?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '02',
      title: 'Silvestri Craters',
      duration: '1h 30min',
      body: 'A walk among the inactive craters formed by the 1892 eruption. You walk on black lava sand, descend into the crater basins, see Valle del Bove from above. It’s an easy walk, accessible for families too. Time for photos, to breathe thin air, to understand how vast Etna is.',
      image:
        'https://images.unsplash.com/photo-1612965103229-d8e0d2c9dafd?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '03',
      title: 'Winery with tasting',
      duration: '1h 30min',
      body: 'We descend and stop at one of the wineries we love, on Etna’s north or east slopes. Vines live on lava soil two thousand years old. Tasting of three Etna DOC wines (Rosso, Bianco, Rosato) with a board of local cheeses and cold cuts. For those interested, guided tour of the ageing cellars.',
      image:
        'https://images.unsplash.com/photo-1568797629192-2e6ce1f5b1d6?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '04',
      title: 'Descent',
      duration: '45 min',
      body: 'For the return you choose: direct back to your hotel, or onward to Taormina (45 min) for the Greek theatre and Isola Bella in the afternoon. We can also do the Etna-Taormina full-day combo — we arrange it with a small extra.',
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=70&auto=format&fm=webp'
    }
  ],

  includedH2Pre: 'What’s',
  includedH2Accent: 'included (and what’s not)',
  included: [
    ...INCLUDED_EN,
    'Tasting of 3 Etna DOC wines at the winery (Rosso, Bianco, Rosato)',
    'Local cheese and cold cut board at the winery'
  ],
  excluded: [
    'Optional cable car to Central Craters (€68 per person)',
    'Lunch if added to the tasting',
    'Driver tips',
    'Hiking guide beyond Silvestri Craters'
  ],
  includedLabel: 'Included',
  excludedLabel: 'Not included',

  faqEyebrow: 'FAQ',
  faqH2Pre: 'Frequent',
  faqH2Accent: 'questions',
  faqs: [
    {
      q: 'Is it safe to climb Etna?',
      a: 'The Silvestri Craters have been inactive since 1892. The area is always open and monitored. If there’s ongoing volcanic activity we adapt the programme at no extra cost.'
    },
    {
      q: 'How much walking?',
      a: 'The Silvestri Craters walk takes 30–45 minutes on easy sandy terrain, accessible for children and fit elderly travellers. No climbing involved.'
    },
    {
      q: 'What to wear?',
      a: 'Comfortable closed shoes (no sandals), a windbreaker even in summer (at 1,900m it’s always windy), sunglasses. Water and snacks wait for you in the car.'
    },
    {
      q: 'Can we go higher?',
      a: 'Yes, beyond Silvestri Craters there’s a cable car to the Central Craters (2,500m). It costs €68 per person and adds another 2 hours. We arrange it on request — let us know in advance.'
    },
    {
      q: 'Can it be combined with Taormina?',
      a: 'Yes. Etna morning + Taormina afternoon is a classic. We add 1.5 hours to the programme — see /en/ortigia-taormina-tour or ask for a combined quote.'
    }
  ],

  ctaEyebrow: 'Ready?',
  ctaH2: 'We pick you up at the hotel.',
  ctaSubhead: 'Tell us when and how many: we organise the climb for the right day.'
};

// ============================================================
// ORTIGIA + TAORMINA
// ============================================================

const ORTIGIA_IT: TourContent = {
  metaTitle:
    'Tour Ortigia + Taormina · Giornata Completa con Autista | Sicily Driver',
  metaDescription:
    'Tour privato Ortigia (Siracusa) + Taormina in giornata. Mercedes Classe V con autista bilingue. Duomo, Fonte Aretusa, teatro greco. 7–9 ore, da €380.',

  heroImage:
    'https://images.unsplash.com/photo-1568797629192-2e6ce1f5b1d6?w=1800&q=70&auto=format&fm=webp',
  heroEyebrow: 'Tour privato · 7–9 ore',
  h1: 'Ortigia e Taormina: due capolavori in una giornata',
  heroSubhead:
    'Il mattino fra le pietre di Ortigia, il pomeriggio sul teatro greco di Taormina.',

  introH2Pre: 'Quello che',
  introH2Accent: 'vivrai',
  introBody: [
    'Un tour pensato per chi ha una sola giornata in Sicilia orientale e vuole vedere le due icone della costa ionica: Ortigia, l’isolotto barocco di Siracusa, e Taormina, il balcone sul mare con il teatro greco-romano.',
    'Partiamo dal tuo hotel di Siracusa o Catania verso le otto. Mattinata camminata a Ortigia: Duomo costruito sul tempio di Atena, Fonte Aretusa, mercato. Pranzo libero vista mare in una trattoria che ti consigliamo.',
    'Pomeriggio risaliamo lungo la costa ionica fino a Taormina. Teatro greco al tramonto, Corso Umberto, terrazza su Isola Bella. Rientro per cena.'
  ],

  numbersEyebrow: 'Il tour in numeri',
  numbersH2Pre: 'In',
  numbersH2Accent: 'quattro numeri',
  numbers: [
    {value: '7–9h', label: 'Durata totale'},
    {value: '2 città', label: 'Ortigia + Taormina'},
    {value: '~120 km', label: 'Tratta panoramica costa ionica'},
    {value: 'da €380', label: 'Per auto, fino a 7 pax'}
  ],

  stagesEyebrow: 'Tappa per tappa',
  stagesH2Pre: 'Come si',
  stagesH2Accent: 'sviluppa la giornata',
  stages: [
    {
      number: '01',
      title: 'Ortigia mattina',
      duration: '2h 30min',
      body: 'Ti facciamo scendere al ponte di Ortigia. Camminata fra Duomo (costruito incastrando il tempio di Atena del V sec. a.C.), Fonte Aretusa con i papiri, mercato di via De Benedictis. Ci sediamo in piazza Duomo per il caffè. Una città piccola e densa, da girare a piedi senza fretta.',
      image:
        'https://images.unsplash.com/photo-1583435423797-be15ddffe3c2?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '02',
      title: 'Pranzo vista mare',
      duration: '1h 30min',
      body: 'Ti consigliamo una trattoria storica sul lungomare o vicino al mercato. Cucina siracusana onesta: pasta con le sarde, ricci se siamo in stagione, pesce del giorno. Niente menu turistico — gli stessi posti dove pranziamo noi quando lavoriamo a Ortigia.',
      image:
        'https://images.unsplash.com/photo-1604501748863-22a0e6f63a4f?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '03',
      title: 'Taormina e teatro greco',
      duration: '2h 30min',
      body: 'Risaliamo per autostrada (1h 30min). Ti facciamo scendere a Porta Catania, camminata sul Corso Umberto fino al teatro greco-romano. Vista su Isola Bella e l’Etna dalla cavea. La luce del pomeriggio è quella giusta — il marmo del teatro diventa caldo.',
      image:
        'https://images.unsplash.com/photo-1568797629192-2e6ce1f5b1d6?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '04',
      title: 'Rientro',
      duration: '1h 30min',
      body: 'Rientro lungo la costa ionica con la luce d’oro. Se vuoi possiamo fare una sosta a Catania (basolato, piazza Duomo, pescheria) per un aperitivo. Arrivo all’hotel per cena.',
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=70&auto=format&fm=webp'
    }
  ],

  includedH2Pre: 'Cosa',
  includedH2Accent: 'includi (e cosa no)',
  included: INCLUDED_IT,
  excluded: [
    'Pranzo a Ortigia',
    'Ingresso al teatro greco di Taormina (€10 a persona)',
    'Aperitivo a Catania (se aggiunto al programma)',
    'Mance al driver'
  ],
  includedLabel: 'Incluso',
  excludedLabel: 'Non incluso',

  faqEyebrow: 'Dubbi',
  faqH2Pre: 'Le domande',
  faqH2Accent: 'più frequenti',
  faqs: [
    {
      q: 'Si cammina molto?',
      a: 'A Ortigia circa 2km su pavé livellato. A Taormina circa 1.5km su Corso Umberto in piano. Niente arrampicate, ma scarpe comode obbligatorie.'
    },
    {
      q: 'È un tour adatto a una crociera (giornata sola in Sicilia)?',
      a: 'Sì, il tour è perfetto per i passeggeri che sbarcano a Catania porto crociere. Tempistica calibrata sul rientro a bordo. Scrivici l’orario di all-aboard.'
    },
    {
      q: 'Si può fare al contrario (Taormina mattina, Ortigia pomeriggio)?',
      a: 'Sì, lo facciamo se siete a Taormina e volete tornare lì la sera. Cambia solo l’ordine, durata e prezzo invariati.'
    },
    {
      q: 'Aggiungere l’Etna a metà?',
      a: 'Difficile in una sola giornata — sarebbero 11+ ore. Meglio fare 2 giorni: Ortigia+Taormina e poi Etna il giorno dopo, oppure Etna+Taormina (tour dedicato) e Ortigia separato.'
    }
  ],

  ctaEyebrow: 'Quando partiamo?',
  ctaH2: 'Ortigia ti aspetta.',
  ctaSubhead: 'Dimmi il giorno, l’hotel e quanti siete: la giornata la pensiamo noi.'
};

const ORTIGIA_EN: TourContent = {
  metaTitle:
    'Ortigia + Taormina Tour · Full Day with Private Driver | Sicily Driver',
  metaDescription:
    'Private Ortigia (Syracuse) + Taormina full-day tour. Mercedes V-Class with English-speaking driver. Cathedral, Arethusa fountain, Greek theatre. 7–9 hours, from €380.',

  heroImage:
    'https://images.unsplash.com/photo-1568797629192-2e6ce1f5b1d6?w=1800&q=70&auto=format&fm=webp',
  heroEyebrow: 'Private tour · 7–9 hours',
  h1: 'Ortigia and Taormina: two masterpieces in one day',
  heroSubhead:
    'Morning among the stones of Ortigia, afternoon at the Greek theatre of Taormina.',

  introH2Pre: 'What',
  introH2Accent: "you'll experience",
  introBody: [
    'A tour designed for travellers with one day in eastern Sicily who want to see the two icons of the Ionian coast: Ortigia, the Baroque island of Syracuse, and Taormina, the seaside balcony with the Greek-Roman theatre.',
    'We pick you up at your Syracuse or Catania hotel around eight. Morning walk in Ortigia: Cathedral built on the temple of Athena, Arethusa fountain, market. Free lunch with sea view at a trattoria we recommend.',
    'In the afternoon we drive up the Ionian coast to Taormina. Greek theatre at sunset, Corso Umberto, terrace overlooking Isola Bella. Return for dinner.'
  ],

  numbersEyebrow: 'The tour by numbers',
  numbersH2Pre: 'In',
  numbersH2Accent: 'four numbers',
  numbers: [
    {value: '7–9h', label: 'Total length'},
    {value: '2 cities', label: 'Ortigia + Taormina'},
    {value: '~120 km', label: 'Scenic Ionian coast route'},
    {value: 'from €380', label: 'Per car, up to 7 passengers'}
  ],

  stagesEyebrow: 'Stop by stop',
  stagesH2Pre: 'How',
  stagesH2Accent: 'the day unfolds',
  stages: [
    {
      number: '01',
      title: 'Ortigia morning',
      duration: '2h 30min',
      body: 'We drop you at the Ortigia bridge. Walk through the Cathedral (built incorporating the 5th-century BC temple of Athena), Arethusa fountain with papyrus, the market on Via De Benedictis. We sit in Piazza Duomo for coffee. A small, dense city, walked slowly.',
      image:
        'https://images.unsplash.com/photo-1583435423797-be15ddffe3c2?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '02',
      title: 'Seaside lunch',
      duration: '1h 30min',
      body: 'We recommend a historic trattoria on the seafront or near the market. Honest Syracusan cooking: pasta with sardines, sea urchin in season, fish of the day. No tourist menu — the same places we eat when working in Ortigia.',
      image:
        'https://images.unsplash.com/photo-1604501748863-22a0e6f63a4f?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '03',
      title: 'Taormina and Greek theatre',
      duration: '2h 30min',
      body: 'We drive up the motorway (1h 30min). We drop you at Porta Catania, walk along Corso Umberto to the Greek-Roman theatre. View over Isola Bella and Etna from the cavea. The afternoon light is right — the theatre marble turns warm.',
      image:
        'https://images.unsplash.com/photo-1568797629192-2e6ce1f5b1d6?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '04',
      title: 'Return',
      duration: '1h 30min',
      body: 'Return along the Ionian coast with the golden light. If you want we can stop in Catania (basalt streets, Piazza Duomo, fish market) for an aperitif. Hotel arrival in time for dinner.',
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=70&auto=format&fm=webp'
    }
  ],

  includedH2Pre: 'What’s',
  includedH2Accent: 'included (and what’s not)',
  included: INCLUDED_EN,
  excluded: [
    'Lunch in Ortigia',
    'Taormina Greek theatre entrance (€10 per person)',
    'Catania aperitif (if added to the programme)',
    'Driver tips'
  ],
  includedLabel: 'Included',
  excludedLabel: 'Not included',

  faqEyebrow: 'FAQ',
  faqH2Pre: 'Frequent',
  faqH2Accent: 'questions',
  faqs: [
    {
      q: 'Is there a lot of walking?',
      a: 'In Ortigia about 2km on level cobblestones. In Taormina about 1.5km on flat Corso Umberto. No climbing, but comfortable shoes are mandatory.'
    },
    {
      q: 'Is the tour suitable for a cruise (single day in Sicily)?',
      a: 'Yes — perfect for passengers disembarking at Catania cruise port. Timing calibrated on the all-aboard. Send us your back-on-board time.'
    },
    {
      q: 'Can it be reversed (Taormina morning, Ortigia afternoon)?',
      a: 'Yes, we do this for guests staying in Taormina who want to return there in the evening. Only the order changes — length and price stay the same.'
    },
    {
      q: 'Can we add Etna in the middle?',
      a: 'Hard in a single day — it would be 11+ hours. Better to do 2 days: Ortigia+Taormina and then Etna the next day, or Etna+Taormina (dedicated tour) and Ortigia separately.'
    }
  ],

  ctaEyebrow: 'When do we start?',
  ctaH2: 'Ortigia is waiting.',
  ctaSubhead:
    'Tell us the day, the hotel and how many you are: we handle the rest.'
};

// ============================================================
// Lookup
// ============================================================

const TOURS: Record<Locale, Record<TourKey, TourContent>> = {
  it: {
    barocco: BAROCCO_IT,
    etna: ETNA_IT,
    'ortigia-taormina': ORTIGIA_IT
  },
  en: {
    barocco: BAROCCO_EN,
    etna: ETNA_EN,
    'ortigia-taormina': ORTIGIA_EN
  }
};

export function getTour(key: TourKey, locale: Locale): TourContent {
  return TOURS[locale][key];
}

const HUBS: Record<Locale, TourHubContent> = {it: HUB_IT, en: HUB_EN};

export function getTourHub(locale: Locale): TourHubContent {
  return HUBS[locale];
}
