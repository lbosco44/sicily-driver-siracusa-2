# SEO.md — Sicily Driver Siracusa
## Pattern B — Migration SEO-Preserving

> Documento di **preservazione + estensione** per la migrazione del dominio `ncctaxisiracusa.com` dal sito PHP attuale alla nuova build Next.js, mantenendo URL puliti e ranking esistenti.
>
> **Regola d'oro Pattern B**: per le 20 URL esistenti il SEO NON si rifà da zero. Si preserva, si polish, si estende con schema markup mancante. Le 6 URL nuove (3 tour + wedding × 2 lingue) sono additive — SEO ex-novo solo su queste.

---

## 0. Premessa operativa

- **Search Console**: non disponibile al momento → tutte le keyword di questo file sono **inferite** da copy attuale + competitive landscape (analisi 8 competitor regionali). Da validare con Search Console reale entro 30 giorni post-go-live (priorità alta).
- **Estrazione meta tag**: completata per 6 pagine fetchate (home IT/EN, tour-barocco IT, tour-sicilia hub IT, servizi EN, chi-siamo EN). Per le altre 14 URL → procedura di estrazione in §8, da eseguire da Claude Code prima del build delle pagine corrispondenti.
- **Cutover DNS**: tutti i 301 redirect devono essere testati funzionanti **prima** del cambio DNS. Mai 302.

---

## 1. Dump meta tag esistenti (per pagina)

### Pagine già estratte

| URL vecchio | Title attuale | Meta description attuale | Note |
|---|---|---|---|
| `/index.php` | `Sicily Driver Siracusa` | (non estratta — title troppo brand-only, non keyword-dense) | `[POLISH]` title in fase migration, descrizione `[NEW]` |
| `/index-en.php` | `Sicily Driver Siracusa` | (idem) | `[POLISH]` title EN, descrizione `[NEW]` |
| `/tour-barocco.php` | `Sicily Driver Siracusa` | (non estratta) | `[POLISH]` title con keyword "Tour Barocco Noto Modica Ragusa", descrizione `[NEW]` |
| `/tour-sicilia.php` | `Tour Sicilia con Autista Privato - Sicily Driver Siracusa` | (estratta) | `[PRESERVE]` title già ottimo |
| `/servizi-en.php` | `Our Services - Sicily Driver Siracusa` | (estratta) | `[PRESERVE]` title |
| `/chi-siamo-en.php` | `Our Story - Sicily Driver Siracusa` | (estratta) | `[PRESERVE]` title (è il copy interno povero, non il meta) |

### Pagine da estrarre (procedura in §8)
- `/chi-siamo.php`, `/servizi.php`, `/contatti.php`, `/contatti-en.php`
- `/ncc-catania.php`, `/ncc-noto.php`, `/ncc-taormina.php`, `/ncc-ragusa.php`
- `/driver-catania.php`, `/driver-noto.php`, `/driver-taormina.php`, `/driver-ragusa.php`
- `/tour-barocco-en.php`, `/tour-sicilia-en.php`

**Vincolo operativo**: prima di lanciare il build di ognuna di queste pagine, Claude Code deve aver compilato la tabella corrispondente di §1 con title + description + H1 attuali. Il rispetto del PRESERVE non è opzionale.

---

## 2. Keyword target (Search Console non disponibile)

### 2.1 Keyword primarie IT (volume alto, intent transazionale, presunto ranking alto)

| Keyword | URL principale | Intent | Note Pattern B |
|---|---|---|---|
| `NCC Siracusa` | `/` | Transazionale | Brand+città, presunto ranking top 5 |
| `NCC Sicilia` | `/` | Transazionale | Più ampio, presunto ranking top 10 |
| `transfer aeroporto Catania Siracusa` | `/ncc-catania` | Transazionale | **Core tratta**, lock SEO |
| `NCC Catania` | `/ncc-catania` | Transazionale | Tratta inversa, lock |
| `NCC Noto` | `/ncc-noto` | Transazionale | Tratta locale, lock |
| `NCC Taormina` | `/ncc-taormina` | Transazionale | Tratta lunga, lock |
| `NCC Ragusa` | `/ncc-ragusa` | Transazionale | Lock |
| `Tour Barocco Noto Modica Ragusa` | `/tour-barocco` | Informativo+transaz. | **Core esperienziale**, lock SEO |
| `tour Sicilia con autista privato` | `/tour-sicilia` | Informativo+transaz. | Lock |

