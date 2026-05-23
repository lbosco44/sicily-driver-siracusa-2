# SEO.md — Sicily Driver Siracusa

> **Pattern B — Migration SEO-preserving**.
> Questo documento NON è una keyword research da zero. È un documento di preservazione: dump metadata esistenti, mappa keyword posizionate, redirect plan e schema markup mancante. Riferimento dati: Google Search Console 7 mesi (giu-set 2025 alta stagione + feb-mag 2026 bassa stagione).
> Dominio invariato: `ncctaxisiracusa.com`. Brand display: "Sicily Driver Siracusa".

---

## 0. Sintesi operativa (per chi non legge il file intero)

- **77 click totali alta stagione** (giu-set 2025), **3.671 impressioni**. Volume basso ma SEO funzionante a piccola scala — fragile, ogni preservation va presa sul serio.
- **7 URL portano il 96% del traffico**: home IT (61), home EN (13), chi-siamo-en (2), tour-barocco IT (5 stagionali), driver-noto (3), ncc-noto (2), servizi-en (2). Tutto il resto raccoglie briciole.
- **Opportunità grandissima Categoria 2**: 4 URL hanno impressioni alte ma 0 click → title/meta description scadenti. Refresh metadata = guadagno di click senza rischio sui ranking.
  - `sicily driver` 149 imp pos **5.28** CTR 0% (home EN) — la più drammatica
  - `tour-sicilia.php` 135 imp pos 10.84 CTR 0%
  - `contatti-en.php` 110 imp CTR 0%
  - `driver-catania.php` 58 imp pos 6.93 CTR 0%
  - `tour-barocco-en.php` 41 imp CTR 0% (mentre la versione IT ha CTR 25%)
- **GBP è il vero motore lead** (Enzo riceve la maggior parte via Google Business Profile). Senza `sameAs` GBP nello schema home, il sito è scollegato dalla sua principale fonte di autorevolezza.
- **5 query top da monitorare nelle 6 settimane post-cutover**: `ncc siracusa`, `taxi siracusa`, `sicily driver`, `taxi syracuse`, `transfer siracusa`.

---

## 1. Dump dei meta tag esistenti (baseline da preservare o migliorare)

> Sintesi dei `<title>` e `<meta description>` attuali estratti via web fetch del sito live. Dove il dato non è recuperabile (es. description mancante), è annotato `[ASSENTE]`.

### 1.1 Italiano (10 URL)

| URL vecchio | `<title>` attuale | `<meta description>` attuale | H1 attuale | Stato |
|---|---|---|---|---|
| `/index.php` | "Sicily Driver Siracusa" (generico — da migliorare nel sito nuovo) | `[ASSENTE / non recuperabile]` | "Sicily Driver Siracusa" + sotto H2 "NCC a Siracusa: Transfer Aeroportuali, Tour Privati & Servizio VIP in Sicilia" | **Categoria 1 — preserve forte**: il body (paragrafo intro keyword-dense + FAQ) è il vero asset, il title si può migliorare. |
| `/chi-siamo.php` | "Sicily Driver Siracusa" (idem) | `[ASSENTE]` | "Chi Siamo \| Sicily Driver Syracuse" (testo nel body, non veramente H1) | **Categoria 3 — placeholder**: 0 click in 7 mesi, libertà di riscrittura. |
| `/servizi.php` | "Sicily Driver Siracusa" | `[ASSENTE]` | "I nostri Servizi" | **Categoria 3 — placeholder**: 26 imp / 0 click. |
| `/tour-sicilia.php` | "Sicily Driver Siracusa" | `[ASSENTE]` | "Tour Sicilia con Autista Privato" | **Categoria 2 — refresh metadata**: 135 imp pos 10.84 CTR 0%. Title da rifare urgente con keyword "Tour Sicilia con autista privato \| Da Siracusa, Noto, Catania". |
| `/tour-barocco.php` | "Sicily Driver Siracusa" | `[ASSENTE]` | "Tour del Barocco: Noto, Modica & Ragusa in un Giorno" | **Categoria 1 — preserve forte**: H1 LETTERALE non si tocca, è la frase con CTR 25%. Title da rifare con la stessa formula H1. |
| `/contatti.php` | "Sicily Driver Siracusa" | `[ASSENTE]` | "Contattaci" | **Categoria 3 — placeholder**: 8 imp / 0 click. |
| `/ncc-catania.php` | "Sicily Driver Siracusa" | `[ASSENTE]` | "NCC Catania – Transfer Aeroporto e Autista Privato" | **Categoria 3 — placeholder**: 1 imp / 0 click in bassa stagione, ma H1 ricco di keyword, è da PRESERVARE letterale. |
| `/ncc-noto.php` | "Sicily Driver Siracusa" | `[ASSENTE]` | "NCC Noto – Transfer Privati e Tour Barocco" | **Categoria 1 — preserve forte**: 2 click. H1 letterale. |
| `/ncc-taormina.php` | "Sicily Driver Siracusa" | `[ASSENTE]` | "NCC Taormina – Transfer di Lusso e Tour Etna" | **Categoria 3 — placeholder**: 1 imp / 0 click, ma H1 ricco preserva. |
| `/ncc-ragusa.php` | "Sicily Driver Siracusa" | `[ASSENTE]` | "NCC Ragusa – Transfer Privati e Servizio con Conducente" | **Categoria 3 — placeholder**: 0 imp / 0 click, H1 preserva. |

### 1.2 Inglese (10 URL)

