import type {MetadataRoute} from 'next';

const BASE = 'https://ncctaxisiracusa.com';

type Entry = {
  path: {it: string; en: string; fr: string};
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
};

// Mapping IT URL → EN → FR per priorità. Riflette Brief/SITEMAP.md sezione E.
// Stratificazione GSC: priorità riflettono Categoria 1 (preserve forte) > 2 (refresh) > 3 (placeholder).
const PAGES: Entry[] = [
  {path: {it: '', en: '', fr: ''}, priority: 1.0, changeFrequency: 'monthly'},
  // Categoria 1 — preserve forte
  {path: {it: 'ncc-noto', en: 'driver-noto', fr: 'chauffeur-noto'}, priority: 0.9, changeFrequency: 'monthly'},
  {path: {it: 'tour-barocco', en: 'baroque-tour', fr: 'tour-baroque'}, priority: 0.9, changeFrequency: 'monthly'},
  // Tour nuovi additivi — priorità alta
  {path: {it: 'tour/etna-premium', en: 'tour/etna-premium', fr: 'tour/etna-premium'}, priority: 0.9, changeFrequency: 'monthly'},
  {path: {it: 'wedding', en: 'weddings', fr: 'mariages'}, priority: 0.9, changeFrequency: 'monthly'},
  // Categoria 2 — refresh metadata
  {path: {it: 'ncc-catania', en: 'driver-catania', fr: 'chauffeur-catane'}, priority: 0.8, changeFrequency: 'monthly'},
  {path: {it: 'tour-sicilia', en: 'sicily-tours', fr: 'tours-sicile'}, priority: 0.8, changeFrequency: 'monthly'},
  {path: {it: 'transfer-aeroporti-porti-sicilia', en: 'sicily-airport-port-transfers', fr: 'transferts-aeroports-ports-sicile'}, priority: 0.8, changeFrequency: 'monthly'},
  // Pagine figlie SEO per singola tratta
  {path: {it: 'transfer-catania-siracusa', en: 'catania-syracuse-transfer', fr: 'transfert-catane-syracuse'}, priority: 0.7, changeFrequency: 'monthly'},
  {path: {it: 'transfer-catania-noto', en: 'catania-noto-transfer', fr: 'transfert-catane-noto'}, priority: 0.7, changeFrequency: 'monthly'},
  {path: {it: 'transfer-catania-taormina', en: 'catania-taormina-transfer', fr: 'transfert-catane-taormine'}, priority: 0.7, changeFrequency: 'monthly'},
  {path: {it: 'transfer-pozzallo-siracusa', en: 'pozzallo-syracuse-transfer', fr: 'transfert-pozzallo-syracuse'}, priority: 0.7, changeFrequency: 'monthly'},
  {path: {it: 'contatti', en: 'contact', fr: 'contact'}, priority: 0.8, changeFrequency: 'yearly'},
  // Tour nuovi additivi — priorità media
  {path: {it: 'tour/isola-delle-correnti', en: 'tour/isola-delle-correnti', fr: 'tour/isola-delle-correnti'}, priority: 0.8, changeFrequency: 'monthly'},
  {path: {it: 'tour/dolce-vita-siracusa', en: 'tour/dolce-vita-siracusa', fr: 'tour/dolce-vita-siracusa'}, priority: 0.8, changeFrequency: 'monthly'},
  {path: {it: 'tour/silent-sailing', en: 'tour/silent-sailing', fr: 'tour/silent-sailing'}, priority: 0.8, changeFrequency: 'monthly'},
  {path: {it: 'servizi', en: 'services', fr: 'services'}, priority: 0.8, changeFrequency: 'monthly'},
  // Bassa priorità editoriali / placeholder
  {path: {it: 'chi-siamo', en: 'about', fr: 'a-propos'}, priority: 0.6, changeFrequency: 'yearly'},
  {path: {it: 'partner', en: 'partners', fr: 'partenaires'}, priority: 0.6, changeFrequency: 'monthly'},
  // Categoria 3 — placeholder leggere
  {path: {it: 'ncc-taormina', en: 'driver-taormina', fr: 'chauffeur-taormine'}, priority: 0.4, changeFrequency: 'yearly'},
  {path: {it: 'ncc-ragusa', en: 'driver-ragusa', fr: 'chauffeur-raguse'}, priority: 0.4, changeFrequency: 'yearly'}
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PAGES.flatMap((page) => {
    const itUrl = page.path.it ? `${BASE}/${page.path.it}` : `${BASE}/`;
    const enUrl = page.path.en ? `${BASE}/en/${page.path.en}` : `${BASE}/en`;
    const frUrl = page.path.fr ? `${BASE}/fr/${page.path.fr}` : `${BASE}/fr`;

    const languages = {it: itUrl, en: enUrl, fr: frUrl, 'x-default': itUrl};

    return [itUrl, enUrl, frUrl].map((url) => ({
      url,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {languages}
    }));
  });
}
