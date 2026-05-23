# SITEMAP.md — Sicily Driver Siracusa

## Pattern di progetto
**B — Migration SEO-preserving** su dominio invariato `ncctaxisiracusa.com`.
- 20 URL esistenti **preservate** con redirect 301 (eliminazione estensione `.php`, riorganizzazione EN sotto `/en/`), **stratificate per livello di preservation** in base ai dati GSC reali (vedi sezione D)
- 12 URL **nuove** additive (4 tour × 2 lingue + Wedding × 2 + Partner × 2)
- **Totale sito nuovo: 32 URL**

## Architettura informativa: doppio cluster

Il sito non ha un archetipo design unico. Le pagine si dividono in due cluster con comportamento, hero e densità diversi.

| Cluster | Logica | Pagine |
|---|---|---|
| **Fast** | Transfer-first, atmosfera sottomessa alla funzione, hero statica con search/CTA visibili, decisione razionale | Home (IT/EN), 4 pagine locali IT `/ncc-*`, 4 pagine locali EN `/en/driver-*`, Servizi IT/EN, Contatti IT/EN, Chi siamo IT/EN, Partner IT/EN |
| **Esperienziale** | Tour-first, atmosfera dominante, hero atmosferica con video loop + scroll-driven itinerario, decisione emotiva | Hub Tour IT/EN, Tour Barocco IT/EN, Tour Etna Premium IT/EN (nuovo), Tour Isola delle Correnti IT/EN (nuovo), Tour Dolce Vita Siracusa IT/EN (nuovo), Tour Silent Sailing IT/EN (nuovo), Wedding IT/EN (nuovo, sotto-purpose D nel form) |

---

## A) URL ESISTENTI da preservare (20 URL → 20 nuovi, tutti redirect 301)

### Italiano (10)

| URL vecchio | URL nuovo | Tipo | Cluster | Priorità SEO | Note |
|---|---|---|---|---|---|
| `/index.php` | `/` | Home | Fast | Alta | H1 + paragrafo intro keyword-dense + tagline brand `[PRESERVE]` |
| `/chi-siamo.php` | `/chi-siamo` | About | Fast (trust statica) | Bassa | Copy povero, candidato `[REFRESH]` con autorizzazione cliente |
| `/servizi.php` | `/servizi` | Hub servizi | Fast | Media | Paragrafo intro keyword-dense `[PRESERVE]` |
| `/tour-sicilia.php` | `/tour-sicilia` | Hub tour | Esperienziale | Alta | Paragrafo intro keyword-dense `[PRESERVE]` |
| `/tour-barocco.php` | `/tour-barocco` | Tour dedicato | Esperienziale | **Alta** | Prodotto "NEW" spinto dal cliente. H1 + paragrafo + FAQ `[PRESERVE]` |
| `/contatti.php` | `/contatti` | Contatti | Fast (conversion) | Bassa | Dati di contatto SEO-locked per natura |
| `/ncc-catania.php` | `/ncc-catania` | Locale SEO | Fast | **Alta** | H1 + paragrafo + FAQ + prezzi `[PRESERVE]` |
| `/ncc-noto.php` | `/ncc-noto` | Locale SEO | Fast | Alta | Idem |
| `/ncc-taormina.php` | `/ncc-taormina` | Locale SEO | Fast | **Alta** | Idem |
| `/ncc-ragusa.php` | `/ncc-ragusa` | Locale SEO | Fast | Media | Idem |

### Inglese (10) — specchio sotto `/en/`

