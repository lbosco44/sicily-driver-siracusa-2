// Helper unico per gli eventi GA4.
//
// Sicuro sempre: se `gtag` non e' presente — perche' NEXT_PUBLIC_GA_ID non e'
// configurato, oppure l'utente non ha accettato i cookie "analytics" — la
// funzione non fa nulla. Gli eventi partono SOLO quando GA4 e' attivo, quindi
// il comportamento e' coerente col GDPR (nessun tracciamento senza consenso).
//
// Il caricamento di GA4 e il gating del consenso vivono in
// components/layout/Analytics.tsx; qui c'e' solo l'invio degli eventi custom.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type GaEvent =
  | 'whatsapp_click'
  | 'tel_click'
  | 'form_submit'
  | 'tour_view';

export function trackEvent(
  name: GaEvent,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', name, params ?? {});
}