| URL vecchio | `<title>` attuale | `<meta description>` attuale | H1 attuale | Stato |
|---|---|---|---|---|
| `/index-en.php` | "Sicily Driver Siracusa" | `[ASSENTE]` | "Sicily Driver Syracuse" + H2 "NCC in Syracuse: Airport Transfers, Private Tours & VIP Service in Sicily" | **Categoria 1 + 2 — preserve forte + refresh metadata urgentissimo**: 13 click ma `sicily driver` ha 149 imp pos 5.28 CTR 0%. Body PRESERVA letterale, title/desc RIFACI. |
| `/chi-siamo-en.php` | "Sicily Driver Siracusa" | `[ASSENTE]` | "About Us \| Sicily Driver Syracuse" | **Categoria 1 — preserve forte**: 2 click + CTR 4.65%. Lock body. |
| `/servizi-en.php` | "Sicily Driver Siracusa" | `[ASSENTE]` | "Our Services" | **Categoria 1 + 2 — refresh metadata**: 2 click, 14 imp, ma pos 54 — title da rifare. |
| `/tour-sicilia-en.php` | "Sicily Driver Siracusa" | `[ASSENTE]` | (non recuperato in fetch — pagina esiste ma poco indicizzata) | **Categoria 3 — placeholder**: 0 imp in bassa stagione, libertà di riscrittura. |
| `/tour-barocco-en.php` | "Sicily Driver Siracusa" | `[ASSENTE]` | "Baroque Tour: Noto, Modica & Ragusa in One Day" | **Categoria 2 — refresh metadata UR­GEN­TE**: 41 imp pos 13.2 CTR 0% mentre IT ha CTR 25%. Anomalia metadata da fixare. Body preserva, title rifa con la stessa formula della versione IT. |
| `/contatti-en.php` | "Sicily Driver Siracusa" | `[ASSENTE]` | "Contact" | **Categoria 2 — refresh metadata**: 110 imp CTR 0%. Title rifa. |
| `/driver-catania.php` | "Sicily Driver Siracusa" | `[ASSENTE]` | "Private Driver Catania – Airport Transfer & Chauffeur Service" | **Categoria 2 — refresh metadata UR­GEN­TE**: 58 imp pos 6.93 CTR 0%. Posizione 7, raggiungibile pagina 1 con un title decente. H1 preserva. |
| `/driver-noto.php` | "Sicily Driver Siracusa" | `[ASSENTE]` | "Private Driver Noto – Transfers & Baroque Tour" | **Categoria 1 — preserve forte**: 3 click, ottimo. H1 letterale. |
| `/driver-taormina.php` | "Sicily Driver Siracusa" | `[ASSENTE]` | "Private Driver Taormina – Luxury Transfers & Etna Tour" (struttura assunta — verifica nel fetch finale pre-cutover) | **Categoria 3 — placeholder**: 0 imp / 0 click. |
| `/driver-ragusa.php` | "Sicily Driver Siracusa" | `[ASSENTE]` | "Private Driver Ragusa – Transfers & Chauffeur" (struttura assunta) | **Categoria 3 — placeholder**: 3 imp / 0 click. |

### 1.3 Bug del sito attuale da fixare al go-live (segnalati anche in WIREFRAME)

- `/index-en.php` → CTA "Contact Us Now" punta a `/contact-en.php` (404, URL inesistente). Deve puntare a `/en/contact`.
- `/chi-siamo-en.php` → CTA "Contact Us" punta a `/contact.php` (404). Deve puntare a `/en/contact`.
- `/servizi-en.php` → link "Explore our suggested itineraries" punta a `/sicily-tours.php` (404). Deve puntare a `/en/sicily-tours`.
- Nessuna `<meta description>` definita su nessuna pagina. **Tutti i 32 URL del sito nuovo riceveranno meta description scritte da zero in COPY.md**.
- Nessun titolo `<title>` differenziato per pagina (tutti dicono "Sicily Driver Siracusa"). **Tutti i 32 URL del sito nuovo riceveranno title differenziati keyword-rich in COPY.md**.
- Nessun OG/Twitter Card. Da generare tutto.
- Nessuno schema.org JSON-LD rilevato sulle pagine (verifica con vista sorgente in pre-cutover). Da aggiungere `LocalBusiness` + `FAQPage` + `TouristTrip`.

---

## 2. Lista keyword posizionate (dati GSC 7 mesi)

### 2.1 Keyword critiche IT — non perdere ranking

Soglia: query con almeno 1 click negli ultimi 7 mesi OR posizione media < 20 con almeno 30 impressioni.

| Query | Click | Impressioni | CTR | Pos. media | URL ranking | Strategia |
|---|---|---|---|---|---|---|
| `taxi siracusa` | 4 | 112 | 3.57% | 6.03 | `/` | **PRESERVE FORTE**: pos 6, target pagina 1 stabile. H1 home e paragrafo intro letterali. |
| `transfer siracusa` | 2 | 25 | 8% | 28.16 | `/` | **TARGET CRESCITA**: CTR alto 8%, pos 28 indica title intercetta query ma pagina non rilevante. Migliorare title per pagina 1. |
| `ncc siracusa` | 2 | 430 | 0.47% | 54.33 | `/` | **TARGET CRESCITA + REFRESH METADATA**: 430 impressioni in 7 mesi su pos 54. La query c'è ma il sito è in fondo. Tema cruciale del brand — il dominio stesso si chiama `ncctaxisiracusa.com`. Title home da scrivere "NCC Siracusa..." (keyword in apertura). |
| `taxi sicily` | 1 | 38 | 2.63% | 3.08 | `/` | **PRESERVE FORTE**: pos 3 ottima. |
| `sicily taxi` | 1 | 14 | 7.14% | 4.79 | `/` | **PRESERVE FORTE**: pos 5 ottima, CTR 7%. |
| `sicilia taxi` | 1 | 1 | 100% | 21 | `/` | Volume basso, monitor. |
| `taxi privato a siracusa` | 0 | 169 | 0% | 28.51 | `/` | **REFRESH METADATA**: 169 imp / 0 click. Title attuale è "Sicily Driver Siracusa" generico. Nuovo title deve contenere "taxi privato Siracusa". |
| `sicily vip transfer` | 0 | 60 | 0% | 58.15 | `/` | Volume basso, posizione bassa, **decisione strategica**: cliente ha scelto di NON puntare su "VIP" (vedi nota tagline brand). Lascia decadere. |
| `noleggio con conducente siracusa` | 0 | 10 | 0% | 66 | `/` | Long-tail formal. Aggiungi nel paragrafo body home. |
| `taxi siracusa 24 ore` | 0 | 8 | 0% | 2 | `/` | **PRESERVE FORTE pos 2**, 0 click solo per low volume. |
| `taxi siracusa numero` | 0 | 8 | 0% | 4.12 | `/` | Pos 4 ottima. Telefono in alto nel sito assicura conversione su queste query. |
| `taxi vicino a me` | 0 | 16 | 0% | 10.62 | `/` | Long-tail geo Google decide il match. Nessuna azione richiesta. |
| `taxi fontane bianche` | 0 | 10 | 0% | 3.2 | `/` | Pos 3, micro-volume. Aggiungi "Fontane Bianche" tra le aree servite in `/servizi`. |
| `taxi siracusa fontane bianche` | 0 | 3 | 0% | 2 | `/` | Idem. |

