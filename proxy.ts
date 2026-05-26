import type {NextRequest} from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

const intlMiddleware = createIntlMiddleware(routing);

// Geo-routing: paesi che ricevono italiano di default. Italia + enclavi
// geografiche (Vaticano, San Marino). Tutti gli altri vedono inglese.
// L'utente puo' sempre fare override con lo switcher IT/EN top-right.
const ITALY_LIKE_COUNTRIES = new Set(['IT', 'VA', 'SM']);

export default function middleware(request: NextRequest) {
  // Inietta cookie NEXT_LOCALE basato sul paese (header Vercel) PRIMA che
  // next-intl decida la locale, ma SOLO se l'utente non ha gia' una
  // preferenza esplicita (cookie da visita precedente o switcher cliccato).
  let injectedLocale: 'it' | 'en' | null = null;
  if (!request.cookies.get('NEXT_LOCALE')) {
    // x-vercel-ip-country e' presente solo su Vercel produzione.
    // In dev/localhost l'header e' undefined → fallback su italiano.
    const country = request.headers.get('x-vercel-ip-country');
    injectedLocale = country
      ? ITALY_LIKE_COUNTRIES.has(country)
        ? 'it'
        : 'en'
      : 'it';
    // Mutazione della request cookies: next-intl legge questo valore
    // al posto di Accept-Language per decidere il redirect dell'URL root.
    request.cookies.set('NEXT_LOCALE', injectedLocale);
  }

  const response = intlMiddleware(request);

  // Persisti la scelta sul browser: cosi i prossimi visit skippano il
  // geo-lookup e rispettano la decisione iniziale (anche se l'utente
  // viaggia poi in Italia con un browser EN, mantiene EN finche' non
  // clicca esplicitamente lo switcher).
  if (injectedLocale && response) {
    response.cookies.set('NEXT_LOCALE', injectedLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 anno
      sameSite: 'lax'
    });
  }

  return response;
}

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Next.js internals (_next, _vercel)
  // - /og — OG image route handler dinamico, NON da localizzare
  // - File system assets (favicon, sitemap, robots, image extensions)
  matcher: ['/((?!api|_next|_vercel|og|.*\\..*).*)']
};
