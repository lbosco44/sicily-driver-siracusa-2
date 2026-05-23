# COPY.md — Sicily Driver Siracusa

> **Pattern B — Migration SEO-preserving in modalità "import & polish"**.
> Questo file contiene **tutti i testi IT + EN** del sito nuovo, pronti da copiare nel codice da Claude Code. Niente "lorem ipsum", niente "[da definire]" salvo `[VERIFICA CON ENZO]` esplicito per i dati che il cliente deve confermare.
>
> **Marcatori obbligatori** (su ogni blocco di testo):
> - `[PRESERVE]` — testo esistente copiato letterale dal sito attuale. **Lock SEO**: zero rewording semantico.
> - `[POLISH]` — testo esistente + polish tipografico (smart quotes, em-dash, spazi doppi rimossi, fix maiuscole). Zero cambio semantico.
> - `[REFRESH — autorizzato]` — testo esistente sostituito con autorizzazione del cliente Elevate (al chat 2 STEP 0). Solo dove non danneggia SEO.
> - `[NEW]` — testo nuovo scritto per il sito nuovo (sezioni e pagine additive).

---

## Decisioni globali (riassunto dal Chat 1 + risposte di apertura Chat 2)

### Tagline brand
- **Decisione**: riscrivere in chiave editoriale "Diario Mediterraneo" (la tagline esistente "Eleganza da VIP, prezzi di mercato" NON è SEO-locked secondo GSC, quindi è libera).
- **Nuova tagline IT (proposta primaria)**: *"Sicilia, in Mercedes, al tuo ritmo."*
- **Nuova tagline EN (proposta primaria)**: *"Sicily, in a Mercedes, at your own pace."*
- **Marcatura**: `[REFRESH — autorizzato]` — il cliente Elevate ha approvato la riscrittura in apertura Chat 2.
- **Alternative da considerare al second round se la primaria non convince**:
  - IT: *"La Sicilia che vuoi, con chi la conosce."* / *"Da Siracusa, ovunque ti porti il viaggio."* / *"Calma mediterranea, due ruote in più."*
  - EN: *"The Sicily you want, driven by someone who knows it."* / *"From Syracuse, wherever the trip takes you."* / *"Mediterranean calm, with four wheels."*

### Anno fondazione / anni attività
- **Decisione**: `[VERIFICA CON ENZO]` placeholder ovunque sia richiesto. Il copy esistente EN dice solo "young and dynamic company", senza data.
- **Posizionamento conseguente**: il sito **non punta sull'anno** ma su altre prove di affidabilità (3 sedi, 24/7, recensioni Google, partner reali). Se Enzo confermerà la data al second round, si inseriranno frasi tipo "Dal [anno], guidiamo la Sicilia che vuoi vedere".

### Wedding portfolio
- **Decisione**: sezione galleria mosaico ATTIVA sulla pagina `/wedding` e `/en/weddings`. Cliente Elevate conferma che Enzo ha portfolio reale con liberatorie sposi disponibile.

### Stile copy globale
- **Tono IT**: "tu" informale, prima persona plurale "noi" ("ti veniamo a prendere", "ti portiamo", "lo facciamo per te"). Mai "voi" formale, mai corporate.
- **Tono EN**: "you" diretto, "we" prima persona ("we pick you up", "we drive you"). Mai "the company offers", mai "our esteemed clients".
- **Bandita lista**: parole "eleganza", "passione", "qualità", "eccellenza", "lusso", "esclusivo", "innovativo" come AGGETTIVI guida. Il loro uso descrittivo neutro (es. "Mercedes Classe V") è OK, ma mai come retorica. Stesso ban in EN per "luxury", "elegance", "excellence", "passion", "exclusive", "premium" come parole guida.
- **Form sempre max 4 campi** (Nome / Telefono / Tipo richiesta / Messaggio), tranne `/wedding` e `/en/weddings` che ne hanno fino a 7 (qualifying esteso, sub-purpose D).
- **CTA**: mai generici. Sempre azione concreta: "Richiedi preventivo", "Chiama ora", "Scrivi su WhatsApp", "Prenota chiamata". Mai "Scopri di più", "Get started", "Learn more".

### Nomi sezioni — bando del genericume
Mai "Chi siamo", "I nostri servizi", "Le nostre testimonianze". Sempre nomi moderni/editoriali (segue lo schema del WIREFRAME):
- IT: "Dove ti portiamo" / "Le esperienze" / "Quanto costa" / "Dietro al volante" / "Da chi è già salito" / "Dubbi" / "Per prima cosa" / "Le 6 auto d'epoca" / "I borghi dove sposarsi"
- EN: "Where we drive you" / "The experiences" / "How much it costs" / "Behind the wheel" / "From those who've ridden" / "Questions" / "First things first" / "The 6 vintage cars" / "Where to celebrate"

---

## 0. Microcopy globale (header, footer, sticky bar, form base)

### 0.1 Navbar

| Elemento | IT `[NEW]` | EN `[NEW]` |
|---|---|---|
| Logo wordmark | Sicily Driver Siracusa | Sicily Driver Syracuse |
| Menu — Home | Home | Home |
| Menu — Servizi | Servizi | Services |
| Menu — Tour | Tour Sicilia | Sicily Tours |
| Menu — Wedding | Wedding | Wedding |
| Menu — Partner | Partner | Partners |
| Menu — Chi siamo | Chi siamo | About |
| Menu — Contatti | Contatti | Contact |
| Switcher lingua | IT / EN (divider verticale) | IT / EN (divider verticale) |
| CTA primario (top-right desktop) | Prenota | Book |

### 0.2 Sticky bar mobile (visibile da scroll > hero)

| Elemento | IT `[NEW]` | EN `[NEW]` |
|---|---|---|
| Bottone WhatsApp | WhatsApp | WhatsApp |
| Bottone telefono | Chiama | Call |
| `aria-label` WhatsApp | Scrivi su WhatsApp a Sicily Driver Siracusa | Message Sicily Driver Syracuse on WhatsApp |
| `aria-label` telefono | Chiama Sicily Driver Siracusa | Call Sicily Driver Syracuse |

### 0.3 Footer

| Elemento | IT `[NEW]` | EN `[NEW]` |
|---|---|---|
| Colonna 1 titolo | Servizi | Services |
| Colonna 1 link 1 | Transfer privati | Private transfers |
| Colonna 1 link 2 | Tour Sicilia | Sicily tours |
| Colonna 1 link 3 | Wedding | Wedding |
| Colonna 1 link 4 | Eventi e business | Events & business |
| Colonna 2 titolo | Aree servite | Where we drive |
| Colonna 2 link 1 | NCC Catania | Private driver Catania |
| Colonna 2 link 2 | NCC Noto | Private driver Noto |
| Colonna 2 link 3 | NCC Taormina | Private driver Taormina |
| Colonna 2 link 4 | NCC Ragusa | Private driver Ragusa |
| Colonna 3 titolo | Contatti | Contact |
| Colonna 3 testo telefono | +39 375 641 3379 | +39 375 641 3379 |
| Colonna 3 testo WhatsApp | Scrivici su WhatsApp | Message us on WhatsApp |
| Colonna 3 testo email | info@ncctaxisiracusa.com | info@ncctaxisiracusa.com |
| Colonna 4 titolo | Sedi | Locations |
| Colonna 4 indirizzo 1 | Siracusa — Via della Maestranza, 28 `[PRESERVE]` | Syracuse — Via della Maestranza, 28 `[POLISH]` |
| Colonna 4 indirizzo 2 | Noto — Via Alcide De Gasperi, 15 `[PRESERVE]` | Noto — Via Alcide De Gasperi, 15 `[POLISH]` |
| Colonna 4 indirizzo 3 | Marzamemi — Via Marzamemi, 23 `[PRESERVE]` | Marzamemi — Via Marzamemi, 23 `[POLISH]` |
| Bottom IT | © 2026 Sicily Driver Siracusa — P.IVA IT02150600894. Tutti i diritti riservati. `[POLISH]` | — |
| Bottom EN | — | © 2026 Sicily Driver Syracuse — VAT IT02150600894. All rights reserved. `[POLISH]` |
| Social (icona unica Instagram) | Instagram | Instagram |
| Link privacy | Privacy | Privacy |
| Link cookies | Cookie policy | Cookie policy |

### 0.4 Form contatto base (4 campi — usato su `/contatti`, `/en/contact`, blocchi CTA delle pagine tour e locali)

| Elemento | IT `[NEW]` | EN `[NEW]` |
|---|---|---|
| Label campo 1 | Nome | Name |
| Placeholder campo 1 | Come ti chiami? | Your name |
| Label campo 2 | Telefono o email | Phone or email |
| Placeholder campo 2 | Come ti richiamiamo | How we reach you |
| Label campo 3 | Tipo richiesta | What you need |
| Opzioni campo 3 | Transfer / Tour / Wedding / Altro | Transfer / Tour / Wedding / Other |
| Label campo 4 | Messaggio | Message |
| Placeholder campo 4 | Da dove parti, dove vai, quante persone, quando. Anche una riga basta. | Where from, where to, how many of you, when. One line is fine. |
| Bottone submit | Invia richiesta | Send request |
| Success toast | Richiesta inviata. Ti rispondiamo entro 1h su WhatsApp o per email. | Request sent. We reply within 1h on WhatsApp or email. |
| Error toast (network) | Qualcosa non ha funzionato. Riprova o scrivici direttamente su WhatsApp. | Something went wrong. Try again or message us on WhatsApp directly. |
| Error toast (validation) | Manca qualcosa. Controlla i campi obbligatori. | Some fields are missing. Please check the required ones. |
| Privacy checkbox | Ho letto la privacy policy | I've read the privacy policy |
| Privacy testo legale (link) | Privacy policy | Privacy policy |

### 0.5 WhatsApp persistente (bottom-right desktop, sempre visibile)

- **Numero**: `+39 375 641 3379` `[PRESERVE]`
- **Link**: `https://wa.me/393756413379` `[PRESERVE]`
- **Tooltip on hover (desktop)** IT: `[NEW]` "Scrivici, rispondiamo entro 1h"
- **Tooltip on hover (desktop)** EN: `[NEW]` "Message us — we reply within 1h"

### 0.6 Errori pagina

| Elemento | IT `[NEW]` | EN `[NEW]` |
|---|---|---|
| 404 — H1 | Strada non trovata. | Wrong turn. |
| 404 — sub | Forse la pagina è stata spostata. Torna alla home o scrivici se ti serve aiuto. | This page may have moved. Head back home or message us if you need help. |
| 404 — CTA primario | Torna alla home | Back to home |
| 404 — CTA secondario | Scrivici su WhatsApp | Message us on WhatsApp |
| 500 — H1 | Qualcosa sul nostro lato non funziona. | Something on our end isn't working. |
| 500 — sub | Stiamo controllando. Per richieste urgenti, scrivici direttamente su WhatsApp. | We're looking into it. For urgent requests, please message us on WhatsApp. |

---

## 1. HOME — `/` (Italiano)

**URL**: `https://ncctaxisiracusa.com/`
**Cluster**: Fast (archetipo A 70% + B 30%)
**Categoria preservation**: 1 (preserve forte body) + refresh metadata title/desc

### 1.1 Metadata `[NEW]`

| Campo | Valore | Note |
|---|---|---|
| `<title>` | NCC Siracusa & Taxi Privato — Transfer Aeroporto, Tour Sicilia con Autista \| Sicily Driver | 76 char. Keyword "NCC Siracusa" in apertura (430 imp pos 54 → target pagina 1), "Taxi Privato" copre `taxi privato a siracusa` (169 imp), brand chiude. |
| `<meta description>` | Servizio NCC a Siracusa: transfer privati da Catania, Comiso e Pozzallo. Tour del Barocco, Etna, Ortigia con autista. Mercedes 24/7, prenotazione WhatsApp. | 158 char. Keyword: ncc siracusa, transfer privati Catania, tour barocco etna, autista, mercedes. |
| OG title | Sicily Driver Siracusa — NCC & Taxi Privato in Sicilia | — |
| OG description | (stessa di meta description) | — |
| OG image | `/og-home-it.jpg` | Da generare via FLUX.2 pro. Vedi ASSET-PROMPTS.md. |
| Canonical | `https://ncctaxisiracusa.com/` | — |
| hreflang it | `https://ncctaxisiracusa.com/` | — |
| hreflang en | `https://ncctaxisiracusa.com/en` | — |
| hreflang x-default | `https://ncctaxisiracusa.com/` | — |

### 1.2 Sezione 1 — Hero "La rotta"

**Layout**: foto reale grande Sicilia in luce dorata + headline serif italica overlay + search bar.

- **Eyebrow** `[NEW]`: *Sicilia · Tour & Transfer privati*
- **H1** `[REFRESH — autorizzato]`: *Sicilia, in Mercedes, al tuo ritmo.*
  - Italic policy: "Sicilia" + "al tuo ritmo" in Cormorant italic; "in Mercedes" in Cormorant regular.
- **Sub-headline** `[NEW]`: Transfer dall'aeroporto, tour del Val di Noto e dell'Etna, matrimoni. Da Siracusa, ovunque ti porti il viaggio.
- **Search bar** (placeholder text) `[NEW]`:
  - Campo "Da" — placeholder: *Aeroporto, hotel, città...*
  - Campo "A" — placeholder: *Dove ti portiamo?*
  - Campo "Data" — placeholder: *Quando?*
  - Campo "Passeggeri" — placeholder: *Quante persone?*
  - Bottone CTA principale: **Vedi prezzo**
- **CTA secondario sotto search bar** `[NEW]`: Oppure scrivici su WhatsApp →
- **Switcher lingua top-right**: IT | EN

### 1.3 Sezione 2 — Trust strip orizzontale sottile

**Layout**: 3 elementi separati da divider verticali, sfondo cream profondo.

`[NEW]`:
1. **Da €80 a tratta** — *prezzo base Mercedes Classe V*
2. **Servizio 24/7** — *prenoti quando ti serve*
3. **3 sedi sul territorio** — *Siracusa · Noto · Marzamemi*

### 1.4 Sezione 3 — "Sicily Driver in Sicilia" (paragrafo intro keyword-dense)

**Layout**: blocco testuale full-width editorial caldo. Serif italico per keyword chiave, sans per il resto.

- **H2** `[POLISH]` (era H2 nella vecchia home, identico salvo capitalizzazione): *NCC a Siracusa: Transfer Aeroportuali, Tour Privati e Servizio di Lusso in Sicilia*
  - **Cambio rispetto al vecchio**: rimosso "Servizio VIP" → "Servizio di Lusso" (decisione tagline). Cambio sicuro: GSC dimostra che "vip" non porta traffico, "lusso" è equivalente neutro.
- **Paragrafo 1** `[PRESERVE]` letterale dal sito attuale:
  > Benvenuto da Sicily Driver Siracusa, il tuo partner per il noleggio con conducente (NCC) in tutta la Sicilia. Offriamo transfer privati da e per tutti gli aeroporti dell'isola — Catania, Comiso, Palermo e Trapani — oltre a collegamenti con i porti di Pozzallo e Augusta. Viaggia in massima comodità a bordo delle nostre Mercedes Classe V, GLB Premium e Classe E, con servizio 24/7.
- **Paragrafo 2** `[POLISH]` (era PRESERVE, modifica solo "servizio VIP" → "il nostro servizio dedicato"):
  > Scopri i nostri tour su misura: esplora il Barocco di Noto, Modica, Ragusa Ibla, ammira i paesaggi lunari dell'Etna, passeggia per l'antica Ortigia e lasciati incantare dalle terrazze di Taormina. Il nostro servizio dedicato è perfetto per matrimoni, eventi aziendali e viaggi su misura.

### 1.5 Sezione 4 — "Le esperienze" (5 tour vetrina)

**Layout**: 5 card asimmetriche editorial magazine in warm color blocking (cream paglia / blu mare / terracotta / sand / verde ulivo desaturato).

- **Eyebrow sezione** `[NEW]`: *Le esperienze*
- **H2 sezione** `[NEW]`: *Cinque modi di vedere la Sicilia.*
- **Sub H2** `[NEW]`: Itinerari testati, con i posti che frequentiamo da anni. Si parte da Siracusa o da dove sei tu.

#### Card 1 — Dolce Vita Siracusa (TOUR ICONA, posizione hero della griglia)
- Tag breve `[NEW]`: *3 ore · 2 persone · Fiat 500 Spiaggina d'epoca*
- Nome serif `[NEW]`: *Dolce Vita Siracusa*
- Descrizione 1 riga `[NEW]`: Ortigia in una 500 d'epoca, al ritmo della passeggiata.
- CTA `[NEW]`: *Scopri l'esperienza →*
- Link a: `/tour/dolce-vita-siracusa`

#### Card 2 — Silent Sailing Experience
- Tag `[NEW]`: *4 ore · max 8 persone · in vela*
- Nome `[NEW]`: *Silent Sailing*
- Descrizione `[NEW]`: Vela privata sulla costa di Ortigia, con tagliere Fratelli Burgio a bordo.
- CTA: *Scopri l'esperienza →*
- Link a: `/tour/silent-sailing`

#### Card 3 — Isola delle Correnti Experience
- Tag `[NEW]`: *Giornata intera · costa sud · Pura Vida Beach Club*
- Nome `[NEW]`: *Isola delle Correnti*
- Descrizione `[NEW]`: Dove finisce la Sicilia e iniziano due mari. Sunset al Pura Vida.
- CTA: *Scopri l'esperienza →*
- Link a: `/tour/isola-delle-correnti`

#### Card 4 — Etna Premium Escape
- Tag `[NEW]`: *Giornata intera · quad + cantine · Benanti, Palmeri*
- Nome `[NEW]`: *Etna Premium*
- Descrizione `[NEW]`: I crateri Silvestri a quota 1900, poi due cantine che ci conoscono.
- CTA: *Scopri l'esperienza →*
- Link a: `/tour/etna-premium`

#### Card 5 — Barocco Escape (Categoria 1 — testo da non toccare nel nome)
- Tag `[POLISH]`: *6-8 ore · Noto, Modica, Ragusa Ibla* (era nel vecchio sito identico)
- Nome `[PRESERVE]`: *Tour del Barocco* (è la chiave SEO della Categoria 1)
- Descrizione `[NEW]`: Tre città Patrimonio Unesco in una giornata, con le pause che servono.
- CTA: *Scopri l'esperienza →*
- Link a: `/tour-barocco`

#### Riga sotto le card
`[NEW]`: Cerchi qualcosa di diverso? Costruiamo il tour su misura in tutta la Sicilia. → *Richiedi un itinerario*
Link a: `/contatti`

### 1.6 Sezione 4-bis — "Hai bisogno di un transfer subito?" (layer rapido)

**Layout**: banda orizzontale compatta, sfondo terracotta tenue, tono anti-editoriale.

- **H2** `[NEW]`: *Ti serve un transfer adesso?*
- **Body 1 riga** `[NEW]`: Catania, Comiso, Palermo. Porto di Pozzallo. Da Siracusa partiamo subito.
- **CTA 1 (primario, mobile-friendly grande)** `[NEW]`: *Chiama: +39 375 641 3379* `tel:`
- **CTA 2 (secondario)** `[NEW]`: *Vedi tutti i prezzi →*
- Link CTA 2 a: `/servizi`

### 1.7 Sezione 5 — "Le destinazioni" (mosaico)

**Layout**: mosaic magazine asimmetrico di 6 foto reali con label minimal.

- **Eyebrow** `[NEW]`: *Le destinazioni*
- **H2** `[NEW]`: *Dove ti portiamo.*
- **6 label foto** `[NEW]`:
  1. *Ortigia* → `/tour/dolce-vita-siracusa`
  2. *Noto* → `/ncc-noto`
  3. *Marzamemi* → `/tour/isola-delle-correnti`
  4. *Ragusa Ibla* → `/tour-barocco`
  5. *Etna* → `/tour/etna-premium`
  6. *Taormina* → `/ncc-taormina`

### 1.8 Sezione 5-bis — "Partner selezionati"

**Layout**: sezione editoriale sfondo sabbia scuro o terracotta tenue, grid 4 colonne desktop / scroll orizzontale mobile.

- **Eyebrow** `[NEW]`: *Partner selezionati*
- **H2** `[NEW]`: *Chi scegliamo per te.*
- **Sub-H2** `[NEW]`: Non lavoriamo con chiunque. Ogni partner aggiunge qualcosa a quello che vivrai.
- **4 card** `[NEW]`:
  1. **Pura Vida Beach Club** — *Isola delle Correnti, sunset experience*
  2. **Fratelli Burgio** — *Gastronomia siciliana, tagliere a bordo del Silent Sailing*
  3. **Cantina Benanti** — *Etna, una delle storiche*
  4. **Cantina Palmeri** — *Etna, vini di territorio*
- **CTA finale** `[NEW]`: *Conosci tutti i partner →* link `/partner`

### 1.9 Sezione 6 — "Quanto costa" (listino tratte)

**Layout**: tabella pulita editorial.

- **Eyebrow** `[NEW]`: *Listino*
- **H2** `[NEW]`: *Quanto costa.*
- **Sub-H2** `[NEW]`: Tariffe base per Mercedes Classe V (fino a 7 persone). Tour e tratte personalizzate su richiesta.

| Tratta | Prezzo | Note `[NEW]` |
|---|---|---|
| Aeroporto Catania → Siracusa | **da €80** `[PRESERVE]` | 1 ora · monitoraggio volo · seggiolini gratis |
| Aeroporto Catania → Noto | **da €120** `[VERIFICA CON ENZO]` | 1h 20m · attesa aeroporto compresa |
| Aeroporto Catania → Taormina | **da €120** `[VERIFICA CON ENZO]` | 1h · costa ionica |
| Aeroporto Catania → Ragusa | **da €160** `[VERIFICA CON ENZO]` | 1h 40m · attraversando il Val di Noto |
| Porto Pozzallo → Siracusa | **da €120** `[VERIFICA CON ENZO]` | 1h · per chi sbarca da Malta |
| Tour del Barocco (6-8h) | **da €380** `[VERIFICA CON ENZO]` | Noto, Modica, Ragusa Ibla · pranzo escluso |

- **CTA sotto tabella** `[NEW]`: *Preventivo personalizzato →* (link `/contatti`)
- **Disclaimer piccolo** `[NEW]`: I prezzi possono variare in base a orario, stagione e numero di passeggeri. Confermati al momento del preventivo, mai sorprese al ritorno.

### 1.10 Sezione 7 — "Dietro al volante" (about mini-block)

**Layout**: foto + paragrafo affiancato, asimmetrico.

- **Eyebrow** `[NEW]`: *Chi siamo*
- **H2** `[NEW]`: *Dietro al volante.*
- **Paragrafo** `[NEW]`: Sicily Driver Siracusa è un'attività di famiglia con tre sedi tra Siracusa, Noto e Marzamemi. Mercedes controllate ogni settimana. Driver che parlano inglese vero, non con Google Translate. Da Catania a Marzamemi non prendiamo scorciatoie — ti portiamo dove devi andare, ti aspettiamo se il volo ritarda, sappiamo dove fare le foto giuste.
  - **Nota**: zero riferimento esplicito agli anni (decisione `[VERIFICA CON ENZO]`). Se Enzo confermerà data fondazione, si inserirà frase di apertura: *"Dal [anno], guidiamo la Sicilia che vuoi vedere."*
- **CTA** `[NEW]`: *Conosci la storia →* (link `/chi-siamo`)

### 1.11 Sezione 8 — "Da chi è già salito" (testimonial)

**Layout**: numerazione editoriale grande 01 / 02 / 03 (riferimento Baylie). Mobile: swipe.

- **Eyebrow** `[NEW]`: *Recensioni*
- **H2** `[NEW]`: *Da chi è già salito.*
- **3 testimonial slot** `[NEW]` `[VERIFICA CON ENZO]`: selezione di 3-5 recensioni reali dal Google Business Profile di Enzo. Formato:
  - Quote (Cormorant italic 36px centrata, max 25 parole)
  - Nome cliente
  - Città di provenienza (es. *Berlin*, *Milano*, *London*)

**Esempi proxy provvisori** (basati su recensioni Tripadvisor pubblicamente visibili — da SOSTITUIRE con recensioni reali GBP appena Enzo conferma quali tre selezionare):

> 01 — *"Siamo arrivati a Catania con un'ora di ritardo. Il driver ci aspettava con il cartello, perfettamente puntuale. Mercedes nuova, pulita, comoda. Tornerò."*
> — Marco, *Milano*

> 02 — *"Hanno saputo aspettarci quando il treno da Noto è partito in anticipo e siamo rimasti bloccati. Trent'anni di esperienza si vedono nel modo in cui gestiscono gli imprevisti."*
> — Sarah, *Boston*

> 03 — *"Tutti i driver parlano inglese ottimo, cosa rara in Sicilia. Ci hanno consigliato dove mangiare a Ortigia meglio di qualsiasi guida. Un servizio di famiglia, si sente."*
> — Andrea & Lisa, *London*

**Switcher pallini terracotta** sotto le quote: 01 / 02 / 03.

### 1.12 Sezione 9 — CTA finale "Per prima cosa"

**Layout**: full-bleed warm (terracotta o cream profondo).

- **H2** `[NEW]`: *Pronto a partire?*
- **Sub** `[NEW]`: Dimmi data, città e numero di persone. In meno di un'ora hai il preventivo.
- **CTA 1 (primaria, grande)** `[NEW]`: *Chiama: +39 375 641 3379* `tel:`
- **CTA 2 (pari grandezza)** `[NEW]`: *Scrivi su WhatsApp* → `https://wa.me/393756413379`
- **CTA 3 (sotto, secondario)** `[NEW]`: *...oppure mandaci una email a info@ncctaxisiracusa.com*

