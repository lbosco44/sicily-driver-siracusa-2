// ============================================================
// Sicily Driver Siracusa — Tour data (Cluster Esperienziale)
//
// 5 tour dedicati + 1 hub. Contenuto da Brief/COPY.md §4-5.
// Pattern B SEO-preserving:
//   - Barocco: [PRESERVE] LETTERALE H1 + paragrafo intro + bullet (Cat 1, CTR 25%)
//   - Etna Premium, Isola delle Correnti, Dolce Vita, Silent Sailing: [NEW]
//   - Hub: H1 [POLISH], paragrafo intro [PRESERVE], FAQ [PRESERVE]
// ============================================================

import type {Locale} from './cities';

export type TourKey =
  | 'barocco'
  | 'etna-premium'
  | 'isola-delle-correnti'
  | 'dolce-vita-siracusa'
  | 'silent-sailing';

export type TourStage = {
  number: string;
  title: string;
  duration: string;
  body: string;
  image: string;
};

export type TourNumber = {value: string; label: string};

export type TourPartner = {name: string; description: string};

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

  // Partner del tour (opzionale)
  partners?: TourPartner[];
  partnersEyebrow?: string;
  partnersH2?: string;

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
// HUB content type — 5 itinerari + 1 mini "su misura" + storytelling
// ============================================================

export type ItineraryCard = {
  number: string;
  title: string;
  duration: string;
  price: string;
  body: string;
  image: string;
  href:
    | '/tour-barocco'
    | '/tour/etna-premium'
    | '/tour/isola-delle-correnti'
    | '/tour/dolce-vita-siracusa'
    | '/tour/silent-sailing'
    | '/contatti';
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
// HERO IMAGES — placeholder Unsplash, TODO replace con foto reali cliente
// ============================================================

const HERO_BAROCCO =
  'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1600&q=70&auto=format&fm=webp';
const HERO_ETNA =
  'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=1600&q=70&auto=format&fm=webp';
const HERO_ISOLA =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=70&auto=format&fm=webp';
const HERO_DOLCE_VITA =
  'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?w=1600&q=70&auto=format&fm=webp';
const HERO_SAILING =
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=70&auto=format&fm=webp';

// ============================================================
// TOUR HUB IT/EN
// ============================================================

const HUB_IT: TourHubContent = {
  metaTitle:
    'Tour Sicilia con Autista · Itinerari su Misura | Sicily Driver',
  metaDescription:
    'Tour Sicilia con driver dedicato: Barocco, Etna, Ortigia, Isola delle Correnti, Silent Sailing. Mercedes, autisti professionisti, itinerari personalizzabili. 5 esperienze + tour su misura.',

  heroImage: HERO_DOLCE_VITA,
  heroEyebrow: 'Tour Sicilia · con autista privato',
  h1Pre: 'Tour Sicilia con',
  h1Accent: 'Autista Privato',
  heroSubhead: 'Cinque esperienze testate e tour su misura, in tutta la Sicilia orientale.',

  introH2Pre: 'Cinque modi',
  introH2Accent: 'di vedere la Sicilia',
  introBody:
    'Scopri la Sicilia con un driver dedicato: itinerari su misura, Mercedes di classe e autisti professionisti. Partenze da Siracusa, Catania, Noto, Ragusa, Taormina. Servizio attivo 24/7.',

  itinerariesEyebrow: 'Le esperienze',
  itinerariesH2Pre: 'Gli',
  itinerariesH2Accent: 'itinerari',
  itineraries: [
    {
      number: '01',
      title: 'Dolce Vita Siracusa',
      duration: '3 ore',
      price: 'da €280',
      body: 'Ortigia in Fiat 500 Spiaggina d’epoca. Duomo, Fonte Aretusa, lungomare, aperitivo fronte mare.',
      image: HERO_DOLCE_VITA,
      href: '/tour/dolce-vita-siracusa'
    },
    {
      number: '02',
      title: 'Silent Sailing',
      duration: '4 ore',
      price: 'da €380',
      body: 'Vela privata da Ortigia. Soste bagno nelle baie più belle, tagliere Fratelli Burgio a bordo.',
      image: HERO_SAILING,
      href: '/tour/silent-sailing'
    },
    {
      number: '03',
      title: 'Isola delle Correnti',
      duration: 'giornata',
      price: 'da €420',
      body: 'L’estremità sud della Sicilia. Pura Vida Beach Club al sole, sunset experience, aperitivo a Marzamemi.',
      image: HERO_ISOLA,
      href: '/tour/isola-delle-correnti'
    },
    {
      number: '04',
      title: 'Etna Premium Escape',
      duration: 'giornata',
      price: 'da €580',
      body: 'Crateri Silvestri a 1.900m con quad, degustazione in cantina (Benanti o Palmeri), pranzo vista vulcano.',
      image: HERO_ETNA,
      href: '/tour/etna-premium'
    },
    {
      number: '05',
      title: 'Tour del Barocco',
      duration: '6–8 ore',
      price: 'da €380',
      body: 'Noto, Modica, Ragusa Ibla. Tre città Patrimonio Unesco in un giorno.',
      image: HERO_BAROCCO,
      href: '/tour-barocco'
    },
    {
      number: '06',
      title: 'Tour su misura',
      duration: 'a tua scelta',
      price: 'preventivo',
      body: 'Hai un’idea diversa? Ti veniamo a prendere, ti portiamo dove vuoi tu. Famiglie, gruppi piccoli, mete fuori dai soliti percorsi.',
      image: HERO_BAROCCO,
      href: '/contatti'
    }
  ],

  storyEyebrow: 'Cosa succede quando prenoti',
  storyH2Pre: 'Una',
  storyH2Accent: 'giornata tipo',
  storyParagraphs: [
    'Ti veniamo a prendere alle 8 in hotel. Il driver ti dice come si chiama, ti passa una bottiglia d’acqua, ti chiede se vuoi fermarti per un caffè prima di partire. La maggior parte delle volte sì.',
    'Lasciamo Siracusa quando la luce ancora è bassa, e arriviamo a Noto che la cattedrale è dorata. Da lì, il giorno è tuo: tre soste, un pranzo che ti consigliamo noi se ti va, il tempo per camminare senza fretta.',
    'Rientro a Siracusa quando dici tu — il calendario del driver non ha sveglia. Solo strada davanti.'
  ],

  includedEyebrow: 'Sempre con noi',
  includedH2Pre: 'Cosa è',
  includedH2Accent: 'sempre incluso',
  included: [
    'Mercedes Classe V, GLB Premium o Classe E, in base al numero di passeggeri',
    'Driver bilingue italiano-inglese',
    'Soste fotografiche su richiesta, sempre',
    'Acqua a bordo, anche in versione frizzante se preferisci',
    'Flessibilità oraria: si esce quando vuoi, si rientra quando vuoi'
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
    }
  ],

  ctaEyebrow: 'Pronto?',
  ctaH2: 'Pronto a vedere la Sicilia con un autista che la conosce?',
  ctaSubhead:
    'Scrivici tipo di tour, data e numero passeggeri: ti rispondiamo con un preventivo entro un’ora.'
};

