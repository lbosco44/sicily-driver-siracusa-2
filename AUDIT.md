# AUDIT QC — Sicily Driver Siracusa

**Data:** 2026-06-29
**Branch:** `claude/naughty-aryabhata-d9d07a` (worktree)
**Metodo:** audit multi-agente, analisi statica del codice (read-only), 5 revisori in parallelo (Mobile / Link & funzionalità / SEO / Performance / Accessibilità) + verifica adversariale di ogni finding. Priorità: **MOBILE**.
**Esito:** 25 finding emessi → **22 confermati**, 3 smentiti dalla verifica.
**Scope:** bug tecnici e di funzionamento. Le rifiniture estetiche pure sono escluse; i problemi visivi compaiono solo se clamorosi.

> NON ancora applicato alcun fix. In attesa di indicazione.

Conteggio confermati per gravità: **CRITICO 2** (su 3 finding, 2 erano duplicati dello stesso bug) · **IMPORTANTE 6** · **MINORE 13** (+1 duplicato).

---

## 🔴 CRITICO — bloccanti go-live (perdita lead)

### C1 — Form Contatti NON invia: ogni lead è perso (con falsa conferma)
- **File:** `components/sections/ContactForm.tsx:22-33`
- **Cosa:** `handleSubmit` fa solo `console.log('[ContactForm] submission', data)` + `setTimeout(400ms)` + `setSubmitted(true)`. Nessun `fetch`/POST/server action. La route `app/api/contact` del TODO **non esiste** (Glob `app/api/**` → vuoto). L'utente vede "Grazie, abbiamo ricevuto la tua richiesta — ti rispondiamo entro 24-36 ore" (`messages/it.json:634-635`) ma il titolare non riceve nulla.
- **Repro:** mobile o desktop → `/contatti` → compila e invia → appare il successo, ma in Network nessuna richiesta esce.
- **Fix (1 riga):** dentro `handleSubmit`, `await fetch('/api/contact',{method:'POST',body:JSON.stringify(data)})` verso una route handler con Resend, gestendo l'errore prima di `setSubmitted(true)`.
- **Confidence:** 0.98 — trovato indipendentemente da 2 revisori (era `MOB-07` + `FUNC-01`).
- **Nota:** già tracciato come TODO prioritario (Resend MCP connesso). Confermato anche dall'audit.

### C2 — Form Wedding NON invia: lead matrimoni/eventi persi (servizio più remunerativo)
- **File:** `components/sections/WeddingForm.tsx:49-56`
- **Cosa:** identico a C1. Solo `console.log('[WeddingForm] submission', data)` + setTimeout + successo. Nessun POST. Raccoglie dati ad alto valore (data nozze, luogo cerimonia/ricevimento, n. auto, ospiti, nome, telefono required, email) → tutti persi.
- **Repro:** `/wedding` → compila il form → stato di successo, nessuna richiesta in uscita.
- **Fix (1 riga):** POST a `/api/wedding-quote` (Resend) dentro `handleSubmit` prima di `setSubmitted(true)`, con fallback su WhatsApp in caso di errore.
- **Confidence:** 0.98

---

## 🟠 IMPORTANTE — degrado serio (sito funziona ma…)

> **✅ RISOLTI tutti e 6 il 2026-06-30** (branch `claude/naughty-aryabhata-d9d07a`).
> I1: WebGL gated da `useMediaQuery('(min-width:768px)')` → niente context/texture su mobile.
> I2: helper `lib/seo.ts` (`ogImage`/`twitterCard`) applicato alle 20 pagine.
> I3: texture/poster Etna via optimizer Next (`lib/img.ts` `nextImageUrl`, w=1920 q80).
> I4: preload `dolce-vita.webp` spostato dal layout alla sola home (`ReactDOM.preload`).
> I5: video hero Etna solo desktop + `preload="metadata"`; mobile = poster `next/image`.
> I6: `inert` sulle scene non attive (SceneLayer + DesktopWebGL). tsc + 12 test verdi.

### MOBILE