| URL vecchio | URL nuovo | Tipo | Cluster | Priorità SEO | Note |
|---|---|---|---|---|---|
| `/index-en.php` | `/en` | Home EN | Fast | Alta | Idem IT, tagline EN `[PRESERVE]` |
| `/chi-siamo-en.php` | `/en/about` | About | Fast | Bassa | Idem IT |
| `/servizi-en.php` | `/en/services` | Hub servizi | Fast | Media | Paragrafo intro EN `[PRESERVE]` |
| `/tour-sicilia-en.php` | `/en/sicily-tours` | Hub tour | Esperienziale | Alta | Paragrafo intro EN `[PRESERVE]` |
| `/tour-barocco-en.php` | `/en/baroque-tour` | Tour dedicato | Esperienziale | **Alta** | Volume internazionale "baroque tour Sicily". `[PRESERVE]` |
| `/contatti-en.php` | `/en/contact` | Contatti | Fast | Bassa | **Fix bug**: oggi link rotto dalla home EN che punta a `/contact-en.php` |
| `/driver-catania.php` | `/en/driver-catania` | Locale SEO | Fast | **Alta** | "Catania airport transfer" volume internazionale. `[PRESERVE]` |
| `/driver-noto.php` | `/en/driver-noto` | Locale SEO | Fast | Alta | `[PRESERVE]` |
| `/driver-taormina.php` | `/en/driver-taormina` | Locale SEO | Fast | Alta | `[PRESERVE]` |
| `/driver-ragusa.php` | `/en/driver-ragusa` | Locale SEO | Fast | Media | `[PRESERVE]` |

### Vincoli redirect
- Tutti **301 permanenti**, mai 302
- Estensione `.php` rimossa, struttura EN specchio sotto `/en/`
- H1 + paragrafi intro keyword-dense + FAQ + prezzi **letterali** dal copy esistente (polish tipografico ammesso, zero rewording semantico)

---

## B) URL NUOVE proposte (12 URL, 6 coppie IT/EN)

Tutte coerenti col Concept Diario Mediterraneo. Le 5 pagine tour sono in Cluster Esperienziale; Partner è in Cluster Fast (editoriale di prova sociale, no booking). **Nessuna sostituisce contenuto esistente** — additive, zero rischio SEO.

| URL nuovo IT | URL nuovo EN | Tipo | Cluster | Priorità | Motivazione |
|---|---|---|---|---|---|
| `/tour/etna-premium` | `/en/tour/etna-premium` | Tour dedicato | Esperienziale | **Massima** | Oggi solo bullet in `/tour-sicilia`. Keyword "Etna tour Sicily" + "Etna wine tour from Taormina" volume internazionale alto. Tour cliente con partner cantine (Benanti, Palmeri) — alto valore percepito |
| `/tour/isola-delle-correnti` | `/en/tour/isola-delle-correnti` | Tour dedicato | Esperienziale | Alta | Tour full day costa sud, partner Pura Vida Beach Club. Keyword niche "Isola delle Correnti tour", bassa concorrenza |
| `/tour/dolce-vita-siracusa` | `/en/tour/dolce-vita-siracusa` | Tour dedicato | Esperienziale | Alta | Tour Fiat 500 Spiaggina d'epoca in Ortigia, 3h. Tour icona del brand, fortissima fotogenia per Instagram + immaginario "La Dolce Vita". Keyword "Fiat 500 tour Sicily" |
| `/tour/silent-sailing` | `/en/tour/silent-sailing` | Tour dedicato | Esperienziale | Alta | Vela privata 4h, partner Fratelli Burgio. Keyword "Sicily sailing tour", "Ortigia boat tour" volume internazionale |
| `/wedding` | `/en/weddings` | Servizio dedicato | Esperienziale + Fast nel form | Media | Servizio dedicato matrimoni. 6 auto d'epoca tutte revisionate (differenziatore unico) + navetta ospiti + borghi consigliati come consulenza insider. Form qualifying esteso (sotto-purpose D). Mercato da creare, nessuna keyword wedding nelle 168 query GSC analizzate |
| `/partner` | `/en/partners` | Editoriale | Fast | Bassa | Pagina di prova sociale curata: Pura Vida Beach Club, Fratelli Burgio, Cantina Benanti, Cantina Palmeri. Posizionamento "non sponsor, ma posti scelti", non SEO target |

### Verifiche da fare col cliente prima di Chat 2
- **Wedding**: cliente conferma servizio attivo + 6 auto d'epoca + navetta ospiti. Portfolio matrimoni reali con liberatorie sposi → **da verificare con Enzo**: se sì galleria mosaico, se no sezione galleria si rimuove
- **Foto tour nuovi**: cliente conferma uso di **AI image generation** (Nano Banana Pro / FLUX.2) per i 4 tour nuovi, con riferimenti alle foto che ha condiviso su WhatsApp (tramonti, vela, atmosfera Pura Vida). Da pianificare prompt JSON in Chat 2
- **URL Google Business Profile** di Enzo: necessario per il campo `sameAs` schema.org della home — chiedere a Enzo l'URL completo del GBP prima del go-live