const HUB_EN: TourHubContent = {
  metaTitle:
    'Sicily Tours with Private Driver · Custom Itineraries | Sicily Driver',
  metaDescription:
    'Sicily tours with a dedicated driver: Baroque, Etna, Ortigia, Isola delle Correnti, Silent Sailing. Mercedes, English-speaking chauffeurs, fully customizable. 5 experiences + custom tours.',

  heroImage: HERO_DOLCE_VITA,
  heroEyebrow: 'Sicily tours · with a private driver',
  h1Pre: 'Sicily Tours, with a',
  h1Accent: 'Private Driver',
  heroSubhead: 'Five tested experiences and unlimited custom routes across eastern Sicily.',

  introH2Pre: 'Five ways',
  introH2Accent: 'to see Sicily',
  introBody:
    'Sicily with someone who actually knows it. We pick you up where you’re staying, design the day around your pace, and bring you back when you say so. Five tested experiences and unlimited custom routes across eastern Sicily.',

  itinerariesEyebrow: 'The experiences',
  itinerariesH2Pre: 'The',
  itinerariesH2Accent: 'itineraries',
  itineraries: [
    {
      number: '01',
      title: 'Dolce Vita Syracuse',
      duration: '3 hours',
      price: 'from €280',
      body: 'Ortigia in a vintage Fiat 500 Spiaggina. Cathedral, Arethusa Spring, seafront, sunset aperitivo.',
      image: HERO_DOLCE_VITA,
      href: '/tour/dolce-vita-siracusa'
    },
    {
      number: '02',
      title: 'Silent Sailing',
      duration: '4 hours',
      price: 'from €380',
      body: 'Private sailing from Ortigia. Swim stops in the most beautiful bays, Fratelli Burgio platter on board.',
      image: HERO_SAILING,
      href: '/tour/silent-sailing'
    },
    {
      number: '03',
      title: 'Isola delle Correnti',
      duration: 'full day',
      price: 'from €420',
      body: 'The southern tip of Sicily. Pura Vida Beach Club, sunset experience, aperitivo in Marzamemi.',
      image: HERO_ISOLA,
      href: '/tour/isola-delle-correnti'
    },
    {
      number: '04',
      title: 'Etna Premium Escape',
      duration: 'full day',
      price: 'from €580',
      body: 'Silvestri craters at 1,900m by quad, winery tasting (Benanti or Palmeri), lunch with volcano view.',
      image: HERO_ETNA,
      href: '/tour/etna-premium'
    },
    {
      number: '05',
      title: 'Baroque Tour',
      duration: '6–8 hours',
      price: 'from €380',
      body: 'Noto, Modica, Ragusa Ibla. Three UNESCO World Heritage cities in one day.',
      image: HERO_BAROCCO,
      href: '/tour-barocco'
    },
    {
      number: '06',
      title: 'Custom tour',
      duration: 'your choice',
      price: 'on request',
      body: 'Have a different idea? We pick you up, take you where you want. Families, small groups, places off the usual paths.',
      image: HERO_BAROCCO,
      href: '/contatti'
    }
  ],

  storyEyebrow: 'What happens when you book',
  storyH2Pre: 'A',
  storyH2Accent: 'typical day',
  storyParagraphs: [
    'We pick you up at 8 from your hotel. The driver introduces himself, hands you a bottle of water, asks if you want to stop for a coffee before we go. Most times you’ll say yes.',
    'We leave Syracuse while the light is still low, and reach Noto with its cathedral turning gold. From there, the day is yours: three stops, a lunch we’ll recommend if you like, time to walk slowly.',
    'Back in Syracuse whenever you say — the driver’s calendar has no alarm. Just the road ahead.'
  ],

  includedEyebrow: 'Always with us',
  includedH2Pre: 'What’s',
  includedH2Accent: 'always included',
  included: [
    'Mercedes V-Class, GLB Premium or E-Class, based on your party size',
    'English-speaking driver',
    'Photo stops on request, always',
    'Water on board, sparkling if you prefer',
    'Flexible timing: we leave when you want, we return when you want'
  ],

  faqEyebrow: 'FAQ',
  faqH2Pre: 'Frequent',
  faqH2Accent: 'questions',
  faqs: [
    {
      q: 'Can we customise the stops?',
      a: 'Yes, every tour is modular: photo stops, free time, tastings and guided visits on request.'
    },
    {
      q: 'How long is a typical tour?',
      a: '6 to 9 hours depending on the route. For longer itineraries we can extend to a full day.'
    },
    {
      q: 'Are child seats available?',
      a: 'Yes, just request them at booking. Included at no extra cost.'
    },
    {
      q: 'Do drivers speak English?',
      a: 'Yes. All our drivers speak fluent English. Some also speak French, German or Spanish — let us know which one you prefer.'
    }
  ],

  ctaEyebrow: 'Ready?',
  ctaH2: 'Ready to see Sicily with a driver who knows it?',
  ctaSubhead:
    'Send us tour type, date and party size: we reply with a quote within an hour.'
};

// ============================================================
// TOUR DETAILS — shared "included" baseline
// ============================================================

const INCLUDED_BASE_IT = [
  'Mercedes Classe V con autista',
  'Soste fotografiche libere',
  'Acqua a bordo',
  'Flessibilità sulla durata',
  'Consigli su dove fermarsi'
];

const INCLUDED_BASE_EN = [
  'Mercedes V-Class with driver',
  'Free photo stops',
  'Water on board',
  'Schedule flexibility',
  'Recommendations on where to stop'
];

// ============================================================
// BAROCCO — Categoria 1 PRESERVE FORTE (CTR 25%)
// H1 + intro + bullet LETTERALI dal sito vecchio.
// ============================================================

const BAROCCO_IT: TourContent = {
  metaTitle:
    'Tour del Barocco: Noto, Modica & Ragusa in un Giorno — Sicily Driver',
  metaDescription:
    'Tour del Barocco siciliano in giornata: Noto (Cattedrale di San Nicolò), Modica (cioccolato e San Pietro), Ragusa Ibla (Cattedrale di San Giorgio). Mercedes Classe V con autista. Da €380.',

  heroImage: HERO_BAROCCO,
  heroEyebrow: 'Tour del Barocco · 6–8 ore · da Siracusa',
  h1: 'Tour del Barocco: Noto, Modica & Ragusa in un Giorno',
  heroSubhead:
    'Tre città Patrimonio Unesco. Sei-otto ore. Una Mercedes Classe V che ti aspetta dove serve.',

  introH2Pre: 'Quello che',
  introH2Accent: 'vivrai',
  introBody: [
    'Vivi l’emozione del Tour del Barocco in Sicilia: un’esperienza indimenticabile tra le città di Noto, Modica e Ragusa. Scopri la maestosità delle facciate barocche, i palazzi storici e le chiese simbolo di una cultura artistica senza eguali.',
    'Partendo da Siracusa, ti accompagniamo attraverso le meraviglie di Noto con la sua Cattedrale di San Nicolò, proseguendo verso la suggestiva Modica, patria del pregiato cioccolato artigianale e della chiesa di San Pietro, fino alla celebre Ragusa Ibla con la magnifica Cattedrale di San Giorgio. Ogni tappa è studiata per offrirti comfort, storia e gusto autentico.',
    'Questo tour privato NCC garantisce puntualità e professionalità dei nostri autisti, parco auto di lusso (Mercedes Classe V, GLB Premium, Classe E), itinerario personalizzabile e supporto 24/7.'
  ],

  numbersEyebrow: 'Il tour, in numeri',
  numbersH2Pre: 'In',
  numbersH2Accent: 'quattro numeri',
  numbers: [
    {value: '6–8h', label: 'Durata'},
    {value: 'fino a 7', label: 'Persone max'},
    {value: 'IT / EN', label: 'Lingue driver'},
    {value: 'da €380', label: 'Prezzo partenza'}
  ],

  stagesEyebrow: 'Tappa per tappa',
  stagesH2Pre: 'Le città',
  stagesH2Accent: 'che attraversiamo',
  stages: [
    {
      number: '01',
      title: 'Noto',
      duration: '1h 30min',
      body: 'Arriviamo a Noto quando la pietra calcarea è ancora calda dalla notte. La scalinata della Cattedrale di San Nicolò è il primo respiro: 1693, terremoto del Val di Noto, una città intera ricostruita dal nulla. Cammini su Corso Vittorio Emanuele in venti minuti, ti fermi dove ti chiama lo sguardo. Il driver ti dice dove sono i palazzi che non vedrai su nessuna guida.',
      image:
        'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '02',
      title: 'Modica',
      duration: '2h (include pranzo)',
      body: 'A Modica, la chiesa di San Pietro è un teatro di sculture seicentesche affacciate sulla strada. Ma il vero motivo per cui ci fermiamo è il cioccolato, lavorato a freddo seguendo una ricetta che gli spagnoli portarono qui dai Maya. Una tavoletta da gustare camminando, una bottega che il driver conosce per nome — un’ora basta.',
      image:
        'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '03',
      title: 'Ragusa Ibla',
      duration: '1h 30min',
      body: 'Ragusa Ibla è la parte vecchia, quella che dopo il terremoto si ricostruì dove era, mentre Ragusa Superiore nasceva sull’altopiano. La Cattedrale di San Giorgio sta in cima a una piazza che si guarda tutto da sola. Qui ti lasciamo il tempo per pranzare con calma, se ti va. Conosciamo un paio di posti dove gli ingredienti vengono dai produttori intorno.',
      image:
        'https://images.unsplash.com/photo-1581922814484-0b48460b7010?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '04',
      title: 'Scicli o Marzamemi (opzionale)',
      duration: '1h',
      body: 'Se la giornata è lunga e c’è ancora luce, possiamo aggiungere Scicli — un’altra capitale del barocco meno turistica — oppure scendere a Marzamemi per un aperitivo fronte mare prima di rientrare a Siracusa.',
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=70&auto=format&fm=webp'
    }
  ],

  includedH2Pre: 'Cosa',
  includedH2Accent: 'è incluso, cosa no',
  included: [
    'Mercedes Classe V con autista',
    'Soste fotografiche libere a Noto, Modica, Ragusa',
    'Acqua a bordo',
    'Flessibilità sulla durata (6–8h)',
    'Consigli su dove pranzare e cosa vedere'
  ],
  excluded: [
    'Pranzo (ti consigliamo dove fermarti, lo paghi tu)',
    'Ingressi a siti specifici se desiderati (cattedrali interne, palazzi storici a pagamento)',
    'Mance al driver (facoltative)'
  ],
  includedLabel: 'Incluso',
  excludedLabel: 'Non incluso',

  faqEyebrow: 'Dubbi',
  faqH2Pre: 'Le domande',
  faqH2Accent: 'più frequenti',
  faqs: [
    {
      q: 'Quanto dura il Tour del Barocco?',
      a: '6–8 ore, in base alle soste che vuoi. Partenza tipica alle 8:30 da Siracusa, rientro entro le 17:30.'
    },
    {
      q: 'Quante persone massimo?',
      a: 'Fino a 7 in Mercedes Classe V. Per gruppi più grandi possiamo organizzare 2 mezzi con due driver.'
    },
    {
      q: 'Posso aggiungere una degustazione di cioccolato a Modica?',
      a: 'Sì, la organizziamo presso una delle botteghe storiche di Corso Umberto. Costo a parte, da specificare al preventivo.'
    },
    {
      q: 'Si può fare il tour partendo da Catania o Taormina?',
      a: 'Sì. Da Catania aggiungi circa 30 min di trasferimento, da Taormina 1h 30min. Il prezzo varia di conseguenza.'
    },
    {
      q: 'Cosa succede se piove?',
      a: 'Il barocco siciliano è altrettanto bello con la luce di una giornata grigia, e i centri storici si visitano comunque. Solo per pioggia intensa prolungata possiamo riprogrammare senza penali.'
    }
  ],

  ctaEyebrow: 'Pronto a partire?',
  ctaH2: 'Vediamoci a Noto.',
  ctaSubhead: 'Scrivici data e numero passeggeri: la giornata la cuciamo insieme.'
};

