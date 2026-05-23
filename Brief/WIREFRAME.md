# WIREFRAME.md — Sicily Driver Siracusa

> Ordine sezioni testuale per ogni tipologia di pagina del sito.
> Le pagine specchio IT/EN e le 4 pagine locali condividono lo stesso template.
> Riferimento Concept: **Diario Mediterraneo** (vedi DESIGN.md).
> Riferimento Cluster archetipo: **Fast (A 70% + B 30%) vs Esperienziale (B 70% + C 30%)** (vedi DESIGN.md).

---

## Regole trasversali (tutte le pagine)

- **WhatsApp persistente** in basso a destra su tutte le pagine (preserva comportamento sito attuale)
- **Sticky bottom bar mobile** (visibile da scroll > hero, solo mobile): WhatsApp + telefono `tel:` affiancati. Esiste perché il pubblico estivo è 58% mobile e ha urgenza alta (cerca taxi/transfer adesso, dati GSC alta stagione)
- **Switcher lingua IT/EN** top-right, scambia tra URL gemelle (`/ncc-catania` ↔ `/en/driver-catania`)
- **Tipografia gerarchica**: serif italico SOLO per H1, H2, quote testimonial, quote storytelling tour. Tutto il resto (UI, body, label, prezzi) in sans neutro pulito
- **Niente emoji, niente icone stock generiche** (no Lucide auto/calendario/persona): se serve un'icona, è discreta e custom, oppure non c'è
- **Cluster Fast**: foto statiche di altissima qualità in hero. **No video loop, no scroll-driven**
- **Cluster Esperienziale**: video loop muto ≤10s in hero (encoding secondo Video Bible, sezione 3) + scroll-driven SOLO sulla sezione "itinerario tappa per tappa" delle pagine tour
- **Dual-first**: ogni wireframe testato a 1440px desktop **E** 375px mobile prima del merge. Il pubblico invernale (pianificatore) è desktop-dominante 59%, il pubblico estivo (in-vacanza) è mobile-dominante 58%. Le card color-blocking diventano stack verticale, lo scroll-driven dei tour funziona perfettamente in mobile
- **Performance**: video hero ≤4MB desktop / ≤2MB mobile. Foto WebP con fallback JPG. Lazy load tutte le immagini sotto la piega

### Marcatori preservation in ogni wireframe
- **`[PRESERVE]`** — copy esistente preservato letterale (lock SEO)
- **`[POLISH]`** — copy esistente + polish tipografico, zero semantica
- **`[REFRESH — autorizzazione richiesta]`** — candidato a rewriting con OK cliente
- **`[NEW]`** — copy nuovo scritto in Chat 2

---

## Tipologia 1 — HOME (`/` + `/en`) · Cluster Fast

1. **Hero — "La rotta"**
   - Layout: foto reale grande Sicilia in luce dorata + headline serif italica overlay
   - Contiene: H1 + sub-headline tagline brand (vedi nota sotto) + search bar funzionale (Da → A → data → passeggeri → CTA "Vedi prezzo") + secondario WhatsApp + switcher IT/EN top-right
   - **Tagline brand (decisione cliente Chat 2)**: "Eleganza da VIP, prezzi di mercato" (IT) / "VIP-style elegance at market prices" (EN). GSC dimostra zero traffico SEO su queste keyword → non vincolata. Decisione: preservare letterale (estetizzata col serif italico), modificarla o eliminarla
   - Interazione: foto statica, nessun loop. Search bar reattiva con autocomplete città

2. **Trust strip orizzontale sottile**
   - Layout: tre elementi separati da divider verticali
   - Contiene `[NEW]`: "Da €80 a tratta" / "Servizio 24/7" / "3 sedi: Siracusa · Noto · Marzamemi"
   - Statico

