# COPY.md — Sicily Driver Siracusa
## Pattern B — Import & Polish + sezioni [NEW]

> Documento copy completo per le 26 URL del sito nuovo Next.js.
>
> **Regola d'oro Pattern B**: copy delle pagine esistenti = import letterale del sito attuale + polish tipografico, ZERO rewording semantico. Solo le sezioni additive nuove (hero secondari, trust strip, color blocking, ecc.) e le pagine ex-novo (Etna, Ortigia-Taormina, Wedding) ricevono copy nuovo.
>
> **Marcatori operativi**:
> - `[PRESERVE]` — copia letterale dal sito attuale, no cambi
> - `[POLISH]` — solo pulizia tipografica (curly quotes, em-dash, doppi spazi), no semantica
> - `[REFRESH — autorizzazione cliente]` — candidato a rewriting, OK cliente richiesto
> - `[NEW]` — copy nuovo scritto ex-novo in conformità con concept "Diario Mediterraneo"
> - `[ESTRARRE: vedi SEO.md §8]` — pagina non ancora fetchata, Claude Code la estrae prima del build
>
> **Tono di voce**: italiano narrativo prima persona ("ti veniamo a prendere"), no corporate. Banlist parole: "eccellenza", "passione", "qualità", "soluzioni innovative", "professionalità" come riempitivo, "VIP/luxury/exclusive" come stile (eccezione: tagline brand SEO-locked).

---

## 0. Regole d'oro Pattern B

1. **H1, primi 150 caratteri body, FAQ → SEO-locked.** Lock semantico. Solo polish tipografico.
2. **Tagline brand `[PRESERVE]`**: "Eleganza da VIP, prezzi di mercato" (IT) / "VIP-style elegance at market prices" (EN). Mai cambiare le parole, estetizzata in Cormorant italic 18–20px.
3. **Niente "eccellenza/passione/qualità"** nelle sezioni [NEW]. Frasi vive, concrete, prima persona.
4. **CTA SEMPRE specifici**, mai "Scopri di più" / "Get Started" / "Learn More" / "Click here".
   - Primari IT: "Prenota su WhatsApp" · "Chiama ora" · "Richiedi preventivo" · "Vedi disponibilità"
   - Primari EN: "Book on WhatsApp" · "Call now" · "Get a quote" · "Check availability"
5. **Form 4 campi max** (eccezione: form qualifying Wedding §17 = 7 campi giustificati).
6. **Telefono unico `+39 375 641 3379`**: doppia funzione `tel:+393756413379` e `wa.me/393756413379`.
7. **Switcher lingua IT/EN top-right** sempre, label minimal "IT · EN" (corrente in grassetto Cormorant, altro in DM Sans).

---

## 1. Microcopy globali

### 1.1 Navbar IT
```
Logo wordmark: Sicily Driver Siracusa
Voci menu (DM Sans 500 14px):
- Home
- Tour
- Servizi
- Aree servite
- Chi siamo
- Contatti
Switcher lingua top-right: IT · EN
CTA navbar (pillola terracotta piccola): "Prenota su WhatsApp →"
```

### 1.2 Navbar EN
```
Logo wordmark: Sicily Driver Syracuse
Menu items:
- Home
- Tours
- Services
- Areas served
- About
- Contact
Lang switcher: IT · EN
CTA: "Book on WhatsApp →"
```

### 1.3 Footer IT (4 colonne)

```
[NEW]

Colonna 1 — Servizi
Transfer aeroporti
Tour privati Sicilia
Tour del Barocco
Tour Etna
Wedding & Eventi
Business & Aziendale

Colonna 2 — Aree servite
NCC Catania
NCC Noto
NCC Taormina
NCC Ragusa
Tutte le tratte →

Colonna 3 — Contatti
Telefono: +39 375 641 3379
WhatsApp: scrivici
Email: info@ncctaxisiracusa.com
Disponibilità 24/7

Colonna 4 — Sedi
Siracusa
Via della Maestranza 28

Noto
Via Alcide De Gasperi 15

Marzamemi
Via Marzamemi 23

Bottom strip:
© 2026 Sicily Driver Siracusa · P.IVA 02150600894
Privacy · Cookie · Termini
```

### 1.4 Footer EN

```
[NEW]

Column 1 — Services
Airport transfers
Private Sicily tours
Baroque tour
Etna tour
Weddings & Events
Business & Corporate

Column 2 — Areas served
Catania
Noto
Taormina
Ragusa
All routes →

Column 3 — Contact
Phone: +39 375 641 3379
WhatsApp: write to us
Email: info@ncctaxisiracusa.com
24/7 availability

Column 4 — Locations
Syracuse
Via della Maestranza 28

Noto
Via Alcide De Gasperi 15

Marzamemi
Via Marzamemi 23

Bottom strip:
© 2026 Sicily Driver Syracuse · VAT 02150600894
Privacy · Cookies · Terms
```

### 1.5 WhatsApp sticky button (tutte le pagine, mobile+desktop)
- Posizione: bottom-right fisso, 24px dai bordi
- Stile: circolare 56px terracotta `#E07856` con icona custom whatsapp (no SVG generic)
- Tooltip hover IT: "Scrivi su WhatsApp · risponde Sicily Driver"
- Tooltip hover EN: "Write on WhatsApp · Sicily Driver answers"
- aria-label IT: "Scrivi a Sicily Driver Siracusa su WhatsApp"
- aria-label EN: "Write to Sicily Driver Syracuse on WhatsApp"
- Link: `https://wa.me/393756413379`

### 1.6 Cookie banner minimal (GDPR)

**IT** `[NEW]`:
```
Headline: Cookie tecnici e di analisi
Body: Usiamo cookie tecnici per il funzionamento del sito e cookie di analisi anonimi per capire come viene usato. Niente profilazione, niente terze parti pubblicitarie.
CTA primario: Accetta
CTA secondario testuale: Solo tecnici
Link inline: Leggi la cookie policy
```

**EN** `[NEW]`:
```
Headline: Essential and analytics cookies
Body: We use essential cookies for the site to work and anonymous analytics cookies to understand how it's used. No profiling, no third-party advertising.
CTA primary: Accept
CTA secondary text: Essential only
Inline link: Read the cookie policy
```

---

## 2. HOME `/` (IT) · Cluster Fast

### Meta tag
- `<title>` `[POLISH]`: **NCC Siracusa · Transfer Aeroporto Catania e Tour Privati in Sicilia | Sicily Driver**
- `<meta name="description">` `[NEW]` (155 char): **Transfer aeroportuali e tour privati in tutta la Sicilia con Mercedes e autista bilingue. Da €80 a tratta. NCC 24/7 a Siracusa, Noto, Catania, Taormina.**
- `<meta name="keywords">`: NCC Siracusa, NCC Sicilia, transfer aeroporto Catania, tour Sicilia con autista, Mercedes Classe V

### Open Graph + Twitter Card
```
og:title: NCC Siracusa · Transfer e Tour Privati in Sicilia | Sicily Driver
og:description: Mercedes, autisti bilingue, servizio 24/7. Da €80 a tratta. Barocco, Etna, Ortigia, Taormina.
og:image: /og/home-it.jpg (1200x630)
og:type: website
og:locale: it_IT
og:locale:alternate: en_US
```

### Sezione 1 — Hero "La rotta"

**Eyebrow** (DM Sans 500 12px uppercase tracking 0.12em) `[NEW]`:
> NCC PRIVATO · SICILIA ORIENTALE · 24/7

**H1** (Cormorant Garamond 500 italic) `[PRESERVE]`:
> NCC a Siracusa: Transfer Aeroportuali, Tour Privati & Servizio VIP in Sicilia

**Sub-headline tagline** (Cormorant italic 20px) `[PRESERVE]`:
> *Eleganza da VIP, prezzi di mercato* — il tuo NCC di lusso a tariffe accessibili.

**Search bar funzionale** `[NEW]`:
```
Label "Da": placeholder "Catania Aeroporto"
Label "A":  placeholder "Siracusa, Ortigia"
Label "Data": placeholder "Quando?"
Label "Passeggeri": dropdown 1-7
CTA primario: "Vedi prezzo →"
CTA secondario sotto la barra: "Oppure scrivici subito su WhatsApp"
```

### Sezione 2 — Trust strip orizzontale

`[NEW]` (3 elementi separati da divider verticale, DM Sans 500 13px, ognuno con numero/dato in Cormorant 600 24px):
```
Da €80
a tratta in Mercedes
———
24/7
prenotabile su WhatsApp
———
3 sedi
Siracusa · Noto · Marzamemi
```

### Sezione 3 — "Sicily Driver in Sicilia" paragrafo intro keyword-dense

**H2** (Cormorant Garamond 500 italic) `[PRESERVE]`:
> Benvenuto da Sicily Driver Siracusa

**Body** (DM Sans 400 17px, drop-cap terracotta sul "B") `[PRESERVE]`:
> **Benvenuto da Sicily Driver Siracusa**, il tuo partner per il noleggio con conducente (NCC) in tutta la Sicilia. Offriamo transfer privati da e per tutti gli aeroporti dell'isola — **Catania, Comiso, Palermo** e **Trapani** — oltre a collegamenti con i porti di **Pozzallo** e **Augusta**. Viaggia in massima comodità a bordo delle nostre Mercedes **Classe V**, **GLB Premium** e **Classe E**, con servizio 24/7.
>
> Scopri i nostri tour su misura: esplora il Barocco di **Noto, Modica, Ragusa Ibla**, ammira i paesaggi lunari dell'**Etna**, passeggia per l'antica **Ortigia** e lasciati incantare dalle terrazze di **Taormina**. Il nostro servizio VIP è perfetto per matrimoni, eventi aziendali e viaggi esclusivi.

**Note polish applicato**:
- Trattini lunghi `–` → em-dash `—` (già presenti, OK)
- Apostrofi tipografici verificati
- Bold mantenuti come nel sito attuale (keyword-dense lock SEO)

**CTA inline** sotto il paragrafo `[POLISH]` (era "Prenota ora il tuo NCC"):
> Prenota ora il tuo NCC →

### Sezione 4 — "Dove ti portiamo" (4 card warm color blocking)

**Eyebrow** `[NEW]`: TRE MODI DI USARCI

**H2** (Cormorant italic) `[NEW]`:
> Dove *ti portiamo*

**4 card asimmetriche** `[NEW]`:

```
Card 01 — TRANSFER AEROPORTI
Background: cream profondo #EDE5D6
Numerazione: 01 (Cormorant italic 100px terracotta)
H3 (Cormorant 500 italic 32px): Transfer aeroporti e porti
Body (DM Sans 16px): Catania, Comiso, Palermo, Trapani.
Pozzallo e Augusta per le crociere. Monitoraggio voli, attesa gratuita.
CTA testuale: Vai ai transfer →
Foto: Mercedes Classe V davanti terminal Catania, luce dorata mattino
Link → /servizi#transfer

Card 02 — TOUR DEL BAROCCO (badge "NEW")
Background: blu mare #1E3A4F (testi cream)
Numerazione: 02 (Cormorant italic 100px terracotta accent)
H3: Tour del Barocco
Body: Noto, Modica, Ragusa Ibla in giornata. Cattedrali, palazzi, cioccolato di Modica. 6-8 ore con autista bilingue.
CTA testuale: Scopri il tour →
Foto: facciata barocca al tramonto a Noto
Link → /tour-barocco

Card 03 — TOUR ETNA
Background: terracotta #E07856 (testi cream)
Numerazione: 03 (Cormorant italic 100px cream)
H3: Tour Etna
Body: Crateri Silvestri, cantina con degustazione, panorama della Valle del Bove. Combinabile con Taormina.
CTA testuale: Vedi l'itinerario →
Foto: paesaggio vulcanico Crateri Silvestri all'alba, luce calda
Link → /tour-etna

Card 04 — WEDDING & EVENTI
Background: sand caldo #D9C9B8 (testi blu mare)
Numerazione: 04 (Cormorant italic 100px blu mare)
H3: Wedding & Eventi
Body: Una flotta Mercedes per il giorno che ricorderai. Mercedes Classe V per gli ospiti, Classe E per gli sposi.
CTA testuale: Parliamo del giorno →
Foto: dettaglio Mercedes nera fuori da una chiesa barocca, calce e ombre
Link → /wedding-eventi
```

### Sezione 5 — "Le destinazioni" (mosaico editorial 6 foto)

**Eyebrow** `[NEW]`: DOVE ANDIAMO PIÙ SPESSO

**H2** (Cormorant italic) `[NEW]`:
> Le destinazioni che *conosciamo a memoria*

