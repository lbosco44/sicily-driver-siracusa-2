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
    | '/tour/etna-premium'
    | '/tour/dolce-vita-siracusa';
  tourName: string;
  // Logo monocromo -ink + dimensioni intrinseche (no CLS).
  logo: string;
  logoW: number;
  logoH: number;
};

// Loghi mostrati nel "muro delle eccellenze" in hero (tutti, anche quelli
// senza scheda editoriale dedicata).
export type WallLogo = {name: string; image: string; w: number; h: number};

export type PartnerContent = {
  metaTitle: string;
  metaDescription: string;

  heroEyebrow: string;
  h1Pre: string;
  h1Accent: string;
  heroSubhead: string;

  wallLogos: WallLogo[];

  partners: Partner[];

  fifthSlotIntro: string;

  ctaEyebrow: string;
  ctaH2Pre: string;
  ctaH2Accent: string;
  ctaBody: string;
  ctaButton: string;
};

// Muro loghi hero — tutti i partner (versioni -ink monocrome), dimensioni
// intrinseche per evitare CLS. Condiviso IT/EN (i loghi non hanno lingua).
const WALL_LOGOS: WallLogo[] = [
  {name: 'Pura Vida', image: '/images/loghi-partner/pura-vita-ink.svg', w: 202, h: 239},
  {name: 'Fratelli Burgio', image: '/images/loghi-partner/fratelli-burgio-ink.png', w: 2734, h: 634},
  {name: 'Cantine Benanti', image: '/images/loghi-partner/cantine-benanti-ink.png', w: 200, h: 202},
  {name: 'Cantina Palmeri', image: '/images/loghi-partner/palmeri2-ink.png', w: 1500, h: 687},
  {name: 'Gambino', image: '/images/loghi-partner/gambino-ink.png', w: 460, h: 140},
  {name: 'Orty Suite', image: '/images/loghi-partner/ortysuite-ink.png', w: 655, h: 316},
  {name: 'Bam Bar', image: '/images/loghi-partner/bambar-ink.png', w: 1590, h: 415}
];

// ============================================================
// IT
// ============================================================