3. **"Sicily Driver in Sicilia" — paragrafo intro**
   - Layout: blocco testuale full-width editorial caldo (serif italico per keyword chiave + sans per il resto)
   - Contiene `[PRESERVE]`: paragrafo intro keyword-dense esistente con tutte le keyword (NCC Sicilia, transfer privati, aeroporti Catania/Comiso/Palermo/Trapani, porti Pozzallo/Augusta, Mercedes Classe V/GLB/E, servizio 24/7, Barocco di Noto/Modica/Ragusa Ibla, Etna, Ortigia, Taormina, matrimoni, eventi aziendali). Polish tipografico ammesso
   - Statico

4. **"Le esperienze" — 5 tour (vetrina principale del sito)**
   - Layout: 5 card asimmetriche editorial magazine in warm color blocking (cream paglia / blu mare / terracotta / sand / verde ulivo desaturato), NO grid 3×2 rigido. Layout magazine con 1 card hero grande + 4 più piccole disposte intorno
   - Contiene `[NEW]`: i 5 tour di Sicily Driver, ordine consigliato (più fotogeniche/iconiche prima):
     1. **Dolce Vita Siracusa** — Fiat 500 Spiaggina d'epoca, Ortigia, 3h (tour icona)
     2. **Silent Sailing Experience** — vela privata, 4h, partner Fratelli Burgio
     3. **Isola delle Correnti Experience** — full day, partner Pura Vida + Marzamemi
     4. **Etna Premium Escape** — quad + vigneti + cantine Benanti/Palmeri
     5. **Barocco Escape** — Noto, Modica, Ragusa Ibla *(URL preservato `/tour-barocco`, Categoria 1)*
   - Ogni card: foto evocativa + nome serif italico + tag breve (durata · max persone · partner) + CTA testuale "Scopri l'esperienza →"
   - Sotto le 5 card, riga finale `[NEW]`: "Cerchi qualcosa di diverso? Costruiamo il tour su misura in tutta la Sicilia." → link `/contatti`
   - Interazione: hover lieve elevation + zoom foto

4-bis. **"Hai bisogno di un transfer subito?" — layer rapido**
   - Layout: banda orizzontale compatta sotto la sezione tour, sfondo distinto (terracotta tenue), tono anti-editoriale
   - Contiene `[NEW]`: 1 riga aeroporti serviti (Catania, Comiso, Palermo) + porto Pozzallo. 2 CTA pari grandezza: telefono `tel:` (più evidente per pubblico estivo mobile) + link a pagina `/transfer` o `/servizi` per dettagli
   - **Esiste perché**: dati GSC alta stagione mostrano che il 58% del pubblico estivo è mobile e cerca "taxi/transfer" non "tour". Senza questa sezione visibile entro 2 scroll, perderemmo i lead estivi mobile

5. **"Le destinazioni" — mosaico editorial**
   - Layout: mosaic magazine asimmetrico di 6 foto reali con label minimal
   - Contiene `[NEW]`: Ortigia / Noto / Marzamemi / Ragusa Ibla / Etna / Taormina. Click → pagina locale o tour corrispondente
   - Interazione: hover lieve zoom + label fade-in

5-bis. **"Partner selezionati" — sezione editoriale**
   - Layout: sezione editoriale sfondo lievemente più scuro (sabbia scuro o terracotta tenue), grid 4 colonne desktop / scroll orizzontale mobile
   - Contiene `[NEW]`: intro breve ("Non lavoriamo con chiunque. Ogni partner aggiunge qualcosa a quello che vivrai.") + 4 partner attuali (Pura Vida Beach Club / Fratelli Burgio / Cantina Benanti / Cantina Palmeri), una card per partner con logo o foto + nome + 1 riga descrittiva
   - CTA "Scopri tutti i partner →" → link a `/partner`
   - Interazione: fade in staggered on scroll

6. **"Quanto costa" — listino tratte**
   - Layout: tabella pulita editorial (cream background, prezzi grandi in sans)
   - Contiene `[PRESERVE]` parziale: prezzi base €80 e €80-€120 mantenuti letterali. `[NEW]` aggiuntivo: 5 tratte più richieste (Catania → Siracusa: da €80 / Catania → Taormina: da €120 / ecc — i prezzi delle tratte oltre Siracusa vanno verificati col cliente)
   - CTA "Preventivo personalizzato →"