### I1 — Componenti WebGL desktop restano montati su mobile: banda dati e context GPU sprecati
- **File:** `components/sections/home/EsperienzeScroll.tsx:23-25` (+ `components/sections/home/esperienze/DesktopWebGL.tsx:266-341`) e `components/templates/TourDetailEtnaDark.tsx:295-297` (+ `EtnaStagesWebGL.tsx:218-269`)
- **Cosa:** `DesktopWebGL` e `EtnaStagesWebGL` sono dentro `hidden md:block` → su mobile sono `display:none` ma **restano montati**: il loro `useEffect` (gate solo `if (reduce) return`, nessun gate per larghezza) crea un context `webgl2` e fa partire `new Image()` su **tutte** le scene/texture, anche se su mobile l'utente vede `MobileScrollLock`/sticky con immagini sue. Su Etna le texture sono jpeg/png da 2-3.4MB → download raw inutile sul device più debole, sulla piattaforma prioritaria. Vanifica anche il lazy-render di `SceneLayer` (che limitava il payload mobile a ~600KB).
- **Repro:** mobile (no reduced-motion) → home o `/tour/etna-premium` → in Network partono i download della sezione WebGL desktop non visibile.
- **Fix (1 riga):** montare i WebGL solo da `md+` via `useMediaQuery`/`matchMedia` (o `next/dynamic` gated), non con `hidden md:block`.
- **Confidence:** 0.80

### LINK / FUNZIONALITÀ
Nessun link rotto o route inesistente trovato. I due bug funzionali gravi sono i form (C1/C2). ✅ `proxy.ts` è il middleware next-intl corretto (Next 16). ✅ WhatsApp/`tel:`/`mailto` centralizzati in `lib/contact.ts` e coerenti. ✅ `not-found.tsx`/`error.tsx` presenti.

### SEO

### I2 — OG image e Twitter card assenti su 20 pagine su 21
- **File:** tutte le `app/[locale]/*/page.tsx` tranne la home (es. `chi-siamo/page.tsx:29-37`); solo `app/[locale]/page.tsx:41-58` definisce `openGraph.images` + `twitter`.
- **Cosa:** condividendo qualsiasi URL non-home su WhatsApp/Facebook/Instagram/Twitter, l'anteprima è "nuda" (nessuna immagine). Per un cliente locale che acquisisce molto via condivisione su chat/social è CTR perso. La route `/og` supporta già `?title=&locale=` per immagini per-pagina, ma è usata solo dalla home.
- **Fix (1 riga):** in ogni `generateMetadata` non-home aggiungere `openGraph.images=[{url:`/og?title=${encodeURIComponent(title)}&locale=${locale}`,width:1200,height:630}]` + `twitter:{card:'summary_large_image',images:[...]}` (idealmente un helper `buildMetadata` condiviso).
- **Confidence:** 0.95

### PERFORMANCE

### I3 — WebGL Etna scarica ~11MB di immagini RAW bypassando next/image
- **File:** `components/sections/tour-etna/EtnaStagesWebGL.tsx:266-284` (sorgenti in `lib/tours.ts:722-746`)
- **Cosa:** texture caricate con `new Image(); img.src = s.image` puntando ai file raw in `/public` (stage-1 3.5MB, stage-2 2.25MB, stage-3 2.68MB, stage-4 3.17MB ≈ **11.6MB**). Non passa da `/_next/image` → niente AVIF/WebP né resize, nonostante `next.config.ts` (`formats: avif/webp`, `deviceSizes`). Aggravante: il poster LCP a `:415` (`<img src={stages[0].image}>`) e il `background-image` a `:407` puntano allo **stesso** file raw da 3.5MB (doppio download). Impatto su **desktop** (WebGL gated `md:block`).
- **Fix (1 riga):** pre-convertire le stage Etna in WebP ridimensionate (~max 1920px, <300KB) e puntare il WebGL/poster a quelle.
- **Confidence:** 0.92 *(declassato da CRITICO: la pagina resta sul poster finché carica, nessuna rottura funzionale)*