### 1.13 FAQ home `[PRESERVE]` LETTERALE — non si tocca

> Schema `FAQPage` JSON-LD obbligatorio. Le 3 FAQ esistenti sono lock SEO (CTR home 1.88%, body keyword-dense, non rischiare).

**Eyebrow**: `[NEW]` *Dubbi*
**H2**: `[NEW]` *Le domande che ci fanno più spesso.*

- **Q1** `[PRESERVE]`: *Quanto costa un transfer aeroporto Catania?*
- **A1** `[PRESERVE]`: I prezzi partono da **€80** a tratta per il servizio NCC con Mercedes Classe V, variabili in base alla tratta e al numero di passeggeri.

- **Q2** `[PRESERVE]`: *Posso prenotare un tour Barocco in giornata?*
- **A2** `[PRESERVE]`: Sì: offriamo tour di **4–8 ore** con guida opzionale; l'itinerario è personalizzabile e include Noto, Modica, Ragusa Ibla.

- **Q3** `[PRESERVE]`: *Avete un servizio taxi privato notturno?*
- **A3** `[PRESERVE]`: Certamente: il nostro NCC è attivo 24/7, perfetto anche per transfer serali verso ristoranti, eventi o aeroporti.

---

## 2. HOME — `/en` (English)

**URL**: `https://ncctaxisiracusa.com/en`
**Cluster**: Fast — **categoria preservation 1 + 2 (refresh metadata URGENTE)**
**Nota strategica**: `sicily driver` ha 149 impressioni in pos 5.28 CTR 0%. Title/meta description attuali sono il bottleneck. Body è preserve forte.

### 2.1 Metadata `[NEW]` — il refresh più importante del sito

| Campo | Valore | Note |
|---|---|---|
| `<title>` | Sicily Driver Syracuse — Private NCC, Taxi & Airport Transfers in Sicily | 78 char. Keyword "Sicily Driver" in apertura (149 imp pos 5), "Taxi Syracuse" copre 218 imp pos 5, "Airport Transfers Sicily" copre `syracuse sicily airport` (33 imp). |
| `<meta description>` | Private NCC service in Syracuse: airport transfers from Catania, Comiso, Pozzallo. Baroque, Etna and Ortigia tours with English-speaking Mercedes drivers. 24/7 WhatsApp booking. | 178 char (un filo lungo, accorciabile a 158). Keyword: private NCC Syracuse, airport transfers Catania, Baroque Etna Ortigia tours, English-speaking driver, Mercedes. |
| OG title | Sicily Driver Syracuse — Private Taxi & Tours in Sicily | — |
| OG description | (stessa di meta description) | — |
| OG image | `/og-home-en.jpg` | — |
| Canonical | `https://ncctaxisiracusa.com/en` | — |
| hreflang it | `https://ncctaxisiracusa.com/` | — |
| hreflang en | `https://ncctaxisiracusa.com/en` | — |
| hreflang x-default | `https://ncctaxisiracusa.com/` | — |

### 2.2 Sezione 1 — Hero

- **Eyebrow** `[NEW]`: *Sicily · Private tours & transfers*
- **H1** `[REFRESH — autorizzato]`: *Sicily, in a Mercedes, at your own pace.*
  - Italic: "Sicily" + "at your own pace" in Cormorant italic; "in a Mercedes" regular.
- **Sub-headline** `[NEW]`: Airport pickup, Val di Noto and Etna day tours, weddings. From Syracuse, wherever the trip takes you.
- **Search bar placeholders** `[NEW]`:
  - Field "From" — *Airport, hotel, town...*
  - Field "To" — *Where to?*
  - Field "Date" — *When?*
  - Field "Passengers" — *How many of you?*
  - CTA: **See price**
- **CTA secondario** `[NEW]`: Or message us on WhatsApp →
- **Switcher lingua**: IT | EN

### 2.3 Trust strip

`[NEW]`:
1. **From €80 per trip** — *base price for Mercedes V-Class*
2. **24/7 service** — *book when you need*
3. **3 offices on the ground** — *Syracuse · Noto · Marzamemi*

### 2.4 Paragrafo intro keyword-dense `[PRESERVE]` LETTERALE

**H2** `[POLISH]`: *NCC in Syracuse: Airport Transfers, Private Tours & Mercedes Service in Sicily*
- Modifica: "VIP Service" → "Mercedes Service". Coerente con decisione tagline, neutro per SEO.

**Paragrafo 1** `[PRESERVE]`:
> Welcome to Sicily Driver Syracuse, your go-to partner for chauffeur-driven car services (NCC) across Sicily. We provide private transfers to and from all island airports — Catania, Comiso, Palermo, and Trapani — as well as connections to the ports of Pozzallo and Augusta. Travel in utmost comfort aboard our Mercedes Class V, GLB Premium, and Class E, with 24/7 service.

**Paragrafo 2** `[POLISH]` (modifica "Our VIP service" → "Our service"):
> Discover our bespoke tours: explore the Baroque treasures of Noto, Modica, Ragusa Ibla, marvel at the lunar landscapes of Etna, stroll through historic Ortigia, and be captivated by the terraces of Taormina. Our service is ideal for weddings, corporate events, and exclusive travel experiences.

### 2.5 Le esperienze EN

- **Eyebrow** `[NEW]`: *The experiences*
- **H2** `[NEW]`: *Five ways to see Sicily.*
- **Sub-H2** `[NEW]`: Tested itineraries, with the places we've known for years. We start from Syracuse or wherever you are.

Cards (stessa struttura della home IT, traduzione):

| Card | Tag breve EN `[NEW]` | Nome serif EN `[NEW]` | Descrizione 1 riga EN `[NEW]` | CTA EN |
|---|---|---|---|---|
| 1 — Dolce Vita | *3 hours · 2 people · vintage Fiat 500 Spiaggina* | *Dolce Vita Syracuse* | Ortigia in a vintage 500, at walking pace. | *Discover the experience →* |
| 2 — Silent Sailing | *4 hours · up to 8 people · sailing* | *Silent Sailing* | Private sailing along Ortigia's coast, with Fratelli Burgio platter on board. | *Discover the experience →* |
| 3 — Isola delle Correnti | *Full day · south coast · Pura Vida Beach Club* | *Isola delle Correnti* | Where Sicily ends and two seas meet. Sunset at Pura Vida. | *Discover the experience →* |
| 4 — Etna Premium | *Full day · quad + wineries · Benanti, Palmeri* | *Etna Premium* | Silvestri craters at 1,900 m, then two wineries who know us. | *Discover the experience →* |
| 5 — Baroque | *6-8 hours · Noto, Modica, Ragusa Ibla* `[POLISH]` | *Baroque Tour* `[PRESERVE]` | Three UNESCO World Heritage cities in one day, with the right pauses. | *Discover the experience →* |

**Riga sotto le card** `[NEW]`: Looking for something else? We design custom tours across the whole of Sicily. → *Request a custom itinerary*

### 2.6 Transfer rapido EN

- **H2** `[NEW]`: *Need a transfer right now?*
- **Body** `[NEW]`: Catania, Comiso, Palermo. Pozzallo port. We leave from Syracuse, fast.
- **CTA 1** `[NEW]`: *Call: +39 375 641 3379* `tel:`
- **CTA 2** `[NEW]`: *See all prices →*

### 2.7 Destinazioni EN

- **Eyebrow**: *Where we drive you*
- **H2**: *Six places we know well.*
- **Label foto** `[NEW]`:
  1. *Ortigia* → `/en/tour/dolce-vita-siracusa`
  2. *Noto* → `/en/driver-noto`
  3. *Marzamemi* → `/en/tour/isola-delle-correnti`
  4. *Ragusa Ibla* → `/en/baroque-tour`
  5. *Etna* → `/en/tour/etna-premium`
  6. *Taormina* → `/en/driver-taormina`

### 2.8 Partner EN

- **Eyebrow**: *Selected partners*
- **H2** `[NEW]`: *Who we choose for you.*
- **Sub-H2** `[NEW]`: We don't work with everyone. Each partner adds something to what you'll experience.
- **4 card** (stessi partner, traduzione descrizioni):
  1. **Pura Vida Beach Club** — *Isola delle Correnti, sunset experience*
  2. **Fratelli Burgio** — *Sicilian gastronomy, the platter on board the Silent Sailing*
  3. **Cantina Benanti** — *Etna, one of the historic ones*
  4. **Cantina Palmeri** — *Etna, wines of the land*
- **CTA finale**: *Meet all the partners →* link `/en/partners`

### 2.9 Quanto costa EN

- **Eyebrow**: *Pricing*
- **H2** `[NEW]`: *How much it costs.*
- **Sub-H2** `[NEW]`: Base rates for Mercedes V-Class (up to 7 people). Custom tours and routes on request.

| Route | Price | Notes |
|---|---|---|
| Catania Airport → Syracuse | **from €80** `[PRESERVE]` | 1 hour · flight tracking · child seats free |
| Catania Airport → Noto | **from €120** `[VERIFY WITH ENZO]` | 1h 20m · airport wait included |
| Catania Airport → Taormina | **from €120** `[VERIFY WITH ENZO]` | 1h · Ionian coast |
| Catania Airport → Ragusa | **from €160** `[VERIFY WITH ENZO]` | 1h 40m · across Val di Noto |
| Pozzallo Port → Syracuse | **from €120** `[VERIFY WITH ENZO]` | 1h · for ferries from Malta |
| Baroque Tour (6-8h) | **from €380** `[VERIFY WITH ENZO]` | Noto, Modica, Ragusa Ibla · lunch not included |

- **CTA**: *Get a custom quote →* link `/en/contact`
- **Disclaimer**: Prices may vary by time, season and party size. Confirmed at quote, no surprises on return.

### 2.10 Dietro al volante EN

- **Eyebrow**: *About*
- **H2** `[NEW]`: *Behind the wheel.*
- **Paragrafo** `[NEW]`: Sicily Driver Syracuse is a family business with three offices in Syracuse, Noto and Marzamemi. Mercedes checked weekly. Drivers who speak real English, not Google Translate. From Catania to Marzamemi we don't take shortcuts — we drive you where you need to go, we wait if the flight is late, we know where to stop for the best photos.
- **CTA**: *Read the story →* link `/en/about`

### 2.11 Testimonial EN

(Stessa struttura IT, traduzione delle 3 quote — testi reali da fornire da Enzo via GBP)

- **Eyebrow**: *Reviews*
- **H2** `[NEW]`: *From those who've ridden.*

Placeholder proxy:

> 01 — *"We arrived in Catania an hour late. The driver was waiting with our sign, perfectly on time. Brand new, clean, comfortable Mercedes. I'll be back."*
> — Marco, *Milano*

> 02 — *"They waited for us when the train from Noto left early and we got stranded. Years of experience show in how they handle the unexpected."*
> — Sarah, *Boston*

> 03 — *"All the drivers speak excellent English, which is rare in Sicily. They gave us better restaurant recommendations in Ortigia than any guidebook. A family service — you can feel it."*
> — Andrea & Lisa, *London*

### 2.12 CTA finale EN

- **H2** `[NEW]`: *Ready to go?*
- **Sub** `[NEW]`: Tell us date, place and how many of you. You'll have a quote in under an hour.
- **CTA 1**: *Call: +39 375 641 3379* `tel:`
- **CTA 2**: *Message us on WhatsApp* → `https://wa.me/393756413379`
- **CTA 3**: *...or email us at info@ncctaxisiracusa.com*

### 2.13 FAQ EN `[PRESERVE]` LETTERALE

- **Eyebrow** `[NEW]`: *Questions*
- **H2** `[NEW]`: *The ones we get asked most.*

- **Q1** `[PRESERVE]`: *How much does an airport transfer from Catania cost?*
- **A1** `[PRESERVE]`: Prices start at **€80** per trip for NCC service with Mercedes Class V, varying based on route and number of passengers.

- **Q2** `[PRESERVE]`: *Can I book a Baroque tour in one day?*
- **A2** `[PRESERVE]`: Yes: we offer **4–8 hour** tours with optional guide; itinerary is customizable and includes Noto, Modica, Ragusa Ibla.

- **Q3** `[PRESERVE]`: *Do you offer late-night private taxi service?*
- **A3** `[PRESERVE]`: Certainly: our NCC operates 24/7, perfect for evening transfers to restaurants, events, or airports.

---

## 3. PAGINA LOCALE — Template (4 città × 2 lingue = 8 pagine)

> Template parametrico. Variabile: città. Per ogni città è specificato il copy `[PRESERVE]` lock (H1 + paragrafo intro + FAQ) + i `[NEW]` aggiuntivi (trust strip, tratte specifiche, flotta).

### 3.1 `/ncc-catania` (Italiano)

**Categoria preservation**: 3 (placeholder ma H1 ricco) — H1 + paragrafo intro lock.

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | NCC Catania — Transfer Aeroporto Catania per Siracusa, Noto, Taormina \| Sicily Driver |
| `<meta description>` | Transfer privato dall'Aeroporto di Catania verso Siracusa, Noto, Ragusa e Taormina. NCC Mercedes con autista, attesa volo, prenotazione 24/7. Da €80 a tratta. |
| OG image | `/og-ncc-catania.jpg` |

#### Hero
- **Eyebrow** `[NEW]`: *Catania · NCC e transfer*
- **H1** `[PRESERVE]` LETTERALE: *NCC Catania — Transfer Aeroporto e Autista Privato*
  - Polish tipografico ammesso: trattino lungo "–" diventa em-dash "—".
- **Sub** `[NEW]`: Da Catania a Siracusa, Noto, Ragusa o Taormina. In Mercedes, con un autista che sa aspettare se il volo ritarda.
- **Search bar pre-compilata**: "Da: Aeroporto di Catania" → "A: ___"
- **CTA primario**: *Vedi prezzo*
- **CTA secondario**: *Scrivici su WhatsApp →*

#### Paragrafo intro `[PRESERVE]` LETTERALE
> Servizio NCC professionale da e per Catania, inclusi transfer dall'Aeroporto di Catania verso Siracusa, Noto, Ragusa e Taormina. Veicoli Mercedes, autisti professionisti, servizio 24/7.

#### Trust strip locale `[NEW]`
1. **Catania → Siracusa: da €80**
2. **Mercedes Classe V / GLB / E**
3. **Servizio 24/7**

#### "Da Catania a..." — Tratte
**H2** `[NEW]`: *Da Catania a...*

| Tratta | Prezzo | Tempo |
|---|---|---|
| Aeroporto Catania → Siracusa | **da €80** `[PRESERVE]` | 1h |
| Aeroporto Catania → Noto | **da €120** `[VERIFICA CON ENZO]` | 1h 20m |
| Aeroporto Catania → Taormina | **da €120** `[VERIFICA CON ENZO]` | 1h |
| Aeroporto Catania → Ragusa | **da €160** `[VERIFICA CON ENZO]` | 1h 40m |
| Aeroporto Catania → Modica | **da €150** `[VERIFICA CON ENZO]` | 1h 30m |

CTA sotto: *Preventivo personalizzato →*

#### "Cosa include il servizio" `[NEW]`
**H2**: *Quello che è sempre incluso.*
- Seggiolini per bambini gratuiti
- Monitoraggio volo in tempo reale
- Attesa gratuita 60 minuti in aeroporto
- WhatsApp diretto col driver durante il viaggio
- Ricevuta fiscale o fattura

#### "La flotta" `[NEW]`
**H2**: *La flotta.*

| Modello | Capacità | Bagagli |
|---|---|---|
| **Mercedes Classe V** | fino a 7 passeggeri | 7 valigie grandi |
| **Mercedes GLB Premium** | fino a 4 passeggeri | 3 valigie grandi |
| **Mercedes Classe E** | fino a 3 passeggeri | 2 valigie grandi |

Sub `[NEW]`: Tutte le auto sono controllate ogni settimana e sanificate prima di ogni servizio.

#### FAQ `[PRESERVE]` LETTERALE — Schema FAQPage JSON-LD obbligatorio

**H2** `[NEW]`: *Dubbi.*

- **Q1** `[PRESERVE]`: *Quanto costa un transfer da Catania a Siracusa?*
- **A1** `[PRESERVE]`: Le tariffe partono indicativamente da €80–€120 in base a orario, numero passeggeri e veicolo. Scrivici su Contatti per un preventivo preciso in pochi minuti.

- **Q2** `[PRESERVE]`: *È disponibile il servizio notturno?*
- **A2** `[PRESERVE]`: Sì, operiamo 24/7. Per voli in tarda notte o di mattina presto consigliamo di prenotare con anticipo.

- **Q3** `[NEW]` (aggiuntiva): *Quanto tempo aspettate in aeroporto se il mio volo è in ritardo?*
- **A3** `[NEW]`: 60 minuti di attesa gratuita dall'orario stimato di atterraggio. Oltre, applichiamo €15/30min. Per ritardi superiori a 2h, di norma riprogrammiamo senza costi.

- **Q4** `[NEW]`: *Posso pagare con carta?*
- **A4** `[NEW]`: Sì, accettiamo carta, contanti e bonifico. Pagamento al termine del servizio o all'arrivo.

#### "Tour da Catania" `[NEW]`
**H2**: *Tour da Catania.*
3 mini-card:
- *Tour del Barocco* → `/tour-barocco`
- *Etna Premium Escape* → `/tour/etna-premium`
- *Silent Sailing Experience* → `/tour/silent-sailing`

#### CTA finale `[NEW]`
- **H2**: *Prenota il tuo transfer da Catania.*
- **CTA 1**: *Chiama: +39 375 641 3379*
- **CTA 2**: *Scrivi su WhatsApp*

### 3.2 `/en/driver-catania` (English) — **Categoria 2 — refresh metadata URGENTE**

Pos 6.93 con 58 imp CTR 0% → title da rifare per arrivare in pagina 1.

#### Metadata `[NEW]` — il refresh più importante per questa pagina
| Campo | Valore |
|---|---|
| `<title>` | Catania Airport Transfer — Private Driver to Syracuse, Noto, Taormina \| Sicily Driver |
| `<meta description>` | Private driver from Catania Airport (CTA) to Syracuse, Noto, Ragusa and Taormina. English-speaking Mercedes chauffeur, flight tracking, 24/7 booking. From €80 per trip. |
| OG image | `/og-driver-catania.jpg` |

#### Hero
- **Eyebrow** `[NEW]`: *Catania · Private driver & transfers*
- **H1** `[PRESERVE]` LETTERALE: *Private Driver Catania — Airport Transfer & Chauffeur Service*
- **Sub** `[NEW]`: From Catania to Syracuse, Noto, Ragusa or Taormina. In a Mercedes, with a driver who knows how to wait if your flight is late.

#### Paragrafo intro `[PRESERVE]` LETTERALE
> Private driver in Catania for airport transfers (CTA) and custom trips to Siracusa, Noto, Taormina and Ragusa. Mercedes vehicles, English-speaking chauffeurs, 24/7 service.

#### Trust strip locale `[NEW]`
1. **Catania → Syracuse: from €80**
2. **Mercedes V-Class / GLB / E-Class**
3. **24/7 service**

#### From Catania to...

| Route | Price | Time |
|---|---|---|
| Catania Airport → Syracuse | **from €80** `[PRESERVE]` | 1h |
| Catania Airport → Noto | **from €120** | 1h 20m |
| Catania Airport → Taormina | **from €120** | 1h |
| Catania Airport → Ragusa | **from €160** | 1h 40m |
| Catania Airport → Modica | **from €150** | 1h 30m |

#### What's always included `[NEW]`
**H2**: *What's always included.*
- Free child seats
- Real-time flight tracking
- 60 minutes free airport wait
- Direct WhatsApp with your driver
- Receipt or invoice provided

#### The fleet `[NEW]`
**H2**: *The fleet.*
(Stessa tabella IT, in EN)

#### FAQ `[PRESERVE]`

- **Q1** `[PRESERVE]`: *How much is a transfer Catania Airport to Siracusa?*
- **A1** `[PRESERVE]`: Prices usually start from €80–€120 depending on time, passengers and vehicle. Send your request on the contact page for an exact quote.

- **Q2** `[PRESERVE]`: *Do you operate at night?*
- **A2** `[PRESERVE]`: Yes, 24/7 service. For late-night/early-morning flights we recommend booking in advance.

- **Q3** `[NEW]`: *How long do you wait at the airport if my flight is delayed?*
- **A3** `[NEW]`: 60 minutes free wait from the estimated landing time. After that, €15 per 30 min. For delays over 2h we usually reschedule at no extra cost.

- **Q4** `[NEW]`: *Can I pay by card?*
- **A4** `[NEW]`: Yes, we accept card, cash and bank transfer. Payment at the end of the service or on arrival.

#### Tours from Catania `[NEW]`
**H2**: *Tours from Catania.*
- *Baroque Tour* → `/en/baroque-tour`
- *Etna Premium Escape* → `/en/tour/etna-premium`
- *Silent Sailing Experience* → `/en/tour/silent-sailing`

### 3.3 `/ncc-noto` (Italiano) — **Categoria 1 preserve forte (2 click reali)**

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | NCC Noto — Transfer Privati e Tour del Barocco da Noto \| Sicily Driver |
| `<meta description>` | NCC a Noto: transfer dall'Aeroporto di Catania e Comiso, tour del Val di Noto (Noto, Modica, Ragusa Ibla, Marzamemi). Autista Mercedes, eventi e matrimoni. |

#### Hero
- **Eyebrow** `[NEW]`: *Noto · NCC e transfer*
- **H1** `[PRESERVE]` LETTERALE: *NCC Noto — Transfer Privati e Tour Barocco*
- **Sub** `[NEW]`: La capitale del Barocco siciliano è la nostra seconda casa. Sede operativa in Via Alcide De Gasperi.

#### Paragrafo intro `[PRESERVE]` LETTERALE
> Servizio NCC a Noto per transfer da/per aeroporti (Catania, Comiso) e tour nel Val di Noto: Noto, Modica, Ragusa Ibla e Marzamemi. Autista dedicato e comfort premium.

#### Trust strip `[NEW]`
1. **Catania → Noto: da €120**
2. **Sede locale a Noto**
3. **Tour Barocco specialty**

#### Tratte da Noto `[NEW]`

| Tratta | Prezzo | Tempo |
|---|---|---|
| Aeroporto Catania → Noto | **da €120** | 1h 20m |
| Aeroporto Comiso → Noto | **da €100** | 50m |
| Noto → Siracusa | **da €60** | 40m |
| Noto → Marzamemi | **da €50** | 30m |
| Tour Barocco da Noto (6-8h) | **da €380** | giornata |

#### Cosa include `[NEW]`
**H2**: *Quello che è incluso.*
- Auto Mercedes dedicata
- Soste fotografiche libere
- Acqua a bordo
- WhatsApp del driver durante il giro

#### La flotta `[NEW]`
(Stessa tabella di /ncc-catania)

#### FAQ `[PRESERVE]` LETTERALE

- **Q1** `[PRESERVE]`: *Quanto dura un tour Barocco da Noto?*
- **A1** `[PRESERVE]`: In media 6–8 ore, con possibilità di personalizzare tappe e tempi in base alle preferenze.

- **Q2** `[PRESERVE]`: *Posso aggiungere una degustazione?*
- **A2** `[PRESERVE]`: Certo: possiamo includere cantine, oleifici o soste gastronomiche su richiesta.

- **Q3** `[NEW]`: *Quanto anticipo serve per prenotare?*
- **A3** `[NEW]`: Per i tour Barocco consigliamo 48-72h, ma in bassa stagione spesso ti accomodiamo anche con 12h di anticipo. Scrivici su WhatsApp e ti diciamo subito.

- **Q4** `[NEW]`: *Avete sede a Noto?*
- **A4** `[NEW]`: Sì, in Via Alcide De Gasperi 15. È una delle 3 sedi operative (Siracusa, Noto, Marzamemi).

#### Tour da Noto `[NEW]`
- *Tour del Barocco* → `/tour-barocco`
- *Isola delle Correnti Experience* → `/tour/isola-delle-correnti`
- *Dolce Vita Siracusa* → `/tour/dolce-vita-siracusa`

### 3.4 `/en/driver-noto` (English) — **Categoria 1 preserve forte (3 click reali)**

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Private Driver Noto — Baroque Tour & Airport Transfers from Noto \| Sicily Driver |
| `<meta description>` | Private driver in Noto: transfers from Catania and Comiso airports, Val di Noto Baroque tours (Noto, Modica, Ragusa Ibla, Marzamemi). Mercedes chauffeur, English-speaking, events and weddings. |

#### Hero
- **Eyebrow** `[NEW]`: *Noto · Private driver*
- **H1** `[PRESERVE]` LETTERALE: *Private Driver Noto — Transfers & Baroque Tour*
- **Sub** `[NEW]`: The capital of Sicilian Baroque is our second home. Local office on Via Alcide De Gasperi.

#### Paragrafo intro `[PRESERVE]` LETTERALE
> Private driver in Noto for transfers from Catania or Comiso airport and Baroque Valley tours: Noto, Modica, Ragusa Ibla and Marzamemi.

#### Trust strip `[NEW]`
1. **Catania → Noto: from €120**
2. **Local office in Noto**
3. **Baroque Tour specialty**

#### Routes from Noto

| Route | Price | Time |
|---|---|---|
| Catania Airport → Noto | **from €120** | 1h 20m |
| Comiso Airport → Noto | **from €100** | 50m |
| Noto → Syracuse | **from €60** | 40m |
| Noto → Marzamemi | **from €50** | 30m |
| Baroque Tour from Noto (6-8h) | **from €380** | full day |

#### What's included `[NEW]`
**H2**: *What's included.*
- Dedicated Mercedes
- Free photo stops
- Water on board
- Driver's WhatsApp during the trip

#### FAQ `[PRESERVE]`