7. **"Dietro al volante" — about mini-block**
   - Layout: foto + paragrafo affiancato (asimmetrico)
   - Contiene `[NEW]`: foto del Sig. Izzo (se autorizzata) + 3-4 righe in serif italica + anni attività (da chiedere al cliente) + comuni serviti. Link "Conosci la storia →"
   - Statico

8. **"Da chi è già salito" — testimonial con numerazione editoriale**
   - Layout: 3 colonne con numerazione tipografica grande **01 / 02 / 03** (stile reference Baylie). Mobile swipe
   - Contiene `[NEW]`: 3 quote brevi + nome + città provenienza (es. Berlin / Milano / London). **Cliente conferma**: recensioni Google reali disponibili dal proprio Google Business Profile — ingestire via API o snapshot statico in Chat 2. Selezione di 3-5 quote più rappresentative (mix IT/EN clients)

9. **CTA finale "Per prima cosa"**
   - Layout: sezione full-bleed warm (terracotta o cream profondo)
   - Contiene `[NEW]`: headline serif italico ("Pronto a partire?" placeholder) + 2 CTA pari grandezza: "Chiama ora" `tel:` + "Scrivi su WhatsApp" + email come terza opzione sotto

10. **Footer** — 4 colonne
    - Servizi (link a pagine servizi) / Aree servite (link a 4 pagine locali) / Contatti (telefono, WhatsApp, email) / Sedi fisiche (3 indirizzi)
    - Instagram come unico social attivo (icona + link al profilo)
    - Bottom: P.IVA `02150600894`, copyright dinamico, switcher lingua

---

## Tipologia 2 — PAGINA LOCALE SEO (`/ncc-{città}` + `/en/driver-{città}`) · Cluster Fast

Template parametrico (variabile = città). 4 pagine IT + 4 pagine EN.

1. **Hero locale**
   - Layout: foto reale destinazione specifica + H1 serif italico overlay
   - Contiene `[PRESERVE]`: H1 letterale dal copy esistente (es. "NCC Catania – Transfer Aeroporto e Autista Privato") + search bar pre-compilata sulla città + CTA WhatsApp
   - Statica

2. **Paragrafo intro keyword-dense**
   - Layout: blocco testuale full-width editorial
   - Contiene `[PRESERVE]`: paragrafo intro esistente di ciascuna pagina locale con keyword di tratta. Prezzo "da €80" / "€80-€120" letterale. Polish tipografico ammesso

3. **Trust strip locale**
   - Layout: 3 elementi orizzontali con divider
   - Contiene `[NEW]`: "Da {città} a Siracusa: da €80" + Mercedes Classe V/E/GLB + 24/7

4. **"Da {città} a..." — tratte specifiche**
   - Layout: tabella warm pulita
   - Contiene `[PRESERVE]` parziale (prezzi base) + `[NEW]`: 5-6 tratte specifiche con prezzo partenza. Click → preventivo pre-compilato

5. **"Cosa include il servizio"**
   - Layout: lista editorial 4-5 punti in una colonna
   - Contiene `[NEW]`: seggiolini bambino, monitoraggio voli, attesa gratuita aeroporto, WhatsApp diretto autista, ricevuta fiscale

6. **"La flotta"**
   - Layout: 3 schede orizzontali
   - Contiene `[NEW]`: Mercedes Classe V (7 pax) / Classe E / GLB Premium, foto reale + dati (passeggeri, bagagli)

7. **"Dubbi" — FAQ (accordion)**
   - Layout: accordion expand/collapse
   - Contiene `[PRESERVE]` letterale: 5-7 FAQ specifiche per la città dal copy esistente
   - **Markup**: schema `FAQPage` JSON-LD obbligatorio

8. **"Tour da {città}"**
   - Layout: 2-3 mini-card
   - Contiene `[NEW]`: link a pagine tour pertinenti per la città (es. da Catania → Tour Barocco, Etna Premium, Silent Sailing). Mini foto + nome + CTA testuale. Internal linking SEO

9. **CTA finale + WhatsApp persistente in basso a destra**

10. **Footer** (template comune)

---

