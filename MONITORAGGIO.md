# MONITORAGGIO — ncctaxisiracusa.com

Rituale operativo per tenere d'occhio il sito dopo il go-live e farlo salire su
Google man mano. Sito live dal **2026-07-06** (dominio → Vercel, migrazione
SEO-preserving).

Regola d'oro: **piccolo e costante batte il grande sprint una tantum.**
15 minuti a settimana + una migloria al mese.

---

## I tre cruscotti (a cosa serve ciascuno)

| Strumento | Risponde a | Link |
|---|---|---|
| **Google Search Console (GSC)** | Ti trovano su Google? Per quali ricerche, in che posizione? | search.google.com/search-console |
| **Google Analytics 4 (GA4)** | Chi arriva cosa fa? Quanti chiamano/scrivono/prenotano? | analytics.google.com |
| **Google Business Profile (GBP)** | Ti trovano nella mappa / pacchetto locale? Quante chiamate e indicazioni? | business.google.com |

Il cliente è **già forte su GBP** (molte recensioni multilingua, voti alti): il
sito serve a **completare** quella forza — intercettare le ricerche informative
sui tour/transfer e fare da prova di serietà che spinge la conversione.

---

## Rituale SETTIMANALE (~15 min)

Compila la data e i numeri nella tabella in fondo. Bastano i numeri core.

### 1. GSC → Rendimento (Performance)
- Periodo: ultimi 28 giorni, confronta col periodo precedente.
- Guarda **le query core** (tabella sotto): impressioni, click, posizione media.
- Segna se una query **sale o scende** di posizione. Una query che passa da
  pos. 11 a pos. 8 = sei entrato in prima pagina: è lì che arrivano i click.
- Query nuove che spuntano = nuove porte d'ingresso, valuta se rafforzarle.

### 2. GSC → Indicizzazione + Sitemap
- **Pagine**: nessuna pagina chiave finita in "Non indicizzata" a sorpresa.
- **Sitemap**: stato = "Riuscito". (Al go-live dava "Impossibile recuperare" =
  cache IPv6 vecchia, transitorio; se persiste oltre pochi giorni, re-invia.)

### 3. GA4 → Engagement + Conversioni
- **Report → Engagement → Eventi**: controlla i 4 eventi custom (vedi sotto).
- **Acquisizione**: da dove arriva il traffico (organico / diretto / referral).
- Rapporto tra visite e lead: se salgono le visite ma non i lead → problema di
  conversione (CTA, form, fiducia), non di traffico.

### 4. GBP → Insights
- Chiamate, richieste di indicazioni, click al sito.
- **Recensioni nuove**: rispondi SEMPRE (anche un grazie). Le risposte pesano
  sul ranking locale e sulla percezione.

---

## Eventi GA4 custom (cosa significano)

Cablati nel codice (`lib/analytics.ts` + `components/layout/AnalyticsEvents.tsx`).
Partono **solo** dopo consenso cookie "analytics" e solo con `NEXT_PUBLIC_GA_ID`
attivo su Vercel.

| Evento | Quando scatta | Perché conta |
|---|---|---|
| `whatsapp_click` | Click su un qualsiasi link WhatsApp (bottone flottante, footer, box errore form…) | Canale di contatto #1 → proxy dei lead |
| `tel_click` | Click su un numero `tel:` (mobile soprattutto) | Chiamata diretta = lead caldo |
| `form_submit` | Invio riuscito del form Contatti (`form: contatti`) o Wedding (`form: wedding`) | Lead tracciato in modo pulito |
| `tour_view` | Apertura di una pagina tour (`tour: <slug>`) | Quali tour attirano di più → dove investire in contenuto |

> In GA4, dopo qualche giorno di dati, marca `whatsapp_click`, `tel_click` e
> `form_submit` come **Conversioni** (Amministrazione → Eventi → attiva
> l'interruttore). Così misuri i lead, non solo le visite.

---

## Controlli TECNICI (SEO indiretta)

Google usa velocità e salute tecnica come segnale. Da controllare ~mensile o via
automazione (vedi sotto):

- **5 URL core → stato 200 + indicizzabili** (nessun `noindex` accidentale).
- **Core Web Vitals** (PageSpeed Insights, pagespeed.web.dev):
  - Target: LCP < 2.5s, CLS < 0.1, INP < 200ms.
  - ⚠️ Aperto dal go-live: **LCP mobile ~4.5s** in home → sopra soglia, da
    ottimizzare (immagini hero, priorità). È la leva tecnica #1.

---

## Leve SEO per SALIRE (in ordine di impatto)

1. **GBP (già forte)** — mantienilo: foto nuove periodiche, servizi aggiornati,
   post, e soprattutto **flusso recensioni** (link diretto ai clienti dopo il
   servizio). Su "taxi/ncc siracusa" il pacchetto mappe prende la maggior parte
   dei click.
2. **Recensioni** — alzano ranking locale E click-through. La leva più economica.
3. **Contenuto pagine-soldi** — tour (Dolce Vita, Barocco, Etna, Isola delle
   Correnti, Silent Sailing) e transfer: arricchire con itinerari reali, durate,
   FAQ, **foto vere** (oggi placeholder su alcuni heroes — vedi backlog).
4. **Tecnico / Core Web Vitals** — sistemare LCP mobile.

### Cadenza consigliata
- **Settimanale**: rituale sopra + rispondere alle recensioni.
- **Mensile**: 1 migloria di contenuto (una pagina tour/transfer arricchita) + 1
  fix tecnico dal backlog (`sicily-driver-audit-backlog.md`).

---

## Automazione (stato e prossimo passo)

**Obiettivo**: far girare il controllo settimanale da solo, senza aprire niente.

- **Livello 1 — senza credenziali (attivabile subito):** un agente schedulato
  può controllare da solo i 5 URL (200 + indicizzabili), la sitemap e i Core Web
  Vitals (PageSpeed API pubblica), e scrivere l'esito qui. NON può leggere i
  numeri di GSC/GA4 (servono le API).
- **Livello 2 — report completo (setup una tantura ~30-40 min):** collegare le
  **API di Google** con un service account read-only autorizzato su GSC (Search
  Console API) e GA4 (Data API). Fatto quello, l'agente settimanale tira giù
  posizioni/click/traffico/lead reali e compila la tabella da solo.

> Claude non può loggarsi nel Google del cliente né gestire password: i dati
> Google passano sempre dalle API. Il service account è il modo pulito e
> revocabile per darci accesso in sola lettura.

---

## Registro settimanale (compila qui)

Query core da monitorare (adatta ai dati reali che emergono in GSC):
`ncc siracusa` · `taxi siracusa` · `transfer aeroporto catania siracusa` ·
`ncc noto` · `tour barocco sicilia` · `transfer pozzallo siracusa` ·
`ncc taormina` · `taxi siracusa aeroporto`

| Data | Impress. tot | Click tot | Pos. media | Lead (wa+tel+form) | Note / query in salita o discesa |
|---|---|---|---|---|---|
| 2026-07-06 (baseline go-live) | — | — | — | — | Sito appena live, dati in arrivo |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

---

_Ultimo aggiornamento doc: 2026-07-06 — creato al go-live._
