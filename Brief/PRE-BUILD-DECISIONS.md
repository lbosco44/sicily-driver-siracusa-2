# PRE-BUILD-DECISIONS.md — Sicily Driver Siracusa

> Compilato da `/office-hours` (scoping forzato) il 2026-05-21.
> Fissa le decisioni operative prima della build per evitare deriva.

## Scoping

| # | Domanda | Decisione |
|---|---|---|
| 1 | Pagina di partenza | **Home single-scroll** con tutte le 8 sezioni (hero → servizi → dove ti portiamo → atelier → processo → tappe tour preview → testimonial → contatti) |
| 2 | Asset disponibili | **Niente pronto** → placeholder + stock temporaneo + wordmark Cormorant come logo fallback. Annotato in TODO per sostituzione pre-deploy |
| 3 | WhatsApp persistente bottom-right | **+39 375 641 3379** (`wa.me/393756413379`) |
| 4 | Form contatti backend | **Toast/alert + console.log** (default Nexus, no backend reale). Resend e route handler differiti a Phase 2 |
| 5 | Sezione Contatti / mappa | **Foto statica desaturata + lista indirizzi tipografica** (no Mapbox, no Google embed, no token, max performance) |
| 6 | Strategia bilinguismo IT/EN | **next-intl + middleware**, routing `[locale]/` con default IT, switcher top-right |

## Implicazioni tecniche

### Struttura cartelle App Router

```
app/
├── [locale]/
│   ├── layout.tsx          (BaseLayout con navbar + footer + WhatsApp persistente)
│   ├── page.tsx            (home single-scroll)
│   ├── ncc-[city]/
│   │   └── page.tsx        (4 pagine geo Cluster Fast)
│   ├── servizi/page.tsx
│   ├── chi-siamo/page.tsx
│   ├── contatti/page.tsx
│   ├── tour-[slug]/
│   │   └── page.tsx        (Cluster Esperienziale)
│   └── wedding-eventi/page.tsx
├── api/
│   └── contact/route.ts    (DIFFERITO — placeholder per Phase 2)
└── layout.tsx              (root layout, font preload, theme provider)

messages/
├── it.json
└── en.json

middleware.ts               (next-intl routing + i18n redirect)
```

### Setup obbligatorio Phase 1 (prima dei componenti)

1. `pnpm add next-intl`
2. `app/[locale]/layout.tsx` con `NextIntlClientProvider`
3. `middleware.ts` con `createMiddleware` di next-intl
4. `i18n.ts` config con locales IT/EN, default IT
5. Font loading via `next/font/google`:
   - Cormorant Garamond (pesi 400/500/600 + italic 400/500)
   - DM Sans (pesi 300/400/500/600)
6. `app/globals.css` con CSS variables palette Calce e Mare:
   ```css
   :root {
     --canvas: #F5EFE4;
     --ink: #2A2520;
     --primary: #1E3A4F;
     --accent: #E07856;
     --accent-hover: #C76A4A;
     --secondary: #8B9B8E;
     --border: #E8DFD0;
     --muted-bg: #EDE5D6;
   }
   ```
7. `tailwind.config.ts` (o `@theme` in Tailwind v4) mappa i token sopra
8. Componente `<WhatsAppFloat />` con numero hardcoded `393756413379`
9. Componente `<LanguageSwitcher />` IT/EN top-right

### Redirect 301 in `next.config.ts`

22 redirect totali (8 driver-* IT + EN + altri legacy `.php` da `01b-Copy da preservare aggiornato.md`). Da configurare PRIMA del deploy.

### Placeholder asset

Per la build iniziale userò:
- Foto destinazioni: Unsplash CC0 (Catania, Noto, Taormina, Ragusa) — annotate in `TODO-ASSETS.md`
- Foto auto/interni: stock Unsplash temporanee
- Logo: wordmark Cormorant Garamond italic "*Sicily Driver Siracusa*" (no SVG custom)
- Video loop Cluster Esperienziale: SOSTITUITO da foto statiche di alta qualità con leggero darken overlay finché il cliente non fornisce il video Kling/Veo

Tutti gli asset placeholder saranno marcati con commento `{/* TODO: replace with client asset */}` accanto.

## Vincoli ereditati dal DESIGN.md (Scelte concrete approvate)

- Palette **Calce e Mare** (cream + blu mare + terracotta + verde ulivo)
- Tipografia **Cormorant Garamond + DM Sans**
- Energia CTA **Pillola terracotta piena**
- Layout servizi **Asimmetrico editorial magazine**
- Layout tappe tour **Full-bleed cinematic con testo overlay**
- Layout testimonial **Quote singola dominante con switcher 01/02/03**
- 10 vincoli operativi nella sezione "Note per la build" del DESIGN.md

## Sequenza build approvata

1. ✅ Scoping pre-build (questo file)
2. ⏭️ Setup tecnico globale (next-intl, font, theme tokens, BaseLayout, Navbar, Footer, WhatsAppFloat, LanguageSwitcher)
3. ⏭️ Home single-scroll IT (8 sezioni in ordine WIREFRAME.md)
4. ⏭️ Review Playwright multi-device (375 / 768 / 1280)
5. ⏭️ Replica home EN
6. ⏭️ Pagine secondarie (NCC città → servizi → chi-siamo → contatti → tour-*)
7. ⏭️ Redirect 301 in next.config.ts
8. ⏭️ Sub-agents finali: web-vitals-optimizer + web-accessibility-checker + seo-specialist
9. ⏭️ Deploy Vercel preview + design-review URL live
10. ⏭️ Cutover DNS ncctaxisiracusa.com

## Da chiedere al cliente prima del deploy

- [ ] Foto reali Catania/Noto/Taormina/Ragusa (4–6 per destinazione)
- [ ] Foto interni Mercedes desaturate (3–5)
- [ ] Foto team Sicily Driver (chi-siamo)
- [ ] Logo SVG ufficiale (se esiste) — altrimenti il wordmark Cormorant resta definitivo
- [ ] Video loop hero 10s per pagine tour (encoding Video Bible)
- [ ] Conferma testi `[POLISH]` e `[NEW]` del `01b-Copy da preservare aggiornato.md`
- [ ] Email destinazione per form contatti (Phase 2 Resend)
- [ ] Accesso Search Console per migrazione 301
- [ ] Accesso DNS Aruba per cutover