const PARTNER_IT: PartnerContent = {
  metaTitle:
    'Partner Selezionati Sicily Driver — Pura Vida, Burgio, Benanti, Palmeri',
  metaDescription:
    'I partner curati di Sicily Driver Siracusa: Pura Vida Beach Club, Fratelli Burgio, Cantina Benanti, Cantina Palmeri. Non sponsor, posti che frequentiamo da anni.',

  heroEyebrow: 'Partner',
  h1Pre: 'Le eccellenze che fanno parte del',
  h1Accent: 'nostro percorso.',
  heroSubhead:
    'Non sono sponsor. Sono i posti e le persone che noi stessi portiamo nei nostri tour perché crediamo siano i migliori.',

  wallLogos: WALL_LOGOS,

  partners: [
    {
      eyebrow: 'Portopalo di Capo Passero · Beach club',
      name: 'Pura Vida Beach Club',
      body: 'Pura Vida è il beach club che guarda l’Isola delle Correnti dal lato giusto — quello dove al tramonto i due mari si incontrano. Cucina siciliana servita in spiaggia, lettini in legno chiaro, accesso al mare basso e cristallino. Lavoriamo con loro perché sanno cosa significa lasciare in pace un cliente che vuole solo guardare il mare per tre ore.',
      whereYouFindThem: 'Dove li trovi nei nostri tour',
      tourHref: '/tour/isola-delle-correnti',
      tourName: 'Isola delle Correnti',
      logo: '/images/loghi-partner/pura-vita-ink.svg',
      logoW: 202,
      logoH: 239
    },
    {
      eyebrow: 'Ortigia · Gastronomia siciliana',
      name: 'Fratelli Burgio',
      body: 'La gastronomia Fratelli Burgio in Ortigia è una di quelle botteghe che, varcata la porta, ti porta dentro un manuale di prodotti siciliani che non sapevi esistessero. Salumi locali, formaggi di pastori vicino Ragusa, olive curate in cinque modi diversi, pane fresco. I taglieri che servono a bordo del Silent Sailing nascono qui. Lavoriamo con loro perché ogni prodotto ha un nome di produttore dietro, non un’etichetta industriale.',
      whereYouFindThem: 'Dove li trovi nei nostri tour',
      tourHref: '/tour/silent-sailing',
      tourName: 'Silent Sailing',
      logo: '/images/loghi-partner/fratelli-burgio-ink.png',
      logoW: 2734,
      logoH: 634
    },
    {
      eyebrow: 'Etna · Cantina storica',
      name: 'Cantina Benanti',
      body: 'Cantina Benanti è una delle voci storiche della rinascita dell’Etna come terroir di alta qualità. Producono dal versante sud-est, lavorando Nerello Mascalese e Carricante su suoli vulcanici tra i 600 e i 900 metri. La degustazione che proponiamo nell’Etna Premium Escape parte sempre dai loro bianchi e finisce con un rosso che racconta vent’anni di affinamento siciliano.',
      whereYouFindThem: 'Dove li trovi nei nostri tour',
      tourHref: '/tour/etna-premium',
      tourName: 'Etna Premium Escape',
      logo: '/images/loghi-partner/cantine-benanti-ink.png',
      logoW: 200,
      logoH: 202
    },
    {
      eyebrow: 'Etna · Vini di territorio',
      name: 'Cantina Palmeri',
      body: 'Cantina Palmeri sta sul versante sud-orientale dell’Etna, meno turistica delle storiche del nord ma con una qualità che cresce di anno in anno. Una piccola realtà di famiglia, vini che parlano di una zona precisa e di un modo preciso di vinificare. Quando proponiamo l’Etna Premium con loro, è perché ci interessa farti conoscere l’altra Etna, quella meno conosciuta.',
      whereYouFindThem: 'Dove li trovi nei nostri tour',
      tourHref: '/tour/etna-premium',
      tourName: 'Etna Premium Escape',
      logo: '/images/loghi-partner/palmeri2-ink.png',
      logoW: 1500,
      logoH: 687
    },
    {
      eyebrow: 'Etna nord · Cantina di famiglia',
      name: 'Gambino Vini',
      body: 'Gambino sta sul versante nord dell’Etna, a Linguaglossa, con i vigneti terrazzati di contrada Petto Dragone intorno agli 800 metri. È una cantina di famiglia che lavora i vitigni dell’isola come si deve: Nerello Mascalese e Nerello Cappuccio per i rossi, Carricante e Catarratto per i bianchi, su suoli vulcanici che danno vini nervosi e minerali. La sala di degustazione guarda il vulcano da un lato e il mare dall’altro. Li portiamo nell’Etna Premium perché qui il vino si beve con la montagna davanti, non in una sala anonima.',
      whereYouFindThem: 'Dove li trovi nei nostri tour',
      tourHref: '/tour/etna-premium',
      tourName: 'Etna Premium Escape',
      logo: '/images/loghi-partner/gambino-ink.png',
      logoW: 460,
      logoH: 140
    },
    {
      eyebrow: 'Taormina · Granita siciliana',
      name: 'Bam Bar',
      body: 'Il Bam Bar, in via di Giovanni a Taormina, è la tappa per la vera granita siciliana — quella servita con la brioche col tuppo, da mangiare seduti tra le decorazioni dipinte a mano. Mandorla, gelso, limone, pistacchio: scegliere è difficile, e infatti in molti ne prendono due gusti. È un posto semplice e sempre pieno, di turisti e di gente di Taormina allo stesso modo. Lo inseriamo nei nostri itinerari perché una mattina a Taormina senza granita da Bam Bar è una mattina sprecata.',
      whereYouFindThem: 'Dove li trovi nei nostri tour',
      tourHref: '/tour/dolce-vita-siracusa',
      tourName: 'Ortigia + Taormina',
      logo: '/images/loghi-partner/bambar-ink.png',
      logoW: 1590,
      logoH: 415
    },
    {
      eyebrow: 'Siracusa · Soggiorno di design',
      name: 'Orty Suite',
      body: 'Orty Suite è un loft di design nella Borgata di Siracusa, a pochi passi da Ortigia ma lontano dal caos. Settantaquattro metri quadri, soffitti alti più di quattro, arredi fatti a mano da artigiani del posto: il tipo di posto dove torni volentieri dopo una giornata in giro. Cortile privato, tutto a portata di passeggiata — dal Teatro Greco al museo Paolo Orsi. Lo consigliamo perché chi ci sceglie per muoversi merita anche un posto vero dove fermarsi, non una camera qualsiasi.',
      whereYouFindThem: 'L’esperienza a due passi',
      tourHref: '/tour/silent-sailing',
      tourName: 'Silent Sailing',
      logo: '/images/loghi-partner/ortysuite-ink.png',
      logoW: 655,
      logoH: 316
    }
  ],

  fifthSlotIntro:
    'Stiamo selezionando un nuovo partner: una pasticceria di Modica per i tour del barocco. Aggiornamento previsto entro fine 2026.',

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

  heroEyebrow: 'Partners',
  h1Pre: 'The finest names along',
  h1Accent: 'our journey.',
  heroSubhead:
    'Not sponsors. The places and people we ourselves take into our tours because we believe they’re the best.',

  wallLogos: WALL_LOGOS,

  partners: [
    {
      eyebrow: 'Portopalo di Capo Passero · Beach club',
      name: 'Pura Vida Beach Club',
      body: 'Pura Vida is the beach club that faces Isola delle Correnti from the right side — the one where at sunset the two seas meet. Sicilian cuisine served on the beach, light wooden loungers, access to shallow crystalline water. We work with them because they know what it means to leave a guest in peace who just wants to watch the sea for three hours.',
      whereYouFindThem: 'Where you find them in our tours',
      tourHref: '/tour/isola-delle-correnti',
      tourName: 'Isola delle Correnti',
      logo: '/images/loghi-partner/pura-vita-ink.svg',
      logoW: 202,
      logoH: 239
    },
    {
      eyebrow: 'Ortigia · Sicilian gourmet shop',
      name: 'Fratelli Burgio',
      body: 'The Fratelli Burgio gastronomy in Ortigia is one of those shops that, once you cross the door, takes you inside a manual of Sicilian products you didn’t know existed. Local cured meats, cheeses from shepherds near Ragusa, olives cured in five different ways, fresh bread. The platters served on board the Silent Sailing are born here. We work with them because every product has a producer’s name behind it, not an industrial label.',
      whereYouFindThem: 'Where you find them in our tours',
      tourHref: '/tour/silent-sailing',
      tourName: 'Silent Sailing',
      logo: '/images/loghi-partner/fratelli-burgio-ink.png',
      logoW: 2734,
      logoH: 634
    },
    {
      eyebrow: 'Etna · Historic winery',
      name: 'Cantina Benanti',
      body: 'Cantina Benanti is one of the historic voices in the renaissance of Etna as a high-quality terroir. They produce on the south-east side, working Nerello Mascalese and Carricante on volcanic soils between 600 and 900 meters. The tasting we propose in the Etna Premium Escape always starts with their whites and ends with a red that tells twenty years of Sicilian aging.',
      whereYouFindThem: 'Where you find them in our tours',
      tourHref: '/tour/etna-premium',
      tourName: 'Etna Premium Escape',
      logo: '/images/loghi-partner/cantine-benanti-ink.png',
      logoW: 200,
      logoH: 202
    },
    {
      eyebrow: 'Etna · Terroir wines',
      name: 'Cantina Palmeri',
      body: 'Cantina Palmeri sits on the south-eastern slope of Etna, less touristic than the historic ones to the north but with quality that grows year by year. A small family operation, wines that speak of a precise area and a precise way of winemaking. When we propose Etna Premium with them, it’s because we want to introduce you to the other Etna, the lesser-known one.',
      whereYouFindThem: 'Where you find them in our tours',
      tourHref: '/tour/etna-premium',
      tourName: 'Etna Premium Escape',
      logo: '/images/loghi-partner/palmeri2-ink.png',
      logoW: 1500,
      logoH: 687
    },
    {
      eyebrow: 'North Etna · Family winery',
      name: 'Gambino Vini',
      body: 'Gambino sits on the northern slope of Etna, in Linguaglossa, with the terraced vineyards of contrada Petto Dragone at around 800 meters. It’s a family winery that works the island’s grapes properly: Nerello Mascalese and Nerello Cappuccio for the reds, Carricante and Catarratto for the whites, on volcanic soils that give nervy, mineral wines. The tasting room faces the volcano on one side and the sea on the other. We take you here on the Etna Premium because the wine is drunk with the mountain in front of you, not in an anonymous room.',
      whereYouFindThem: 'Where you find them in our tours',
      tourHref: '/tour/etna-premium',
      tourName: 'Etna Premium Escape',
      logo: '/images/loghi-partner/gambino-ink.png',
      logoW: 460,
      logoH: 140
    },
    {
      eyebrow: 'Taormina · Sicilian granita',
      name: 'Bam Bar',
      body: 'Bam Bar, on Via di Giovanni in Taormina, is the stop for real Sicilian granita — the one served with brioche col tuppo, eaten sitting among the hand-painted decorations. Almond, mulberry, lemon, pistachio: choosing is hard, which is why many order two flavors. It’s a simple place, always full, of tourists and Taormina locals alike. We put it in our itineraries because a morning in Taormina without granita at Bam Bar is a wasted morning.',
      whereYouFindThem: 'Where you find them in our tours',
      tourHref: '/tour/dolce-vita-siracusa',
      tourName: 'Ortigia + Taormina',
      logo: '/images/loghi-partner/bambar-ink.png',
      logoW: 1590,
      logoH: 415
    },
    {
      eyebrow: 'Syracuse · Design stay',
      name: 'Orty Suite',
      body: 'Orty Suite is a design loft in the Borgata of Syracuse, a few steps from Ortigia but away from the chaos. Seventy-four square meters, ceilings over four meters high, furnishings handmade by local artisans: the kind of place you’re happy to come back to after a day out. A private courtyard, everything within walking distance — from the Greek Theatre to the Paolo Orsi museum. We recommend it because those who choose us to get around also deserve a real place to stay, not just any room.',
      whereYouFindThem: 'The experience a step away',
      tourHref: '/tour/silent-sailing',
      tourName: 'Silent Sailing',
      logo: '/images/loghi-partner/ortysuite-ink.png',
      logoW: 655,
      logoH: 316
    }
  ],

  fifthSlotIntro:
    'We’re selecting a new partner: a pasticceria in Modica for Baroque tours. Update expected by end of 2026.',

  ctaEyebrow: 'Work together?',
  ctaH2Pre: 'Are you a Sicilian business',
  ctaH2Accent: 'looking to collaborate?',
  ctaBody:
    'We look for partners who share our idea: less marketing, more substance. If you run a business in eastern Sicily (gastronomy, wine, hospitality, experiences) and think it’s worth getting to know us, write to us.',
  ctaButton: 'Email info@ncctaxisiracusa.com'
};

