// ============================================================
// Sicily Driver Siracusa — Wedding content
//
// Pagina nuova additive. Tutto [NEW] da Brief/COPY.md §7.
// Signature: 6 auto d'epoca + navetta ospiti + consulenza borghi.
// ============================================================

import type {Locale} from './cities';

export type VintageCar = {
  model: string;
  year: string;
  character: string;
  image: string;
};

export type WeddingVenue = {
  name: string;
  tagline: string;
  description: string;
};

export type WeddingContent = {
  metaTitle: string;
  metaDescription: string;

  heroImage: string;
  heroEyebrow: string;
  h1Pre: string;
  h1Accent: string;
  heroSubhead: string;
  ctaHero: string;

  storyEyebrow: string;
  storyH2: string;
  beforeTitle: string;
  beforeBody: string;
  duringTitle: string;
  duringBody: string;
  afterTitle: string;
  afterBody: string;

  carsEyebrow: string;
  carsH2: string;
  carsIntro: string;
  cars: VintageCar[];
  carsTodoNote: string;

  shuttleEyebrow: string;
  shuttleH2: string;
  shuttleBody: string;
  shuttleIncludes: string[];
  shuttleIncludesLabel: string;

  venuesEyebrow: string;
  venuesH2: string;
  venuesIntro: string;
  venues: WeddingVenue[];

  galleryEyebrow: string;
  galleryH2: string;
  galleryCaption: string;
  galleryPlaceholderNote: string;

  faqEyebrow: string;
  faqH2Pre: string;
  faqH2Accent: string;
  faqs: {q: string; a: string}[];

  formEyebrow: string;
  formH2Pre: string;
  formH2Accent: string;
  formSubhead: string;
  formFields: {
    dateLabel: string;
    datePlaceholder: string;
    ceremonyLabel: string;
    ceremonyPlaceholder: string;
    receptionLabel: string;
    receptionPlaceholder: string;
    carsCountLabel: string;
    carsCountOption1: string;
    carsCountOption2: string;
    carsCountOption3: string;
    guestsLabel: string;
    guestsPlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    submit: string;
    submitting: string;
    submitNote: string;
    successTitle: string;
    successBody: string;
    errorRequired: string;
    errorSend: string;
  };

  ctaEyebrow: string;
  ctaH2: string;
  ctaSubhead: string;
};

// ============================================================
// Vintage car images — TODO: replace with foto reali Enzo
// Placeholder generici Unsplash di vintage cars in Italian/Mediterranean settings
// ============================================================

const CAR_FIAT500 =
  'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?w=900&q=70&auto=format&fm=webp';
const CAR_PAGODA =
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&q=70&auto=format&fm=webp';
const CAR_SPIDER =
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=70&auto=format&fm=webp';
const CAR_BEETLE =
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=70&auto=format&fm=webp';
const CAR_LANCIA =
  'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&q=70&auto=format&fm=webp';
const CAR_PULLMAN =
  'https://images.unsplash.com/photo-1493238792000-8113da705763?w=900&q=70&auto=format&fm=webp';

const HERO_WEDDING =
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=70&auto=format&fm=webp';

// ============================================================
// IT
// ============================================================

