import {getTranslations} from 'next-intl/server';

// PartnersBar — marquee infinito di loghi partner.
// Ispirato a 21st.dev shadcnblockscom/logos3 ma implementato CSS-only
// (niente embla-carousel come dependency: la nostra animazione e' un
// keyframes marquee declarato in globals.css).
//
// Data: lista entries con `name` (sempre) e `image` (opzionale).
// Se image e' presente → render <img>. Se assente → render text placeholder
// stilizzato come logo (cosi' il cliente puo' partire con placeholder e
// sostituire incrementalmente man mano che ottiene i file).
//
// Logo files vivono in `/public/images/loghi-partner/`. Format consigliato:
// SVG monochromatic (per applicare grayscale + opacity uniformi). PNG
// trasparenti funzionano comunque.
//
// Hover: pause + opacity 100% + grayscale-0 sulla logo singola.

type PartnerLogo = {
  name: string;
  image?: string; // /images/loghi-partner/<file>.svg|png
  href?: string;
};

const PARTNERS: PartnerLogo[] = [
  // Partner gia' citati in lib/partners.ts (pagina /partner) + posti
  // tipicamente legati al servizio NCC premium siciliano. Placeholder
  // per ora, il cliente sostituira' con i file reali in
  // public/images/loghi-partner/. Solo "pura-vita.svg" e' gia' presente
  // (caricato 27/05/2026).
  {name: 'Pura Vida', image: '/images/loghi-partner/pura-vita.svg'},
  {name: 'Fratelli Burgio'},
  {name: 'Cantina Benanti'},
  {name: 'Cantina Palmeri'},
  {name: 'Hotel Algilà'},
  {name: 'Des Étrangers'}
];

export async function PartnersBar() {
  const t = await getTranslations('Home.partnersBar');

  // Duplichiamo la lista una volta: il keyframes traduce da 0 a -50%, quindi
  // mentre la prima copia esce a sx, la seconda e' gia' nella posizione
  // d'origine → loop seamless visivamente.
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="bg-canvas py-14 sm:py-16 overflow-hidden">
      {/* Header introduttivo, italic editoriale, niente eyebrow */}
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 mb-9 sm:mb-10">
        <p className="text-center font-display italic text-[15px] sm:text-[16px] text-ink-soft/85">
          {t('intro')}
        </p>
      </div>

      {/* Marquee row: overflow-hidden esterno + mask-image per fade ai bordi.
          Il flex interno e' w-max (cresce con i figli) e ha animate-partners-marquee
          definito in globals.css. Pausa su hover. */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
        }}
      >
        <div className="flex gap-14 sm:gap-16 lg:gap-20 animate-partners-marquee w-max items-center">
          {items.map((p, i) => {
            const content = p.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={p.image}
                alt={p.name}
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            ) : (
              // Placeholder: nome partner stilizzato come piccolo logo.
              // Quando il cliente uploadera' il file reale, basta aggiungere
              // image: '/images/loghi-partner/<file>' nell'array sopra.
              <span
                className="text-[13px] sm:text-[14px] tracking-[0.05em] font-display font-light text-ink/55 whitespace-nowrap"
                style={{fontStretch: '92%'}}
              >
                {p.name}
              </span>
            );

            const wrapper =
              'flex-shrink-0 flex items-center h-12 sm:h-14 opacity-55 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300';

            // Set aria-hidden true per la seconda copia (i >= PARTNERS.length)
            // cosi' screen reader leggono il loop una volta sola.
            const isClone = i >= PARTNERS.length;

            return p.href ? (
              <a
                key={`${p.name}-${i}`}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={wrapper}
                aria-hidden={isClone}
                tabIndex={isClone ? -1 : 0}
              >
                {content}
              </a>
            ) : (
              <div
                key={`${p.name}-${i}`}
                className={wrapper}
                aria-hidden={isClone}
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