- **Q1** `[PRESERVE]`: *How long is a Baroque Tour from Noto?*
- **A1** `[PRESERVE]`: Usually 6–8 hours, with flexible stops and timing based on your preferences.

- **Q2** `[PRESERVE]`: *Can we add a wine tasting?*
- **A2** `[PRESERVE]`: Of course. We can include wineries or gourmet stops on request.

- **Q3** `[NEW]`: *How far in advance should I book?*
- **A3** `[NEW]`: For Baroque tours we recommend 48-72h, but in low season we often accommodate with 12h notice. Message us on WhatsApp and we'll tell you right away.

- **Q4** `[NEW]`: *Do you have an office in Noto?*
- **A4** `[NEW]`: Yes, at Via Alcide De Gasperi 15. It's one of our 3 operating locations (Syracuse, Noto, Marzamemi).

#### Tours from Noto
- *Baroque Tour* → `/en/baroque-tour`
- *Isola delle Correnti Experience* → `/en/tour/isola-delle-correnti`
- *Dolce Vita Syracuse* → `/en/tour/dolce-vita-siracusa`

### 3.5 `/ncc-taormina` (Italiano) — Categoria 3 ma H1 preserva

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | NCC Taormina — Transfer Aeroporto Catania e Tour Etna \| Sicily Driver |
| `<meta description>` | NCC a Taormina: transfer dall'Aeroporto di Catania, tour Etna con degustazione, transfer per Siracusa e Giardini Naxos. Autista Mercedes per hotel e wedding. |

#### Hero
- **H1** `[PRESERVE]` LETTERALE: *NCC Taormina — Transfer di Lusso e Tour Etna*
- **Sub** `[NEW]`: La perla della costa ionica, raggiunta in Mercedes dall'aeroporto in un'ora.

#### Paragrafo intro `[PRESERVE]` LETTERALE
> NCC per Taormina con transfer da/per Aeroporto di Catania, Siracusa e tutta la costa ionica. Opzione Tour Etna con degustazione in cantina e soste panoramiche.

#### Trust strip `[NEW]`
1. **Catania → Taormina: da €120**
2. **Tour Etna con cantine**
3. **Servizio hotel e wedding**

#### Tratte da Taormina `[NEW]`

| Tratta | Prezzo | Tempo |
|---|---|---|
| Aeroporto Catania → Taormina | **da €120** | 1h |
| Taormina → Giardini Naxos | **da €40** | 15m |
| Taormina → Siracusa | **da €180** | 2h |
| Tour Etna da Taormina (6-8h) | **da €450** | giornata |

#### FAQ `[PRESERVE]` LETTERALE

- **Q1** `[PRESERVE]`: *Effettuate transfer Taormina ↔ Aeroporto di Catania?*
- **A1** `[PRESERVE]`: Sì, con monitoraggio volo e orari flessibili. Autista in attesa all'uscita arrivi.

- **Q2** `[PRESERVE]`: *È possibile un tour Etna + Taormina in giornata?*
- **A2** `[PRESERVE]`: Assolutamente sì: programma tipico 6–8 ore, con soste personalizzate.

- **Q3** `[NEW]`: *Servizio per matrimoni a Taormina?*
- **A3** `[NEW]`: Sì, gestiamo trasferimenti sposi e navette ospiti, anche con auto d'epoca. Vedi la sezione [Wedding](/wedding).

#### Tour da Taormina `[NEW]`
- *Etna Premium Escape* → `/tour/etna-premium`
- *Tour del Barocco* → `/tour-barocco`

### 3.6 `/en/driver-taormina` (English) — Categoria 3 ma H1 preserva

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Private Driver Taormina — Catania Airport Transfer & Etna Tour \| Sicily Driver |
| `<meta description>` | Private driver in Taormina: Catania Airport transfers, Etna tour with wine tasting, transfers to Syracuse and Giardini Naxos. Mercedes chauffeur for hotels and weddings. |