const WEDDING_IT: WeddingContent = {
  metaTitle:
    'Wedding Sicilia — Auto d’Epoca, Navetta Ospiti, Consulenza Borghi | Sicily Driver',
  metaDescription:
    'Servizio wedding in Sicilia orientale: 6 auto d’epoca tutte revisionate, navetta ospiti in van di lusso, consulenza sui borghi dove sposarsi (Noto, Marzamemi, Scicli, Val di Noto).',

  heroImage: HERO_WEDDING,
  heroEyebrow: 'Wedding · Sicilia orientale',
  h1Pre: 'Per il giorno',
  h1Accent: 'che ricorderai',
  heroSubhead:
    'Sei auto d’epoca, navetta ospiti, e i posti che conosciamo come fossero di casa. Tre cose, fatte bene.',
  ctaHero: 'Parliamo del giorno',

  storyEyebrow: 'Come ti accompagniamo',
  storyH2: 'Come ti accompagniamo',
  beforeTitle: 'Prima della cerimonia',
  beforeBody:
    'Ti veniamo a prendere nella villa o nell’hotel dove ti stai preparando. La sposa nell’auto d’epoca scelta, lo sposo nel transfer dedicato, gli ospiti nella navetta che parte dall’hotel. Coordiniamo gli orari per arrivare alla cerimonia con il margine giusto — non troppo presto, non in ritardo.',
  duringTitle: 'Durante',
  duringBody:
    'Dopo la cerimonia, le foto a coppia con l’auto d’epoca nei luoghi che scegliamo insieme: una cala vicino Marzamemi, una piazza barocca di Noto al tramonto, un belvedere sull’Etna. Mentre voi siete con il fotografo, gli ospiti vengono trasferiti al luogo del ricevimento.',
  afterTitle: 'Dopo',
  afterBody:
    'A fine serata, navetta per tutti i guests verso gli hotel di base. Niente preoccupazione di guidare per nessuno. Auto a disposizione anche per il giorno dopo, se il viaggio di nozze parte da Sicilia.',

  carsEyebrow: 'Le 6 auto d’epoca',
  carsH2: 'Le 6 auto d’epoca',
  carsIntro:
    'Sei auto d’epoca, tutte revisionate e maniacalmente mantenute. Ogni dettaglio funziona, ogni cromatura è lucida come il giorno in cui sono uscite dalla fabbrica.',
  cars: [
    {
      model: 'Fiat 500 Spiaggina',
      year: '1968',
      character: 'Per un arrivo cinematografico in piazza.',
      image: CAR_FIAT500
    },
    {
      model: 'Mercedes-Benz 280SL Pagoda',
      year: '1969',
      character: 'Per chi vuole il sapore degli anni ’60.',
      image: CAR_PAGODA
    },
    {
      model: 'Alfa Romeo Giulia Spider',
      year: '1967',
      character: 'Per un’estate italiana decapottabile.',
      image: CAR_SPIDER
    },
    {
      model: 'Volkswagen Maggiolino Cabrio',
      year: '1971',
      character: 'Per un wedding più rilassato.',
      image: CAR_BEETLE
    },
    {
      model: 'Lancia Aurelia B24',
      year: '1956',
      character: 'Per gli amanti del classico.',
      image: CAR_LANCIA
    },
    {
      model: 'Mercedes-Benz Pullman',
      year: '1972',
      character: 'Per gli arrivi importanti, fino a 6 persone.',
      image: CAR_PULLMAN
    }
  ],
  carsTodoNote:
    'Modelli ed annate da confermare con il cliente (placeholder Brief §7).',

  shuttleEyebrow: 'Per gli invitati',
  shuttleH2: 'Navetta ospiti — gli invitati al loro posto',
  shuttleBody:
    'La logistica del wedding è il dettaglio che fa la differenza per gli invitati. Coordiniamo un van di lusso (fino a 7 persone) o più mezzi in parallelo per i transfer ospiti: pickup hotel/aeroporti, transfer alle location della cerimonia e del ricevimento, rientro fine serata. Un solo numero WhatsApp di riferimento per ogni driver, tu pensi al resto.',
  shuttleIncludesLabel: 'Cosa include il servizio',
  shuttleIncludes: [
    'Pickup multipli da hotel diversi',
    'Coordinamento orari con wedding planner',
    'Driver dedicato per ogni mezzo',
    'WhatsApp di gruppo per gestione live',
    'Rientro fine serata garantito'
  ],

  venuesEyebrow: 'I borghi dove sposarsi',
  venuesH2: 'I borghi dove sposarsi',
  venuesIntro:
    'Non sono affiliazioni commerciali. Sono i posti che noi stessi consigliamo agli sposi che ce lo chiedono, perché conosciamo chi ci si è sposato prima e abbiamo visto come ha funzionato.',
  venues: [
    {
      name: 'Noto',
      tagline: 'Per chi vuole il barocco',
      description:
        'Cattedrale di San Nicolò per la cerimonia, palazzi storici (Villadorata, Nicolaci) per il ricevimento. Distanza media dalla nostra sede: 30 min.'
    },
    {
      name: 'Marzamemi',
      tagline: 'Per chi vuole il mare',
      description:
        'Piazza Regina Margherita con la tonnara, ricevimenti nei locali storici del borgo. 50 min da Siracusa.'
    },
    {
      name: 'Scicli',
      tagline: 'Per chi cerca meno turismo',
      description:
        'Capitale del barocco meno battuta di Noto. Palazzi storici disponibili per cerimonie civili e ricevimenti.'
    },
    {
      name: 'Ragusa Ibla',
      tagline: 'Per chi ama le città di pietra',
      description:
        'Giardini Iblei con vista, Chiesa di San Giorgio per la cerimonia.'
    },
    {
      name: 'Masserie del Val di Noto',
      tagline: 'Per chi vuole campagna ed eleganza',
      description:
        'Diverse masserie storiche restaurate ospitano sia cerimonia che ricevimento sotto lo stesso tetto.'
    },
    {
      name: 'Castello di Donnafugata',
      tagline: 'Per chi vuole un set cinematografico',
      description:
        'Vicino Ragusa, location storica con parco. Solo per eventi di alto livello.'
    }
  ],

  galleryEyebrow: 'Wedding che abbiamo accompagnato',
  galleryH2: 'Wedding che abbiamo accompagnato',
  galleryCaption:
    'Tutte le foto sono di matrimoni reali, pubblicate con il consenso degli sposi.',
  galleryPlaceholderNote:
    'Galleria con foto reali da fornire dal cliente (placeholder fino al second round).',

  faqEyebrow: 'Dubbi',
  faqH2Pre: 'Le domande',
  faqH2Accent: 'che ci fate',
  faqs: [
    {
      q: 'Con quanto anticipo bisogna prenotare?',
      a: 'Idealmente 4–6 mesi prima per garantire l’auto d’epoca scelta. Per la sola navetta ospiti, anche 2 mesi sono sufficienti. In alta stagione (maggio-settembre) consigliamo prenotazione 6+ mesi.'
    },
    {
      q: 'Le decorazioni dell’auto sono incluse?',
      a: 'Il fiocco/coccarda standard sì. Per decorazioni floreali personalizzate ci coordiniamo con il vostro florist o vi suggeriamo qualcuno di fiducia. Costo a parte.'
    },
    {
      q: 'Quanta distanza copriamo nel servizio wedding?',
      a: 'Tutta la Sicilia orientale. Per cerimonie in zone più lontane (Palermo, Trapani) serve preventivo dedicato.'
    },
    {
      q: 'Possiamo avere più auto d’epoca contemporaneamente?',
      a: 'Sì, fino a 6 — abbiamo tutte e 6 disponibili in parallelo se nessun altro evento è in calendario lo stesso giorno. Da verificare in fase preventivo.'
    },
    {
      q: 'Gestione imprevisti il giorno del matrimonio?',
      a: 'Ogni driver ha un mezzo di backup raggiungibile in 30 minuti. Le auto d’epoca hanno una sostituzione moderna pronta in caso (rara) di problema meccanico last-minute.'
    },
    {
      q: 'Auto bianca o di colore?',
      a: 'Tre delle 6 auto sono bianche, le altre conservano il colore originale (rosso, blu, crema). Si sceglie in base allo stile del wedding.'
    }
  ],

  formEyebrow: 'Preventivo wedding',
  formH2Pre: 'Ricevi un preventivo',
  formH2Accent: 'entro 24h',
  formSubhead:
    'Sette informazioni per costruire il preventivo. Ti rispondiamo con un piano dimensionato entro 24 ore.',
  formFields: {
    dateLabel: 'Data evento',
    datePlaceholder: 'gg/mm/aaaa',
    ceremonyLabel: 'Location cerimonia',
    ceremonyPlaceholder: 'Chiesa / villa / spiaggia, città',
    receptionLabel: 'Location ricevimento',
    receptionPlaceholder: 'Villa, tenuta, ristorante',
    carsCountLabel: 'Numero auto d’epoca necessarie',
    carsCountOption1: '1 auto',
    carsCountOption2: '2 auto',
    carsCountOption3: '3 o più',
    guestsLabel: 'Numero ospiti da trasportare',
    guestsPlaceholder: 'Es. 15 ospiti via aeroporto',
    notesLabel: 'Note speciali / esigenze particolari',
    notesPlaceholder: 'Decorazioni, tempi, transfer notturno…',
    nameLabel: 'Nome',
    namePlaceholder: 'Sposo/a o wedding planner',
    phoneLabel: 'Telefono',
    phonePlaceholder: '+39 …',
    emailLabel: 'Email',
    emailPlaceholder: 'la-tua@email.it',
    submit: 'Ricevi preventivo entro 24h',
    submitting: 'Invio',
    submitNote:
      'Richiesta ricevuta. Ti contattiamo entro 24h con il preventivo personalizzato.',
    successTitle: 'Richiesta ricevuta.',
    successBody:
      'Ti contattiamo entro 24h con il preventivo personalizzato. Per cose urgenti, scrivi direttamente su WhatsApp.',
    errorRequired: 'Controlla i campi obbligatori e riprova.',
    errorSend: 'Invio non riuscito. Riprova o scrivici su WhatsApp.'
  },

  ctaEyebrow: 'Preferisci scrivere direttamente?',
  ctaH2: 'Parliamone su WhatsApp.',
  ctaSubhead:
    'Se hai una data e qualche ospite in mente, scrivici: prima risposta entro un’ora.'
};

