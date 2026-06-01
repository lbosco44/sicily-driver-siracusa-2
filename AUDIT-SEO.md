# AUDIT-SEO.md — Sicily Driver Siracusa (audit tecnico in-repo)

> **Tipo**: migrazione Pattern B SEO-preserving dal vecchio sito PHP
> `ncctaxisiracusa.com/*.php` al nuovo Next.js (next@16, next-intl@4).
> **Metodo**: lettura diretta del codice del repo + incrocio con
> `~/Downloads/AUDIT-SEO-PREVIEW.md` (audit esterno Claude.ai, dati GSC 7 mesi)
> e `Brief/SEO.md` / `Brief/COPY.md`.
> **Modalità**: report-first — **nessuna modifica al codice in questa fase**.
> I fix sono elencati per ognuno, da implementare dopo l'approvazione.
> **Stato data**: branch `claude/naughty-aryabhata-d9d07a`.

## Legenda
- 🔴 **P0** = può far crollare il ranking, da chiudere prima del cutover DNS
- 🟡 **P1** = recupera/protegge segnali, importante
- ✅ = già corretto nel codice
- ⏳ = richiede ambiente live o input cliente
- **[↔ esterno §X]** = punto che emerge anche nell'audit esterno (priorità doppia, indiscutibile)

## Verdetto sintetico

Rischio complessivo **MEDIO, gestibile** — coerente con l'audit esterno. La base
tecnica è **migliore del previsto**: i 301 ci sono e sono `permanent`, `metadataBase`
è settato, title/description sono keyword-rich per pagina, lo schema `LocalBusiness/
TaxiService` è ricco, la sitemap ha gli `hreflang`. **Tre nodi P0** vanno sciolti prima
del go-live: (1) la root `/` fa un **redirect temporaneo 307 geo-dipendente** invece di
servire/301 verso contenuto stabile; (2) il **geo-redirect per IP** in `proxy.ts` è
esattamente l'anti-pattern che Google sconsiglia; (3) la **home ha perso le FAQ**
(contenuto + `FAQPage` schema) che erano `[PRESERVE]`.

---

# 🔴 P0 — Bloccanti (chiudere prima del cutover DNS)

## P0.1 — Architettura root `/`: redirect 307 geo-dipendente, non contenuto stabile  [↔ esterno §2.1]

**Stato: 🔴 da sistemare — è il rischio n.1, confermato nel codice.**

**Evidenza:**
- `i18n/routing.ts:6-8` → `localePrefix: { mode: 'always' }`. Tutti gli URL hanno
  prefisso locale; **non esiste contenuto IT servito sulla root `/`**. La home IT vive
  su `/it`, la EN su `/en`.
- `app/[locale]/page.tsx` (generateMetadata) → `canonical: /${locale}` = `/it`.
  Conferma: il canonical della home è `https://ncctaxisiracusa.com/it`, **non** `/`.
- `proxy.ts:31` + `routing.ts` → con `localePrefix: always`, la bare root `/` viene
  gestita dal middleware next-intl che emette un **redirect 307 (temporaneo)** verso
  `/it` o `/en`.
- `next.config.ts:56-58` → commento esplicito: "*Non aggiungiamo `/` → /it qui perche
  il proxy next-intl gestisce gia... il redirect a /it / /en*".

