'use client';

import {useEffect} from 'react';
import {usePathname} from 'next/navigation';
import {trackEvent} from '@/lib/analytics';

// Cablaggio eventi GA4 in un solo punto.
//
// - tel: e WhatsApp: un unico listener delegato in fase di cattura sull'intero
//   documento, cosi' OGNI link (navbar, footer, bottone flottante, box errore
//   form, narrative transfer/citta', presenti e futuri) e' tracciato senza
//   dover modificare i singoli componenti.
// - tour_view: parte al cambio di pathname quando siamo su una pagina tour.
//
// Tutti gli eventi passano da trackEvent(), che e' no-op finche' GA4 non e'
// attivo (ID mancante o consenso analytics non dato) → nessun tracciamento
// senza consenso.

// Rimuove l'eventuale prefisso locale (/en, /it, ...) per matchare le rotte
// in modo indipendente dalla lingua.
function stripLocale(path: string): string {
  return path.replace(/^\/[a-z]{2}(?=\/|$)/, '') || '/';
}

function tourSlug(path: string): string | null {
  const detail = path.match(/^\/tour\/([a-z0-9-]+)\/?$/);
  if (detail) return detail[1];
  if (path === '/tour-barocco') return 'tour-barocco';
  if (path === '/tour-sicilia') return 'tour-sicilia';
  return null;
}

export function AnalyticsEvents() {
  const pathname = usePathname();

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href') ?? '';
      if (href.startsWith('tel:')) {
        trackEvent('tel_click', {link_url: href});
      } else if (/wa\.me|whatsapp\.com/.test(href)) {
        trackEvent('whatsapp_click', {link_url: href});
      }
    }
    document.addEventListener('click', onClick, {capture: true});
    return () => document.removeEventListener('click', onClick, {capture: true});
  }, []);

  useEffect(() => {
    const slug = tourSlug(stripLocale(pathname));
    if (slug) trackEvent('tour_view', {tour: slug});
  }, [pathname]);

  return null;
}
