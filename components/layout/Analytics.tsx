'use client';

import Script from 'next/script';
import {useEffect, useState} from 'react';
import {getConsentCategory, CONSENT_CHANGE_EVENT} from '@/lib/cookie-consent';

// Google Analytics 4 — caricato SOLO dopo consenso "analytics" (GDPR) e SOLO
// se è configurato NEXT_PUBLIC_GA_ID. Finché il cliente non fornisce il
// Measurement ID (task di cutover, Brief/SEO.md §6.5), il componente non
// renderizza nulla. Reagisce in tempo reale al cambio di consenso nel banner.
//
// Eventi custom previsti dal brief (whatsapp_click, tel_click, form_submit,
// tour_view) andranno aggiunti sui rispettivi handler una volta attivo GA4.

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    const sync = () => setEnabled(getConsentCategory('analytics'));
    sync();
    window.addEventListener(CONSENT_CHANGE_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  if (!GA_ID || !enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