### 2.2 Keyword critiche EN — non perdere ranking

| Query | Click | Impressioni | CTR | Pos. media | URL ranking | Strategia |
|---|---|---|---|---|---|---|
| `taxi syracuse` | 3 | 218 | 1.38% | 5.07 | `/` o `/index-en.php` | **PRESERVE FORTE**: pos 5 con grande volume EN. La query principale del pubblico americano. Title EN home DEVE contenere "Taxi Syracuse". |
| `sicily driver` | 0 | 149 | 0% | 5.28 | `/index-en.php` | **REFRESH METADATA URGENTE**: pos 5.28 con 149 impressioni e ZERO click. Il problema più drammatico del sito. Title attuale "Sicily Driver Siracusa" non spinge la query. Nuovo title: "Sicily Driver Syracuse — Private NCC & Airport Transfers in Sicily". |
| `syracuse taxi` | 1 | 53 | 1.89% | 5.85 | `/index-en.php` | **PRESERVE FORTE**: pos 6 ottima. |
| `taxi sicily` | 1 | 38 | 2.63% | 3.08 | `/` | Doppio match IT/EN, pos 3 globale. |
| `taxi service` | 1 | 6 | 16.67% | 2.5 | `/index-en.php` | CTR 17% pos 2. Mantenere "taxi service" nel title EN home. |
| `taxi company near me` | 1 | 5 | 20% | 2.2 | `/index-en.php` | CTR 20%. Google geo-locked match. |
| `taxi syracuse italy` | 0 | 32 | 0% | 4.59 | `/index-en.php` | **PRESERVE FORTE pos 5**. Aggiungi "Italy" o "Sicily, Italy" in title EN home. |
| `syracuse sicily airport` | 0 | 33 | 0% | 11.64 | `/index-en.php` | Long-tail aeroporto, pos 12. Migliorare con "Catania Airport Transfer" in title `/en/driver-catania`. |
| `driver sicily` | 0 | 36 | 0% | 6.44 | `/index-en.php` | Pos 6, refresh metadata. |
| `sicily by car` | 0 | 15 | 0% | 4 | `/index-en.php` | Confonde con competitor `sicilybycar.com` (4 imp). Lasciare. |
| `syracuse italy airport` | 0 | 20 | 0% | 21.1 | `/index-en.php` | Aggiungi nel paragrafo `/en/driver-catania`. |
| `driver in sicily` | 0 | 13 | 0% | 9.15 | `/index-en.php` | Pos 9. |
| `tour barocco siciliano` | 0 | 1 | 0% | 101 | `/tour-barocco.php` | Pos 101 (probabilmente non è nemmeno in top 100 e il dato è anomalo). Long-tail bassa rilevanza. |
| `tour de ragusa modica y noto desde siracusa con conductor privado` | 0 | 1 | 0% | 75 | `/tour-barocco.php` | **Nota interessante**: query in spagnolo. Mercato latam piccolo ma presente. Non priorità ora. |

### 2.3 Keyword brand

| Query | Click | Impressioni | CTR | Pos. media | URL ranking | Strategia |
|---|---|---|---|---|---|---|
| `sicily driver` | 0 | 149 | 0% | 5.28 | `/index-en.php` | Vedi sopra — la più importante in assoluto da risolvere. |
| `sicilybycar` | 0 | 2 | 0% | 4 | `/` | Confusione con competitor. Non azione. |
| `sicilybycar` (varianti) | sporadici | bassi | 0% | varie | varie | Non controllabili. |

### 2.4 Keyword NON posizionate ma da costruire (URL nuove)

Le 12 URL additive (`/wedding`, `/partner`, `/tour/etna-premium`, `/tour/isola-delle-correnti`, `/tour/dolce-vita-siracusa`, `/tour/silent-sailing` + gemelle EN) non hanno keyword posizionate (sono nuove). Per ognuna l'obiettivo è creare title/H1/body keyword-rich da zero. Target keyword:

| URL nuova | Keyword target primaria | Long-tail secondari |
|---|---|---|
| `/tour/etna-premium` | "Etna tour da Siracusa" | "Etna wine tour from Siracusa", "Etna cantine Benanti Palmeri", "Etna quad e degustazione" |
| `/en/tour/etna-premium` | "Etna tour from Syracuse" | "Etna wine tour Sicily", "Mount Etna premium tour" |
| `/tour/isola-delle-correnti` | "Isola delle Correnti tour" | "Isola delle Correnti da Siracusa", "tour Marzamemi Isola delle Correnti" |
| `/en/tour/isola-delle-correnti` | "Isola delle Correnti tour" | "South Sicily beach day trip", "Pura Vida Beach Club Sicily" |
| `/tour/dolce-vita-siracusa` | "Tour Ortigia Fiat 500" | "tour Siracusa Fiat 500 d'epoca", "vintage Fiat 500 Ortigia" |
| `/en/tour/dolce-vita-siracusa` | "Fiat 500 tour Sicily" | "vintage Fiat 500 Ortigia Syracuse", "Dolce Vita Sicily tour" |
| `/tour/silent-sailing` | "tour in vela Siracusa" | "Ortigia vela privata", "tour barca Siracusa" |
| `/en/tour/silent-sailing` | "Sicily sailing tour" | "Ortigia boat tour", "private sailing Syracuse" |
| `/wedding` | "auto matrimonio Sicilia" | "auto d'epoca matrimonio Noto", "navetta ospiti matrimonio Sicilia", "wedding car Sicily" |
| `/en/weddings` | "wedding car Sicily" | "vintage wedding car Sicily", "wedding shuttle Sicily" |
| `/partner` | (non priorità SEO — pagina editoriale) | — |
| `/en/partners` | (non priorità SEO) | — |