**6 foto mosaico** (asimmetria editorial magazine) `[NEW]`:
```
01 · Ortigia — il cuore di Siracusa
   Link → /tour-ortigia-taormina

02 · Noto — il barocco al tramonto
   Link → /ncc-noto

03 · Modica — vicoli e cioccolato di tradizione antica
   Link → /tour-barocco

04 · Ragusa Ibla — la cattedrale e i panorami
   Link → /ncc-ragusa

05 · Etna — il vulcano sotto le stelle
   Link → /tour-etna

06 · Taormina — la terrazza sul mare
   Link → /ncc-taormina
```

Caption hover: label in DM Sans uppercase 12px su gradient cream → trasparente

### Sezione 6 — "Quanto costa" (listino tratte)

**Eyebrow** `[NEW]`: TARIFFE TRASPARENTI

**H2** (Cormorant italic) `[NEW]`:
> Quanto *costa*

**Subhead** (DM Sans 400 18px) `[NEW]`:
> Prezzi base per Mercedes Classe V (fino a 7 passeggeri). Tratte personalizzate su preventivo.

**Tabella listino** (cream background, prezzi grandi Cormorant 500) `[PRESERVE]` parziale + `[NEW]`:
```
Catania Aeroporto → Siracusa             da €80     [PRESERVE]
Catania Aeroporto → Noto                 da €100    [NEW — confermare cliente]
Catania Aeroporto → Taormina             da €120    [PRESERVE]
Catania Aeroporto → Ragusa Ibla          da €150    [NEW — confermare cliente]
Catania Aeroporto → Marzamemi            da €130    [NEW — confermare cliente]
Porto Catania (crociere) → Ortigia       da €90     [NEW — confermare cliente]
```

**Microcopy sotto tabella** `[NEW]`:
> I prezzi non includono pedaggi autostradali. Bambini fino a 12 anni con seggiolino gratuito su richiesta. Attesa gratuita all'aeroporto fino a 60 minuti.

**CTA** `[NEW]`:
> Preventivo personalizzato → (link a /contatti pre-compilato)

### Sezione 7 — "Dietro al volante" (about mini-block)

**Eyebrow** `[NEW]`: CHI GUIDA

**H2** (Cormorant italic) `[NEW — REFRESH compatibile]`:
> Sicily Driver, *dal {anno_fondazione}*

**Body** (3 paragrafi DM Sans 17px) `[NEW — placeholder anno_fondazione]`:
> Siamo nati a Siracusa con un'idea semplice: muoversi in Sicilia bene non deve essere un lusso da rotocalco.
>
> Da allora abbiamo accompagnato turisti, sposi, ospiti d'albergo e famiglie tra le strade della Sicilia orientale. Tre sedi, una flotta Mercedes mantenuta come fosse di casa, autisti che parlano italiano e inglese — l'inglese vero, non quello di Google Translate.
>
> Tutto qui. Niente brochure, niente promesse di "eccellenza". Si vede dal viaggio.

**Foto affiancata** `[NEW]`: foto del Sig. Izzo davanti Mercedes (se autorizzata) o foto autista al volante con mano sul cambio, taglio editoriale

**CTA testuale inline** `[NEW]`:
> Conosci la nostra storia →

### Sezione 8 — "Quello che ci distingue" (fallback differenziatori al posto dei testimonial)

> ⚠️ **Sostituisce la sezione testimonial 01/02/03** poiché il cliente non ha recensioni reali utilizzabili. Stesso pattern visivo (numerazione editoriale grande Cormorant italic terracotta 120px), contenuto diverso.

**Eyebrow** `[NEW]`: PERCHÉ SCEGLIERCI

**H2** (Cormorant italic) `[NEW]`:
> Quello che *ci distingue*

**3 blocchi numerati** `[NEW]`:
```
01
H3 (Cormorant italic 32px): Prezzi senza sorprese
Body (DM Sans 16px): Da €80 a tratta, tariffa concordata prima di partire.
Niente supplementi nascosti, niente "tariffa notturna" misteriosa.

02
H3: Mercedes curate ogni settimana
Body: Classe V, GLB Premium, Classe E. Controlli meccanici settimanali,
sanificazione a ogni servizio. Acqua fresca a bordo, sempre.

03
H3: Driver bilingue veri
Body: I nostri autisti parlano italiano e inglese fluentemente.
Conoscono le strade, gli orari delle messe a Modica e dove si mangia
davvero bene a Ortigia.
```

### Sezione 9 — CTA finale "Per prima cosa"

**Sezione full-bleed** background blu mare `#1E3A4F`, testi cream

**Eyebrow** (cream tracking 0.12em) `[NEW]`: PER PRIMA COSA

**H2** (Cormorant italic 56px cream) `[NEW]`:
> *Pronto a partire?*

**Subhead** (DM Sans 400 18px cream/80) `[NEW]`:
> Tre modi per dirci dove ti veniamo a prendere.

**3 CTA pari grandezza** disposti orizzontalmente (verticale su mobile) `[NEW]`:
```
CTA 1 (pillola terracotta piena):
"Scrivi su WhatsApp →"
Link → https://wa.me/393756413379

CTA 2 (pillola terracotta piena):
"Chiama ora · +39 375 641 3379"
Link → tel:+393756413379

CTA 3 (link editoriale sottolineato cream):
"O scrivici a info@ncctaxisiracusa.com"
Link → mailto:info@ncctaxisiracusa.com
```

### Sezione 10 — FAQ Domande Frequenti (accordion)

**Eyebrow** `[NEW]`: DUBBI?

**H2** (Cormorant italic) `[NEW]`:
> Le domande che *ci fate spesso*

**3 FAQ** `[PRESERVE]`:

```
Q1: Quanto costa un transfer aeroporto Catania?
A1: I prezzi partono da €80 a tratta per il servizio NCC con Mercedes Classe V, variabili in base alla tratta e al numero di passeggeri.

Q2: Posso prenotare un tour Barocco in giornata?
A2: Sì: offriamo tour di 4–8 ore con guida opzionale; l'itinerario è personalizzabile e include Noto, Modica, Ragusa Ibla.

Q3: Avete un servizio taxi privato notturno?
A3: Certamente: il nostro NCC è attivo 24/7, perfetto anche per transfer serali verso ristoranti, eventi o aeroporti.
```

**FAQ aggiuntive** `[NEW]` (4 in più per arricchire FAQPage schema):

```
Q4: Quanti passeggeri entrano nella Mercedes Classe V?
A4: La Classe V trasporta fino a 7 passeggeri seduti più bagagli da stiva.
Per gruppi più piccoli proponiamo Classe E (berlina, fino a 3 passeggeri)
o GLB Premium (SUV, fino a 4 passeggeri).

Q5: Cosa succede se il mio volo è in ritardo?
A5: Monitoriamo gli orari di tutti i voli in tempo reale. L'autista
aspetta gratuitamente fino a 60 minuti dall'orario di atterraggio,
anche in caso di ritardo del volo.

Q6: Si può pagare con carta?
A6: Sì, accettiamo contanti, carta di credito a bordo e bonifico
per prenotazioni anticipate (eventi, matrimoni, business).

Q7: Posso prenotare per un gruppo di 10-15 persone?
A7: Sì, coordiniamo più auto della nostra flotta per gruppi più grandi.
Scrivici su WhatsApp con data, numero passeggeri e tratta e ti
mandiamo un preventivo entro un'ora.
```

---

## 3. HOME `/en` · Cluster Fast

### Meta tag
- `<title>` `[POLISH]`: **Sicily NCC · Catania Airport Transfers & Private Tours | Sicily Driver Syracuse**
- `<meta name="description">` `[NEW]` (155 char): **Private Mercedes transfers and tours across Sicily with bilingual drivers. From €80 per route. 24/7 NCC in Syracuse, Noto, Catania, Taormina.**

### Sezione 1 — Hero

**Eyebrow** `[NEW]`:
> PRIVATE NCC · EASTERN SICILY · 24/7

**H1** (Cormorant italic) `[PRESERVE]`:
> NCC in Syracuse: Airport Transfers, Private Tours & VIP Service in Sicily

**Sub-headline tagline** (Cormorant italic) `[PRESERVE]`:
> *VIP-style elegance at market prices* — your premium NCC at accessible rates.

**Search bar** `[NEW]`:
```
"From": Catania Airport
"To":   Syracuse, Ortigia
"Date": When?
"Passengers": 1-7
CTA: "Check price →"
Below bar: "Or message us right away on WhatsApp"
```

### Sezione 2 — Trust strip
`[NEW]`:
```
From €80
per route in Mercedes
———
24/7
book via WhatsApp
———
3 locations
Syracuse · Noto · Marzamemi
```

### Sezione 3 — Intro paragraph

**H2** (Cormorant italic) `[PRESERVE]`:
> Welcome to Sicily Driver Syracuse

**Body** `[PRESERVE]`:
> **Welcome to Sicily Driver Syracuse**, your go-to partner for chauffeur-driven car services (NCC) across Sicily. We provide private transfers to and from all island airports — **Catania, Comiso, Palermo, and Trapani** — as well as connections to the ports of **Pozzallo** and **Augusta**. Travel in utmost comfort aboard our Mercedes **Class V**, **GLB Premium**, and **Class E**, with 24/7 service.
>
> Discover our bespoke tours: explore the Baroque treasures of **Noto, Modica, Ragusa Ibla**, marvel at the lunar landscapes of **Etna**, stroll through historic **Ortigia**, and be captivated by the terraces of **Taormina**. Our VIP service is ideal for weddings, corporate events, and exclusive travel experiences.

**CTA inline** `[POLISH]`:
> Book your NCC now →

### Sezione 4 — "Where we take you" (4 card)

**Eyebrow** `[NEW]`: THREE WAYS TO USE US

**H2** `[NEW]`:
> Where *we take you*

```
Card 01 — AIRPORT TRANSFERS
H3: Airport and port transfers
Body: Catania, Comiso, Palermo, Trapani. Pozzallo and Augusta for cruise ships. Flight tracking, free waiting time.
CTA: See transfers →

Card 02 — BAROQUE TOUR (badge "NEW")
H3: Baroque Tour
Body: Noto, Modica, Ragusa Ibla in one day. Cathedrals, palazzos, Modica chocolate. 6-8 hours with bilingual driver.
CTA: Explore the tour →

Card 03 — ETNA TOUR
H3: Etna Tour
Body: Silvestri Craters, winery with tasting, Valle del Bove panorama. Can be combined with Taormina.
CTA: See the itinerary →

Card 04 — WEDDINGS & EVENTS
H3: Weddings & Events
Body: A Mercedes fleet for the day you'll remember. Class V for guests, Class E for the couple.
CTA: Let's talk about your day →
```

### Sezione 5 — "Destinations" mosaico

**Eyebrow** `[NEW]`: WHERE WE GO MOST OFTEN

**H2** `[NEW]`:
> The destinations *we know by heart*

```
01 · Ortigia — the heart of Syracuse
02 · Noto — Baroque at sunset
03 · Modica — alleys and chocolate from ancient tradition
04 · Ragusa Ibla — the cathedral and the views
05 · Etna — the volcano under the stars
06 · Taormina — the terrace on the sea
```

### Sezione 6 — "How much" listino

**Eyebrow** `[NEW]`: TRANSPARENT PRICING

**H2** `[NEW]`:
> How *much*

**Subhead** `[NEW]`:
> Base prices for Mercedes Class V (up to 7 passengers). Custom routes on quote.

**Tariffa table** `[PRESERVE]` partial + `[NEW]`:
```
Catania Airport → Syracuse              from €80
Catania Airport → Noto                  from €100  [confirm with client]
Catania Airport → Taormina              from €120
Catania Airport → Ragusa Ibla           from €150  [confirm]
Catania Airport → Marzamemi             from €130  [confirm]
Catania Cruise Port → Ortigia           from €90   [confirm]
```

**Microcopy** `[NEW]`:
> Prices don't include highway tolls. Children up to 12 ride free with safety seat on request. Free waiting time at the airport up to 60 minutes.

**CTA**: Custom quote →

### Sezione 7 — "Behind the wheel"

**H2** `[NEW — placeholder]`:
> Sicily Driver, *since {founding_year}*

**Body** `[NEW]`:
> We started in Syracuse with a simple idea: moving around Sicily well shouldn't be a magazine-spread luxury.
>
> Since then we've driven tourists, brides and grooms, hotel guests, and families across eastern Sicily. Three locations, a Mercedes fleet kept like it's family, drivers who speak Italian and English — real English, not Google Translate.
>
> That's it. No brochure language, no promises of "excellence". The journey tells you.

**CTA**: Read our story →

### Sezione 8 — "What sets us apart" (fallback differenziatori)

**Eyebrow** `[NEW]`: WHY CHOOSE US

**H2** `[NEW]`:
> What *sets us apart*

