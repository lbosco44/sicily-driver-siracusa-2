# DESIGN.md (ASTRATTO) — Sicily Driver Siracusa

> ⚠️ Questo file è **astratto**. Le scelte concrete (palette hex, font esatti, componenti specifici, layout fini) vivono nel passaggio successivo: **Intermezzo Design su Claude Code via `/nexus-design`**.
> Prima di Chat 2 CONTENUTI, questo file viene aggiornato con la sezione "Scelte concrete approvate".

---

## Pattern di progetto
**B — Migration SEO-preserving** su dominio invariato `ncctaxisiracusa.com`. Cliente acquisito (non prospect). Search Console **ora disponibile**: analisi dati 7 mesi (giu-set 2025 alta stagione + feb-mag 2026 bassa stagione) ha permesso una **preservation chirurgica** invece di "preserve by default" — solo 7 URL portano click reali e vanno preservate integralmente, 4 hanno impressioni ma 0 click (problema metadata, da rifare), 9 sono morte ma si mantengono come placeholder per coerenza struttura. Vedi SITEMAP.md per la stratificazione completa.

## Purpose primario
- **Categoria**: A — Conversion
- **Motivazione**: il visitatore tipo (turista in fase decisionale) arriva per fare un'azione — prenotare un transfer urgente o un tour Barocco/Etna. Il brand display "Sicily Driver Siracusa" e il dominio `ncctaxisiracusa.com` parlano entrambi a chi sta già scegliendo, non a chi sta scoprendo. Tutto il copy esistente è strutturato per intercettare ricerche transazionali ("transfer Catania Siracusa", "NCC Noto", "baroque tour Sicily").
- **Sub-purpose secondario presente solo sulla pagina Wedding & Eventi**: D — Lead qualification (form esteso con qualifying fields). Non condiziona il design del resto del sito.

## Target principale
- **Chi**: in ordine di volume previsto, turista internazionale (US/UK/EU del Nord) 35–65 in viaggio in Sicilia orientale (coppie e famiglie); turista italiano in Val di Noto stessa fascia; sotto-segmento wedding/luxury e business
- **Dispositivo prevalente**: **dual stagionale** (dati GSC). Estate (alta stagione) mobile dominante 58% — turista già in vacanza che cerca taxi/transfer rapido in strada. Inverno-primavera (bassa stagione) desktop dominante 59% — pianificatore che valuta tour da casa, scroll lungo, valutativo. Conseguenza: dual-first nel build, non mobile-first puro. Sticky CTA mobile WhatsApp+telefono obbligatori per pubblico estivo.
- **Urgenza**: **doppia velocità coesistente**. Transfer aeroporto → alta (booking 2-24h prima). Tour Barocco/Etna → bassa (valutazione 1-3 mesi prima)
- **Lingua/cultura**: 50/50 IT/EN nativo, sito EN trattato come gemello completo non come fallback

## Concept scelto
- **Nome**: Diario Mediterraneo
- **Mood in 3 parole**: caldo, autentico, editoriale
- **Tono di voce**: italiano narrativo, **tu** (confermato dal cliente), prima persona ("ti veniamo a prendere all'aeroporto, ti portiamo a Noto"), niente corporate, niente "VIP/luxury/exclusive" come stile di linguaggio. **Nota sulla tagline brand**: GSC 7 mesi non mostra alcuna query VIP/luxury/eleganza/premium con click — la tagline storica "Eleganza da VIP, prezzi di mercato" NON è SEO-locked come pensavamo. Resta decisione cliente se preservarla letterale, modificarla o eliminarla (da decidere in Chat 2 COPY). Se preservata, va estetizzata col serif italico.

## Direzione estetica (astratta, da raffinare con `/nexus-design`)

- **Approccio hero**: **dipende dal cluster di pagine** (vedi "Archetipo animazione")
  - Cluster Fast (home, pagine locali, servizi, contatti, chi siamo) → hero **informativa con atmosfera**: foto reale statica + headline serif italica overlay + search/CTA visibili sopra la piega
  - Cluster Esperienziale (hub tour, tour dedicati, wedding) → hero **atmosferica cinematica**: video loop muto 10s + tipografia editoriale ampia + CTA scroll-down sottile
