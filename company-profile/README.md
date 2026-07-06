# Sicily Driver Siracusa — Company Profile

Quattro brochure PDF di presentazione aziendale, due pubblici × due lingue.

| File | Pubblico | Lingua | Pagine |
|---|---|---|---|
| `privati-it.pdf` | Viaggiatori / clienti privati | IT | 8 |
| `privati-en.pdf` | Travellers | EN | 8 |
| `partner-it.pdf` | Partner B2B (hotel, agenzie, wedding planner, aziende) | IT | 7 |
| `partner-en.pdf` | Partners B2B | EN | 7 |

## Contenuti
Tutti i testi, le foto, i loghi partner e le recensioni sono **reali**, presi dal
sito (`messages/*.json`, `lib/tours.ts`, `lib/schema.tsx`, `lib/wedding.ts`) e da
`public/images`. Nessun dato inventato: 4,9★/32 recensioni Google, flotta Mercedes
(Classe V / GLB Premium / Classe E), 3 sedi (Siracusa, Noto, Marzamemi), fondatore
Vincenzo Izzo, P. IVA IT02150600894, contatti reali.

- **Privati/Turisti**: manifesto → 5 esperienze (con listino) → mare/vulcano →
  a bordo (flotta) → i luoghi (mosaico polaroid) → recensioni → contatti.
- **Partner**: chi siamo + numeri → cosa offriamo (4 aree) → flotta → copertura
  territoriale + sedi → loghi partner reali (Benanti, Palmeri, Gambino, Fratelli
  Burgio, Bam Bar, OrtySuite) → contatti (con PEC).

## Come sono fatti
- Sorgente: `*.html` + `profile.css` (font Fraunces + Archivo via Google Fonts).
- Immagini ottimizzate in `_img/` (da `public/`, max 1600px, JPG/PNG) — cartella
  generata, non versionata.
- PDF renderizzati con Chrome headless.

## Rigenerare i PDF
Da un server statico sulla root del repo (le immagini stanno in `_img/` relativo):
```bash
# 1) server statico sulla root del worktree (porta 8099)
node server.js "<root-worktree>" 8099 &
# 2) per ogni file:
"C:/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu \
  --no-pdf-header-footer --virtual-time-budget=15000 \
  --print-to-pdf="privati-it.pdf" "http://localhost:8099/company-profile/privati-it.html"
```
Se cambiano dati (prezzi, recensioni, contatti): modificare l'HTML e rirenderizzare.
Per rigenerare `_img/` dopo aver aggiunto foto: script `build-img.mjs` (sharp).
