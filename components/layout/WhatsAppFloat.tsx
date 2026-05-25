import {getTranslations} from 'next-intl/server';
import {WHATSAPP_HREF} from '@/lib/contact';

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
        bg-accent text-cream-on-dark
        shadow-[0_8px_24px_rgba(224,120,86,0.35)]
        transition-all duration-300 ease-out
        hover:bg-accent-hover hover:scale-[1.06]
        focus-visible:outline-2 focus-visible:outline-primary
        focus-visible:outline-offset-3
      "
      style={{color: 'var(--cream-on-dark)'}}
    >
      {/* Icona stilizzata custom — chat bubble editoriale, NON SVG WhatsApp generic */}
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M13 2.5C7.2 2.5 2.5 7.2 2.5 13c0 1.85.49 3.59 1.34 5.1L2.5 23.5l5.55-1.32A10.45 10.45 0 0 0 13 23.5c5.8 0 10.5-4.7 10.5-10.5S18.8 2.5 13 2.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9.3 9.5c.1-.4.5-.5.8-.5h.7c.3 0 .5.2.6.5l.7 1.9c.1.3 0 .6-.2.8l-.6.6c.7 1.3 1.7 2.3 3 3l.6-.6c.2-.2.5-.3.8-.2l1.9.7c.3.1.5.3.5.6v.7c0 .4-.2.7-.5.8a8.5 8.5 0 0 1-8.5-8.5Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
