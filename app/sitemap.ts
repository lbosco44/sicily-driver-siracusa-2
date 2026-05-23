import type {MetadataRoute} from 'next';

const BASE = 'https://ncctaxisiracusa.com';

type Entry = {
  path: {it: string; en: string};
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
};

// Mapping IT URL → EN URL per priorità. Riflette Brief/SITEMAP.md sezione E.
// Stratificazione GSC: priorità riflettono Categoria 1 (preserve forte) > 2 (refresh) > 3 (placeholder).
const PAGES: Entry[] = [
  {path: {it: '', en: ''}, priority: 1.0, changeFrequency: 'monthly'},
  // Categoria 1 — preserve forte
  {path: {it: 'ncc-noto', en: 'driver-noto'}, priority: 0.9, changeFrequency: 'monthly'},
  {path: {it: 'tour-barocco', en: 'baroque-tour'}, priority: 0.9, changeFrequency: 'monthly'},
  // Tour nuovi additivi — priorità alta
  {path: {it: 'tour/etna-premium', en: 'tour/etna-premium'}, priority: 0.9, changeFrequency: 'monthly'},
  {path: {it: 'wedding', en: 'weddings'}, priority: 0.9, changeFrequency: 'monthly'},
  // Categoria 2 — refresh metadata
  {path: {it: 'ncc-catania', en: 'driver-catania'}, priority: 0.8, changeFrequency: 'monthly'},
  {path: {it: 'tour-sicilia', en: 'sicily-tours'}, priority: 0.8, changeFrequency: 'monthly'},
  {path: {it: 'contatti', en: 'contact'}, priority: 0.8, changeFrequency: 'yearly'},
  // Tour nuovi additivi — priorità media
  {path: {it: 'tour/isola-delle-correnti', en: 'tour/isola-delle-correnti'}, priority: 0.8, changeFrequency: 'monthly'},
  {path: {it: 'tour/dolce-vita-siracusa', en: 'tour/dolce-vita-siracusa'}, priority: 0.8, changeFrequency: 'monthly'},
  {path: {it: 'tour/silent-sailing', en: 'tour/silent-sailing'}, priority: 0.8, changeFrequency: 'monthly'},
  {path: {it: 'servizi', en: 'services'}, priority: 0.8, changeFrequency: 'monthly'},
  // Bassa priorità editoriali / placeholder
  {path: {it: 'chi-siamo', en: 'about'}, priority: 0.6, changeFrequency: 'yearly'},
  {path: {it: 'partner', en: 'partners'}, priority: 0.6, changeFrequency: 'monthly'},
  // Categoria 3 — placeholder leggere
  {path: {it: 'ncc-taormina', en: 'driver-taormina'}, priority: 0.4, changeFrequency: 'yearly'},
  {path: {it: 'ncc-ragusa', en: 'driver-ragusa'}, priority: 0.4, changeFrequency: 'yearly'}
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PAGES.flatMap((page) => {
    const itUrl = page.path.it
      ? `${BASE}/it/${page.path.it}`
      : `${BASE}/it`;
    const enUrl = page.path.en
      ? `${BASE}/en/${page.path.en}`
      : `${BASE}/en`;

    return [
      {
        url: itUrl,
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            it: itUrl,
            en: enUrl,
            'x-default': itUrl
          }
        }
      },
      {
        url: enUrl,
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            it: itUrl,
            en: enUrl,
            'x-default': itUrl
          }
        }
      }
    ];
  });
}
