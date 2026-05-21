# SEO.md — Sicily Driver Siracusa
## Pattern B — Migration SEO-Preserving

> Documento di **preservazione + estensione** per la migrazione del dominio `ncctaxisiracusa.com` dal sito PHP attuale alla nuova build Next.js, mantenendo URL puliti e ranking esistenti.
>
> **Regola d'oro Pattern B**: per le 20 URL esistenti il SEO NON si rifà da zero. Si preserva, si polish, si estende con schema markup mancante. Le 6 URL nuove (3 tour + wedding × 2 lingue) sono additive — SEO ex-novo solo su queste.

---

## 0. Premessa operativa

- **Search Console**: non disponibile al momento → tutte le keyword di questo file sono **inferite** da copy attuale + competitive landscape (analisi 8 competitor regionali). Da validare con Search Console reale entro 30 giorni post-go-live (priorità alta).
- **Estrazione meta tag**: completata per 4 pagine fetchate (home IT/EN, tour-barocco IT, tour-sicilia hub IT, servizi EN, chi-siamo EN). Per le altre 14 URL → procedura di estrazione in §8, da eseguire da Claude Code prima del build delle pagine corrispondenti.
- **Cutover DNS**: tutti i 301 redirect devono essere testati funzionanti **prima** del cambio DNS. Mai 302.

---

## 1. Dump meta tag esistenti (per pagina)

### Pagine già estratte

| URL vecchio | Title attuale | Meta description attuale | Note |
|---|---|---|---|
| `/index.php` | `Sicily Driver Siracusa` | (non estratta — title troppo brand-only, non keyword-dense) | `[POLISH]` title in fase migration, descrizione `[NEW]` |
| `/index-en.php` | `Sicily Driver Siracusa` | (idem) | `[POLISH]` title EN, descrizione `[NEW]` |
| `/tour-barocco.php` | `Sicily Driver Siracusa` | (non estratta) | `[POLISH]` title con keyword "Tour Barocco Noto Modica Ragusa", descrizione `[NEW]` |
| `/tour-sicilia.php` | `Tour Sicilia con Autista Privato - Sicily Driver Siracusa` | (estratta in §3) | `[PRESERVE]` title già ottimo |
| `/servizi-en.php` | `Our Services - Sicily Driver Siracusa` | (estratta in §3) | `[PRESERVE]` title |
| `/chi-siamo-en.php` | `Our Story - Sicily Driver Siracusa` | (estratta in §3) | `[PRESERVE]` title (è il copy interno povero, non il meta) |

### Pagine da estrarre (procedura in §8)
- `/chi-siamo.php`, `/servizi.php`, `/contatti.php`, `/contatti-en.php`
- `/ncc-catania.php`, `/ncc-noto.php`, `/ncc-taormina.php`, `/ncc-ragusa.php`
- `/driver-catania.php`, `/driver-noto.php`, `/driver-taormina.php`, `/driver-ragusa.php`
- `/tour-barocco-en.php`, `/tour-sicilia-en.php`

**Vincolo operativo**: prima di lanciare il build di ognuna di queste pagine, Claude Code deve aver compilato la tabella corrispondente di §1 con title + description + H1 attuali. Il rispetto del PRESERVE non è opzionale.

---

## 2. Keyword target (Search Console non disponibile)

### 2.1 Keyword primarie (volume alto, intent transazionale, presunto ranking alto)

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

#### IT
- `quanto costa transfer aeroporto Catania Siracusa`
- `prezzo NCC Catania Taormina`
- `tour Barocco Sicilia in giornata`
- `autista privato matrimonio Sicilia`
- `transfer porto Catania crociere`
- `NCC Marzamemi Noto Siracusa`

#### EN
- `how much is Catania airport transfer to Taormina`
- `Sicily wedding chauffeur cost`
- `Etna wine tour from Taormina private driver`
- `Catania cruise port shore excursion`
- `private day tour Noto Modica Ragusa`

### 2.4 Keyword brand (3-5)
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
    {
      "@type": "PostalAddress",
      "streetAddress": "Via della Maestranza 28",
      "addressLocality": "Siracusa",
      "addressRegion": "SR",
      "postalCode": "96100",
      "addressCountry": "IT"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Via Alcide De Gasperi 15",
      "addressLocality": "Noto",
      "addressRegion": "SR",
      "postalCode": "96017",
      "addressCountry": "IT"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Via Marzamemi 23",
      "addressLocality": "Marzamemi",
      "addressRegion": "SR",
      "postalCode": "96018",
      "addressCountry": "IT"
    }
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
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 37.0755,
      "longitude": 15.2866
    },
    "geoRadius": "200000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servizi NCC Sicily Driver",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Transfer aeroportuali"}, "priceCurrency": "EUR", "price": "80", "priceSpecification": {"@type": "PriceSpecification", "minPrice": "80", "priceCurrency": "EUR"}},
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
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I prezzi partono da €80 a tratta per il servizio NCC con Mercedes Classe V, variabili in base alla tratta e al numero di passeggeri."
      }
    },
    {
      "@type": "Question",
      "name": "Posso prenotare un tour Barocco in giornata?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì: offriamo tour di 4–8 ore con guida opzionale; l'itinerario è personalizzabile e include Noto, Modica, Ragusa Ibla."
      }
    },
    {
      "@type": "Question",
      "name": "Avete un servizio taxi privato notturno?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Certamente: il nostro NCC è attivo 24/7, perfetto anche per transfer serali verso ristoranti, eventi o aeroporti."
      }
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