- **Approccio servizi**: **visivo-editoriale con warm color blocking**. Ogni macro-servizio ha personalità cromatica distinta (4 card con tonalità calde diverse, asimmetria editorial, mai grid 2×2 rigido)
- **Approccio testimonianze**: **statico con numerazione editoriale tipografica grande (01 / 02 / 03)**. Quote brevi + nome + città di provenienza (es. Berlin / Milano / London). Mobile swipe ammesso. **Cliente conferma**: recensioni Google reali disponibili dal proprio Google Business Profile, da ingestire (via API o snapshot statico) in Chat 2.
- **Approccio fotografico**: realistico fotografico desaturato caldo, dettagli mediterranei autentici (pietra calcarea, calce, mare di Ortigia, ulivo, barocco di Noto al tramonto) + interni Mercedes inquadrati come oggetto di design familiare, mai come prodotto in vetrina. Mai stock photography generica. Mai illustrazioni
- **Atmosfera tipografica**: **serif italico/editorial per H1/H2/quote/storytelling tour** (è la chiave emotiva del concept) + **sans neutro pulito per UI/body/label/prezzi**. Un solo serif, un solo sans. Nessun terzo font
- **Atmosfera cromatica**: cream calde + blu mare profondo + accento terracotta/coral. Desaturate, mediterranee, autentiche. **Mai oro metallico, mai dorature, mai colorblocking giocoso playful**
- **Energia CTA**: **dominante ma vestita editorialmente** (pillole arrotondate con colore accent caldo, contrast alto sul cream, dimensioni assertive senza essere "BUY NOW" aggressivo). Coerente con purpose A: niente whisper CTA, niente CTA sottolineati editorial-only

## Archetipo animazione

⚠️ **Mix non standard, motivato**: questo cliente non si lascia incasellare in un singolo archetipo A/B/C/D. Il design system applica due archetipi diversi per **cluster di pagine**:

| Cluster | Archetipo dominante | Pagine |
|---|---|---|
| **Cluster Fast** | A 70% + B 30% | `/`, `/en`, 4 pagine `/ncc-*` IT, 4 pagine `/en/driver-*`, `/servizi`, `/en/services`, `/contatti`, `/en/contact`, `/chi-siamo`, `/en/about`, `/partner`, `/en/partners` |
| **Cluster Esperienziale** | B 70% + C 30% | `/tour-sicilia`, `/en/sicily-tours`, `/tour-barocco`, `/en/baroque-tour`, `/tour/etna-premium`, `/en/tour/etna-premium`, `/tour/isola-delle-correnti`, `/en/tour/isola-delle-correnti`, `/tour/dolce-vita-siracusa`, `/en/tour/dolce-vita-siracusa`, `/tour/silent-sailing`, `/en/tour/silent-sailing`, `/wedding`, `/en/weddings` (la pagina wedding è esperienziale ma con sezione booking Fast) |

**Implicazioni operative**:
- **Cluster Fast**: foto statica di altissima qualità in hero, **niente video loop**, **niente scroll-driven**. Atmosfera arriva dalla qualità della foto e dalla quiete tipografica. Performance prioritaria
- **Cluster Esperienziale**: video loop atmosferico muto in hero (max 10s, encoding secondo Video Bible), scroll-driven **solo** sulla sezione "itinerario tappa per tappa" delle pagine tour. Nessuna altra animazione complessa nel sito

## Banlist specifica del progetto