---

## C) URL NON aggiunte (e perché)

Per trasparenza, opzioni considerate e scartate:

| Pagina considerata | Esito | Perché |
|---|---|---|
| `/tour-ortigia-taormina` + `/en/ortigia-taormina-tour` | **Scartata** | Era prevista nel vecchio piano (chat di maggio). Decisione cliente: i 5 tour confermati da Enzo (Isola delle Correnti / Dolce Vita Siracusa / Silent Sailing / Etna Premium / Barocco) coprono Ortigia in modo diverso (Dolce Vita in Fiat 500 + Silent Sailing in vela). Tour Ortigia-Taormina dedicato ridondante |
| `/business` o `/aziendale` dedicata | **Non aggiunta** | Volume ricerca basso, copy thin. Resta sezione interna in `/servizi` |
| `/flotta` dedicata | **Non aggiunta** | Poco visitata se separata. Le 3 schede veicolo (Classe V / GLB / E) vivono come sezione interna in pagine locali e `/servizi` |
| Micro-landing tipo `/transfer-catania-taormina`, `/transfer-catania-ortigia` | **Non aggiunte** | Keyword fortissime ma rischio "doorway pages" / Google declassa. Integrate come H2 interno in `/ncc-taormina`, `/ncc-noto`, ecc |
| `/blog` o `/news` | **Non aggiunta** | Cliente non aggiorna mai (briefing chiaro). Blog vuoto fa più danno che bene |

---

## D) Stratificazione preservation chirurgica (basata su dati GSC 7 mesi)

L'analisi GSC bassa stagione (feb-mag 2026) + alta stagione (giu-set 2025) ha rivelato che le 20 URL esistenti non sono tutte ugualmente "vive". Stratificazione operativa:

### Categoria 1 — PRESERVE FORTE (7 URL con click reali)

Queste 7 URL portano il **96% del traffico organico**. Vincolo massimo di preservation: H1 + paragrafi intro + FAQ + prezzi **letterali**, polish tipografico ammesso.

| URL vecchio | URL nuovo | Click 7m | Note |
|---|---|---|---|
| `/index.php` | `/` | **111** | 62% del traffico totale. Title/H1 da raffinare, paragrafo intro keyword-dense `[PRESERVE]` letterale |
| `/index-en.php` | `/en` | **28** | Home EN, secondo URL più cliccato |
| `/chi-siamo-en.php` | `/en/about` | 9 | CTR alto (4.65%) — title `[PRESERVE]` |
| `/tour-barocco.php` | `/tour-barocco` | 5 | **STAR**: CTR 25% in bassa stagione. Pattern da copiare nei nuovi tour. H1/paragrafo/FAQ tutto `[PRESERVE]` letterale |
| `/driver-noto.php` | `/en/driver-noto` | 3 | Pagina locale EN che converte |
| `/ncc-noto.php` | `/ncc-noto` | 2 | Unica pagina ncc-* IT con click |
| `/servizi-en.php` | `/en/services` | 2 | Hub servizi EN |

### Categoria 2 — REFRESH METADATA (4 URL: impressioni alte ma 0 click → problema title/desc)

Queste URL hanno volume ma metadata scadenti. **URL preservata, ma title/meta description riscritti in COPY.md** per migliorare CTR.

| URL vecchio | URL nuovo | Impressioni 7m | Diagnosi |
|---|---|---|---|
| `/tour-sicilia.php` | `/tour-sicilia` | 135 | Hub tour IT, posizione 10.84, CTR 0%. Title scadente — rifare |
| `/contatti-en.php` | `/en/contact` | 110 | Title da rifare EN |
| `/driver-catania.php` | `/en/driver-catania` | 58 | Posizione 6.93 (ottima), CTR 0% — rifare title urgente, raggiungibile pagina 1 |
| `/tour-barocco-en.php` | `/en/baroque-tour` | 41 | **Anomalia**: versione IT ha CTR 25%, EN ha 0%. Title/desc EN da rifare copiando pattern IT |

### Categoria 3 — PLACEHOLDER LEGGERE (9 URL: morte o quasi)

URL preservate per **coerenza struttura e parallelismo IT/EN**, ma senza investimento SEO. Contenuti riscritti liberamente, pagine minimali.

