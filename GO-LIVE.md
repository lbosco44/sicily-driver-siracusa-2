# Sicily Driver — Piano Go-Live

> Migrazione del sito live `ncctaxisiracusa.com` (Pattern B, SEO-preserving).
> Il cliente vuole andare online e iterare dopo. Documento di riferimento per
> il cutover. Aggiornato: 2026-07-03.

**Verdetto**: tecnicamente il sito è pronto al 90%. C'è **un solo vero
bloccante** (i form non inviano i lead) + 2 azioni di lancio (analytics/SEO
monitoring e il cutover DNS). Tutto il resto (foto reali di alcune sezioni,
contrasto, LCP) si può fare DOPO, live, senza problemi.

---

## 1. Cosa è GIÀ pronto (non serve toccare)

- **Redirect SEO migrazione**: 20 redirect 301 dalle vecchie URL `.php` →
  nuove URL, `www → non-www`, + safety-net su URL 404 storiche
  (`next.config.ts`). L'equity SEO delle pagine posizionate viene preservata.
- **robots.txt + sitemap.xml**: generati, puntano a `ncctaxisiracusa.com`,
  con hreflang IT/EN e priorità per pagina.
- **Indicizzazione**: in produzione il sito è indicizzabile. Il `noindex` che
  si vede ora è messo in automatico da Vercel SOLO sui deploy di preview →
  sparisce da solo sul dominio reale.
- **Immagini** ottimizzate AVIF/WebP, **schema LocalBusiness**, **meta + OG**
  per pagina, **i18n IT/EN** con hreflang, **cookie banner GDPR**.
- **Gate verde**: `tsc` 0 errori, 12/12 test.

---

## 2. BLOCCANTI — da fare PRIMA di andare online

### 🔴 A. Form senza backend = lead persi  (IL bloccante vero)
- **Stato**: `ContactForm.tsx` e `WeddingForm.tsx` fanno solo `console.log` +
  messaggio di successo. Nessun invio reale.
- **Rischio**: il sito promette "rispondiamo entro 24-36 ore" ma nessuna
  richiesta arriva al cliente. Su un sito che vive di lead, è il danno peggiore.
- **Cosa serve fare**: collegare **Resend** → creare `app/api/contact/route.ts`
  e `app/api/wedding/route.ts` che inviano l'email al cliente a ogni submit,
  con validazione + gestione errori + parità IT/EN nei messaggi.
- **Cosa mi serve da te** (vedi §5): email di destinazione, API key Resend,
  dominio mittente verificato.

### 🔴 B. Cutover DNS  (l'atto materiale del "andare online")
- **Cosa serve**: accesso al pannello DNS/registrar di `ncctaxisiracusa.com`
  per puntare il dominio a Vercel + aggiungere i record Resend + il TXT di
  Search Console.
- **Da verificare PRIMA**: il cliente usa già una casella email
  `@ncctaxisiracusa.com`? Se sì, con quale provider (Aruba/Register/…)? Serve
  per NON rompere la posta esistente quando aggiungiamo i record Resend.
  (Resend usa record propri su sottodominio/selector, non tocca gli MX, ma va
  verificato.)

### 🔴 C. Merge su `main` → deploy produzione
- Il branch di lavoro è pronto. Per andare live serve il merge su `main` (tuo
  ok esplicito): Vercel builda il dominio di produzione in ~2 min.

---

## 3. Da ATTIVARE al lancio — analisi (analytics + SEO nel tempo)

Non bloccano il funzionamento del sito, ma vanno accesi al lancio, altrimenti
si va live "alla cieca" e non si misura l'effetto della migrazione.

### GA4 — traffico e conversioni
- **Cosa serve**: una property Google Analytics 4 → **Measurement ID**
  `G-XXXXXXXXXX` da mettere nella env `NEXT_PUBLIC_GA_ID` su Vercel.
- **Poi faccio io**: cablo gli eventi `form_submit`, `whatsapp_click`,
  `tour_view` (già previsti dal codice, non ancora attaccati agli handler).
- **A cosa serve**: quante visite, da dove arrivano, quante diventano contatti.