```
01
H3: No-surprise pricing
Body: From €80 per route, fare agreed before you board.
No hidden fees, no mysterious "night surcharge".

02
H3: Mercedes serviced every week
Body: Class V, GLB Premium, Class E. Weekly mechanical checks,
sanitization after every ride. Cold water on board, always.

03
H3: Genuinely bilingual drivers
Body: Our drivers speak Italian and English fluently.
They know the roads, the Mass schedules in Modica, and
where to actually eat well in Ortigia.
```

### Sezione 9 — CTA finale

**Eyebrow** `[NEW]`: FIRST THINGS FIRST

**H2** `[NEW]`:
> *Ready to go?*

**Subhead** `[NEW]`:
> Three ways to tell us where to pick you up.

```
CTA 1: "Message on WhatsApp →"  → wa.me/393756413379
CTA 2: "Call now · +39 375 641 3379"  → tel:+393756413379
CTA 3 (link): "Or email info@ncctaxisiracusa.com"
```

### Sezione 10 — FAQ

**H2** `[NEW]`:
> Questions *we get often*

`[PRESERVE]` equivalenti EN delle 3 FAQ home IT (estrarre da `/index-en.php` se differiscono, altrimenti tradurre fedelmente):

```
Q1: How much does a Catania airport transfer cost?
A1: Prices start at €80 per route for NCC service with Mercedes Class V, depending on the route and number of passengers.

Q2: Can I book a Baroque tour for one day?
A2: Yes: we offer 4–8 hour tours with optional guide; the itinerary is customizable and includes Noto, Modica, Ragusa Ibla.

Q3: Do you offer a private night taxi service?
A3: Of course: our NCC is active 24/7, perfect for evening transfers to restaurants, events, or airports.
```

**+ 4 FAQ aggiuntive** `[NEW]` (equivalenti EN delle Q4-Q7 italiane).

---

## 4. NCC CATANIA `/ncc-catania` · Cluster Fast

> ⚠️ **Pagina critica SEO** (target: "NCC Catania", "transfer aeroporto Catania", "Catania to Syracuse"). Tutto il blocco PRESERVE va estratto letterale via §8 SEO.md.

### Meta tag
`[ESTRARRE: vedi SEO.md §8]` per title + meta description attuali

### Sezione 1 — Hero locale
**H1** `[ESTRARRE: vedi SEO.md §8]` (pattern atteso: "NCC Catania — Transfer Aeroporto e Autista Privato in Sicilia" o equivalente)

**Sub-headline** `[POLISH]`: estratta letterale dal sito attuale

**Search bar pre-compilata** `[NEW]`: campo "Da" già su "Catania Aeroporto"

**CTA hero**: "Prenota su WhatsApp →" (pillola terracotta) + "Chiama ora →" (link sottolineato)

### Sezione 2 — Paragrafo intro keyword-dense
`[ESTRARRE: vedi SEO.md §8]` — paragrafo letterale dal sito attuale che contiene le keyword "NCC Catania", "transfer aeroporto Catania", "Catania Fontanarossa", "Mercedes Classe V", "Siracusa", "24/7".

**Polish ammesso**: tipografico (curly quotes, em-dash, fix doppi spazi). Mai cambiare la struttura delle frasi.

### Sezione 3 — Trust strip locale
`[NEW]`:
```
Da Catania a Siracusa
da €80
———
Mercedes
Classe V · GLB · Classe E
———
Disponibili
24/7 su WhatsApp
```

### Sezione 4 — "Da Catania a..." tratte specifiche

**Eyebrow** `[NEW]`: TRATTE PIÙ RICHIESTE

**H2** (Cormorant italic) `[NEW]`:
> Da Catania, *ti portiamo*

**Tabella tratte** `[NEW]` (alcuni prezzi `[PRESERVE]` se citati nel paragrafo intro, altri `[NEW — confermare cliente]`):
```
Catania Aeroporto → Siracusa (Ortigia)        da €80    [PRESERVE]
Catania Aeroporto → Noto                      da €100   [NEW — confermare]
Catania Aeroporto → Taormina                  da €120   [PRESERVE]
Catania Aeroporto → Ragusa Ibla               da €150   [NEW]
Catania Aeroporto → Modica                    da €140   [NEW]
Catania Aeroporto → Marzamemi                 da €130   [NEW]
Catania Aeroporto → Avola/Pachino             da €110   [NEW]
Catania Porto (crociere) → Ortigia            da €90    [NEW]
```

Click su riga → preventivo pre-compilato in `/contatti`

### Sezione 5 — "Cosa include il servizio"

**H2** `[NEW]`:
> Cosa include *il servizio*

**Lista editorial 5 punti** `[NEW]`:
```
— Seggiolini bambino su richiesta, senza costi
— Monitoraggio del volo in tempo reale
— Attesa gratuita all'aeroporto fino a 60 minuti
— Acqua fresca a bordo, sempre
— WhatsApp diretto con l'autista al momento del pickup
— Ricevuta fiscale o fattura (per business)
```

### Sezione 6 — "La flotta"
3 schede veicolo orizzontali `[NEW]`:
```
Mercedes Classe V
Fino a 7 passeggeri
Bagagli da stiva: 6 valigie grandi + bagaglio a mano
Comfort: aria condizionata, sedili in pelle, finestrini oscurati
Ideale per: famiglie, gruppi, transfer aeroporto

Mercedes GLB Premium
Fino a 4 passeggeri
Bagagli: 3 valigie grandi
Comfort: SUV alto, vista comoda
Ideale per: coppie, tour panoramici

Mercedes Classe E
Fino a 3 passeggeri
Bagagli: 2 valigie grandi
Comfort: berlina executive, eleganza per business
Ideale per: viaggi d'affari, eventi, sposi
```

### Sezione 7 — "Dubbi" FAQ specifiche Catania

`[ESTRARRE: vedi SEO.md §8]` — 5-7 FAQ esistenti dal sito attuale.

Esempi tipici attesi:
- Tempi di percorrenza Catania → Siracusa
- Cosa fare se il volo è in ritardo
- Si può prenotare last-minute
- Si paga prima o dopo
- Bagagli speciali (passeggini, sci, biciclette)

### Sezione 8 — "Tour da Catania" (internal linking)
`[NEW]` 3 mini-card:
```
Card 1: Tour del Barocco · partenza Catania
       Foto Noto al tramonto · Link → /tour-barocco

Card 2: Tour Etna · 4-6 ore
       Foto Crateri Silvestri · Link → /tour-etna

Card 3: Ortigia + Taormina · giornata
       Foto Duomo di Siracusa · Link → /tour-ortigia-taormina
```

### Sezione 9 — CTA finale
`[NEW]` stesso pattern home (3 CTA pari grandezza)

---

## 5. NCC NOTO `/ncc-noto` · Cluster Fast

### Meta tag
`[ESTRARRE: vedi SEO.md §8]`

### Sezione 1 — Hero
**H1** `[ESTRARRE]` (pattern: "NCC Noto — Transfer e Autista Privato nel Val di Noto")

### Sezione 2 — Paragrafo intro
`[ESTRARRE: vedi SEO.md §8]` letterale (keyword: "NCC Noto", "Val di Noto", "Barocco", "transfer Noto")

### Sezione 3 — Trust strip locale
`[NEW]`:
```
Da Noto
a Siracusa da €60
———
Nel Val di Noto
ogni giorno
———
24/7
su WhatsApp
```

### Sezione 4 — Tratte da Noto
`[NEW]`:
```
Noto → Siracusa (Ortigia)        da €60
Noto → Catania Aeroporto         da €100
Noto → Marzamemi                 da €40
Noto → Ragusa Ibla               da €90
Noto → Modica                    da €70
Noto → Avola                     da €30
[tutti confermare con cliente]
```

### Sezioni 5-9
Pattern identico a `/ncc-catania` (servizio, flotta, FAQ, tour interni, CTA finale) adattato al contesto Noto.

**Card tour interni Noto-rilevanti**:
- Tour del Barocco (Noto è la prima tappa) → /tour-barocco
- Tour Etna (partenza Noto) → /tour-etna
- Ortigia + Taormina → /tour-ortigia-taormina

---

## 6. NCC TAORMINA `/ncc-taormina` · Cluster Fast

### Meta tag
`[ESTRARRE]`

### Sezione 1 — Hero
**H1** `[ESTRARRE]` (pattern: "NCC Taormina — Transfer Aeroporto Catania, Tour e Autista Privato")

### Sezione 2 — Paragrafo intro
`[ESTRARRE]` (keyword: "NCC Taormina", "transfer Taormina Catania", "Isola Bella", "teatro greco")

### Sezione 3 — Trust strip
`[NEW]`:
```
Da Taormina a Catania
da €120
———
Tutta la costa ionica
da Isola Bella in giù
———
24/7
```

### Sezione 4 — Tratte da Taormina
`[NEW]`:
```
Taormina → Catania Aeroporto      da €120
Taormina → Siracusa (Ortigia)     da €180
Taormina → Etna                   da €100  (può collegarsi al Tour Etna)
Taormina → Noto                   da €200
Taormina → Catania Porto (crociere) da €110
[confermare con cliente]
```

### Sezione 5-9
Pattern locale. Card tour interni: Etna (Taormina è ottima base), Ortigia+Taormina, Barocco.

---

## 7. NCC RAGUSA `/ncc-ragusa` · Cluster Fast

### Meta tag
`[ESTRARRE]`

### Sezione 1 — Hero
**H1** `[ESTRARRE]` (pattern: "NCC Ragusa — Transfer e Autista Privato a Ragusa Ibla e Val di Noto")

### Sezione 2 — Paragrafo intro
`[ESTRARRE]` (keyword: "NCC Ragusa", "Ragusa Ibla", "Val di Noto", "Comiso")

### Sezione 3 — Trust strip
`[NEW]`:
```
Ragusa Ibla
e Modica nel cuore
———
Aeroporto Comiso
e Catania serviti
———
Da €80 a tratta
```

### Sezione 4 — Tratte da Ragusa
`[NEW]`:
```
Ragusa → Comiso Aeroporto             da €40
Ragusa → Catania Aeroporto            da €150
Ragusa → Siracusa                     da €120
Ragusa → Modica                       da €40
Ragusa → Noto                         da €90
Ragusa → Marzamemi                    da €110
[confermare]
```

### Sezione 5-9
Pattern locale. Card tour interni: Barocco (Ragusa è il punto più interno del giro), Ortigia+Taormina, Etna.

---

## 8-11. PAGINE EN DRIVER (CATANIA, NOTO, TAORMINA, RAGUSA)

Pattern identico alle pagine IT corrispondenti (§4-7), ma in inglese.

**Vincoli**:
- `[ESTRARRE]` da `/driver-{città}.php` per H1 + paragrafo intro keyword-dense letterali
- Le sezioni `[NEW]` ricalcano fedelmente la versione IT in tono editoriale narrativo EN

### 8. `/en/driver-catania`

**Meta title** `[POLISH]`: **Catania Airport Transfer · Private Driver from Catania to Sicily | Sicily Driver**

**Sezione 1 H1** `[ESTRARRE]` (pattern: "Catania Airport Transfer & Private Driver in Sicily")

**Sezione 4 Routes**:
```
Catania Airport → Syracuse (Ortigia)     from €80
Catania Airport → Noto                   from €100
Catania Airport → Taormina               from €120
Catania Airport → Ragusa Ibla            from €150
Catania Airport → Modica                 from €140
Catania Airport → Marzamemi              from €130
Catania Cruise Port → Ortigia            from €90
```

**Sezione 5 What's included**:
```
— Child seats on request, no extra cost
— Real-time flight monitoring
— Free waiting time at airport up to 60 minutes
— Cold water on board, always
— Direct WhatsApp with driver at pickup
— Tax receipt or invoice for business
```

**Card tour interni EN**: Baroque Tour, Etna Tour, Ortigia + Taormina

### 9. `/en/driver-noto`
Pattern equivalente. Tratte:
```
Noto → Syracuse (Ortigia)        from €60
Noto → Catania Airport           from €100
Noto → Marzamemi                 from €40
Noto → Ragusa Ibla               from €90
Noto → Modica                    from €70
```

### 10. `/en/driver-taormina`
Pattern equivalente. Tratte:
```
Taormina → Catania Airport       from €120
Taormina → Syracuse (Ortigia)    from €180
Taormina → Etna                  from €100
Taormina → Noto                  from €200
Taormina → Catania Cruise Port   from €110
```

### 11. `/en/driver-ragusa`
Pattern equivalente. Tratte:
```
Ragusa → Comiso Airport          from €40
Ragusa → Catania Airport         from €150
Ragusa → Syracuse                from €120
Ragusa → Modica                  from €40
Ragusa → Noto                    from €90
```

---

## 12. SERVIZI `/servizi` + `/en/services` · Cluster Fast