## Tipologia 3 — HUB TOUR (`/tour-sicilia` + `/en/sicily-tours`) · Cluster Esperienziale

Prima pagina dove cambia archetipo.

1. **Hero atmosferica con video loop**
   - Layout: video loop muto 10s + headline serif italico ampio overlay
   - Contiene `[NEW]`: video di Mercedes nera che attraversa una strada del Val di Noto al tramonto OPPURE panoramica Sicilia orientale (Ortigia/Noto al tramonto). Headline placeholder "I tour che facciamo / di Sicilia" + CTA scroll-down sottile
   - **No booking immediato in hero** (decisione valutativa)

2. **Paragrafo intro tour Sicilia**
   - Layout: blocco testuale full-width editorial
   - Contiene `[PRESERVE]`: paragrafo intro esistente con keyword "tour Sicilia con autista privato", "tour Sicilia personalizzato"

3. **"Gli itinerari"**
   - Layout: 5 card grandi warm cliccabili in asimmetria editorial magazine (NO grid 3×2 rigido)
   - Contiene `[NEW]`: Barocco / Etna Premium / Isola delle Correnti / Dolce Vita Siracusa / Silent Sailing + 1 mini-card "Tour su misura". Ogni card: foto evocativa + nome serif italico + durata + partner (se applicabile) + prezzo partenza. Click → pagina tour dedicata
   - Interazione: hover lieve zoom + label fade-in

4. **"Una giornata tipo" — storytelling**
   - Layout: racconto narrativo serif italico + 2-3 foto polaroid scattered (riferimento MonksTrip)
   - Contiene `[NEW]`: storia "ti veniamo a prendere alle 8, partiamo verso Noto..." Mood letterario

5. **"Cosa è sempre incluso"**
   - Layout: lista editorial
   - Contiene `[NEW]`: Mercedes, driver bilingue IT/EN, soste fotografiche su richiesta, acqua a bordo, flessibilità oraria

6. **"Cosa dicono dopo i tour" — testimonial numerazione editoriale**
   - Layout: stessa logica della sezione 8 della home (01 / 02 / 03)

7. **CTA finale + form preventivo tour**
   - Layout: sezione warm con form 4 campi
   - Contiene `[NEW]`: tipo tour (dropdown) + data + n. passeggeri + contatto. CTA "Richiedi preventivo"

8. **Footer**

---

## Tipologia 4 — TOUR DEDICATO (`/tour-barocco`, `/tour/etna-premium`, `/tour/isola-delle-correnti`, `/tour/dolce-vita-siracusa`, `/tour/silent-sailing` + EN) · Cluster Esperienziale