### Google Search Console — la "SEO che modifichi nel tempo"
- **Cosa serve**: verificare la proprietà del dominio (TXT DNS o collegando
  GA4) + inviare la sitemap `https://ncctaxisiracusa.com/sitemap.xml`.
- **A cosa serve**: controllare che i 301 vengano recepiti, che le pagine
  restino indicizzate dopo la migrazione, vedere per quali ricerche compari,
  e migliorare titoli/contenuti nel tempo per salire. **Questo è lo strumento
  con cui la SEO si ottimizza live, iterazione dopo iterazione.**

### Google Business Profile (cliente locale)
- Aggiornare la scheda: coerenza NAP (nome/indirizzo/telefono), link al sito
  nuovo. Utile per la SEO locale di Siracusa.

---

## 4. Da migliorare DOPO (live, senza fretta — il cliente itera)

Nessuno di questi blocca il lancio.

- **Foto reali placeholder**: heroes dei tour Barocco/Isola/Sailing, loghi e
  foto partner, auto d'epoca + gallery della pagina wedding. (Le tappe del tour
  Dolce Vita sono già foto reali.)
- **Contrasto AA testi piccoli** (Opzione B): shade accent più scura solo sui
  testi <18.66px su /wedding e /tour, per passare axe a 0.
- **LCP mobile ~4.5s**: leva minore = logo PNG da 96KB da ottimizzare.
- **Eventi GA custom**: da attaccare una volta attivo GA4.
- **PEC**: `izzo.v@pec.it` confermata reale (nessuna azione).

---

## 5. COSA MI DEVI MANDARE — checklist secca

### Dal cliente
| Cosa | A cosa serve |
|---|---|
| **Email dove ricevere i lead** (la casella dove vuole le richieste dal sito) | Destinazione degli invii Resend dei form |
| Conferma: usa già email `@ncctaxisiracusa.com`? con quale provider? | Non rompere la posta quando tocchiamo i DNS |
| Accessi al **DNS/registrar** di `ncctaxisiracusa.com` (o chi li gestisce) | Cutover + record Resend + TXT Search Console |
| **Foto reali** (post-lancio): tour, partner, wedding | Sostituire i placeholder (regola "foto vere del cliente") |
| Conferma **NAP**: ragione sociale, indirizzo, telefono, orari | Schema LocalBusiness + Google Business |
| Accesso/proprietà **Google Business Profile** | Sync scheda locale |

### Da te (Nexus) / decisioni
| Cosa | A cosa serve |
|---|---|
| Account **Resend** + **API key** (`RESEND_API_KEY`) — ti guido io | Invio email dei form |
| Decidere **dominio mittente** Resend (`ncctaxisiracusa.com` o sottodominio) | FROM verificato degli invii |
| Property **GA4** → Measurement ID (`NEXT_PUBLIC_GA_ID`) | Tracking traffico/conversioni |
| **Google Search Console** (verifica + invio sitemap) | Monitoraggio SEO migrazione |
| Chi possiede GA4/GSC: account agenzia Nexus o del cliente? | Ownership e passaggio futuro |

---

## 6. Ordine operativo consigliato

1. **Tu**: recuperi dal cliente email lead + info dominio/DNS + accesso GBP.
2. **Io**: costruisco l'integrazione Resend (posso iniziare subito con env
   placeholder, così è pronta quando arriva l'API key).
3. **Tu/Io**: crei GA4 → mi passi il Measurement ID; io lo metto in env + cablo
   gli eventi.
4. **DNS**: aggiungiamo record Resend + TXT Search Console (senza toccare MX).
5. **Merge su `main`** → deploy produzione.
6. **Cutover DNS** del dominio verso Vercel.
7. **Post-lancio**: invio sitemap in GSC, verifico i 301, poi loop di
   ottimizzazione SEO nel tempo.

---

## 7. Cosa posso iniziare SUBITO (senza aspettare il cliente)

- Scrivere le due API route Resend + collegare i form (con env placeholder e
  un fallback pulito finché la key non c'è).
- Preparare i punti di aggancio degli eventi GA4.
- Ottimizzare il logo PNG per l'LCP.

Dimmi tu da dove parto.