### Meta IT
- `<title>`: **Servizi NCC Sicilia · Transfer, Tour, Wedding e Business | Sicily Driver**
- `<meta description>` `[NEW]`: **I servizi di Sicily Driver Siracusa: transfer aeroportuali, tour privati, wedding & eventi, business. Mercedes con autista bilingue, 24/7 in Sicilia orientale.**

### Sezione 1 — Hero ridotta
**Eyebrow** `[NEW]`: TUTTO QUELLO CHE FACCIAMO

**H1** (Cormorant italic) `[NEW]`:
> Quattro modi *di accompagnarti*

**Subhead** (DM Sans 18px) `[NEW]`:
> Transfer aeroportuali, tour privati, matrimoni ed eventi, business. Tutto con la stessa flotta Mercedes e gli stessi autisti.

### Sezione 2 — Paragrafo intro
`[ESTRARRE: vedi SEO.md §8]` da `/servizi.php`

### Sezione 3 — "I 4 servizi" (4 card warm color blocking)

`[NEW]`:

```
Card 01 — TRANSFER AEROPORTI E PORTI
Background: cream profondo
H3: Transfer aeroporti e porti
Body breve: Catania, Comiso, Palermo, Trapani. Pozzallo, Augusta.
Da €80 a tratta in Mercedes Classe V.
3 punti chiave:
— Monitoraggio voli in tempo reale
— Attesa gratuita fino a 60 minuti
— Seggiolini bambino senza costi extra
CTA: Vedi le tratte →   (link a /servizi#transfer ancora interna o /ncc-catania)

Card 02 — TOUR PRIVATI IN SICILIA
Background: blu mare
H3: Tour privati in Sicilia
Body breve: Barocco, Etna, Ortigia + Taormina. Tour personalizzati su richiesta.
3 punti:
— Mercedes Classe V con autista bilingue
— 6-9 ore di durata, soste su misura
— Acqua e flessibilità inclusi
CTA: Esplora i tour →   (link a /tour-sicilia)

Card 03 — WEDDING & EVENTI
Background: sand caldo
H3: Wedding & Eventi
Body breve: Una flotta dedicata per il giorno del sì. Classe V per gli ospiti, Classe E per gli sposi.
3 punti:
— Coordinamento di più auto
— Attesa estesa, flessibilità oraria
— Driver in divisa su richiesta
CTA: Parliamo del giorno →   (link a /wedding-eventi)

Card 04 — BUSINESS & AZIENDALE
Background: terracotta
H3: Business & Aziendale
Body breve: Trasferimenti aziendali, congressi, ospiti VIP. Fatturazione regolare, fatturazione elettronica.
3 punti:
— Riservatezza assoluta
— Pagamento posticipato per aziende
— Driver in giacca per occasioni formali
CTA: Richiedi una proposta →   (link a /contatti#business)
```

### Sezione 4 — "La flotta" 3 schede dettagliate

Identica alle schede di §4 NCC Catania ma con dettagli più estesi e prezzi indicativi:
```
Mercedes Classe V — il workhorse della flotta
Fino a 7 passeggeri + 6 valigie grandi
Comfort: pelle, AC, finestrini oscurati, Wi-Fi su richiesta
Listino partenza: €80 a tratta

Mercedes GLB Premium — il SUV familiare
Fino a 4 passeggeri + 3 valigie
Comfort: assetto alto, panoramica, ideale per tour
Listino partenza: €90 a tratta

Mercedes Classe E — la berlina executive
Fino a 3 passeggeri + 2 valigie
Comfort: assetto basso silenzioso, divisori interni
Listino partenza: €100 a tratta
```

### Sezione 5 — "Aree e città servite"

**H2** `[NEW]`:
> Dove *operiamo*

**Layout**: mappa stilizzata Sicilia orientale (SVG semplice no Google Maps embed) + lista cliccabile a destra `[NEW]`:

```
Sedi fisiche:
— Siracusa
— Noto
— Marzamemi

Città principali servite:
— Catania (e aeroporto Fontanarossa)
— Taormina e Isola Bella
— Ragusa Ibla
— Modica
— Comiso (e aeroporto)
— Augusta
— Pozzallo (porto crociere)
— Avola, Pachino, Portopalo
— Val di Noto (tutto)

Aeroporti coperti:
— Catania Fontanarossa
— Comiso
— Palermo Falcone Borsellino
— Trapani Birgi

Vai alla pagina dedicata →   (link a /ncc-catania, /ncc-noto, ecc.)
```

### Sezione 6 — Listino prezzi indicativo
Stessa tabella della home (sezione 6 §2), ma estesa con più tratte (~10-12 righe).

### Sezione 7 — "Dubbi" FAQ generali
`[ESTRARRE]` se esistono FAQ in `/servizi.php`, altrimenti `[NEW]`:

```
Q: Quanto preavviso serve per prenotare?
A: Per transfer aeroportuali basta WhatsApp anche 2 ore prima. Per tour
   e wedding consigliamo 7-15 giorni di anticipo per garantire la flotta.

Q: Coprite tutta la Sicilia o solo l'est?
A: Operiamo principalmente in Sicilia orientale (province di Siracusa,
   Catania, Ragusa, Messina sud). Per Sicilia centrale o ovest organizziamo
   con preavviso maggiore.

Q: Fate solo transfer o anche disposizioni orarie?
A: Entrambi: transfer punto-a-punto e disposizioni a ore (mezza giornata,
   giornata intera) con auto e autista a disposizione.

Q: Si possono pagare con bonifico anticipato?
A: Sì, è la modalità preferita per wedding, eventi, business e tour
   prenotati con anticipo.
```

### Sezione 8 — CTA finale
Pattern home

### Versione EN `/en/services`

Stessa struttura. **H1 `[PRESERVE]`** (estratto): "Our Services" (deducibile dal title "Our Services - Sicily Driver Siracusa"). Estratto da `/servizi-en.php`: "Premium vehicles, professional drivers and tailor-made itineraries to explore Sicily in total comfort. Catania Airport ⇄ Siracusa / Noto / Ragusa / Taormina ... Custom itineraries with a dedicated driver: Baroque towns, Etna & wineries, Ortigia and Taormina highlights."

I 4 card tradotti:
```
Card 01 — AIRPORT & PORT TRANSFERS
Card 02 — PRIVATE SICILY TOURS
Card 03 — WEDDINGS & EVENTS
Card 04 — BUSINESS & CORPORATE
```

---

## 13. TOUR SICILIA HUB `/tour-sicilia` + `/en/sicily-tours` · Cluster Esperienziale

### Meta IT
- `<title>` `[PRESERVE]`: **Tour Sicilia con Autista Privato — Sicily Driver Siracusa**
- `<meta description>` `[NEW]`: **Tour privati in Sicilia con autista bilingue e Mercedes Classe V. Barocco, Etna, Ortigia, Taormina. 6-8 ore con soste su misura. Da €350.**

### Sezione 1 — Hero atmosferica con video loop

**Eyebrow** `[NEW]`: TOUR PRIVATI · SICILIA ORIENTALE

**H1** (Cormorant italic 80px) `[NEW]`:
> I tour che facciamo *di Sicilia*

**Subhead** (Cormorant italic 24px) `[NEW]`:
> *Quattro itinerari, infinite combinazioni.*

**Video loop**: vedi prompt asset §17

**CTA hero** `[NEW]`:
- Primario: "Vedi gli itinerari ↓" (scroll-down sottile)
- Secondario: "Oppure prenota su WhatsApp →"

### Sezione 2 — Paragrafo intro

**H2** (Cormorant italic) `[NEW]`:
> Quattro mondi *in un giorno*

**Body** `[PRESERVE]` (estratto fetchato):
> Partenze da Siracusa, Catania, Noto, Ragusa, Taormina. Servizio attivo 24/7. 6–8 ore con soste personalizzate, tempo libero e consigli locali. Possibilità di pranzo tipico o degustazione dolci.

**CTA inline** `[POLISH]`:
> Richiedi un preventivo →

### Sezione 3 — "Gli itinerari" (4 card grandi)

**Eyebrow** `[NEW]`: SCEGLI UN ITINERARIO

**H2** (Cormorant italic) `[NEW]`:
> Gli *itinerari*

**4 card asimmetriche** `[NEW]`:

```
Card 01 — TOUR DEL BAROCCO
Foto: Noto al tramonto, scala della Cattedrale di San Nicolò
H3: Tour del Barocco
Riga durata/prezzo: 6-8 ore · da €350
Body 1 riga: Noto, Modica, Ragusa Ibla. Le tre città simbolo del barocco siciliano in giornata.
CTA: Esplora il tour →   → /tour-barocco

Card 02 — TOUR ETNA
Foto: Crateri Silvestri all'alba
H3: Tour Etna
Riga: 5-7 ore · da €320
Body: Crateri Silvestri (1900m), cantina con degustazione, Valle del Bove. Combinabile con Taormina.
CTA: Vedi l'itinerario →   → /tour-etna

Card 03 — ORTIGIA + TAORMINA
Foto: Ortigia di notte, Duomo
H3: Ortigia e Taormina
Riga: 7-9 ore · da €380
Body: Ortigia con Duomo e Fonte Aretusa al mattino, pranzo vista mare, Taormina e teatro greco al pomeriggio.
CTA: Scopri →   → /tour-ortigia-taormina

Card 04 — TOUR SU MISURA
Foto: strada panoramica del Val di Noto in luce dorata
H3: Tour su misura
Riga: durata personalizzata · prezzo su preventivo
Body: Ci dici dove vuoi andare. Costruiamo l'itinerario insieme: foto-spot, ristoranti, soste, ritmo del giorno.
CTA: Parliamone →   → /contatti?tipo=tour-su-misura
```

### Sezione 4 — "Una giornata tipo" storytelling

**Eyebrow** `[NEW]`: COSA SUCCEDE QUANDO PRENOTI

**H2** (Cormorant italic) `[NEW]`:
> Una *giornata tipo*

**Body narrativo serif italica** (Cormorant italic 20px, max-width 680px, drop-cap terracotta) `[NEW]`:
> *Ti veniamo a prendere alle otto, all'ingresso del tuo hotel. La Mercedes è già accesa, l'aria condizionata regolata, l'acqua fresca nelle bottigliette.*
>
> *Partiamo verso Noto. Strada panoramica per la prima mezz'ora, poi una sosta a Avola per il caffè — il primo della giornata, in un bar che conosciamo dove la granita di mandorla non è quella che fanno per i turisti.*
>
> *A Noto camminiamo. Ti aspettiamo per il tempo che vuoi alla Cattedrale, scattiamo le foto giuste sulla scala, raccontiamo cosa c'era qui prima del terremoto del 1693. Niente fretta, è la tua giornata.*
>
> *Riprendiamo verso Modica per pranzo. Ti consigliamo dove sederti — non perché abbiamo accordi, ma perché ci mangiamo anche noi quando passiamo. Cioccolato dopo, ovviamente.*
>
> *Pomeriggio a Ragusa Ibla, con il sole basso e la cattedrale che si illumina. Risaliamo verso casa con la luce d'oro che ci accompagna. Arriviamo per cena.*
>
> *Questo è uno dei modi possibili. L'altro è dirci tu come lo vuoi.*

**Foto scattered**: 2-3 foto polaroid-style (Mercedes parcheggiata davanti al duomo, dettaglio della scala di Noto, mano sul volante con strada panoramica) — riferimento MonksTrip

### Sezione 5 — "Cosa è sempre incluso"

**H2** (Cormorant italic) `[NEW]`:
> Cosa è *sempre incluso*

**Lista editorial** `[NEW]` (NON bullet list classica — separati da divisori sottili):

```
— Mercedes Classe V (fino a 7 passeggeri)
— Driver bilingue italiano/inglese
— Soste fotografiche dove vuoi
— Acqua fresca a bordo
— Flessibilità oraria (parti più tardi, torni più tardi)
— Wi-Fi su richiesta
— Seggiolini bambino senza costi
```

### Sezione 6 — "Cosa dicono dopo i tour" (fallback differenziatori)

> ⚠️ Fallback: niente recensioni reali → "Cosa cambia con noi" pattern numerazione

**H2** `[NEW]`:
> Cosa *cambia con noi*

```
01
H3: Niente percorsi turistici fissi
Body: Ogni tour è cucito sulla giornata. Se vuoi fermarti due ore in più
a Noto perché ti piace, lo facciamo.

02
H3: Driver che conoscono i posti
Body: Sappiamo dove si mangia bene davvero, quando aprono i siti
archeologici, e dove fermarsi per le foto al tramonto.

03
H3: Auto fresca, vere pause
Body: Acqua a bordo, AC regolata sul tuo comfort, sosta caffè a metà
mattina senza chiedere. Non è solo trasporto.
```

### Sezione 7 — FAQ
`[PRESERVE]` (estratte dal fetch):