const WEDDING_EN: WeddingContent = {
  metaTitle:
    'Sicily Wedding — Vintage Cars, Guest Shuttle, Village Advice | Sicily Driver',
  metaDescription:
    'Wedding service in eastern Sicily: 6 fully serviced vintage cars, luxury-van guest shuttle, advice on villages to marry in (Noto, Marzamemi, Scicli, Val di Noto).',

  heroImage: HERO_WEDDING,
  heroEyebrow: 'Wedding · eastern Sicily',
  h1Pre: 'For the day',
  h1Accent: "you'll remember",
  heroSubhead:
    'Six vintage cars, guest shuttle, and the places we know like home. Three things, done well.',
  ctaHero: "Let's talk about the day",

  storyEyebrow: 'How we accompany you',
  storyH2: 'How we accompany you',
  beforeTitle: 'Before the ceremony',
  beforeBody:
    'We pick you up at the villa or hotel where you’re getting ready. The bride in the chosen vintage car, the groom in a dedicated transfer, the guests on the shuttle that leaves from the hotel. We coordinate timing to arrive at the ceremony with the right margin — not too early, not late.',
  duringTitle: 'During',
  duringBody:
    'After the ceremony, couple photos with the vintage car in places we choose together: a cove near Marzamemi, a Baroque square in Noto at sunset, a viewpoint on Etna. While you’re with the photographer, the guests are transferred to the reception location.',
  afterTitle: 'After',
  afterBody:
    'At the end of the evening, shuttle for all the guests back to their base hotels. No worry about driving for anyone. Cars also available the next day, if the honeymoon starts from Sicily.',

  carsEyebrow: 'The 6 vintage cars',
  carsH2: 'The 6 vintage cars',
  carsIntro:
    'Six vintage cars, all fully serviced and meticulously maintained. Every detail works, every chrome part shines as the day they left the factory.',
  cars: [
    {
      model: 'Fiat 500 Spiaggina',
      year: '1968',
      character: 'For a cinematic arrival in the square.',
      image: CAR_FIAT500
    },
    {
      model: 'Mercedes-Benz 280SL Pagoda',
      year: '1969',
      character: 'For those who want the flavor of the ’60s.',
      image: CAR_PAGODA
    },
    {
      model: 'Alfa Romeo Giulia Spider',
      year: '1967',
      character: 'For a top-down Italian summer.',
      image: CAR_SPIDER
    },
    {
      model: 'Volkswagen Beetle Cabrio',
      year: '1971',
      character: 'For a more relaxed wedding.',
      image: CAR_BEETLE
    },
    {
      model: 'Lancia Aurelia B24',
      year: '1956',
      character: 'For lovers of the classic.',
      image: CAR_LANCIA
    },
    {
      model: 'Mercedes-Benz Pullman',
      year: '1972',
      character: 'For important arrivals, up to 6 people.',
      image: CAR_PULLMAN
    }
  ],
  carsTodoNote: 'Models and years to be confirmed with the client.',

  shuttleEyebrow: 'For the guests',
  shuttleH2: 'Guest shuttle — your guests in their place',
  shuttleBody:
    'Wedding logistics is the detail that makes the difference for guests. We coordinate a luxury van (up to 7 people) or multiple vehicles in parallel for guest transfers: pickup hotel/airports, transfer to ceremony and reception locations, return at the end of the evening. One single WhatsApp number per driver, you focus on the rest.',
  shuttleIncludesLabel: 'What the service includes',
  shuttleIncludes: [
    'Multiple pickups from different hotels',
    'Schedule coordination with wedding planner',
    'Dedicated driver for each vehicle',
    'WhatsApp group for live management',
    'Guaranteed return at end of evening'
  ],

  venuesEyebrow: 'Where to celebrate',
  venuesH2: 'Where to celebrate',
  venuesIntro:
    'These are not commercial affiliations. These are the places we ourselves recommend to couples who ask us, because we know couples who married here and have seen how it worked.',
  venues: [
    {
      name: 'Noto',
      tagline: 'For those who want the Baroque',
      description:
        'Cathedral of San Nicolò for the ceremony, historic palaces (Villadorata, Nicolaci) for the reception. 30 min from our base.'
    },
    {
      name: 'Marzamemi',
      tagline: 'For those who want the sea',
      description:
        'Piazza Regina Margherita with the tonnara, receptions in the historic venues of the village. 50 min from Syracuse.'
    },
    {
      name: 'Scicli',
      tagline: 'For those seeking less tourism',
      description:
        'Less travelled Baroque capital than Noto. Historic palaces available for civil ceremonies and receptions.'
    },
    {
      name: 'Ragusa Ibla',
      tagline: 'For lovers of stone cities',
      description:
        'Giardini Iblei with a view, Church of San Giorgio for the ceremony.'
    },
    {
      name: 'Masserie of the Val di Noto',
      tagline: 'For those who want countryside and elegance',
      description:
        'Several restored historic farm estates host both ceremony and reception under the same roof.'
    },
    {
      name: 'Castello di Donnafugata',
      tagline: 'For those who want a cinematic set',
      description:
        'Near Ragusa, historic location with park. Only for high-end events.'
    }
  ],

  galleryEyebrow: "Weddings we've accompanied",
  galleryH2: "Weddings we've accompanied",
  galleryCaption:
    "All photos are from real weddings, published with the couples' consent.",
  galleryPlaceholderNote:
    'Gallery to be replaced with real photos provided by client.',

  faqEyebrow: 'FAQ',
  faqH2Pre: 'Frequent',
  faqH2Accent: 'questions',
  faqs: [
    {
      q: 'How far in advance should we book?',
      a: 'Ideally 4–6 months before, to secure your chosen vintage car. For guest shuttle only, 2 months is enough. In high season (May–September) we recommend 6+ months.'
    },
    {
      q: 'Are car decorations included?',
      a: 'Standard ribbon/cockade yes. For custom floral decorations we coordinate with your florist or suggest someone we trust. Cost added.'
    },
    {
      q: 'What distance do we cover for the wedding service?',
      a: 'All of eastern Sicily. For ceremonies in more distant areas (Palermo, Trapani) we need a dedicated quote.'
    },
    {
      q: 'Can we have multiple vintage cars at the same time?',
      a: 'Yes, up to 6 — all 6 are available in parallel if no other event is on calendar the same day. To verify at quote time.'
    },
    {
      q: 'Handling unexpected issues on the wedding day?',
      a: 'Every driver has a backup vehicle reachable in 30 minutes. The vintage cars have a modern substitute ready in case (rare) of a last-minute mechanical issue.'
    },
    {
      q: 'White car or coloured?',
      a: 'Three of the 6 cars are white, the others keep their original color (red, blue, cream). Chosen based on the style of the wedding.'
    }
  ],

  formEyebrow: 'Wedding quote',
  formH2Pre: 'Get a quote',
  formH2Accent: 'within 24h',
  formSubhead:
    'Seven inputs to build the quote. We reply with a sized plan within 24 hours.',
  formFields: {
    dateLabel: 'Event date',
    datePlaceholder: 'dd/mm/yyyy',
    ceremonyLabel: 'Ceremony location',
    ceremonyPlaceholder: 'Church / villa / beach, town',
    receptionLabel: 'Reception location',
    receptionPlaceholder: 'Villa, estate, restaurant',
    carsCountLabel: 'Number of vintage cars needed',
    carsCountOption1: '1 car',
    carsCountOption2: '2 cars',
    carsCountOption3: '3 or more',
    guestsLabel: 'Number of guests to transport',
    guestsPlaceholder: 'E.g. 15 guests via airport',
    notesLabel: 'Special notes / requests',
    notesPlaceholder: 'Decorations, timing, late-night transfer…',
    nameLabel: 'Name',
    namePlaceholder: 'Bride/groom or wedding planner',
    phoneLabel: 'Phone',
    phonePlaceholder: '+44 …',
    emailLabel: 'Email',
    emailPlaceholder: 'your@email.com',
    submit: 'Get a quote within 24h',
    submitting: 'Sending',
    submitNote:
      'Request received. We’ll contact you within 24h with a tailored quote.',
    successTitle: 'Request received.',
    successBody:
      'We’ll contact you within 24h with a tailored quote. For urgent matters, message us on WhatsApp.',
    errorRequired: 'Please check the required fields and try again.',
    errorSend: 'Sending failed. Please try again or message us on WhatsApp.'
  },

  ctaEyebrow: 'Prefer to write directly?',
  ctaH2: "Let's talk on WhatsApp.",
  ctaSubhead:
    'If you have a date and a few guests in mind, message us: first reply within an hour.'
};