// ============================================================
// FR
// ============================================================

const PARTNER_FR: PartnerContent = {
  metaTitle:
    'Partenaires Sélectionnés — Sicily Driver : Pura Vida, Burgio, Benanti, Palmeri',
  metaDescription:
    'Les partenaires sélectionnés de Sicily Driver Siracusa : Pura Vida Beach Club, Fratelli Burgio, Cantina Benanti, Cantina Palmeri. Pas des sponsors, des lieux que nous fréquentons depuis des années.',

  heroEyebrow: 'Partenaires',
  h1Pre: 'Les excellences qui font partie de',
  h1Accent: 'notre parcours.',
  heroSubhead:
    'Ce ne sont pas des sponsors. Ce sont les lieux et les personnes que nous emmenons nous-mêmes dans nos tours parce que nous les croyons les meilleurs.',

  wallLogos: WALL_LOGOS,

  partners: [
    {
      eyebrow: 'Portopalo di Capo Passero · Beach club',
      name: 'Pura Vida Beach Club',
      body: 'Pura Vida est le beach club qui regarde l’Isola delle Correnti du bon côté — celui où, au coucher du soleil, les deux mers se rencontrent. Cuisine sicilienne servie sur la plage, transats en bois clair, accès à une mer basse et cristalline. Nous travaillons avec eux parce qu’ils savent ce que signifie laisser en paix un client qui veut simplement contempler la mer pendant trois heures.',
      whereYouFindThem: 'Où les retrouver dans nos tours',
      tourHref: '/tour/isola-delle-correnti',
      tourName: 'Isola delle Correnti',
      logo: '/images/loghi-partner/pura-vita-ink.svg',
      logoW: 202,
      logoH: 239
    },
    {
      eyebrow: 'Ortigia · Épicerie fine sicilienne',
      name: 'Fratelli Burgio',
      body: 'L’épicerie Fratelli Burgio à Ortigia est une de ces boutiques qui, une fois la porte franchie, vous plonge dans un catalogue de produits siciliens dont vous ignoriez l’existence. Charcuteries locales, fromages de bergers des environs de Ragusa, olives préparées de cinq façons différentes, pain frais. Les planches servies à bord du Silent Sailing naissent ici. Nous travaillons avec eux parce que chaque produit porte le nom d’un producteur, pas une étiquette industrielle.',
      whereYouFindThem: 'Où les retrouver dans nos tours',
      tourHref: '/tour/silent-sailing',
      tourName: 'Silent Sailing',
      logo: '/images/loghi-partner/fratelli-burgio-ink.png',
      logoW: 2734,
      logoH: 634
    },
    {
      eyebrow: 'Etna · Domaine historique',
      name: 'Cantina Benanti',
      body: 'Cantina Benanti est l’une des voix historiques de la renaissance de l’Etna comme terroir de haute qualité. Ils produisent sur le versant sud-est, travaillant le Nerello Mascalese et le Carricante sur des sols volcaniques entre 600 et 900 mètres. La dégustation que nous proposons dans l’Etna Premium Escape commence toujours par leurs blancs et se termine par un rouge qui raconte vingt ans d’élevage sicilien.',
      whereYouFindThem: 'Où les retrouver dans nos tours',
      tourHref: '/tour/etna-premium',
      tourName: 'Etna Premium Escape',
      logo: '/images/loghi-partner/cantine-benanti-ink.png',
      logoW: 200,
      logoH: 202
    },
    {
      eyebrow: 'Etna · Vins de terroir',
      name: 'Cantina Palmeri',
      body: 'Cantina Palmeri se trouve sur le versant sud-est de l’Etna, moins touristique que les domaines historiques du nord mais avec une qualité qui grandit d’année en année. Une petite affaire familiale, des vins qui parlent d’une zone précise et d’une manière précise de vinifier. Quand nous proposons l’Etna Premium avec eux, c’est parce qu’il nous tient à cœur de vous faire découvrir l’autre Etna, celle que l’on connaît moins.',
      whereYouFindThem: 'Où les retrouver dans nos tours',
      tourHref: '/tour/etna-premium',
      tourName: 'Etna Premium Escape',
      logo: '/images/loghi-partner/palmeri2-ink.png',
      logoW: 1500,
      logoH: 687
    },
    {
      eyebrow: 'Etna nord · Domaine familial',
      name: 'Gambino Vini',
      body: 'Gambino se trouve sur le versant nord de l’Etna, à Linguaglossa, avec les vignes en terrasses de la contrada Petto Dragone autour de 800 mètres. C’est un domaine familial qui travaille les cépages de l’île comme il se doit : Nerello Mascalese et Nerello Cappuccio pour les rouges, Carricante et Catarratto pour les blancs, sur des sols volcaniques qui donnent des vins nerveux et minéraux. La salle de dégustation regarde le volcan d’un côté et la mer de l’autre. Nous vous emmenons ici dans l’Etna Premium parce qu’ici le vin se boit face à la montagne, pas dans une salle anonyme.',
      whereYouFindThem: 'Où les retrouver dans nos tours',
      tourHref: '/tour/etna-premium',
      tourName: 'Etna Premium Escape',
      logo: '/images/loghi-partner/gambino-ink.png',
      logoW: 460,
      logoH: 140
    },
    {
      eyebrow: 'Taormina · Granité sicilien',
      name: 'Bam Bar',
      body: 'Le Bam Bar, via di Giovanni à Taormina, est l’étape du vrai granité sicilien — celui servi avec la brioche col tuppo, à déguster assis parmi les décorations peintes à la main. Amande, mûre, citron, pistache : choisir est difficile, et de fait beaucoup en prennent deux parfums. C’est un endroit simple et toujours plein, de touristes comme de Taorminais. Nous l’inscrivons dans nos itinéraires parce qu’une matinée à Taormina sans granité chez Bam Bar est une matinée gâchée.',
      whereYouFindThem: 'Où les retrouver dans nos tours',
      tourHref: '/tour/dolce-vita-siracusa',
      tourName: 'Ortigia + Taormina',
      logo: '/images/loghi-partner/bambar-ink.png',
      logoW: 1590,
      logoH: 415
    },
    {
      eyebrow: 'Syracuse · Séjour design',
      name: 'Orty Suite',
      body: 'Orty Suite est un loft design dans la Borgata de Syracuse, à quelques pas d’Ortigia mais loin du tumulte. Soixante-quatorze mètres carrés, des plafonds de plus de quatre mètres, un mobilier fait main par des artisans du coin : le genre d’endroit où l’on revient volontiers après une journée en vadrouille. Cour privée, tout à distance de marche — du Théâtre grec au musée Paolo Orsi. Nous le recommandons parce que celui qui nous choisit pour se déplacer mérite aussi un vrai lieu où s’arrêter, pas une chambre quelconque.',
      whereYouFindThem: 'L’expérience à deux pas',
      tourHref: '/tour/silent-sailing',
      tourName: 'Silent Sailing',
      logo: '/images/loghi-partner/ortysuite-ink.png',
      logoW: 655,
      logoH: 316
    }
  ],

  fifthSlotIntro:
    'Nous sommes en train de sélectionner un nouveau partenaire : une pâtisserie de Modica pour les tours du baroque. Mise à jour prévue avant la fin 2026.',

  ctaEyebrow: 'Travaillons ensemble ?',
  ctaH2Pre: 'Vous êtes une entreprise sicilienne et',
  ctaH2Accent: 'vous aimeriez collaborer ?',
  ctaBody:
    'Nous cherchons des partenaires qui partagent notre idée : moins de marketing, plus de substance. Si vous dirigez une activité en Sicile orientale (gastronomie, vin, hôtellerie, expériences) et que vous pensez que cela vaut la peine de nous connaître, écrivez-nous.',
  ctaButton: 'Écrivez à info@ncctaxisiracusa.com'
};

const PARTNERS: Record<Locale, PartnerContent> = {
  it: PARTNER_IT,
  en: PARTNER_EN,
  fr: PARTNER_FR
};

export function getPartners(locale: Locale): PartnerContent {
  return PARTNERS[locale] ?? PARTNERS.it;
}