```
Q: I tour sono modificabili?
A: Sì, ogni tour è modulabile: foto-spot, tempo libero, degustazioni e visite guidate su richiesta.

Q: Quanto durano?
A: Da 6 a 9 ore in base al percorso. Per itinerari più lunghi possiamo estendere a giornata intera.

Q: I seggiolini per bambini sono inclusi?
A: Certo, basta richiederli in fase di prenotazione. Inclusi senza costi extra.
```

**+ 2 FAQ aggiuntive** `[NEW]`:

```
Q: Si può combinare Etna e Taormina nello stesso giorno?
A: Sì, il tour Etna+Taormina è uno dei più richiesti. Mattina sull'Etna,
   pranzo in cantina o a Taormina, pomeriggio al teatro greco.

Q: Da dove si parte?
A: Partenze comode anche da: NCC Catania, NCC Noto, NCC Taormina,
   NCC Ragusa. Ti veniamo a prendere ovunque tu sia.
```

### Sezione 8 — CTA finale + form preventivo tour

**H2** `[NEW]`:
> Pronto a *scegliere*?

**Form 4 campi** `[NEW]`:
```
Tipo tour (dropdown): Barocco · Etna · Ortigia+Taormina · Su misura
Data prevista
Numero passeggeri (1-7)
Contatto (telefono o email)
CTA: "Richiedi preventivo →"

Sotto il form:
"Oppure scrivici subito su WhatsApp →"
```

### Versione EN `/en/sicily-tours`

Pattern identico tradotto.

**H1** `[NEW]`:
> The tours we make *of Sicily*

**Storytelling narrative EN** `[NEW]`:
> *We pick you up at eight, at your hotel entrance. The Mercedes is already running, AC dialed in, cold water in the bottles.*
>
> *We head toward Noto. Scenic road for the first half hour, then a stop in Avola for coffee — the first of the day, at a bar we know where the almond granita isn't the one they make for tourists.*
>
> *In Noto we walk. We wait however long you want at the Cathedral, take the right photos from the staircase, tell you what was here before the 1693 earthquake. No rush, it's your day.*
>
> *We move on to Modica for lunch. We tell you where to sit — not because we have deals, but because we eat there too when we pass through. Chocolate after, obviously.*
>
> *Afternoon in Ragusa Ibla, with the sun low and the cathedral lit up. We drive back home with the golden hour with us. We arrive for dinner.*
>
> *This is one possible way. The other is for you to tell us how you want it.*

---

## 14. TOUR BAROCCO `/tour-barocco` + `/en/baroque-tour` · Cluster Esperienziale

> ⚠️ **Pagina ad alta priorità SEO**. Tutto il blocco intro è `[PRESERVE]` letterale.

### Meta IT
- `<title>` `[POLISH]`: **Tour del Barocco · Noto, Modica & Ragusa in un Giorno | Sicily Driver Siracusa**
- `<meta description>` `[NEW]`: **Tour privato di una giornata tra Noto, Modica e Ragusa Ibla. Mercedes Classe V con autista bilingue. 6-8 ore, partenza da Siracusa. Da €350.**

### Sezione 1 — Hero cinematica con video loop

**Eyebrow** `[NEW]`: TOUR PRIVATO · 6-8 ORE

**H1** (Cormorant italic 72px) `[PRESERVE]`:
> Tour del Barocco: Noto, Modica & Ragusa in un Giorno

**Subhead** (Cormorant italic 20px) `[NEW]`:
> *Le tre città simbolo del barocco siciliano, in giornata.*

**Video loop**: vedi prompt asset §17

**CTA hero** `[NEW]`:
- Primario: "Vedi itinerario ↓"
- Secondario: "Prenota su WhatsApp →"

### Sezione 2 — Paragrafo intro tour

**H2** (Cormorant italic) `[NEW]`:
> Quello che *vivrai*

**Body** `[PRESERVE]`:
> Vivi l'emozione del **Tour del Barocco** in Sicilia: un'esperienza indimenticabile tra le città di **Noto**, **Modica** e **Ragusa**. Scopri la maestosità delle facciate barocche, i palazzi storici e le chiese simbolo di una cultura artistica senza eguali.
>
> Partendo da Siracusa, ti accompagniamo attraverso le meraviglie di **Noto** con la sua Cattedrale di San Nicolò, proseguendo verso la suggestiva **Modica**, patria del pregiato cioccolato artigianale e della chiesa di San Pietro, fino alla celebre **Ragusa Ibla** con la magnifica Cattedrale di San Giorgio. Ogni tappa è studiata per offrirti comfort, storia e gusto autentico.
>
> Questo tour privato NCC garantisce:
>
> — Puntualità e professionalità dei nostri autisti NCC
> — Parco auto di lusso (Mercedes Classe V, GLB Premium, Classe E)
> — Itinerario personalizzabile e supporto 24/7

**CTA inline** `[POLISH]`:
> Chiedi informazioni →

### Sezione 3 — "Il tour in 4 numeri"

**Data block orizzontale** `[NEW]`:
```
6-8h        4 tappe       2 lingue      da €350
durata      Noto Modica   driver IT/EN  per auto fino
            Ragusa Ibla   nativi        a 7 passeggeri
            + Scicli      
            opzionale
```

### Sezione 4 — "Tappa per tappa" (scroll-driven sticky, la sezione cuore)

**Eyebrow** `[NEW]`: TAPPA PER TAPPA

**H2** (Cormorant italic) `[NEW]`:
> Le città *che attraversiamo*

**4 tappe scroll-driven** (foto large left/right alternato + testo narrativo Cormorant italic) `[NEW]`:

```
TAPPA 01 — NOTO
H3 (Cormorant italic 40px): Noto
Riga durata: 1h 30min
Body narrativo (Cormorant italic 22px):
"Arriviamo a Noto verso le nove, quando la luce
inizia a scaldare la pietra calcarea della
Cattedrale di San Nicolò. Saliamo i 25 scalini,
ci fermiamo per le foto, raccontiamo quello che
c'era qui prima del terremoto del 1693 e perché
oggi tutto è di questo colore caldo.
Tempo libero per camminare sul Corso, prendere
un caffè, fermarsi davanti a Palazzo Nicolaci."
Foto: scalinata Cattedrale di Noto, luce mattutina

TAPPA 02 — MODICA
H3: Modica
Riga durata: 2h (include pranzo)
Body narrativo:
"Verso mezzogiorno scendiamo a Modica. La città
si arrampica su due valloni, le strade fanno
serpentine. Ti facciamo scendere vicino al
Duomo di San Giorgio — quello vero, di Modica
Alta — e poi giù per Corso Umberto fino alla
chiesa di San Pietro.
Pranzo dove ti consigliamo (non perché abbiamo
accordi: perché mangiamo lì anche noi). Dopo,
il cioccolato di Modica. Non quello dei souvenir,
quello di una bottega che lo fa da generazioni
con la ricetta del cacao a freddo."
Foto: chiesa San Pietro Modica, scorcio di tetti

TAPPA 03 — RAGUSA IBLA
H3: Ragusa Ibla
Riga durata: 1h 30min
Body narrativo:
"Nel pomeriggio la luce è ancora ferma.
Ti portiamo a Ragusa Ibla, parcheggiamo nella
piazza alta e scendiamo a piedi verso la
Cattedrale di San Giorgio. La via è in discesa,
si cammina bene. Vicoli, palazzi, terrazze
sui valloni. C'è chi riconosce qualcosa
da una serie italiana famosa — ma non te lo
diciamo noi, lasciamo che lo scopri tu."
Foto: cupola San Giorgio Ragusa Ibla, vista dall'alto

TAPPA 04 — RIENTRO (opzionale: Scicli o Marzamemi)
H3: Il rientro
Riga: 1h
Body narrativo:
"Per il ritorno scegli tu: dritto a casa con
la luce d'oro, oppure una mezz'ora a Scicli
(se l'hai amata in TV) o quaranta minuti a
Marzamemi (se vuoi un aperitivo sul mare prima
di cena). Arriviamo per cena, sempre."
Foto: strada panoramica al tramonto Val di Noto
```

### Sezione 5 — "Cosa includi e cosa no"

**H2** (Cormorant italic) `[NEW]`:
> Cosa *includi* (e cosa no)

**2 colonne editorial** (NON bullet list — paragrafi tipografici) `[NEW]`:

```
COLONNA SX — INCLUSO

Mercedes Classe V o GLB Premium, fino a 7 passeggeri.
Driver bilingue italiano/inglese per tutta la giornata.
Soste fotografiche dove vuoi.
Acqua fresca a bordo, sempre.
Flessibilità oraria piena.
Wi-Fi su richiesta.
Seggiolini bambino senza costi.

COLONNA DX — NON INCLUSO

Pranzo (te lo consigliamo, ma scegli tu dove e come).
Ingressi a siti archeologici, musei, ville chiuse.
Mance al driver (facoltative).
Degustazioni dolci o vino (organizzabili in anticipo).
```

### Sezione 6 — "Dubbi" FAQ tour-specifiche

`[ESTRARRE]` se ci sono FAQ in `/tour-barocco.php`; altrimenti `[NEW]`:

```
Q1: Quando si parte?
A1: Tipicamente alle 8:30 dal tuo hotel a Siracusa o sedi limitrofe.
    Possiamo partire prima (alle 7) o più tardi (alle 10) — la giornata
    si adatta a te.

Q2: Si può fare il tour senza fermarsi a Modica per pranzo?
A2: Certo, puoi pranzare a Ragusa Ibla o non pranzare affatto. Il tour
    è modulabile: ti diamo l'itinerario tipo, poi lo cuciamo sulla tua
    giornata.

Q3: Quante persone entrano?
A3: La Mercedes Classe V trasporta fino a 7 passeggeri con bagagli da
    giornata. Per gruppi più grandi coordiniamo più auto in parallelo.

Q4: Quanto costa il tour?
A4: Da €350 per la giornata completa con Mercedes Classe V e autista
    bilingue. Il prezzo non cambia con il numero di passeggeri (fino a 7).
    Per Classe E o GLB il listino è diverso, lo trovi nel preventivo.

Q5: Si può prenotare last-minute?
A5: Se abbiamo l'auto libera, sì — anche il giorno prima. Scrivici su
    WhatsApp e ti diciamo subito.
```

### Sezione 7 — "Cosa cambia con noi" (fallback differenziatori)

Stesso pattern §13 sezione 6 — 3 blocchi numerati. Da personalizzare per il Tour Barocco:

```
01
H3: Niente carovana
Body: Sei tu, l'auto, l'autista. Niente bus con altri 40 turisti,
niente fermate a orario fisso. Decidi tu i tempi.

02
H3: Sosta caffè dove ci fermiamo noi
Body: Conosciamo i bar dove la granita di mandorla è quella vera,
non quella per turisti. Lo stesso per il cioccolato a Modica.

03
H3: Driver che parlano davvero inglese
Body: Niente gesti, niente Google Translate. I nostri autisti
spiegano la storia del barocco in inglese fluente.
```

### Sezione 8 — "Tariffe e disponibilità"

**H2** (Cormorant italic) `[NEW]`:
> Tariffe e *disponibilità*

**Tabella prezzi** `[NEW — confermare con cliente]`:
```
Mercedes Classe V (fino a 7 pax)        da €350    [PRESERVE: ambito €350 — verificare]
Mercedes GLB Premium (fino a 4 pax)     da €330
Mercedes Classe E (fino a 3 pax)        da €380   (executive, eventi)

Maggiorazioni:
— Domeniche e festivi: +€30
— Alta stagione (giugno-settembre): +€40
— Partenza prima delle 7 del mattino: +€25

Sconti:
— Tour ripetuti (2° giorno consecutivo): -10%
— Coppie/famiglie con prenotazione bonifico anticipato: -5%
```

**Form booking** `[NEW]`:
```
Data tour
Numero passeggeri (1-7)
Punto di partenza (dropdown: hotel Siracusa, hotel Catania, hotel Noto, altro)
Contatto (telefono o WhatsApp)
Note speciali (textarea, opzionale)

CTA primario: "Richiedi disponibilità →"
CTA secondario: "Oppure scrivici su WhatsApp →"
```

### Sezione 9 — CTA finale
Pattern home (3 CTA pari grandezza)

### Versione EN `/en/baroque-tour`

**H1** `[ESTRARRE da /tour-barocco-en.php]` (pattern atteso: "Baroque Tour: Noto, Modica & Ragusa in One Day")

**Body** `[ESTRARRE]` letterale dalla versione EN

**Narrativa scroll-driven EN** `[NEW]`: traduzione letteraria dalla versione IT mantenendo il tono.

---

## 15. TOUR ETNA `/tour-etna` + `/en/etna-tour` · Cluster Esperienziale · [NEW]