const BAROCCO_EN: TourContent = {
  metaTitle:
    'Baroque Tour: Noto, Modica & Ragusa in One Day — Sicily Driver',
  metaDescription:
    'Sicilian Baroque Tour in one day: Noto (Cathedral of San Nicolò), Modica (chocolate and San Pietro), Ragusa Ibla (Cathedral of San Giorgio). Mercedes V-Class with private driver. From €380.',

  heroImage: HERO_BAROCCO,
  heroEyebrow: 'Baroque Tour · 6–8 hours · from Syracuse',
  h1: 'Baroque Tour: Noto, Modica & Ragusa in One Day',
  heroSubhead:
    'Three UNESCO World Heritage cities. Six to eight hours. A Mercedes V-Class waiting where you need it.',

  introH2Pre: 'What',
  introH2Accent: "you'll experience",
  introBody: [
    'Experience the magic of our Baroque Tour in Sicily: an unforgettable journey through the Baroque masterpieces of Noto, Modica, and Ragusa. Admire the intricate church façades, opulent palaces, and historic squares that showcase the island’s rich artistic heritage.',
    'Starting from Syracuse, we guide you to the majestic Cathedral of San Nicolò in Noto, then to the charming Church of San Pietro in Modica, famous for its artisanal chocolate, and finally to the enchanting Cathedral of San Giorgio in Ragusa Ibla. Each stop is designed to combine culture, comfort, and authentic Sicilian flavors.',
    'This private NCC tour ensures punctuality and professionalism of our drivers, a luxury fleet (Mercedes V-Class, GLB Premium, E-Class), a customizable itinerary and 24/7 support.'
  ],

  numbersEyebrow: 'The tour, by numbers',
  numbersH2Pre: 'In',
  numbersH2Accent: 'four numbers',
  numbers: [
    {value: '6–8h', label: 'Duration'},
    {value: 'up to 7', label: 'Max party'},
    {value: 'IT / EN', label: 'Driver languages'},
    {value: 'from €380', label: 'Starting price'}
  ],

  stagesEyebrow: 'Stop by stop',
  stagesH2Pre: 'The towns',
  stagesH2Accent: 'we cross',
  stages: [
    {
      number: '01',
      title: 'Noto',
      duration: '1h 30min',
      body: 'We reach Noto when the limestone is still warm from the night. The Cathedral of San Nicolò staircase is the first breath: 1693, Val di Noto earthquake, an entire city rebuilt from nothing. You walk Corso Vittorio Emanuele in twenty minutes, stopping where your eye calls you. The driver tells you about the palaces no guidebook mentions.',
      image:
        'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '02',
      title: 'Modica',
      duration: '2h (lunch included)',
      body: 'In Modica, the Church of San Pietro is a theater of seventeenth-century sculptures facing the street. But the real reason we stop is the chocolate, cold-processed following a recipe Spaniards brought here from the Aztecs. A bar to taste while walking, a shop the driver knows by name — an hour is enough.',
      image:
        'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '03',
      title: 'Ragusa Ibla',
      duration: '1h 30min',
      body: 'Ragusa Ibla is the old part, the one that rebuilt itself where it stood after the earthquake, while Ragusa Superiore was born on the plateau. The Cathedral of San Giorgio sits at the top of a square that watches itself. Here we leave you the time to lunch in peace, if you wish. We know a couple of places where ingredients come from the producers around.',
      image:
        'https://images.unsplash.com/photo-1581922814484-0b48460b7010?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '04',
      title: 'Scicli or Marzamemi (optional)',
      duration: '1h',
      body: 'If the day is long and the light is still good, we can add Scicli — another Baroque capital, less touristic — or descend to Marzamemi for a seaside aperitivo before returning to Syracuse.',
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=70&auto=format&fm=webp'
    }
  ],

  includedH2Pre: 'What’s',
  includedH2Accent: 'included, what’s not',
  included: [
    'Mercedes V-Class with driver',
    'Free photo stops in Noto, Modica, Ragusa',
    'Water on board',
    'Schedule flexibility (6–8h)',
    'Recommendations on lunch and sights'
  ],
  excluded: [
    'Lunch (we recommend, you pay)',
    'Entrance tickets to specific sites if desired (cathedral interiors, paid historic palaces)',
    'Driver tips (optional)'
  ],
  includedLabel: 'Included',
  excludedLabel: 'Not included',

  faqEyebrow: 'FAQ',
  faqH2Pre: 'Frequent',
  faqH2Accent: 'questions',
  faqs: [
    {
      q: 'How long is the Baroque Tour?',
      a: '6–8 hours, depending on the stops you want. Typical departure at 8:30 from Syracuse, return by 17:30.'
    },
    {
      q: 'Maximum party size?',
      a: 'Up to 7 in a Mercedes V-Class. For larger groups we can organize 2 vehicles with two drivers.'
    },
    {
      q: 'Can I add a Modica chocolate tasting?',
      a: 'Yes, at one of the historic chocolate shops on Corso Umberto. Cost added to the quote.'
    },
    {
      q: 'Can the tour start from Catania or Taormina?',
      a: 'Yes. From Catania add about 30 min transfer, from Taormina 1h 30min. Price adjusted accordingly.'
    },
    {
      q: 'What if it rains?',
      a: 'Sicilian Baroque is just as beautiful on a grey day, and the historic centers stay walkable. Only for prolonged heavy rain we can reschedule with no penalty.'
    }
  ],

  ctaEyebrow: 'Ready to go?',
  ctaH2: 'See you in Noto.',
  ctaSubhead: 'Send us the date and party size: we tailor the day together.'
};

// ============================================================
// ETNA PREMIUM — URL nuova, contenuto [NEW]
// ============================================================

