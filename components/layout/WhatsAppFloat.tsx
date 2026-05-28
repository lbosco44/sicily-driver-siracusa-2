import {getTranslations} from 'next-intl/server';
import {WHATSAPP_HREF} from '@/lib/contact';

// WhatsAppFloat — pulsante fisso bottom-right, verde WhatsApp ufficiale
// (#25D366) + icona ufficiale (cornetta dentro bolla). Scelta funzionale,
// non editoriale: il riconoscimento istantaneo del brand-color WhatsApp
// batte la coerenza palette per il punto di conversione piu' alto del sito.
// Brief override esplicito (cliente, 26 maggio 2026).
export async function WhatsAppFloat() {
  const t = await getTranslations('WhatsApp');

  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('label')}
      className="
        fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50
        flex items-center justify-center
        w-14 h-14 sm:w-[60px] sm:h-[60px]
        rounded-full
        text-white
        bg-[#25D366] hover:bg-[#1FAD55]
        shadow-[0_8px_24px_rgba(37,211,102,0.35),0_2px_8px_rgba(245,239,228,0.4)]
        transition-all duration-300 ease-out
        hover:scale-[1.06]
        focus-visible:outline-2 focus-visible:outline-primary
        focus-visible:outline-offset-3
      "
    >
      {/* Icona WhatsApp ufficiale (cornetta dentro chat bubble).
          Pattern path basato sul logo ufficiale WhatsApp. */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.55-1.66a12.74 12.74 0 0 0 6.25 1.6h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05A12.71 12.71 0 0 0 16 3.2zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.02 1.07-3.91-.25-.4a10.6 10.6 0 0 1-1.62-5.66c0-5.87 4.78-10.64 10.65-10.64 2.85 0 5.51 1.11 7.52 3.13a10.55 10.55 0 0 1 3.11 7.52c0 5.87-4.78 10.65-10.66 10.65zm5.84-7.97c-.32-.16-1.9-.94-2.19-1.04-.29-.11-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55l-.61-.01a1.17 1.17 0 0 0-.85.4c-.29.32-1.11 1.09-1.11 2.65 0 1.57 1.14 3.08 1.29 3.29.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.16-1.53.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z"/>
      </svg>
    </a>
  );
}