Template comune per 5 tour. La pagina più ricca del sito. **Scroll-driven sezione itinerario** (l'unica vera animazione complessa del sito).

1. **Hero cinematica con video loop specifico**
   - Layout: video loop 10s + H1 serif italico overlay
   - Contiene:
     - Per `/tour-barocco` *(Categoria 1 preserve forte)*: video di Mercedes che esce da Noto al tramonto + H1 `[PRESERVE]` letterale ("Tour del Barocco: Noto, Modica & Ragusa in un Giorno")
     - Per `/tour/etna-premium`: video crateri Silvestri all'alba / vigneti etnei + H1 `[NEW]` con keyword research ("Etna Premium Escape" o variante SEO)
     - Per `/tour/isola-delle-correnti`: video onde sull'estremità sud / Pura Vida al tramonto + H1 `[NEW]`
     - Per `/tour/dolce-vita-siracusa`: video Fiat 500 Spiaggina su lungomare Ortigia / golden hour + H1 `[NEW]`
     - Per `/tour/silent-sailing`: video vela in mare aperto al tramonto + H1 `[NEW]`
   - CTA "Vedi itinerario" scroll-down + secondario "Prenota su WhatsApp"

2. **Paragrafo intro tour**
   - Layout: blocco testuale full-width editorial
   - Contiene:
     - Per Tour Barocco: `[PRESERVE]` paragrafo esistente con keyword "Tour Barocco Noto Modica Ragusa", "tour del barocco in giornata", "6-8 ore"
     - Per gli altri 4 tour: `[NEW]` paragrafo keyword-dense scritto in Chat 2 con keyword research dedicata

3. **"Il tour in 4 numeri"**
   - Layout: data block orizzontale sottile con numerazione tipografica grande
   - Contiene `[NEW]`: durata · max persone · lingue del driver · prezzo partenza

3-bis. **"Partner di questo tour"** *(condizionale, solo se applicabile)*
   - Layout: card compatta a margine destro o blocco sotto il data block
   - Contiene `[NEW]`: logo + nome + 1 riga descrittiva per ogni partner del tour
     - Isola delle Correnti → **Pura Vida Beach Club**
     - Silent Sailing → **Fratelli Burgio** (tagliere di prodotti tipici a bordo)
     - Etna Premium → **Cantina Benanti** + **Cantina Palmeri**
     - Barocco / Dolce Vita → nessun partner specifico (sezione assente)
   - Link "Scopri tutti i partner →" → `/partner`

4. **"Tappa per tappa" — sezione scroll-driven (la sezione cuore)**
   - Layout: 4-5 tappe con sticky scroll. Foto grande a un lato + testo storia all'altro (alternato per ogni tappa). Lo scroll cambia la foto e fa avanzare il testo. Mood letterario, copy serif italica
   - Contiene `[NEW]` (con riferimenti culturali sottili senza nominarli):
     - **Barocco**: Noto / Modica (cioccolato di tradizione azteca senza dirlo brand-prima) / Ragusa Ibla (location famosa di una serie italiana senza dire Montalbano) / + Scicli o Marzamemi
     - **Etna Premium**: ritrovo / quad sui crateri Silvestri / pranzo + degustazione in cantina (Benanti o Palmeri) / discesa con panorama
     - **Isola delle Correnti**: ritrovo Siracusa / arrivo Pura Vida Beach Club (relax + lunch) / sunset experience fronte mare / aperitivo passeggiata Marzamemi
     - **Dolce Vita Siracusa**: ritrovo / Ortigia in Fiat 500 Spiaggina (Duomo, fonte Aretusa, lungomare) / soste fotografiche / aperitivo finale fronte mare
     - **Silent Sailing**: imbarco Ortigia / navigazione costa siracusana / soste bagno baie più belle / prosecco + tagliere Fratelli Burgio / rientro
   - **Mappa interattiva mobile-friendly facoltativa** nella parte alta della sezione
   - **Animazione complessa**: l'unica del sito. Fallback semplice: orizzontale snap se scroll-driven dà problemi performance mobile

5. **"Cosa includi e cosa no"**
   - Layout: due colonne editorial in blocchi tipografici (NON bullet list)
   - Contiene `[NEW]`: Incluso (auto, driver, soste, acqua, flessibilità) / Non incluso (pranzi, ingressi siti archeologici, mance facoltative)

6. **"Dubbi" — FAQ tour-specifiche (accordion)**
   - Contiene:
     - Per Tour Barocco: `[PRESERVE]` FAQ esistenti
     - Per nuovi tour: `[NEW]` FAQ scritte in Chat 2
   - Schema `FAQPage` JSON-LD

7. **"Da chi è già salito su questo tour" — testimonial numerazione**
   - Stesso pattern editoriale (01 / 02 / 03)

8. **"Tariffe e disponibilità"**
   - Layout: sezione booking con form strutturato
   - Contiene `[PRESERVE]` parziale prezzi + `[NEW]`: prezzo per auto, fasce stagionali, +/- passeggeri. Form: data, n. passeggeri, partenza, contatto. CTA "Richiedi disponibilità" + WhatsApp

9. **CTA finale**

10. **Footer**

---

## Tipologia 5 — SERVIZI (`/servizi` + `/en/services`) · Cluster Fast

1. **Hero ridotta**
   - Layout: foto reale + titolo + subhead. **No search bar** (pagina approfondimento)
   - Contiene `[NEW]`: headline serif "Tutto quello che facciamo" + 1 riga sub copertura geografica

2. **Paragrafo intro servizi**
   - Layout: blocco testuale full-width
   - Contiene `[PRESERVE]`: paragrafo esistente di `/servizi.php` con keyword "servizi NCC Sicilia", "noleggio con conducente"

3. **"I 4 servizi" — color blocking 4 card grandi**
   - Layout: 4 card warm editorial asimmetriche
   - Contiene `[NEW]`: Transfer / Tour (5 esperienze) / Wedding / Partner. Ogni card: foto + 2-3 punti chiave + CTA "Approfondisci →" alla pagina dedicata (la card Tour linka al hub `/tour-sicilia`)

4. **"La flotta"** — 3 schede veicolo dettagliate
   - Contiene `[NEW]`: per ogni Mercedes (Classe V, GLB Premium, Classe E): foto + capacità passeggeri + capacità bagagli + optional inclusi

5. **"Aree e città servite"**
   - Layout: mappa stilizzata Sicilia + lista cliccabile
   - Contiene `[NEW]`: link a pagine locali + lista comuni serviti

6. **"Listino prezzi indicativo"**
   - Layout: tabella tratte (stesso pattern home)
   - Contiene `[PRESERVE]` prezzi base + `[NEW]` espansione tratte

7. **"Dubbi" — FAQ generali servizio (accordion)**
   - Contiene `[NEW]` (se esistono FAQ in `/servizi.php` → `[PRESERVE]`)

8. **CTA finale**

9. **Footer**

---

## Tipologia 6 — WEDDING (`/wedding` + `/en/weddings`) · Mix Esperienziale + Fast nel booking

Pagina **nuova**. Tutto `[NEW]`. Unico punto dove il sotto-purpose D (Lead qualification) entra come form qualifying esteso.

**Differenziatore principale dichiarato dal cliente**: 6 auto d'epoca tutte revisionate e maniacalmente mantenute. Più servizio navetta ospiti. Più consulenza insider sui borghi consigliati per celebrare in Sicilia orientale.

1. **Hero emotivo**
   - Layout: foto reale ampia + headline serif italico ampio overlay
   - Contiene `[NEW]`: foto di un'auto d'epoca in contesto siciliano autentico (paesaggio, NON sposi abbracciati) + headline placeholder editoriale "Per il giorno che ricorderai" + CTA "Parliamo del giorno"
   - **Nota**: l'auto d'epoca È protagonista visiva, ma non in stile concessionario — ambientata nel paesaggio

2. **"Come ti accompagniamo" — narrative editorial**
   - Layout: racconto serif italico in 3 paragrafi affiancati a piccole foto
   - Contiene `[NEW]`: prima della cerimonia (preparativi, sposi) / durante (cerimonia, foto, trasferimento ricevimento) / dopo (ricevimento, ospiti, rientro)

3. **"Le 6 auto d'epoca" — sezione signature**
   - Layout: gallery editoriale prominente. Grid 2×3 desktop / scroll orizzontale mobile. Una card per auto: foto della macchina + nome modello + anno + 1-2 righe sul carattere dell'auto (es. "Per chi vuole un classico mediterraneo" / "Per un'arrivo cinematografico")
   - Contiene `[NEW]`: 6 schede auto d'epoca (modelli da richiedere a Enzo)
   - Sopra la gallery, intro breve: "6 auto d'epoca, tutte revisionate e maniacalmente mantenute. Ogni dettaglio funziona, ogni cromatura è lucida come il giorno in cui sono uscite dalla fabbrica."
   - **Questa è la sezione cuore della pagina** — visivamente prominente, dargli respiro
   - Animazione: scroll-reveal staggered, hover lieve zoom

4. **"Servizio navetta ospiti" — secondo servizio wedding**
   - Layout: blocco affiancato (foto a destra, testo a sinistra o viceversa)
   - Contiene `[NEW]`: spiegazione del servizio coordinamento navetta per gli invitati (Mercedes Classe V + autista) — logistica completa, no stress per gli sposi. Cosa è incluso: pickup hotel/aeroporti, transfer alle location, rientro fine serata

5. **"I borghi dove sposarsi" — consulenza insider**
   - Layout: sezione editoriale "Dove celebrare". Lista curata di 5-8 borghi/location in Sicilia orientale con foto piccola + 1 riga descrittiva per ognuna
   - Contiene `[NEW]`: borghi consigliati (da definire con Enzo — esempi: Noto, Marzamemi, Scicli, Ragusa Ibla, dimore storiche, masserie del Val di Noto). Tono "non sono affiliazioni commerciali, sono i posti che noi stessi consigliamo perché conosciamo gli sposi che ci sono andati"
   - **Valore aggiunto**: posiziona Sicily Driver come consulente fidato, non solo fornitore auto

6. **"Galleria" — sezione CONDIZIONALE**
   - **Se cliente fornisce portfolio matrimoni reali con liberatorie sposi**: mosaico editorial 6-8 foto
   - **Se cliente non ha portfolio**: sezione rimossa interamente, dargli più spazio alla sezione 3 (auto d'epoca) e alla 5 (borghi)

7. **"Dubbi" — FAQ wedding-specifiche (accordion)**
   - Contiene `[NEW]`: anticipo prenotazione, decorazioni incluse/escluse, distanze coperte, n. auto disponibili contemporaneamente, gestione imprevisti, possibilità auto bianca/colorata, copertura territorio

8. **Form qualifying esteso — sezione conversione (Cluster Fast nella logica del form)**
   - Layout: form ampio ma chiaro
   - Contiene `[NEW]`: data evento (obbligatorio) / location cerimonia (obbligatorio) / location ricevimento / n. auto necessarie (incluso check "solo navetta ospiti") / n. ospiti da trasportare / note speciali / contatto
   - CTA "Ricevi preventivo entro 24h"

9. **CTA WhatsApp diretto come opzione**

10. **Footer**

---

## Tipologia 7 — CHI SIAMO (`/chi-siamo` + `/en/about`) · Cluster Fast (trust statica)

Pagina con copy esistente povero. Candidato `[REFRESH]` con autorizzazione cliente.

1. **Hero ridotta narrativa**
   - Layout: foto + headline serif italico
   - Contiene `[NEW]` o `[REFRESH]`: foto del Sig. Izzo o team davanti auto + headline "La storia dietro Sicily Driver" + 1 riga sub

2. **Racconto in 3-4 paragrafi serif italica calda**
   - Layout: blocchi tipografici full-width
   - Contiene `[REFRESH — autorizzazione richiesta]`: origine (anno fondazione da confermare col cliente), motivazione del fondatore, crescita sedi/flotta, oggi (filosofia, comuni serviti, lingue parlate dai driver)

3. **"In immagini" — galleria storia**
   - Layout: asimmetria editorial 6-8 foto reali
   - Contiene `[NEW]`: foto autista al volante, dettaglio interno Mercedes, team in sede, momenti di lavoro autentici (da richiedere al cliente)

4. **"Quello in cui crediamo" — 3 blocchi narrativi short**
   - Layout: 3 colonne narrative editorial (NON "I nostri valori")
   - Contiene `[NEW]` placeholder: "Da Catania a Marzamemi senza scorciatoie" / "Mercedes controllate ogni settimana" / "Driver che parlano inglese vero, non Google Translate"

5. **"Le 3 sedi"**
   - Layout: cards con indirizzo + mappa mini interattiva
   - Contiene `[NEW]`: Siracusa Via della Maestranza 28 / Noto Via Alcide De Gasperi 15 / Marzamemi Via Marzamemi 23

6. **CTA contatti**

7. **Footer**

---

## Tipologia 8 — CONTATTI (`/contatti` + `/en/contact`) · Cluster Fast (conversion statica)

Pagina più asciutta. Alta conversione, basso storytelling.

1. **Hero ridotta**
   - Layout: headline serif + sub
   - Contiene `[NEW]`: headline "Parliamo" + sub "Risponde Sicily Driver, in italiano o in inglese"

2. **"3 modi per raggiungerci" — 3 card warm pari grandezza**
   - Contiene `[PRESERVE]` dati di contatto:
     - WhatsApp `+39 375 641 3379` (tap-to-WhatsApp)
     - Telefono (tap-to-call)
     - Email `info@ncctaxisiracusa.com`

3. **Form contatto base 4 campi**
   - Contiene `[NEW]`: Nome / Telefono / Tipo richiesta (dropdown: Transfer / Tour / Wedding / Altro) / Messaggio. CTA "Invia"

4. **"Le 3 sedi"** con mappa interattiva
   - Contiene `[PRESERVE]`: indirizzi reali

5. **"Tempi di risposta"** — rassicurazione
   - Contiene `[NEW]`: "Rispondiamo entro 1h, 24/7 su WhatsApp"

6. **Footer**

---

## Tipologia 9 — PARTNER (`/partner` + `/en/partners`) · Cluster Fast (editoriale di prova sociale)

Pagina **nuova**. Tutto `[NEW]`. Posizionamento "non sponsor, ma posti scelti curati con la nostra esperienza diretta". Valore: alimenta la percezione di Sicily Driver come selezionatore esperto, non semplice fornitore di transfer.

1. **Hero ridotta editoriale**
   - Layout: headline serif italico + sub + foto sfondo atmosferica (dettaglio di un partner, es. calice di vino in cantina o tagliere Burgio)
   - Contiene `[NEW]`: headline "Chi scegliamo per te" o variante editoriale + sub "Non sono sponsor. Sono i posti e le persone che noi stessi portiamo nei nostri tour perché crediamo siano i migliori."

2. **Partner — una card per ognuno (layout verticale alternato)**
   - Layout: per ogni partner, blocco full-width con foto/logo sinistra + testo destra (o alternato). Spaziato, editoriale magazine, no grid serrato
   - Contiene `[NEW]`, una card per partner:
     - **Pura Vida Beach Club** — Isola delle Correnti / sunset experience + posto al sole / link al tour `/tour/isola-delle-correnti`
     - **Fratelli Burgio** — gastronomia siciliana selezionata, taglieri serviti a bordo del Silent Sailing / link al tour `/tour/silent-sailing`
     - **Cantina Benanti** — Etna, una delle cantine storiche dell'Etna / link al tour `/tour/etna-premium`
     - **Cantina Palmeri** — Etna, vini di territorio / link al tour `/tour/etna-premium`
     - *(slot vuoto per partner futuri)*
   - Per ognuno: nome serif italico + 2-3 righe sulla scelta (perché loro, cosa li distingue) + "Dove li trovi" (con quale tour) + link esterno se disponibile

3. **CTA finale**
   - Layout: sezione warm
   - Contiene `[NEW]`: "Sei un'attività siciliana e vorresti collaborare? Scrivici." + form contatto base o WhatsApp

4. **Footer**

---

## Sintesi animazioni totali del sito

| Animazione | Dove | Note |
|---|---|---|
| Video loop hero | Hub Tour IT/EN + 5 tour dedicati × 2 lingue = 12 pagine + Wedding × 2 = **14 pagine totali** | Muto, ≤10s, ≤4MB desktop / ≤2MB mobile, encoding H.264 + AV1 (vedi Video Bible §3) |
| Scroll-driven sticky | Sezione "Tappa per tappa" delle 5 pagine tour dedicate × 2 lingue = 10 pagine | L'unica animazione complessa del sito. Fallback orizzontale snap se mobile performance scarsa |
| Sticky CTA mobile (WhatsApp + tel:) | Tutte le pagine, visibile da scroll > hero | Pubblico estivo 58% mobile, urgenza alta |
| Hover lieve zoom foto | Mosaico destinazioni (home) + card servizi + partner | Microeffetto |
| Hover elevation card | 5 card "Le esperienze" + 3 schede flotta + 4 servizi | Microeffetto |
| Accordion expand FAQ | Tutte le pagine con FAQ | Comportamento standard |
| Swipe testimonial mobile | Sezione testimonial 01/02/03 home + hub tour + tour dedicati | Solo mobile |

**Tutto il resto del sito è statico**. Niente animazioni "per il gusto di animare", performance prioritaria.