const ETNA_IT: TourContent = {
  metaTitle:
    'Tour Etna Premium · Quad e Cantine Benanti | Sicily Driver',
  metaDescription:
    'Etna tour da Siracusa: crateri Silvestri a 1.900m con quad, degustazione in cantina (Benanti, Palmeri), pranzo con vista. Mercedes con autista, giornata intera.',

  heroImage: HERO_ETNA,
  heroEyebrow: 'Etna · giornata intera',
  h1: 'Etna Premium Escape',
  heroSubhead:
    'I crateri Silvestri a quota 1.900. Due cantine che ci conoscono. Una giornata vista vulcano.',

  introH2Pre: 'Quello che',
  introH2Accent: 'vivrai',
  introBody: [
    'L’Etna è un mondo a sé. Ti veniamo a prendere da Siracusa, Catania o Taormina e ti portiamo a quota 1.900 metri, dove i crateri Silvestri raccontano l’ultima eruzione del 1892.',
    'Da lì scendiamo lungo i vigneti che crescono sulla lava — il "terroir" più estremo d’Europa — per fermarci in una delle cantine storiche dell’Etna, Benanti o Palmeri.',
    'Tour Etna con autista privato, quad in quota, degustazione vini di territorio, pranzo nel rifugio della cantina. Un giorno solo, dall’alba al tramonto.'
  ],

  numbersEyebrow: 'Il tour, in numeri',
  numbersH2Pre: 'In',
  numbersH2Accent: 'quattro numeri',
  numbers: [
    {value: 'giornata', label: 'Durata'},
    {value: 'fino a 7', label: 'Persone max'},
    {value: 'IT / EN', label: 'Lingue driver'},
    {value: 'da €580', label: 'Prezzo (incluso quad e degustazione)'}
  ],

  partnersEyebrow: 'Partner di questo tour',
  partnersH2: 'I posti che abbiamo scelto',
  partners: [
    {
      name: 'Cantina Benanti',
      description:
        'Una delle cantine storiche dell’Etna. Vini di Nerello Mascalese e Carricante coltivati su suolo lavico.'
    },
    {
      name: 'Cantina Palmeri',
      description:
        'Etna sud-orientale, vini di territorio meno conosciuti ma con una storia precisa di famiglia.'
    }
  ],

  stagesEyebrow: 'Tappa per tappa',
  stagesH2Pre: 'Come',
  stagesH2Accent: 'si sale',
  stages: [
    {
      number: '01',
      title: 'Ritrovo e salita',
      duration: '40 min',
      body: 'Partenza alle 7:30 da Siracusa (o 8:30 da Catania, 9:00 da Taormina). Saliamo verso Zafferana Etnea, attraverso il bosco di pini secolari. La temperatura cala di 15 gradi in 40 minuti — porta una giacca anche d’estate. Arrivo al Rifugio Sapienza, quota 1.900.',
      image:
        'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '02',
      title: 'Quad sui crateri Silvestri',
      duration: '1h',
      body: 'I quad partono dal piazzale del rifugio. Un’ora di percorso su sabbia lavica nera, intorno ai coni dei crateri Silvestri — quelli formati nell’eruzione del 1892, ancora perfettamente conservati. Il driver-guida ti accompagna sul mezzo davanti, nessuna esperienza richiesta.',
      image:
        'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '03',
      title: 'Pranzo e cantina',
      duration: '2h',
      body: 'Scendiamo verso una delle cantine partner. Pranzo siciliano nel rifugio della cantina: salumi, formaggi locali, pasta alla Norma, dolci della casa. La degustazione di 4-5 vini è guidata da un sommelier della cantina, in italiano o inglese.',
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '04',
      title: 'Rientro panoramico',
      duration: '1h 30min',
      body: 'Rientro lungo la strada panoramica dell’Etna sud. Se la luce è giusta, breve sosta a Catania per un caffè in piazza Duomo. Rientro a Siracusa entro le 19.',
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=70&auto=format&fm=webp'
    }
  ],

  includedH2Pre: 'Cosa',
  includedH2Accent: 'è incluso, cosa no',
  included: [
    'Mercedes Classe V con autista',
    'Quad sui crateri Silvestri (1h, guida inclusa)',
    'Pranzo siciliano in cantina (4 portate)',
    'Degustazione di 4-5 vini con sommelier',
    'Acqua a bordo'
  ],
  excluded: [
    'Funivia/seggiovia per la quota 3.000 (opzionale, costo a parte)',
    'Mance facoltative al driver e alla cantina'
  ],
  includedLabel: 'Incluso',
  excludedLabel: 'Non incluso',

  faqEyebrow: 'Dubbi',
  faqH2Pre: 'Le domande',
  faqH2Accent: 'più frequenti',
  faqs: [
    {
      q: 'Si arriva fino in cima all’Etna?',
      a: 'Con il nostro programma standard arriviamo a quota 1.900 (crateri Silvestri). Per la quota 3.000 (Torre del Filosofo / crateri sommitali) serve funivia + jeep + guida alpina, costo a parte da concordare in fase di preventivo.'
    },
    {
      q: 'Il quad è obbligatorio?',
      a: 'No, in alternativa proponiamo un’escursione a piedi guidata sui crateri (1h 30min, terreno facile). Stesso prezzo.'
    },
    {
      q: 'Cosa indossare?',
      a: 'Scarpe chiuse comode (no infradito), maglione/felpa anche d’estate (a 1.900m fa fresco), giacca antivento, occhiali da sole.'
    },
    {
      q: 'Bambini ammessi?',
      a: 'Sì, dai 6 anni in su. Per il quad serve l’accompagnamento dell’adulto. La cantina ha menu bambini su richiesta.'
    }
  ],

  ctaEyebrow: 'Pronto?',
  ctaH2: 'Ti aspettiamo all’hotel.',
  ctaSubhead:
    'Scrivici quando e quanti siete: organizziamo la salita per il giorno giusto.'
};

const ETNA_EN: TourContent = {
  metaTitle:
    'Etna Premium Tour · Quad & Benanti Winery | Sicily Driver',
  metaDescription:
    'Etna tour from Syracuse: Silvestri craters at 1,900m by quad, winery tasting (Benanti, Palmeri), lunch with a view. Mercedes with private driver, full day.',

  heroImage: HERO_ETNA,
  heroEyebrow: 'Etna · full day',
  h1: 'Etna Premium Escape',
  heroSubhead:
    'Silvestri craters at 1,900 m. Two wineries who know us. A full day with a view of the volcano.',

  introH2Pre: 'What',
  introH2Accent: "you'll experience",
  introBody: [
    'Etna is a world of its own. We pick you up from Syracuse, Catania or Taormina and drive you up to 1,900 meters, where the Silvestri craters tell the story of the last eruption in 1892.',
    'From there we descend through vineyards growing on lava — the most extreme "terroir" in Europe — to stop at one of the historic Etna wineries, Benanti or Palmeri.',
    'Etna tour with private driver, quad ride on the craters, tasting of local wines, lunch at the winery. One day, sunrise to sunset.'
  ],

  numbersEyebrow: 'The tour, by numbers',
  numbersH2Pre: 'In',
  numbersH2Accent: 'four numbers',
  numbers: [
    {value: 'full day', label: 'Duration'},
    {value: 'up to 7', label: 'Max party'},
    {value: 'IT / EN', label: 'Driver languages'},
    {value: 'from €580', label: 'Price (incl. quad and tasting)'}
  ],

  partnersEyebrow: 'Partners for this tour',
  partnersH2: 'The places we chose',
  partners: [
    {
      name: 'Cantina Benanti',
      description:
        'One of Etna’s historic wineries. Nerello Mascalese and Carricante grown on lava soil.'
    },
    {
      name: 'Cantina Palmeri',
      description:
        'South-eastern Etna, lesser-known terroir wines with a precise family story.'
    }
  ],

  stagesEyebrow: 'Stop by stop',
  stagesH2Pre: 'How',
  stagesH2Accent: 'we climb',
  stages: [
    {
      number: '01',
      title: 'Meeting & ascent',
      duration: '40 min',
      body: 'Departure at 7:30 from Syracuse (or 8:30 Catania, 9:00 Taormina). We climb toward Zafferana Etnea through the ancient pine forest. Temperature drops 15 degrees in 40 minutes — bring a jacket even in summer. Arrival at Rifugio Sapienza, 1,900 m.',
      image:
        'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '02',
      title: 'Quad on Silvestri craters',
      duration: '1h',
      body: 'Quads depart from the refuge square. One hour on black lava sand, around the Silvestri crater cones — those formed in the 1892 eruption, perfectly preserved. The guide-driver leads on the vehicle ahead, no experience required.',
      image:
        'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '03',
      title: 'Lunch & winery',
      duration: '2h',
      body: 'We descend to one of the partner wineries. Sicilian lunch in the winery refuge: cured meats, local cheeses, pasta alla Norma, house desserts. 4-5 wine tasting guided by the winery sommelier, in Italian or English.',
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '04',
      title: 'Panoramic return',
      duration: '1h 30min',
      body: 'Return along the southern Etna panoramic road. If the light is right, brief stop in Catania for a coffee in Piazza Duomo. Back in Syracuse by 19.',
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=70&auto=format&fm=webp'
    }
  ],

  includedH2Pre: 'What’s',
  includedH2Accent: 'included, what’s not',
  included: [
    'Mercedes V-Class with driver',
    'Quad on Silvestri craters (1h, guide included)',
    'Sicilian lunch at the winery (4 courses)',
    '4-5 wines tasting with sommelier',
    'Water on board'
  ],
  excluded: [
    'Cable car to 3,000m summit (optional, additional cost)',
    'Optional tips for driver and winery'
  ],
  includedLabel: 'Included',
  excludedLabel: 'Not included',

  faqEyebrow: 'FAQ',
  faqH2Pre: 'Frequent',
  faqH2Accent: 'questions',
  faqs: [
    {
      q: 'Can you reach the top of Etna?',
      a: 'Our standard program reaches 1,900 m (Silvestri craters). For 3,000 m (Torre del Filosofo / summit craters) you need cable car + jeep + alpine guide, additional cost arranged in the quote.'
    },
    {
      q: 'Is the quad mandatory?',
      a: 'No, alternative: guided crater walk (1h 30min, easy terrain). Same price.'
    },
    {
      q: 'What to wear?',
      a: 'Closed comfortable shoes (no flip-flops), sweater/fleece even in summer (it’s cool at 1,900m), windbreaker, sunglasses.'
    },
    {
      q: 'Are children welcome?',
      a: 'Yes, from age 6. Quad rides require adult companion. Wineries can prepare a children’s menu on request.'
    }
  ],

  ctaEyebrow: 'Ready?',
  ctaH2: 'We pick you up at the hotel.',
  ctaSubhead:
    'Tell us when and how many: we organise the climb for the right day.'
};