---

## 3. Mappa URL → keyword principale + secondarie

> Per ogni URL del sito nuovo, una keyword primaria (sopra cui costruire title + H1) + 2-3 secondarie (da inserire nel body). Lo scopo è dare a Claude Code una mappa diretta per generare i title/desc.

### 3.1 Italiano

| URL nuova | Keyword primaria | Secondarie | Tipo |
|---|---|---|---|
| `/` | `ncc siracusa` + `taxi siracusa` | `transfer Catania Siracusa`, `tour Sicilia con autista`, `noleggio con conducente Siracusa`, `taxi siracusa 24 ore` | Categoria 1 preserve body + Refresh title |
| `/chi-siamo` | `chi siamo Sicily Driver Siracusa` (brand) | `NCC Siracusa Vincenzo Izzo`, `Mercedes Sicily driver Siracusa` | Categoria 3 placeholder |
| `/servizi` | `servizi NCC Siracusa` | `transfer privati Sicilia`, `noleggio con conducente eventi`, `flotta Mercedes Classe V GLB E` | Categoria 3 placeholder |
| `/tour-sicilia` | `tour Sicilia con autista privato` | `itinerari Sicilia su misura`, `tour barocco Etna Ortigia`, `Mercedes tour Sicilia` | Categoria 2 refresh metadata |
| `/tour-barocco` | `tour barocco Noto Modica Ragusa` | `tour del barocco in giornata`, `Val di Noto tour privato`, `Tour del Barocco Siciliano` | Categoria 1 preserve forte (CTR 25%) |
| `/tour/etna-premium` | `Etna tour da Siracusa` | `Etna wine tour`, `Etna quad e degustazione cantina`, `Cantina Benanti tour Etna` | URL nuova |
| `/tour/isola-delle-correnti` | `Isola delle Correnti tour` | `Marzamemi Isola delle Correnti`, `Pura Vida Beach Club Sicilia`, `tour costa sud Sicilia` | URL nuova |
| `/tour/dolce-vita-siracusa` | `tour Ortigia Fiat 500` | `Fiat 500 Spiaggina Siracusa`, `Ortigia in auto d'epoca`, `tour Siracusa romantico` | URL nuova |
| `/tour/silent-sailing` | `tour in vela Siracusa` | `Ortigia in barca a vela`, `vela privata Siracusa`, `tour Fratelli Burgio vela` | URL nuova |
| `/wedding` | `auto matrimonio Sicilia` | `auto d'epoca matrimonio Noto`, `navetta ospiti matrimonio Sicilia`, `wedding car Sicilia` | URL nuova |
| `/contatti` | `contatti Sicily Driver Siracusa` (brand + intent transazionale) | `prenota NCC Siracusa`, `WhatsApp Sicily Driver`, `numero taxi Siracusa` | Categoria 3 placeholder |
| `/ncc-catania` | `NCC Catania transfer aeroporto` | `transfer Catania Siracusa`, `taxi privato aeroporto Catania`, `autista privato Catania` | Categoria 1 preserve (H1) |
| `/ncc-noto` | `NCC Noto transfer privati` | `tour barocco da Noto`, `transfer aeroporto Noto`, `taxi privato Val di Noto` | Categoria 1 preserve forte (CTR reale) |
| `/ncc-taormina` | `NCC Taormina transfer di lusso` | `transfer Catania Taormina`, `tour Etna da Taormina`, `taxi Taormina aeroporto` | Categoria 3 ma H1 preserva |
| `/ncc-ragusa` | `NCC Ragusa servizio con conducente` | `transfer aeroporto Ragusa`, `tour barocco Ragusa Ibla`, `taxi privato Ragusa` | Categoria 3 ma H1 preserva |
| `/partner` | (non SEO target — pagina editoriale) | `partner Sicily Driver Siracusa` | URL nuova |

### 3.2 Inglese

| URL nuova | Keyword primaria | Secondarie | Tipo |
|---|---|---|---|
| `/en` | `taxi syracuse` + `sicily driver` | `private driver Sicily`, `airport transfer Syracuse`, `Sicily NCC service`, `Catania airport transfer` | Categoria 1 preserve body + Refresh metadata URGENTE |
| `/en/about` | `about Sicily Driver Syracuse` (brand) | `Sicily NCC company`, `Vincenzo Izzo Sicily driver` | Categoria 1 preserve forte (CTR 4.65%) |
| `/en/services` | `Sicily private driver services` | `airport transfer Catania Syracuse`, `private tours Sicily with driver`, `Mercedes chauffeur Sicily` | Categoria 1 + 2 refresh |
| `/en/sicily-tours` | `Sicily tour with private driver` | `private Sicily tours`, `custom Sicily itinerary driver`, `Baroque Etna Ortigia tour` | Categoria 3 placeholder, libertà |
| `/en/baroque-tour` | `baroque tour Sicily Noto Modica Ragusa` | `Sicilian Baroque tour in one day`, `Val di Noto private tour`, `Baroque day tour from Syracuse` | Categoria 2 refresh metadata URGENTE |
| `/en/tour/etna-premium` | `Etna tour from Syracuse` | `Etna wine tour Sicily`, `Etna quad and winery tour`, `Mount Etna premium experience` | URL nuova |
| `/en/tour/isola-delle-correnti` | `Isola delle Correnti tour Sicily` | `South Sicily beach day trip`, `Pura Vida Beach Club Sicily`, `Marzamemi Isola delle Correnti` | URL nuova |
| `/en/tour/dolce-vita-siracusa` | `Fiat 500 tour Sicily Ortigia` | `vintage Fiat 500 Syracuse`, `Dolce Vita Sicily tour`, `Ortigia in vintage Fiat` | URL nuova |
| `/en/tour/silent-sailing` | `Sicily sailing tour Ortigia` | `private sailing Syracuse`, `Ortigia boat tour Sicily`, `Silent Sailing Sicily` | URL nuova |
| `/en/weddings` | `wedding car Sicily` | `vintage wedding car Sicily`, `wedding shuttle Sicily`, `wedding transfer Sicily` | URL nuova |
| `/en/contact` | `contact Sicily Driver Syracuse` (brand) | `book NCC Sicily`, `Sicily taxi WhatsApp`, `Sicily driver phone number` | Categoria 2 refresh metadata |
| `/en/driver-catania` | `Catania airport transfer private driver` | `Catania Airport CTA taxi`, `Catania Syracuse transfer`, `private driver Catania` | Categoria 2 refresh metadata URGENTE |
| `/en/driver-noto` | `private driver Noto Baroque tour` | `Noto airport transfer`, `Val di Noto private driver`, `Noto Modica Ragusa tour` | Categoria 1 preserve forte (3 click) |
| `/en/driver-taormina` | `private driver Taormina Etna tour` | `Catania Taormina transfer`, `Etna tour from Taormina`, `Taormina chauffeur service` | Categoria 3 placeholder |
| `/en/driver-ragusa` | `private driver Ragusa chauffeur` | `Ragusa airport transfer`, `Ragusa Ibla private tour`, `Baroque tour Ragusa` | Categoria 3 placeholder |
| `/en/partners` | (non SEO target) | `Sicily Driver partners`, `selected Sicily experiences` | URL nuova |