### 2.2 Keyword EN primarie (target turista internazionale)

| Keyword | URL principale | Note |
|---|---|---|
| `private driver Sicily` | `/en` | Volume alto US/UK |
| `Catania airport transfer` | `/en/driver-catania` | **Core internazionale**, lock SEO |
| `Catania to Taormina transfer` | `/en/driver-taormina` | Volume cruise port |
| `Catania to Syracuse transfer` | `/en` + `/en/driver-catania` | Cluster |
| `baroque tour Sicily` | `/en/baroque-tour` | Lock, volume internazionale |
| `Sicily tour with private driver` | `/en/sicily-tours` | Lock |
| `chauffeur service Sicily` | `/en/services` | Lock |
| `Sicily cruise shore excursion Catania` | `/en/ortigia-taormina-tour` (NEW) | **Opportunità nuova** |

### 2.3 Long-tail (presunte 10-15 query/mese ciascuna, da validare)

**IT**
- `quanto costa transfer aeroporto Catania Siracusa`
- `prezzo NCC Catania Taormina`
- `tour Barocco Sicilia in giornata`
- `autista privato matrimonio Sicilia`
- `transfer porto Catania crociere`
- `NCC Marzamemi Noto Siracusa`

**EN**
- `how much is Catania airport transfer to Taormina`
- `Sicily wedding chauffeur cost`
- `Etna wine tour from Taormina private driver`
- `Catania cruise port shore excursion`
- `private day tour Noto Modica Ragusa`

### 2.4 Keyword brand
- `Sicily Driver Siracusa`
- `ncctaxisiracusa`
- `Sicily Driver Syracuse` (EN)

### 2.5 Keyword target NUOVE (additive, no rischio canibalizzazione)

| Keyword | URL nuovo | Strategia |
|---|---|---|
| `tour Etna da Taormina` | `/tour-etna` | Pagina dedicata ex-novo |
| `Etna wine tour private driver` | `/en/etna-tour` | EN twin |
| `tour Ortigia Taormina giornata` | `/tour-ortigia-taormina` | Pagina dedicata |
| `Catania cruise shore excursion Ortigia Taormina` | `/en/ortigia-taormina-tour` | Cattura segmento crociera |
| `autista matrimonio Sicilia Mercedes` | `/wedding-eventi` | Pagina dedicata |
| `Sicily wedding chauffeur service` | `/en/weddings` | EN twin, target alto valore |

---

## 3. Mappa URL → keyword primaria + secondarie

> Tabella di lock: per ogni URL preserve, queste keyword **non possono perdere ranking**. H1, primi 150 caratteri del body, FAQ sono SEO-locked nel copy.

### IT

| URL nuovo | Keyword primaria | Keyword secondarie (entità nel body) |
|---|---|---|
| `/` | NCC Siracusa, NCC Sicilia | Catania, Comiso, Palermo, Trapani, Pozzallo, Augusta, Mercedes Classe V, GLB Premium, Classe E, Barocco, Noto, Modica, Ragusa Ibla, Etna, Ortigia, Taormina, matrimoni, eventi aziendali, 24/7, VIP |
| `/chi-siamo` | Sicily Driver Siracusa | flotta Mercedes, sedi Siracusa Noto Marzamemi, autisti bilingue |
| `/servizi` | servizi NCC Sicilia, noleggio con conducente | Transfer aeroportuali, tour privati, wedding, business |
| `/tour-sicilia` | tour Sicilia con autista privato, tour Sicilia personalizzato | Siracusa, Catania, Noto, Ragusa, Taormina, Etna, 6-8 ore |
| `/tour-barocco` | Tour Barocco Noto Modica Ragusa, tour barocco in giornata | Cattedrale di San Nicolò, chiesa San Pietro, Cattedrale di San Giorgio, Ragusa Ibla, cioccolato Modica, 6-8 ore |
| `/contatti` | contatti NCC Siracusa | telefono, WhatsApp, email, sedi |
| `/ncc-catania` | NCC Catania, transfer aeroporto Catania | Fontanarossa, Siracusa, Taormina, Mercedes Classe V, 24/7 |
| `/ncc-noto` | NCC Noto | Val di Noto, Barocco, transfer privato |
| `/ncc-taormina` | NCC Taormina | transfer Taormina Catania, Isola Bella, teatro greco |
| `/ncc-ragusa` | NCC Ragusa | Ragusa Ibla, Val di Noto, Comiso |