> ⚠️ **Pagina ex-novo**. Tutto `[NEW]`. Concept narrativo Diario Mediterraneo, archetipo B 70% + C 30%.

### Meta IT
- `<title>` `[NEW]`: **Tour Etna · Da Catania, Taormina o Siracusa con Autista | Sicily Driver**
- `<meta description>` `[NEW]`: **Tour privato sull'Etna con Mercedes e autista bilingue. Crateri Silvestri 1900m, cantina con degustazione, Valle del Bove. 5-7 ore, da €320.**

### Sezione 1 — Hero cinematica

**Eyebrow** `[NEW]`: TOUR PRIVATO · 5-7 ORE

**H1** (Cormorant italic) `[NEW]`:
> Tour Etna: il *vulcano* di una giornata

**Subhead** (Cormorant italic) `[NEW]`:
> *Crateri, cantine, panorami. Partenza da dove preferisci.*

**Video loop**: vedi prompt asset §17

### Sezione 2 — Paragrafo intro

**H2** (Cormorant italic) `[NEW]`:
> L'Etna *senza pacchetti*

**Body** `[NEW — keyword-dense per SEO ex-novo]`:
> Il **Tour Etna** in giornata è uno dei modi più diretti per conoscere il vulcano siciliano. Ti veniamo a prendere a Catania, Taormina, Siracusa o dove preferisci, e in cinque-sette ore facciamo i **Crateri Silvestri a 1900 metri**, una cantina sul versante nord con **degustazione di vini etnei**, e un belvedere sulla **Valle del Bove** prima di tornare.
>
> Non è un'escursione di gruppo. Non è un bus con 40 persone e un microfono. Sei tu, una **Mercedes Classe V o GLB Premium con autista bilingue**, e un itinerario che si piega sui tuoi tempi. Niente fretta, niente tappe forzate. Se vuoi più tempo alla cantina, lo prendi. Se vuoi spostare il pranzo in città, lo facciamo.
>
> Servizio attivo 24/7, prenotabile anche un giorno prima via WhatsApp. Partenze da **NCC Catania**, **NCC Taormina**, **NCC Siracusa** o ovunque tu sia.

### Sezione 3 — "Il tour in 4 numeri"

`[NEW]`:
```
5-7h           1900m              3 tappe              da €320
durata         quota Crateri       Silvestri,           Mercedes V o GLB
               Silvestri           Cantina, Valle       fino a 7 pax
                                   del Bove
```

### Sezione 4 — "Tappa per tappa" scroll-driven

`[NEW]`:

```
TAPPA 01 — CRATERI SILVESTRI (1900m)
Body narrativo:
"Saliamo con la macchina fino a 1900 metri,
ai Crateri Silvestri. L'aria si fa fredda
anche a luglio, l'ossigeno è meno. Si cammina
sulla sabbia nera vulcanica intorno ai
crateri inattivi, panorama che cambia ogni
cinque metri. Una sosta caffè al rifugio
prima di ripartire."
Foto: paesaggio lunare sabbia nera, persone
piccole nella scala del cratere

TAPPA 02 — CANTINA VERSANTE NORD
Body:
"Scendiamo verso il versante nord, dove crescono
le viti più antiche dell'Etna. Tre uvaggi
tipici: Nerello Mascalese, Nerello Cappuccio,
Carricante. La degustazione è in cantina,
con un tagliere se hai fame. Quaranta minuti
seduti, niente fretta."
Foto: bottiglie su tavolo legno, vista sui vigneti

TAPPA 03 — VALLE DEL BOVE BELVEDERE
Body:
"Ultima tappa prima del ritorno: un belvedere
sulla Valle del Bove, la grande caldera nera
sul versante est. Da qui l'Etna sembra
ancora più grande. Pochi minuti di sosta
fotografica e poi rientro lungo la strada
panoramica."
Foto: vista panoramica della Valle del Bove
con Etna sullo sfondo
```

### Sezione 5 — "Cosa includi e cosa no"

`[NEW]`:

```
INCLUSO
Mercedes Classe V o GLB Premium
Driver bilingue per tutta la giornata
Soste fotografiche libere
Acqua fresca a bordo
Pickup e drop-off dove vuoi tu

NON INCLUSO
Pranzo (consigliato ma non incluso)
Degustazione in cantina (€15-25/persona, da prenotare)
Ingressi a aree controllate del Parco
Giubbotto pesante (anche d'estate a 1900m fa fresco)
```

### Sezione 6 — FAQ

`[NEW]`:

```
Q: Si arriva fino in cima al cratere principale?
A: No, la cima dell'Etna (3300m) richiede guida vulcanologica certificata
   e funivia. Il nostro tour copre i Crateri Silvestri a 1900m, raggiungibili
   in auto e a piedi senza guida specializzata. Se vuoi salire in cima,
   organizziamo il transfer alla funivia di Nicolosi e tu prosegui da lì
   con la guida ufficiale.

Q: Come ci si veste?
A: A 1900m anche in agosto il fresco si sente. Consigliamo strati: maglietta
   + felpa + giacca leggera. Scarpe chiuse comode. La sabbia nera è fine,
   si infila ovunque.

Q: Si può combinare con Taormina?
A: Sì, è una delle combinazioni più richieste. Mattina sull'Etna, pranzo a
   Taormina, pomeriggio al teatro greco e Isola Bella. Diventa una giornata
   piena di 9-10 ore — chiedi un preventivo dedicato.

Q: Il tour si fa anche d'inverno?
A: Sì, da dicembre a marzo l'Etna è spesso innevato e i Crateri Silvestri
   sono in scenario alpino. La strada è praticabile salvo eventi
   meteorologici estremi. Verifichiamo sempre le condizioni il giorno prima.

Q: Da dove parte il tour?
A: Da dove vuoi tu. Pickup standard: NCC Catania (15 minuti dall'aeroporto),
   NCC Taormina (più lungo, +1h andata), NCC Siracusa (+1h 15min andata).
   Partenza dall'hotel sempre inclusa.
```

### Sezione 7 — Differenziatori

`[NEW]`:

```
01
H3: Niente bus, niente coda
Body: Saliamo con la nostra Mercedes fino al parcheggio dei Crateri
Silvestri, senza navette intermedie. Se vuoi più tempo, ce l'hai.

02
H3: Cantina selezionata, non commerciale
Body: Lavoriamo con cantine piccole del versante nord dove la
degustazione è curata, non un assembly-line per pullman.

03
H3: Driver che conoscono la montagna
Body: I nostri autisti fanno questa strada ogni settimana. Sanno
dove fermarsi per le foto migliori e quando l'Etna fuma più visibile.
```

### Sezione 8 — Tariffe + form
Pattern Tour Barocco § 14.8 con prezzi:
```
Mercedes Classe V                       da €320
Mercedes GLB Premium                    da €310
Mercedes Classe E                       da €350

Maggiorazioni:
— Combinato Etna + Taormina:           +€80
— Partenza da Siracusa:                 +€30
```

### Versione EN `/en/etna-tour` — pattern identico tradotto

**H1** `[NEW]`:
> Etna Tour: the *volcano* in a day

**Body intro keyword-dense EN** `[NEW]` (target: "Etna wine tour from Taormina private driver", "Etna day tour Sicily"):

> The **Etna Tour** is one of the most direct ways to experience the Sicilian volcano in a single day. We pick you up in Catania, Taormina, Syracuse, or wherever you prefer, and over five to seven hours we visit the **Silvestri Craters at 1900m**, a north-slope **winery with Etna wine tasting**, and a viewpoint over the **Valle del Bove** before heading back.
>
> This is not a group excursion. It's not a bus with 40 people and a microphone. It's you, a **Mercedes Class V or GLB Premium with a bilingual driver**, and an itinerary that bends to your timing. No rush, no forced stops. If you want more time at the winery, you take it. If you want to move lunch to town, we do that.
>
> 24/7 service, bookable even one day in advance via WhatsApp. Departures from **Catania**, **Taormina**, **Syracuse** or wherever you are.

---

## 16. TOUR ORTIGIA-TAORMINA `/tour-ortigia-taormina` + `/en/ortigia-taormina-tour` · Cluster Esperienziale · [NEW]

> ⚠️ **Pagina ex-novo**. Target: segmento daily tour + cruise port shore excursion.

### Meta IT
- `<title>` `[NEW]`: **Tour Ortigia e Taormina · Una Giornata tra Mare e Teatro Greco | Sicily Driver**
- `<meta description>` `[NEW]`: **Tour privato in giornata: Ortigia al mattino, pranzo vista mare, Taormina e teatro greco al pomeriggio. Mercedes con autista bilingue. 7-9 ore.**

### Sezione 1 — Hero

**Eyebrow** `[NEW]`: TOUR PRIVATO · 7-9 ORE

**H1** (Cormorant italic) `[NEW]`:
> Ortigia e Taormina, *in un giorno*

**Subhead** `[NEW]`:
> *Due gioielli della Sicilia orientale. Una sola giornata, tre soste, zero fretta.*

### Sezione 2 — Paragrafo intro

**Body** `[NEW]` (keyword: "tour Ortigia Taormina giornata", "shore excursion Catania porto"):

> Il tour **Ortigia + Taormina in giornata** è pensato per chi vuole vedere il meglio della Sicilia orientale senza dover scegliere. **Ortigia** al mattino, quando i vicoli sono freschi e la Fonte Aretusa è tranquilla. Pranzo vista mare. **Taormina** al pomeriggio, con la luce calda sul **teatro greco** e l'Etna sullo sfondo.
>
> Tour adatto anche a chi arriva al **porto crociere di Catania** ed ha 7-9 ore prima di reimbarcarsi. Pickup direttamente all'uscita dal terminal, ritorno garantito in tempo per la nave.
>
> Mercedes Classe V o GLB Premium, autista bilingue, partenze da Catania, Siracusa o hotel di tua scelta.

### Sezione 3 — "Il tour in 4 numeri"

```
7-9h                3 tappe             pickup            da €380
durata              Ortigia,            anche porto       Mercedes V
                    pranzo, Taormina    Catania            o GLB
```

### Sezione 4 — Tappa per tappa

`[NEW]`:

```
TAPPA 01 — ORTIGIA
Body narrativo:
"Iniziamo dall'isolotto. A Ortigia si cammina:
parcheggio in zona Foro Italico, poi a piedi.
Il Duomo costruito sul tempio di Atena, il
mercato del pesce alla mattina, la Fonte
Aretusa con i papiri. Un caffè in via Cavour,
una passeggiata sul lungomare di Levante.
Due ore tranquille, senza il caos della
stagione."

TAPPA 02 — PRANZO VISTA MARE
Body:
"A metà mattina ti chiediamo dove preferisci
pranzare: in una trattoria di Ortigia con
pescato del giorno, oppure ci spostiamo a
mezz'ora verso un ristorante sul mare a
Brucoli o Aci Trezza. Decidi tu, noi
conosciamo i posti."

TAPPA 03 — TAORMINA
Body:
"Nel pomeriggio risaliamo verso Taormina.
Sosta all'Isola Bella per la foto dalla
strada panoramica. Poi in centro: Corso
Umberto, Piazza IX Aprile con la vista
sull'Etna, e il teatro greco con la sua
acustica perfetta. Tempo libero per uno
shopping veloce o un aperitivo in
terrazza prima del ritorno."
```

### Sezione 5 — Cosa include + FAQ + differenziatori + tariffe

Pattern identico Tour Etna §15 adattato.

**Differenziatore unico del tour**: "Pickup dal porto crociere garantito con cartello al tuo nome".

**Tariffe**:
```
Mercedes Classe V                       da €380
Mercedes GLB Premium                    da €360
Mercedes Classe E                       da €400

Maggiorazione pickup porto crociere:   incluso
```

### Versione EN `/en/ortigia-taormina-tour`

**H1** `[NEW]`:
> Ortigia and Taormina, *in one day*

**Body intro EN** (target SEO "Catania cruise port shore excursion Ortigia Taormina"):

> The **Ortigia + Taormina day tour** is designed for travelers who want the best of eastern Sicily without having to choose. **Ortigia** in the morning, when the alleys are cool and the Aretusa Spring is quiet. Lunch by the sea. **Taormina** in the afternoon, with golden light on the **Greek theater** and Etna in the background.
>
> Perfect for travelers arriving at **Catania cruise port** with 7-9 hours before re-embarking. Pickup directly at the terminal exit, return guaranteed in time for the ship.
>
> Mercedes Class V or GLB Premium, bilingual driver, departures from Catania, Syracuse, or your hotel of choice.

---

## 17. WEDDING & EVENTI `/wedding-eventi` + `/en/weddings` · [NEW]

> ⚠️ **Pagina ex-novo**. Tutto `[NEW]`. Hero emotivo, body narrativo, form qualifying esteso (7 campi giustificati).