---

## 4. Pagine da preservare integralmente (lock SEO sul body)

> Per le seguenti pagine, **H1 + paragrafi intro keyword-dense + FAQ + prezzi sono LOCK letterale** (vedi categorizzazione GSC in SITEMAP.md). Il copy esistente, anche se brutto a tratti, contiene le keyword sul cui ranking il sito vive oggi. Il body NON SI TOCCA. Polish tipografico (smart quotes, em-dash, spazi doppi) ammesso. Vedi COPY.md per i testi `[PRESERVE]` letterali.

### 4.1 Lock body — Categoria 1 (7 URL)

1. `/` ← paragrafo "NCC a Siracusa: Transfer Aeroportuali, Tour Privati & Servizio VIP in Sicilia" + FAQ ("Quanto costa un transfer aeroporto Catania?", "Posso prenotare un tour Barocco in giornata?", "Avete un servizio taxi privato notturno?")
2. `/en` ← paragrafo "NCC in Syracuse: Airport Transfers, Private Tours & VIP Service in Sicily" + FAQ (same questions)
3. `/en/about` ← 3 paragrafi "Our Story" letterali
4. `/tour-barocco` ← H1 letterale + 3 paragrafi intro + bullet "Puntualità e professionalità..." (CTR 25%, non si tocca virgola)
5. `/en/driver-noto` ← H1 + paragrafo + 2 FAQ
6. `/ncc-noto` ← H1 + paragrafo + 2 FAQ
7. `/en/services` ← 3 paragrafi servizi (categorie airport / tours / events) + "Why choose us"

### 4.2 Lock H1 + paragrafo intro — Categoria 2/3 con H1 ricco keyword

Anche se queste pagine sono "placeholder" per traffico basso, il loro H1 contiene keyword critiche. **H1 letterale + paragrafo intro `[PRESERVE]`**; resto del body può essere riscritto.

8. `/ncc-catania` ← H1 "NCC Catania – Transfer Aeroporto e Autista Privato" + paragrafo "Servizio NCC professionale da e per Catania, inclusi transfer dall'Aeroporto di Catania verso Siracusa, Noto, Ragusa e Taormina."
9. `/ncc-taormina` ← H1 "NCC Taormina – Transfer di Lusso e Tour Etna" + paragrafo "NCC per Taormina con transfer da/per Aeroporto di Catania, Siracusa e tutta la costa ionica."
10. `/ncc-ragusa` ← H1 "NCC Ragusa – Transfer Privati e Servizio con Conducente" + paragrafo "Servizio NCC a Ragusa e Ragusa Ibla per transfer privati da/per Aeroporto di Catania e Comiso."
11. `/en/driver-catania` ← H1 "Private Driver Catania – Airport Transfer & Chauffeur Service" + paragrafo "Private driver in Catania for airport transfers (CTA) and custom trips to Siracusa, Noto, Taormina and Ragusa."
12. `/en/driver-taormina` ← H1 "Private Driver Taormina – Luxury Transfers & Etna Tour" + paragrafo equivalente
13. `/en/driver-ragusa` ← H1 "Private Driver Ragusa – Transfers & Chauffeur" + paragrafo equivalente

### 4.3 Prezzi LOCK

Tutti i riferimenti a "**€80**" come prezzo base / "**€80–€120**" come fascia Catania-Siracusa sono lock. Se il cliente confermerà al second round prezzi tratte aggiuntive (Catania→Taormina, Catania→Noto, ecc), entreranno come `[NEW]` ma il €80 base non si tocca.

### 4.4 FAQ lock

Tutte le FAQ esistenti su `/`, `/en`, `/tour-barocco`, `/ncc-catania`, `/ncc-noto`, `/ncc-taormina`, `/ncc-ragusa`, `/en/driver-catania`, `/en/driver-noto` sono lock letterali. Sono già presenti in COPY.md con marcatore `[PRESERVE]`.

---

## 5. Schema markup mancante (da aggiungere ex novo)

> Il sito attuale NON ha schema markup JSON-LD visibile su nessuna pagina (verifica finale con `view-source:` pre-cutover). Aggiungiamo tutto da zero. Tre tipi: `LocalBusiness` su home, `FAQPage` dove ci sono FAQ, `TouristTrip` su pagine tour.

### 5.1 LocalBusiness (home IT + EN)