// ============================================================
// ISOLA DELLE CORRENTI — URL nuova, contenuto [NEW]
// ============================================================

const ISOLA_IT: TourContent = {
  metaTitle:
    'Isola delle Correnti & Pura Vida · Sud Sicilia | Sicily Driver',
  metaDescription:
    'Tour giornaliero all’Isola delle Correnti (l’estremità sud della Sicilia) con Pura Vida Beach Club e Marzamemi al tramonto. Mercedes con autista, sosta lunch, sunset experience.',

  heroImage: HERO_ISOLA,
  heroEyebrow: 'Sicilia sud · giornata intera',
  h1: 'Isola delle Correnti',
  heroSubhead:
    'Dove finisce la Sicilia e iniziano due mari. Pura Vida Beach Club al tramonto, aperitivo a Marzamemi.',

  introH2Pre: 'Quello che',
  introH2Accent: 'vivrai',
  introBody: [
    'L’Isola delle Correnti è l’estremità sud-orientale della Sicilia. Qui il Mar Ionio incontra il Mediterraneo, e nelle giornate ventose si vedono due colori d’acqua diversi che si sfiorano. Una sottile striscia di terra ti porta a piedi dall’isolotto.',
    'Tour con autista privato da Siracusa, sosta lunch al Pura Vida Beach Club di Portopalo, sunset experience fronte mare e aperitivo a Marzamemi prima del rientro.',
    'Una giornata che racconta la Sicilia che non vede chi resta nelle città.'
  ],

  numbersEyebrow: 'Il tour, in numeri',
  numbersH2Pre: 'In',
  numbersH2Accent: 'quattro numeri',
  numbers: [
    {value: 'giornata', label: 'Durata'},
    {value: 'fino a 7', label: 'Persone max'},
    {value: 'IT / EN', label: 'Lingue driver'},
    {value: 'da €420', label: 'Prezzo partenza'}
  ],

  partnersEyebrow: 'Partner di questo tour',
  partnersH2: 'I posti che abbiamo scelto',
  partners: [
    {
      name: 'Pura Vida Beach Club',
      description:
        'Portopalo di Capo Passero. Beach club affacciato sull’Isola delle Correnti. Posto al sole o all’ombra, lunch siciliano in spiaggia, accesso al mare.'
    }
  ],

  stagesEyebrow: 'Tappa per tappa',
  stagesH2Pre: 'Come',
  stagesH2Accent: 'si sviluppa il giorno',
  stages: [
    {
      number: '01',
      title: 'Da Siracusa a Portopalo',
      duration: '1h',
      body: 'Partenza in tarda mattinata, scendiamo lungo la costa sud. Passiamo davanti a Avola, Pachino, attraversiamo i vigneti di Nero d’Avola. Il driver ti racconta come è cambiata questa zona negli ultimi vent’anni — da rurale dimenticata a una delle aree gastronomiche più interessanti dell’isola.',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '02',
      title: 'Pura Vida Beach Club',
      duration: '3–4h',
      body: 'Arrivo al Pura Vida, lettini al sole prenotati per voi, lunch in spiaggia (pesce del giorno, antipasti siciliani, vino bianco di territorio). Mare basso e cristallino, tre-quattro ore di relax senza obbligo di programma. Chi vuole, prende la striscia di sabbia che porta a piedi sull’isolotto.',
      image:
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '03',
      title: 'Sunset experience',
      duration: '1h',
      body: 'Verso il tardo pomeriggio ci spostiamo sul lato dell’Isola delle Correnti che guarda ovest. Il sole tramonta tra i due mari — uno dei punti più suggestivi della Sicilia per fotografare il sunset. Prosecco e taglieri serviti dal Pura Vida.',
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '04',
      title: 'Aperitivo a Marzamemi',
      duration: '1h',
      body: 'Rientro via Marzamemi, il borgo dei pescatori con la piazza affacciata sulla tonnara. Aperitivo nei locali di Piazza Regina Margherita prima di tornare a Siracusa. Arrivo previsto verso le 21.',
      image:
        'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1200&q=70&auto=format&fm=webp'
    }
  ],

  includedH2Pre: 'Cosa',
  includedH2Accent: 'è incluso, cosa no',
  included: [
    'Mercedes Classe V con autista',
    'Posto riservato al Pura Vida Beach Club (lettini + ombrelloni)',
    'Lunch in spiaggia al Pura Vida',
    'Sunset experience al Pura Vida con prosecco e tagliere',
    'Acqua a bordo'
  ],
  excluded: [
    'Aperitivo a Marzamemi (a tuo carico)',
    'Eventuali extra al beach club (massaggi, escursioni in barca)'
  ],
  includedLabel: 'Incluso',
  excludedLabel: 'Non incluso',

  faqEyebrow: 'Dubbi',
  faqH2Pre: 'Le domande',
  faqH2Accent: 'più frequenti',
  faqs: [
    {
      q: 'Quando è il periodo migliore?',
      a: 'Da maggio a ottobre per godere del mare. Da novembre a marzo l’esperienza è più atmosferica (sunset spettacolari) ma niente bagno.'
    },
    {
      q: 'Possiamo modificare l’ordine delle tappe?',
      a: 'Sì. Alcuni clienti preferiscono iniziare con Marzamemi al mattino e finire con il sunset a Pura Vida. Decidiamo in fase di preventivo.'
    },
    {
      q: 'Bambini?',
      a: 'Sì. Il Pura Vida ha una zona riservata alle famiglie e il mare basso è ideale.'
    },
    {
      q: 'Si può fare in mezza giornata?',
      a: 'Sì, versione corta 5h (solo lunch + Isola delle Correnti, senza Marzamemi). Costo da €280.'
    }
  ],

  ctaEyebrow: 'Quando partiamo?',
  ctaH2: 'Pura Vida ti aspetta.',
  ctaSubhead:
    'Dimmi data e numero passeggeri: penso al resto, dalla prenotazione lettini al sunset.'
};