#### Hero
- **H1** `[NEW]` (la pagina vecchia era thin, ricostruiamo l'H1 con la stessa formula della versione IT): *Private Driver Taormina — Luxury Transfer & Etna Tour*
- **Sub** `[NEW]`: The pearl of the Ionian coast, an hour from the airport in a Mercedes.

#### Paragrafo intro `[NEW]` (la pagina vecchia ha poco copy — ricostruiamo seguendo lo schema IT)
> Private driver in Taormina for transfers to/from Catania Airport, Syracuse and the whole Ionian coast. Optional Etna Tour with wine tasting and panoramic stops along the way.

#### Trust strip `[NEW]`
1. **Catania → Taormina: from €120**
2. **Etna Tour with wineries**
3. **Hotel and wedding service**

#### Routes from Taormina

| Route | Price | Time |
|---|---|---|
| Catania Airport → Taormina | **from €120** | 1h |
| Taormina → Giardini Naxos | **from €40** | 15m |
| Taormina → Syracuse | **from €180** | 2h |
| Etna Tour from Taormina (6-8h) | **from €450** | full day |

#### FAQ `[NEW]`
- **Q1**: *Do you offer Taormina ↔ Catania Airport transfers?*
- **A1**: Yes, with flight tracking and flexible timing. Driver waits at the arrivals exit.
- **Q2**: *Can we do Etna + Taormina in one day?*
- **A2**: Absolutely. Typical schedule is 6–8 hours with custom stops.
- **Q3**: *Wedding service in Taormina?*
- **A3**: Yes, we handle wedding couples and guest shuttles, including vintage cars. See the [Wedding](/en/weddings) page.

### 3.7 `/ncc-ragusa` (Italiano) — Categoria 3 ma H1 preserva

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | NCC Ragusa — Transfer Privati per Ragusa Ibla e Tour Barocco \| Sicily Driver |
| `<meta description>` | NCC a Ragusa e Ragusa Ibla: transfer da Aeroporto Catania e Comiso, tour del Barocco (Noto, Modica, Ragusa Ibla), eventi e matrimoni. |

#### Hero
- **H1** `[PRESERVE]` LETTERALE: *NCC Ragusa — Transfer Privati e Servizio con Conducente*
- **Sub** `[NEW]`: Ragusa Ibla è una delle nostre tappe del Tour del Barocco. La conosciamo strada per strada.

#### Paragrafo intro `[PRESERVE]` LETTERALE
> Servizio NCC a Ragusa e Ragusa Ibla per transfer privati da/per Aeroporto di Catania e Comiso, tour del Barocco e collegamenti per Siracusa e Noto.

#### Trust strip `[NEW]`
1. **Catania → Ragusa: da €160**
2. **Comiso → Ragusa: da €50**
3. **Tour Barocco specialty**

#### Tratte da Ragusa `[NEW]`

| Tratta | Prezzo | Tempo |
|---|---|---|
| Aeroporto Catania → Ragusa | **da €160** | 1h 40m |
| Aeroporto Comiso → Ragusa | **da €50** | 25m |
| Ragusa → Siracusa | **da €120** | 1h 30m |
| Tour Barocco da Ragusa (6-8h) | **da €380** | giornata |

#### FAQ `[PRESERVE]` LETTERALE

- **Q1** `[PRESERVE]`: *Fornite seggiolini o rialzi per bambini?*
- **A1** `[PRESERVE]`: Sì, disponibili su richiesta al momento della prenotazione, senza costi aggiuntivi.

- **Q2** `[PRESERVE]`: *Con quanto anticipo devo prenotare?*
- **A2** `[PRESERVE]`: Consigliamo almeno 12–24 ore, ma per urgenze proviamo sempre ad accomodare la richiesta.

### 3.8 `/en/driver-ragusa` (English) — Categoria 3 placeholder

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Private Driver Ragusa — Baroque Tour & Airport Transfers \| Sicily Driver |
| `<meta description>` | Private driver in Ragusa and Ragusa Ibla: Catania and Comiso airport transfers, Baroque Tour (Noto, Modica, Ragusa Ibla), events and weddings. |

#### Hero
- **H1** `[NEW]`: *Private Driver Ragusa — Transfers & Chauffeur*
- **Sub** `[NEW]`: Ragusa Ibla is one of our Baroque Tour stops. We know it street by street.

#### Paragrafo intro `[NEW]` (la pagina vecchia EN ha copy thin — ricostruzione)
> Private driver in Ragusa and Ragusa Ibla for transfers from Catania and Comiso airports, Baroque tours and connections to Syracuse and Noto.

#### Trust strip + tratte + FAQ EN
(Stessa struttura della versione IT, tradotta. FAQ adattate alle 2 IT presenti — Q "Do you provide child seats?" e Q "How far in advance should I book?", + 1-2 nuove.)


---

## 4. HUB TOUR — `/tour-sicilia` + `/en/sicily-tours`

### 4.1 `/tour-sicilia` (Italiano) — Categoria 2 refresh metadata

135 imp pos 10.84 CTR 0%. Title attuale generico → da rifare per arrivare in pagina 1.

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Tour Sicilia con Autista Privato — Itinerari su Misura da Siracusa, Catania, Noto \| Sicily Driver |
| `<meta description>` | Tour Sicilia con driver dedicato: Barocco, Etna, Ortigia, Isola delle Correnti, Silent Sailing. Mercedes, autisti professionisti, itinerari personalizzabili. 5 esperienze + tour su misura. |

#### Hero atmosferica con video loop
- **Eyebrow** `[NEW]`: *Tour Sicilia · con autista privato*
- **H1** `[POLISH]` (era nel vecchio sito identico, italic policy applicata): *Tour Sicilia con Autista Privato.*
- **Sub** `[POLISH]`: Scopri la Sicilia con un driver dedicato: itinerari su misura, Mercedes di classe e autisti professionisti. Partenze da Siracusa, Catania, Noto, Ragusa, Taormina. Servizio attivo 24/7.
- **CTA scroll-down sottile** `[NEW]`: *Vedi gli itinerari ↓*

#### Paragrafo intro `[PRESERVE]` (con polish minimo)
> Scopri la Sicilia con un driver dedicato: itinerari su misura, Mercedes di classe e autisti professionisti. Partenze da Siracusa, Catania, Noto, Ragusa, Taormina. Servizio attivo 24/7.

#### "Gli itinerari" — 5 card grandi + 1 mini
**H2** `[NEW]`: *Gli itinerari.*

Card 1-5: stessi 5 tour della home (Dolce Vita Siracusa / Silent Sailing / Isola delle Correnti / Etna Premium / Barocco) con descrizioni leggermente più estese.

Card 6 — *Tour su misura* `[NEW]`:
- Tag: *Costruito intorno a te*
- Body: Hai un'idea diversa? Ti veniamo a prendere, ti portiamo dove vuoi tu. Famiglie, gruppi piccoli, mete fuori dai soliti percorsi.
- CTA: *Parliamone →* link `/contatti`

#### "Una giornata tipo" — storytelling
**H2** `[NEW]`: *Una giornata tipo.*

Body narrativo serif italica `[NEW]`:
> Ti veniamo a prendere alle 8 in hotel. Il driver ti dice come si chiama, ti passa una bottiglia d'acqua, ti chiede se vuoi fermarti per un caffè prima di partire. La maggior parte delle volte sì. Lasciamo Siracusa quando la luce ancora è bassa, e arriviamo a Noto che la cattedrale è dorata. Da lì, il giorno è tuo: tre soste, un pranzo che ti consigliamo noi se ti va, il tempo per camminare senza fretta. Rientro a Siracusa quando dici tu — il calendario del driver non ha sveglia. Solo strada davanti.

3 foto piccole "polaroid scattered" laterali: dettaglio caffè / cattedrale Noto al mattino / strada del Val di Noto al pomeriggio.

#### "Cosa è sempre incluso" `[NEW]`
**H2**: *Cosa è sempre incluso.*

- Mercedes Classe V, GLB Premium o Classe E, in base al numero di passeggeri
- Driver bilingue italiano-inglese
- Soste fotografiche su richiesta, sempre
- Acqua a bordo, anche in versione frizzante se preferisci
- Flessibilità oraria: si esce quando vuoi, si rientra quando vuoi

#### Form preventivo tour `[NEW]`
**H2**: *Pronto a vedere la Sicilia con un autista che la conosce?*

Form 5 campi:
- Nome
- Telefono o email
- Tipo tour (dropdown): Barocco / Etna Premium / Isola delle Correnti / Dolce Vita Siracusa / Silent Sailing / Su misura
- Data (o "ancora flessibile")
- Numero passeggeri

CTA: *Richiedi il preventivo*

#### FAQ `[PRESERVE]` (esistenti nella vecchia pagina, letterali)

- **Q1** `[PRESERVE]`: *Possiamo personalizzare le soste?*
- **A1** `[PRESERVE]`: Sì, ogni tour è modulabile: foto-spot, tempo libero, degustazioni e visite guidate su richiesta.

- **Q2** `[PRESERVE]`: *Quanto dura un tour tipico?*
- **A2** `[PRESERVE]`: Da 6 a 9 ore in base al percorso. Per itinerari più lunghi possiamo estendere a giornata intera.

- **Q3** `[PRESERVE]`: *Sono disponibili seggiolini per bambini?*
- **A3** `[PRESERVE]`: Certo, basta richiederli in fase di prenotazione. Inclusi senza costi extra.

### 4.2 `/en/sicily-tours` (English) — Categoria 3 (libertà di riscrittura)

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Sicily Tours with Private Driver — Custom Itineraries from Syracuse, Catania \| Sicily Driver |
| `<meta description>` | Sicily tours with a dedicated driver: Baroque, Etna, Ortigia, Isola delle Correnti, Silent Sailing. Mercedes, English-speaking chauffeurs, fully customizable. 5 experiences + custom tours. |

#### Hero
- **Eyebrow** `[NEW]`: *Sicily tours · with a private driver*
- **H1** `[NEW]`: *Sicily Tours, with a Private Driver.*
- **Sub** `[NEW]`: Discover Sicily with a dedicated driver: tailor-made itineraries, premium Mercedes and professional chauffeurs. Departures from Syracuse, Catania, Noto, Ragusa, Taormina. 24/7 service.

#### Paragrafo intro `[NEW]`
> Sicily with someone who actually knows it. We pick you up where you're staying, design the day around your pace, and bring you back when you say so. Five tested experiences and unlimited custom routes across eastern Sicily.

#### Itineraries
**H2** `[NEW]`: *The itineraries.*

(5 card uguali alla versione IT in traduzione + card 6 "Custom tour")

Card 6 — *Custom Tour* `[NEW]`:
- Tag: *Built around you*
- Body: Have a different idea? We'll pick you up, take you where you want. Families, small groups, places off the usual paths.
- CTA: *Let's talk →* link `/en/contact`

#### A typical day
**H2** `[NEW]`: *A typical day.*

Body `[NEW]`:
> We pick you up at 8 from your hotel. The driver introduces himself, hands you a bottle of water, asks if you want to stop for a coffee before we go. Most times you'll say yes. We leave Syracuse while the light is still low, and reach Noto with its cathedral turning gold. From there, the day is yours: three stops, a lunch we'll recommend if you like, time to walk slowly. Back in Syracuse whenever you say — the driver's calendar has no alarm. Just the road ahead.

#### What's always included
**H2** `[NEW]`: *What's always included.*

- Mercedes V-Class, GLB Premium or E-Class, based on your party size
- English-speaking driver
- Photo stops on request, always
- Water on board, sparkling if you prefer
- Flexible timing: we leave when you want, we return when you want

#### Tour quote form

Form 5 fields `[NEW]`:
- Name
- Phone or email
- Tour type (dropdown): Baroque / Etna Premium / Isola delle Correnti / Dolce Vita / Silent Sailing / Custom
- Date (or "still flexible")
- Number of passengers

CTA: *Request a quote*

#### FAQ `[NEW]` (traduzione + 1 nuova)

- **Q1**: *Can we customize the stops?*
- **A1**: Yes, every tour is modular: photo stops, free time, tastings and guided visits on request.

- **Q2**: *How long is a typical tour?*
- **A2**: 6 to 9 hours depending on the route. For longer itineraries we can extend to a full day.

- **Q3**: *Are child seats available?*
- **A3**: Yes, just request them at booking. Included at no extra cost.

- **Q4**: *Do drivers speak English?*
- **A4**: Yes. All our drivers speak fluent English. Some also speak French, German or Spanish — let us know which one you prefer.


---

## 5. TOUR DEDICATI — Template (5 tour × 2 lingue = 10 pagine)

### 5.1 `/tour-barocco` (Italiano) — **Categoria 1 PRESERVE FORTE, CTR 25%**

⚠️ **MASSIMA PRESERVATION**: H1 + paragrafo intro + bullet "Puntualità e professionalità" sono LOCK LETTERALE. È la pagina con il CTR più alto del sito (25% in bassa stagione). Polish tipografico ammesso, zero rewording.

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Tour del Barocco: Noto, Modica & Ragusa in un Giorno — Sicily Driver |
| `<meta description>` | Tour del Barocco siciliano in giornata: Noto (Cattedrale di San Nicolò), Modica (cioccolato e San Pietro), Ragusa Ibla (Cattedrale di San Giorgio). Mercedes Classe V con autista. Da €380. |

#### Hero cinematica con video loop
- **Eyebrow** `[NEW]`: *Tour del Barocco · 6-8 ore · da Siracusa*
- **H1** `[PRESERVE]` LETTERALE: *Tour del Barocco: Noto, Modica & Ragusa in un Giorno.*
- **Sub** `[NEW]`: Tre città Patrimonio Unesco. Sei-otto ore. Una Mercedes Classe V che ti aspetta dove serve.
- **CTA primario** `[NEW]`: *Vedi itinerario ↓*
- **CTA secondario** `[NEW]`: *Prenota su WhatsApp*

#### Paragrafo intro `[PRESERVE]` LETTERALE — non si tocca virgola
> Vivi l'emozione del Tour del Barocco in Sicilia: un'esperienza indimenticabile tra le città di Noto, Modica e Ragusa. Scopri la maestosità delle facciate barocche, i palazzi storici e le chiese simbolo di una cultura artistica senza eguali.
>
> Partendo da Siracusa, ti accompagniamo attraverso le meraviglie di Noto con la sua Cattedrale di San Nicolò, proseguendo verso la suggestiva Modica, patria del pregiato cioccolato artigianale e della chiesa di San Pietro, fino alla celebre Ragusa Ibla con la magnifica Cattedrale di San Giorgio. Ogni tappa è studiata per offrirti comfort, storia e gusto autentico.

#### Bullet "Questo tour privato NCC garantisce" `[PRESERVE]` LETTERALE
> - Puntualità e professionalità dei nostri autisti NCC
> - Parco auto di lusso (Mercedes Classe V, GLB Premium, Classe E)
> - Itinerario personalizzabile e supporto 24/7

#### "Il tour in 4 numeri" — data block `[NEW]`

**H2**: *Il tour, in numeri.*

| Numero | Etichetta |
|---|---|
| **6-8h** | Durata |
| **fino a 7** | Persone max |
| **IT / EN** | Lingue driver `[VERIFICA CON ENZO — confermare se anche FR è disponibile]` |
| **da €380** `[VERIFICA CON ENZO]` | Prezzo partenza |

#### "Tappa per tappa" — sezione scroll-driven (cuore della pagina)

⚠️ Animazione complessa: scroll-driven sticky con foto+testo split alternato. Fallback orizzontale snap se performance mobile scarse.

**H2** `[NEW]`: *Tappa per tappa.*

**Tappa 1 — Noto** `[NEW]`:
> Arriviamo a Noto quando la pietra calcarea è ancora calda dalla notte. La scalinata della Cattedrale di San Nicolò è il primo respiro: 1693, terremoto del Val di Noto, una città intera ricostruita dal nulla. Cammini su Corso Vittorio Emanuele in venti minuti, ti fermi dove ti chiama lo sguardo. Il driver ti dice dove sono i palazzi che non vedrai su nessuna guida.

**Tappa 2 — Modica** `[NEW]`:
> A Modica, la chiesa di San Pietro è un teatro di sculture seicentesche affacciate sulla strada. Ma il vero motivo per cui ci fermiamo è il cioccolato, lavorato a freddo seguendo una ricetta che gli spagnoli portarono qui dai Maya. Una tavoletta da gustare camminando, una bottega che il driver conosce per nome — un'ora basta.

**Tappa 3 — Ragusa Ibla** `[NEW]`:
> Ragusa Ibla è la parte vecchia, quella che dopo il terremoto si ricostruì dove era, mentre Ragusa Superiore nasceva sull'altopiano. La Cattedrale di San Giorgio sta in cima a una piazza che si guarda tutto da sola. Qui ti lasciamo il tempo per pranzare con calma, se ti va. Conosciamo un paio di posti dove gli ingredienti vengono dai produttori intorno.

**Tappa 4 (opzionale) — Scicli o Marzamemi** `[NEW]`:
> Se la giornata è lunga e c'è ancora luce, possiamo aggiungere Scicli — un'altra capitale del barocco meno turistica — oppure scendere a Marzamemi per un aperitivo fronte mare prima di rientrare a Siracusa.

#### "Cosa includi e cosa no" `[NEW]`

**H2**: *Cosa è incluso, cosa no.*

**Incluso**:
- Mercedes Classe V con autista
- Soste fotografiche libere a Noto, Modica, Ragusa
- Acqua a bordo
- Flessibilità sulla durata (6-8h)
- Consigli su dove pranzare e cosa vedere

**Non incluso**:
- Pranzo (ti consigliamo dove fermarti, lo paghi tu)
- Ingressi a siti specifici se desiderati (cattedrali interne, palazzi storici a pagamento)
- Mance al driver (facoltative)

#### FAQ `[NEW]` (la pagina vecchia non aveva FAQ — aggiungiamo)

- **Q1**: *Quanto dura il Tour del Barocco?*
- **A1**: 6-8 ore, in base alle soste che vuoi. Partenza tipica alle 8:30 da Siracusa, rientro entro le 17:30.

- **Q2**: *Quante persone massimo?*
- **A2**: Fino a 7 in Mercedes Classe V. Per gruppi più grandi possiamo organizzare 2 mezzi con due driver.

- **Q3**: *Posso aggiungere una degustazione di cioccolato a Modica?*
- **A3**: Sì, la organizziamo presso una delle botteghe storiche di Corso Umberto. Costo a parte, da specificare al preventivo.

- **Q4**: *Si può fare il tour partendo da Catania o Taormina?*
- **A4**: Sì. Da Catania aggiungi circa 30 min di trasferimento, da Taormina 1h 30min. Il prezzo varia di conseguenza.

- **Q5**: *Cosa succede se piove?*
- **A5**: Il barocco siciliano è altrettanto bello con la luce di una giornata grigia, e i centri storici si visitano comunque. Solo per pioggia intensa prolungata possiamo riprogrammare senza penali.

#### Tariffe e form `[NEW]`

| Fascia | Prezzo Mercedes Classe V (fino a 7 persone) |
|---|---|
| Bassa stagione (nov-mar) | da €380 `[VERIFICA CON ENZO]` |
| Media stagione (apr, ott) | da €420 `[VERIFICA CON ENZO]` |
| Alta stagione (mag-set) | da €480 `[VERIFICA CON ENZO]` |

Form 5 campi: Data preferita / Numero passeggeri / Da dove parti / Nome / Telefono o email. CTA: *Richiedi disponibilità*

### 5.2 `/en/baroque-tour` (English) — **Categoria 2 REFRESH METADATA URGENTE**

41 imp pos 13.2 CTR 0% mentre IT ha CTR 25%. Anomalia metadata da fixare. Body preserve.

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Baroque Tour: Noto, Modica & Ragusa in One Day — Sicily Driver |
| `<meta description>` | Sicilian Baroque Tour in one day: Noto (Cathedral of San Nicolò), Modica (chocolate and San Pietro), Ragusa Ibla (Cathedral of San Giorgio). Mercedes V-Class with private driver. From €380. |

#### Hero
- **H1** `[PRESERVE]` LETTERALE: *Baroque Tour: Noto, Modica & Ragusa in One Day.*
- **Sub** `[NEW]`: Three UNESCO World Heritage cities. Six to eight hours. A Mercedes V-Class waiting where you need it.

#### Paragrafo intro `[PRESERVE]` LETTERALE
> Experience the magic of our Baroque Tour in Sicily: an unforgettable journey through the Baroque masterpieces of Noto, Modica, and Ragusa. Admire the intricate church façades, opulent palaces, and historic squares that showcase the island's rich artistic heritage.
>
> Starting from Syracuse, we guide you to the majestic Cathedral of San Nicolò in Noto, then to the charming Church of San Pietro in Modica, famous for its artisanal chocolate, and finally to the enchanting Cathedral of San Giorgio in Ragusa Ibla. Each stop is designed to combine culture, comfort, and authentic Sicilian flavors.

#### Bullet `[PRESERVE]` LETTERALE
> - Punctuality and professionalism of our NCC drivers
> - Luxury fleet (Mercedes Class V, GLB Premium, Class E)
> - Customizable itinerary and 24/7 support

#### Stops EN

(Stessi 4 stops del tour IT, tradotti — nota: "the recipe Spaniards brought here from the Aztecs" nella tappa Modica, "the part of Ragusa rebuilt after the 1693 earthquake" nella tappa Ragusa Ibla)

**Stop 1 — Noto** `[NEW]`:
> We reach Noto when the limestone is still warm from the night. The Cathedral of San Nicolò staircase is the first breath: 1693, Val di Noto earthquake, an entire city rebuilt from nothing. You walk Corso Vittorio Emanuele in twenty minutes, stopping where your eye calls you. The driver tells you about the palaces no guidebook mentions.

**Stop 2 — Modica** `[NEW]`:
> In Modica, the Church of San Pietro is a theater of seventeenth-century sculptures facing the street. But the real reason we stop is the chocolate, cold-processed following a recipe Spaniards brought here from the Aztecs. A bar to taste while walking, a shop the driver knows by name — an hour is enough.

**Stop 3 — Ragusa Ibla** `[NEW]`:
> Ragusa Ibla is the old part, the one that rebuilt itself where it stood after the earthquake, while Ragusa Superiore was born on the plateau. The Cathedral of San Giorgio sits at the top of a square that watches itself. Here we leave you the time to lunch in peace, if you wish. We know a couple of places where ingredients come from the producers around.

**Stop 4 (optional) — Scicli or Marzamemi** `[NEW]`:
> If the day is long and the light is still good, we can add Scicli — another Baroque capital, less touristic — or descend to Marzamemi for a seaside aperitivo before returning to Syracuse.

#### What's included EN
(Versione EN identica strutturalmente alla IT)

#### FAQ `[NEW]` EN
- **Q1**: *How long is the Baroque Tour?*
- **A1**: 6-8 hours, depending on the stops you want. Typical departure at 8:30 from Syracuse, return by 17:30.
- **Q2**: *Maximum party size?*
- **A2**: Up to 7 in a Mercedes V-Class. For larger groups we can organize 2 vehicles with two drivers.
- **Q3**: *Can I add a Modica chocolate tasting?*
- **A3**: Yes, at one of the historic chocolate shops on Corso Umberto. Cost added to the quote.
- **Q4**: *Can the tour start from Catania or Taormina?*
- **A4**: Yes. From Catania add about 30 min transfer, from Taormina 1h 30min. Price adjusted accordingly.
- **Q5**: *What if it rains?*
- **A5**: Sicilian Baroque is just as beautiful on a grey day, and the historic centers stay walkable. Only for prolonged heavy rain we can reschedule with no penalty.


### 5.3 `/tour/etna-premium` + `/en/tour/etna-premium` — URL nuove

#### `/tour/etna-premium` (Italiano)

##### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Etna Premium Escape — Crateri Silvestri e Cantine Benanti, Palmeri \| Sicily Driver |
| `<meta description>` | Etna tour da Siracusa: crateri Silvestri a 1.900m con quad, degustazione in cantina (Benanti, Palmeri), pranzo con vista. Mercedes con autista, giornata intera. |

##### Hero
- **Eyebrow** `[NEW]`: *Etna · giornata intera*
- **H1** `[NEW]`: *Etna Premium Escape.*
- **Sub** `[NEW]`: I crateri Silvestri a quota 1.900. Due cantine che ci conoscono. Una giornata vista vulcano.

##### Paragrafo intro `[NEW]` (keyword-dense)
> L'Etna è un mondo a sé. Ti veniamo a prendere da Siracusa, Catania o Taormina e ti portiamo a quota 1.900 metri, dove i crateri Silvestri raccontano l'ultima eruzione del 1892. Da lì scendiamo lungo i vigneti che crescono sulla lava — il "terroir" più estremo d'Europa — per fermarci in una delle cantine storiche dell'Etna, Benanti o Palmeri. Tour Etna con autista privato, quad in quota, degustazione vini di territorio, pranzo nel rifugio della cantina. Un giorno solo, dall'alba al tramonto.

##### "Il tour in 4 numeri"
| Numero | Etichetta |
|---|---|
| **giornata intera** | Durata |
| **fino a 7** | Persone max |
| **IT / EN** | Lingue driver |
| **da €580** `[VERIFICA CON ENZO]` | Prezzo (incluso quad e degustazione) |

##### Partner di questo tour `[NEW]`
- **Cantina Benanti** — Una delle cantine storiche dell'Etna. Vini di Nerello Mascalese e Carricante coltivati su suolo lavico.
- **Cantina Palmeri** — Etna sud-orientale, vini di territorio meno conosciuti ma con una storia precisa di famiglia.

##### "Tappa per tappa"

**Tappa 1 — Ritrovo e salita** `[NEW]`:
> Partenza alle 7:30 da Siracusa (o 8:30 da Catania, 9:00 da Taormina). Saliamo verso Zafferana Etnea, attraverso il bosco di pini secolari. La temperatura cala di 15 gradi in 40 minuti — porta una giacca anche d'estate. Arrivo al Rifugio Sapienza, quota 1.900.

**Tappa 2 — Quad sui crateri Silvestri** `[NEW]`:
> I quad partono dal piazzale del rifugio. Un'ora di percorso su sabbia lavica nera, intorno ai coni dei crateri Silvestri — quelli formati nell'eruzione del 1892, ancora perfettamente conservati. Il driver-guida ti accompagna sul mezzo davanti, nessuna esperienza richiesta.

**Tappa 3 — Pranzo e cantina** `[NEW]`:
> Scendiamo verso una delle cantine partner. Pranzo siciliano nel rifugio della cantina: salumi, formaggi locali, pasta alla Norma, dolci della casa. La degustazione di 4-5 vini è guidata da un sommelier della cantina, in italiano o inglese.

**Tappa 4 — Rientro panoramico** `[NEW]`:
> Rientro lungo la strada panoramica dell'Etna sud. Se la luce è giusta, breve sosta a Catania per un caffè in piazza Duomo. Rientro a Siracusa entro le 19.

##### "Cosa è incluso, cosa no" `[NEW]`

**Incluso**: Mercedes Classe V con autista / Quad sui crateri Silvestri (1h, guida inclusa) / Pranzo siciliano in cantina (4 portate) / Degustazione di 4-5 vini con sommelier / Acqua a bordo

**Non incluso**: Funivia/seggiovia per la quota 3.000 (opzionale) / Mance facoltative

##### FAQ `[NEW]`
- **Q1**: *Si arriva fino in cima all'Etna?*
- **A1**: Con il nostro programma standard arriviamo a quota 1.900 (crateri Silvestri). Per la quota 3.000 (Torre del Filosofo / crateri sommitali) serve funivia + jeep + guida alpina, costo a parte da concordare in fase di preventivo.

- **Q2**: *Il quad è obbligatorio?*
- **A2**: No, in alternativa proponiamo un'escursione a piedi guidata sui crateri (1h 30min, terreno facile). Stesso prezzo.

- **Q3**: *Cosa indossare?*
- **A3**: Scarpe chiuse comode (no infradito), maglione/felpa anche d'estate (a 1.900m fa fresco), giacca antivento, occhiali da sole.

- **Q4**: *Bambini ammessi?*
- **A4**: Sì, dai 6 anni in su. Per il quad serve l'accompagnamento dell'adulto. La cantina ha menu bambini su richiesta.

#### `/en/tour/etna-premium` (English)

##### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Etna Premium Escape — Silvestri Craters & Benanti/Palmeri Wineries \| Sicily Driver |
| `<meta description>` | Etna tour from Syracuse: Silvestri craters at 1,900m by quad, winery tasting (Benanti, Palmeri), lunch with a view. Mercedes with private driver, full day. |

##### Hero
- **Eyebrow**: *Etna · full day*
- **H1** `[NEW]`: *Etna Premium Escape.*
- **Sub** `[NEW]`: Silvestri craters at 1,900 m. Two wineries who know us. A full day with a view of the volcano.

##### Paragrafo intro `[NEW]`
> Etna is a world of its own. We pick you up from Syracuse, Catania or Taormina and drive you up to 1,900 meters, where the Silvestri craters tell the story of the last eruption in 1892. From there we descend through vineyards growing on lava — the most extreme "terroir" in Europe — to stop at one of the historic Etna wineries, Benanti or Palmeri. Etna tour with private driver, quad ride on the craters, tasting of local wines, lunch at the winery. One day, sunrise to sunset.

##### Stops EN
**Stop 1 — Meeting & ascent** `[NEW]`: Departure at 7:30 from Syracuse (or 8:30 Catania, 9:00 Taormina). We climb toward Zafferana Etnea through the ancient pine forest. Temperature drops 15 degrees in 40 minutes — bring a jacket even in summer. Arrival at Rifugio Sapienza, 1,900 m.

**Stop 2 — Quad on Silvestri craters** `[NEW]`: Quads depart from the refuge square. One hour on black lava sand, around the Silvestri crater cones — those formed in the 1892 eruption, perfectly preserved. The guide-driver leads on the vehicle ahead, no experience required.

**Stop 3 — Lunch & winery** `[NEW]`: We descend to one of the partner wineries. Sicilian lunch in the winery refuge: cured meats, local cheeses, pasta alla Norma, house desserts. 4-5 wine tasting guided by the winery sommelier, in Italian or English.

**Stop 4 — Panoramic return** `[NEW]`: Return along the southern Etna panoramic road. If the light is right, brief stop in Catania for a coffee in Piazza Duomo. Back in Syracuse by 19.

##### FAQ `[NEW]` EN
- **Q1**: *Can you reach the top of Etna?* **A1**: Our standard program reaches 1,900m (Silvestri craters). For 3,000m (summit) you need cable car + jeep + alpine guide, additional cost arranged in the quote.
- **Q2**: *Is the quad mandatory?* **A2**: No, alternative: guided crater walk (1h 30min, easy terrain). Same price.
- **Q3**: *What to wear?* **A3**: Closed comfortable shoes (no flip-flops), sweater/fleece even in summer (it's cool at 1,900m), windbreaker, sunglasses.
- **Q4**: *Are children welcome?* **A4**: Yes, from age 6. Quad rides require adult companion. Wineries can prepare a children's menu on request.


### 5.4 `/tour/isola-delle-correnti` + `/en/tour/isola-delle-correnti`

#### `/tour/isola-delle-correnti` (Italiano)

##### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Isola delle Correnti & Pura Vida Beach Club — Giornata Sud Sicilia \| Sicily Driver |
| `<meta description>` | Tour giornaliero all'Isola delle Correnti (l'estremità sud della Sicilia) con Pura Vida Beach Club e Marzamemi al tramonto. Mercedes con autista, sosta lunch, sunset experience. |

##### Hero
- **Eyebrow** `[NEW]`: *Sicilia sud · giornata intera*
- **H1** `[NEW]`: *Isola delle Correnti.*
- **Sub** `[NEW]`: Dove finisce la Sicilia e iniziano due mari. Pura Vida Beach Club al tramonto, aperitivo a Marzamemi.

##### Paragrafo intro `[NEW]`
> L'Isola delle Correnti è l'estremità sud-orientale della Sicilia. Qui il Mar Ionio incontra il Mediterraneo, e nelle giornate ventose si vedono due colori d'acqua diversi che si sfiorano. Una sottile striscia di terra ti porta a piedi dall'isolotto. Tour con autista privato da Siracusa, sosta lunch al Pura Vida Beach Club di Portopalo, sunset experience fronte mare e aperitivo a Marzamemi prima del rientro. Una giornata che racconta la Sicilia che non vede chi resta nelle città.

##### "Il tour in 4 numeri"
| Numero | Etichetta |
|---|---|
| **giornata intera** | Durata |
| **fino a 7** | Persone max |
| **IT / EN** | Lingue driver |
| **da €420** `[VERIFICA CON ENZO]` | Prezzo partenza |

##### Partner di questo tour
- **Pura Vida Beach Club** — Portopalo di Capo Passero. Beach club affacciato sull'Isola delle Correnti. Posto al sole o all'ombra, lunch siciliano in spiaggia, accesso al mare.

##### "Tappa per tappa"

**Tappa 1 — Da Siracusa a Portopalo** `[NEW]`:
> Partenza in tarda mattinata, scendiamo lungo la costa sud. Passiamo davanti a Avola, Pachino, attraversiamo i vigneti di Nero d'Avola. Il driver ti racconta come è cambiata questa zona negli ultimi vent'anni — da rurale dimenticata a una delle aree gastronomiche più interessanti dell'isola.

**Tappa 2 — Pura Vida Beach Club** `[NEW]`:
> Arrivo al Pura Vida, lettini al sole prenotati per voi, lunch in spiaggia (pesce del giorno, antipasti siciliani, vino bianco di territorio). Mare basso e cristallino, tre-quattro ore di relax senza obbligo di programma. Chi vuole, prende la striscia di sabbia che porta a piedi sull'isolotto.

**Tappa 3 — Sunset experience** `[NEW]`:
> Verso il tardo pomeriggio ci spostiamo sul lato dell'Isola delle Correnti che guarda ovest. Il sole tramonta tra i due mari — uno dei punti più suggestivi della Sicilia per fotografare il sunset. Prosecco e taglieri serviti dal Pura Vida.

**Tappa 4 — Aperitivo a Marzamemi** `[NEW]`:
> Rientro via Marzamemi, il borgo dei pescatori con la piazza affacciata sulla tonnara. Aperitivo nei locali di Piazza Regina Margherita prima di tornare a Siracusa. Arrivo previsto verso le 21.

##### "Cosa è incluso, cosa no"
**Incluso**: Mercedes Classe V con autista / Posto riservato al Pura Vida Beach Club (lettini + ombrelloni) / Lunch in spiaggia al Pura Vida / Sunset experience al Pura Vida con prosecco e tagliere / Acqua a bordo

**Non incluso**: Aperitivo a Marzamemi / Eventuali extra al beach club (massaggi, escursioni in barca)

##### FAQ `[NEW]`
- **Q1**: *Quando è il periodo migliore?* **A1**: Da maggio a ottobre per godere del mare. Da novembre a marzo l'esperienza è più atmosferica (sunset spettacolari) ma niente bagno.
- **Q2**: *Possiamo modificare l'ordine delle tappe?* **A2**: Sì. Alcuni clienti preferiscono iniziare con Marzamemi al mattino e finire con il sunset a Pura Vida. Decidiamo in fase di preventivo.
- **Q3**: *Bambini?* **A3**: Sì. Il Pura Vida ha una zona riservata alle famiglie e il mare basso è ideale.
- **Q4**: *Si può fare in mezza giornata?* **A4**: Sì, versione corta 5h (solo lunch + Isola delle Correnti, senza Marzamemi). Costo da €280 `[VERIFICA CON ENZO]`.

#### `/en/tour/isola-delle-correnti` (English)

##### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Isola delle Correnti & Pura Vida Beach Club — South Sicily Day Tour \| Sicily Driver |
| `<meta description>` | Day tour to Isola delle Correnti (the southernmost point of Sicily) with Pura Vida Beach Club and sunset in Marzamemi. Mercedes with driver, beach lunch, sunset experience. |

##### Hero
- **H1** `[NEW]`: *Isola delle Correnti.*
- **Sub** `[NEW]`: Where Sicily ends and two seas meet. Pura Vida Beach Club at sunset, aperitivo in Marzamemi.

##### Paragrafo intro `[NEW]`
> Isola delle Correnti is the south-eastern tip of Sicily. Here the Ionian meets the Mediterranean, and on windy days you can see two different water colors brushing against each other. A thin strip of sand takes you on foot to the islet. Tour with private driver from Syracuse, lunch stop at Pura Vida Beach Club in Portopalo, sunset experience on the sea and aperitivo in Marzamemi before the return. A day that tells the Sicily city-stayers never see.

##### Stops EN
**Stop 1 — Syracuse to Portopalo** `[NEW]`: Late-morning departure, we descend the south coast. We pass Avola, Pachino, we cross the Nero d'Avola vineyards. The driver tells you how this area changed in the last twenty years — from forgotten rural to one of the most interesting gastronomic regions of the island.

**Stop 2 — Pura Vida Beach Club** `[NEW]`: Arrival at Pura Vida, sunbeds reserved for you, beach lunch (catch of the day, Sicilian antipasti, white wine of the land). Shallow crystalline sea, three to four hours of relaxation with no fixed program. Whoever wants takes the sand strip walking to the islet.

**Stop 3 — Sunset experience** `[NEW]`: In late afternoon we move to the Isola delle Correnti side facing west. The sun sets between the two seas — one of Sicily's most beautiful sunset spots. Prosecco and platters served by Pura Vida.

**Stop 4 — Aperitivo in Marzamemi** `[NEW]`: Return via Marzamemi, the fishermen's village with the square facing the tonnara. Aperitivo in the bars of Piazza Regina Margherita before returning to Syracuse. Expected arrival around 21:00.

##### FAQ EN
- **Q1**: *When is the best time?* **A1**: From May to October for the sea. From November to March the experience is more atmospheric (spectacular sunsets) but no swimming.
- **Q2**: *Can we change the order of stops?* **A2**: Yes. Some clients prefer Marzamemi in the morning and the Pura Vida sunset to close. We decide at quote time.
- **Q3**: *Children?* **A3**: Yes. Pura Vida has a family zone and the shallow sea is ideal.
- **Q4**: *Can it be done in half a day?* **A4**: Yes, short version 5h (just lunch + Isola delle Correnti, no Marzamemi). From €280 `[VERIFY WITH ENZO]`.

### 5.5 `/tour/dolce-vita-siracusa` + `/en/tour/dolce-vita-siracusa` — TOUR ICONA

#### `/tour/dolce-vita-siracusa` (Italiano)

##### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Dolce Vita Siracusa — Ortigia in Fiat 500 Spiaggina d'Epoca \| Sicily Driver |
| `<meta description>` | Tour Ortigia in Fiat 500 Spiaggina d'epoca: 3 ore tra Duomo, Fonte Aretusa, lungomare, aperitivo finale fronte mare. La Dolce Vita siciliana, per coppie e amici. |

##### Hero
- **Eyebrow** `[NEW]`: *Ortigia · 3 ore · Fiat 500 d'epoca*
- **H1** `[NEW]`: *Dolce Vita Siracusa.*
- **Sub** `[NEW]`: Ortigia in Fiat 500 Spiaggina. Tre ore. Una sola velocità: quella della passeggiata.

##### Paragrafo intro `[NEW]`
> Una Fiat 500 Spiaggina del 1968, restaurata, che ti aspetta in Ortigia. Tre ore in giro per l'isola: il Duomo che era tempio greco poi cattedrale, la Fonte Aretusa con i papiri ancora vivi, il lungomare che la mattina è solo dei pescatori, l'aperitivo finale fronte mare. Niente itinerario rigido — la macchina si ferma dove vuoi tu, le foto le facciamo noi se ti va. Per coppie, amici, famiglie piccole. L'auto è guidata da uno dei nostri driver, tu sei passeggero del Mediterraneo.

##### "Il tour in 4 numeri"
| Numero | Etichetta |
|---|---|
| **3 ore** | Durata |
| **max 2 (o 4 stretti)** | Persone — *Fiat 500 d'epoca* |
| **IT / EN** | Lingue driver |
| **da €280** `[VERIFICA CON ENZO]` | Prezzo (auto + driver + aperitivo) |

##### "Tappa per tappa"

**Tappa 1 — Partenza dal parcheggio Talete** `[NEW]`:
> Ci troviamo al parcheggio Talete, all'ingresso di Ortigia. La 500 ti aspetta lì, capote già abbassata se il tempo lo permette. Foto di partenza, breve briefing su quello che vedremo, e si parte.

**Tappa 2 — Lungomare di Levante e Castello Maniace** `[NEW]`:
> Imbocchiamo Via XX Settembre, costeggiamo il porto piccolo e arriviamo al Castello Maniace, all'estremità sud di Ortigia. Sosta foto sul belvedere — uno dei punti più Instagrammati dell'isola.

**Tappa 3 — Duomo, Fonte Aretusa, Lungomare di Ponente** `[NEW]`:
> Risaliamo verso Piazza Duomo, dove la cattedrale è ancora un tempio dorico inglobato. Sosta breve per camminare nella piazza, poi la Fonte Aretusa con i papiri — l'unica colonia di papiri spontanei d'Europa. Si chiude sul lungomare di Ponente al tramonto.

**Tappa 4 — Aperitivo finale** `[NEW]`:
> Aperitivo in uno dei locali di Lungomare Alfeo o Riva di Levante, vista mare. Spritz o vino bianco siciliano, tagliere di formaggi e salumi locali. Foto finali con la 500 nell'angolo giusto. Restituzione 2h dopo l'inizio.

##### "Cosa è incluso, cosa no"
**Incluso**: Fiat 500 Spiaggina d'epoca con driver / Tre ore di tour Ortigia / Aperitivo fronte mare (Spritz/vino + tagliere) / Servizio foto del driver (telefono cliente) / Acqua a bordo

**Non incluso**: Ingressi a siti specifici (interno cattedrale a pagamento, museo papiro) / Cena dopo l'aperitivo

##### FAQ `[NEW]`
- **Q1**: *Che 500 è esattamente?* **A1**: Fiat 500 Spiaggina del 1968 — la versione "torpedo" senza portiere posteriori, capote in tela, restaurata maniacalmente. Una delle 6 auto d'epoca della flotta.
- **Q2**: *Si può fare la sera?* **A2**: Sì. Versione "blue hour" parte un'ora prima del tramonto e finisce con la cena (cena a parte). Stesso prezzo del tour diurno.
- **Q3**: *Se piove?* **A3**: Riprogrammiamo senza penali — la 500 Spiaggina ha la capote ma il senso del tour è la capote abbassata. Decidiamo il giorno prima in base alle previsioni.
- **Q4**: *Bambini?* **A4**: Solo dai 10 anni in su per ragioni di spazio e sicurezza. Per famiglie più piccole consigliamo l'Isola delle Correnti.

#### `/en/tour/dolce-vita-siracusa` (English)

##### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Dolce Vita Syracuse — Ortigia in a Vintage Fiat 500 Spiaggina \| Sicily Driver |
| `<meta description>` | Ortigia tour in a vintage Fiat 500 Spiaggina: 3 hours between the Cathedral, Arethusa Spring, seafront, sunset aperitivo. Sicilian Dolce Vita, for couples and friends. |

##### Hero
- **H1** `[NEW]`: *Dolce Vita Syracuse.*
- **Sub** `[NEW]`: Ortigia in a Fiat 500 Spiaggina. Three hours. One speed: walking pace.

##### Paragrafo intro `[NEW]`
> A restored 1968 Fiat 500 Spiaggina, waiting for you in Ortigia. Three hours around the island: the Cathedral that was once a Greek temple, the Arethusa Spring with the papyrus still alive, the seafront that in the morning belongs only to the fishermen, the final aperitivo by the sea. No rigid itinerary — the car stops where you want, the photos we take if you like. For couples, friends, small families. The car is driven by one of our chauffeurs, you are a passenger of the Mediterranean.

##### Stops EN
**Stop 1 — Talete car park departure** `[NEW]`: We meet at the Talete car park, the entrance to Ortigia. The 500 is waiting, top already down if the weather allows. Departure photo, brief intro to what we'll see, and we go.

**Stop 2 — Eastern seafront & Maniace Castle** `[NEW]`: We take Via XX Settembre, along the small port, up to Maniace Castle at the southern tip of Ortigia. Photo stop at the belvedere — one of the most Instagrammed spots on the island.

**Stop 3 — Duomo, Arethusa, Western seafront** `[NEW]`: We climb back to Piazza Duomo, where the cathedral is still a Doric temple inside. A short stop to walk the square, then the Arethusa Spring with the papyrus — the only spontaneous papyrus colony in Europe. We close on the western seafront at sunset.

**Stop 4 — Final aperitivo** `[NEW]`: Aperitivo at one of the bars on Lungomare Alfeo or Riva di Levante, sea view. Spritz or Sicilian white wine, board of local cheeses and cured meats. Final photos with the 500 at the right angle. Drop-off 2h after start.

##### FAQ EN
- **Q1**: *Which 500 exactly?* **A1**: 1968 Fiat 500 Spiaggina — the "torpedo" version without rear doors, canvas top, meticulously restored. One of the 6 vintage cars in the fleet.
- **Q2**: *Can it be done in the evening?* **A2**: Yes. "Blue hour" version starts an hour before sunset and ends with dinner (dinner at extra cost). Same price as daytime.
- **Q3**: *If it rains?* **A3**: We reschedule with no penalty — the Spiaggina has the top but the point of the tour is top down. We decide the day before based on forecast.
- **Q4**: *Children?* **A4**: From age 10 up only, for space and safety reasons. For smaller families we recommend Isola delle Correnti.

### 5.6 `/tour/silent-sailing` + `/en/tour/silent-sailing`

#### `/tour/silent-sailing` (Italiano)

##### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Silent Sailing — Vela Privata Ortigia con Tagliere Fratelli Burgio \| Sicily Driver |
| `<meta description>` | Tour in vela privata da Ortigia: 4 ore lungo la costa siracusana, soste bagno nelle baie più belle, tagliere Fratelli Burgio a bordo, prosecco. Max 8 persone. |

##### Hero
- **Eyebrow** `[NEW]`: *Ortigia · 4 ore · vela privata*
- **H1** `[NEW]`: *Silent Sailing.*
- **Sub** `[NEW]`: Quattro ore in vela privata sulla costa di Ortigia. Soste bagno, prosecco, tagliere Fratelli Burgio a bordo.

##### Paragrafo intro `[NEW]`
> La barca a vela non corre, non rumoreggia. Si lascia portare dal vento. Quattro ore in vela privata partendo da Ortigia: lungo la costa siracusana sud, due-tre baie isolate dove fare il bagno fuori dal turismo di massa, tagliere di prodotti tipici della gastronomia Fratelli Burgio servito a bordo, prosecco fresco. Skipper professionista incluso. Max 8 persone — perfetto per gruppi piccoli, coppie, famiglie.

##### "Il tour in 4 numeri"
| Numero | Etichetta |
|---|---|
| **4 ore** | Durata |
| **max 8** | Persone |
| **IT / EN** | Lingue skipper |
| **da €380** `[VERIFICA CON ENZO]` | Prezzo per barca (non per persona) |

##### Partner di questo tour
- **Fratelli Burgio** — Gastronomia siciliana di alta selezione. Il tagliere a bordo include salumi, formaggi, conserve, dolci. Tutto del territorio.

##### "Tappa per tappa"

**Tappa 1 — Imbarco a Ortigia** `[NEW]`:
> Imbarco al porto piccolo di Ortigia, vicino alla Fonte Aretusa. Briefing di sicurezza dello skipper (10 minuti), prosecco di benvenuto, e si parte. Le vele si aprono fuori dal porto.

**Tappa 2 — Navigazione costa sud** `[NEW]`:
> Risaliamo verso sud lungo la costa, dove le calette si nascondono tra promontori bassi. Niente motore una volta fuori porto — solo il vento, il rumore della vela che si gonfia, qualche gabbiano. Lo skipper ti racconta come si legge il vento, se ti interessa.

**Tappa 3 — Sosta bagno** `[NEW]`:
> Ancora in una delle baie più belle (la scelta dipende dal vento del giorno — Fontane Bianche, Cala Mosche, o una caletta nascosta vicino a Marzamemi). Bagno in acque cristalline. A bordo arriva il tagliere Fratelli Burgio: salumi, formaggi locali, pane fresco, conserve.

**Tappa 4 — Rientro al tramonto** `[NEW]`:
> Rientro lungo la costa, possibile sosta finale per il tramonto se la luce promette bene. Sbarco a Ortigia.

##### "Cosa è incluso, cosa no"
**Incluso**: Barca a vela privata con skipper / 4 ore navigazione / Prosecco di benvenuto + a bordo / Tagliere Fratelli Burgio / Acqua e bibite / Salvagente, scaletta per bagno, telo

**Non incluso**: Trasferimento da/per il porto (se non sei già a Ortigia, si aggiunge separatamente) / Eventuali extra alcolici

##### FAQ `[NEW]`
- **Q1**: *Serve esperienza nautica?* **A1**: No. Lo skipper è professionista, la barca è gestita da lui. Tu sei ospite. Se ti interessa imparare qualcosa sulle vele, te lo spiega.
- **Q2**: *E se non c'è vento?* **A2**: La barca ha anche il motore. In una giornata senza vento navighiamo a motore, ma facciamo soste più lunghe nelle baie.
- **Q3**: *Bambini?* **A3**: Sì, da ogni età. Salvagenti per bambini a bordo. Per i più piccoli (sotto i 4 anni) consigliamo mattinata calma, mare piatto.
- **Q4**: *Mare mosso?* **A4**: Se le previsioni indicano mare forza 3+ riprogrammiamo senza penali. Le condizioni si valutano la sera prima.

#### `/en/tour/silent-sailing` (English)

##### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Silent Sailing — Private Sailing from Ortigia with Fratelli Burgio Platter \| Sicily Driver |
| `<meta description>` | Private sailing tour from Ortigia: 4 hours along Syracuse coast, swim stops in hidden bays, Fratelli Burgio platter on board, prosecco. Max 8 people. |

##### Hero
- **H1** `[NEW]`: *Silent Sailing.*
- **Sub** `[NEW]`: Four hours of private sailing along Ortigia's coast. Swim stops, prosecco, Fratelli Burgio platter on board.

##### Paragrafo intro `[NEW]`
> A sailing boat doesn't rush, doesn't roar. It lets the wind carry it. Four hours of private sailing leaving from Ortigia: along the south Syracuse coast, two or three isolated bays for a swim away from mass tourism, Fratelli Burgio gourmet platter served on board, fresh prosecco. Professional skipper included. Max 8 people — perfect for small groups, couples, families.

##### Stops EN
**Stop 1 — Boarding at Ortigia** `[NEW]`: Boarding at the small port of Ortigia, near the Arethusa Spring. Skipper's safety briefing (10 min), welcome prosecco, and we go. Sails open just outside the harbor.

**Stop 2 — Sailing the south coast** `[NEW]`: We head south along the coast, where coves hide between low promontories. No engine once out of port — just the wind, the sound of the sail filling, a seagull or two. The skipper explains how to read the wind, if you're curious.

**Stop 3 — Swim stop** `[NEW]`: Anchor in one of the most beautiful bays (choice depends on the day's wind — Fontane Bianche, Cala Mosche, or a hidden cove near Marzamemi). Swim in crystalline water. The Fratelli Burgio platter comes on board: cured meats, local cheeses, fresh bread, preserves.

**Stop 4 — Sunset return** `[NEW]`: Return along the coast, optional final stop for sunset if the light promises. Disembark in Ortigia.

##### FAQ EN
- **Q1**: *Do I need sailing experience?* **A1**: No. The skipper is professional, the boat is managed by them. You're a guest. If you want to learn anything about sails, they'll teach you.
- **Q2**: *What if there's no wind?* **A2**: The boat has an engine too. On a windless day we cruise with engine but make longer stops in the bays.
- **Q3**: *Children?* **A3**: Yes, all ages. Children's life jackets on board. For very small ones (under 4) we recommend calm morning, flat sea.
- **Q4**: *Rough sea?* **A4**: If the forecast indicates force 3+ we reschedule with no penalty. Conditions assessed the evening before.


---

## 6. SERVIZI — `/servizi` + `/en/services`

### 6.1 `/servizi` (Italiano)

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Servizi NCC Siracusa — Transfer, Tour, Wedding, Eventi e Business \| Sicily Driver |
| `<meta description>` | Servizi NCC a Siracusa: transfer aeroportuali, tour Sicilia, matrimoni, eventi aziendali. Flotta Mercedes Classe V, GLB Premium, Classe E. Servizio 24/7 in tutta la Sicilia orientale. |

#### Hero ridotta
- **Eyebrow** `[NEW]`: *Servizi*
- **H1** `[NEW]`: *Tutto quello che facciamo.*
- **Sub** `[NEW]`: Da un transfer di 60 minuti al wedding di tre giorni. La copertura è la Sicilia orientale, le auto sono Mercedes, il fuso orario è 24/7.

#### Paragrafo intro `[PRESERVE]` (era nel vecchio /servizi.php)
> Veicoli premium, autisti professionisti e itinerari su misura per scoprire la Sicilia in totale comfort.

#### "I 4 servizi" — color blocking 4 card grandi
**H2** `[NEW]`: *I quattro servizi.*

**Card 1 — Transfer privati**
- Eyebrow: *Aeroporti, porti, point-to-point*
- Body `[POLISH]`: Catania, Comiso, Palermo, Trapani. Porti di Pozzallo, Augusta, Siracusa. Pick-up flessibile h24, monitoraggio voli incluso.
- CTA: *Approfondisci →* (al momento link ancorato in pagina, perché non c'è pagina dedicata transfer)

**Card 2 — Tour Sicilia (5 esperienze)**
- Eyebrow: *Itinerari su misura*
- Body `[NEW]`: Cinque tour disegnati intorno alle località dove andiamo da anni. Più la possibilità di un tour totalmente su misura.
- CTA: *Approfondisci →* link `/tour-sicilia`

**Card 3 — Wedding**
- Eyebrow: *Auto d'epoca e navetta ospiti*
- Body `[NEW]`: Sei auto d'epoca tutte revisionate, servizio navetta per gli invitati, consulenza sui borghi dove sposarsi. Tre cose, fatte bene.
- CTA: *Approfondisci →* link `/wedding`

**Card 4 — Eventi e business**
- Eyebrow: *Aziende, fiere, congressi*
- Body `[POLISH]` (era nel vecchio /servizi.php):
  - Meeting e trasferimenti aziendali
  - Cerimonie ed eventi speciali
  - Congressi e fiere con supporto logistico
- CTA: *Richiedi preventivo →* link `/contatti`

#### "La flotta" — 3 schede veicolo
**H2** `[NEW]`: *La flotta.*

**Mercedes Classe V** `[NEW]`:
- Capacità: fino a 7 passeggeri
- Bagagli: 7 valigie grandi
- Optional: aria climatizzata indipendente per ogni fila, Wi-Fi 4G, seggiolini bambino su richiesta
- Per: famiglie, gruppi, transfer multipli

**Mercedes GLB Premium** `[NEW]`:
- Capacità: fino a 4 passeggeri
- Bagagli: 3 valigie grandi
- Optional: tetto panoramico, sedili in pelle, Wi-Fi 4G
- Per: coppie con bagaglio importante, transfer business

**Mercedes Classe E** `[NEW]`:
- Capacità: fino a 3 passeggeri
- Bagagli: 2 valigie grandi
- Optional: berlina executive, sedili massaggio anteriori, audio Burmester
- Per: business, transfer formali, cerimonia

#### "Aree e città servite" `[NEW]`
**H2**: *Dove operiamo.*

Mappa stilizzata della Sicilia orientale con pin sulle città servite + lista cliccabile:

- **Siracusa e provincia** — Siracusa città, Ortigia, Fontane Bianche, Marzamemi, Avola, Pachino, Portopalo, Noto, Rosolini
- **Ragusa e provincia** — Ragusa, Ragusa Ibla, Modica, Scicli, Vittoria, Comiso, Pozzallo
- **Catania e provincia** — Catania città, Aeroporto Fontanarossa, Acireale, Riposto, Taormina, Giardini Naxos
- **Etna** — Linguaglossa, Zafferana Etnea, Nicolosi, Rifugio Sapienza

Click su una città → pagina locale corrispondente quando disponibile.

#### "Listino prezzi indicativo"
**H2** `[NEW]`: *Listino prezzi indicativo.*

(Stessa tabella della home `/`)

#### "Perché Sceglierci" `[PRESERVE]` (era nel vecchio /servizi.php)
**H2** `[POLISH]`: *Cosa rende diverso il nostro servizio.*

`[PRESERVE]` (lista letterale dal vecchio sito):
- Autisti certificati e multilingue
- Veicoli sempre sanificati e controllati
- Assistenza 24/7 e supporto clienti dedicato
- Itinerari esclusivi e personalizzati

#### FAQ `[NEW]`
- **Q1**: *Si paga per chilometro o a tratta?* **A1**: A tratta, con prezzo fisso confermato al momento del preventivo. Niente sorprese al ritorno.
- **Q2**: *Quanto costa un'attesa supplementare?* **A2**: I primi 60 minuti di attesa in aeroporto sono inclusi. Oltre, €15 per 30 minuti.
- **Q3**: *Operate in tutta la Sicilia?* **A3**: Sì, con base operativa nella Sicilia orientale (Siracusa, Noto, Marzamemi). Per Palermo, Trapani e zone occidentali serve almeno 48h di anticipo per organizzare.
- **Q4**: *Come si paga?* **A4**: Carta, contanti, bonifico. Per importi sopra €500 chiediamo conferma con caparra del 30%.

#### CTA finale
**H2** `[NEW]`: *Vediamo cosa ti serve.*
- CTA 1: *Richiedi preventivo →* link `/contatti`
- CTA 2: *Scrivi su WhatsApp*

### 6.2 `/en/services` (English) — Categoria 1 preserve forte (2 click)

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Sicily Private Driver Services — Transfers, Tours, Weddings & Business \| Sicily Driver |
| `<meta description>` | Private driver services in Sicily: airport transfers, custom Sicily tours, weddings, corporate events. Mercedes V-Class, GLB Premium, E-Class fleet. 24/7 service across eastern Sicily. |

#### Hero
- **Eyebrow** `[NEW]`: *Services*
- **H1** `[POLISH]` (era "Our Services" nella vecchia pagina): *Everything we do.*
- **Sub** `[NEW]`: From a 60-minute transfer to a three-day wedding. The coverage is eastern Sicily, the cars are Mercedes, the time zone is 24/7.

#### Paragrafo intro `[PRESERVE]` LETTERALE
> Premium vehicles, professional drivers and tailor-made itineraries to explore Sicily in total comfort.

#### "The 4 services"
**H2** `[NEW]`: *The four services.*

**Card 1 — Airport Transfers & Point-to-Point** `[POLISH]` (era nel vecchio):
- Catania Airport ⇄ Siracusa / Noto / Ragusa / Taormina
- Comiso, Palermo, Trapani on request
- Mercedes vans & SUVs (V-Class, GLB, E-Class)

**Card 2 — Private Tours in Sicily** `[PRESERVE]` (era nel vecchio):
> Custom itineraries with a dedicated driver: Baroque towns, Etna & wineries, Ortigia and Taormina highlights.

**Card 3 — Wedding**
- Eyebrow `[NEW]`: *Vintage cars and guest shuttles*
- Body `[NEW]`: Six vintage cars all serviced, shuttle service for guests, advice on the villages where to celebrate. Three things, done well.
- CTA `[NEW]`: *Read more →* link `/en/weddings`

**Card 4 — Events & Business** `[PRESERVE]` (era nel vecchio):
> - Corporate travel and meetings
> - Weddings, ceremonies and VIP events
> - On-site logistics for congresses and fairs

#### Fleet (3 schede)
(Stessa struttura IT in EN — V-Class, GLB Premium, E-Class con stessa descrizione)

#### Where we operate
(Stessa lista IT in EN — Syracuse, Ragusa, Catania, Etna areas)

#### Price list
(Stessa tabella `/en/` in EN)

#### Why choose us `[PRESERVE]` LETTERALE (era nel vecchio /servizi-en.php)
> - Certified, English-speaking drivers
> - Mercedes vehicles, sanitized and checked
> - 24/7 assistance and fast confirmations
> - Exclusive, tailor-made itineraries

#### FAQ EN `[NEW]`
- **Q1**: *Do you charge per kilometer or per trip?* **A1**: Per trip, with fixed price confirmed at quote. No surprises on return.
- **Q2**: *How much for additional waiting time?* **A2**: First 60 min airport wait included. After that, €15 per 30 min.
- **Q3**: *Do you operate across all Sicily?* **A3**: Yes, with operational base in eastern Sicily (Syracuse, Noto, Marzamemi). For Palermo, Trapani and western areas we need at least 48h notice to organize.
- **Q4**: *How to pay?* **A4**: Card, cash, bank transfer. For amounts over €500 we ask 30% deposit confirmation.

---

## 7. WEDDING — `/wedding` + `/en/weddings`

> Pagina **nuova additive**. Tutto `[NEW]`. Sub-purpose D (Lead qualification) sul form esteso. **Sezione galleria ATTIVA** (cliente conferma portfolio reale).

### 7.1 `/wedding` (Italiano)

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Wedding Sicilia — Auto d'Epoca, Navetta Ospiti, Consulenza Borghi \| Sicily Driver |
| `<meta description>` | Servizio wedding in Sicilia orientale: 6 auto d'epoca tutte revisionate, navetta ospiti Mercedes, consulenza sui borghi dove sposarsi (Noto, Marzamemi, Scicli, Val di Noto). |

#### Hero emotivo
- **Eyebrow** `[NEW]`: *Wedding · Sicilia orientale*
- **H1** `[NEW]`: *Per il giorno che ricorderai.*
- **Sub** `[NEW]`: Sei auto d'epoca, navetta ospiti, e i posti che conosciamo come fossero di casa. Tre cose, fatte bene.
- **CTA primario** `[NEW]`: *Parliamo del giorno →*

#### "Come ti accompagniamo" — narrative editorial
**H2** `[NEW]`: *Come ti accompagniamo.*

3 blocchi narrativi:

**Prima della cerimonia** `[NEW]`:
> Ti veniamo a prendere nella villa o nell'hotel dove ti stai preparando. La sposa nell'auto d'epoca scelta, lo sposo nel transfer dedicato, gli ospiti nella navetta che parte dall'hotel. Coordiniamo gli orari per arrivare alla cerimonia con il margine giusto — non troppo presto, non in ritardo.

**Durante** `[NEW]`:
> Dopo la cerimonia, le foto a coppia con l'auto d'epoca nei luoghi che scegliamo insieme: una cala vicino Marzamemi, una piazza barocca di Noto al tramonto, un belvedere sull'Etna. Mentre voi siete con il fotografo, gli ospiti vengono trasferiti al luogo del ricevimento.

**Dopo** `[NEW]`:
> A fine serata, navetta per tutti i guests verso gli hotel di base. Niente preoccupazione di guidare per nessuno. Auto a disposizione anche per il giorno dopo, se il viaggio di nozze parte da Sicilia.

#### "Le 6 auto d'epoca" — sezione signature
**H2** `[NEW]`: *Le 6 auto d'epoca.*

**Intro breve** `[NEW]`:
> Sei auto d'epoca, tutte revisionate e maniacalmente mantenute. Ogni dettaglio funziona, ogni cromatura è lucida come il giorno in cui sono uscite dalla fabbrica.

**6 schede auto** `[VERIFICA CON ENZO — modelli esatti delle 6 auto]`:
Placeholder modelli (da confermare):
1. **Fiat 500 Spiaggina** 1968 — *Per un arrivo cinematografico in piazza*
2. **Mercedes Benz 280SL Pagoda** 1969 — *Per chi vuole il sapore degli anni '60* `[VERIFICA CON ENZO]`
3. **Alfa Romeo Giulia Spider** 1967 — *Per un'estate italiana decapottabile* `[VERIFICA CON ENZO]`
4. **Volkswagen Maggiolino Cabrio** 1971 — *Per un wedding più rilassato* `[VERIFICA CON ENZO]`
5. **Lancia Aurelia B24** 1956 — *Per gli amanti del classico* `[VERIFICA CON ENZO]`
6. **Mercedes Benz Pullman** 1972 — *Per gli arrivi importanti, max 6 persone* `[VERIFICA CON ENZO]`

Ogni scheda: foto della macchina + nome modello + anno + 1-2 righe sul carattere dell'auto.

#### "Servizio navetta ospiti"
**H2** `[NEW]`: *Navetta ospiti — gli invitati al loro posto.*

Body `[NEW]`:
> La logistica del wedding è il dettaglio che fa la differenza per gli invitati. Coordiniamo una Mercedes Classe V (fino a 7 persone) o più mezzi in parallelo per i transfer ospiti: pickup hotel/aeroporti, transfer alle location della cerimonia e del ricevimento, rientro fine serata. Un solo numero WhatsApp di riferimento per ogni driver, tu pensi al resto.

**Cosa include il servizio**: Pickup multipli da hotel diversi / Coordinamento orari con wedding planner / Driver dedicato per ogni mezzo / WhatsApp di gruppo per gestione live / Rientro fine serata garantito

#### "I borghi dove sposarsi" — consulenza insider
**H2** `[NEW]`: *I borghi dove sposarsi.*

Body `[NEW]`:
> Non sono affiliazioni commerciali. Sono i posti che noi stessi consigliamo agli sposi che ce lo chiedono, perché conosciamo chi ci si è sposato prima e abbiamo visto come ha funzionato.

Lista 6 location:

1. **Noto** — *Per chi vuole il barocco* `[NEW]`. Cattedrale di San Nicolò per la cerimonia, palazzi storici (Villadorata, Nicolaci) per il ricevimento. Distanza media dalla nostra sede: 30 min.
2. **Marzamemi** — *Per chi vuole il mare* `[NEW]`. Piazza Regina Margherita con la tonnara, ricevimenti nei locali storici del borgo. 50 min da Siracusa.
3. **Scicli** — *Per chi cerca meno turismo* `[NEW]`. Capitale del barocco meno battuta di Noto. Palazzi storici disponibili per cerimonie civili e ricevimenti.
4. **Ragusa Ibla** — *Per chi ama le città di pietra* `[NEW]`. Giardini Iblei con vista, Chiesa di San Giorgio per la cerimonia.
5. **Masserie del Val di Noto** — *Per chi vuole campagna ed eleganza* `[NEW]`. Diverse masserie storiche restaurate ospitano sia cerimonia che ricevimento sotto lo stesso tetto. `[VERIFICA CON ENZO — nomi masserie consigliate]`
6. **Castello di Donnafugata** — *Per chi vuole un set cinematografico* `[NEW]`. Vicino Ragusa, location storica con parco. Solo per eventi di alto livello.

#### "Galleria" — sezione attiva (cliente conferma portfolio)
**H2** `[NEW]`: *Wedding che abbiamo accompagnato.*

Mosaico editorial 6-8 foto reali `[NEW]` `[VERIFICA CON ENZO — selezione foto da portfolio reale con liberatorie sposi]`.

Sub-caption `[NEW]`: Tutte le foto sono di matrimoni reali, pubblicate con il consenso degli sposi.

#### FAQ wedding-specifiche
**H2** `[NEW]`: *Dubbi.*

- **Q1** `[NEW]`: *Con quanto anticipo bisogna prenotare?*
- **A1** `[NEW]`: Idealmente 4-6 mesi prima per garantire l'auto d'epoca scelta. Per la sola navetta ospiti, anche 2 mesi sono sufficienti. In alta stagione (maggio-settembre) consigliamo prenotazione 6+ mesi.

- **Q2** `[NEW]`: *Le decorazioni dell'auto sono incluse?*
- **A2** `[NEW]`: Il fiocco/coccarda standard sì. Per decorazioni floreali personalizzate ci coordiniamo con il vostro florist o vi suggeriamo qualcuno di fiducia. Costo a parte.

- **Q3** `[NEW]`: *Quanta distanza copriamo nel servizio wedding?*
- **A3** `[NEW]`: Tutta la Sicilia orientale. Per cerimonie in zone più lontane (Palermo, Trapani) serve preventivo dedicato.

- **Q4** `[NEW]`: *Possiamo avere più auto d'epoca contemporaneamente?*
- **A4** `[NEW]`: Sì, fino a 6 — abbiamo tutte e 6 disponibili in parallelo se nessun altro evento è in calendario lo stesso giorno. Da verificare in fase preventivo.

- **Q5** `[NEW]`: *Gestione imprevisti il giorno del matrimonio?*
- **A5** `[NEW]`: Ogni driver ha un mezzo di backup raggiungibile in 30 minuti. Le auto d'epoca hanno una sostituzione moderna pronta in caso (rara) di problema meccanico last-minute.

- **Q6** `[NEW]`: *Auto bianca o di colore?*
- **A6** `[NEW]`: Tre delle 6 auto sono bianche, le altre conservano il colore originale (rosso, blu, crema). Si sceglie in base allo stile del wedding.

#### Form qualifying esteso (sub-purpose D) `[NEW]`
**H2**: *Ricevi un preventivo entro 24h.*

Form 7 campi:
- Data evento (obbligatorio, datepicker)
- Location cerimonia (obbligatorio — testo libero)
- Location ricevimento (testo libero)
- Numero auto d'epoca necessarie (dropdown: 1 / 2 / 3+)
- Numero ospiti da trasportare (per la navetta) (input numerico)
- Note speciali / Esigenze particolari (textarea)
- Nome + telefono + email (3 campi raggruppati)

CTA: **Ricevi preventivo entro 24h**

Success toast `[NEW]`: Richiesta ricevuta. Ti contattiamo entro 24h con il preventivo personalizzato. Per cose urgenti, scrivi direttamente su WhatsApp.

#### CTA WhatsApp diretto come opzione
**H2** `[NEW]`: *Preferisci scrivere direttamente?*
- *Scrivi su WhatsApp* (CTA grande)
- *Chiama: +39 375 641 3379*

### 7.2 `/en/weddings` (English)

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Sicily Wedding — Vintage Cars, Guest Shuttle, Village Advice \| Sicily Driver |
| `<meta description>` | Wedding service in eastern Sicily: 6 fully serviced vintage cars, Mercedes guest shuttle, advice on villages to marry in (Noto, Marzamemi, Scicli, Val di Noto). |

#### Hero
- **Eyebrow** `[NEW]`: *Wedding · eastern Sicily*
- **H1** `[NEW]`: *For the day you'll remember.*
- **Sub** `[NEW]`: Six vintage cars, guest shuttle, and the places we know like home. Three things, done well.
- **CTA primario** `[NEW]`: *Let's talk about the day →*

#### "How we accompany you"
**H2** `[NEW]`: *How we accompany you.*

(Stessi 3 blocchi narrativi IT in EN — Before / During / After the ceremony)

#### "The 6 vintage cars"
(Stessi 6 modelli in EN, descrizioni tradotte)

#### "Guest shuttle service"
(Stesso schema IT in EN)

#### "Where to celebrate"
**H2** `[NEW]`: *Where to celebrate.*

(Stessi 6 borghi/location, descrizioni tradotte)

#### "Gallery"
**H2** `[NEW]`: *Weddings we've accompanied.*

(Stessa galleria 6-8 foto, sub-caption EN: All photos are from real weddings, published with the couples' consent.)

#### FAQ EN
(6 FAQ tradotte dalla versione IT)

#### Qualifying form
(Form 7 campi tradotti, success toast tradotto, CTA "Get a quote within 24h")


---

## 8. CHI SIAMO — `/chi-siamo` + `/en/about`

> Cluster Fast (trust statica). Categoria preservation:
> - IT: `/chi-siamo.php` ha 8 imp 0 click → Categoria 3, libertà di riscrittura
> - EN: `/en/about` ha 2 click + CTR 4.65% → **Categoria 1 preserve forte**, body lock letterale

### 8.1 `/chi-siamo` (Italiano)

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Chi Siamo — La Storia di Sicily Driver Siracusa \| NCC con 3 Sedi in Sicilia |
| `<meta description>` | Sicily Driver Siracusa è un'attività di famiglia con sedi a Siracusa, Noto e Marzamemi. Mercedes controllate ogni settimana, driver che parlano inglese vero. La nostra storia. |

#### Hero ridotta narrativa
- **Eyebrow** `[NEW]`: *Chi siamo*
- **H1** `[NEW]`: *La storia dietro Sicily Driver.*
- **Sub** `[NEW]`: Tre sedi, una flotta Mercedes, un'idea: portarti dove vuoi senza scorciatoie.

#### Racconto in 3-4 paragrafi
**H2** `[NEW]`: *Come è iniziata.*

**Paragrafo 1** `[NEW]` `[VERIFICA CON ENZO — anno fondazione, motivazione iniziale]`:
> Sicily Driver Siracusa nasce dall'idea di un servizio NCC pensato per due tipi di clienti molto diversi: il turista internazionale che arriva all'aeroporto di Catania con la valigia troppo pesante per il taxi, e gli sposi che cercano un'auto d'epoca per il giorno più importante. Una famiglia, una flotta che cresce per gradi, tre sedi che coprono i tre punti dove serve esserci.

**Paragrafo 2** `[NEW]`:
> Una sede principale a Siracusa in Via della Maestranza, a due passi da Ortigia. Una seconda a Noto, in Via Alcide De Gasperi, perché il Tour del Barocco e i wedding nella capitale del barocco siciliano sono diventati una parte importante del nostro lavoro. Una terza a Marzamemi, in Via Marzamemi 23, per essere già lì quando un cliente vuole il sunset sull'Isola delle Correnti.

**H2** `[NEW]`: *Cosa facciamo bene.*

**Paragrafo 3** `[NEW]`:
> Tre cose. Primo: arriviamo puntuali, anche se il volo arriva alle 3 di notte. Secondo: parliamo inglese vero, non Google Translate — la maggior parte dei nostri driver ha vissuto o lavorato all'estero. Terzo: conosciamo i posti dove ti portiamo, non solo le strade. Se ti consigliamo dove mangiare a Ortigia o quale cantina visitare sull'Etna, è perché ci abbiamo mangiato o bevuto noi prima.

#### "In immagini" — galleria storia `[NEW]` `[VERIFICA CON ENZO — foto reali]`
**H2** `[NEW]`: *Dietro la flotta.*

Asimmetria editorial 6-8 foto reali da richiedere a Enzo:
- Autista al volante (interno Mercedes)
- Dettaglio interno Mercedes (pelle, dashboard)
- Team in sede a Siracusa
- Una delle auto d'epoca in posa con paesaggio
- Driver che accoglie cliente all'aeroporto
- Vista di una sede (interno o esterno)

#### "Quello in cui crediamo" — 3 blocchi narrativi short
**H2** `[NEW]`: *Quello in cui crediamo.*

3 colonne narrative editorial (NON "I nostri valori"):

**01 — Niente scorciatoie** `[NEW]`:
> Da Catania a Marzamemi non passiamo per strade più corte che il navigatore propone. Sappiamo dove si fa la fila d'estate, dove si guida male d'inverno, dove conviene fermarsi 5 minuti per evitare 20 di traffico dopo.

**02 — Mercedes controllate ogni settimana** `[NEW]`:
> Le nostre Mercedes vanno in officina ogni settimana, anche se non serve. Pneumatici, freni, fluidi, pulizia interna ed esterna. Mai un cliente è salito in un'auto con una luce di anomalia accesa.

**03 — Inglese vero, non Google Translate** `[NEW]`:
> Tutti i driver parlano inglese fluente. Tre parlano anche francese o spagnolo. Uno parla tedesco. Se il tuo gruppo ha una lingua particolare, dicci in fase di prenotazione — vediamo se possiamo abbinarti il driver giusto.

#### "Le 3 sedi"
**H2** `[NEW]`: *Le tre sedi.*

3 cards con indirizzo + mappa mini interattiva:

**Siracusa**
- *Via della Maestranza, 28* `[PRESERVE]`
- A due passi da Ortigia
- Sede principale + officina

**Noto**
- *Via Alcide De Gasperi, 15* `[PRESERVE]`
- Centro storico
- Operativa per Tour Barocco e wedding

**Marzamemi**
- *Via Marzamemi, 23* `[PRESERVE]`
- Borgo dei pescatori
- Operativa per Isola delle Correnti e sud-Sicilia

#### CTA contatti `[NEW]`
**H2**: *Ti veniamo a prendere.*
- CTA 1: *Richiedi un preventivo →* link `/contatti`
- CTA 2: *Scrivi su WhatsApp*

### 8.2 `/en/about` (English) — **Categoria 1 PRESERVE FORTE**

Body letterale dal vecchio sito (3 paragrafi "Our Story"). CTR attuale 4.65% — non si tocca virgola.

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | About Us — The Story of Sicily Driver Syracuse \| 3 Offices Across Sicily |
| `<meta description>` | Sicily Driver Syracuse is a family business with offices in Syracuse, Noto and Marzamemi. Mercedes checked weekly, drivers who speak real English. Our story. |

#### Hero ridotta
- **Eyebrow** `[NEW]`: *About*
- **H1** `[POLISH]` (era "Our Story" come H2 — promosso a H1): *Our story.*
- **Sub** `[NEW]`: Three offices, a Mercedes fleet, and one idea: drive you where you want, no shortcuts.

#### 3 paragrafi `[PRESERVE]` LETTERALE — non si tocca virgola
> Sicily Driver Syracuse is a young and dynamic company born from a passion for high-quality NCC and transfer services. With extensive experience in crafting personalized journeys, we provide tailored solutions for individuals and businesses seeking comfort and safety in their travels.
>
> Thanks to our carefully selected fleet and attention to detail, we guarantee punctuality and courtesy on every trip. Our team consists of transportation professionals who understand the specific needs of our clients, ready to support you 24/7 throughout your journey.
>
> Choosing Sicily Driver Syracuse means trusting a dedicated partner: from airport transfers and NCC services for events to private excursions and tours. We are by your side to make every journey enjoyable and worry-free.

⚠️ **Nota tecnica**: questi 3 paragrafi contengono "passion" e "VIP" che sarebbero banditi nel nostro nuovo copy stile. Restano perché il CTR 4.65% indica che funzionano per il pubblico EN. **NON modificare** salvo segnalazione esplicita di Enzo al second round.

#### "Behind the fleet" gallery `[NEW]`
**H2**: *Behind the fleet.*

(Stessa galleria 6-8 foto della versione IT, didascalie in EN)

#### "What we do well" — 3 narrative columns `[NEW]`
**H2** `[NEW]`: *What we do well.*

**01 — No shortcuts** `[NEW]`:
> From Catania to Marzamemi we don't take the shorter roads the GPS suggests. We know where the queues form in summer, where driving is hard in winter, where it's worth stopping 5 minutes to avoid 20 of traffic after.

**02 — Mercedes checked weekly** `[NEW]`:
> Our Mercedes go to the workshop every week, even if not needed. Tires, brakes, fluids, internal and external cleaning. No client has ever stepped into a car with a warning light on.

**03 — Real English, not Google Translate** `[NEW]`:
> All our drivers speak fluent English. Three also speak French or Spanish. One speaks German. If your group has a specific language, tell us at booking — we'll see if we can match the right driver.

#### "The 3 offices"
(Stessa struttura IT in EN — Syracuse / Noto / Marzamemi)

#### CTA contact
**H2** `[NEW]`: *We come to you.*
- CTA 1: *Get a quote →* link `/en/contact`
- CTA 2: *Message us on WhatsApp*

---

## 9. CONTATTI — `/contatti` + `/en/contact`

### 9.1 `/contatti` (Italiano)

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Contatti Sicily Driver Siracusa — WhatsApp, Telefono, Email, 3 Sedi |
| `<meta description>` | Contatta Sicily Driver Siracusa: +39 375 641 3379 (WhatsApp e telefono), info@ncctaxisiracusa.com. 3 sedi: Siracusa, Noto, Marzamemi. Risposta entro 1h. |

#### Hero ridotta
- **Eyebrow** `[NEW]`: *Contatti*
- **H1** `[NEW]`: *Parliamo.*
- **Sub** `[NEW]`: Risponde Sicily Driver, in italiano o in inglese. Entro un'ora su WhatsApp, entro 24h via email.

#### "3 modi per raggiungerci" — 3 card warm pari grandezza
**H2** `[NEW]`: *Tre modi per scriverci.*

**Card 1 — WhatsApp** `[PRESERVE]` dato:
- Titolo: *WhatsApp*
- Numero: *+39 375 641 3379*
- Subtitle: *La via più rapida, risposta entro 1h*
- CTA: *Apri WhatsApp →* link `https://wa.me/393756413379`

**Card 2 — Telefono** `[PRESERVE]` dato:
- Titolo: *Telefono*
- Numero: *+39 375 641 3379*
- Subtitle: *Per cose urgenti, sempre raggiungibili*
- CTA: *Chiama ora →* `tel:+393756413379`

**Card 3 — Email** `[PRESERVE]` dato:
- Titolo: *Email*
- Address: *info@ncctaxisiracusa.com*
- Subtitle: *Per richieste articolate, risposta in giornata*
- CTA: *Scrivi una email →* `mailto:info@ncctaxisiracusa.com`

#### Form contatto base 4 campi `[NEW]`
**H2**: *Oppure scrivi qui.*

(Form base — vedi sezione 0.4 microcopy globale per i 4 campi: Nome / Telefono o email / Tipo richiesta / Messaggio)

#### "Le 3 sedi"
**H2** `[NEW]`: *Dove siamo.*

3 cards con mappa interattiva centrata su ciascuna sede:

| Sede | Indirizzo `[PRESERVE]` | Note `[NEW]` |
|---|---|---|
| **Siracusa** | Via della Maestranza, 28 | Sede principale + officina |
| **Noto** | Via Alcide De Gasperi, 15 | Operativa per Tour Barocco e wedding |
| **Marzamemi** | Via Marzamemi, 23 | Operativa per Isola delle Correnti |

Embed mappa OpenStreetMap o Google Maps centrata sui 3 pin.

#### "Tempi di risposta" — rassicurazione
**H2** `[NEW]`: *I tempi di risposta.*

| Canale | Tempo medio risposta |
|---|---|
| WhatsApp | entro 1h, 24/7 |
| Telefono | immediato durante l'orario diurno, fino a 30 min di notte |
| Email | entro 24h lavorative |
| Form contatti | entro 24h |

#### Dati anagrafici aziendali (footer della pagina) `[PRESERVE]`
- Sicily Driver Siracusa
- P.IVA: IT02150600894
- Email PEC: izzo.v@pec.it

### 9.2 `/en/contact` (English) — Categoria 2 refresh metadata (110 imp CTR 0%)

#### Metadata `[NEW]` — refresh urgente
| Campo | Valore |
|---|---|
| `<title>` | Contact Sicily Driver Syracuse — WhatsApp, Phone, Email, 3 Offices |
| `<meta description>` | Contact Sicily Driver Syracuse: +39 375 641 3379 (WhatsApp and phone), info@ncctaxisiracusa.com. 3 offices: Syracuse, Noto, Marzamemi. Reply within 1h. |

#### Hero
- **Eyebrow** `[NEW]`: *Contact*
- **H1** `[NEW]`: *Let's talk.*
- **Sub** `[NEW]`: Sicily Driver answers, in Italian or English. Within an hour on WhatsApp, within 24h by email.

#### "3 ways to reach us"
**H2** `[NEW]`: *Three ways to reach us.*

**Card 1 — WhatsApp**: Title *WhatsApp*, Number *+39 375 641 3379*, Subtitle *The fastest way, reply within 1h*, CTA *Open WhatsApp →*

**Card 2 — Phone**: Title *Phone*, Number *+39 375 641 3379*, Subtitle *For urgent matters, always reachable*, CTA *Call now →*

**Card 3 — Email**: Title *Email*, Address *info@ncctaxisiracusa.com*, Subtitle *For detailed requests, same-day reply*, CTA *Send an email →*

#### Contact form (4 fields)
**H2** `[NEW]`: *Or write here.*

(Same form base as IT, EN labels)

#### The 3 offices
(Same structure IT in EN, EN notes)

#### Response times
**H2** `[NEW]`: *Response times.*

(Same table IT in EN)

---

## 10. PARTNER — `/partner` + `/en/partners`

> Pagina **nuova additive**. Tutto `[NEW]`. Cluster Fast (editoriale di prova sociale, no booking). Non SEO-target.

### 10.1 `/partner` (Italiano)

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Partner Selezionati Sicily Driver — Pura Vida, Burgio, Benanti, Palmeri |
| `<meta description>` | I partner curati di Sicily Driver Siracusa: Pura Vida Beach Club, Fratelli Burgio, Cantina Benanti, Cantina Palmeri. Non sponsor, posti che frequentiamo da anni. |

#### Hero ridotta editoriale
- **Eyebrow** `[NEW]`: *Partner*
- **H1** `[NEW]`: *Chi scegliamo per te.*
- **Sub** `[NEW]`: Non sono sponsor. Sono i posti e le persone che noi stessi portiamo nei nostri tour perché crediamo siano i migliori.

#### Partner — una card per ognuno (layout verticale alternato)

**Partner 1 — Pura Vida Beach Club**

- Eyebrow: *Portopalo di Capo Passero · Beach club*
- H2 `[NEW]`: *Pura Vida Beach Club.*
- Body `[NEW]`: Pura Vida è il beach club che guarda l'Isola delle Correnti dal lato giusto — quello dove al tramonto i due mari si incontrano. Cucina siciliana servita in spiaggia, lettini in legno chiaro, accesso al mare basso e cristallino. Lavoriamo con loro perché sanno cosa significa lasciare in pace un cliente che vuole solo guardare il mare per tre ore.
- *Dove li trovi nei nostri tour*: → [Isola delle Correnti](/tour/isola-delle-correnti)
- Link esterno (se disponibile): `[VERIFICA CON ENZO — URL Pura Vida]`

**Partner 2 — Fratelli Burgio**

- Eyebrow: *Ortigia · Gastronomia siciliana*
- H2 `[NEW]`: *Fratelli Burgio.*
- Body `[NEW]`: La gastronomia Fratelli Burgio in Ortigia è una di quelle botteghe che, varcata la porta, ti porta dentro un manuale di prodotti siciliani che non sapevi esistessero. Salumi locali, formaggi di pastori vicino Ragusa, olive curate in cinque modi diversi, pane fresco. I taglieri che servono a bordo del Silent Sailing nascono qui. Lavoriamo con loro perché ogni prodotto ha un nome di produttore dietro, non un'etichetta industriale.
- *Dove li trovi nei nostri tour*: → [Silent Sailing](/tour/silent-sailing)
- Link esterno: `[VERIFICA CON ENZO — URL Fratelli Burgio]`

**Partner 3 — Cantina Benanti**

- Eyebrow: *Etna · Cantina storica*
- H2 `[NEW]`: *Cantina Benanti.*
- Body `[NEW]`: Cantina Benanti è una delle voci storiche della rinascita dell'Etna come terroir di alta qualità. Producono dal versante sud-est, lavorando Nerello Mascalese e Carricante su suoli vulcanici tra i 600 e i 900 metri. La degustazione che proponiamo nell'Etna Premium Escape parte sempre dai loro bianchi e finisce con un rosso che racconta vent'anni di affinamento siciliano.
- *Dove li trovi nei nostri tour*: → [Etna Premium Escape](/tour/etna-premium)
- Link esterno: `[VERIFICA CON ENZO]`

**Partner 4 — Cantina Palmeri**

- Eyebrow: *Etna · Vini di territorio*
- H2 `[NEW]`: *Cantina Palmeri.*
- Body `[NEW]`: Cantina Palmeri sta sul versante sud-orientale dell'Etna, meno turistica delle storiche del nord ma con una qualità che cresce di anno in anno. Una piccola realtà di famiglia, vini che parlano di una zona precisa e di un modo preciso di vinificare. Quando proponiamo l'Etna Premium con loro, è perché ci interessa farti conoscere l'altra Etna, quella meno conosciuta.
- *Dove li trovi nei nostri tour*: → [Etna Premium Escape](/tour/etna-premium)
- Link esterno: `[VERIFICA CON ENZO]`

**Slot vuoto per partner futuri** `[NEW]`:
> *Stiamo selezionando un quinto partner: una pasticceria di Modica per i tour del barocco. Aggiornamento previsto entro fine 2026.*

#### CTA finale `[NEW]`
**H2**: *Sei un'attività siciliana e vorresti collaborare?*

Body: Cerchiamo partner che condividano la nostra idea: meno marketing, più sostanza. Se gestisci un'attività in Sicilia orientale (gastronomia, vino, hospitality, esperienze) e pensi che valga la pena conoscerci, scrivici.

CTA: *Scrivi a info@ncctaxisiracusa.com*

### 10.2 `/en/partners` (English)

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Selected Partners — Sicily Driver Curates Pura Vida, Burgio, Benanti, Palmeri |
| `<meta description>` | Sicily Driver Syracuse curated partners: Pura Vida Beach Club, Fratelli Burgio, Cantina Benanti, Cantina Palmeri. Not sponsors — places we've known for years. |

#### Hero
- **Eyebrow**: *Partners*
- **H1** `[NEW]`: *Who we choose for you.*
- **Sub** `[NEW]`: Not sponsors. The places and people we ourselves take into our tours because we believe they're the best.

#### 4 partner cards (EN versions)

**Partner 1 — Pura Vida Beach Club** `[NEW]`:
> Pura Vida is the beach club that faces Isola delle Correnti from the right side — the one where at sunset the two seas meet. Sicilian cuisine served on the beach, light wooden loungers, access to shallow crystalline water. We work with them because they know what it means to leave a guest in peace who just wants to watch the sea for three hours.

**Partner 2 — Fratelli Burgio** `[NEW]`:
> The Fratelli Burgio gastronomy in Ortigia is one of those shops that, once you cross the door, takes you inside a manual of Sicilian products you didn't know existed. Local cured meats, cheeses from shepherds near Ragusa, olives cured in five different ways, fresh bread. The platters served on board the Silent Sailing are born here. We work with them because every product has a producer's name behind it, not an industrial label.

**Partner 3 — Cantina Benanti** `[NEW]`:
> Cantina Benanti is one of the historic voices in the renaissance of Etna as a high-quality terroir. They produce on the south-east side, working Nerello Mascalese and Carricante on volcanic soils between 600 and 900 meters. The tasting we propose in the Etna Premium Escape always starts with their whites and ends with a red that tells twenty years of Sicilian aging.

**Partner 4 — Cantina Palmeri** `[NEW]`:
> Cantina Palmeri sits on the south-eastern slope of Etna, less touristic than the historic ones to the north but with quality that grows year by year. A small family operation, wines that speak of a precise area and a precise way of winemaking. When we propose Etna Premium with them, it's because we want to introduce you to the other Etna, the lesser-known one.

#### CTA finale
**H2** `[NEW]`: *Are you a Sicilian business looking to collaborate?*

Body `[NEW]`: We look for partners who share our idea: less marketing, more substance. If you run a business in eastern Sicily (gastronomy, wine, hospitality, experiences) and think it's worth getting to know us, write to us.

CTA: *Email info@ncctaxisiracusa.com*

---

## 11. Riepilogo placeholder `[VERIFICA CON ENZO]` (per second round Chat 2)

Lista esaustiva di tutto ciò che il cliente Elevate deve verificare con Enzo prima del go-live, per chiudere i placeholder:

### Dati anagrafici e brand
- [ ] Anno fondazione / anni attività di Sicily Driver Siracusa (impatta: home `Dietro al volante`, `/chi-siamo`)
- [ ] Cognome completo titolare (Vincenzo Izzo? confermato dalla PEC `izzo.v@pec.it`)
- [ ] URL completo Google Business Profile (impatta: schema.org `sameAs` home — il SINGOLO elemento più importante per SEO locale)
- [ ] URL Instagram brand attivo (esiste? Quale handle?)
- [ ] Eventuale Facebook brand (handle attuale `nccautoservizisiracusa` o nuovo?)

### Prezzi tratte
- [ ] Catania → Noto: €120? (placeholder)
- [ ] Catania → Taormina: €120? (placeholder)
- [ ] Catania → Ragusa: €160? (placeholder)
- [ ] Catania → Modica: €150? (placeholder)
- [ ] Pozzallo → Siracusa: €120? (placeholder)
- [ ] Noto → Siracusa: €60? (placeholder)
- [ ] Noto → Marzamemi: €50? (placeholder)
- [ ] Ragusa → Siracusa: €120? (placeholder)
- [ ] Taormina → Giardini Naxos: €40? (placeholder)
- [ ] Taormina → Siracusa: €180? (placeholder)
- [ ] Comiso → Ragusa: €50? (placeholder)
- [ ] Comiso → Noto: €100? (placeholder)

### Prezzi tour
- [ ] Tour Barocco: €380 / €420 / €480 (bassa/media/alta stagione)?
- [ ] Etna Premium Escape: €580?
- [ ] Isola delle Correnti: €420?
- [ ] Dolce Vita Siracusa: €280?
- [ ] Silent Sailing: €380 (per barca, non per persona)?
- [ ] Versione corta Isola delle Correnti: €280?

### Wedding
- [ ] Modelli esatti delle 6 auto d'epoca (placeholder: Fiat 500 Spiaggina, Mercedes 280SL, Alfa Giulia Spider, VW Maggiolino, Lancia Aurelia B24, Mercedes Pullman — da confermare anche annate e colori)
- [ ] Selezione foto wedding reali per galleria (con liberatorie sposi)
- [ ] Masserie del Val di Noto consigliate (nomi specifici per consulenza insider)

### Tour Barocco
- [ ] Lingue dei driver: italiano + inglese sicuri, francese opzionale?
- [ ] Selezione 3-5 recensioni Google reali da GBP per testimonial home + hub tour + tour dedicati (impatta: home IT/EN, /tour-sicilia, ogni pagina tour)

### Partner
- [ ] URL ufficiale Pura Vida Beach Club
- [ ] URL ufficiale Fratelli Burgio
- [ ] URL ufficiale Cantina Benanti
- [ ] URL ufficiale Cantina Palmeri

### Foto
- [ ] Foto del Sig. Izzo o team davanti alle auto (per /chi-siamo + home sezione "Dietro al volante")
- [ ] Foto interni Mercedes Classe V, GLB, Classe E (per `/servizi` e pagine locali)
- [ ] Foto delle 3 sedi (Siracusa, Noto, Marzamemi)
- [ ] Foto autista al volante (interno Mercedes)
- [ ] Eventuali foto realmente disponibili dai 5 tour (per non generare TUTTO con AI)

### Bug del sito vecchio da segnalare al cliente
- [ ] `/contatti.php` ha un form ma il submit non sembra funzionare (verificare se è solo HTML o se invia email)
- [ ] CTA `/index-en.php` → `/contact-en.php` (404)
- [ ] CTA `/chi-siamo-en.php` → `/contact.php` (404)
- [ ] Link `/servizi-en.php` → `/sicily-tours.php` (404)

---

*Fine COPY.md. Vedi SEO.md per schema markup completo, redirect plan e meta tag globali. Vedi ASSET-PROMPTS.md per la generazione di immagini e video con fal.ai.*
ente che si affaccia su Marina, mentre il sole inizia a scendere.

**Tappa 4 — Aperitivo finale** `[NEW]`:
> Ultima sosta in uno dei locali fronte mare che frequentiamo (Lungomare Alfeo o Piazza San Giuseppe, in base alla stagione). Spritz o vino bianco di territorio, taglieri siciliani inclusi. Trenta minuti per chiudere il pomeriggio prima di rientrare al parcheggio.

##### "Cosa è incluso, cosa no"

**Incluso**:
- Fiat 500 Spiaggina d'epoca + driver
- 3 ore con itinerario flessibile
- Aperitivo finale (drink + tagliere per le persone in auto)
- Foto a richiesta dal driver

**Non incluso**:
- Mance facoltative
- Ingressi a siti museali (es. Castello Maniace interno, Tempio di Apollo se visita guidata)

##### FAQ `[NEW]`
- **Q1**: *Quanti siamo in macchina?*
- **A1**: La Fiat 500 Spiaggina ospita comodamente 2 persone + driver. Possiamo stringere a 4 piccoli ma è sconsigliato se uno è di alta statura.

- **Q2**: *Se piove?*
- **A2**: Lo spostiamo. La Spiaggina con capote è gradevole anche sotto pioggia leggera, ma per acquazzoni o vento forte chiamiamo per riprogrammare senza penali.

- **Q3**: *Si può fare di sera?*
- **A3**: Sì, versione "Dolce Vita by night": stesso percorso al tramonto con aperitivo finale. Costo da €320 `[VERIFICA CON ENZO]`.

- **Q4**: *Anniversario o proposta di matrimonio?*
- **A4**: Possiamo organizzare bouquet, fotografo, sosta fotografica davanti al Duomo. Dicci cosa hai in mente, lo curiamo noi.

#### `/en/tour/dolce-vita-siracusa` (English)

##### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Dolce Vita Syracuse — Ortigia in a Vintage Fiat 500 Spiaggina \| Sicily Driver |
| `<meta description>` | Ortigia tour in a vintage Fiat 500 Spiaggina: 3 hours through Duomo, Fonte Aretusa, seafront, sunset aperitivo. Sicilian Dolce Vita, for couples and friends. |

##### Hero
- **H1** `[NEW]`: *Dolce Vita Syracuse.*
- **Sub** `[NEW]`: Ortigia in a vintage Fiat 500 Spiaggina. Three hours. One speed only: the walk.

##### Paragrafo intro `[NEW]`
> A 1968 Fiat 500 Spiaggina, fully restored, waiting for you in Ortigia. Three hours around the island: the Duomo that was once a Greek temple then a cathedral, the Fonte Aretusa with its still-growing papyrus, the seafront mornings belong only to fishermen, the sunset aperitivo on the sea. No rigid itinerary — the car stops where you want, we take the photos if you like. For couples, friends, small families. The car is driven by one of our drivers, you're a passenger of the Mediterranean.

(Resto: stessa struttura della versione IT in traduzione)

### 5.6 `/tour/silent-sailing` + `/en/tour/silent-sailing`

#### `/tour/silent-sailing` (Italiano)

##### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Silent Sailing Experience — Ortigia in Vela Privata con Fratelli Burgio \| Sicily Driver |
| `<meta description>` | Vela privata sulla costa di Ortigia: 4 ore in barca a vela con tagliere Fratelli Burgio, vino siciliano e snorkeling. Max 8 persone, partenza dal porto piccolo. |

##### Hero
- **Eyebrow** `[NEW]`: *Mare di Ortigia · 4 ore · vela privata*
- **H1** `[NEW]`: *Silent Sailing.*
- **Sub** `[NEW]`: Vela privata sulla costa di Ortigia. Quattro ore. Solo il vento, l'acqua, un tagliere Fratelli Burgio.

##### Paragrafo intro `[NEW]`
> Ortigia ha un volto diverso dal mare. Le facciate barocche prendono la luce di un'altra direzione, il Castello Maniace si rivela in tutta la sua massa, le grotte sotto Punta della Mola — invisibili da terra — sono il vero confine sud dell'isola. Quattro ore di vela privata su una barca per massimo 8 persone, partenza dal porto piccolo. A bordo, un tagliere preparato per voi dai Fratelli Burgio (formaggi siciliani, salumi di Nebrodi, pomodorini di Pachino, capperi di Salina), una bottiglia di vino bianco di territorio, una sosta per snorkeling se l'acqua è giusta. Si chiama Silent Sailing perché l'unico rumore è il vento.

##### "Il tour in 4 numeri"
| Numero | Etichetta |
|---|---|
| **4 ore** | Durata |
| **max 8** | Persone — *barca privata* |
| **IT / EN** | Lingue skipper |
| **da €640** `[VERIFICA CON ENZO]` | Prezzo a barca (non a persona) |

##### Partner di questo tour
- **Fratelli Burgio** — Gastronomia siciliana di territorio. Il tagliere a bordo è preparato per voi al mattino con prodotti selezionati: formaggi (caciocavallo ragusano, pecorino siciliano, ricotta salata), salumi di Nebrodi, pomodorini di Pachino, capperi di Salina, olio extra vergine biologico siciliano.

##### "Tappa per tappa"

**Tappa 1 — Ritrovo al porto piccolo** `[NEW]`:
> Ti aspettiamo al porto piccolo di Ortigia alle 10:30. Briefing rapido con lo skipper (sicurezza, programma, possibilità di personalizzare il giro), si sale in barca.

**Tappa 2 — Costiera ovest e Castello Maniace** `[NEW]`:
> Usciamo verso ovest, costeggiamo il Castello Maniace, doppiamo la Punta della Mola. Foto dal mare di una Ortigia che da terra non si vede mai. Lo skipper rallenta dove la barca è ferma e l'acqua è cristallina.

**Tappa 3 — Sosta snorkeling e tagliere** `[NEW]`:
> Ancoraggio in una baia riparata (varia in base al vento — di solito Cala Rossa o Plemmirio). Sosta di un'ora: snorkeling, bagno, tagliere Fratelli Burgio servito a bordo, bottiglia di vino siciliano da accompagnamento. Maschera e pinne disponibili a bordo.

**Tappa 4 — Rientro lungo la costa est** `[NEW]`:
> Rientro a vela lungo la costa est di Ortigia, con sguardo sui resti del Tempio di Apollo e sul lungomare di Levante. Arrivo al porto piccolo verso le 14:30.

##### "Cosa è incluso, cosa no"

**Incluso**:
- Barca a vela privata con skipper (max 8 persone)
- Tagliere Fratelli Burgio a bordo
- 1 bottiglia di vino bianco siciliano
- Maschera e pinne per snorkeling
- Asciugamani a bordo

**Non incluso**:
- Transfer da hotel al porto (su richiesta in Mercedes, +€30)
- Vino aggiuntivo (su richiesta)
- Tip skipper (facoltativa)

##### FAQ `[NEW]`
- **Q1**: *Posso esperire la vela anche se non ho mai navigato?*
- **A1**: Certo. Lo skipper si occupa di tutto. Puoi solo guardare, oppure se ti va dare una mano ai cazzaroni — molti lo trovano divertente.

- **Q2**: *Da quanti anni è il limite per bambini?*
- **A2**: Dai 5 anni in su. Per bambini più piccoli serve giubbino salvagente per minori (li forniamo) e parere dello skipper sulla giornata.

- **Q3**: *Posso prenotare solo per 2 persone?*
- **A3**: Il prezzo è fisso a barca (€640 fino a 8 persone). Se siete in 2, la barca resta privata vostra. Alternativamente proponiamo "Silent Sailing Shared" con altri 1-2 nuclei, costo a persona — chiedi in fase di preventivo.

- **Q4**: *E se c'è troppo vento?*
- **A4**: Lo skipper decide la mattina stessa. Se il mare è troppo mosso, riprogrammiamo senza penali — anche un giorno solo prima.

#### `/en/tour/silent-sailing` (English)

##### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Silent Sailing Experience — Ortigia by Private Sailboat with Fratelli Burgio \| Sicily Driver |
| `<meta description>` | Private sailing along Ortigia's coast: 4 hours on a sailboat with Fratelli Burgio platter, Sicilian wine and snorkeling. Max 8 people, departure from the small port. |

##### Hero
- **H1** `[NEW]`: *Silent Sailing.*
- **Sub** `[NEW]`: Private sailing along Ortigia's coast. Four hours. Only the wind, the water, a Fratelli Burgio platter.

(Resto: stessa struttura IT in EN — paragrafo intro, partner Fratelli Burgio, 4 stops, FAQ tradotte)

---

## 6. SERVIZI — `/servizi` + `/en/services`

### 6.1 `/servizi` (Italiano) — Categoria 3 placeholder

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Servizi NCC Siracusa — Transfer Privati, Tour, Eventi, Wedding \| Sicily Driver |
| `<meta description>` | Servizi NCC Sicily Driver Siracusa: transfer aeroporto Catania/Comiso/Pozzallo, tour personalizzati Sicilia, navette per eventi e matrimoni. Mercedes Classe V, GLB e Classe E. |

#### Hero
- **Eyebrow** `[NEW]`: *Servizi · NCC e tour*
- **H1** `[POLISH]` (era "I nostri Servizi"): *I servizi.*
- **Sub** `[NEW]`: Quattro modi diversi di portarti dove vuoi. Stessa flotta, stessi driver, stesse 3 sedi.

#### Paragrafo intro `[PRESERVE]` (con polish minore — era nella vecchia pagina identico)
> Offriamo una gamma completa di servizi di noleggio con conducente in Sicilia. Per ogni esigenza, troverai la soluzione più adatta.

#### "Le quattro categorie"
**H2** `[NEW]`: *Le quattro categorie.*

##### Card 1 — Transfer Aeroportuali
- **H3**: *Transfer aeroportuali e ferroviari.*
- **Body** `[POLISH]` (riprende il vecchio): Da e per Catania, Comiso, Palermo, Trapani, porto di Pozzallo e Augusta, stazioni di Siracusa, Catania e Taormina. Mercedes pulita, autista che ti aspetta con il cartello, monitoraggio volo in tempo reale, 60 min di attesa gratuita.
- **Prezzo partenza** `[NEW]`: *Da €80 a tratta*
- **CTA**: *Vedi prezzi tratte →* link `/`

##### Card 2 — Tour Privati
- **H3**: *Tour privati in Sicilia.*
- **Body** `[POLISH]`: Tour del Barocco (Noto, Modica, Ragusa Ibla), Etna Premium con cantine, Isola delle Correnti, Silent Sailing, Dolce Vita Siracusa. 5 itinerari testati + possibilità di costruirne uno su misura per te. Driver bilingue, Mercedes Classe V o GLB Premium, soste fotografiche libere.
- **Prezzo partenza**: *Da €280*
- **CTA**: *Vedi i tour →* link `/tour-sicilia`

##### Card 3 — Eventi e Business
- **H3** `[NEW]`: *Eventi aziendali e business travel.*
- **Body** `[POLISH]`: Servizio di noleggio con conducente per congressi, riunioni, eventi corporate e business travel. Mercedes Classe E o GLB Premium con autista in giacca. Fatturazione aziendale. Flotta extra disponibile per gruppi numerosi.
- **CTA**: *Richiedi preventivo eventi →* link `/contatti`

##### Card 4 — Matrimoni
- **H3** `[NEW]`: *Matrimoni.*
- **Body** `[NEW]`: Auto sposi (Mercedes Classe S, Maybach, Jaguar, Bentley, Rolls Royce, Fiat 500 d'epoca su richiesta), navette per ospiti, transfer dall'aeroporto per invitati internazionali. Tutta la logistica del wedding day, gestita da chi conosce le strade del Val di Noto.
- **CTA**: *Vai a wedding →* link `/wedding`

#### "La flotta" — sezione editoriale dedicata
**H2** `[NEW]`: *La flotta.*

| Modello | Capacità | Bagagli | Per cosa |
|---|---|---|---|
| **Mercedes Classe V** | fino a 7 passeggeri | 7 valigie grandi | Tour gruppo, transfer famiglie, navette wedding |
| **Mercedes GLB Premium** | fino a 4 passeggeri | 3 valigie grandi | Transfer coppia o piccola famiglia, tour business |
| **Mercedes Classe E** | fino a 3 passeggeri | 2 valigie grandi | Transfer business, wedding sposi, eventi corporate |

Sub `[NEW]`: Su richiesta, per wedding e eventi speciali: Mercedes Classe S, Maybach, Jaguar XJ, Bentley Continental, Rolls Royce Phantom, Fiat 500 d'epoca. Vedi la sezione [Wedding](/wedding) per il portfolio auto matrimonio.

#### "Dove operiamo" — mappa aree
**H2** `[NEW]`: *Dove operiamo.*

3 colonne / lista pulita:

**Provincia di Siracusa** `[NEW]`:
- Siracusa (Ortigia, città nuova, Fontane Bianche)
- Noto, Avola, Marzamemi, Pachino
- Augusta, Lentini, Carlentini, Floridia

**Provincia di Catania** `[NEW]`:
- Catania (Aeroporto CTA, centro, Mascalucia)
- Taormina, Giardini Naxos, Acireale
- Caltagirone, Etna Sud (Nicolosi, Pedara, Zafferana)

**Provincia di Ragusa** `[NEW]`:
- Ragusa (Ibla e Superiore)
- Modica, Scicli, Pozzallo, Comiso
- Vittoria, Marina di Ragusa

Sub `[NEW]`: Per destinazioni fuori dalla Sicilia orientale (Palermo, Trapani, Agrigento) chiamaci — gestiamo anche transfer lunghi e tour di più giorni.

#### "Cosa è sempre incluso"
**H2** `[NEW]`: *Cosa è sempre incluso.*

(Stesso elenco di /ncc-catania, applicato globalmente)

#### CTA finale `[NEW]`
**H2**: *Hai una richiesta specifica?*
**Sub**: Costruiamo il servizio intorno a te. Dimmi cosa ti serve, ti rispondiamo entro un'ora.
**CTA 1**: *Richiedi preventivo*
**CTA 2**: *Scrivi su WhatsApp*

### 6.2 `/en/services` (English) — **Categoria 1 + 2 refresh**

2 click + 14 imp pos 54 → title rifacto, body preserve.

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Services — Airport Transfers, Sicily Tours, Events, Weddings \| Sicily Driver |
| `<meta description>` | Sicily Driver Syracuse services: Catania/Comiso/Pozzallo airport transfers, custom Sicily tours, event and wedding shuttles. Mercedes V-Class, GLB and E-Class. |

#### Hero
- **H1** `[POLISH]`: *Our services.*

#### Paragrafo intro `[PRESERVE]` LETTERALE
> We offer a comprehensive range of chauffeur-driven car services across Sicily. Whatever your need, we have a solution.

#### "The four categories"
**H2** `[NEW]`: *The four categories.*

##### Card 1 — Airport Transfers
- **H3** `[POLISH]`: *Airport and railway transfers.*
- **Body** `[POLISH]` (riprende il vecchio):
> Reliable transfers to and from all Sicilian airports — Catania, Comiso, Palermo, Trapani — as well as the ports of Pozzallo and Augusta, and Syracuse, Catania, Taormina railway stations. Clean Mercedes, driver waiting with your name, real-time flight tracking, 60 min free wait at the airport.
- **Starting price** `[NEW]`: *From €80 per trip*
- **CTA**: *See route prices →*

##### Card 2 — Private Tours
- **H3** `[POLISH]`: *Private tours of Sicily.*
- **Body** `[POLISH]` (riprende):
> Customized itineraries to discover the most fascinating destinations: Etna, Taormina, Ragusa, Noto, Ortigia. Five tested experiences (Baroque Tour, Etna Premium, Isola delle Correnti, Silent Sailing, Dolce Vita) plus the option to build a custom tour. English-speaking driver, Mercedes V-Class or GLB Premium, free photo stops.
- **Starting price**: *From €280*
- **CTA**: *See the tours →*

##### Card 3 — Events & Business
- **H3** `[NEW]`: *Corporate events & business travel.*
- **Body** `[POLISH]`:
> Chauffeur-driven service for conferences, meetings, corporate events and business travel. Mercedes E-Class or GLB Premium with driver in jacket. Company invoicing available. Extra fleet for larger groups.
- **CTA**: *Request an event quote →*

##### Card 4 — Weddings
- **H3** `[NEW]`: *Weddings.*
- **Body** `[NEW]`:
> Wedding cars (Mercedes S-Class, Maybach, Jaguar, Bentley, Rolls Royce, vintage Fiat 500 on request), guest shuttles, airport transfers for international guests. The whole wedding day logistics, handled by people who know the Val di Noto roads.
- **CTA**: *Go to weddings →*

#### "The fleet"
(Stessa tabella IT in EN — V-Class, GLB Premium, E-Class)

#### "Where we drive"
**H2** `[NEW]`: *Where we drive.*

**Syracuse province** `[NEW]`:
- Syracuse (Ortigia, modern city, Fontane Bianche)
- Noto, Avola, Marzamemi, Pachino
- Augusta, Lentini, Carlentini, Floridia

**Catania province** `[NEW]`:
- Catania (CTA Airport, downtown, Mascalucia)
- Taormina, Giardini Naxos, Acireale
- Caltagirone, Etna South (Nicolosi, Pedara, Zafferana)

**Ragusa province** `[NEW]`:
- Ragusa (Ibla and Superiore)
- Modica, Scicli, Pozzallo, Comiso
- Vittoria, Marina di Ragusa

Sub: For destinations outside eastern Sicily (Palermo, Trapani, Agrigento) call us — we handle long transfers and multi-day tours too.

#### "What's always included" + final CTA
(Stessa struttura IT in EN)

---

## 7. WEDDING — `/wedding` + `/en/weddings`

⚠️ Decisione: portfolio reale di sposi con liberatorie ATTIVO. Sezione galleria mosaico abilitata.

### 7.1 `/wedding` (Italiano)

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Wedding Car & Navette Matrimonio in Sicilia — Auto d'Epoca Noto, Siracusa, Marzamemi \| Sicily Driver |
| `<meta description>` | Auto sposi e navette ospiti per matrimoni in Sicilia: Mercedes Classe S, Maybach, Jaguar, Bentley, Rolls Royce, Fiat 500 d'epoca. Sedi a Siracusa, Noto, Marzamemi. Wedding portfolio reale. |

#### Hero atmosferica
- **Eyebrow** `[NEW]`: *Wedding · matrimoni in Sicilia*
- **H1** `[NEW]`: *Il tuo matrimonio, da quando arrivi a quando lo dici al mondo.*
- **Sub** `[NEW]`: Auto sposi d'epoca o di lusso, navette per gli ospiti, transfer dall'aeroporto per gli invitati internazionali. Tre sedi tra Siracusa, Noto e Marzamemi — il Val di Noto lo conosciamo curva per curva.
- **CTA primario** `[NEW]`: *Richiedi un sopralluogo*
- **CTA secondario** `[NEW]`: *Vedi le 6 auto d'epoca*

#### Paragrafo intro `[NEW]`
> Un matrimonio in Sicilia ha molta logistica nascosta. Lo sposo arriva alla chiesa, la sposa arriva alla chiesa, gli invitati partono dall'hotel di Siracusa e raggiungono la masseria a Noto, gli zii americani atterrano a Catania la sera prima, la fotografa vuole una sosta a metà strada per le foto fronte mare. Tutta questa logistica la curiamo noi. Fai una telefonata, ci diciamo che giorno è, dove sono la chiesa e la masseria, quanti ospiti e di che età — costruiamo il piano in 48 ore.

#### "Le 6 auto d'epoca" — sezione galleria mosaico
**Eyebrow** `[NEW]`: *La flotta wedding*
**H2** `[NEW]`: *Le 6 auto d'epoca.*

Layout: galleria mosaico 6 card asimmetriche (3+3 alternate desktop, scroll snap mobile).

| Card | Modello `[VERIFICA CON ENZO — modelli e anni esatti da confermare]` | Per chi | Note |
|---|---|---|---|
| 1 | **Fiat 500 Spiaggina** (1968) | Sposi giovani, anniversario, foto Ortigia | Capote apribile, ideale primavera/autunno |
| 2 | **Mercedes 280 SL "Pagoda"** (anni '70) `[VERIFICA]` | Sposi classici | Hard top + capote, foto sui campi della masseria |
| 3 | **Jaguar XJ Sovereign** (anni '80) `[VERIFICA]` | Sposi eleganti british vibe | Auto storica per arrivo chiesa |
| 4 | **Rolls Royce Silver Shadow** (anni '70) `[VERIFICA]` | Cerimonia di grande impatto | Per chi vuole il "wow" all'uscita della chiesa |
| 5 | **Maybach S-Class** (recente) `[VERIFICA]` | Sposi contemporanei | Massimo comfort, percorsi lunghi |
| 6 | **Vespa 50 Special d'epoca** `[VERIFICA — se presente nella flotta`] | Sposi originalissimi | Per il giro fotografico breve, non per la chiesa |

⚠️ **Nota cliente Elevate**: la lista esatta dei 6 modelli + anni va confermata da Enzo. Sostituire i `[VERIFICA]` quando arriva la conferma. Le foto reali delle 6 auto sono nelle responsabilità foto-asset (vedi ASSET-PROMPTS.md sezione 5).

CTA sotto: *Vedi quale è disponibile per la tua data →* (apre form sopra)

#### "Le navette ospiti" — sezione separata
**H2** `[NEW]`: *Le navette ospiti.*

**Body** `[NEW]`:
> Per chi sposa in Sicilia con ospiti che arrivano da fuori, il vero problema è muovere 80 persone tra hotel-chiesa-ricevimento senza che qualcuno si perda. Lavoriamo con 6-15 Mercedes Classe V in flotta extra in alta stagione, coordinate da un capo-coordinatore che resta sul posto tutto il giorno. Tu fai la lista degli orari e dei luoghi, il resto è nostro.

**Servizio incluso** `[NEW]`:
- Capo-coordinatore presente al giorno-evento
- Driver bilingue su ogni mezzo
- WhatsApp di gruppo con la planner / il wedding manager
- Riserva di un mezzo extra "buffer" per imprevisti
- Tariffa fissa giornaliera (no sorprese a fine giornata)

#### "I borghi dove sposarsi" — mini-guide
**Eyebrow** `[NEW]`: *I borghi che conosciamo*
**H2** `[NEW]`: *Dove vediamo sposare di più.*

Grid 6 card minimal:

1. **Noto** — *Cattedrale di San Nicolò, masserie del Val di Noto. La capitale del barocco.*
2. **Marzamemi** — *Piazza Regina Margherita, ricevimenti in tonnara. Atmosfera marinara.*
3. **Ortigia (Siracusa)** — *Duomo, Palazzo Bellomo. Sposarsi tra greco e barocco.*
4. **Ragusa Ibla** — *Cattedrale di San Giorgio. Per cerimonie più intime.*
5. **Modica** — *San Giorgio, masserie iblee. Per chi vuole tradizione e cioccolato.*
6. **Avola / Cassibile** — *Le tenute di campagna sulle colline. Cerimonie civili all'aperto.*

Sub: Sposi altrove in Sicilia? Va bene comunque — copriamo Taormina, Catania, Etna, e per matrimoni di rilievo nazionale anche Palermo e Agrigento.

#### "Galleria portfolio" — sezione galleria reale ATTIVA `[VERIFICA CON ENZO — foto reali e liberatorie sposi]`

**Eyebrow** `[NEW]`: *Portfolio*
**H2** `[NEW]`: *Matrimoni che abbiamo accompagnato.*
**Sub** `[NEW]`: Tutte le foto sono di matrimoni veri di clienti che hanno autorizzato la pubblicazione.

Layout: mosaico di 9-12 foto (4 colonne desktop, 2 colonne mobile). Ogni foto cliccabile apre un lightbox con caption:
- Nome sposi (es. "Marco & Sofia")
- Luogo (es. "Noto, Masseria della Volpe")
- Anno
- Auto utilizzata (es. "Jaguar XJ Sovereign + 2 navette Mercedes V")

⚠️ **Nota di produzione**: questa sezione richiede 9-12 foto reali dal portfolio di Enzo (decisione client confermata Chat 2). Foto da fornire entro lo step "asset". Se Enzo confermerà che ha solo 4-5 foto reali, ridurremo la galleria a 6 slot con layout adattato.

#### "Come funziona" — processo
**Eyebrow** `[NEW]`: *Come funziona*
**H2** `[NEW]`: *Tre passi.*

1. **Telefonata di 20 minuti** — Ci raccontate il vostro matrimonio: data, location, numero ospiti, eventuali extra (auto d'epoca specifica, transfer dall'aeroporto, navette serali, fotografo a bordo).
2. **Sopralluogo o video-call con planner** — Veniamo sul posto (gratuito in provincia di Siracusa e Ragusa) o facciamo video-call. Concordiamo orari, mezzi, percorsi alternativi.
3. **Pianificazione e preventivo** — Vi mandiamo entro 48h il piano di tutta la giornata con orari e costi fissi. Una volta confermato, la coordination è nostra.

#### Form contatto wedding — 7 campi qualifying esteso (sub-purpose D)
**H2** `[NEW]`: *Raccontaci il tuo matrimonio.*

| Campo | Tipo | Placeholder |
|---|---|---|
| Nome | text | Il tuo nome |
| Telefono o email | text | Come ti richiamiamo |
| Data del matrimonio | date | (lascia vuoto se ancora flessibile) |
| Location della cerimonia | text | Chiesa, masseria, ristorante... |
| Numero ospiti previsti | number / range | 20-50 / 50-100 / 100-200 / oltre 200 |
| Cosa ti serve (multi-select) | checkbox | □ Auto sposi · □ Navette ospiti · □ Transfer aeroporto invitati · □ Auto d'epoca specifica · □ Non sono ancora sicuro |
| Note libere | textarea | Anche due righe vanno bene |

CTA: *Manda la richiesta*

Success toast: Richiesta ricevuta. Ti rispondiamo entro 24h con una proposta su misura e ti chiamiamo per concordare il sopralluogo.

#### CTA finale `[NEW]`
**H2**: *Tre sedi nel Val di Noto. Tu dimmi dove ti sposi.*
**CTA**: *Chiama: +39 375 641 3379*

### 7.2 `/en/weddings` (English)

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Wedding Cars & Guest Shuttles in Sicily — Vintage Cars Noto, Syracuse, Marzamemi \| Sicily Driver |
| `<meta description>` | Wedding cars and guest shuttles for Sicily weddings: Mercedes S-Class, Maybach, Jaguar, Bentley, Rolls Royce, vintage Fiat 500. Offices in Syracuse, Noto, Marzamemi. Real wedding portfolio. |

#### Hero
- **Eyebrow** `[NEW]`: *Wedding · Sicily weddings*
- **H1** `[NEW]`: *Your wedding day, from the moment you arrive to the moment you tell the world.*
- **Sub** `[NEW]`: Vintage and luxury wedding cars, guest shuttles, airport transfers for international guests. Three offices across Syracuse, Noto and Marzamemi — we know Val di Noto turn by turn.

#### Paragrafo intro `[NEW]`
> A Sicily wedding has a lot of hidden logistics. The groom arrives at the church, the bride arrives at the church, guests depart the hotel in Syracuse and reach the masseria in Noto, the American uncles land in Catania the night before, the photographer wants a stop halfway for the seaside photos. All this logistics, we handle. One phone call, you tell us the date, where the church and the venue are, how many guests and what ages — we build the plan in 48 hours.

#### "The 6 vintage cars" — gallery mosaic
**Eyebrow** `[NEW]`: *The wedding fleet*
**H2** `[NEW]`: *The 6 vintage cars.*

(Stessa tabella IT in EN)

#### "Guest shuttles" — section
**H2** `[NEW]`: *Guest shuttles.*

**Body** `[NEW]`:
> When you marry in Sicily with guests arriving from abroad, the real problem is moving 80 people between hotel-church-venue without anyone getting lost. We work with 6-15 extra Mercedes V-Class in high-season fleet, coordinated by a head-coordinator on site the whole day. You write the list of times and places, the rest is ours.

**What's included**:
- Head-coordinator on the wedding day
- English-speaking driver on each vehicle
- Group WhatsApp with your wedding planner
- A spare vehicle held for unexpected delays
- Fixed daily rate (no surprises at the end of the day)

#### "Where to celebrate" — towns mini-guide
**H2** `[NEW]`: *Where we see weddings happen most.*

1. **Noto** — *Cathedral of San Nicolò, Val di Noto masserie. The capital of Sicilian Baroque.*
2. **Marzamemi** — *Piazza Regina Margherita, receptions in the old tonnara. Seaside atmosphere.*
3. **Ortigia (Syracuse)** — *Duomo, Palazzo Bellomo. Marrying between Greek and Baroque.*
4. **Ragusa Ibla** — *Cathedral of San Giorgio. For more intimate ceremonies.*
5. **Modica** — *San Giorgio, hilltop masserie. For those who want tradition and chocolate.*
6. **Avola / Cassibile** — *Hillside estates. Outdoor civil ceremonies.*

#### "Portfolio gallery" — section
**Eyebrow** `[NEW]`: *Portfolio*
**H2** `[NEW]`: *Weddings we've accompanied.*
**Sub** `[NEW]`: All photos are from real client weddings, published with the couples' permission.

(Stessa galleria di 9-12 foto della versione IT, caption in EN)

#### "How it works"
**H2** `[NEW]`: *Three steps.*

1. **20-minute call** — You tell us about your wedding: date, location, guest count, any extras (specific vintage car, airport transfers, evening shuttle, photographer on board).
2. **Site visit or video-call with planner** — We come on-site (free in Syracuse and Ragusa provinces) or video-call. We agree on times, vehicles, alternate routes.
3. **Planning and quote** — Within 48 hours we send you the full day plan with times and fixed prices. Once confirmed, the coordination is ours.

#### Wedding form — 7 fields
(Stessa struttura IT in EN — name, phone/email, wedding date, ceremony location, number of guests, what you need multi-select, free notes)

CTA: *Send the request*

Success toast: Request received. We'll reply within 24h with a tailored proposal and call you to schedule the site visit.

#### Final CTA
**H2**: *Three offices across Val di Noto. Tell us where you're getting married.*
**CTA**: *Call: +39 375 641 3379*

---

## 8. CHI SIAMO — `/chi-siamo` + `/en/about`

### 8.1 `/chi-siamo` (Italiano) — Categoria 3 placeholder

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Chi siamo — Sicily Driver Siracusa, NCC di famiglia in Val di Noto |
| `<meta description>` | La storia di Sicily Driver Siracusa: tre sedi (Siracusa, Noto, Marzamemi), Mercedes controllate ogni settimana, driver bilingue, fondatori Vincenzo Izzo e team. |

#### Hero
- **Eyebrow** `[NEW]`: *Chi siamo*
- **H1** `[NEW]`: *Dietro al volante, in Sicilia.*
- **Sub** `[NEW]`: NCC di famiglia con sede a Siracusa, Noto e Marzamemi.

#### "La storia" — paragrafo principale
**H2** `[NEW]`: *La storia.*

**Body** `[NEW]`:
> Sicily Driver Siracusa nasce in famiglia. `[VERIFICA CON ENZO]` per indicare l'anno esatto di fondazione. La prima sede è a Siracusa, in Via della Maestranza, in pieno centro di Ortigia. Negli anni si aggiunge Noto, perché il Val di Noto è dove portiamo più clienti per il Tour del Barocco. Poi Marzamemi, perché il borgo dei pescatori è il nostro punto strategico per la costa sud — Isola delle Correnti, Pachino, Portopalo.
>
> Oggi siamo un'attività che lavora 365 giorni l'anno con una flotta Mercedes controllata ogni settimana, una squadra di driver che parlano inglese vero (non con Google Translate), e una rete di partner — cantine sull'Etna, beach club, gastronomie, agenzie di matrimonio — costruita sulla fiducia di anni di lavoro insieme.

⚠️ **Nota cliente**: il paragrafo è scritto per assorbire l'anno di fondazione quando Enzo lo conferma. Frase di apertura sostituibile: *"Sicily Driver Siracusa nasce nel [anno] in famiglia."*

#### "Tre sedi, una mano sola" — sezione 3 colonne
**Eyebrow** `[NEW]`: *Dove ci trovi*
**H2** `[NEW]`: *Tre sedi, una mano sola.*

**Sede 1 — Siracusa** `[NEW]`:
- Indirizzo: *Via della Maestranza, 28 — Siracusa* `[PRESERVE]`
- Body: La sede storica. Ortigia, centro antico, base operativa per tour Dolce Vita Siracusa, transfer dal porto e dall'aeroporto.

**Sede 2 — Noto** `[NEW]`:
- Indirizzo: *Via Alcide De Gasperi, 15 — Noto* `[PRESERVE]`
- Body: Base operativa per il Tour del Barocco e per i matrimoni nel Val di Noto. Dieci minuti a piedi da Piazza Municipio.

**Sede 3 — Marzamemi** `[NEW]`:
- Indirizzo: *Via Marzamemi, 23 — Marzamemi* `[PRESERVE]`
- Body: Apertura più recente, dedicata alla costa sud. Tour Isola delle Correnti, transfer ferry da Pozzallo, matrimoni a Marzamemi.

#### "Il team" — chi guida
**Eyebrow** `[NEW]`: *Le persone*
**H2** `[NEW]`: *Chi guida.*

**Body** `[NEW]`:
> La squadra è composta da driver siciliani — `[VERIFICA CON ENZO]` per indicare il numero esatto, indicativamente 5-8 — coordinata da Vincenzo Izzo (titolare e fondatore). Tutti i driver parlano italiano e inglese, alcuni anche francese o spagnolo. Conoscono le strade del Val di Noto e della costa ionica come la propria casa.
>
> Quello che facciamo bene: aspettare il volo in ritardo senza protestare, raccontare la storia della cattedrale di Noto senza leggere da Wikipedia, fermarci sulla strada panoramica quando la luce è giusta per le foto, suggerire ristoranti che non sono nelle guide. Quello che non facciamo: ti diciamo dove ti portiamo, ma non ti decidiamo la giornata. La Sicilia che vedi è la tua.

`[VERIFICA CON ENZO]` per aggiungere o meno foto del team. Se le foto sono disponibili → riquadro 4 foto driver (foto reali, no stock). Se non disponibili → la sezione resta solo testuale e si compensa con un'immagine più atmosferica.

#### "La flotta" — recap rapido (link a /servizi)
**H2** `[NEW]`: *La flotta.*

(Mini-tabella riepilogativa, link "Vedi tutti i dettagli →" che porta a `/servizi`)

#### "Cosa pensiamo del servizio" — manifesto editoriale
**Eyebrow** `[NEW]`: *Il nostro approccio*
**H2** `[NEW]`: *Cosa pensiamo del servizio.*

**Body** `[NEW]`:
> Il NCC è un mestiere semplice. Arrivi puntuale, l'auto è pulita, il driver è gentile, la strada è quella più sensata. Quello che fa la differenza è quanto bene sai aspettare. Aspettiamo il volo in ritardo, aspettiamo i bagagli che non arrivano subito, aspettiamo gli sposi che escono dalla chiesa cinque minuti dopo l'orario. Aspettiamo perché abbiamo capito che la Sicilia non si vive di corsa, e portarti dove devi andare significa anche capire che tipo di tempo hai a disposizione.

#### CTA finale
**H2** `[NEW]`: *Vuoi conoscerci di persona?*
**Sub** `[NEW]`: Ci trovi in una delle tre sedi, o ti raggiungiamo dove sei.
**CTA 1**: *Chiama: +39 375 641 3379*
**CTA 2**: *Scrivi su WhatsApp*

### 8.2 `/en/about` (English) — **Categoria 1 PRESERVE FORTE (CTR 4.65%)**

⚠️ Lock body letterale. 3 paragrafi della vecchia pagina sono SEO asset.

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | About Us — Sicily Driver Syracuse, Family-Run NCC in Val di Noto |
| `<meta description>` | The story of Sicily Driver Syracuse: three offices (Syracuse, Noto, Marzamemi), Mercedes serviced weekly, English-speaking drivers, founder Vincenzo Izzo and team. |

#### Hero
- **H1** `[POLISH]` (era "About Us \| Sicily Driver Syracuse" — semplifico): *About us.*
- **Sub** `[NEW]`: A family-run NCC across Syracuse, Noto, and Marzamemi.

#### "Our story" — paragrafi `[PRESERVE]` LETTERALI
**H2** `[POLISH]`: *Our story.*

**Paragrafo 1** `[PRESERVE]` LETTERALE:
> Sicily Driver Syracuse is a young and dynamic company offering luxury NCC (chauffeur-driven car services) throughout Sicily. Founded with a passion for hospitality and a deep love for our island, our mission is to provide unparalleled travel experiences.

**Paragrafo 2** `[PRESERVE]` LETTERALE:
> Operating from our offices in Syracuse, Noto, and Marzamemi, we ensure efficient, personalized service across the most beautiful destinations in Eastern Sicily — including Catania, Taormina, Ragusa, and the stunning Val di Noto.

**Paragrafo 3** `[PRESERVE]` LETTERALE:
> Our team is committed to making every journey unique: from airport transfers to private tours and bespoke experiences, your comfort and satisfaction are at the heart of what we do.

⚠️ Nota: nel sito vecchio EN questi paragrafi parlano di "passion" / "luxury" / "love for our island", che è esattamente il vocabolario che vorremmo evitare nel nuovo copy. **Ma sono PRESERVE forti per via del CTR 4.65%**. Decisione: si tengono LETTERALI, e il polish è limitato a punteggiatura. Le nuove sezioni aggiuntive (Three offices, Team, Manifesto) usano il vocabolario nuovo coerente con la decisione tagline.

#### "Three offices, one hand" — section
**Eyebrow** `[NEW]`: *Where to find us*
**H2** `[NEW]`: *Three offices, one hand.*

(Stessa struttura IT in EN — Syracuse, Noto, Marzamemi addresses + 1-paragraph each)

#### "The team"
**Eyebrow** `[NEW]`: *The people*
**H2** `[NEW]`: *Who drives.*

**Body** `[NEW]`:
> Our team is `[VERIFY WITH ENZO]` Sicilian drivers — about 5-8 — coordinated by Vincenzo Izzo (founder and owner). All drivers speak Italian and English fluently; some also speak French or Spanish. They know the roads of Val di Noto and the Ionian coast as well as their own homes.
>
> What we do well: wait for the delayed flight without complaining, tell you the story of Noto cathedral without reading from Wikipedia, stop on the panoramic road when the light is right for photos, suggest restaurants that aren't in the guides. What we don't do: we tell you where we're taking you, but we don't plan your day for you. The Sicily you see is yours.

#### "The fleet" + "What we think about service" + CTA finale
(Stesse sezioni della versione IT, in traduzione)

---

## 9. CONTATTI — `/contatti` + `/en/contact`

### 9.1 `/contatti` (Italiano) — Categoria 3 placeholder

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Contatti — Sicily Driver Siracusa \| WhatsApp, Telefono, 3 Sedi Val di Noto |
| `<meta description>` | Prenota un NCC a Siracusa: +39 375 641 3379, WhatsApp, info@ncctaxisiracusa.com. Tre sedi (Siracusa, Noto, Marzamemi). Risposta entro 1h. |

#### Hero
- **Eyebrow** `[NEW]`: *Per prima cosa*
- **H1** `[NEW]`: *Parliamone.*
- **Sub** `[NEW]`: Tre modi per scriverci e tre sedi sul territorio. Ti rispondiamo entro un'ora.

#### "I tre modi più veloci" — sezione 3 colonne grandi

##### Colonna 1 — Telefono `[NEW]`
- Icona telefono (minimal)
- **H3**: *Chiamaci*
- Numero grandissimo: **+39 375 641 3379** (`tel:` cliccabile)
- Sotto: *Risposta diretta, 24/7. Per richieste urgenti, transfer immediati, voli in ritardo.*

##### Colonna 2 — WhatsApp `[NEW]`
- Icona WhatsApp
- **H3**: *Scrivici su WhatsApp*
- Bottone grande: **Apri WhatsApp** (`https://wa.me/393756413379`)
- Sotto: *Il modo che preferiamo. Ti rispondiamo entro 1h (e di notte appena svegli).*

##### Colonna 3 — Email `[NEW]`
- Icona busta
- **H3**: *Scrivi una email*
- Email cliccabile: **info@ncctaxisiracusa.com** (`mailto:`)
- Sotto: *Per preventivi più articolati, eventi, matrimoni. Risposta entro 24h.*

#### Form contatto standard — 4 campi
**Eyebrow** `[NEW]`: *Modulo contatto*
**H2** `[NEW]`: *...oppure mandaci una richiesta scritta.*

(Form 4 campi base — vedi sezione 0.4)

#### "Le tre sedi" — sezione mappa + 3 card

**Eyebrow** `[NEW]`: *Dove siamo*
**H2** `[NEW]`: *Le tre sedi.*

Layout: mappa interattiva (Mapbox o leaflet) sopra + 3 card sotto.

##### Sede 1 — Siracusa `[PRESERVE]`
- **Indirizzo**: Via della Maestranza, 28 — 96100 Siracusa (SR)
- **Mappa Google**: link Google Maps
- **Note**: Sede storica. Ortigia centro. Parcheggio Talete a 5 minuti a piedi.

##### Sede 2 — Noto `[PRESERVE]`
- **Indirizzo**: Via Alcide De Gasperi, 15 — 96017 Noto (SR)
- **Mappa Google**: link
- **Note**: Centro di Noto. Dieci minuti a piedi da Piazza Municipio.

##### Sede 3 — Marzamemi `[PRESERVE]`
- **Indirizzo**: Via Marzamemi, 23 — 96018 Pachino (SR)
- **Mappa Google**: link
- **Note**: Borgo di Marzamemi. Vicino alla piazza centrale.

#### Dati fiscali — footer della pagina

**P.IVA**: IT02150600894 `[PRESERVE]`
**Codice univoco / PEC**: izzo.v@pec.it `[PRESERVE]`

#### FAQ contatti `[NEW]`
**H2**: *Domande veloci.*

- **Q1**: *In quanto tempo rispondete su WhatsApp?*
- **A1**: Entro 1h durante il giorno, entro la mattina dopo se scrivi in piena notte. Per voli e transfer urgenti chiama direttamente.

- **Q2**: *Posso prenotare anche per il giorno stesso?*
- **A2**: Sì, se siamo disponibili. Per transfer aeroporto stesso giorno chiama, è più veloce di WhatsApp.

- **Q3**: *Volete una caparra al momento della prenotazione?*
- **A3**: Per i tour standard di solito no, paghi al termine del servizio (carta o contanti). Per wedding e gruppi grandi chiediamo una caparra del 30% confermata via bonifico.

- **Q4**: *Cosa succede se devo annullare?*
- **A4**: Cancellazione gratuita fino a 24h prima del servizio. Da 24h a 4h prima, addebito del 30%. Meno di 4h prima, addebito intero. Per emergenze (volo cancellato, malattia) sempre flessibili.

### 9.2 `/en/contact` (English) — **Categoria 2 refresh metadata**

110 imp pos varia CTR 0% → title da rifare.

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Contact Sicily Driver Syracuse — WhatsApp, Phone, 3 Offices in Val di Noto |
| `<meta description>` | Book a private driver in Syracuse: +39 375 641 3379, WhatsApp, info@ncctaxisiracusa.com. Three offices (Syracuse, Noto, Marzamemi). We reply within 1h. |

#### Hero
- **Eyebrow** `[NEW]`: *First things first*
- **H1** `[NEW]`: *Let's talk.*
- **Sub** `[NEW]`: Three ways to reach us and three offices on the ground. We reply within an hour.

(Stessa struttura della versione IT in EN — 3 colonne phone/whatsapp/email, form 4 campi, mappa + 3 sedi, P.IVA, FAQ 4 domande)

---

## 10. PARTNER — `/partner` + `/en/partners` (URL nuove)

### 10.1 `/partner` (Italiano)

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Partner — Sicily Driver Siracusa \| Pura Vida, Fratelli Burgio, Benanti, Palmeri |
| `<meta description>` | I partner di Sicily Driver Siracusa: Pura Vida Beach Club (Portopalo), Fratelli Burgio (gastronomia), Cantina Benanti (Etna), Cantina Palmeri (Etna). Lavoriamo solo con chi conosciamo. |

#### Hero
- **Eyebrow** `[NEW]`: *Partner*
- **H1** `[NEW]`: *Non lavoriamo con chiunque.*
- **Sub** `[NEW]`: Ogni partner aggiunge qualcosa a quello che vivrai con noi. Quattro nomi, scelti uno per uno.

#### Paragrafo intro `[NEW]`
> Quando ti portiamo all'Isola delle Correnti, ti aspettiamo al Pura Vida Beach Club perché lo conosciamo da anni — sappiamo come lavorano, che pesce servono, com'è la luce al tramonto da lì. Quando saliamo sull'Etna, ci fermiamo a Cantina Benanti o Palmeri perché sono cantine che ci hanno aperto le porte e ci trattano i clienti come trattano i propri. Quando faresci Silent Sailing, il tagliere a bordo è preparato per voi dai Fratelli Burgio. Non è marketing — è la rete di rapporti su cui costruiamo le esperienze.

#### Le 4 schede partner — full editorial

##### Partner 1 — Pura Vida Beach Club
**Foto grande paesaggio.**
- **Nome**: *Pura Vida Beach Club*
- **Dove**: Portopalo di Capo Passero (SR), sull'Isola delle Correnti
- **Cosa è**: *Beach club affacciato sul punto più a sud della Sicilia, dove il Mar Ionio incontra il Mediterraneo.*
- **Cosa fanno per i nostri clienti**: Posti riservati al sole o all'ombra, lunch in spiaggia (pesce del giorno, antipasti siciliani, vino bianco di territorio), sunset experience con prosecco e tagliere. Sanno chi sei prima che arrivi.
- **Dove appare nei nostri tour**: [Tour Isola delle Correnti](/tour/isola-delle-correnti)
- **CTA esterna**: *Vedi Pura Vida →* `[VERIFICA CON ENZO — URL sito o Instagram ufficiale]`

##### Partner 2 — Fratelli Burgio
**Foto grande tagliere o bottega.**
- **Nome**: *Fratelli Burgio*
- **Dove**: Siracusa (Ortigia)
- **Cosa è**: *Gastronomia siciliana storica. Salumi di Nebrodi, formaggi siciliani, pasta artigianale, olio biologico, vini selezionati.*
- **Cosa fanno per i nostri clienti**: Preparano per noi il tagliere che servi a bordo del Silent Sailing — composizione studiata con loro per accompagnare 4 ore di vela, con prodotti selezionati: caciocavallo ragusano, ricotta salata, salumi di Nebrodi, pomodorini di Pachino, capperi di Salina, olio EVO biologico.
- **Dove appare nei nostri tour**: [Silent Sailing](/tour/silent-sailing)
- **CTA esterna**: *Vedi Fratelli Burgio →* `[VERIFICA CON ENZO — URL ufficiale]`

##### Partner 3 — Cantina Benanti
**Foto grande vigneto Etna o cantina.**
- **Nome**: *Cantina Benanti*
- **Dove**: Viagrande, versante sud-est dell'Etna
- **Cosa è**: *Una delle cantine storiche dell'Etna. Vini di Nerello Mascalese e Carricante coltivati su suolo vulcanico.*
- **Cosa fanno per i nostri clienti**: Tour della cantina con sommelier dedicato (in italiano o inglese), degustazione di 4-5 vini, pranzo nel rifugio della tenuta. Per i nostri clienti, prezzo dedicato e tempi rispettati.
- **Dove appare nei nostri tour**: [Etna Premium Escape](/tour/etna-premium)
- **CTA esterna**: *Vedi Cantina Benanti →* `[VERIFICA CON ENZO — URL ufficiale]`

##### Partner 4 — Cantina Palmeri
**Foto grande vigneto o etichette.**
- **Nome**: *Cantina Palmeri*
- **Dove**: Etna sud-orientale
- **Cosa è**: *Cantina di territorio meno conosciuta delle grandi, ma con una storia di famiglia precisa e vini sorprendenti.*
- **Cosa fanno per i nostri clienti**: Visita guidata con il proprietario, degustazione, possibilità di acquisto bottiglie a tariffa cantina. Alternativa a Benanti nei tour Etna su richiesta.
- **Dove appare nei nostri tour**: [Etna Premium Escape](/tour/etna-premium)
- **CTA esterna**: *Vedi Cantina Palmeri →* `[VERIFICA CON ENZO — URL ufficiale]`

#### "Vuoi diventare un partner?" — sezione mini
**Eyebrow** `[NEW]`: *Sei un'attività siciliana?*
**H2** `[NEW]`: *Hai un posto che vogliamo conoscere?*
**Body**: Se gestisci un beach club, una cantina, una masseria, un'esperienza unica in Sicilia orientale che pensi possiamo proporre ai nostri clienti, scrivici. Conosciamo viaggiatori che cercano l'autentico — se quello che fai è autentico, parliamone.
**CTA**: *Scrivici una email →* `mailto:info@ncctaxisiracusa.com`

### 10.2 `/en/partners` (English)

#### Metadata `[NEW]`
| Campo | Valore |
|---|---|
| `<title>` | Partners — Sicily Driver Syracuse \| Pura Vida, Fratelli Burgio, Benanti, Palmeri |
| `<meta description>` | Sicily Driver Syracuse partners: Pura Vida Beach Club (Portopalo), Fratelli Burgio (gastronomy), Cantina Benanti (Etna), Cantina Palmeri (Etna). We only work with people we know. |

#### Hero
- **H1** `[NEW]`: *We don't work with everyone.*
- **Sub** `[NEW]`: Each partner adds something to what you'll experience with us. Four names, chosen one by one.

#### Paragrafo intro `[NEW]`
> When we take you to Isola delle Correnti, we have you at Pura Vida Beach Club because we've known them for years — we know how they work, what fish they serve, what the light is like at sunset from there. When we go up Etna, we stop at Benanti or Palmeri because they've opened their doors to us and treat our clients like their own. When you do Silent Sailing, the platter on board is prepared by Fratelli Burgio. It's not marketing — it's the network of relationships our experiences are built on.

(Stesse 4 schede partner della versione IT, in traduzione EN — Pura Vida / Fratelli Burgio / Benanti / Palmeri)

#### "Want to become a partner?"
**H2**: *Do you have a place we should know?*
**Body** `[NEW]`: If you run a beach club, a winery, a masseria, a unique experience in eastern Sicily we could offer our clients, write to us. We know travelers who look for the real thing — if what you do is real, let's talk.
**CTA**: *Email us →*

---

## 11. RIEPILOGO PLACEHOLDER `[VERIFICA CON ENZO]` — checklist second round

Per chiudere il Brief Pack al second round, raccogliere da Enzo:

### Dati anagrafici
- [ ] **Anno fondazione** Sicily Driver Siracusa (per home + chi siamo)
- [ ] **Numero esatto di driver nel team** (per chi siamo)
- [ ] **Disponibilità driver di lingua francese / spagnola** (per FAQ tour, EN about)

### Listino tratte (per home + ncc-catania + servizi)
- [ ] Aeroporto Catania → Noto: prezzo confermato (proposto €120)
- [ ] Aeroporto Catania → Taormina: prezzo confermato (proposto €120)
- [ ] Aeroporto Catania → Ragusa: prezzo confermato (proposto €160)
- [ ] Aeroporto Catania → Modica: prezzo confermato (proposto €150)
- [ ] Porto Pozzallo → Siracusa: prezzo confermato (proposto €120)
- [ ] Aeroporto Comiso → Noto: prezzo confermato (proposto €100)
- [ ] Aeroporto Comiso → Ragusa: prezzo confermato (proposto €50)
- [ ] Noto → Siracusa: prezzo confermato (proposto €60)
- [ ] Noto → Marzamemi: prezzo confermato (proposto €50)
- [ ] Ragusa → Siracusa: prezzo confermato (proposto €120)
- [ ] Taormina → Giardini Naxos: prezzo confermato (proposto €40)
- [ ] Taormina → Siracusa: prezzo confermato (proposto €180)

### Listino tour (per /tour-sicilia + pagine tour dedicate)
- [ ] Tour del Barocco — fasce bassa/media/alta stagione confermate (proposto €380/€420/€480)
- [ ] Etna Premium Escape — prezzo confermato (proposto €580 con quad + cantine)
- [ ] Isola delle Correnti — prezzo confermato (proposto €420 giornata, €280 mezza giornata)
- [ ] Dolce Vita Siracusa — prezzo confermato (proposto €280 giorno, €320 sunset)
- [ ] Silent Sailing — prezzo confermato (proposto €640 a barca fino a 8 persone)

### Flotta wedding (per /wedding)
- [ ] Conferma dei 6 modelli auto d'epoca + anni esatti (proposti: Fiat 500 Spiaggina, Mercedes 280 SL Pagoda, Jaguar XJ Sovereign, Rolls Royce Silver Shadow, Maybach S-Class, Vespa 50 Special)
- [ ] Eventuale Vespa o terzo modello da sostituire se non in flotta

### Asset visivi (per ASSET-PROMPTS.md)
- [ ] **9-12 foto wedding portfolio reali** con liberatorie sposi
- [ ] **Foto reali delle 6 auto d'epoca** (preferibili a generate AI per autenticità)
- [ ] **Foto team driver** (4-8 ritratti) — opzionale, se Enzo le ha
- [ ] **Foto delle 3 sedi** (esterni) — opzionale, se Enzo le ha

### Recensioni reali (per testimonial home, tour-sicilia, tour-barocco)
- [ ] Selezione di 3 recensioni reali da Google Business Profile per testimonial home IT
- [ ] Selezione di 3 recensioni reali per testimonial home EN
- [ ] Selezione di 3 recensioni tour-specifiche per /tour-barocco
- [ ] Selezione di 3 recensioni tour-specifiche per /tour/dolce-vita-siracusa (tour icona)

### URL ufficiali partner (per /partner + sameAs schema)
- [ ] URL ufficiale Pura Vida Beach Club (sito o Instagram)
- [ ] URL ufficiale Fratelli Burgio
- [ ] URL ufficiale Cantina Benanti
- [ ] URL ufficiale Cantina Palmeri

### URL Google Business Profile (per schema sameAs home — CRITICO)
- [ ] **URL completo del Google Business Profile** (es. `https://maps.app.goo.gl/...` o `https://g.page/...`). Senza questo elemento il sito non eredita autorevolezza dal GBP, che è la principale fonte di lead reali.

---

*Fine COPY.md. Vedi SEO.md per la strategia preservation/keyword/redirect. Vedi ASSET-PROMPTS.md per i prompt fal.ai immagini/video.*
