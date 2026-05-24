'use client';

import {useEffect} from 'react';
import {usePathname} from '@/i18n/navigation';

/**
 * Reset scroll position to top on every route change.
 * Default Next.js App Router behavior preserves scroll for back/forward
 * navigation, but on regular link clicks we want users to land at the top
 * of the new page (not mid-page where they were on the previous one).
 *
 * Listens to pathname changes; scrolls instantly (no smooth) for clean UX.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Use 'instant' to avoid jarring smooth-scroll on every navigation.
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
  }, [pathname]);

  return null;
}
