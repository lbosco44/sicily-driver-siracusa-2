# Teardown: andagain.uk (sezione tour orizzontale con effetto rolling)

## Risposta secca alle domande del cliente

| Domanda | Risposta |
|---|---|
| Vertex o fragment shader? | **Fragment** (Pixi.js filter pattern). Vertex usa il default Pixi `projectionMatrix * translationMatrix * aVertexPosition` — solo passa la geometry alla rasterizzazione. |
| Scroll-linked o IntersectionObserver? | **Scroll-linked** via `window.scrollY` + `requestAnimationFrame`. C'è anche un'EASING/LERP custom con `performance.now()` per smoothing (effetto "burroso"). NON usa Lenis o GSAP ScrollTrigger. |
| Uniforms passate? | Pixi.js standard (`projectionMatrix`, `translationMatrix`, `uSampler`, `inputClamp`, `outputFrame`). Il custom è gestito tramite **`PIXI.DisplacementFilter`** (nota in bundle: `DisplacementFilter:JC`). |
| Tipo di trasformazione? | **DisplacementFilter** di Pixi con texture displacement map. NON è barrel, page-curl o fold dedicato — è una displacement map UV. Il "rolling" che si vede ai bordi durante lo scroll è dato dalla **velocità di scroll** che modula l'intensità del displacement + chromatic aberration sui canali RGB. |
| Sticky scroll container structure? | `<section style="height:900vh">` — NOVECENTO viewport heights di scroll. Dentro: un canvas sticky che resta fisso al top mentre il container scorre. |
| Altezza in svh? | **900vh** (la nostra è 1200svh, comparabile) |
| Sorgenti immagini o video? | **VIDEO MP4**, non immagini. 6+ video loop muti playsinline, host `video.andagain.uk`, dim 1920×1080. Es: `<video crossOrigin="anonymous" src="https://video.andagain.uk/4fde9d7c69e4f9caca96116e56a01cef528e31d6.mp4" muted playsinline loop>`. |

## Implicazione critica

**AndAgain usa Pixi.js + DisplacementFilter + texture VIDEO.** Il loro stack:
- `pixi.js` (642KB di bundle JS) → libreria 2D WebGL ad alto livello
- `DisplacementFilter` built-in di Pixi → applica una displacement map UV alla scena
- 6+ `<video>` come sorgenti di texture (non immagini statiche)
- Custom scroll loop con LERP via `performance.now()` per smoothing

## Differenze strutturali dal nostro DesktopWebGL.tsx

| Aspetto | AndAgain | Il nostro (`DesktopWebGL.tsx`) |
|---|---|---|
| Engine | Pixi.js (high-level) | twgl.js + raw WebGL2 shader custom |
| Source | `<video>` con frame texture | `<img>` con static PNG |
| Filter | `DisplacementFilter` built-in | Custom GLSL (wipe Bezier + brown-conrady barrel + chromatic) |
| Scroll | `window.scrollY` + RAF + LERP smoothing | `useScroll` di motion/react (mapping diretto, no smoothing) |
| Altezza section | 900vh | 1200svh (dopo la mia modifica) |
| Loading gate | Sempre rendering (video frame disponibile sempre) | Canvas opacity 0 finché 5 textures non caricate |

## Causa root del problema "nero durante entrance"

Tre ragioni concrete, ordinate per peso:

1. **Loading gate sul canvas**. Noi gatiamo `canvas opacity = ready ? 1 : 0` dove `ready` diventa true solo dopo che tutte e 5 le PNG sono caricate via `new Image().onload`. AndAgain non ha questo gate — il video element ha la sua texture disponibile fin dal primo frame buffered.

2. **Source statiche vs video**. AndAgain usa video → la texture è sempre disponibile e Pixi può iniziare a renderizzare immediatamente. Noi carichiamo 5 PNG (~2MB ognuna = ~10MB totali) in sequenza prima di permettere al canvas di renderizzare.

3. **`useScroll` di motion/react aspetta che la sezione tocchi `start start`** prima di emettere progress. Prima di quel punto, `scrollYProgress` resta a 0 e il nostro `useMotionValueEvent` non firea aggiornamenti. Il `tick()` gira (perché IntersectionObserver è triggered da `threshold: 0`) ma con `slideProgressRef.current = 0` (valore iniziale) — e nel mio fix attuale entryProgressRef è già 1 (con ENTRY_VH=0). Quindi durante l'entrance il canvas dovrebbe disegnare correttamente la prima scena.

   **Tranne che il canvas è opacity 0 perché ready = false.** E il mio fallback CSS background-image dovrebbe coprire questo caso.

## Cosa è davvero rotto

Se il cliente vede ancora nero dopo il commit `84a27b8`, ci sono due possibilità tecniche:

- **A**: Il fallback CSS background-image non viene applicato per qualche ragione (cache CDN, build error, ordine z-stacking). Verificare aprendo DevTools del browser sul preview e ispezionando il div fallback.
- **B**: L'overlay `atmo-overlay-dark` (gradient da 10% black top → 78% black bottom) combinato col filter `brightness(0.82)` rende la foto Dolce Vita molto scura, e in viewport bottom dove il gradient è più nero, sembra "tutto nero". Soprattutto su display non calibrati.

## Cosa è facilmente replicabile e cosa no

**Easy to reuse**:
- Custom scroll loop con LERP smoothing (`window.scrollY` + `requestAnimationFrame` + ease toward target). Sostituisce `useScroll` di motion/react quando serve smoothness più burrosa.
- Pattern altezza section 900-1200vh con sticky inner

**Reusable with effort**:
- Pixi.js + DisplacementFilter: dovremmo aggiungere `pixi.js` come dipendenza (~640KB), riscrivere il canvas component, fornire una texture di displacement map. Stima: 2-4h di lavoro per replicare l'effetto esatto.

**Out of scope**:
- I video MP4 di AndAgain sono i loro asset. Non possiamo usarli.
- Il custom Sanity backend per orchestrare l'asset loading

## Brand-specific vs generic

- **Brand-specific** (NON copiare): video assets di AndAgain, copy del sito, struttura agenzia
- **Generic** (riusabile): pattern DisplacementFilter con displacement map, sticky+900vh container, scroll LERP smoothing
