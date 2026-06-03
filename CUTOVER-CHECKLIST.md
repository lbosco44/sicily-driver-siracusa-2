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

## Note finali
- Il sito è costruito come migrazione **preserve + improve**: URL storici e testi che rankano sono preservati; in più migliorano title/meta e dati strutturati (recensioni 4.9, FAQ, tour).
- I punti **CRITICI** di questa checklist sono gli unici veri rischi residui — sono controlli operativi, non modifiche al sito.

*Generato per il go-live di ncctaxisiracusa.com.*