Sotto-tipo specifico: `TaxiService` (nel vocabolario schema.org, è il sotto-tipo più adatto. Alternative considerate e scartate: `LimousineService` non esiste come tipo, `LocalBusiness` puro è troppo generico).

```json
{
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Sicily Driver Siracusa",
  "alternateName": ["NCC Taxi Siracusa", "Sicily Driver Syracuse"],
  "image": "https://ncctaxisiracusa.com/og-home.jpg",
  "url": "https://ncctaxisiracusa.com/",
  "telephone": "+39 375 641 3379",
  "email": "info@ncctaxisiracusa.com",
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "openingHours": "Mo-Su 00:00-23:59",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Via della Maestranza, 28",
      "addressLocality": "Siracusa",
      "addressRegion": "SR",
      "postalCode": "96100",
      "addressCountry": "IT"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Via Alcide De Gasperi, 15",
      "addressLocality": "Noto",
      "addressRegion": "SR",
      "postalCode": "96017",
      "addressCountry": "IT"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Via Marzamemi, 23",
      "addressLocality": "Marzamemi",
      "addressRegion": "SR",
      "postalCode": "96018",
      "addressCountry": "IT"
    }
  ],
  "areaServed": [
    {"@type": "City", "name": "Siracusa"},
    {"@type": "City", "name": "Ortigia"},
    {"@type": "City", "name": "Noto"},
    {"@type": "City", "name": "Marzamemi"},
    {"@type": "City", "name": "Catania"},
    {"@type": "City", "name": "Taormina"},
    {"@type": "City", "name": "Ragusa"},
    {"@type": "City", "name": "Ragusa Ibla"},
    {"@type": "City", "name": "Modica"},
    {"@type": "City", "name": "Scicli"},
    {"@type": "City", "name": "Avola"},
    {"@type": "City", "name": "Fontane Bianche"},
    {"@type": "City", "name": "Pozzallo"},
    {"@type": "City", "name": "Comiso"},
    {"@type": "AdministrativeArea", "name": "Val di Noto"},
    {"@type": "Mountain", "name": "Etna"}
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 37.0755,
      "longitude": 15.2866
    },
    "geoRadius": "150000"
  },
  "sameAs": [
    "https://www.instagram.com/sicilydriversiracusa",
    "[VERIFICA CON ENZO — URL completo Google Business Profile, es. https://maps.app.goo.gl/...]",
    "https://www.facebook.com/nccautoservizisiracusa/"
  ],
  "vatID": "IT02150600894",
  "founder": {
    "@type": "Person",
    "name": "Vincenzo Izzo"
  },
  "knowsLanguage": ["it", "en"]
}
```

**Nota critica `sameAs`**: il campo `sameAs` con URL del Google Business Profile è il singolo elemento più importante per la SEO locale di questo cliente. Il GBP porta la maggior parte dei lead reali; collegarlo via schema permette a Google di "irradiare" autorevolezza dal GBP al sito. **`[VERIFICA CON ENZO]` da risolvere prima del go-live**.

### 5.2 FAQPage (home, tour-barocco, pagine locali)

Esempio per `/tour-barocco`:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto dura il Tour del Barocco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il tour dura 6-8 ore con possibilità di personalizzare tappe e tempi. Partenza tipica alle 8:30 da Siracusa, rientro entro le 17:30."
      }
    },
    {"@type": "Question", "name": "...", "acceptedAnswer": {"@type": "Answer", "text": "..."}}
  ]
}
```

Pagine che ricevono `FAQPage` schema:
- `/` e `/en` (3 FAQ ciascuna, già esistenti, lock letterale)
- `/tour-barocco` e `/en/baroque-tour`
- `/ncc-catania`, `/ncc-noto`, `/ncc-taormina`, `/ncc-ragusa` (2 FAQ ciascuna esistenti + 3-5 nuove keyword-targeted)
- `/en/driver-catania`, `/en/driver-noto`, `/en/driver-taormina`, `/en/driver-ragusa` (idem)
- Le 4 pagine tour nuove (FAQ scritte ex novo in COPY.md)

### 5.3 TouristTrip (pagine tour dedicate)

Per ognuno dei 5 tour (Barocco, Etna Premium, Isola delle Correnti, Dolce Vita Siracusa, Silent Sailing) × 2 lingue = 10 pagine, schema dedicato:

```json
{
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Tour del Barocco: Noto, Modica & Ragusa in un Giorno",
  "description": "[meta description estesa da COPY.md]",
  "image": "https://ncctaxisiracusa.com/og-tour-barocco.jpg",
  "provider": {
    "@type": "TaxiService",
    "name": "Sicily Driver Siracusa",
    "url": "https://ncctaxisiracusa.com/"
  },
  "itinerary": [
    {"@type": "TouristAttraction", "name": "Noto", "description": "..."},
    {"@type": "TouristAttraction", "name": "Modica", "description": "..."},
    {"@type": "TouristAttraction", "name": "Ragusa Ibla", "description": "..."}
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "price": "[da definire — verifica prezzo da Enzo]",
    "availability": "https://schema.org/InStock"
  },
  "touristType": ["Couples", "Families", "CulturalTourist"]
}
```

### 5.4 BreadcrumbList (tutte le pagine multi-livello)

Su tutte le pagine con livello > 1 (es. `/en/about`, `/tour/etna-premium`, `/en/tour/etna-premium`), aggiungere:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://ncctaxisiracusa.com/"},
    {"@type": "ListItem", "position": 2, "name": "Tour Sicilia", "item": "https://ncctaxisiracusa.com/tour-sicilia"},
    {"@type": "ListItem", "position": 3, "name": "Tour Etna Premium"}
  ]
}
```

### 5.5 hreflang annotations (tutte le coppie IT/EN)

Per ciascun URL IT, annotare nel `<head>`:

```html
<link rel="alternate" hreflang="it" href="https://ncctaxisiracusa.com/[url-it]" />
<link rel="alternate" hreflang="en" href="https://ncctaxisiracusa.com/en/[url-en]" />
<link rel="alternate" hreflang="x-default" href="https://ncctaxisiracusa.com/[url-it]" />
```