const ISOLA_EN: TourContent = {
  metaTitle:
    'Isola delle Correnti · South Sicily Day Tour | Sicily Driver',
  metaDescription:
    'Day tour to Isola delle Correnti (the southernmost point of Sicily) with Pura Vida Beach Club and sunset in Marzamemi. Mercedes with driver, beach lunch, sunset experience.',

  heroImage: HERO_ISOLA,
  heroEyebrow: 'South Sicily · full day',
  h1: 'Isola delle Correnti',
  heroSubhead:
    'Where Sicily ends and two seas meet. Pura Vida Beach Club at sunset, aperitivo in Marzamemi.',

  introH2Pre: 'What',
  introH2Accent: "you'll experience",
  introBody: [
    'Isola delle Correnti is the south-eastern tip of Sicily. Here the Ionian meets the Mediterranean, and on windy days you can see two different water colors brushing against each other. A thin strip of sand takes you on foot to the islet.',
    'Tour with private driver from Syracuse, lunch stop at Pura Vida Beach Club in Portopalo, sunset experience on the sea and aperitivo in Marzamemi before the return.',
    'A day that tells the Sicily city-stayers never see.'
  ],

  numbersEyebrow: 'The tour, by numbers',
  numbersH2Pre: 'In',
  numbersH2Accent: 'four numbers',
  numbers: [
    {value: 'full day', label: 'Duration'},
    {value: 'up to 7', label: 'Max party'},
    {value: 'IT / EN', label: 'Driver languages'},
    {value: 'from €420', label: 'Starting price'}
  ],

  partnersEyebrow: 'Partners for this tour',
  partnersH2: 'The places we chose',
  partners: [
    {
      name: 'Pura Vida Beach Club',
      description:
        'Portopalo di Capo Passero. Beach club facing Isola delle Correnti. Sunbed in the sun or shade, Sicilian beach lunch, sea access.'
    }
  ],

  stagesEyebrow: 'Stop by stop',
  stagesH2Pre: 'How',
  stagesH2Accent: 'the day unfolds',
  stages: [
    {
      number: '01',
      title: 'Syracuse to Portopalo',
      duration: '1h',
      body: 'Late-morning departure, we descend the south coast. We pass Avola, Pachino, we cross the Nero d’Avola vineyards. The driver tells you how this area changed in the last twenty years — from forgotten rural to one of the most interesting gastronomic regions of the island.',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '02',
      title: 'Pura Vida Beach Club',
      duration: '3–4h',
      body: 'Arrival at Pura Vida, sunbeds reserved for you, beach lunch (catch of the day, Sicilian antipasti, white wine of the land). Shallow crystalline sea, three to four hours of relaxation with no fixed program. Whoever wants takes the sand strip walking to the islet.',
      image:
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '03',
      title: 'Sunset experience',
      duration: '1h',
      body: 'In late afternoon we move to the Isola delle Correnti side facing west. The sun sets between the two seas — one of Sicily’s most beautiful sunset spots. Prosecco and platters served by Pura Vida.',
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '04',
      title: 'Aperitivo in Marzamemi',
      duration: '1h',
      body: 'Return via Marzamemi, the fishermen’s village with the square facing the tonnara. Aperitivo in the bars of Piazza Regina Margherita before returning to Syracuse. Expected arrival around 21:00.',
      image:
        'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1200&q=70&auto=format&fm=webp'
    }
  ],

  includedH2Pre: 'What’s',
  includedH2Accent: 'included, what’s not',
  included: [
    'Mercedes V-Class with driver',
    'Reserved spot at Pura Vida Beach Club (sunbeds + umbrellas)',
    'Beach lunch at Pura Vida',
    'Sunset experience with prosecco and platter',
    'Water on board'
  ],
  excluded: [
    'Aperitivo in Marzamemi (on you)',
    'Optional beach club extras (massages, boat trips)'
  ],
  includedLabel: 'Included',
  excludedLabel: 'Not included',

  faqEyebrow: 'FAQ',
  faqH2Pre: 'Frequent',
  faqH2Accent: 'questions',
  faqs: [
    {
      q: 'When is the best time?',
      a: 'From May to October for the sea. From November to March the experience is more atmospheric (spectacular sunsets) but no swimming.'
    },
    {
      q: 'Can we change the order of stops?',
      a: 'Yes. Some clients prefer Marzamemi in the morning and the Pura Vida sunset to close. We decide at quote time.'
    },
    {
      q: 'Children?',
      a: 'Yes. Pura Vida has a family zone and the shallow sea is ideal.'
    },
    {
      q: 'Can it be done in half a day?',
      a: 'Yes, short version 5h (just lunch + Isola delle Correnti, no Marzamemi). From €280.'
    }
  ],

  ctaEyebrow: 'When do we start?',
  ctaH2: 'Pura Vida is waiting.',
  ctaSubhead:
    'Tell us the date and party size: we handle the rest, from the sunbed booking to the sunset.'
};

// ============================================================
// DOLCE VITA SIRACUSA — URL nuova, [NEW], TOUR ICONA (Fiat 500 Spiaggina)
// ============================================================

const DOLCE_VITA_IT: TourContent = {
  metaTitle:
    'Dolce Vita Siracusa · Ortigia in Fiat 500 | Sicily Driver',
  metaDescription:
    'Tour Ortigia in Fiat 500 Spiaggina d’epoca: 3 ore tra Duomo, Fonte Aretusa, lungomare, aperitivo finale fronte mare. La Dolce Vita siciliana, per coppie e amici.',

  heroImage: HERO_DOLCE_VITA,
  heroEyebrow: 'Ortigia · 3 ore · Fiat 500 d’epoca',
  h1: 'Dolce Vita Siracusa',
  heroSubhead:
    'Ortigia in Fiat 500 Spiaggina. Tre ore. Una sola velocità: quella della passeggiata.',

  introH2Pre: 'Quello che',
  introH2Accent: 'vivrai',
  introBody: [
    'Una Fiat 500 Spiaggina del 1968, restaurata, che ti aspetta in Ortigia. Tre ore in giro per l’isola: il Duomo che era tempio greco poi cattedrale, la Fonte Aretusa con i papiri ancora vivi, il lungomare che la mattina è solo dei pescatori, l’aperitivo finale fronte mare.',
    'Niente itinerario rigido — la macchina si ferma dove vuoi tu, le foto le facciamo noi se ti va. Per coppie, amici, famiglie piccole.',
    'L’auto è guidata da uno dei nostri driver, tu sei passeggero del Mediterraneo.'
  ],

  numbersEyebrow: 'Il tour, in numeri',
  numbersH2Pre: 'In',
  numbersH2Accent: 'quattro numeri',
  numbers: [
    {value: '3 ore', label: 'Durata'},
    {value: 'max 2 (4 stretti)', label: 'Persone — Fiat 500 d’epoca'},
    {value: 'IT / EN', label: 'Lingue driver'},
    {value: 'da €280', label: 'Prezzo (auto + driver + aperitivo)'}
  ],

  stagesEyebrow: 'Tappa per tappa',
  stagesH2Pre: 'In tre',
  stagesH2Accent: 'soste e un aperitivo',
  stages: [
    {
      number: '01',
      title: 'Partenza dal parcheggio Talete',
      duration: '15 min',
      body: 'Ci troviamo al parcheggio Talete, all’ingresso di Ortigia. La 500 ti aspetta lì, capote già abbassata se il tempo lo permette. Foto di partenza, breve briefing su quello che vedremo, e si parte.',
      image:
        'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '02',
      title: 'Lungomare di Levante e Castello Maniace',
      duration: '45 min',
      body: 'Imbocchiamo Via XX Settembre, costeggiamo il porto piccolo e arriviamo al Castello Maniace, all’estremità sud di Ortigia. Sosta foto sul belvedere — uno dei punti più Instagrammati dell’isola.',
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '03',
      title: 'Duomo, Fonte Aretusa, Lungomare di Ponente',
      duration: '1h',
      body: 'Risaliamo verso Piazza Duomo, dove la cattedrale è ancora un tempio dorico inglobato. Sosta breve per camminare nella piazza, poi la Fonte Aretusa con i papiri — l’unica colonia di papiri spontanei d’Europa. Si chiude sul lungomare di Ponente al tramonto.',
      image:
        'https://images.unsplash.com/photo-1581922814484-0b48460b7010?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '04',
      title: 'Aperitivo finale',
      duration: '1h',
      body: 'Aperitivo in uno dei locali di Lungomare Alfeo o Riva di Levante, vista mare. Spritz o vino bianco siciliano, tagliere di formaggi e salumi locali. Foto finali con la 500 nell’angolo giusto. Restituzione 2h dopo l’inizio.',
      image:
        'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1200&q=70&auto=format&fm=webp'
    }
  ],

  includedH2Pre: 'Cosa',
  includedH2Accent: 'è incluso, cosa no',
  included: [
    'Fiat 500 Spiaggina d’epoca con driver',
    'Tre ore di tour Ortigia',
    'Aperitivo fronte mare (Spritz/vino + tagliere)',
    'Servizio foto del driver (telefono cliente)',
    'Acqua a bordo'
  ],
  excluded: [
    'Ingressi a siti specifici (interno cattedrale a pagamento, museo papiro)',
    'Cena dopo l’aperitivo'
  ],
  includedLabel: 'Incluso',
  excludedLabel: 'Non incluso',

  faqEyebrow: 'Dubbi',
  faqH2Pre: 'Le domande',
  faqH2Accent: 'più frequenti',
  faqs: [
    {
      q: 'Che 500 è esattamente?',
      a: 'Fiat 500 Spiaggina del 1968 — la versione "torpedo" senza portiere posteriori, capote in tela, restaurata maniacalmente. Una delle 6 auto d’epoca della flotta.'
    },
    {
      q: 'Si può fare la sera?',
      a: 'Sì. Versione "blue hour" parte un’ora prima del tramonto e finisce con la cena (cena a parte). Stesso prezzo del tour diurno.'
    },
    {
      q: 'Se piove?',
      a: 'Riprogrammiamo senza penali — la 500 Spiaggina ha la capote ma il senso del tour è la capote abbassata. Decidiamo il giorno prima in base alle previsioni.'
    },
    {
      q: 'Bambini?',
      a: 'Solo dai 10 anni in su per ragioni di spazio e sicurezza. Per famiglie più piccole consigliamo l’Isola delle Correnti.'
    }
  ],

  ctaEyebrow: 'Quando?',
  ctaH2: 'Ortigia ti aspetta in Spiaggina.',
  ctaSubhead: 'Scegli giorno e ora del tramonto: la 500 è pronta.'
};

