import createIntlMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

// Middleware next-intl standard. Nessun geo-routing per IP: la selezione
// lingua nei risultati Google è gestita dagli hreflang, non da un redirect
// lato sito (Googlebot striscia da IP USA → un auto-redirect rischierebbe di
// far indicizzare solo l'inglese). Con routing.localeDetection=false la root /
// serve sempre l'italiano (default); l'utente cambia lingua con lo switcher.
// (Audit SEO P0.2)
export default createIntlMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Next.js internals (_next, _vercel)
  // - /og — OG image route handler dinamico, NON da localizzare
  // - File system assets (favicon, sitemap, robots, image extensions)
  matcher: ['/((?!api|_next|_vercel|og|.*\\..*).*)']
};