### EN

| URL nuovo | Keyword primaria | Keyword secondarie |
|---|---|---|
| `/en` | Sicily private driver, NCC Sicily | Catania, Comiso, Palermo, Trapani airports, Pozzallo Augusta ports, Mercedes Class V GLB E, Baroque Noto Modica Ragusa Ibla, Etna, Ortigia, Taormina, weddings, corporate, 24/7 |
| `/en/about` | Sicily Driver Syracuse story | fleet, drivers, locations |
| `/en/services` | Sicily NCC services, chauffeur service Sicily | airport transfers, private tours, weddings, business |
| `/en/sicily-tours` | Sicily tour private driver, custom Sicily tour | Baroque, Etna, Ortigia, Taormina, full day |
| `/en/baroque-tour` | baroque tour Sicily, Noto Modica Ragusa day tour | Cathedral San Nicolò, San Pietro church, San Giorgio cathedral, Modica chocolate, 6-8 hours |
| `/en/contact` | Sicily Driver contact | phone, WhatsApp, email |
| `/en/driver-catania` | Catania airport transfer, private driver Catania | Fontanarossa, Syracuse, Taormina transfer, Mercedes V Class |
| `/en/driver-noto` | Noto private driver, Catania to Noto transfer | Val di Noto, Baroque |
| `/en/driver-taormina` | Taormina private driver, Catania to Taormina | Isola Bella, Greek theater |
| `/en/driver-ragusa` | Ragusa private driver, Catania to Ragusa | Ragusa Ibla, Val di Noto |

---

## 4. Pagine "lock SEO" — preservare integralmente

Per queste pagine i seguenti elementi **non si toccano semanticamente** durante la migration. Polish tipografico ammesso (curly quotes, em-dash, doppi spazi), zero rewording.

| Pagina | H1 lock | Body lock (primi N caratteri) | FAQ lock |
|---|---|---|---|
| `/` | `NCC a Siracusa: Transfer Aeroportuali, Tour Privati & Servizio VIP in Sicilia` | Intero paragrafo "Benvenuto da Sicily Driver Siracusa…" (vedi COPY.md §2) | 3 FAQ esistenti (costo transfer, tour barocco giornata, servizio notturno) |
| `/en` | `NCC in Syracuse: Airport Transfers, Private Tours & VIP Service in Sicily` | Intero paragrafo "Welcome to Sicily Driver Syracuse…" (vedi COPY.md §3) | 3 FAQ equivalenti EN |
| `/tour-barocco` | `Tour del Barocco: Noto, Modica & Ragusa in un Giorno` | Intero paragrafo "Vivi l'emozione del Tour del Barocco…" (vedi COPY.md §14) | FAQ esistenti se presenti (estrarre in §8) |
| `/en/baroque-tour` | `Baroque Tour: Noto, Modica & Ragusa in One Day` | Equivalente EN (estrarre in §8) | Idem |
| `/tour-sicilia` | `Tour Sicilia con Autista Privato` (deducibile dal title) | Intero paragrafo intro (estrarre in §8 — visto parzialmente "Partenze da Siracusa, Catania, Noto, Ragusa…") | FAQ esistenti (3-5, viste parzialmente: "Sì, ogni tour è modulabile…", "Da 6 a 9 ore…", "Inclusi senza costi extra…") |
| `/en/sicily-tours` | Equivalente EN | Idem | Idem |
| `/ncc-catania` | Lock H1 con keyword "NCC Catania" + "Transfer Aeroporto" (formato esatto da estrarre in §8) | Intero paragrafo intro keyword-dense (lock) | FAQ esistenti |
| `/ncc-noto`, `/ncc-taormina`, `/ncc-ragusa` | Lock H1 con pattern "NCC {città} – Transfer Aeroporto e Autista Privato" (verificare in §8) | Idem | Idem |
| `/en/driver-catania`, ecc. | Lock H1 con pattern "Private Driver {city} – Airport Transfer & Chauffeur" (verificare in §8) | Idem | Idem |

**Regola operativa**: se durante il build Claude Code propone un H1 diverso da quello attuale per una pagina di questa lista → STOP, riprendere il copy esistente letterale.

---

## 5. Schema markup (JSON-LD)

### 5.1 Schema globale (su ogni pagina, nel `<head>` via layout root)