const DOLCE_VITA_EN: TourContent = {
  metaTitle:
    'Dolce Vita Syracuse · Ortigia in Vintage Fiat 500 | Sicily Driver',
  metaDescription:
    'Ortigia tour in a vintage Fiat 500 Spiaggina: 3 hours between the Cathedral, Arethusa Spring, seafront, sunset aperitivo. Sicilian Dolce Vita, for couples and friends.',

  heroImage: HERO_DOLCE_VITA,
  heroEyebrow: 'Ortigia · 3 hours · vintage Fiat 500',
  h1: 'Dolce Vita Syracuse',
  heroSubhead:
    'Ortigia in a Fiat 500 Spiaggina. Three hours. One speed: walking pace.',

  introH2Pre: 'What',
  introH2Accent: "you'll experience",
  introBody: [
    'A restored 1968 Fiat 500 Spiaggina, waiting for you in Ortigia. Three hours around the island: the Cathedral that was once a Greek temple, the Arethusa Spring with the papyrus still alive, the seafront that in the morning belongs only to the fishermen, the final aperitivo by the sea.',
    'No rigid itinerary — the car stops where you want, the photos we take if you like. For couples, friends, small families.',
    'The car is driven by one of our chauffeurs, you are a passenger of the Mediterranean.'
  ],

  numbersEyebrow: 'The tour, by numbers',
  numbersH2Pre: 'In',
  numbersH2Accent: 'four numbers',
  numbers: [
    {value: '3 hours', label: 'Duration'},
    {value: 'max 2 (4 tight)', label: 'Party — vintage Fiat 500'},
    {value: 'IT / EN', label: 'Driver languages'},
    {value: 'from €280', label: 'Price (car + driver + aperitivo)'}
  ],

  stagesEyebrow: 'Stop by stop',
  stagesH2Pre: 'Three stops',
  stagesH2Accent: 'and an aperitivo',
  stages: [
    {
      number: '01',
      title: 'Talete car park departure',
      duration: '15 min',
      body: 'We meet at the Talete car park, the entrance to Ortigia. The 500 is waiting, top already down if the weather allows. Departure photo, brief intro to what we’ll see, and we go.',
      image:
        'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '02',
      title: 'Eastern seafront & Maniace Castle',
      duration: '45 min',
      body: 'We take Via XX Settembre, along the small port, up to Maniace Castle at the southern tip of Ortigia. Photo stop at the belvedere — one of the most Instagrammed spots on the island.',
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '03',
      title: 'Duomo, Arethusa, Western seafront',
      duration: '1h',
      body: 'We climb back to Piazza Duomo, where the cathedral is still a Doric temple inside. A short stop to walk the square, then the Arethusa Spring with the papyrus — the only spontaneous papyrus colony in Europe. We close on the western seafront at sunset.',
      image:
        'https://images.unsplash.com/photo-1581922814484-0b48460b7010?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '04',
      title: 'Final aperitivo',
      duration: '1h',
      body: 'Aperitivo at one of the bars on Lungomare Alfeo or Riva di Levante, sea view. Spritz or Sicilian white wine, board of local cheeses and cured meats. Final photos with the 500 at the right angle. Drop-off 2h after start.',
      image:
        'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1200&q=70&auto=format&fm=webp'
    }
  ],

  includedH2Pre: 'What’s',
  includedH2Accent: 'included, what’s not',
  included: [
    'Vintage Fiat 500 Spiaggina with driver',
    'Three hours Ortigia tour',
    'Sunset aperitivo (Spritz/wine + platter)',
    'Driver photo service (with your phone)',
    'Water on board'
  ],
  excluded: [
    'Entrance to specific sites (paid cathedral interior, papyrus museum)',
    'Dinner after the aperitivo'
  ],
  includedLabel: 'Included',
  excludedLabel: 'Not included',

  faqEyebrow: 'FAQ',
  faqH2Pre: 'Frequent',
  faqH2Accent: 'questions',
  faqs: [
    {
      q: 'Which 500 exactly?',
      a: '1968 Fiat 500 Spiaggina — the "torpedo" version without rear doors, canvas top, meticulously restored. One of the 6 vintage cars in the fleet.'
    },
    {
      q: 'Can it be done in the evening?',
      a: 'Yes. "Blue hour" version starts an hour before sunset and ends with dinner (dinner at extra cost). Same price as daytime.'
    },
    {
      q: 'If it rains?',
      a: 'We reschedule with no penalty — the Spiaggina has the top but the point of the tour is top down. We decide the day before based on forecast.'
    },
    {
      q: 'Children?',
      a: 'From age 10 up only, for space and safety reasons. For smaller families we recommend Isola delle Correnti.'
    }
  ],

  ctaEyebrow: 'When?',
  ctaH2: 'Ortigia is waiting in a Spiaggina.',
  ctaSubhead: 'Pick the day and the sunset hour: the 500 is ready.'
};

// ============================================================
// SILENT SAILING — URL nuova, [NEW]
// ============================================================