| URL vecchio | URL nuovo | Impressioni 7m | Strategia |
|---|---|---|---|
| `/servizi.php` | `/servizi` | 26 | Hub servizi IT — riscrivi da zero |
| `/contatti.php` | `/contatti` | 8 | Riscrivi |
| `/chi-siamo.php` | `/chi-siamo` | 8 | Non appare in GSC bassa stagione — libertà piena |
| `/driver-ragusa.php` | `/en/driver-ragusa` | 3 | Contenuto leggero |
| `/ncc-taormina.php` | `/ncc-taormina` | 1 | Placeholder minimo |
| `/ncc-catania.php` | `/ncc-catania` | 1 | Placeholder minimo |
| `/ncc-ragusa.php` | `/ncc-ragusa` | 0 | Placeholder minimo |
| `/driver-taormina.php` | `/en/driver-taormina` | 0 | Placeholder minimo |
| `/tour-sicilia-en.php` | `/en/sicily-tours` | 0 | Hub tour EN — riscrivi da zero |

**Implicazione per Chat 2 COPY.md**: i 4 marcatori (`[PRESERVE]` / `[POLISH]` / `[REFRESH]` / `[NEW]`) si applicano in modo asimmetrico per categoria — Categoria 1 = `[PRESERVE]` dominante, Categoria 2 = `[REFRESH]` su metadata + `[PRESERVE]` su body, Categoria 3 = `[NEW]` libero.

---

## E) Sitemap.xml + robots.txt (per fase implementativa Chat 2)

### Priorità nel sitemap.xml
- **1.0**: `/`, `/en`
- **0.9**: tutte le pagine locali Categoria 1 (`/ncc-noto`, `/en/driver-noto`), `/tour-barocco`, `/en/baroque-tour`, `/tour/etna-premium`, `/en/tour/etna-premium`, `/wedding`, `/en/weddings`
- **0.8**: altri 3 tour nuovi (Isola delle Correnti, Dolce Vita Siracusa, Silent Sailing × 2 lingue), `/tour-sicilia`, `/en/sicily-tours`, `/servizi`, `/en/services`, pagine Categoria 2 (`/en/driver-catania`, `/en/contact`)
- **0.6**: `/chi-siamo`, `/en/about`, `/contatti`, `/partner`, `/en/partners`
- **0.4**: pagine Categoria 3 placeholder (`/ncc-catania`, `/ncc-taormina`, `/ncc-ragusa`, `/en/driver-taormina`, `/en/driver-ragusa`)

### `hreflang` per ogni URL IT/EN
Esempio:
```html
<link rel="alternate" hreflang="it" href="https://ncctaxisiracusa.com/tour-barocco">
<link rel="alternate" hreflang="en" href="https://ncctaxisiracusa.com/en/baroque-tour">
<link rel="alternate" hreflang="x-default" href="https://ncctaxisiracusa.com/tour-barocco">
```

### Robots.txt
Standard, sitemap dichiarato, no blocchi.

### Verifiche da fare prima del go-live (post Chat 2)
- [x] Search Console connesso (accesso disponibile, dati 7 mesi analizzati)
- [ ] Esistenza sitemap.xml e robots.txt attuali (per cross-check)
- [ ] **Sitemap.xml nuovo inviato a GSC il giorno del cutover DNS** (obbligatorio)
- [ ] **GA4 installato nuovo** (assumere che il sito attuale non abbia analytics — da verificare con Enzo)
- [ ] **URL Google Business Profile di Enzo** per il campo `sameAs` schema.org della home
- [ ] Backlink profile attuale (Ahrefs / Semrush) — verifica trasferimento link juice ai 7 URL Categoria 1
- [ ] Performance Core Web Vitals baseline pre-migration
- [ ] **Test 301 funzionanti per tutti i 20 redirect prima del DNS cutover** (priorità assoluta sui 7 URL Categoria 1)
- [ ] Verifica **assenza di `noindex` o `disallow` nel robots.txt** di produzione (errore comune)
- [ ] **Monitor settimanale GSC** delle 5 query top per le prime 6 settimane post-go-live: `ncc siracusa`, `taxi siracusa`, `sicily driver`, `taxi syracuse`, `transfer siracusa`