### Estetica (aggiuntiva a banlist globale CLAUDE.md Nexus)
- **No oro metallico, no dorature, no shiny luxury cliché** (l'effetto premium si fa con qualità foto + quiete tipografica, non con materiali metallici)
- **No color blocking giocoso playful** (Mailchimp-vibe, Notion-vibe): vogliamo warm color blocking editorial-magazine, terra/mare/cream, non viola/giallo limone/pink
- **No emoji, no icone stock generiche** (no Lucide auto/calendario/persona generiche): se serve un'icona è discreta e custom, oppure non c'è
- **No grid 2×2 rigido**, no early-2000s card stacking
- **No font monospace, no script/handwritten** in nessuna parte del sito
- **No font Inter, Roboto, generici sans di default**

### Cliché di settore NCC/automotive da evitare
- No cromature, no riflessi shiny sull'auto, no "luxury black on gold"
- No pelle nera in primo piano come hero
- No tachimetro/volante/dettaglio meccanico come elemento decorativo
- No "VIP transfer" come headline (eventuale sopravvivenza nella tagline brand storica — vedi nota tagline in Direzione per Claude Code — viene estetizzata col serif italico)

### Riferimenti culturali siciliani da evitare
- No coppola, no cannolo, no pizzo merletto, no ceramiche di Caltagirone come pattern decorativo
- No "Inspector Montalbano" letterale (no commissariato, no torta di mandorle in close-up): l'estetica del barocco siciliano c'è, la citazione no
- No folklore caricaturale (no posa in costume, no scena teatrale "siciliana"), no Etna iconica come logo decorativo

## Direzione per Claude Code

### Tono generale del codice
**Editoriale-calmo con energia conversion alta sui CTA**. Il codice deve produrre un sito che si legge come una rivista di viaggio italiana di qualità, dove però i CTA sono inequivocabilmente cliccabili e prominenti. Non è "Cereal Magazine puro" (perderemmo la conversion), non è "Booking.com" (perderemmo l'anima).

### Vincoli tecnici migrazione (obbligatori, da rispettare nel build)

- **Dominio**: resta `ncctaxisiracusa.com`. **Mai cambiare**. Il brand display "Sicily Driver Siracusa" si gestisce via `<title>`, logo, OG image, schema.org `name`/`alternateName`.
- **301 perfetti** su tutte le 20 URL esistenti (vedi SITEMAP.md tabella migration). Testati funzionanti prima del cutover DNS. Mai 302.
- **Sitemap.xml** generata automaticamente e **inviata a Google Search Console il giorno del go-live**. Senza questo step l'indicizzazione delle nuove URL è ritardata di settimane.
- **Robots.txt**: verificare assenza di `noindex` o `disallow` lasciati in produzione (errore comune in migration). Il template Nexus include `noindex` di default in preview Vercel — va rimosso al cutover.
- **GA4 nuovo installato al go-live** (assumere che il sito attuale non abbia analytics). Property ID nuovo, eventi obbligatori: `form_submit`, `whatsapp_click`, `tel_click`, `tour_view`.
- **Schema.org `sameAs`** del Google Business Profile di Enzo collegato in home (`LocalBusiness` schema). Senza questo collegamento, il GBP — che porta la maggior parte dei lead reali — non "irradia" autorevolezza al sito.
- **Monitor settimanale** delle 5 query top GSC (`ncc siracusa`, `taxi siracusa`, `sicily driver`, `taxi syracuse`, `transfer siracusa`) per le prime 6 settimane post-cutover. Fisiologico calo iniziale 1-2 settimane, stabilizzazione 6-12 settimane.

### Filtri obbligatori da rispettare
- **Purpose A → energia CTA dominante** in ogni pagina, anche quelle Esperienziali
- **Cluster Fast → no video loop, no scroll-driven**, hero statica
- **Cluster Esperienziale → video loop hero + scroll-driven solo sull'itinerario**
- **Tipografia: serif italico esclusivamente per H1/H2/quote/storytelling**, mai per UI/label/prezzi
- **Tagline brand (decisione cliente Chat 2)**: "Eleganza da VIP, prezzi di mercato" (IT) / "VIP-style elegance at market prices" (EN) — GSC dimostra che NON è SEO-locked. Resta decisione cliente: preservare letterale (estetizzata col serif italico) / modificare / eliminare. Da definire in COPY.md.
- **EN trattato come gemello dell'IT**, mai come fallback. Switcher lingua sempre top-right, scambia tra URL gemelle
- **WhatsApp persistente in basso a destra** su tutte le pagine (preserva comportamento sito attuale) — su mobile diventa **sticky bottom bar** con WhatsApp + telefono `tel:` affiancati, sempre visibile da scroll > hero (pubblico estivo mobile 58%)
- **Mobile-first vero**: le decisioni di hierarchy e densità si testano prima sul mobile. **Ma dual-first sul desktop**: il pubblico invernale è desktop-dominante (59%), il sito deve essere ugualmente bello su entrambi i breakpoint

### Cosa Claude Code DEVE proporre nell'Intermezzo `/nexus-design`

1. **3 direzioni palette concrete** (hex specifici) compatibili con: cream calde + blu mare profondo + accent terracotta/coral, desaturate mediterranee, mai oro
2. **3 direzioni tipografia concrete** (font specifici per serif italico + sans neutro) compatibili con: editorial italian feel, NO Inter/Roboto/monospace/script. Esempi di direzione: GT Sectra / Tiempos / Reckless / Domaine Display per il serif; Söhne / Aktiv Grotesk / GT Walsheim / Inter Tight per il sans (Claude Code valuta su `ui-ux-pro-max` font pairings ranked)
3. **3 direzioni componenti CTA** (forme, dimensioni, comportamenti hover) tutte di energia dominante coerente col purpose A: pillole arrotondate vs rettangolari editorial vs filled high-contrast
4. **3 direzioni macro-layout per la sezione "Dove ti portiamo" della home** (warm color blocking 4 card): card colorate piene vs card con foto + accent color border vs card asimmetrico-editorial magazine
5. **3 direzioni macro-layout per la sezione "Tappa per tappa" delle pagine tour** (scroll-driven sticky): foto+testo split alternato vs full-bleed con testo overlay vs orizzontale snap (più semplice da implementare)

## Scelte concrete approvate

> Compilato da `/nexus-design` il 2026-05-21 — Intermezzo Design

### Palette — "Calce e Mare"

Cream caldo dominante + blu mare profondo strutturale + terracotta accent. Mediterraneo classico, editoriale. CTA terracotta forti su cream, headline blu profondo, accent terracotta libero anche per decorativi (numerazione editoriale, drop-cap, marginalia).

| Token | Hex | Uso |
|---|---|---|
| `--canvas` (background) | `#F5EFE4` | sfondo dominante (cream calce) |
| `--ink` (text primary) | `#2A2520` | testi lunghi, body (nero seppia) |
| `--primary` (blu mare) | `#1E3A4F` | H1/H2 strutturali, sezioni hero scure, footer |
| `--accent` (terracotta) | `#E07856` | CTA fill, numerazione editoriale 01/02/03, drop-cap, link hover |
| `--secondary` (verde ulivo) | `#8B9B8E` | dettagli decorativi calmi, dividers atmosferici |
| `--border` (cream scuro) | `#E8DFD0` | linee divisorie sottili, border cards/sezioni |
| `--muted-bg` | `#EDE5D6` | sfondi sezione alternati |
| `--cream-on-dark` | `#F5EFE4` | label/testo su superfici blu mare scure |

**Note operative**:
- WCAG AAA per body text (`--ink` su `--canvas`: contrast ratio 11.8:1)
- CTA terracotta su cream supera 4.5:1 (AA)
- Mai usare terracotta per body text (solo accent)
- Mai usare verde ulivo come CTA (solo decorativo)
- Hover stati: darken terracotta a `#C76A4A` (-8%), lighten blu mare a `#264556` (+5%)

### Tipografia — "Cormorant Garamond + DM Sans"

Serif Garamond italiano con italic generoso (calore rinascimentale) + sans geometrico moderno pulito. Italic SOLO su Cormorant per H1/H2/quote/storytelling tour.

| Ruolo | Font | Pesi | Esempio uso |
|---|---|---|---|
| Display (H1, hero headlines) | **Cormorant Garamond** | 400, 500, 600 + italic | Hero, H1 pagine, H2 sezioni, quote testimonial |
| Body / UI / labels | **DM Sans** | 300, 400, 500, 600 | Paragrafi, navbar, footer, label form, CTA, eyebrow |

**Google Fonts CSS Import**:
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
```

**Tailwind config**:
```ts
fontFamily: {
  display: ['Cormorant Garamond', 'serif'],
  sans: ['DM Sans', 'sans-serif'],
}
```

**Scala tipografica**:
- Hero H1: Cormorant 500 italic 64–80px desktop / 40–48px mobile, line-height 1.05, tracking -0.01em
- Section H2: Cormorant 500 (italic per accent words) 40–56px desktop / 28–32px mobile, line-height 1.1
- Quote: Cormorant 400 italic 24–36px, line-height 1.4
- Body: DM Sans 400 16–17px, line-height 1.65
- Eyebrow: DM Sans 500 12px uppercase, tracking 0.12em
- CTA label: DM Sans 500 15px uppercase, tracking 0.05em
- Caption/marginalia: DM Sans 400 13px, line-height 1.5

**Italic policy**: Cormorant italic SOLO per
1. Parole accent dentro H1/H2 (es. "Ti veniamo a prendere /all'aeroporto/")
2. Quote testimonial intere
3. Storytelling tour (paragrafi narrativi delle pagine tour)
4. Tagline brand (decisione cliente, se preservata: "*Eleganza da VIP, prezzi di mercato*")

### Energia CTA — "Pillola terracotta piena"

Pillole arrotondate pieno terracotta su cream, label DM Sans 500 uppercase tracking 0.05em, freccia animata `translate-x +8px` al hover. Massima energia conversion per purpose A.

**Stile primario** (PRENOTA / CHIAMA / RICHIEDI):
- Background: `#E07856` (terracotta accent)
- Label color: `#F5EFE4` (cream)
- Border-radius: `999px` (pillola piena)
- Padding: `14px 32px` desktop / `16px 28px` mobile
- Font: DM Sans 500, 15px, uppercase, letter-spacing 0.05em
- Icon: freccia `→` a destra, gap 12px, transition translate-x 250ms ease-out
- Mobile: full-width, altezza 52px
- Transition: 250ms ease-out su background + transform

**Stati**:
- Hover: `background #C76A4A` (-8%), freccia `translate-x: 8px`
- Active: `background #B05E40` (-12%), `scale 0.98`
- Disabled: `background #D9C9B8` (cream desaturato), `cursor not-allowed`
- Focus visible: outline `2px solid #1E3A4F` (blu mare) offset 3px

**Stile secondario** (link inline narrative, "Leggi di più"):
- Underline editoriale `text-decoration: underline` con `text-decoration-color: #E07856` `text-underline-offset: 4px`
- Color: `#1E3A4F` (blu mare)
- Font: DM Sans 500 inherit size
- Hover: `text-decoration-color: #C76A4A`

### Macro-layout per sezione

| Sezione | Pattern scelto | Note implementazione |
|---|---|---|
| **Hero Cluster Fast** (home, ncc-*, servizi, contatti, chi-siamo) | Foto statica desaturata cream + headline serif italic overlay + CTA visibile sopra la piega | Mobile: foto sopra, headline sotto. Niente video, niente parallax, niente scroll-driven. |
| **Hero Cluster Esperienziale** (tour-*, wedding) | Video loop muto 10s + tipografia editoriale ampia centrata + CTA scroll-down sottile | Encoding Video Bible (H.264 max 1.5MB, autoplay+muted+loop+playsinline). Mobile: poster image, video disattivato per LCP. |
| **Dove ti portiamo** (4 destinazioni) | Asimmetrico editorial magazine (large/tall/short/wide) | Card di altezze e larghezze diverse, foto desaturate calde, numeri 01/02/03/04 Cormorant 500 italic ~120px terracotta, nome città Cormorant 500 italic 36px. Mobile: stack verticale mantenendo gerarchia. |
| **Tappa per tappa** (pagine tour) | Full-bleed cinematic con testo overlay | Sticky 100vh per tappa, foto cambia con fade, testo basso-sinistra (numero + nome italic + descrizione breve). Darken overlay leggero per leggibilità testo cream. Mobile: stack verticale con foto full-bleed. |
| **Testimonial** | Quote singola dominante con switcher 01/02/03 | Cormorant 400 italic 36px centrata, nome+città DM Sans 500 12px uppercase. Switcher pallini terracotta. Cambio quote con fade 400ms. Mobile: stesso layout, switcher diventa swipe. |
| **FAQ** | Lista editoriale lunga con divisori sottili | Domande Cormorant 500 24px, risposte DM Sans 400 16px. Accordion no shadow, solo border-bottom `--border`. |
| **Servizi (long)** | Lista editoriale con linee divisorie + foto inline | Pattern simile a "Dove ti portiamo" ma orientamento verticale, ogni servizio 1/2 pagina con foto a sinistra + testo a destra alternati. |
| **Contatti** | Mappa dominante + form colonna stretta + dati contatto bottom | WhatsApp persistente bottom-right su tutte le pagine (preserva comportamento attuale). |
| **Navbar** | Top-right switcher lingua IT/EN, logo top-left wordmark Cormorant, menu inline DM Sans 500 | Backdrop blur leggero su scroll, no transparency totale per leggibilità. |
| **Footer** | Blu mare scuro `#1E3A4F`, cream testi, terracotta link hover | Multi-colonna desktop, accordion mobile per sitemap. |

### Spacing system

Base 4px scale Tailwind, container max-width **1280px**, padding orizzontale **24px mobile / 40px tablet / 56px desktop**.

- Sezioni: padding verticale **96px desktop / 64px tablet / 48px mobile**
- Gap card: **32px desktop / 20px mobile**
- Gap testo H2 ↔ body: **24px**
- Gap eyebrow ↔ H2: **12px**

### Border radius system

- Pillola CTA: `999px`
- Card foto destinazioni: `8px` (sobrio, asimmetrico)
- Form inputs: `6px`
- Quote box: nessun radius (nessun box, layout puro tipografico)
- Footer accordion: `4px`

### Note per la build (constraint emersi)

1. **Hero Cluster Fast NON usa video** in nessun caso. Niente background video su home, ncc-*, servizi, contatti, chi-siamo.
2. **Scroll-driven SOLO su tappe tour**. Niente parallax altrove, niente reveal on scroll su ogni elemento (banlist globale rispettata).
3. **Italic esclusivamente Cormorant**. DM Sans mai in italic.
4. **Terracotta è CTA-semantica E decorativa** (numerazione editoriale + drop-cap). Mai per body text.
5. **Verde ulivo NON è CTA**. Solo decorativo discreto.
6. **WhatsApp bottom-right persistente** su tutte le pagine. Bottone circolare 56px terracotta con icona custom (non SVG WhatsApp generic).
7. **Switcher lingua IT/EN sempre top-right** anche mobile (compatto, divider verticale tra lingue).
8. **Foto desaturate calde**. Filtro `saturate(0.85) brightness(1.02) contrast(1.05)` come baseline CSS per immagini editoriali. Mai filtri blu/freddi.
9. **Numerazione editoriale 01/02/03**: SOLO in destinazioni, tappe tour, sezioni con valore narrativo. NO numerazione su servizi, FAQ, testimonial (in testimonial l'01/02/03 è dentro lo switcher, non per ogni quote).
10. **Tagline brand (decisione cliente Chat 2)**: "*Eleganza da VIP, prezzi di mercato*" (IT) / "*VIP-style elegance at market prices*" (EN) — GSC dimostra zero query VIP/luxury/eleganza, NON è SEO-locked. Se preservata: estetizzata in Cormorant italic 18–20px sotto il logo wordmark hero. Se modificata/eliminata: decisione COPY.md.