### Meta IT
- `<title>` `[NEW]`: **Wedding & Eventi · Mercedes con Autista per il Matrimonio in Sicilia | Sicily Driver**
- `<meta description>` `[NEW]`: **Servizio auto matrimonio in Sicilia: Mercedes Classe V per gli ospiti, Classe E per gli sposi. Flotta dedicata, driver in divisa, attesa estesa. Preventivo entro 24h.**

### Sezione 1 — Hero emotivo

**Eyebrow** `[NEW]`: PER IL GIORNO CHE RICORDERAI

**H1** (Cormorant italic 72px) `[NEW]`:
> Per il giorno *che ricorderai*

**Subhead** (Cormorant italic 24px) `[NEW]`:
> *Una flotta Mercedes per il matrimonio, per gli ospiti, per gli sposi.*

**Foto hero**: Mercedes Classe E nera o bianca fuori da chiesa barocca al tramonto (vedi prompt asset §18)

**CTA hero** `[NEW]`:
- Primario: "Parliamo del giorno →" (anchor form sotto)
- Secondario: "Scrivici su WhatsApp →"

### Sezione 2 — "Come ti accompagniamo" (narrative editorial)

**Eyebrow** `[NEW]`: COSA FACCIAMO

**H2** (Cormorant italic) `[NEW]`:
> Come *ti accompagniamo*

**3 paragrafi affiancati a piccole foto** `[NEW]`:

```
PRIMA — Sopralluogo e logistica
Foto: dettaglio chiave Mercedes su tavolo legno
Body Cormorant italic 18px:
"Ci dici location della cerimonia, location del
ricevimento, orari. Facciamo un sopralluogo virtuale
o di persona, ti diciamo subito i tempi reali (il
traffico del sabato di Noto in alta stagione è una
variabile vera). Concordiamo tutto per iscritto
una settimana prima."

DURANTE — Il giorno
Foto: Mercedes Classe E parcheggiata davanti chiesa
Body:
"Driver in divisa, auto lustrata, fiore sul cofano
se lo vuoi. Sposi su Classe E (nera o bianca, tu
scegli), ospiti VIP su Classe V o GLB. Attendiamo
quanto serve — tra cerimonia, foto e ricevimento
non ci sono fasi da rispettare a orologio."

DOPO — Trasferimenti ospiti
Foto: interni Mercedes Classe V con sedili pieni
Body:
"Spesso il vero lavoro arriva dopo: ospiti che
tornano in hotel a Siracusa o a Noto a mezzanotte,
parenti anziani da accompagnare prima. Coordiniamo
più auto in parallelo per non far aspettare nessuno."
```

### Sezione 3 — "Cosa è incluso nel servizio wedding"

**H2** (Cormorant italic) `[NEW]`:
> Cosa è *incluso*

**Lista editorial** `[NEW]`:

```
— Driver in giacca e cravatta (o divisa scura su richiesta)
— Auto lustrata e sanificata il giorno stesso
— Attesa estesa (anche 4-6 ore se serve)
— Flessibilità oraria totale (no penali per ritardi)
— Acqua fresca + tovaglioli a bordo
— Coordinamento di più auto via WhatsApp condiviso
— Decorazione discreta (nastri sulla maniglia, fiore sul cofano) — su richiesta

A richiesta con sovrapprezzo:
— Auto storica per gli sposi (Vespa, Ape Calessino, Fiat 500 d'epoca)
— Driver con conoscenza inglese fluente per ospiti internazionali
— Servizio multi-giorno (cerimonia + ricevimento giorno dopo + brunch domenica)
```

### Sezione 4 — "Galleria" (SEZIONE CONDIZIONALE)

> ⚠️ **Sezione condizionale**: se il cliente fornisce portfolio matrimoni reali → mosaico editorial 6-8 foto.
> **Se cliente NON ha portfolio**: sezione **rimossa**, sostituita opzionalmente con foto auto + dettaglio scena nuziale evocativo.

**Stato attuale**: `[NEW — CONDIZIONALE: chiedere al cliente]`

**Se portfolio disponibile**:
```
Eyebrow: GIORNI CHE ABBIAMO ACCOMPAGNATO
H2: Qualche giorno fa
Mosaico 6-8 foto reali (autorizzazione sposi richiesta)
Caption opzionale: nome chiesa/location + mese/anno
```

**Se portfolio NON disponibile**:
```
SEZIONE RIMOSSA — passare direttamente alla Sezione 5
Alternativa minimale (no foto reali sposi):
Eyebrow: DETTAGLI
H2: La macchina che sceglierai
3 foto editoriali generate AI: Classe V interni, Classe E
parcheggiata, dettaglio nastro sul cofano
```

### Sezione 5 — "Le auto per il giorno" (3 schede focus wedding)

**H2** (Cormorant italic) `[NEW]`:
> Le auto *per il giorno*

```
Mercedes Classe E (nera o bianca)
Per gli sposi
Body breve: La berlina executive Mercedes, disponibile in nero o bianco perla.
Interni in pelle chiara, finestrini oscurati. Il classico per la cerimonia,
elegante senza eccessi.

Mercedes Classe V
Per gli ospiti VIP
Body: 7 posti, interni in pelle. La scelta per gli ospiti più importanti:
genitori, testimoni, parenti stretti. Comoda anche per il trasferimento
verso il ricevimento.

Mercedes GLB Premium
Per gli ospiti
Body: SUV elegante per 4 passeggeri. Ideale per gruppi piccoli di amici
o per il trasferimento al ricevimento.
```

### Sezione 6 — FAQ wedding-specifiche

`[NEW]`:

```
Q1: Quanto in anticipo va prenotato?
A1: Per matrimoni in alta stagione (maggio-ottobre) consigliamo almeno
    6 mesi di anticipo, soprattutto per sabati e weekend lunghi.
    Per matrimoni infrasettimanali o bassa stagione anche 2-3 mesi
    bastano.

Q2: Cosa succede se il matrimonio è rimandato?
A2: Spostamento data senza penali con preavviso di almeno 30 giorni.
    Per imprevisti più ravvicinati troviamo sempre una soluzione,
    ne abbiamo viste tante.

Q3: Le decorazioni sono incluse?
A3: Decorazioni discrete (fiore sul cofano, nastri sulle maniglie) sono
    incluse. Allestimenti più elaborati o tema specifico li coordiniamo
    con il tuo wedding planner o con noi direttamente.

Q4: Quanti chilometri sono inclusi?
A4: Per cerimonia + ricevimento + rientro: fino a 80km totali inclusi.
    Oltre, è calcolato a parte. Per matrimoni con location distanti
    (es. cerimonia a Noto, ricevimento a Taormina) facciamo un preventivo
    dedicato.

Q5: Quante auto contemporaneamente potete fornire?
A5: Fino a 4-5 auto della nostra flotta in parallelo. Per matrimoni con
    necessità di 6+ auto contemporanee coordiniamo con NCC partner locali
    di fiducia.

Q6: Si paga il giorno o in anticipo?
A6: Caparra del 30% alla conferma, saldo 7 giorni prima del matrimonio.
    Fattura emessa al pagamento del saldo. Bonifico o carta accettati.

Q7: Cosa succede se l'auto ha un imprevisto il giorno?
A7: Abbiamo sempre un'auto di riserva pronta. In 25 anni di servizio
    non abbiamo mai mancato un appuntamento — ma se dovesse succedere,
    arriva subito l'auto di backup. Backup garantito contrattualmente.
```

### Sezione 7 — Form qualifying esteso

> ⚠️ Sub-purpose **D (Lead qualification)**. Form 7 campi giustificati dal valore commerciale alto.

**H2** (Cormorant italic) `[NEW]`:
> Parliamo *del giorno*

**Subhead** (DM Sans 18px) `[NEW]`:
> Più informazioni ci dai, più preciso sarà il preventivo. Risposta entro 24h.

**Form 7 campi** `[NEW]`:

```
1. Data dell'evento*
   Date picker

2. Location cerimonia*
   Text input (es. "Chiesa Madre, Noto")

3. Location ricevimento
   Text input opzionale

4. Numero auto necessarie*
   Dropdown: 1 / 2 / 3 / 4+ (specificare in note)

5. Numero totale di ospiti da trasportare
   Number input opzionale

6. Note speciali
   Textarea opzionale
   Placeholder: "Es. auto storica per gli sposi, fascia oraria
   particolare, decorazioni specifiche, ospiti stranieri..."

7. Contatto*
   Email + Telefono (almeno uno)

Privacy checkbox: [required]
"Ho letto la privacy policy e acconsento al trattamento dei dati
per ricevere il preventivo."

CTA: "Ricevi preventivo entro 24h →"
```

**Sotto form** `[NEW]`:
> *Per richieste urgenti scrivici direttamente su WhatsApp →* (link sotto)

### Sezione 8 — CTA finale

`[NEW]`:
```
3 CTA pari grandezza:
"WhatsApp diretto →"     → wa.me/393756413379
"Chiama Sicily Driver →" → tel:+393756413379
"Email →"                → mailto:info@ncctaxisiracusa.com
```

### Versione EN `/en/weddings`

Pattern identico, tradotto.

**H1** `[NEW]`:
> For the day *you'll remember*

**Body sezione 2 — Before**:
> "You tell us ceremony location, reception location, timing. We do a virtual or in-person site visit, we give you real timings right away (Saturday traffic in Noto in high season is a real variable). We confirm everything in writing one week ahead."

**Form fields EN**:
```
1. Event date*
2. Ceremony location*
3. Reception location
4. Number of cars needed*
5. Total number of guests to transport
6. Special notes
7. Contact*
CTA: "Get a quote within 24h →"
```

---

## 18. CHI SIAMO `/chi-siamo` + `/en/about` · [REFRESH placeholder]

> ⚠️ Copy esistente EN povero ("young and dynamic company born from a passion") → **REFRESH autorizzato** dal cliente, ma con placeholder per anno fondazione e storia fondatore (in attesa di info reali).

### Meta IT
- `<title>` `[NEW]`: **Chi Siamo · La Storia di Sicily Driver Siracusa | NCC dal {anno_fondazione}**
- `<meta description>` `[NEW]`: **Sicily Driver Siracusa: tre sedi, una flotta Mercedes, autisti bilingue. Da {anno_fondazione} accompagniamo viaggiatori, sposi e ospiti tra Siracusa, Noto e Marzamemi.**

### Sezione 1 — Hero ridotta narrativa

**Eyebrow** `[NEW]`: LA STORIA

**H1** (Cormorant italic) `[NEW — REFRESH]`:
> La storia *dietro Sicily Driver*

**Subhead** (Cormorant italic 20px) `[NEW]`:
> *Tre sedi, una flotta, un'idea semplice nata a Siracusa.*

**Foto affiancata**: foto del Sig. Izzo o team davanti auto (se autorizzata) — fallback: dettaglio mano sul volante con strada panoramica

### Sezione 2 — Racconto in 3-4 paragrafi serif italica calda

**H2** (Cormorant italic) `[NEW — REFRESH placeholder]`:
> Tutto è iniziato a *Siracusa*, nel {anno_fondazione}

**Body** (Cormorant italic 20px, max-width 680px, drop-cap terracotta) `[NEW — REFRESH]`:

> *Sicily Driver è nato nel {anno_fondazione} da un'idea semplice: che muoversi in Sicilia bene non dovesse essere un lusso da rotocalco. Tariffe oneste, Mercedes curate, autisti che parlano davvero italiano e inglese.*
>
> *La prima sede è stata a Siracusa, in via della Maestranza. Da lì ci siamo allargati a Noto, perché il Val di Noto chiedeva più macchine, e poi a Marzamemi, perché in estate il sud-est della Sicilia è un altro mondo.*
>
> *Oggi la flotta è di {numero_auto} Mercedes — Classe V per i gruppi, GLB Premium per le coppie, Classe E per le occasioni eleganti. Gli autisti sono {numero_autisti}, tutti bilingue, tutti formati sulla guida difensiva. La maggior parte di noi è nata in queste province: conosciamo le strade non per averle studiate sul navigatore, ma per averle vissute.*
>
> *Non facciamo brochure. Non promettiamo "eccellenza". Lo dimostriamo il giorno che ci scegli.*

**Placeholder espliciti per cliente**:
- `{anno_fondazione}` — anno reale di fondazione
- `{numero_auto}` — n. auto attuali della flotta
- `{numero_autisti}` — n. autisti regolari

### Sezione 3 — "In immagini" galleria storia

**H2** (Cormorant italic) `[NEW]`:
> *In immagini*