const WEDDING_FR: WeddingContent = {
  metaTitle:
    'Mariage en Sicile — Voitures Anciennes, Navette Invités, Conseil Villages | Sicily Driver',
  metaDescription:
    'Service mariage en Sicile orientale : 6 voitures anciennes entièrement révisées, navette invités en van de luxe, conseil sur les villages où se marier (Noto, Marzamemi, Scicli, Val di Noto).',

  heroImage: HERO_WEDDING,
  heroEyebrow: 'Mariage · Sicile orientale',
  h1Pre: 'Pour le jour',
  h1Accent: 'dont vous vous souviendrez',
  heroSubhead:
    'Six voitures anciennes, navette invités, et les lieux que nous connaissons comme chez nous. Trois choses, faites avec soin.',
  ctaHero: 'Parlons de ce jour',

  storyEyebrow: 'Comment nous vous accompagnons',
  storyH2: 'Comment nous vous accompagnons',
  beforeTitle: 'Avant la cérémonie',
  beforeBody:
    'Nous venons vous chercher à la villa ou à l’hôtel où vous vous préparez. La mariée dans la voiture ancienne choisie, le marié dans un transfert dédié, les invités dans la navette qui part de l’hôtel. Nous coordonnons les horaires pour arriver à la cérémonie avec la juste marge — ni trop tôt, ni en retard.',
  duringTitle: 'Pendant',
  duringBody:
    'Après la cérémonie, les photos de couple avec la voiture ancienne dans les lieux que nous choisissons ensemble : une crique près de Marzamemi, une place baroque de Noto au coucher du soleil, un belvédère sur l’Etna. Pendant que vous êtes avec le photographe, les invités sont transférés vers le lieu de la réception.',
  afterTitle: 'Après',
  afterBody:
    'En fin de soirée, navette pour tous les invités vers leurs hôtels de séjour. Personne n’a à se soucier de conduire. Voitures également disponibles le lendemain, si le voyage de noces démarre de Sicile.',

  carsEyebrow: 'Les 6 voitures anciennes',
  carsH2: 'Les 6 voitures anciennes',
  carsIntro:
    'Six voitures anciennes, toutes révisées et entretenues avec un soin maniaque. Chaque détail fonctionne, chaque chrome brille comme au jour de leur sortie d’usine.',
  cars: [
    {
      model: 'Fiat 500 Spiaggina',
      year: '1968',
      character: 'Pour une arrivée cinématographique sur la place.',
      image: CAR_FIAT500
    },
    {
      model: 'Mercedes-Benz 280SL Pagoda',
      year: '1969',
      character: 'Pour ceux qui veulent la saveur des années 60.',
      image: CAR_PAGODA
    },
    {
      model: 'Alfa Romeo Giulia Spider',
      year: '1967',
      character: 'Pour un été italien décapotable.',
      image: CAR_SPIDER
    },
    {
      model: 'Volkswagen Coccinelle Cabriolet',
      year: '1971',
      character: 'Pour un mariage plus détendu.',
      image: CAR_BEETLE
    },
    {
      model: 'Lancia Aurelia B24',
      year: '1956',
      character: 'Pour les amoureux du classique.',
      image: CAR_LANCIA
    },
    {
      model: 'Mercedes-Benz Pullman',
      year: '1972',
      character: 'Pour les arrivées importantes, jusqu’à 6 personnes.',
      image: CAR_PULLMAN
    }
  ],
  carsTodoNote: 'Modèles et années à confirmer avec le client.',

  shuttleEyebrow: 'Pour les invités',
  shuttleH2: 'Navette invités — vos invités à leur place',
  shuttleBody:
    'La logistique du mariage est le détail qui fait la différence pour les invités. Nous coordonnons un van de luxe (jusqu’à 7 personnes) ou plusieurs véhicules en parallèle pour les transferts des invités : prise en charge hôtel/aéroports, transfert vers les lieux de la cérémonie et de la réception, retour en fin de soirée. Un seul numéro WhatsApp de référence par chauffeur, vous vous occupez du reste.',
  shuttleIncludesLabel: 'Ce que le service comprend',
  shuttleIncludes: [
    'Prises en charge multiples depuis différents hôtels',
    'Coordination des horaires avec le wedding planner',
    'Chauffeur dédié pour chaque véhicule',
    'Groupe WhatsApp pour la gestion en direct',
    'Retour en fin de soirée garanti'
  ],

  venuesEyebrow: 'Où se marier',
  venuesH2: 'Où se marier',
  venuesIntro:
    'Ce ne sont pas des affiliations commerciales. Ce sont les lieux que nous recommandons nous-mêmes aux mariés qui nous le demandent, parce que nous connaissons ceux qui s’y sont mariés avant et avons vu comment cela s’est passé.',
  venues: [
    {
      name: 'Noto',
      tagline: 'Pour ceux qui veulent le baroque',
      description:
        'Cathédrale de San Nicolò pour la cérémonie, palais historiques (Villadorata, Nicolaci) pour la réception. Distance moyenne de notre base : 30 min.'
    },
    {
      name: 'Marzamemi',
      tagline: 'Pour ceux qui veulent la mer',
      description:
        'Piazza Regina Margherita avec la tonnara, réceptions dans les lieux historiques du village. À 50 min de Syracuse.'
    },
    {
      name: 'Scicli',
      tagline: 'Pour ceux qui cherchent moins de tourisme',
      description:
        'Capitale du baroque moins fréquentée que Noto. Palais historiques disponibles pour cérémonies civiles et réceptions.'
    },
    {
      name: 'Ragusa Ibla',
      tagline: 'Pour les amoureux des villes de pierre',
      description:
        'Giardini Iblei avec vue, église de San Giorgio pour la cérémonie.'
    },
    {
      name: 'Masserie del Val di Noto',
      tagline: 'Pour ceux qui veulent campagne et élégance',
      description:
        'Plusieurs masseries historiques restaurées accueillent cérémonie et réception sous le même toit.'
    },
    {
      name: 'Castello di Donnafugata',
      tagline: 'Pour ceux qui veulent un décor de cinéma',
      description:
        'Près de Raguse, lieu historique avec parc. Uniquement pour les événements haut de gamme.'
    }
  ],

  galleryEyebrow: 'Des mariages que nous avons accompagnés',
  galleryH2: 'Des mariages que nous avons accompagnés',
  galleryCaption:
    'Toutes les photos sont de vrais mariages, publiées avec le consentement des mariés.',
  galleryPlaceholderNote:
    'Galerie à remplacer par de vraies photos fournies par le client.',

  faqEyebrow: 'Questions',
  faqH2Pre: 'Les questions',
  faqH2Accent: 'que vous nous posez',
  faqs: [
    {
      q: 'Combien de temps à l’avance faut-il réserver ?',
      a: 'Idéalement 4–6 mois avant pour garantir la voiture ancienne choisie. Pour la seule navette invités, 2 mois suffisent. En haute saison (mai-septembre) nous recommandons une réservation 6 mois ou plus à l’avance.'
    },
    {
      q: 'Les décorations de la voiture sont-elles incluses ?',
      a: 'Le nœud/la cocarde standard, oui. Pour des décorations florales personnalisées, nous nous coordonnons avec votre fleuriste ou vous suggérons quelqu’un de confiance. Coût à part.'
    },
    {
      q: 'Quelle distance couvrons-nous dans le service mariage ?',
      a: 'Toute la Sicile orientale. Pour des cérémonies dans des zones plus éloignées (Palerme, Trapani) un devis dédié est nécessaire.'
    },
    {
      q: 'Pouvons-nous avoir plusieurs voitures anciennes en même temps ?',
      a: 'Oui, jusqu’à 6 — nous avons les 6 disponibles en parallèle si aucun autre événement n’est prévu le même jour. À vérifier lors du devis.'
    },
    {
      q: 'Gestion des imprévus le jour du mariage ?',
      a: 'Chaque chauffeur dispose d’un véhicule de secours joignable en 30 minutes. Les voitures anciennes ont un remplacement moderne prêt en cas (rare) de problème mécanique de dernière minute.'
    },
    {
      q: 'Voiture blanche ou en couleur ?',
      a: 'Trois des 6 voitures sont blanches, les autres conservent leur couleur d’origine (rouge, bleu, crème). On choisit selon le style du mariage.'
    }
  ],

  formEyebrow: 'Devis mariage',
  formH2Pre: 'Recevez un devis',
  formH2Accent: 'sous 24h',
  formSubhead:
    'Sept informations pour construire le devis. Nous vous répondons avec un plan dimensionné sous 24 heures.',
  formFields: {
    dateLabel: 'Date de l’événement',
    datePlaceholder: 'jj/mm/aaaa',
    ceremonyLabel: 'Lieu de la cérémonie',
    ceremonyPlaceholder: 'Église / villa / plage, ville',
    receptionLabel: 'Lieu de la réception',
    receptionPlaceholder: 'Villa, domaine, restaurant',
    carsCountLabel: 'Nombre de voitures anciennes nécessaires',
    carsCountOption1: '1 voiture',
    carsCountOption2: '2 voitures',
    carsCountOption3: '3 ou plus',
    guestsLabel: 'Nombre d’invités à transporter',
    guestsPlaceholder: 'Ex. 15 invités via l’aéroport',
    notesLabel: 'Notes spéciales / besoins particuliers',
    notesPlaceholder: 'Décorations, horaires, transfert de nuit…',
    nameLabel: 'Nom',
    namePlaceholder: 'Marié(e) ou wedding planner',
    phoneLabel: 'Téléphone',
    phonePlaceholder: '+33 …',
    emailLabel: 'E-mail',
    emailPlaceholder: 'votre@email.fr',
    submit: 'Recevez un devis sous 24h',
    submitting: 'Envoi',
    submitNote:
      'Demande reçue. Nous vous contactons sous 24h avec le devis personnalisé.',
    successTitle: 'Demande reçue.',
    successBody:
      'Nous vous contactons sous 24h avec le devis personnalisé. Pour toute urgence, écrivez-nous directement sur WhatsApp.',
    errorRequired: 'Vérifiez les champs obligatoires et réessayez.',
    errorSend: 'Échec de l’envoi. Réessayez ou écrivez-nous sur WhatsApp.'
  },

  ctaEyebrow: 'Vous préférez écrire directement ?',
  ctaH2: 'Parlons-en sur WhatsApp.',
  ctaSubhead:
    'Si vous avez une date et quelques invités en tête, écrivez-nous : première réponse sous une heure.'
};

const WEDDING: Record<Locale, WeddingContent> = {
  it: WEDDING_IT,
  en: WEDDING_EN,
  fr: WEDDING_FR
};

export function getWedding(locale: Locale): WeddingContent {
  return WEDDING[locale] ?? WEDDING.it;
}