```json
{
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "@id": "https://ncctaxisiracusa.com/#organization",
  "name": "Sicily Driver Siracusa",
  "alternateName": "Sicily Driver Syracuse",
  "url": "https://ncctaxisiracusa.com/",
  "logo": "https://ncctaxisiracusa.com/driver.png",
  "image": "https://ncctaxisiracusa.com/og-default.jpg",
  "telephone": "+39 375 641 3379",
  "email": "info@ncctaxisiracusa.com",
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "openingHours": "Mo-Su 00:00-23:59",
  "address": [
    {"@type": "PostalAddress", "streetAddress": "Via della Maestranza 28", "addressLocality": "Siracusa", "addressRegion": "SR", "postalCode": "96100", "addressCountry": "IT"},
    {"@type": "PostalAddress", "streetAddress": "Via Alcide De Gasperi 15", "addressLocality": "Noto", "addressRegion": "SR", "postalCode": "96017", "addressCountry": "IT"},
    {"@type": "PostalAddress", "streetAddress": "Via Marzamemi 23", "addressLocality": "Marzamemi", "addressRegion": "SR", "postalCode": "96018", "addressCountry": "IT"}
  ],
  "areaServed": [
    {"@type": "City", "name": "Siracusa"},
    {"@type": "City", "name": "Catania"},
    {"@type": "City", "name": "Noto"},
    {"@type": "City", "name": "Taormina"},
    {"@type": "City", "name": "Ragusa"},
    {"@type": "City", "name": "Modica"},
    {"@type": "City", "name": "Avola"},
    {"@type": "City", "name": "Marzamemi"},
    {"@type": "AdministrativeArea", "name": "Provincia di Siracusa"},
    {"@type": "AdministrativeArea", "name": "Val di Noto"}
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {"@type": "GeoCoordinates", "latitude": 37.0755, "longitude": 15.2866},
    "geoRadius": "200000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servizi NCC Sicily Driver",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Transfer aeroportuali"}, "priceCurrency": "EUR", "price": "80"},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Tour privati Sicilia"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Wedding & Eventi"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Business & Aziendale"}}
    ]
  },
  "sameAs": []
}
```

**Note**:
- `aggregateRating` deliberatamente **omesso** finché cliente non fornisce recensioni reali verificate (Google Business Profile o altro). Mai inventare.
- `sameAs` da popolare con URL social del cliente (Instagram, Facebook) — chiedere al cliente prima del go-live.

### 5.2 Schema per pagine Tour (su `/tour-barocco`, `/tour-etna`, `/tour-ortigia-taormina` e EN)

Esempio per `/tour-barocco`:

```json
{
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Tour del Barocco: Noto, Modica & Ragusa in un Giorno",
  "description": "Tour privato in giornata tra le tre città simbolo del Barocco siciliano: Noto, Modica, Ragusa Ibla. Mercedes Classe V con autista bilingue, 6-8 ore, partenza da Siracusa.",
  "image": "https://ncctaxisiracusa.com/images/tour-barocco-hero.jpg",
  "provider": {"@id": "https://ncctaxisiracusa.com/#organization"},
  "touristType": ["Couples", "Families", "Cultural travelers"],
  "itinerary": [
    {"@type": "Place", "name": "Noto", "description": "Cattedrale di San Nicolò"},
    {"@type": "Place", "name": "Modica", "description": "Chiesa di San Pietro, cioccolato artigianale"},
    {"@type": "Place", "name": "Ragusa Ibla", "description": "Cattedrale di San Giorgio"}
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "price": "{prezzo_partenza_tour_barocco}",
    "availability": "https://schema.org/InStock",
    "url": "https://ncctaxisiracusa.com/tour-barocco"
  }
}
```

**Placeholder `{prezzo_partenza_tour_barocco}`** → da confermare col cliente prima del go-live. Default suggerito: `350` (per auto 4 pax, 6 ore).

Schema analoghi su `/tour-etna` (itinerary: Crateri Silvestri, cantina degustazione, panorama valli) e `/tour-ortigia-taormina` (itinerary: Ortigia Duomo Fonte Aretusa, Taormina teatro greco).

### 5.3 Schema FAQPage (su ogni pagina con FAQ accordion)

