# Checklist Cutover SEO — Sicily Driver Siracusa

**Dominio:** ncctaxisiracusa.com
**Tipo:** migrazione SEO-preserving (vecchio sito .php → nuovo sito Next.js su Vercel)
**Obiettivo:** passare al nuovo sito **senza perdere le posizioni Google esistenti**.

> Legenda: ☐ da fare · le voci **CRITICHE** vanno verificate prima di puntare il dominio.

---

## 1. Prima del cutover (giorni precedenti)

- ☐ **Backup** del vecchio sito (file + eventuale DB) e screenshot delle pagine principali
- ☐ Esportare da Google Search Console i dati attuali (query, pagine, posizioni) come **baseline** di confronto
- ☐ **CRITICO — Test dei 23 redirect 301**: per ogni vecchio URL `.php`, verificare con `curl -I` che risponda `301` con `Location:` corretta
  - es. `curl -I https://ncctaxisiracusa.com/index.php` → `301` → `/`
  - controllare in particolare i 7 URL che portano il 96% del traffico (home IT, home EN, tour-barocco, driver-noto, ncc-noto, servizi-en, chi-siamo-en)
- ☐ Verificare in staging/preview che ogni pagina nuova abbia: `title`, `meta description`, `canonical`, `hreflang`, dato strutturato JSON-LD
- ☐ **Google Rich Results Test** su 3 pagine (home, un tour, una pagina città) → 0 errori su FAQPage / TouristTrip / LocalBusiness
- ☐ **PageSpeed Insights** baseline su home IT, home EN, tour-barocco (registrare i punteggi per confronto)
- ☐ Confermare l'URL/CID del **Google Business Profile** dentro `sameAs` dello schema (è la principale fonte lead del cliente)
- ☐ Preparare il **GA4**: creare la proprietà e impostare `NEXT_PUBLIC_GA_ID` su Vercel (Production) — il loader è già consent-gated nel codice

---

## 2. Giorno del cutover (DNS switch)

- ☐ **CRITICO — Rimuovere la *Deployment Protection* di Vercel** sul dominio di produzione (mette `X-Robots-Tag: noindex` sulle preview: NON deve restare su produzione)
  - verifica: `curl -I https://ncctaxisiracusa.com/` → **non** deve contenere `x-robots-tag: noindex`
- ☐ Puntare il **DNS** (apex `ncctaxisiracusa.com` + `www`) a Vercel
- ☐ **CRITICO — www → non-www**: verificare che `https://www.ncctaxisiracusa.com/` rediriga (301) a `https://ncctaxisiracusa.com/`
- ☐ Verificare **HTTPS** attivo e `http://` → `https://` (forzato da Vercel)
- ☐ Verificare che la **root `/` serva l'italiano** (200, contenuto reale) e **NON** rediriga a `/it`
- ☐ **CRITICO — Inviare `sitemap.xml` a Google Search Console** lo stesso giorno (`https://ncctaxisiracusa.com/sitemap.xml`)
- ☐ In GSC: **richiesta di indicizzazione** manuale per i 7 URL principali
- ☐ Verificare `robots.txt` di produzione: `Allow: /`, sitemap dichiarata, nessun `Disallow` su rotte pubbliche
- ☐ Test Open Graph: condividere home + un tour su WhatsApp/Telegram e controllare anteprima corretta

---

## 3. Verifiche funzionali post-deploy (subito dopo)

- ☐ Telefono `tel:` cliccabile su mobile
- ☐ Pulsante/link **WhatsApp** funzionante (`wa.me/393756413379`)
- ☐ Form contatti/preventivo: invio OK (toast/alert) e, se attivo, ricezione
- ☐ Switcher lingua IT/EN funzionante su tutte le pagine
- ☐ Cookie banner GDPR presente; con consenso "analytics" il GA4 si attiva
- ☐ Nessun link interno rotto (404) — spot check su menu, footer, CTA tour

---

## 4. Monitoraggio post-cutover (6 settimane)

- ☐ **Settimanale in GSC** — controllare le 5 query top:
  `ncc siracusa` · `taxi siracusa` · `sicily driver` · `taxi syracuse` · `transfer siracusa`
- ☐ Monitorare il report **Indicizzazione** GSC (pagine indicizzate vs attese; errori di copertura)
- ☐ Monitorare **Core Web Vitals** in GSC (campo reale) + Rich Results (FAQ/Tour)
- ☐ Verificare in GA4 gli eventi di conversione: `whatsapp_click`, `tel_click`, `form_submit`, `tour_view`
- ☐ **Atteso:** fisiologico calo nelle prime 1-2 settimane, stabilizzazione entro 6-12 settimane. Non farsi prendere dal panico al primo dip.

---

## 5. Piano di rollback (se qualcosa va storto)

- ☐ Tenere il vecchio sito **accessibile e pronto** per 2-4 settimane (non cancellarlo)
- ☐ Se crollo di traffico anomalo (> 40% e persistente oltre 2 settimane): ricontrollare redirect, `noindex`, canonical; in caso, ripuntare temporaneamente il DNS al vecchio sito
- ☐ Conservare i log/curl dei test redirect come riferimento

---

## 6. DNS su ARUBA — record esatti (parte concreta del cutover)

**Dove:** pannello Aruba → dominio `ncctaxisiracusa.com` → **Gestione DNS**
(il dominio deve usare i nameserver Aruba, di default è così).

