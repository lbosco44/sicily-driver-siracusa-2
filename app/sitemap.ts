import type {MetadataRoute} from 'next';

const BASE = 'https://ncctaxisiracusa.com';

type Entry = {
  path: {it: string; en: string};
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
};

// Mapping IT URL → EN URL per priorità. Riflette Brief/SITEMAP.md sezione D.
const PAGES: Entry[] = [
  {path: {it: '', en: ''}, priority: 1.0, changeFrequency: 'monthly'},
  {path: {it: 'ncc-catania', en: 'driver-catania'}, priority: 0.9, changeFrequency: 'monthly'},
  {path: {it: 'ncc-noto', en: 'driver-noto'}, priority: 0.9, changeFrequency: 'monthly'},
  {path: {it: 'ncc-taormina', en: 'driver-taormina'}, priority: 0.9, changeFrequency: 'monthly'},
  {path: {it: 'ncc-ragusa', en: 'driver-ragusa'}, priority: 0.9, changeFrequency: 'monthly'},
  {path: {it: 'tour-barocco', en: 'baroque-tour'}, priority: 0.9, changeFrequency: 'monthly'},
  {path: {it: 'tour-etna', en: 'etna-tour'}, priority: 0.9, changeFrequency: 'monthly'},
  {path: {it: 'wedding-eventi', en: 'weddings'}, priority: 0.9, changeFrequency: 'monthly'},
  {path: {it: 'tour-sicilia', en: 'sicily-tours'}, priority: 0.8, changeFrequency: 'monthly'},
  {path: {it: 'tour-ortigia-taormina', en: 'ortigia-taormina-tour'}, priority: 0.8, changeFrequency: 'monthly'},
  {path: {it: 'servizi', en: 'services'}, priority: 0.8, changeFrequency: 'monthly'},
  {path: {it: 'chi-siamo', en: 'about'}, priority: 0.6, changeFrequency: 'yearly'},
  {path: {it: 'contatti', en: 'contact'}, priority: 0.6, changeFrequency: 'yearly'}
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
