// ============================================================
// Sicily Driver Siracusa — Partner page content
// Pagina nuova additive editoriale. Tutto [NEW] da Brief/COPY.md §10.
// Non SEO target — prova sociale.
// ============================================================

import type {Locale} from './cities';

export type Partner = {
  eyebrow: string;
  name: string;
  body: string;
  whereYouFindThem: string;
  tourHref:
    | '/tour/isola-delle-correnti'
    | '/tour/silent-sailing'
    | '/tour/etna-premium';
  tourName: string;
  image: string;
};

export type PartnerContent = {
  metaTitle: string;
  metaDescription: string;

  heroImage: string;
  heroEyebrow: string;
  h1Pre: string;
  h1Accent: string;
  heroSubhead: string;

  partners: Partner[];

  fifthSlotIntro: string;

  ctaEyebrow: string;
  ctaH2Pre: string;
  ctaH2Accent: string;
  ctaBody: string;
  ctaButton: string;
};

// Placeholder images — TODO replace with foto reali partner
const IMG_PURAVIDA =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=70&auto=format&fm=webp';
const IMG_BURGIO =
  'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=1200&q=70&auto=format&fm=webp';
const IMG_BENANTI =
  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=70&auto=format&fm=webp';
const IMG_PALMERI =
  'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&q=70&auto=format&fm=webp';
const HERO_PARTNER =
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=70&auto=format&fm=webp';

// ============================================================
// IT
// ============================================================

const PARTNER_IT: PartnerContent = {
  metaTitle:
    'Partner Selezionati Sicily Driver — Pura Vida, Burgio, Benanti, Palmeri',
  metaDescription:
    'I partner curati di Sicily Driver Siracusa: Pura Vida Beach Club, Fratelli Burgio, Cantina Benanti, Cantina Palmeri. Non sponsor, posti che frequentiamo da anni.',

  heroImage: HERO_PARTNER,
  heroEyebrow: 'Partner',
  h1Pre: 'Chi scegliamo',
  h1Accent: 'per te',
  heroSubhead:
    'Non sono sponsor. Sono i posti e le persone che noi stessi portiamo nei nostri tour perché crediamo siano i migliori.',

  partners: [
    {
      eyebrow: 'Portopalo di Capo Passero · Beach club',
      name: 'Pura Vida Beach Club',
      body: 'Pura Vida è il beach club che guarda l’Isola delle Correnti dal lato giusto — quello dove al tramonto i due mari si incontrano. Cucina siciliana servita in spiaggia, lettini in legno chiaro, accesso al mare basso e cristallino. Lavoriamo con loro perché sanno cosa significa lasciare in pace un cliente che vuole solo guardare il mare per tre ore.',
      whereYouFindThem: 'Dove li trovi nei nostri tour',
      tourHref: '/tour/isola-delle-correnti',
      tourName: 'Isola delle Correnti',
      image: IMG_PURAVIDA
    },
    {
      eyebrow: 'Ortigia · Gastronomia siciliana',
      name: 'Fratelli Burgio',
      body: 'La gastronomia Fratelli Burgio in Ortigia è una di quelle botteghe che, varcata la porta, ti porta dentro un manuale di prodotti siciliani che non sapevi esistessero. Salumi locali, formaggi di pastori vicino Ragusa, olive curate in cinque modi diversi, pane fresco. I taglieri che servono a bordo del Silent Sailing nascono qui. Lavoriamo con loro perché ogni prodotto ha un nome di produttore dietro, non un’etichetta industriale.',
      whereYouFindThem: 'Dove li trovi nei nostri tour',
      tourHref: '/tour/silent-sailing',
      tourName: 'Silent Sailing',
      image: IMG_BURGIO
    },
    {
      eyebrow: 'Etna · Cantina storica',
      name: 'Cantina Benanti',
      body: 'Cantina Benanti è una delle voci storiche della rinascita dell’Etna come terroir di alta qualità. Producono dal versante sud-est, lavorando Nerello Mascalese e Carricante su suoli vulcanici tra i 600 e i 900 metri. La degustazione che proponiamo nell’Etna Premium Escape parte sempre dai loro bianchi e finisce con un rosso che racconta vent’anni di affinamento siciliano.',
      whereYouFindThem: 'Dove li trovi nei nostri tour',
      tourHref: '/tour/etna-premium',
      tourName: 'Etna Premium Escape',
      image: IMG_BENANTI
    },
    {
      eyebrow: 'Etna · Vini di territorio',
      name: 'Cantina Palmeri',
      body: 'Cantina Palmeri sta sul versante sud-orientale dell’Etna, meno turistica delle storiche del nord ma con una qualità che cresce di anno in anno. Una piccola realtà di famiglia, vini che parlano di una zona precisa e di un modo preciso di vinificare. Quando proponiamo l’Etna Premium con loro, è perché ci interessa farti conoscere l’altra Etna, quella meno conosciuta.',
      whereYouFindThem: 'Dove li trovi nei nostri tour',
      tourHref: '/tour/etna-premium',
      tourName: 'Etna Premium Escape',
      image: IMG_PALMERI
    }
  ],

  fifthSlotIntro:
    'Stiamo selezionando un quinto partner: una pasticceria di Modica per i tour del barocco. Aggiornamento previsto entro fine 2026.',

  ctaEyebrow: 'Lavoriamo insieme?',
  ctaH2Pre: 'Sei un’attività siciliana e',
  ctaH2Accent: 'vorresti collaborare?',
  ctaBody:
    'Cerchiamo partner che condividano la nostra idea: meno marketing, più sostanza. Se gestisci un’attività in Sicilia orientale (gastronomia, vino, hospitality, esperienze) e pensi che valga la pena conoscerci, scrivici.',
  ctaButton: 'Scrivi a info@ncctaxisiracusa.com'
};