Default = versione IT (il pubblico ITA è il 38/77 = 49% dei click).

---

## 6. Redirect plan (20 redirect 301)

> Tutti 301 permanenti, mai 302. Testati funzionanti **prima del DNS cutover**. Priorità di test assoluta sui 7 URL Categoria 1. Implementazione: file `vercel.json` con array `redirects`.

### 6.1 Tabella redirect

| Vecchio URL (`.php`) | Nuovo URL | Tipo | Verifica priorità |
|---|---|---|---|
| `/index.php` | `/` | 301 | **CRITICA** (61 click) |
| `/chi-siamo.php` | `/chi-siamo` | 301 | Standard |
| `/servizi.php` | `/servizi` | 301 | Standard |
| `/tour-sicilia.php` | `/tour-sicilia` | 301 | **CRITICA** (refresh target) |
| `/tour-barocco.php` | `/tour-barocco` | 301 | **CRITICA** (Categoria 1) |
| `/contatti.php` | `/contatti` | 301 | Standard |
| `/ncc-catania.php` | `/ncc-catania` | 301 | Standard |
| `/ncc-noto.php` | `/ncc-noto` | 301 | **CRITICA** (Categoria 1) |
| `/ncc-taormina.php` | `/ncc-taormina` | 301 | Standard |
| `/ncc-ragusa.php` | `/ncc-ragusa` | 301 | Standard |
| `/index-en.php` | `/en` | 301 | **CRITICA** (13 click) |
| `/chi-siamo-en.php` | `/en/about` | 301 | **CRITICA** (Categoria 1) |
| `/servizi-en.php` | `/en/services` | 301 | **CRITICA** (Categoria 1) |
| `/tour-sicilia-en.php` | `/en/sicily-tours` | 301 | Standard |
| `/tour-barocco-en.php` | `/en/baroque-tour` | 301 | **CRITICA** (refresh target) |
| `/contatti-en.php` | `/en/contact` | 301 | **CRITICA** (refresh target) |
| `/driver-catania.php` | `/en/driver-catania` | 301 | **CRITICA** (refresh target) |
| `/driver-noto.php` | `/en/driver-noto` | 301 | **CRITICA** (Categoria 1) |
| `/driver-taormina.php` | `/en/driver-taormina` | 301 | Standard |
| `/driver-ragusa.php` | `/en/driver-ragusa` | 301 | Standard |

### 6.2 Redirect bonus (errori da fixare nei vecchi link interni)

Aggiuntivi rispetto al sito attuale, per gestire i 3 bug identificati:

| Path errato (404 attuale) | Destinazione corretta | Tipo |
|---|---|---|
| `/contact-en.php` | `/en/contact` | 301 |
| `/contact.php` | `/en/contact` | 301 |
| `/sicily-tours.php` | `/en/sicily-tours` | 301 |

### 6.3 Redirect per varianti URL

Anche le varianti senza/con `www`, con/senza slash trailing, devono essere normalizzate:

- `http://ncctaxisiracusa.com/*` → `https://ncctaxisiracusa.com/*` (301)
- `http://www.ncctaxisiracusa.com/*` → `https://ncctaxisiracusa.com/*` (301)
- `https://www.ncctaxisiracusa.com/*` → `https://ncctaxisiracusa.com/*` (301) — **scelta canonica: senza `www`** (consigliato per branding moderno)

⚠️ **Nota canonica importante**: il sito attuale è accessibile sia con `www.` sia senza. **Decisione**: forzare senza `www` come canonica unica. Tutte le sitemap.xml + canonical link useranno `https://ncctaxisiracusa.com/...` senza `www`. Questo richiede di aggiornare anche Google Search Console proprietà (potrebbe valere la pena tenere entrambe le property GSC se separate).

### 6.4 Implementazione Vercel (`vercel.json`)

```json
{
  "redirects": [
    { "source": "/index.php", "destination": "/", "permanent": true },
    { "source": "/index-en.php", "destination": "/en", "permanent": true },
    { "source": "/chi-siamo.php", "destination": "/chi-siamo", "permanent": true },
    { "source": "/chi-siamo-en.php", "destination": "/en/about", "permanent": true },
    { "source": "/servizi.php", "destination": "/servizi", "permanent": true },
    { "source": "/servizi-en.php", "destination": "/en/services", "permanent": true },
    { "source": "/tour-sicilia.php", "destination": "/tour-sicilia", "permanent": true },
    { "source": "/tour-sicilia-en.php", "destination": "/en/sicily-tours", "permanent": true },
    { "source": "/tour-barocco.php", "destination": "/tour-barocco", "permanent": true },
    { "source": "/tour-barocco-en.php", "destination": "/en/baroque-tour", "permanent": true },
    { "source": "/contatti.php", "destination": "/contatti", "permanent": true },
    { "source": "/contatti-en.php", "destination": "/en/contact", "permanent": true },
    { "source": "/ncc-catania.php", "destination": "/ncc-catania", "permanent": true },
    { "source": "/ncc-noto.php", "destination": "/ncc-noto", "permanent": true },
    { "source": "/ncc-taormina.php", "destination": "/ncc-taormina", "permanent": true },
    { "source": "/ncc-ragusa.php", "destination": "/ncc-ragusa", "permanent": true },
    { "source": "/driver-catania.php", "destination": "/en/driver-catania", "permanent": true },
    { "source": "/driver-noto.php", "destination": "/en/driver-noto", "permanent": true },
    { "source": "/driver-taormina.php", "destination": "/en/driver-taormina", "permanent": true },
    { "source": "/driver-ragusa.php", "destination": "/en/driver-ragusa", "permanent": true },
    { "source": "/contact-en.php", "destination": "/en/contact", "permanent": true },
    { "source": "/contact.php", "destination": "/en/contact", "permanent": true },
    { "source": "/sicily-tours.php", "destination": "/en/sicily-tours", "permanent": true }
  ]
}
```

### 6.5 Checklist pre-cutover (giorno DNS switch)

