# SITEMAP.md — Sicily Driver Siracusa

## Pattern di progetto
**B — Migration SEO-preserving** su dominio invariato `ncctaxisiracusa.com`.
- 20 URL esistenti **preservate** con redirect 301 (eliminazione estensione `.php`, riorganizzazione EN sotto `/en/`)
- 6 URL **nuove** additive (3 tour mancanti + 1 wedding, in coppie IT/EN)
- **Totale sito nuovo: 26 URL**

## Architettura informativa: doppio cluster

Il sito non ha un archetipo design unico. Le pagine si dividono in due cluster con comportamento, hero e densità diversi.

| Cluster | Logica | Pagine |
|---|---|---|
| **Fast** | Transfer-first, atmosfera sottomessa alla funzione, hero statica con search/CTA visibili, decisione razionale | Home (IT/EN), 4 pagine locali IT `/ncc-*`, 4 pagine locali EN `/en/driver-*`, Servizi IT/EN, Contatti IT/EN, Chi siamo IT/EN |
| **Esperienziale** | Tour-first, atmosfera dominante, hero atmosferica con video loop + scroll-driven itinerario, decisione emotiva | Hub Tour IT/EN, Tour Barocco IT/EN, Tour Etna IT/EN (nuovo), Tour Ortigia-Taormina IT/EN (nuovo), Wedding & Eventi IT/EN (nuovo, sotto-purpose D nel form) |

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

## B) URL NUOVE proposte (6 URL, 3 coppie IT/EN)

Tutte coerenti col Concept Diario Mediterraneo e con archetipo Cluster Esperienziale. **Nessuna sostituisce contenuto esistente** — additive, zero rischio SEO.

| URL nuovo IT | URL nuovo EN | Tipo | Cluster | Priorità | Motivazione |
|---|---|---|---|---|---|
| `/tour-etna` | `/en/etna-tour` | Tour dedicato | Esperienziale | **Alta** | Oggi solo bullet in `/tour-sicilia`. Keyword "Etna tour Sicily" + "Etna wine tour from Taormina" volume internazionale alto (briefing §"Opportunità SEO non coperte") |
| `/tour-ortigia-taormina` | `/en/ortigia-taormina-tour` | Tour dedicato | Esperienziale | Media | Oggi solo bullet. Cattura "Catania cruise port shore excursion" + daily tour segment |
| `/wedding-eventi` | `/en/weddings` | Servizio dedicato | Esperienziale + Fast nel form | **Alta** | Obiettivo dichiarato cliente "catturare segmento wedding/luxury". Keyword "Sicily wedding chauffeur" + "wedding car Sicily" alto valore commerciale. Form qualifying esteso (sotto-purpose D) |

### Verifiche da fare col cliente prima di Chat 2
- **Wedding & Eventi**: il cliente ha portfolio matrimoni reali (foto serviti, recensioni wedding planner)? Se no → la sezione 4 "Galleria" del wireframe è rimossa (sezione condizionale), pagina più asciutta. Se sì → galleria mosaico editorial 6-8 foto
- **Tour Etna e Tour Ortigia-Taormina**: il cliente ha foto reali delle destinazioni in luce coerente col concept? Se no → asset generati AI in Chat 2 con prompt JSON (Nano Banana Pro / FLUX.2)

---

## C) URL NON aggiunte (e perché)

Per trasparenza, opzioni considerate e scartate:

| Pagina considerata | Esito | Perché |
|---|---|---|
| `/business` o `/aziendale` dedicata | **Non aggiunta** | Volume ricerca basso, copy thin. Resta sezione interna in `/servizi` |
| `/flotta` dedicata | **Non aggiunta** | Poco visitata se separata. Le 3 schede veicolo (Classe V / GLB / E) vivono come sezione interna in pagine locali e `/servizi` |
| Micro-landing tipo `/transfer-catania-taormina`, `/transfer-catania-ortigia` | **Non aggiunte** | Keyword fortissime ma rischio "doorway pages" / Google declassa. Integrate come H2 interno in `/ncc-taormina`, `/ncc-noto`, ecc |
| `/blog` o `/news` | **Non aggiunta** | Cliente non aggiorna mai (briefing chiaro). Blog vuoto fa più danno che bene |

---

## D) Sitemap.xml + robots.txt (per fase implementativa Chat 2)

### Priorità nel sitemap.xml
- **1.0**: `/`, `/en`
- **0.9**: tutte le pagine locali (`/ncc-*`, `/en/driver-*`) + tour dedicati (`/tour-barocco`, `/tour-etna`, `/wedding-eventi` e EN)
- **0.8**: `/tour-sicilia`, `/en/sicily-tours`, `/servizi`, `/en/services`, `/tour-ortigia-taormina` e EN
- **0.6**: `/chi-siamo`, `/contatti` e EN

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
- [ ] Esistenza sitemap.xml e robots.txt attuali (per cross-check)
- [ ] Search Console connesso (richiedere accesso al cliente)
- [ ] Backlink profile attuale (Ahrefs / Semrush)
- [ ] Performance Core Web Vitals baseline pre-migration
- [ ] Test 301 funzionanti per tutti i 20 redirect prima del DNS cutover
