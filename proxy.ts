import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Next.js internals (_next, _vercel)
  // - /og — OG image route handler dinamico, NON da localizzare
  // - File system assets (favicon, sitemap, robots, image extensions)
  matcher: ['/((?!api|_next|_vercel|og|.*\\..*).*)']
};
