# WIREFRAME.md — Sicily Driver Siracusa

> Ordine sezioni testuale per ogni tipologia di pagina del sito.
> Le pagine specchio IT/EN e le 4 pagine locali condividono lo stesso template.
> Riferimento Concept: **Diario Mediterraneo** (vedi DESIGN.md).
> Riferimento Cluster archetipo: **Fast (A 70% + B 30%) vs Esperienziale (B 70% + C 30%)** (vedi DESIGN.md).

---

## Regole trasversali (tutte le pagine)

- **WhatsApp persistente** in basso a destra su tutte le pagine (preserva comportamento sito attuale)
- **Switcher lingua IT/EN** top-right, scambia tra URL gemelle (`/ncc-catania` ↔ `/en/driver-catania`)
- **Tipografia gerarchica**: serif italico SOLO per H1, H2, quote testimonial, quote storytelling tour. Tutto il resto (UI, body, label, prezzi) in sans neutro pulito
- **Niente emoji, niente icone stock generiche** (no Lucide auto/calendario/persona): se serve un'icona, è discreta e custom, oppure non c'è
- **Cluster Fast**: foto statiche di altissima qualità in hero. **No video loop, no scroll-driven**
- **Cluster Esperienziale**: video loop muto ≤10s in hero (encoding secondo Video Bible, sezione 3) + scroll-driven SOLO sulla sezione "itinerario tappa per tappa" delle pagine tour
- **Mobile-first vero**: ogni wireframe va testato prima sul mobile. Le card color-blocking diventano stack verticale, lo scroll-driven dei tour funziona perfettamente in mobile
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
   - Contiene: H1 + sub-headline tagline brand `[PRESERVE]` ("Eleganza da VIP, prezzi di mercato" / EN: "VIP-style elegance at market prices") + search bar funzionale (Da → A → data → passeggeri → CTA "Vedi prezzo") + secondario WhatsApp + switcher IT/EN top-right
   - Interazione: foto statica, nessun loop. Search bar reattiva con autocomplete città

2. **Trust strip orizzontale sottile**
   - Layout: tre elementi separati da divider verticali
   - Contiene `[NEW]`: "Da €80 a tratta" / "Servizio 24/7" / "3 sedi: Siracusa · Noto · Marzamemi"
   - Statico

3. **"Sicily Driver in Sicilia" — paragrafo intro**
   - Layout: blocco testuale full-width editorial caldo (serif italico per keyword chiave + sans per il resto)
   - Contiene `[PRESERVE]`: paragrafo intro keyword-dense esistente con tutte le keyword (NCC Sicilia, transfer privati, aeroporti Catania/Comiso/Palermo/Trapani, porti Pozzallo/Augusta, Mercedes Classe V/GLB/E, servizio 24/7, Barocco di Noto/Modica/Ragusa Ibla, Etna, Ortigia, Taormina, matrimoni, eventi aziendali). Polish tipografico ammesso
   - Statico

4. **"Dove ti portiamo" — servizi (warm color blocking)**
   - Layout: 4 card colorate asimmetriche editorial (cream paglia / blu mare / terracotta / sand), NO grid 2×2 rigido
   - Contiene `[NEW]`: Transfer aeroporti, Tour Barocco "NEW", Tour Etna, Wedding & Eventi. Ogni card: foto reale + nome + 1 riga descrittiva + CTA testuale "Scopri →"
   - Interazione: hover lieve elevation

5. **"Le destinazioni" — mosaico editorial**
   - Layout: mosaic magazine asimmetrico di 6 foto reali con label minimal
   - Contiene `[NEW]`: Ortigia / Noto / Modica / Ragusa Ibla / Etna / Taormina. Click → pagina locale o tour corrispondente
   - Interazione: hover lieve zoom + label fade-in

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
   - Contiene `[NEW]` o `[CONDIZIONALE]`: 3 quote brevi + nome + città provenienza (es. Berlin / Milano / London). **Se cliente non fornisce recensioni utilizzabili**: sezione si trasforma in "Numerazione editoriale dei differenziatori" mantenendo il pattern visivo (es. "01 · Da €80 senza sorprese" / "02 · Mercedes manutenute settimanalmente" / "03 · Driver bilingue IT/EN nativi")

9. **CTA finale "Per prima cosa"**
   - Layout: sezione full-bleed warm (terracotta o cream profondo)
   - Contiene `[NEW]`: headline serif italico ("Pronto a partire?" placeholder) + 2 CTA pari grandezza: "Chiama ora" `tel:` + "Scrivi su WhatsApp" + email come terza opzione sotto

10. **Footer** — 4 colonne
    - Servizi (link a pagine servizi) / Aree servite (link a 4 pagine locali) / Contatti (telefono, WhatsApp, email) / Sedi fisiche (3 indirizzi)
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
   - Contiene `[NEW]`: link a pagine tour pertinenti (es. da Catania → Tour Barocco, Tour Etna, Ortigia-Taormina). Mini foto + nome + CTA testuale. Internal linking SEO

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
   - Layout: 4 card grandi warm cliccabili in asimmetria editorial
   - Contiene `[NEW]`: Barocco / Etna / Ortigia-Taormina / Su misura. Ogni card: foto evocativa + nome + durata + prezzo partenza. Click → pagina tour dedicata

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

## Tipologia 4 — TOUR DEDICATO (`/tour-barocco`, `/tour-etna`, `/tour-ortigia-taormina` + EN) · Cluster Esperienziale

