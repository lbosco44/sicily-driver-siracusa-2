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
  // I 4 partner reali con loghi caricati dal cliente in
  // public/images/loghi-partner/ il 27/05/2026.
  // Per aggiungerne altri: droppa il file nella cartella, aggiungi un
  // entry qui con name + image path. Format: SVG (preferito, scala
  // perfetta) o PNG con sfondo trasparente.
  {name: 'Pura Vida', image: '/images/loghi-partner/pura-vita.svg'},
  {name: 'Fratelli Burgio', image: '/images/loghi-partner/fratelli-burgio.png'},
  {name: 'Cantine Benanti', image: '/images/loghi-partner/cantine-benanti.png'},
  {name: 'Cantina Palmeri', image: '/images/loghi-partner/palmeri.png'}
];

export async function PartnersBar() {
  const t = await getTranslations('Home.partnersBar');

  // Duplichiamo la lista una volta: il keyframes traduce da 0 a -50%, quindi
  // mentre la prima copia esce a sx, la seconda e' gia' nella posizione
  // d'origine → loop seamless visivamente.
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="bg-canvas py-20 sm:py-24 overflow-hidden">
      {/* Header introduttivo: cliente 27/05/2026 ha chiesto piu' grande +
          in grassetto rispetto alla versione italic light precedente. */}
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 mb-12 sm:mb-14">
        <p
          className="text-center font-display text-[22px] sm:text-[28px] lg:text-[32px] font-medium text-ink leading-[1.2]"
          style={{fontStretch: '95%'}}
        >
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
        <div className="flex gap-16 sm:gap-20 lg:gap-24 animate-partners-marquee w-max items-center">
          {items.map((p, i) => {
            const content = p.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={p.image}
                alt={p.name}
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            ) : (
              // Placeholder: nome partner stilizzato come piccolo logo.
              // Quando il cliente uploadera' il file reale, basta aggiungere
              // image: '/images/loghi-partner/<file>' nell'array sopra.
              <span
                className="text-[18px] sm:text-[20px] tracking-[0.04em] font-display font-medium text-ink/70 whitespace-nowrap"
                style={{fontStretch: '92%'}}
              >
                {p.name}
              </span>
            );

            // Opacity 85% di default (giu' di 15% per non sovrastare il resto
            // della sezione), niente grayscale (cliente vuole loghi piu'
            // visibili). Hover → 100%.
            const wrapper =
              'flex-shrink-0 flex items-center h-20 sm:h-24 lg:h-28 opacity-85 hover:opacity-100 transition-opacity duration-300';

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