- [ ] Test manuale dei 23 redirect (20 `.php` + 3 bonus) via `curl -I` → ogni risposta `HTTP/1.1 301 Moved Permanently` con `Location:` corretto
- [ ] Verifica `<head>` di ogni URL nuovo: title, meta description, OG, canonical, hreflang presenti e corretti
- [ ] Verifica `noindex` rimosso dal robots.txt e dai meta robots (errore comune in migration su Vercel — il template Nexus include `noindex` di default in preview che va rimosso al cutover)
- [ ] **GA4 nuovo installato** (Property ID nuovo). Eventi: `form_submit`, `whatsapp_click`, `tel_click`, `tour_view`
- [ ] **Sitemap.xml inviato a GSC nuovo** lo stesso giorno del cutover. Senza questo step l'indicizzazione delle nuove URL slitta di settimane
- [ ] **schema.org `sameAs` GBP** collegato alla home (richiede `[VERIFICA CON ENZO]` URL completo)
- [ ] Test Open Graph: condividi ogni URL nuovo su Slack/WhatsApp/LinkedIn e verifica preview corretto
- [ ] Test PageSpeed Insights baseline su 3 pagine top (home IT, home EN, `/tour-barocco`) — registra punteggio per confronto post-cutover
- [ ] Backlink profile check (Ahrefs / Semrush) — verifica che i ~5-10 backlink attuali puntino a URL che redirezionano correttamente
- [ ] Monitor settimanale GSC per 6 settimane post-cutover sulle 5 query top: `ncc siracusa`, `taxi siracusa`, `sicily driver`, `taxi syracuse`, `transfer siracusa`. Fisiologico calo 1-2 settimane, stabilizzazione 6-12 settimane.

---

## 7. Sitemap.xml + robots.txt

### 7.1 sitemap.xml priorità

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Priorità 1.0 -->
  <url>
    <loc>https://ncctaxisiracusa.com/</loc>
    <lastmod>2026-XX-XX</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="it" href="https://ncctaxisiracusa.com/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://ncctaxisiracusa.com/en" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://ncctaxisiracusa.com/" />
  </url>
  <url>
    <loc>https://ncctaxisiracusa.com/en</loc>
    <lastmod>2026-XX-XX</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="it" href="https://ncctaxisiracusa.com/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://ncctaxisiracusa.com/en" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://ncctaxisiracusa.com/" />
  </url>
  <!-- Priorità 0.9: Categoria 1 + tour key + wedding -->
  <!-- /ncc-noto, /en/driver-noto, /tour-barocco, /en/baroque-tour,
       /tour/etna-premium, /en/tour/etna-premium, /wedding, /en/weddings -->
  <!-- Priorità 0.8: tour nuovi rimanenti, hub tour, servizi, pagine Categoria 2 -->
  <!-- Priorità 0.6: chi-siamo, contatti, partner -->
  <!-- Priorità 0.4: pagine Categoria 3 placeholder -->
</urlset>
```

Implementazione consigliata: generazione automatica via `next-sitemap` o sitemap nativo di Next.js 15 (`app/sitemap.ts`), che lette dalla struttura cartelle produce sitemap dinamico.

### 7.2 robots.txt

```
User-agent: *
Allow: /

# Sitemap
Sitemap: https://ncctaxisiracusa.com/sitemap.xml

# Niente noindex, niente disallow su rotte produzione
# In preview Vercel: noindex via X-Robots-Tag, MA solo su domain preview, non su produzione
```

---

## 8. Strategia content post-cutover

### 8.1 Frequenza aggiornamento

Il briefing è chiaro: Enzo **non aggiorna mai** il sito. Conseguenza:
- **Niente blog** (`/blog` non esiste). Blog vuoto fa più danno che bene (Google declassa siti con sezioni "morte").
- **Pagine static evergreen**. Tutto il contenuto del sito è scritto per durare 12+ mesi senza necessità di refresh.
- **Eccezione futura**: se mai Enzo volesse aggiungere news (es. "Nuova auto in flotta", "Apertura sede Marzamemi"), si crea allora una sezione `/news` minimal. Non oggi.

### 8.2 Triggers futuri di refresh content

Eventi che giustificherebbero un mini-update del COPY.md:
- Aggiunta di una nuova auto d'epoca al portfolio wedding
- Cambio dei partner attuali (es. nuova cantina sull'Etna)
- Apertura di una nuova sede oltre alle 3 attuali (Siracusa, Noto, Marzamemi)
- Lancio di un nuovo tour
- Espansione dell'area di servizio (es. Palermo, Catania centro città)

Quando uno di questi accade, ri-eseguire mini-COPY.md sulle pagine impattate, mai full re-write del sito.

### 8.3 KPI da tracciare in GA4 (eventi)

| Evento | Trigger | Pagina | Scopo |
|---|---|---|---|
| `whatsapp_click` | Click su qualsiasi link `wa.me/...` | Tutte | Conversion principale |
| `tel_click` | Click su qualsiasi link `tel:...` | Tutte | Conversion secondaria |
| `form_submit` | Submit del form contatti | `/contatti`, `/en/contact`, `/wedding`, `/en/weddings` | Conversion qualificata |
| `tour_view` | Page view di una `/tour/...` o `/en/tour/...` | Pagine tour | Engagement |
| `outbound_partner` | Click su link esterno a partner (es. Pura Vida) | `/partner`, `/en/partners`, pagine tour | Engagement laterale |
| `language_switch` | Click sullo switcher IT/EN | Tutte | UX validation |

Obiettivo realistico anno 1 post-cutover: passare da **77 click alta stagione → 200+ click alta stagione**, soprattutto recuperando le keyword Categoria 2 (`sicily driver` 149 imp pos 5 → CTR ≥3% = 5+ click/mese).

---

*Fine SEO.md. Vedi COPY.md per i testi italiani/inglesi reali con marcatori `[PRESERVE]` / `[POLISH]` / `[REFRESH]` / `[NEW]`. Vedi ASSET-PROMPTS.md per i prompt fal.ai immagini/video.*
