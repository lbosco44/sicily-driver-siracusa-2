// Helper OG/Twitter condivisi. Ogni pagina condivisa su WhatsApp/Facebook/
// Twitter deve mostrare un'anteprima immagine: senza `openGraph.images` il link
// appare "nudo". Usano la route dinamica /og?title=&locale= che genera
// l'immagine 1200x630 per-pagina (vedi app/og/route.tsx).

function ogUrl(locale: string, title: string): string {
  return `/og?title=${encodeURIComponent(title)}&locale=${locale}`;
}

/** Array per `openGraph.images` con l'OG image per-pagina. */
export function ogImage(locale: string, title: string) {
  return [{url: ogUrl(locale, title), width: 1200, height: 630, alt: title}];
}

/** Blocco `twitter` (summary_large_image) con la stessa OG image. */
export function twitterCard(title: string, description: string, locale: string) {
  return {
    card: 'summary_large_image' as const,
    title,
    description,
    images: [ogUrl(locale, title)]
  };
}
