# DESIGN.md (ASTRATTO) — Sicily Driver Siracusa

> ⚠️ Questo file è **astratto**. Le scelte concrete (palette hex, font esatti, componenti specifici, layout fini) vivono nel passaggio successivo: **Intermezzo Design su Claude Code via `/nexus-design`**.
> Prima di Chat 2 CONTENUTI, questo file viene aggiornato con la sezione "Scelte concrete approvate".

---

## Pattern di progetto
**B — Migration SEO-preserving** su dominio invariato `ncctaxisiracusa.com`. Cliente acquisito (non prospect), con set SEO locale già funzionante che va preservato integralmente. Search Console non disponibile al momento → tutte le 20 URL esistenti sono trattate come "preserve by default" con redirect 301.

## Purpose primario
- **Categoria**: A — Conversion
- **Motivazione**: il visitatore tipo (turista in fase decisionale) arriva per fare un'azione — prenotare un transfer urgente o un tour Barocco/Etna. Il brand display "Sicily Driver Siracusa" e il dominio `ncctaxisiracusa.com` parlano entrambi a chi sta già scegliendo, non a chi sta scoprendo. Tutto il copy esistente è strutturato per intercettare ricerche transazionali ("transfer Catania Siracusa", "NCC Noto", "baroque tour Sicily").
- **Sub-purpose secondario presente solo sulla pagina Wedding & Eventi**: D — Lead qualification (form esteso con qualifying fields). Non condiziona il design del resto del sito.

## Target principale
- **Chi**: in ordine di volume previsto, turista internazionale (US/UK/EU del Nord) 35–65 in viaggio in Sicilia orientale (coppie e famiglie); turista italiano in Val di Noto stessa fascia; sotto-segmento wedding/luxury e business
- **Dispositivo prevalente**: **mobile dominante** (turista che cerca dal telefono in hotel, aeroporto, lounge), desktop in pianificazione pre-partenza
- **Urgenza**: **doppia velocità coesistente**. Transfer aeroporto → alta (booking 2-24h prima). Tour Barocco/Etna → bassa (valutazione 1-3 mesi prima)
- **Lingua/cultura**: 50/50 IT/EN nativo, sito EN trattato come gemello completo non come fallback

## Concept scelto
- **Nome**: Diario Mediterraneo
- **Mood in 3 parole**: caldo, autentico, editoriale
- **Tono di voce**: italiano narrativo prima persona ("ti veniamo a prendere all'aeroporto, ti portiamo a Noto"), niente corporate, niente "VIP/luxury/exclusive" come stile di linguaggio (la tagline brand SEO-locked è eccezione preservata)

## Direzione estetica (astratta, da raffinare con `/nexus-design`)

- **Approccio hero**: **dipende dal cluster di pagine** (vedi "Archetipo animazione")
  - Cluster Fast (home, pagine locali, servizi, contatti, chi siamo) → hero **informativa con atmosfera**: foto reale statica + headline serif italica overlay + search/CTA visibili sopra la piega
  - Cluster Esperienziale (hub tour, tour dedicati, wedding) → hero **atmosferica cinematica**: video loop muto 10s + tipografia editoriale ampia + CTA scroll-down sottile
- **Approccio servizi**: **visivo-editoriale con warm color blocking**. Ogni macro-servizio ha personalità cromatica distinta (4 card con tonalità calde diverse, asimmetria editorial, mai grid 2×2 rigido)
- **Approccio testimonianze**: **statico con numerazione editoriale tipografica grande (01 / 02 / 03)**. Quote brevi + nome + città di provenienza (es. Berlin / Milano / London). Mobile swipe ammesso. **Nota condizionale**: se il cliente non fornisce recensioni utilizzabili, la sezione si trasforma in "Numerazione editoriale dei differenziatori" mantenendo il pattern visivo
- **Approccio fotografico**: realistico fotografico desaturato caldo, dettagli mediterranei autentici (pietra calcarea, calce, mare di Ortigia, ulivo, barocco di Noto al tramonto) + interni Mercedes inquadrati come oggetto di design familiare, mai come prodotto in vetrina. Mai stock photography generica. Mai illustrazioni
- **Atmosfera tipografica**: **serif italico/editorial per H1/H2/quote/storytelling tour** (è la chiave emotiva del concept) + **sans neutro pulito per UI/body/label/prezzi**. Un solo serif, un solo sans. Nessun terzo font
- **Atmosfera cromatica**: cream calde + blu mare profondo + accento terracotta/coral. Desaturate, mediterranee, autentiche. **Mai oro metallico, mai dorature, mai colorblocking giocoso playful**
- **Energia CTA**: **dominante ma vestita editorialmente** (pillole arrotondate con colore accent caldo, contrast alto sul cream, dimensioni assertive senza essere "BUY NOW" aggressivo). Coerente con purpose A: niente whisper CTA, niente CTA sottolineati editorial-only