Template comune. La pagina più ricca del sito. **Scroll-driven sezione itinerario** (l'unica vera animazione complessa del sito).

1. **Hero cinematica con video loop specifico**
   - Layout: video loop 10s + H1 serif italico overlay
   - Contiene:
     - Per `/tour-barocco`: video di Mercedes che esce da Noto al tramonto + H1 `[PRESERVE]` ("Tour del Barocco: Noto, Modica & Ragusa in un Giorno")
     - Per `/tour-etna`: video crateri Silvestri all'alba + H1 `[NEW]` con keyword research
     - Per `/tour-ortigia-taormina`: video Ortigia di notte + H1 `[NEW]` con keyword research
   - CTA "Vedi itinerario" scroll-down + secondario "Prenota su WhatsApp"

2. **Paragrafo intro tour**
   - Layout: blocco testuale full-width editorial
   - Contiene:
     - Per Tour Barocco: `[PRESERVE]` paragrafo esistente con keyword "Tour Barocco Noto Modica Ragusa", "tour del barocco in giornata", "6-8 ore"
     - Per nuovi tour: `[NEW]` paragrafo keyword-dense scritto in Chat 2 con keyword research

3. **"Il tour in 4 numeri"**
   - Layout: data block orizzontale sottile con numerazione tipografica grande
   - Contiene `[NEW]`: durata · tappe · lingue del driver · prezzo partenza

4. **"Tappa per tappa" — sezione scroll-driven (la sezione cuore)**
   - Layout: 4-5 tappe con sticky scroll. Foto grande a un lato + testo storia all'altro (alternato per ogni tappa). Lo scroll cambia la foto e fa avanzare il testo. Mood letterario, copy serif italica
   - Contiene `[NEW]` (con riferimenti culturali sottili senza nominarli):
     - Per Barocco: Noto / Modica (cioccolato di tradizione azteca senza dirlo brand-prima) / Ragusa Ibla (location famosa di una serie italiana senza dire Montalbano) / + Scicli o Marzamemi
     - Per Etna: Crateri Silvestri / cantina con degustazione / panorama valli / discesa
     - Per Ortigia-Taormina: Ortigia (Duomo, fonte Aretusa) / pranzo vista mare / Taormina (teatro greco) / belvedere
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
   - Contiene `[NEW]`: Transfer / Tour / Wedding & Eventi / Business & Aziendale. Ogni card: foto + 2-3 punti chiave + CTA "Approfondisci →" alla pagina dedicata (o anchor sezione interna per Business)

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

## Tipologia 6 — WEDDING & EVENTI (`/wedding-eventi` + `/en/weddings`) · Mix Esperienziale + Fast nel booking

Pagina **nuova**. Tutto `[NEW]`. Unico punto dove il sotto-purpose D (Lead qualification) entra come form qualifying esteso.

1. **Hero emotivo**
   - Layout: foto reale ampia + headline serif italico ampio overlay
   - Contiene `[NEW]`: foto wedding-evocativa (auto bianca fuori chiesa barocca al tramonto, oppure interno auto verso location cerimonia) + headline placeholder "Per il giorno che ricorderai" + CTA "Parliamo del giorno"

2. **"Come ti accompagniamo" — narrative editorial**
   - Layout: racconto serif italico in 3 paragrafi affiancati a piccole foto
   - Contiene `[NEW]`: prima della cerimonia / durante / dopo ricevimento

3. **"Cosa è incluso nel servizio wedding"**
   - Layout: lista warm
   - Contiene `[NEW]`: auto decorata (se richiesto), driver in divisa, attesa estesa, transfer ospiti, flessibilità orari

4. **"Galleria" — sezione CONDIZIONALE**
   - **Se cliente fornisce portfolio matrimoni reali**: mosaico editorial 6-8 foto
   - **Se cliente non ha portfolio**: sezione **rimossa interamente** (meglio assente che vuota), sostituita opzionalmente con foto auto + dettaglio scena nuziale evocativo

5. **"Le auto per il giorno"** — 3 schede veicolo con focus wedding
   - Contiene `[NEW]`: Classe V per ospiti / Classe E nera o bianca per sposi / GLB Premium per occasioni

6. **"Dubbi" — FAQ wedding-specifiche (accordion)**
   - Contiene `[NEW]`: anticipo prenotazione, decorazioni incluse/escluse, distanze coperte, n. auto disponibili contemporaneamente, gestione imprevisti

7. **Form qualifying esteso — sezione conversione (Cluster Fast nella logica del form)**
   - Layout: form ampio ma chiaro
   - Contiene `[NEW]`: data evento (obbligatorio) / location cerimonia (obbligatorio) / location ricevimento / n. auto necessarie / n. ospiti da trasportare / note speciali / contatto
   - CTA "Ricevi preventivo entro 24h"

8. **CTA WhatsApp diretto come opzione**

9. **Footer**

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

## Sintesi animazioni totali del sito

| Animazione | Dove | Note |
|---|---|---|
| Video loop hero | 5 pagine tour (Hub Tour IT/EN + 3 tour dedicati × 2 = 8 pagine totali) + Wedding × 2 | Muto, ≤10s, ≤4MB desktop / ≤2MB mobile, encoding H.264 + AV1 (vedi Video Bible §3) |
| Scroll-driven sticky | Sezione "Tappa per tappa" delle 3 pagine tour dedicate × 2 lingue = 6 pagine | L'unica animazione complessa del sito. Fallback orizzontale snap se mobile performance scarsa |
| Hover lieve zoom foto | Mosaico destinazioni (home) + card servizi | Microeffetto |
| Hover elevation card | 4 card "Dove ti portiamo" + 3 schede flotta | Microeffetto |
| Accordion expand FAQ | Tutte le pagine con FAQ | Comportamento standard |
| Swipe testimonial mobile | Sezione testimonial 01/02/03 home + hub tour + tour dedicati | Solo mobile |

**Tutto il resto del sito è statico**. Niente animazioni "per il gusto di animare", performance prioritaria.