Esempio per home `/`:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto costa un transfer aeroporto Catania?",
      "acceptedAnswer": {"@type": "Answer", "text": "I prezzi partono da €80 a tratta per il servizio NCC con Mercedes Classe V, variabili in base alla tratta e al numero di passeggeri."}
    },
    {
      "@type": "Question",
      "name": "Posso prenotare un tour Barocco in giornata?",
      "acceptedAnswer": {"@type": "Answer", "text": "Sì: offriamo tour di 4–8 ore con guida opzionale; l'itinerario è personalizzabile e include Noto, Modica, Ragusa Ibla."}
    },
    {
      "@type": "Question",
      "name": "Avete un servizio taxi privato notturno?",
      "acceptedAnswer": {"@type": "Answer", "text": "Certamente: il nostro NCC è attivo 24/7, perfetto anche per transfer serali verso ristoranti, eventi o aeroporti."}
    }
  ]
}
```

**Da generare lo stesso pattern** per ogni pagina con FAQ: home, hub tour, 4 pagine locali IT, 4 pagine locali EN, 3 tour dedicati × 2 lingue, wedding × 2 lingue.

### 5.4 Schema BreadcrumbList (su pagine interne)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://ncctaxisiracusa.com/"},
    {"@type": "ListItem", "position": 2, "name": "Tour Sicilia", "item": "https://ncctaxisiracusa.com/tour-sicilia"},
    {"@type": "ListItem", "position": 3, "name": "Tour del Barocco", "item": "https://ncctaxisiracusa.com/tour-barocco"}
  ]
}
```

---

## 6. Redirect plan 301 (20 URL .php → URL puliti)

**Tutti permanenti (HTTP 301). Mai 302.**

```
# Italiano
/index.php              → /                           301
/chi-siamo.php          → /chi-siamo                  301
/servizi.php            → /servizi                    301
/tour-sicilia.php       → /tour-sicilia               301
/tour-barocco.php       → /tour-barocco               301
/contatti.php           → /contatti                   301
/ncc-catania.php        → /ncc-catania                301
/ncc-noto.php           → /ncc-noto                   301
/ncc-taormina.php       → /ncc-taormina               301
/ncc-ragusa.php         → /ncc-ragusa                 301

# Inglese (riorganizzato sotto /en/)
/index-en.php           → /en                         301
/chi-siamo-en.php       → /en/about                   301
/servizi-en.php         → /en/services                301
/tour-sicilia-en.php    → /en/sicily-tours            301
/tour-barocco-en.php    → /en/baroque-tour            301
/contatti-en.php        → /en/contact                 301
/driver-catania.php     → /en/driver-catania          301
/driver-noto.php        → /en/driver-noto             301
/driver-taormina.php    → /en/driver-taormina         301
/driver-ragusa.php      → /en/driver-ragusa           301

# Fix bug noto (linkato dalla home EN, oggi 404)
/contact-en.php         → /en/contact                 301
```

**Implementazione Next.js**: file `next.config.js` array `redirects()` o file `middleware.ts`. Tutti i 21 redirect (20 + 1 fix bug) devono restituire HTTP 301 verificabile con `curl -I` o lighthouse.

**Vincolo go-live**: ogni redirect testato individualmente prima del cutover DNS. Lista di verifica in §10.

---

## 7. Sitemap.xml + robots.txt + hreflang