> ⚠️ **REGOLA D'ORO EMAIL — non rompere la posta.** Su Aruba cambiamo SOLO i
> record del **sito** (A dell'apex + CNAME www) e AGGIUNGIAMO i record per
> Search Console e Resend. **NON toccare** i record **MX**, lo **SPF** esistente,
> né i CNAME di posta (`webmail`, `pop`, `imap`, `smtp`, `autoconfig`). Così la
> casella `@ncctaxisiracusa.com` continua a funzionare.

**Passi:**
1. ☐ **(giorno prima)** Abbassare il **TTL** dei record A/CNAME a **300s** →
   propagazione veloce e rollback rapido.
2. ☐ **Aggiungere i 2 domini su Vercel** (progetto → Settings → Domains):
   `ncctaxisiracusa.com` **e** `www.ncctaxisiracusa.com`. Vercel mostra i valori
   DNS **esatti** da usare (non usare IP scritti a memoria).
3. ☐ Su Aruba impostare:
   - **A** su `@` (apex) → l'IP indicato da Vercel (tipicamente `76.76.21.21`,
     ma usa **quello mostrato**).
   - **CNAME** su `www` → `cname.vercel-dns.com` (o il valore mostrato).
   - Se Aruba non lascia modificare l'A dell'apex (legato all'hosting), elimina il
     vecchio A del sito e reinseriscilo col valore Vercel.
4. ☐ Attendere propagazione (con TTL basso: minuti) → Vercel emette da solo HTTPS.

**Record da AGGIUNGERE (non rompono nulla, richiesti ma non bloccanti l'email):**
- ☐ **Search Console**: 1 record **TXT** su `@` con la stringa di verifica di GSC
  (proprietà **Dominio**).
- ☐ **Resend** (invio email dei form): i record che Resend mostra quando aggiungi
  il dominio — **DKIM** (`resend._domainkey`) e, col sottodominio, **MX + SPF su
  `send.`**. ⚠️ Se esiste già uno **SPF** Aruba (`v=spf1 ...`) NON crearne un
  secondo: si **fondono** in un unico record aggiungendo l'include di Resend.
  Consiglio: in Resend usa il **sottodominio** `send.ncctaxisiracusa.com` →
  invio isolato dalla posta Aruba.

### Record reali Aruba — rilevati 2026-07-06 (piano esatto)

Email CONFERMATA sul dominio (Aruba): `MX @ → mx.ncctaxisiracusa.com (10)`,
`mx/mail/pop3/smtp/webmail → 62.149.128.x / 62.149.158.x`, SPF ×2
(`include:spf.aruba.it` + `include:_spf.aruba.it`), DMARC, DKIM `a1._domainkey`,
`imap/autoconfig/SRV` → **NON TOCCARE**. Casella `@ncctaxisiracusa.com` deve restare viva.

Sito attuale su hosting Aruba: `A @` e `A www` → `89.46.106.60`;
`AAAA @` e `AAAA www` → `2a00:6d40:4:3::c245:60`.

**Al cutover, solo 4 mosse (record editabili):**
1. ☐ `A @` : `89.46.106.60` → **`216.198.79.1`** (IP Vercel, confermato dal pannello 2026-07-06)
2. ☐ **ELIMINA** `AAAA @` (`2a00:6d40:4:3::c245:60`) — altrimenti gli utenti IPv6 restano sul vecchio sito
3. ☐ **ELIMINA** `A www` (`89.46.106.60`) **e** `AAAA www`
4. ☐ **AGGIUNGI** `CNAME www` → `b99a9293e04439e8.vercel-dns-017.com` (valore SPECIFICO del progetto, mostrato da Vercel 2026-07-06 — NON il generico cname.vercel-dns.com)

Note:
- Già presente `TXT @ google-site-verification=uEDf4ezj2GmHmEw4E3fYCGBr6UIJ9S0xR2dz9pzuQW8`
  → dominio già verificato in un account Google. Se accessibile, riusare quella Search
  Console (baseline pronta); altrimenti aggiungere una seconda verifica nostra.
- `ftp/stat/statistiche/admin/sms/localhost/_domainconnect` = servizi Aruba/hosting vecchio:
  innocui dopo il cutover, si possono lasciare (pulizia opzionale).
- Resend (email form): record sul sottodominio `send.` → NON tocca SPF/MX root.

## 7. Accessi / config necessari (chi fa cosa)

**Env su Vercel (Production)** prima del go-live:
- ☐ `RESEND_API_KEY`, `LEAD_TO_EMAIL`, `LEAD_FROM_EMAIL` (invio form)
- ☐ `NEXT_PUBLIC_GA_ID` (GA4)

**Google (decidere: account agenzia Nexus consigliato, poi si passa al cliente):**
- ☐ Proprietà **Search Console** (Dominio, via TXT Aruba) + invio sitemap
- ☐ Proprietà **GA4** → Measurement ID
- ☐ URL/CID del **Google Business Profile** (va in `sameAs` schema)

**Ripartizione:**
- **Claude**: codice (fatto); record DNS esatti una volta visti quelli attuali
  Aruba; cablaggio GA4 + eventi; verifiche live (redirect/robots/sitemap/schema/
  CWV/axe) su cadenza; lettura dei dati GSC/GA4 che gli vengono passati.
- **Lorenzo** (Claude non può loggarsi in Aruba/Vercel/Google): record su Aruba;
  2 domini su Vercel; creazione/verifica GSC + GA4; rimozione Deployment Protection.

## Note finali
- Il sito è costruito come migrazione **preserve + improve**: URL storici e testi che rankano sono preservati; in più migliorano title/meta e dati strutturati (recensioni 4.9, FAQ, tour).
- I punti **CRITICI** di questa checklist sono gli unici veri rischi residui — sono controlli operativi, non modifiche al sito.

*Generato per il go-live di ncctaxisiracusa.com.*
