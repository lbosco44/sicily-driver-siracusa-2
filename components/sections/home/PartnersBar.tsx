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
  // Uso esplicitamente le versioni "-ink" (monochrome scuro) per
  // uniformita' visiva: tutti i loghi nello stesso colore = bar
  // coerente, sembra fatto apposta. Benanti ha solo -ink disponibile,
  // gli altri hanno anche -original (colori brand) ma scegliamo -ink
  // per consistency.
  // Palmeri: cliente ha richiesto esplicitamente palmeri2-ink (versione
  // alternativa scelta).
  // Per aggiungere altri partner: droppa il file -ink nella cartella,
  // aggiungi un entry qui con name + image path.
  {name: 'Pura Vida', image: '/images/loghi-partner/pura-vita-ink.svg'},
  {
    name: 'Fratelli Burgio',
    image: '/images/loghi-partner/fratelli-burgio-ink.png'
  },
  {
    name: 'Cantine Benanti',
    image: '/images/loghi-partner/cantine-benanti-ink.png'
  },
  {name: 'Cantina Palmeri', image: '/images/loghi-partner/palmeri2-ink.png'},
  // Nuovi partner cliente 28/05/2026: Gambino, Orty Suite, Bam Bar.
  // Tutti in versione -ink per coerenza visiva con gli esistenti.
  {name: 'Gambino', image: '/images/loghi-partner/gambino-ink.png'},
  {name: 'Orty Suite', image: '/images/loghi-partner/ortysuite-ink.png'},
  {name: 'Bam Bar', image: '/images/loghi-partner/bambar-ink.png'}
];

export async function PartnersBar() {
  const t = await getTranslations('Home.partnersBar');

  // Per il loop seamless con keyframes translateX(0 → -50%), servono
  // ESATTAMENTE 2 copie identiche: la prima meta' del DOM = la seconda.
  // Quando il container si sposta di -50% (= larghezza unica), la
  // seconda copia occupa la posizione di partenza della prima → loop
  // visivamente identico, senza jump percepito.
  // Per maggior densita' (cliente "spazio bianco a destra"), espandiamo
  // la "unique row" duplicando PARTNERS 2 volte PRIMA del duplicato
  // marquee. Cosi' la riga unica ha 8 elementi (4 partner × 2 ripetuti)
  // e il DOM totale 16, sempre 6-8 loghi visibili in viewport.
  const denseRow = [...PARTNERS, ...PARTNERS];
  const items = [...denseRow, ...denseRow];

  return (
    // bg-canvas-warm (non bg-canvas come Manifesto sopra): crea uno
    // stacco visivo gentile tra le due sezioni che avevano lo stesso
    // colore (cliente: "sono su stesso sfondo e non capisco dove finisce
    // una e inizia l'altra").
    <section className="bg-canvas-warm py-12 sm:py-14 overflow-hidden">
      {/* Header introduttivo: cliente 27/05/2026 ha chiesto piu' grande +
          in grassetto rispetto alla versione italic light precedente. */}
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 mb-8 sm:mb-10">
        <p
          className="text-center font-display text-[20px] sm:text-[24px] lg:text-[26px] font-medium text-ink leading-[1.2]"
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
          // Fade piu' stretto ai bordi (4% invece di 8%): meno area di
          // "vuoto bianco" percepita, i loghi arrivano piu' vicino agli
          // edge del viewport.
          maskImage:
            'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)'
        }}
      >
        {/* Spacing via margin-right su ogni item (NON gap sul container).
            Con CSS gap, la larghezza totale e' N*w + (N-1)*g, e il punto di
            -50% cade a N*w/2 + (N-1)*g/2 — non coincide con la fine della
            prima meta' (N/2 * w + (N/2 - 1) * g) → micro-salto visibile.
            Con margin-right su ogni item: N*(w+g), e -50% = N/2*(w+g) che
            coincide ESATTAMENTE con la fine della prima meta' → loop fluido. */}
        <div className="flex animate-partners-marquee w-max items-center">
          {items.map((p, i) => {
            const content = p.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={p.image}
                alt={p.name}
                className="h-10 sm:h-11 lg:h-12 w-auto object-contain"
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

            // Opacity 85% di default. margin-right (non gap) per loop fluido.
            const wrapper =
              'flex-shrink-0 flex items-center h-12 sm:h-14 lg:h-16 opacity-85 hover:opacity-100 transition-opacity duration-300 mr-8 sm:mr-10 lg:mr-12';

            // Set aria-hidden true per la seconda meta' del DOM (cloni).
            // denseRow = 2×PARTNERS (14 item) → la seconda denseRow inizia a i=14.
            const isClone = i >= denseRow.length;

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