### 7.1 `sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <!-- Home -->
  <url>
    <loc>https://ncctaxisiracusa.com/</loc>
    <xhtml:link rel="alternate" hreflang="it" href="https://ncctaxisiracusa.com/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://ncctaxisiracusa.com/en"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://ncctaxisiracusa.com/"/>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ncctaxisiracusa.com/en</loc>
    <xhtml:link rel="alternate" hreflang="it" href="https://ncctaxisiracusa.com/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://ncctaxisiracusa.com/en"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://ncctaxisiracusa.com/"/>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Pagine locali IT (priority 0.9) -->
  <url><loc>https://ncctaxisiracusa.com/ncc-catania</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://ncctaxisiracusa.com/ncc-noto</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://ncctaxisiracusa.com/ncc-taormina</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://ncctaxisiracusa.com/ncc-ragusa</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>

  <!-- Pagine locali EN (priority 0.9) -->
  <url><loc>https://ncctaxisiracusa.com/en/driver-catania</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://ncctaxisiracusa.com/en/driver-noto</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://ncctaxisiracusa.com/en/driver-taormina</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://ncctaxisiracusa.com/en/driver-ragusa</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>

  <!-- Tour dedicati (priority 0.9, alta) -->
  <url><loc>https://ncctaxisiracusa.com/tour-barocco</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://ncctaxisiracusa.com/tour-etna</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://ncctaxisiracusa.com/tour-ortigia-taormina</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://ncctaxisiracusa.com/wedding-eventi</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://ncctaxisiracusa.com/en/baroque-tour</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://ncctaxisiracusa.com/en/etna-tour</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://ncctaxisiracusa.com/en/ortigia-taormina-tour</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://ncctaxisiracusa.com/en/weddings</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>

  <!-- Hub (priority 0.8) -->
  <url><loc>https://ncctaxisiracusa.com/tour-sicilia</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://ncctaxisiracusa.com/servizi</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://ncctaxisiracusa.com/en/sicily-tours</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://ncctaxisiracusa.com/en/services</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>

  <!-- Trust/conversion (priority 0.6) -->
  <url><loc>https://ncctaxisiracusa.com/chi-siamo</loc><changefreq>yearly</changefreq><priority>0.6</priority></url>
  <url><loc>https://ncctaxisiracusa.com/contatti</loc><changefreq>yearly</changefreq><priority>0.6</priority></url>
  <url><loc>https://ncctaxisiracusa.com/en/about</loc><changefreq>yearly</changefreq><priority>0.6</priority></url>
  <url><loc>https://ncctaxisiracusa.com/en/contact</loc><changefreq>yearly</changefreq><priority>0.6</priority></url>

</urlset>
```

**Nota**: per concisione gli `xhtml:link hreflang` sono mostrati solo sulla home. **Vanno applicati su tutte le 13 coppie IT/EN**: ogni URL deve dichiarare se stesso + il gemello + x-default → IT.

### 7.2 `robots.txt`

```
User-agent: *
Allow: /

# Disallow tecnici
Disallow: /api/
Disallow: /_next/
Disallow: /.well-known/

Sitemap: https://ncctaxisiracusa.com/sitemap.xml
```

### 7.3 hreflang — pattern obbligatorio in ogni `<head>`

Esempio per `/tour-barocco`:

```html
<link rel="alternate" hreflang="it" href="https://ncctaxisiracusa.com/tour-barocco" />
<link rel="alternate" hreflang="en" href="https://ncctaxisiracusa.com/en/baroque-tour" />
<link rel="alternate" hreflang="x-default" href="https://ncctaxisiracusa.com/tour-barocco" />
```

Coppie complete IT ↔ EN per hreflang:

| IT | EN |
|---|---|
| `/` | `/en` |
| `/chi-siamo` | `/en/about` |
| `/servizi` | `/en/services` |
| `/contatti` | `/en/contact` |
| `/tour-sicilia` | `/en/sicily-tours` |
| `/tour-barocco` | `/en/baroque-tour` |
| `/tour-etna` | `/en/etna-tour` |
| `/tour-ortigia-taormina` | `/en/ortigia-taormina-tour` |
| `/wedding-eventi` | `/en/weddings` |
| `/ncc-catania` | `/en/driver-catania` |
| `/ncc-noto` | `/en/driver-noto` |
| `/ncc-taormina` | `/en/driver-taormina` |
| `/ncc-ragusa` | `/en/driver-ragusa` |

---

## 8. Procedura estrazione meta/copy per pagine non estratte

Prima di lanciare il build di una pagina della lista qui sotto, Claude Code deve estrarre i seguenti elementi dal sito attuale e popolare COPY.md + §1 di questo file.

### Pagine da estrarre (14)

```
/chi-siamo.php
/servizi.php
/contatti.php
/contatti-en.php
/ncc-catania.php
/ncc-noto.php
/ncc-taormina.php
/ncc-ragusa.php
/driver-catania.php
/driver-noto.php
/driver-taormina.php
/driver-ragusa.php
/tour-barocco-en.php
/tour-sicilia-en.php
```

### Cosa estrarre (per ogni pagina)

1. `<title>` esatto attuale
2. `<meta name="description">` esatto attuale (se presente)
3. `<meta name="keywords">` se presente
4. `<h1>` esatto attuale
5. Primo paragrafo body (~150-300 caratteri intorno alla H1)
6. Lista H2/H3 nell'ordine in cui appaiono
7. Tutte le FAQ presenti (domanda + risposta letterali)
8. Prezzi esatti se citati ("da €80", "€80-€120", ecc.)
9. Eventuali URL interni nel body (per mappa internal linking)
10. Eventuali immagini con `alt` attribute (mantenere alt SEO-locked)

### Modalità di estrazione

- **Tentativo 1**: `web_fetch` diretto dall'URL `.php` corrente
- **Tentativo 2**: se 403/blocco, fallback su Wayback Machine `https://web.archive.org/web/*/ncctaxisiracusa.com/{url}.php`
- **Tentativo 3**: chiedere all'utente di copia-incollare il sorgente HTML della pagina