**Perché è grave (numeri GSC, `Brief/SEO.md:11-12`, 78-88):** ~96% dell'organico è
ancorato alla root `/` del vecchio sito (`ncc siracusa` 430 imp, `taxi siracusa` pos 6,
`taxi syracuse` pos 5). Sulla bare root il nuovo sito fa un **307 temporaneo** (Google
non consolida l'equity su una destinazione stabile) **e** geo-dipendente (vedi P0.2):
Googlebot, che striscia da IP USA, viene mandato su `/en` → la root storica, che rankava
soprattutto per query **italiane**, viene associata alla versione inglese.

> Nota: `/index.php` invece è gestito bene → `next.config.ts:30` lo 301-a `/it` in un
> solo hop. Il problema è la **bare root `/`** (bookmark, backlink, digitazione diretta,
> e il modo in cui Google tratta l'host radice).

**Fix — decisione strategica (da prendere col cliente, le presento entrambe):**

- **Opzione A (consigliata, = `SEO.md` + audit esterno scenario 1): IT sulla root.**
  `i18n/routing.ts` → `localePrefix: { mode: 'as-needed' }`. La lingua di default (IT)
  viene servita **senza prefisso** su `/` (contenuto vero, indicizzabile, = URL storico
  che ranka per `taxi siracusa`/`ncc siracusa`); l'inglese resta su `/en/*`.
  Comporta aggiornare: canonical (`/it/x` → `/x`), `app/sitemap.ts`, destinazioni 301 IT
  in `next.config.ts` (`/it/*` → `/*`), hreflang. Refactor medio ma SEO-corretto.
- **Opzione B (minor effort, scenario 2): tenere `/it`** ma far fare alla bare root un
  **301 permanente** (non 307) verso `/it`, in un solo hop, e **rimuovere il
  geo-redirect** (P0.2). Accettabile ma non ottimale: la root delega equity a `/it` con
  un hop in più.

→ Questa è la decisione che sblocca tutto il resto. La porto con i tradeoff e i numeri
quando passiamo alla fase fix.

## P0.2 — Geo-redirect per IP in `proxy.ts` (anti-pattern sconsigliato da Google)  [↔ esterno §2bis]

**Stato: 🔴 da sistemare.**

**Evidenza:** `proxy.ts:10-43` → il middleware legge `x-vercel-ip-country` e **inietta**
un cookie `NEXT_LOCALE` (`IT/VA/SM` → `it`, tutti gli altri → `en`, nessun header → `it`),
che next-intl usa per **redirezionare automaticamente** la bare root verso `/it` o `/en`
in base al paese del visitatore.

**Perché è grave:** è precisamente l'**auto-redirect per IP/lingua** che l'audit esterno
§2bis segnala come da evitare. Googlebot striscia prevalentemente da **IP USA** → riceve
cookie `en` → viene spinto sulla versione inglese. Rischio: Google indicizza/privilegia
la versione EN e sotto-indicizza quella IT, proprio sulle query italiane dove il dominio
(`ncctaxisiracusa.com`) dovrebbe essere fortissimo.

**Fix:**
1. Rimuovere l'iniezione geo del cookie da `proxy.ts` (o escludere i bot via
   user-agent). La selezione lingua nei risultati Google la gestiscono **gli `hreflang`**,
   non un redirect lato sito.
2. Mantenere entrambe le versioni indicizzabili e strisciabili (già in sitemap).
3. Opzionale UX: banner non forzante "View in English / Vedi in italiano", senza
   redirect automatico e senza nascondere la versione corrente ai crawler.

> Implica anche la risposta al cliente ("voglio partire sempre in inglese"): le
> prenotazioni straniere arrivano comunque da Google Business Profile; forzare l'inglese
> farebbe perdere l'organico IT (`ncc siracusa` 430 imp, `taxi siracusa` pos 6) senza
> guadagno reale. Vedi audit esterno §2bis per lo script da dire al cliente.

## P0.3 — La home ha perso le FAQ (contenuto + `FAQPage` schema)  [↔ esterno §2.2 / §D]

**Stato: 🔴 da sistemare — preserve violation.**

**Evidenza:**
- `app/[locale]/page.tsx` → le sezioni renderizzate sono Hero, Whisper, EsperienzeScroll,
  Manifesto, PartnersBar, Interni, PolaroidMosaic, ListinoProse, DietroAlVolante,
  Testimonianza, CtaFinale. **Nessuna sezione FAQ.**
- Stessa pagina, blocco `<JsonLd>`: solo `localBusinessSchema` + `breadcrumbSchema`.
  **Nessun `faqPageSchema`.**
- `Brief/SEO.md:195-196` + `:218-220` → le FAQ di `/` e `/en` sono marcate **`[PRESERVE]`
  lock letterale** ("Quanto costa un transfer aeroporto Catania?", "Posso prenotare un
  tour Barocco in giornata?", "Avete un servizio taxi privato notturno?").

**Impatto:** perse sia le Q&A indicizzabili (long-tail) sia i potenziali **rich snippet
FAQ** in SERP. Le pagine interne **hanno** le FAQ (`tour-barocco/page.tsx:53`,
`ncc-*`, ecc.) → è la **sola home** ad averle perse.

**Fix:** reintegrare 3-4 FAQ sulla home (riusando i testi `[PRESERVE]` da `COPY.md`) +
`<JsonLd data={faqPageSchema(...)}/>`. La funzione `faqPageSchema` esiste già
(`lib/schema.tsx:122`). Costo design minimo (anche un accordion discreto a fondo home).

## P0.4 — `noindex` residuo in produzione  [↔ esterno §F12]

**Stato: ✅ codice OK — ⏳ verifica al cutover.**

**Evidenza:** `app/robots.ts:8-12` → `allow: '/'`, nessun `noindex`. Nessun `robots`
meta globale in `app/[locale]/layout.tsx:33-35` (solo `metadataBase`). Quindi **in
produzione non c'è noindex** lato codice.

**Residuo da verificare al go-live:** la **preview Vercel** aggiunge spesso
`X-Robots-Tag: noindex` a livello di deployment protection. Va confermato che il
**dominio di produzione** `ncctaxisiracusa.com` risponda **senza** quell'header dopo il
cutover (`curl -I https://ncctaxisiracusa.com/it | grep -i x-robots-tag` → deve essere
assente).

---

# 🟡 P1 — Importanti (recuperano/proteggono segnali)

## P1.1 — Keyword esatta "noleggio con conducente (NCC)" NON renderizzata sulla home  [↔ esterno §3.2]

**Stato: 🟡 da sistemare.**

**Evidenza:** la stringa esiste in `messages/it.json:190` (`manifesto.body1`), **ma
`body1` non è renderizzato da nessun componente**: `components/sections/home/Manifesto.tsx:26-42`
usa solo `row1Body`/`row2Body`/`row3Body`. `body1`/`body2` sono **chiavi morte**. Nessuna
sezione della home stampa "noleggio con conducente". `SEO.md:86,149` la vuole nel body
home (long-tail `noleggio con conducente siracusa`, 10 imp).

**Fix:** inserire una volta "noleggio con conducente (NCC)" per esteso in un blocco
indicizzabile della home (es. `manifesto.lead` o `row1Body`), in modo naturale.
Rimuovere poi `body1`/`body2` morti da `it.json`/`en.json` (pulizia).

## P1.2 — Schema: mancano `aggregateRating`, `founder`, `TouristTrip`; `sameAs` GBP da completare  [↔ esterno §3.4 / §4.1 / §C]

**Stato: 🟡 da arricchire.**

**Evidenza (`lib/schema.tsx`):**
- `localBusinessSchema` (`:49-120`) è ricco: `['LocalBusiness','TaxiService']`,
  `areaServed` ampio, 3 sedi, `telephone`, `priceRange`, `vatID/taxID`, `openingHours`
  24/7, `sameAs`. **Bene.**
- **Manca `aggregateRating`** → ora ci sono recensioni reali (4,9★, link GBP
  `cid=16944631268431014158` in `GoogleReviewsBadge.tsx`). `SEO.md`/audit esterno §4.1
  lo indicano come alto-ROI (stelline in SERP). `reviewCount` **da GBP, mai inventato**.
- **Manca `founder`** (Vincenzo Izzo) → previsto in `SEO.md:305-308`.
- **`sameAs` (`:110-117`)**: ha lo shortlink GBP `share.google/...` (TODO espandere) +
  Facebook. **Instagram ora disponibile** (`https://www.instagram.com/sicilydriversyracuse`)
  → da aggiungere (il TODO al `:117` si può chiudere).
- **Manca `TouristTrip`** sui 5 tour: non esiste `touristTripSchema` nel codice; le pagine
  tour montano solo `localBusinessSchema` + `faqPageSchema` + `breadcrumbSchema`
  (es. `tour-barocco/page.tsx:52-55`). `SEO.md:344-373` lo specifica per le 10 pagine tour.

**Fix:** aggiungere `aggregateRating` (con `reviewCount` reale) + `founder` allo
`localBusinessSchema`; aggiungere Instagram a `sameAs`; creare `touristTripSchema()` e
montarlo sulle 5 pagine tour ×2 lingue.

## P1.3 — Redirect 301: mancano 2 dei 3 "bug storici"  [↔ esterno §B]

**Stato: 🟡 da completare.**

**Evidenza:** `next.config.ts:22-54` ha **21 redirect** `permanent: true` (10 IT + 11 EN,
incluso `/contact-en.php` al `:50`). **Mancano** rispetto a `SEO.md:434-442` / §6.4:
- `/contact.php` → `/en/contact` (301) — **assente**
- `/sicily-tours.php` → `/en/sicily-tours` (301) — **assente**

Sono link interni rotti del vecchio sito (404 storici) che vale la pena catturare.

**Fix:** aggiungere i 2 redirect mancanti in `next.config.ts`.

> Nota architettura: le destinazioni IT puntano a `/it/*` (coerente con `localePrefix:
> always` attuale). Se si sceglie l'Opzione A di P0.1 (IT su root), vanno riscritte a `/*`.

## P1.4 — H1 home editoriale, senza keyword forte  [↔ esterno §3.1]

**Stato: 🟡 mitigare (no blocco).**

**Evidenza:** la home H1 è "Il tuo driver in Sicilia." (`messages/it.json` `hero.h1Post`).
Editorialmente forte ma senza keyword. Mitigato dal `<title>` nuovo keyword-dense
("NCC Siracusa · Tour Sicilia con Autista | Sicily Driver") che Google pesa molto.

**Fix:** tenere l'H1 editoriale, ma garantire nel primo blocco indicizzabile sotto
(subhead/manifesto) la presenza naturale di "NCC a Siracusa" + "noleggio con conducente"
(si risolve insieme a P1.1).

## P1.5 — Title da rifare sulle query ad alte impressioni / 0% CTR  [↔ esterno §P2.11]

**Stato: 🟡 opportunità (basso rischio, alto ritorno).**

`SEO.md:13-18` elenca 4 URL con tante impressioni e 0 click per title/desc deboli del
vecchio sito: `sicily driver` (149 imp pos 5,3 → home EN), `tour-sicilia.php` (135 imp),
`contatti-en.php` (110 imp), `driver-catania.php` (58 imp pos 6,9). **Da verificare** che
i nuovi `metaTitle`/`metaDescription` (in `messages/*.json` e `lib/tours.ts`) intercettino
queste forme. Verifica pagina-per-pagina contro `SEO.md §3.1/§3.2` in fase fix.

## P1.6 — Preserve check H1 + body pagine `[PRESERVE]`  [↔ esterno §E10]

**Stato: 🟡 da verificare a tappeto in fase fix.**

`SEO.md:193-220` lista 13 pagine con H1/paragrafo/FAQ **lock letterale** (Cat. 1:
`/`, `/en`, `/en/about`, `/tour-barocco` CTR 25%, `/en/driver-noto`, `/ncc-noto`,
`/en/services`). Spot-check fatti:
- `/tour-barocco`: ✅ ha FAQ + breadcrumb + localBusiness schema (`tour-barocco/page.tsx:52-55`),
  hreflang corretto (`:22-25`).
- Home: 🔴 FAQ perse (P0.3).

Resta da confrontare **a tappeto** H1 + primi 150 char dei body `[PRESERVE]` contro
`COPY.md` (testi `[PRESERVE]`). Da fare in fase fix (richiede lettura `COPY.md` +
ogni template city/tour).

---

# ✅ Punti già corretti (non toccare)

- **301 `permanent`**: 21 redirect in `next.config.ts:22-54`, IT→`/it/*`, EN→`/en/*`,
  incluso il fix `/contact-en.php`. Single-hop (i `.php` sono esclusi dal proxy via
  matcher `proxy.ts:54` `.*\\..*`, quindi nessuna catena).
- **`metadataBase`** settato (`app/[locale]/layout.tsx:34`) → canonical/OG/hreflang
  relativi risolvono ad assoluti `https://ncctaxisiracusa.com`.
- **hreflang** completo su ogni pagina via `alternates.languages {it, en, 'x-default': it}`
  (es. `tour-barocco/page.tsx:22-25`, home, tutte le route) → coerente con `SEO.md:401`
  (x-default = IT).
- **sitemap dinamica** (`app/sitemap.ts`) con `alternates.languages` per ogni URL,
  priorità stratificate per categoria GSC, home a 1.0.
- **robots** permissivo (`app/robots.ts`) con sitemap dichiarata, solo `/api/` in disallow.
- **schema `LocalBusiness/TaxiService`** ricco e ben fatto (3 sedi, areaServed, 24/7,
  vatID, GeoCircle).
- **FAQ presenti sulle pagine interne** (tour + ncc + servizi + wedding): 12 pagine con
  `faqPageSchema`.
- **Immagini** AVIF→WebP, deviceSizes ottimizzati (`next.config.ts:7-19`).
- **title/description per-pagina** keyword-rich (non più il "Sicily Driver Siracusa"
  generico del vecchio sito).

---

# ⏳ Da misurare in ambiente live (non verificabile da codice)

## V1 — Test redirect single-hop con `curl -I`  [↔ esterno §B6]
Su un'URL **non protetta** (produzione post-cutover, o preview con protezione disattivata),
verificare i 23 redirect: ogni `.php` → `301` con `Location:` corretto, **mai 302/200/404,
mai catene**. La preview Vercel attuale ha SSO/protezione → curl restituisce il muro auth,
non il redirect reale. Dall'analisi del codice i 21 presenti sono `permanent` e single-hop;
restano da provare live + aggiungere i 2 mancanti (P1.3).

## V2 — Lighthouse / Core Web Vitals  [↔ esterno §F14]
Misurare mobile+desktop su `/it`, `/it/tour-barocco`, una `/it/ncc-*`. Target LCP < 2.5s,
INP < 200ms, CLS < 0.1. **Analisi statica (rischi noti):**
- LCP: hero con `next/image` `priority` + `fetchPriority=high` + blur → buono. ✅
- INP: la sezione tour usa **WebGL** (`DesktopWebGL.tsx`) → potenziale costo input/main
  thread su desktop, da misurare.
- CLS: font `display: swap` con fallback → rischio shift minimo; verificare.
Comando: `pnpm build && pnpm start` poi Lighthouse CI / PageSpeed sulle 3 pagine.

---

# ⏳ Input necessari dal cliente (sbloccano singoli punti)

1. **URL Google Business Profile completo + numero esatto recensioni** → completa
   `sameAs` (`schema.tsx:114` shortlink → URL esteso) e abilita `aggregateRating` veritiero (P1.2).
2. **Lista completa URL `.php` live del vecchio sito** → conferma copertura 301 (V1/P1.3).
3. **Accesso Google Search Console** → lista URL indicizzati, submit sitemap al go-live,
   monitoraggio 6 settimane delle 5 query top.
4. Conferma esposizione **founder (Vincenzo Izzo) + P.IVA** nello schema (P1.2).

---

# Piano d'azione (fase fix, post-approvazione di questo report)

**P0 — prima del cutover DNS**
1. Decidere architettura root (P0.1 Opzione A vs B) → implementare `localePrefix` +
   allineare canonical/sitemap/redirect/hreflang.
2. Rimuovere il geo-redirect IP da `proxy.ts` (P0.2).
3. Reintegrare FAQ + `FAQPage` sulla home (P0.3).
4. Checklist cutover: confermare assenza `noindex`/`X-Robots-Tag` in produzione (P0.4).

**P1 — recupero segnali**
5. Inserire "noleggio con conducente (NCC)" nel body home + rimuovere `body1/2` morti (P1.1).
6. Schema: `aggregateRating` (reviewCount reale) + `founder` + Instagram in `sameAs` +
   `touristTripSchema` sui 5 tour (P1.2).
7. Aggiungere i 2 redirect 301 mancanti (P1.3).
8. Mitigare H1 home con keyword nel sottotitolo (P1.4).
9. Verifica title 0%-CTR (P1.5) + preserve check a tappeto vs `COPY.md` (P1.6).

**P2 — post-cutover**
10. `curl -I` su tutti i 23 redirect in produzione (V1).
11. Lighthouse vs baseline PHP (V2).
12. Submit sitemap a GSC + monitoraggio 6 settimane delle 5 query top.

---

# Incrocio con l'audit esterno (priorità indiscutibili = emergono da entrambi)

| Finding | Audit esterno | Questo audit (codice) | Verdetto |
|---|---|---|---|
| Root `/` vs `/it`, equity 96% | §2.1 🔴 | P0.1 🔴 (confermato `routing.ts:6-8`) | **Indiscutibile** |
| Geo auto-redirect IP | §2bis 🟡 | P0.2 🔴 (trovato `proxy.ts:10-43`) | **Indiscutibile** (codice lo aggrava a P0) |
| FAQ home perse | §2.2/§D 🔴 | P0.3 🔴 (confermato) | **Indiscutibile** |
| "noleggio con conducente" diluito | §3.2 🟡 | P1.1 🟡 (peggio: non renderizzato) | **Indiscutibile** |
| `aggregateRating` mancante | §4.1 ✅opp | P1.2 🟡 (confermato assente) | **Indiscutibile** |
| `TouristTrip` mancante | §3.4/§C | P1.2 🟡 (confermato assente) | **Indiscutibile** |
| Redirect bug storici | §B | P1.3 🟡 (2 mancanti) | **Indiscutibile** |
| H1 home editoriale | §3.1 🟡 | P1.4 🟡 | **Indiscutibile** |
| Title 0% CTR | §P2.11 | P1.5 🟡 | Concordano |
| hreflang corretto | §2bis setup | ✅ (verificato) | Concordano (OK) |
| noindex residuo | §F12 | P0.4 ✅codice/⏳cutover | Concordano |

*Fine AUDIT-SEO.md — fase report. Nessuna modifica al codice effettuata.
Prossimo step: approvazione + decisione architettura root (P0.1) → fase fix.*