const SAILING_IT: TourContent = {
  metaTitle:
    'Silent Sailing · Vela Privata da Ortigia | Sicily Driver',
  metaDescription:
    'Tour in vela privata da Ortigia: 4 ore lungo la costa siracusana, soste bagno nelle baie più belle, tagliere Fratelli Burgio a bordo, prosecco. Max 8 persone.',

  heroImage: HERO_SAILING,
  heroEyebrow: 'Ortigia · 4 ore · vela privata',
  h1: 'Silent Sailing',
  heroSubhead:
    'Quattro ore in vela privata sulla costa di Ortigia. Soste bagno, prosecco, tagliere Fratelli Burgio a bordo.',

  introH2Pre: 'Quello che',
  introH2Accent: 'vivrai',
  introBody: [
    'La barca a vela non corre, non rumoreggia. Si lascia portare dal vento. Quattro ore in vela privata partendo da Ortigia: lungo la costa siracusana sud, due-tre baie isolate dove fare il bagno fuori dal turismo di massa.',
    'Tagliere di prodotti tipici della gastronomia Fratelli Burgio servito a bordo, prosecco fresco. Skipper professionista incluso.',
    'Max 8 persone — perfetto per gruppi piccoli, coppie, famiglie.'
  ],

  numbersEyebrow: 'Il tour, in numeri',
  numbersH2Pre: 'In',
  numbersH2Accent: 'quattro numeri',
  numbers: [
    {value: '4 ore', label: 'Durata'},
    {value: 'max 8', label: 'Persone'},
    {value: 'IT / EN', label: 'Lingue skipper'},
    {value: 'da €380', label: 'Per barca (non per persona)'}
  ],

  partnersEyebrow: 'Partner di questo tour',
  partnersH2: 'I posti che abbiamo scelto',
  partners: [
    {
      name: 'Fratelli Burgio',
      description:
        'Gastronomia siciliana di alta selezione. Il tagliere a bordo include salumi, formaggi, conserve, dolci. Tutto del territorio.'
    }
  ],

  stagesEyebrow: 'Tappa per tappa',
  stagesH2Pre: 'Come',
  stagesH2Accent: 'navighiamo',
  stages: [
    {
      number: '01',
      title: 'Imbarco a Ortigia',
      duration: '20 min',
      body: 'Imbarco al porto piccolo di Ortigia, vicino alla Fonte Aretusa. Briefing di sicurezza dello skipper (10 minuti), prosecco di benvenuto, e si parte. Le vele si aprono fuori dal porto.',
      image:
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '02',
      title: 'Navigazione costa sud',
      duration: '1h 30min',
      body: 'Risaliamo verso sud lungo la costa, dove le calette si nascondono tra promontori bassi. Niente motore una volta fuori porto — solo il vento, il rumore della vela che si gonfia, qualche gabbiano. Lo skipper ti racconta come si legge il vento, se ti interessa.',
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '03',
      title: 'Sosta bagno',
      duration: '1h 30min',
      body: 'Ancora in una delle baie più belle (la scelta dipende dal vento del giorno — Fontane Bianche, Cala Mosche, o una caletta nascosta vicino a Marzamemi). Bagno in acque cristalline. A bordo arriva il tagliere Fratelli Burgio: salumi, formaggi locali, pane fresco, conserve.',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '04',
      title: 'Rientro al tramonto',
      duration: '40 min',
      body: 'Rientro lungo la costa, possibile sosta finale per il tramonto se la luce promette bene. Sbarco a Ortigia.',
      image:
        'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?w=1200&q=70&auto=format&fm=webp'
    }
  ],

  includedH2Pre: 'Cosa',
  includedH2Accent: 'è incluso, cosa no',
  included: [
    'Barca a vela privata con skipper',
    '4 ore di navigazione',
    'Prosecco di benvenuto e a bordo',
    'Tagliere Fratelli Burgio',
    'Acqua e bibite',
    'Salvagente, scaletta per il bagno, telo'
  ],
  excluded: [
    'Trasferimento da/per il porto (se non sei già a Ortigia, si aggiunge separatamente)',
    'Eventuali extra alcolici'
  ],
  includedLabel: 'Incluso',
  excludedLabel: 'Non incluso',

  faqEyebrow: 'Dubbi',
  faqH2Pre: 'Le domande',
  faqH2Accent: 'più frequenti',
  faqs: [
    {
      q: 'Serve esperienza nautica?',
      a: 'No. Lo skipper è professionista, la barca è gestita da lui. Tu sei ospite. Se ti interessa imparare qualcosa sulle vele, te lo spiega.'
    },
    {
      q: 'E se non c’è vento?',
      a: 'La barca ha anche il motore. In una giornata senza vento navighiamo a motore, ma facciamo soste più lunghe nelle baie.'
    },
    {
      q: 'Bambini?',
      a: 'Sì, da ogni età. Salvagenti per bambini a bordo. Per i più piccoli (sotto i 4 anni) consigliamo mattinata calma, mare piatto.'
    },
    {
      q: 'Mare mosso?',
      a: 'Se le previsioni indicano mare forza 3+ riprogrammiamo senza penali. Le condizioni si valutano la sera prima.'
    }
  ],

  ctaEyebrow: 'Pronto a salire?',
  ctaH2: 'Quattro ore di silenzio, in vela.',
  ctaSubhead: 'Dimmi data e numero passeggeri: prenoto la barca giusta.'
};

const SAILING_EN: TourContent = {
  metaTitle:
    'Silent Sailing · Private Sailing from Ortigia | Sicily Driver',
  metaDescription:
    'Private sailing tour from Ortigia: 4 hours along Syracuse coast, swim stops in hidden bays, Fratelli Burgio platter on board, prosecco. Max 8 people.',

  heroImage: HERO_SAILING,
  heroEyebrow: 'Ortigia · 4 hours · private sailing',
  h1: 'Silent Sailing',
  heroSubhead:
    'Four hours of private sailing along Ortigia’s coast. Swim stops, prosecco, Fratelli Burgio platter on board.',

  introH2Pre: 'What',
  introH2Accent: "you'll experience",
  introBody: [
    'A sailing boat doesn’t rush, doesn’t roar. It lets the wind carry it. Four hours of private sailing leaving from Ortigia: along the south Syracuse coast, two or three isolated bays for a swim away from mass tourism.',
    'Fratelli Burgio gourmet platter served on board, fresh prosecco. Professional skipper included.',
    'Max 8 people — perfect for small groups, couples, families.'
  ],

  numbersEyebrow: 'The tour, by numbers',
  numbersH2Pre: 'In',
  numbersH2Accent: 'four numbers',
  numbers: [
    {value: '4 hours', label: 'Duration'},
    {value: 'max 8', label: 'Party'},
    {value: 'IT / EN', label: 'Skipper languages'},
    {value: 'from €380', label: 'Per boat (not per person)'}
  ],

  partnersEyebrow: 'Partners for this tour',
  partnersH2: 'The places we chose',
  partners: [
    {
      name: 'Fratelli Burgio',
      description:
        'Premium Sicilian gourmet shop. The on-board platter includes cured meats, cheeses, preserves, sweets. All from the territory.'
    }
  ],

  stagesEyebrow: 'Stop by stop',
  stagesH2Pre: 'How',
  stagesH2Accent: 'we sail',
  stages: [
    {
      number: '01',
      title: 'Boarding at Ortigia',
      duration: '20 min',
      body: 'Boarding at the small port of Ortigia, near the Arethusa Spring. Skipper’s safety briefing (10 min), welcome prosecco, and we go. Sails open just outside the harbor.',
      image:
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '02',
      title: 'Sailing the south coast',
      duration: '1h 30min',
      body: 'We head south along the coast, where coves hide between low promontories. No engine once out of port — just the wind, the sound of the sail filling, a seagull or two. The skipper explains how to read the wind, if you’re curious.',
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '03',
      title: 'Swim stop',
      duration: '1h 30min',
      body: 'Anchor in one of the most beautiful bays (choice depends on the day’s wind — Fontane Bianche, Cala Mosche, or a hidden cove near Marzamemi). Swim in crystalline water. The Fratelli Burgio platter comes on board: cured meats, local cheeses, fresh bread, preserves.',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=70&auto=format&fm=webp'
    },
    {
      number: '04',
      title: 'Sunset return',
      duration: '40 min',
      body: 'Return along the coast, optional final stop for sunset if the light promises. Disembark in Ortigia.',
      image:
        'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?w=1200&q=70&auto=format&fm=webp'
    }
  ],

  includedH2Pre: 'What’s',
  includedH2Accent: 'included, what’s not',
  included: [
    'Private sailing boat with skipper',
    '4 hours of sailing',
    'Welcome prosecco and on-board',
    'Fratelli Burgio platter',
    'Water and soft drinks',
    'Life jackets, swim ladder, towel'
  ],
  excluded: [
    'Transfer to/from port (if not already in Ortigia, added separately)',
    'Any extra alcoholic drinks'
  ],
  includedLabel: 'Included',
  excludedLabel: 'Not included',

  faqEyebrow: 'FAQ',
  faqH2Pre: 'Frequent',
  faqH2Accent: 'questions',
  faqs: [
    {
      q: 'Do I need sailing experience?',
      a: 'No. The skipper is professional, the boat is managed by them. You’re a guest. If you want to learn anything about sails, they’ll teach you.'
    },
    {
      q: 'What if there’s no wind?',
      a: 'The boat has an engine too. On a windless day we cruise with engine but make longer stops in the bays.'
    },
    {
      q: 'Children?',
      a: 'Yes, all ages. Children’s life jackets on board. For very small ones (under 4) we recommend calm morning, flat sea.'
    },
    {
      q: 'Rough sea?',
      a: 'If the forecast indicates force 3+ we reschedule with no penalty. Conditions assessed the evening before.'
    }
  ],

  ctaEyebrow: 'Ready to board?',
  ctaH2: 'Four hours of silence, sailing.',
  ctaSubhead: 'Tell me date and party size: I book the right boat.'
};

// Silenzia unused warning per costanti baseline incluso/escluso
void INCLUDED_BASE_IT;
void INCLUDED_BASE_EN;

// ============================================================
// Lookup
// ============================================================

const TOURS: Record<Locale, Record<TourKey, TourContent>> = {
  it: {
    barocco: BAROCCO_IT,
    'etna-premium': ETNA_IT,
    'isola-delle-correnti': ISOLA_IT,
    'dolce-vita-siracusa': DOLCE_VITA_IT,
    'silent-sailing': SAILING_IT
  },
  en: {
    barocco: BAROCCO_EN,
    'etna-premium': ETNA_EN,
    'isola-delle-correnti': ISOLA_EN,
    'dolce-vita-siracusa': DOLCE_VITA_EN,
    'silent-sailing': SAILING_EN
  }
};

export function getTour(key: TourKey, locale: Locale): TourContent {
  return TOURS[locale][key];
}

const HUBS: Record<Locale, TourHubContent> = {it: HUB_IT, en: HUB_EN};

export function getTourHub(locale: Locale): TourHubContent {
  return HUBS[locale];
}