**Output di ogni estrazione**: aggiunta riga in §1 di questo file + sezione corrispondente in COPY.md con marcatori `[PRESERVE]` / `[POLISH]`.

---

## 9. Performance baseline (Core Web Vitals pre-go-live)

Misurare con PageSpeed Insights + WebPageTest **prima** del cutover DNS sulle seguenti pagine del sito attuale (per avere il "before"):

- `/index.php` (mobile + desktop)
- `/tour-barocco.php` (mobile + desktop)
- `/ncc-catania.php` (mobile + desktop)

Salvare i numeri (LCP, FID/INP, CLS, TBT) come baseline. Il sito nuovo Next.js deve **migliorare ogni metrica** (target: tutte verdi mobile + desktop, LCP < 2.5s, INP < 200ms, CLS < 0.1). Specialmente sulle pagine del Cluster Esperienziale con video loop hero, attenzione a non peggiorare LCP a causa del video — usare poster image, `preload="metadata"`, encoding aggressivo (vedi Video Bible §3).

---

## 10. Verifiche cliente (gating cutover DNS)

Checklist obbligatoria prima dello switch del DNS:

### Lato cliente — informazioni da raccogliere
- [ ] Accesso Google Search Console al sito attuale (read-only basta) → per validare keyword ranking reale post-launch
- [ ] Accesso Google Business Profile (se esiste) → per sincronizzare NAP + foto + recensioni reali
- [ ] Lista esatta dei 3 indirizzi sedi (Siracusa, Noto, Marzamemi) con CAP corretti → schema markup
- [ ] Anno fondazione attività + storia breve fondatore → chi-siamo REFRESH
- [ ] Lista comuni serviti definitiva (per estendere `areaServed`)
- [ ] URL social profili (Facebook, Instagram, eventuali altri) → schema `sameAs`
- [ ] Eventuali recensioni reali raccolte (anche off-Google: TripAdvisor, GetYourGuide) → da decidere se aggiungere `aggregateRating` con fonte verificabile
- [ ] Portfolio matrimoni reali (foto serviti, eventuali quote wedding planner) → sblocca sezione galleria di `/wedding-eventi`
- [ ] Prezzi tratte oltre i 2 base (Catania→Siracusa €80, Catania→Taormina €120): listino esteso per home + pagine locali

### Lato tecnico — verifiche pre-cutover
- [ ] Tutti i 21 redirect 301 testati con `curl -I` su staging Vercel
- [ ] Sitemap.xml accessibile su staging + submit pronto su Search Console
- [ ] robots.txt OK su staging
- [ ] hreflang validati con Search Console tool "Sitemaps" o ahrefs site audit
- [ ] Schema markup validato con Google Rich Results Test su tutte le 26 pagine
- [ ] Performance CWV staging tutte verdi mobile + desktop
- [ ] Test 404 custom + 500 page
- [ ] Test form contatti + form wedding qualifying (deliverability email)
- [ ] WhatsApp link `wa.me/393756413379` testato funzionante su mobile iOS + Android
- [ ] tel:`+393756413379` testato tap-to-call su mobile
- [ ] Switcher lingua IT↔EN testato su ogni coppia (13 coppie)

### Post-cutover (entro 7 giorni)
- [ ] Submit nuova sitemap su Search Console
- [ ] Monitor in Search Console: drop ranking > 30% su qualsiasi keyword preserve → rollback parziale (controllare se H1 o body è cambiato semanticamente)
- [ ] Verifica indicizzazione delle 6 nuove URL (Etna, Ortigia-Taormina, Wedding × IT/EN)
- [ ] Google Business Profile aggiornato con nuovo dominio canonico (se applicabile)

---

*SEO.md v1 — Pattern B SEO-Preserving. Aggiornare §1 mano a mano che le pagine `.php` mancanti vengono estratte (§8).*