**Mosaico 6-8 foto reali** `[NEW — RICHIEDERE AL CLIENTE]`:
- Autista al volante (taglio editoriale, no posa)
- Dettaglio interno Mercedes (sedili pelle, dettaglio cruscotto)
- Team in sede (Siracusa, Noto, Marzamemi — preferibilmente al lavoro)
- Mercedes parcheggiata davanti location di lavoro (chiesa di Noto, porto di Marzamemi)
- Momento autentico (lavaggio auto, passaggio chiavi, briefing pre-tour)
- Vista esterna delle sedi (almeno 1)

**Fallback se foto reali non disponibili**: 3 foto editoriali generate AI con tono "Diario Mediterraneo" (vedi prompt asset §19).

### Sezione 4 — "Quello in cui crediamo" (3 blocchi narrativi)

> ⚠️ **NON "I nostri valori"**. Esplicitamente vietato dal CLAUDE.md di progetto.

**Eyebrow** `[NEW]`: COME LAVORIAMO

**H2** (Cormorant italic) `[NEW]`:
> Quello *in cui crediamo*

```
01
H3: Da Catania a Marzamemi senza scorciatoie
Body: La via panoramica costa 15 minuti in più. La facciamo perché
il viaggio è parte del servizio, non un trasferimento da concludere.

02
H3: Mercedes controllate ogni settimana
Body: Tagliando ufficiale ogni 15.000 km, controllo meccanico ogni
lunedì mattina, sanificazione interni dopo ogni servizio. Non si
discute.

03
H3: Driver che parlano inglese vero
Body: Selezioniamo gli autisti su tre criteri: patente B con KB
in regola, conoscenza profonda delle strade, inglese fluente
non scolastico. Niente Google Translate al volante.
```

### Sezione 5 — "Le 3 sedi"

**H2** (Cormorant italic) `[NEW]`:
> Le *tre sedi*

**3 card con indirizzo + mappa mini** `[NEW]`:

```
Card 01 — SIRACUSA
Foto: facciata sede con auto parcheggiata
Indirizzo: Via della Maestranza 28, 96100 Siracusa
Body breve: La sede storica, a cinque minuti da Ortigia.
Apertura ufficio: 9-19 lun-sab.

Card 02 — NOTO
Foto: facciata Noto
Indirizzo: Via Alcide De Gasperi 15, 96017 Noto
Body breve: Apertura nel {anno_apertura_noto} per coprire il Val di Noto.
A dieci minuti dalla Cattedrale.

Card 03 — MARZAMEMI
Foto: facciata Marzamemi
Indirizzo: Via Marzamemi 23, 96018 Marzamemi
Body breve: Sede estiva per il sud-est. Aperta da maggio a ottobre,
su appuntamento il resto dell'anno.
```

### Sezione 6 — CTA contatti

Pattern home (3 CTA: WhatsApp / Telefono / Email)

### Versione EN `/en/about` — pattern identico tradotto

**H1** `[NEW — REFRESH]`:
> The story *behind Sicily Driver*

**Subhead** `[NEW]`:
> *Three locations, one fleet, a simple idea born in Syracuse.*

**Body** `[NEW — REFRESH placeholder]`:

> *Sicily Driver started in {founding_year} with a simple idea: moving around Sicily well shouldn't be a magazine-spread luxury. Fair pricing, well-kept Mercedes, drivers who actually speak Italian and English.*
>
> *Our first location was in Syracuse, on via della Maestranza. From there we expanded to Noto, because Val di Noto needed more cars, and then to Marzamemi, because in summer southeastern Sicily is another world entirely.*
>
> *Today the fleet is {fleet_size} Mercedes — Class V for groups, GLB Premium for couples, Class E for elegant occasions. Our drivers are {driver_count}, all bilingual, all trained in defensive driving. Most of us were born in these provinces: we know the roads not from studying them on GPS, but from living them.*
>
> *We don't do brochure language. We don't promise "excellence". We show it on the day you choose us.*

**"Quello in cui crediamo" EN** = **"How we work"**:
```
01 — From Catania to Marzamemi, no shortcuts
02 — Mercedes serviced every week
03 — Drivers who speak real English
```

---

## 19. CONTATTI `/contatti` + `/en/contact` · Cluster Fast

### Meta IT
- `<title>` `[NEW]`: **Contatti · Sicily Driver Siracusa | NCC e Transfer in Sicilia**
- `<meta description>` `[NEW]`: **Contatti Sicily Driver Siracusa: WhatsApp +39 375 641 3379, email info@ncctaxisiracusa.com. Tre sedi: Siracusa, Noto, Marzamemi. Risposta 24/7.**

### Sezione 1 — Hero ridotta

**Eyebrow** `[NEW]`: SCRIVICI

**H1** (Cormorant italic 64px) `[NEW]`:
> *Parliamo*

**Subhead** (DM Sans 18px) `[NEW]`:
> Risponde Sicily Driver, in italiano o in inglese. Tempo di risposta: meno di un'ora, 24/7 su WhatsApp.

### Sezione 2 — "3 modi per raggiungerci" (3 card warm pari grandezza)

**Eyebrow** `[NEW]`: COME

**H2** (Cormorant italic) `[NEW]`:
> Tre modi *per raggiungerci*

```
Card 01 — WHATSAPP (consigliato)
Background: terracotta soft
Icona: WhatsApp custom (non default)
H3 (Cormorant 500 italic 28px): WhatsApp
Number large (Cormorant italic 40px terracotta): +39 375 641 3379
Body: Il modo più veloce. Risposta entro un'ora, anche di notte.
CTA: "Scrivici ora →"   → wa.me/393756413379

Card 02 — TELEFONO
Background: blu mare soft
H3: Telefono
Number large: +39 375 641 3379
Body: Stesso numero del WhatsApp. Tap per chiamare dal mobile.
CTA: "Chiama Sicily Driver →"   → tel:+393756413379

Card 03 — EMAIL
Background: cream profondo
H3: Email
Email large: info@ncctaxisiracusa.com
Body: Per richieste articolate, preventivi, fatturazione business.
Risposta entro 24h.
CTA: "Scrivici →"   → mailto:info@ncctaxisiracusa.com
```

### Sezione 3 — Form contatto base

**H2** (Cormorant italic) `[NEW]`:
> Oppure *scrivici qui*

**Form 4 campi** `[NEW]`:
```
1. Nome*
2. Telefono o WhatsApp*
3. Tipo richiesta (dropdown)*
   — Transfer aeroportuale
   — Tour privato
   — Wedding & Eventi
   — Business
   — Altro
4. Messaggio (textarea)

Privacy checkbox [required]:
"Ho letto la privacy policy e acconsento al trattamento dei dati."

CTA: "Invia richiesta →"
```

### Sezione 4 — "Le 3 sedi" con mappa interattiva

**H2** (Cormorant italic) `[NEW]`:
> Le *tre sedi*

**3 card con mappa mini interattiva** (Mapbox o Google Maps embed minimal, no banner pubblicitario):

```
SIRACUSA
Via della Maestranza 28
96100 Siracusa (SR)
Apertura: lun-sab 9-19
Mappa: 37.0596° N, 15.2966° E

NOTO
Via Alcide De Gasperi 15
96017 Noto (SR)
Apertura: lun-sab 9-19
Mappa: 36.8920° N, 15.0763° E

MARZAMEMI
Via Marzamemi 23
96018 Marzamemi (SR)
Apertura: maggio-ottobre, su appuntamento il resto dell'anno
Mappa: 36.7388° N, 15.1190° E
```

### Sezione 5 — "Tempi di risposta"

**Eyebrow** `[NEW]`: TEMPI

**H2** (Cormorant italic) `[NEW]`:
> Quando *rispondiamo*

**Block testuale editoriale** `[NEW]`:
```
WhatsApp:   meno di 1 ora, 24/7
Telefono:   in tempo reale, 24/7
Email:      entro 24 ore (lun-sab)
Form:       entro 24 ore (lun-sab)
```

### Sezione 6 — CTA finale "Per prima cosa"

Stesso pattern home.

### Versione EN `/en/contact`

Pattern identico tradotto.

**H1**: *Let's talk*

**Card 01 WhatsApp**: "The fastest way. Reply within an hour, even at night."

**Form fields**: Name / Phone or WhatsApp / Request type / Message

---

## 20. Microcopy form (placeholder, error, success)

Per tutti i form del sito (search bar, contatti, form tour, form wedding):

### IT

**Placeholder generici**:
```
Nome:        "Come ti chiami"
Telefono:    "Il tuo numero (con prefisso)"
Email:       "la-tua-email@dominio.it"
Data:        "Quando?"
Messaggio:   "Raccontaci cosa ti serve"
```

**Validation messages**:
```
Required:    "Questo campo serve"
Email:       "L'email non sembra valida"
Phone:       "Il numero non sembra valido (serve il prefisso, es. +39)"
```

**Success states**:
```
Form contatti:   "Messaggio ricevuto. Ti rispondiamo entro 24 ore."
Form tour:       "Richiesta ricevuta. Ti scriviamo entro un'ora."
Form wedding:    "Richiesta ricevuta. Ti rispondiamo entro 24 ore con un preventivo dettagliato."
Search bar:      "Stiamo calcolando il prezzo..."  (loading state)
```

**Error states**:
```
Form generico:   "Qualcosa non ha funzionato. Riprova o scrivici su WhatsApp."
Network error:   "Connessione interrotta. Riprova tra qualche secondo."
```

### EN

**Placeholder**:
```
Name:        "Your name"
Phone:       "Your phone (with country code)"
Email:       "your-email@domain.com"
Date:        "When?"
Message:     "Tell us what you need"
```

**Validation**:
```
Required:    "This field is required"
Email:       "Email doesn't look valid"
Phone:       "Phone number doesn't look valid (country code needed, e.g. +1)"
```

**Success**:
```
Contact:     "Message received. We'll reply within 24 hours."
Tour:        "Request received. We'll write you within an hour."
Wedding:     "Request received. We'll respond within 24 hours with a detailed quote."
Search:      "Calculating price..."
```

**Error**:
```
Generic:     "Something went wrong. Retry or message us on WhatsApp."
Network:     "Connection interrupted. Try again in a few seconds."
```

---

## 21. Refresh frasi morte candidate — richiede autorizzazione esplicita cliente

> ⚠️ Sezione di "candidati a rewriting" Pattern B. Niente di questo si tocca senza OK esplicito del cliente. Ognuno di questi pattern, se cambiato, può influire sul ranking se contiene keyword indirette.

### Frasi morte rilevate nel sito attuale

| Frase attuale | Pagina | Proposta refresh | Note rischio SEO |
|---|---|---|---|
| "passione per servizi NCC e transfer di alta qualità" | `/chi-siamo-en.php` (e probabilmente IT) | "esperienza concreta in transfer e tour privati" | Basso (frase generica, no keyword core) |
| "young and dynamic company born from a passion" | `/chi-siamo-en.php` | Sostituzione completa con narrativa §18 | Basso (no keyword) |
| "tailored solutions for individuals and businesses seeking comfort and safety" | `/chi-siamo-en.php` | "soluzioni cucite su singoli e aziende che cercano comfort reale" | Basso |
| "esperienza di viaggio esclusiva" (se presente) | da verificare | "viaggio comodo, sicuro, senza imprevisti" | Medio (`esclusiva` può essere termine LSI per "VIP") |
| "professionisti e turisti più esigenti" (se presente) | da verificare | rimozione + "professionisti, famiglie, turisti" | Basso |

### Frasi NON da toccare (anche se sembrano "morte")

| Frase | Pagina | Motivo lock |
|---|---|---|
| "Eleganza da VIP, prezzi di mercato" | home, header globale | **Tagline brand SEO-locked**, mai cambiare |
| "VIP-style elegance at market prices" | home EN | Lock |
| "noleggio con conducente (NCC)" | home, /servizi | Keyword esatta principale del settore |
| "il tuo partner per il noleggio con conducente" | home IT | Keyword anchor |
| "chauffeur-driven car services (NCC)" | home EN | Keyword EN |
| "transfer privati da e per tutti gli aeroporti dell'isola" | home IT | Keyword frase intera |
| "Mercedes Classe V, GLB Premium e Classe E" | tutti | Brand keyword |
| "24/7" | tutti | Trust + keyword |

### Procedura di refresh autorizzata

Per ogni frase nella tabella "candidati":
1. Mostrare al cliente la versione attuale + versione proposta affiancate
2. Confermare l'autorizzazione iscritto via WhatsApp o email
3. Solo dopo OK: aggiornare il corpo body relativo

**Default in caso di dubbio**: NON toccare. Pattern B è SEO-preserving prima che editoriale.

---

*COPY.md v1 — Pattern B Import & Polish. Iterazione di feedback: round 1 di 2 prima della definitività. Aggiornare le sezioni `[ESTRARRE]` mano a mano che le pagine `.php` mancanti vengono fetchate (vedi SEO.md §8).*