// ============================================================
// EN
// ============================================================

const PARTNER_EN: PartnerContent = {
  metaTitle:
    'Selected Partners — Sicily Driver Curates Pura Vida, Burgio, Benanti, Palmeri',
  metaDescription:
    'Sicily Driver Syracuse curated partners: Pura Vida Beach Club, Fratelli Burgio, Cantina Benanti, Cantina Palmeri. Not sponsors — places we’ve known for years.',

  heroImage: HERO_PARTNER,
  heroEyebrow: 'Partners',
  h1Pre: 'Who we choose',
  h1Accent: 'for you',
  heroSubhead:
    'Not sponsors. The places and people we ourselves take into our tours because we believe they’re the best.',

  partners: [
    {
      eyebrow: 'Portopalo di Capo Passero · Beach club',
      name: 'Pura Vida Beach Club',
      body: 'Pura Vida is the beach club that faces Isola delle Correnti from the right side — the one where at sunset the two seas meet. Sicilian cuisine served on the beach, light wooden loungers, access to shallow crystalline water. We work with them because they know what it means to leave a guest in peace who just wants to watch the sea for three hours.',
      whereYouFindThem: 'Where you find them in our tours',
      tourHref: '/tour/isola-delle-correnti',
      tourName: 'Isola delle Correnti',
      image: IMG_PURAVIDA
    },
    {
      eyebrow: 'Ortigia · Sicilian gourmet shop',
      name: 'Fratelli Burgio',
      body: 'The Fratelli Burgio gastronomy in Ortigia is one of those shops that, once you cross the door, takes you inside a manual of Sicilian products you didn’t know existed. Local cured meats, cheeses from shepherds near Ragusa, olives cured in five different ways, fresh bread. The platters served on board the Silent Sailing are born here. We work with them because every product has a producer’s name behind it, not an industrial label.',
      whereYouFindThem: 'Where you find them in our tours',
      tourHref: '/tour/silent-sailing',
      tourName: 'Silent Sailing',
      image: IMG_BURGIO
    },
    {
      eyebrow: 'Etna · Historic winery',
      name: 'Cantina Benanti',
      body: 'Cantina Benanti is one of the historic voices in the renaissance of Etna as a high-quality terroir. They produce on the south-east side, working Nerello Mascalese and Carricante on volcanic soils between 600 and 900 meters. The tasting we propose in the Etna Premium Escape always starts with their whites and ends with a red that tells twenty years of Sicilian aging.',
      whereYouFindThem: 'Where you find them in our tours',
      tourHref: '/tour/etna-premium',
      tourName: 'Etna Premium Escape',
      image: IMG_BENANTI
    },
    {
      eyebrow: 'Etna · Terroir wines',
      name: 'Cantina Palmeri',
      body: 'Cantina Palmeri sits on the south-eastern slope of Etna, less touristic than the historic ones to the north but with quality that grows year by year. A small family operation, wines that speak of a precise area and a precise way of winemaking. When we propose Etna Premium with them, it’s because we want to introduce you to the other Etna, the lesser-known one.',
      whereYouFindThem: 'Where you find them in our tours',
      tourHref: '/tour/etna-premium',
      tourName: 'Etna Premium Escape',
      image: IMG_PALMERI
    }
  ],

  fifthSlotIntro:
    'We’re selecting a fifth partner: a pasticceria in Modica for Baroque tours. Update expected by end of 2026.',

  ctaEyebrow: 'Work together?',
  ctaH2Pre: 'Are you a Sicilian business',
  ctaH2Accent: 'looking to collaborate?',
  ctaBody:
    'We look for partners who share our idea: less marketing, more substance. If you run a business in eastern Sicily (gastronomy, wine, hospitality, experiences) and think it’s worth getting to know us, write to us.',
  ctaButton: 'Email info@ncctaxisiracusa.com'
};

const PARTNERS: Record<Locale, PartnerContent> = {
  it: PARTNER_IT,
  en: PARTNER_EN
};

export function getPartners(locale: Locale): PartnerContent {
  return PARTNERS[locale];
}