### I4 — Preload di `dolce-vita.webp` iniettato su OGNI pagina (layout condiviso)
- **File:** `app/[locale]/layout.tsx:74-79`
- **Cosa:** `<link rel="preload" as="image" href="/images/home/dolce-vita.webp" fetchPriority="high">` nel `<head>` del LocaleLayout → emesso su tutte le route (contatti, servizi, transfer, ncc…) dove l'immagine non è mai usata. È la prima scena Esperienze della **home** (sotto la piega), quindi anche in home compete a priorità alta con l'LCP reale (`hero.jpeg`). Su mobile/3G sottrae banda all'hero.
- **Fix (1 riga):** spostare il preload nella sola home e abbassarlo a priorità normale (o rimuoverlo, affidandosi a `priority` sull'`<Image>` della prima scena).
- **Confidence:** 0.85

### I5 — Video hero Etna: autoplay + `preload="auto"` + poster raw 2.7MB above-the-fold
- **File:** `components/templates/TourDetailEtnaDark.tsx:55-66`
- **Cosa:** `<video src="…/video-hero.mp4" autoPlay muted loop preload="auto" poster={tour.heroImage}>`. `preload="auto"` forza il download dell'intero MP4 (1.9MB) subito, anche su mobile/3G, in parallelo al poster `hero.jpeg` (2.7MB raw, l'attributo `poster` **non** passa da next/image). Contesa di banda con l'LCP.
- **Fix (1 riga):** `preload="none"` (o `"metadata"`) sul video + poster ottimizzato leggero; valutare di mostrare solo il poster su mobile.
- **Confidence:** 0.72

### ACCESSIBILITÀ

### I6 — Link focusabili dentro contenitori `aria-hidden` nelle scene Esperienze
- **File:** `components/sections/home/esperienze/SceneLayer.tsx:43-56, 105-118` (montati da `MobileScrollLock.tsx:184-195` e `DesktopSticky.tsx:38`)
- **Cosa:** ogni `SceneLayer` rende sempre i 2 link CTA ("Scopri il tour", "WhatsApp") anche per le scene non attive, che hanno `aria-hidden={!active}` + `pointer-events:none`. Ma `aria-hidden` **non** toglie i link dal tab order: con 5 scene impilate, l'utente da tastiera tabba attraverso ~8 link invisibili e inerti. Viola WCAG 4.1.2 e 2.4.3.
- **Fix (1 riga):** aggiungere `inert` (o `tabIndex={-1}` su entrambi i Link) al wrapper scena quando `!active`.
- **Confidence:** 0.85

---

## 🟡 MINORE — difetti contenuti