## Archetipo animazione

⚠️ **Mix non standard, motivato**: questo cliente non si lascia incasellare in un singolo archetipo A/B/C/D. Il design system applica due archetipi diversi per **cluster di pagine**:

| Cluster | Archetipo dominante | Pagine |
|---|---|---|
| **Cluster Fast** | A 70% + B 30% | `/`, `/en`, 4 pagine `/ncc-*` IT, 4 pagine `/en/driver-*`, `/servizi`, `/en/services`, `/contatti`, `/en/contact`, `/chi-siamo`, `/en/about` |
| **Cluster Esperienziale** | B 70% + C 30% | `/tour-sicilia`, `/en/sicily-tours`, `/tour-barocco`, `/en/baroque-tour`, `/tour-etna`, `/en/etna-tour`, `/tour-ortigia-taormina`, `/en/ortigia-taormina-tour`, `/wedding-eventi`, `/en/weddings` (la pagina wedding è esperienziale ma con sezione booking Fast) |

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
- No "VIP transfer" come headline (sopravvive solo nella tagline brand SEO-locked, estetizzata col serif italico)

### Riferimenti culturali siciliani da evitare
- No coppola, no cannolo, no pizzo merletto, no ceramiche di Caltagirone come pattern decorativo
- No "Inspector Montalbano" letterale (no commissariato, no torta di mandorle in close-up): l'estetica del barocco siciliano c'è, la citazione no
- No folklore caricaturale (no posa in costume, no scena teatrale "siciliana"), no Etna iconica come logo decorativo

## Direzione per Claude Code

### Tono generale del codice
**Editoriale-calmo con energia conversion alta sui CTA**. Il codice deve produrre un sito che si legge come una rivista di viaggio italiana di qualità, dove però i CTA sono inequivocabilmente cliccabili e prominenti. Non è "Cereal Magazine puro" (perderemmo la conversion), non è "Booking.com" (perderemmo l'anima).

### Filtri obbligatori da rispettare
- **Purpose A → energia CTA dominante** in ogni pagina, anche quelle Esperienziali
- **Cluster Fast → no video loop, no scroll-driven**, hero statica
- **Cluster Esperienziale → video loop hero + scroll-driven solo sull'itinerario**
- **Tipografia: serif italico esclusivamente per H1/H2/quote/storytelling**, mai per UI/label/prezzi
- **Tagline brand SEO-locked**: "Eleganza da VIP, prezzi di mercato" (IT) / "VIP-style elegance at market prices" (EN) — preservare letterale ma estetizzare col serif italico (NON cambiare le parole)
- **EN trattato come gemello dell'IT**, mai come fallback. Switcher lingua sempre top-right, scambia tra URL gemelle
- **WhatsApp persistente in basso a destra** su tutte le pagine (preserva comportamento sito attuale)
- **Mobile-first vero**: le decisioni di hierarchy e densità si testano prima sul mobile

### Cosa Claude Code DEVE proporre nell'Intermezzo `/nexus-design`

1. **3 direzioni palette concrete** (hex specifici) compatibili con: cream calde + blu mare profondo + accent terracotta/coral, desaturate mediterranee, mai oro
2. **3 direzioni tipografia concrete** (font specifici per serif italico + sans neutro) compatibili con: editorial italian feel, NO Inter/Roboto/monospace/script. Esempi di direzione: GT Sectra / Tiempos / Reckless / Domaine Display per il serif; Söhne / Aktiv Grotesk / GT Walsheim / Inter Tight per il sans (Claude Code valuta su `ui-ux-pro-max` font pairings ranked)
3. **3 direzioni componenti CTA** (forme, dimensioni, comportamenti hover) tutte di energia dominante coerente col purpose A: pillole arrotondate vs rettangolari editorial vs filled high-contrast
4. **3 direzioni macro-layout per la sezione "Dove ti portiamo" della home** (warm color blocking 4 card): card colorate piene vs card con foto + accent color border vs card asimmetrico-editorial magazine
5. **3 direzioni macro-layout per la sezione "Tappa per tappa" delle pagine tour** (scroll-driven sticky): foto+testo split alternato vs full-bleed con testo overlay vs orizzontale snap (più semplice da implementare)

## Scelte concrete approvate

> Questa sezione viene **compilata da Claude Code dopo `/nexus-design`**.
> Lasciare vuota in questa fase. Compilata dopo l'Intermezzo Design.

- [ ] Palette hex specifici
- [ ] Font specifici (serif + sans)
- [ ] Componenti CTA selezionati
- [ ] Layout sezione servizi
- [ ] Layout sezione tappa-per-tappa tour
- [ ] Layout sezione testimonial (numerazione editoriale)
- [ ] Spacing system
- [ ] Border radius system