| ID | File:riga | Problema | Fix |
|----|-----------|----------|-----|
| MOB-01 | `ContactForm.tsx:77,90,103,130`; `WeddingForm.tsx:76`; `HeroQuickQuote.tsx:42,53` | Input a 14-15px → iOS Safari zooma in focus | Portare gli input a ≥16px su mobile (`text-[16px]`, eventuale 15px solo da `sm:`) |
| MOB-02 | `ContactForm.tsx:85-91`; `WeddingForm.tsx:177,188` | Campi tel/email senza `inputMode`/`autoComplete` → tastiera non ottimale, niente autofill | `inputMode="tel" autoComplete="tel"` su phone, `autoComplete="email"`, `autoComplete="name"` |
| MOB-05 | `Navbar.tsx:66-76` | Icona Instagram tap target 32px (sotto 44px), visibile su mobile | `w-11 h-11` con icona centrata (estendere hit area) |
| MOB-06 | `MobileMenu.tsx:55-70`; `LanguageSwitcher.tsx:31-59` | Hamburger 40px + bottoni IT/EN senza padding → bersagli minuscoli | `px-2 py-2` ai bottoni lingua, hamburger `w-11 h-11` |
| SEO-02 | `app/[locale]/privacy/page.tsx:54-59` | Breadcrumb JSON-LD usa URL `/it` (redirect) sotto `as-needed`; unica pagina col breadcrumb costruito a mano | Usare prefix coerente (`/` per IT) come `getBreadcrumb()` |
| SEO-03 | `lib/schema.tsx:117-122` | `aggregateRating` (4.9/32) senza array `review`/`itemReviewed` → stelline rich-result a rischio | Aggiungere 2-3 `review` reali o rimuovere `aggregateRating` affidandosi al GBP via `sameAs` |
| SEO-04 | `app/[locale]/wedding/page.tsx:62-69` | Gallery wedding (pagina indicizzabile, priority 0.9) usa 6 immagini Unsplash placeholder, alt generico `Wedding Sicilia N` | Foto reali cliente + alt descrittivi con luogo |
| PERF-03 | `DesktopWebGL.tsx:6` | `twgl.js` import statico → nel bundle home anche su mobile dove non gira | `next/dynamic(() => import('./esperienze/DesktopWebGL'),{ssr:false})` |
| PERF-05 | `TourDetailEtnaDark.tsx:311-320` | Etna mobile monta tutte le 4 `EtnaStageImage` senza gating di distanza (la home invece limita a ±1) | Applicare il gating `±1` di `SceneLayer` |
| PERF-06 | `public/images/tour-etna/video-hero2.mp4` | Asset morto 3.3MB non referenziato (gonfia il deploy) | Rimuovere il file |
| A11Y-02 | `ServicesTabs.tsx:45-69` | `role="tablist"` senza navigazione frecce ArrowLeft/Right né roving tabindex | `onKeyDown` per le frecce + `tabIndex={isActive?0:-1}` + `tabIndex={0}` sul tabpanel |
| A11Y-04 | `components/ui/sheet.tsx:75` | X di chiusura drawer ha `sr-only "Close"` hardcoded → in IT lo screen reader dice "Close" (esiste `closeAria`="Chiudi") | Passare `aria-label={t('closeAria')}` localizzato |
| A11Y-05 | `DesktopNav.tsx:58-88` | Dropdown Tour apre su focus ma non chiude con Esc né su blur | `onKeyDown` Escape → `setTourOpen(false)` + `onBlur` del wrapper |

---

## ✅ Verificati e SCARTATI (falsi positivi smentiti dalla verifica adversariale)

- **MOB-03 — WhatsAppFloat/CookieBanner senza `safe-area-inset-bottom`.** Smentito: il sito non dichiara `viewport-fit=cover`, quindi `env(safe-area-inset-bottom)` vale 0 e il browser inset-a già gli elementi fixed sopra l'home indicator. Nessun mis-tap reale. (Hardening opzionale, non bug.)
- **A11Y-03 — input HeroQuickQuote senza focus visibile.** Smentito: `focus:outline-none` di Tailwind sopprime solo l'`outline`, ma la regola globale `*:focus-visible` in `globals.css:198-203` applica anche un `box-shadow: 0 0 0 5px var(--canvas)` (cream) che **sopravvive** e resta ben visibile sul fondo scuro dell'hero.
- **A11Y-06 — scroll cue hero sotto contrasto AA.** Smentito: la cue è ancorata in fondo (`flex-1` spacer + `pb-12/16`), nella zona `to-black/70` del gradiente (la più scura). Contrasto effettivo ~5.4:1 → passa AA.

---

## Note di metodo
- ✅ `proxy.ts` = middleware next-intl corretto in Next 16 (non un bug).
- ✅ Contatti centralizzati in `lib/contact.ts`, numero WhatsApp/tel coerenti ovunque.
- ✅ Routing `as-needed` (IT senza prefisso) + `localeDetection:false` corretti per SEO.
- Le issue WebGL/Etna (I3, I5, PERF-05) impattano soprattutto **desktop** (gated `md:block`); l'eccezione mobile-critica è **I1** (componenti montati ma nascosti che scaricano comunque).
- I form (C1/C2) restano i soli difetti che fanno perdere conversioni: vanno risolti prima del go-live indipendentemente dal resto.
