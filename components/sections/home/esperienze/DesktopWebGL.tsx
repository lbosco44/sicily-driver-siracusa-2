'use client';

import {useRef, useState, useEffect} from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {useReducedMotion, useScroll, useMotionValueEvent} from 'motion/react';
import * as twgl from 'twgl.js';
import {Link} from '@/i18n/navigation';
import {ESPERIENZE, N} from './data';
import {DesktopSticky} from './DesktopSticky';

// Tuning della sezione (svh).
// ENTRY_VH = altezza fase di ingresso. Il frame SDF "rotola" dall'alto con
//            chromatic aberration max durante questa fase. Pattern AndAgain.
// SLIDE_VH = altezza per ogni passaggio di scena. Piu' alto = scroll piu'
//            "burroso", piu' tempo per percepire il wipe lateral pieghevole.
const ENTRY_VH = 100;
const SLIDE_VH = 220;
const TOTAL_VH = ENTRY_VH + N * SLIDE_VH;

// Frame dello "schermo" interno con corner rotondi (SDF).
// L'immagine sta dentro un rettangolo arrotondato, lo spazio fuori e' nero
// (letterbox del shader). Il wipe orizzontale + chromatic edge avviene DENTRO
// questo frame, replicando l'effetto "rolling/folded" del sito di riferimento.
const FRAME_PADDING_X_RATIO = 0.04; // 4% di larghezza per lato
const FRAME_PADDING_Y_TOP = 80; // pixel
const FRAME_PADDING_Y_BOTTOM = 80; // pixel (era 160 col counter, ora simmetrico)
const CORNER_RADIUS = 20; // pixel

const VS = `#version 300 es
in vec2 position;
in vec2 texcoord;
out vec2 uv;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
  uv = texcoord;
}`;

const FS = `#version 300 es
precision highp float;

out vec4 outColor;
in vec2 uv;

uniform vec2 resolution;
uniform sampler2D fromImage;
uniform sampler2D toImage;
uniform vec2 fromResolution;
uniform vec2 toResolution;
uniform float transitionProgress;
uniform float bow;
uniform float momentum;
uniform float edgeIntensity;

uniform float paddingX;
uniform float paddingTop;
uniform float paddingBottom;
uniform float yOffset;
uniform float cornerRadius;

const mat3 matrixQuadBez = mat3(
  1.0, -2.0, 1.0,
  0.0,  2.0,-2.0,
  0.0,  0.0, 1.0
);

float bezier(float T, float intensity) {
  vec3 powerSeries = vec3(1.0, T, T * T);
  vec3 controlPoints = vec3(0.0, intensity, 0.0);
  return dot(powerSeries * matrixQuadBez, controlPoints);
}

vec2 computeUV(vec2 uv, float k, float kcube) {
  vec2 t = uv - 0.5;
  float r2 = t.y * t.y;
  float f = 1.0 + r2 * (k + kcube * sqrt(r2));
  return f * t + 0.5;
}

vec2 coverUv(vec2 uv, vec2 texRes, vec2 targetRes) {
  float texAspect = texRes.x / texRes.y;
  float tgtAspect = targetRes.x / targetRes.y;
  vec2 uvOffset = vec2(0.0);
  vec2 uvScale = vec2(1.0);
  if (texAspect > tgtAspect) {
    float scale = tgtAspect / texAspect;
    uvOffset = vec2((1.0 - scale) * 0.5, 0.0);
    uvScale = vec2(scale, 1.0);
  } else {
    float scale = texAspect / tgtAspect;
    uvOffset = vec2(0.0, (1.0 - scale) * 0.5);
    uvScale = vec2(1.0, scale);
  }
  return uv * uvScale + uvOffset;
}

vec2 brownConrady(vec2 uv, float k1, float k2) {
  uv = uv * 2.0 - 1.0;
  float r2 = dot(uv, uv);
  uv *= 1.0 + k1 * r2 + k2 * r2 * r2;
  return uv * 0.5 + 0.5;
}

vec2 barrelEdge(vec2 uv) {
  float k = 0.18 * momentum;
  uv = brownConrady(uv, k, k);
  float scale = abs(k) < 1.0 ? 1.0 - abs(k) : 1.0 / (k + 1.0);
  return uv * scale - (scale * 0.5) + 0.5;
}

float roundedBoxSDF(vec2 p, vec2 b, float r) {
  return length(max(abs(p) - b + r, 0.0)) - r;
}

vec4 wipeSample(vec2 innerUv, vec2 frameSize) {
  // bezier-bowed wipe sulla coordinata X interna al frame.
  // isNew=0 → vediamo fromCol (scena corrente). isNew=1 → vediamo toCol (scena nuova).
  // Il "1.0 - smoothstep" inverte la semantica: a progress=0 isNew=0 dappertutto
  // (mostra fromCol pienamente, la scena corrente), a progress=1 isNew=1 ovunque
  // (mostra toCol, la scena nuova). Il wipe sweep da SX a DX rivela il nuovo.
  float threshold = transitionProgress;
  float curved = innerUv.x + bezier(innerUv.y, bow / 3.0);
  float isNew = 1.0 - smoothstep(threshold - 0.0005, threshold + 0.0005, curved);

  // object-fit: cover dentro il frame
  vec2 uvFrom = coverUv(innerUv, fromResolution, frameSize);
  vec2 uvTo   = coverUv(innerUv, toResolution,   frameSize);

  vec4 fromCol = texture(fromImage, uvFrom);
  vec4 toCol   = texture(toImage,   uvTo);

  return mix(fromCol, toCol, isNew);
}

vec4 roundedFrame(vec2 uv) {
  vec2 fragCoord = uv * resolution;
  vec2 frameSize = vec2(resolution.x - paddingX * 2.0, resolution.y - paddingTop - paddingBottom);
  vec2 frameOrigin = vec2(paddingX, paddingTop + yOffset);

  // SDF distance dal bordo del frame
  vec2 center = frameOrigin + frameSize * 0.5;
  float dist = roundedBoxSDF(fragCoord - center, frameSize * 0.5, cornerRadius);
  float alpha = 1.0 - smoothstep(0.0, 1.0, dist);

  // UV interna al frame, 0..1
  vec2 innerUv = (fragCoord - frameOrigin) / frameSize;

  vec4 framedImage = wipeSample(innerUv, frameSize);
  vec4 outsideColor = vec4(0.0, 0.0, 0.0, 1.0); // nero attorno al frame
  return mix(outsideColor, framedImage, alpha);
}

vec4 chromatic(vec2 uv) {
  float k = -1.5 * edgeIntensity;
  float kcube = 0.5 * edgeIntensity;
  float off = 0.1 * edgeIntensity;
  float r = roundedFrame(computeUV(uv, k + off, kcube)).r;
  float g = roundedFrame(computeUV(uv, k,       kcube)).g;
  float b = roundedFrame(computeUV(uv, k - off, kcube)).b;
  return vec4(r, g, b, 1.0);
}

void main() {
  outColor = chromatic(barrelEdge(uv));
}`;

type LoadedTex = {texture: WebGLTexture; w: number; h: number};

export function DesktopWebGL() {
  const t = useTranslations('Home.esperienze');
  const tCommon = useTranslations('NccPage');
  const reduce = useReducedMotion();

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [ready, setReady] = useState(false);

  // entryProgress: 0..1 durante la fase iniziale (rect scende dall'alto)
  // slideProgress: 0..N-1 continuo durante le scene
  const entryProgressRef = useRef(0);
  const slideProgressRef = useRef(0);
  const momentumRef = useRef(0);
  const lastSlideProgressRef = useRef(0);

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (ENTRY_VH > 0) {
      const entryFraction = ENTRY_VH / TOTAL_VH;
      const slidesFraction = 1 - entryFraction;

      if (latest <= entryFraction) {
        // fase di entrata (rect SDF scende dall'alto)
        entryProgressRef.current = latest / entryFraction;
        slideProgressRef.current = 0;
        setActiveIndex((prev) => (prev === 0 ? prev : 0));
        return;
      }
      entryProgressRef.current = 1;
      const slideRange = (latest - entryFraction) / slidesFraction;
      const p = Math.max(0, Math.min(N - 1, slideRange * N));
      slideProgressRef.current = p;
    } else {
      // Niente entry: frame sempre in posizione, scroll mappa direttamente
      // sull'avanzamento scene.
      entryProgressRef.current = 1;
      const p = Math.max(0, Math.min(N - 1, latest * N));
      slideProgressRef.current = p;
    }
    // Math.round invece di Math.floor: il testo crossfade al midpoint del wipe
    // (p=0.5, 1.5, 2.5, 3.5) invece che all'inizio (p=0, 1, 2, 3). Visivamente
    // il testo nuovo appare quando l'utente "ha scrollato attraverso" la scena
    // precedente, allineato al momento in cui il wipe ha rivelato circa meta'
    // della scena nuova.
    const idx = Math.min(Math.round(slideProgressRef.current), N - 1);
    setActiveIndex((prev) => (prev === idx ? prev : idx));
  });

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', {antialias: true, alpha: false});
    if (!gl) {
      console.warn('[DesktopWebGL] WebGL2 non disponibile, fallback opacity');
      return;
    }

    const programInfo = twgl.createProgramInfo(gl, [VS, FS]);
    const bufferInfo = twgl.createBufferInfoFromArrays(gl, {
      position: {
        numComponents: 2,
        data: [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]
      },
      texcoord: {
        numComponents: 2,
        data: [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0]
      }
    });

    const dpr = window.devicePixelRatio === 3 ? 2 : 1;

    function resize() {
      if (!canvas || !gl) return;
      const w = canvas.clientWidth * dpr;
      const h = canvas.clientHeight * dpr;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const textures: LoadedTex[] = new Array(N);
    let loadedCount = 0;
    let cancelled = false;

    ESPERIENZE.forEach((e, i) => {
      const img = new window.Image();
      img.crossOrigin = 'anonymous';
      img.src = e.image;
      img.onload = () => {
        if (cancelled) return;
        const tex = twgl.createTexture(gl, {
          src: img,
          minMag: gl.LINEAR,
          wrap: gl.CLAMP_TO_EDGE,
          auto: false
        });
        textures[i] = {texture: tex, w: img.naturalWidth, h: img.naturalHeight};
        loadedCount++;
        if (loadedCount === N) setReady(true);
      };
      img.onerror = () => {
        console.warn(`[DesktopWebGL] image load failed: ${e.image}`);
      };
    });

    gl.useProgram(programInfo.program);
    twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);

    let rafId = 0;
    let running = false;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!running) {
              running = true;
              tick();
            }
          } else {
            running = false;
            cancelAnimationFrame(rafId);
          }
        }
      },
      {threshold: 0}
    );
    io.observe(containerRef.current!);

    function tick() {
      if (!running || !gl || cancelled) return;
      rafId = requestAnimationFrame(tick);

      if (loadedCount < N) return;

      const p = slideProgressRef.current;
      const entry = entryProgressRef.current;

      // idx cappato a N-1 (non N-2): cosi' all'ultima scena (p=N-1)
      // idx=N-1, fromTex=textures[N-1], toTex=textures[min(N, N-1)]=textures[N-1]
      // (stessa textura). Lo shader mix(barocco, barocco, frac) ritorna barocco
      // indipendentemente da frac. Niente edge case che ribalta a fromTex
      // sbagliato come succedeva con cap a N-2.
      const idx = Math.min(Math.floor(p), N - 1);
      const fracRaw = p - idx;
      const frac = Math.min(1, Math.max(0, fracRaw));

      // momentum reagisce sia allo scroll dello slide-progress che all'entry-progress
      const slideDelta = Math.abs(p - lastSlideProgressRef.current);
      momentumRef.current += slideDelta * 2.5;
      lastSlideProgressRef.current = p;

      // boost di curvatura durante l'entry: piu' forte quando entryProgress e' lontano da 1
      const entryBow = (1 - entry) * 1.4;

      const fromTex = textures[idx];
      const toTex = textures[Math.min(idx + 1, N - 1)];
      if (!fromTex || !toTex) return;

      const W = canvas!.width;
      const H = canvas!.height;
      const paddingX_px = W * FRAME_PADDING_X_RATIO;
      const paddingTop_px = FRAME_PADDING_Y_TOP * dpr;
      const paddingBottom_px = FRAME_PADDING_Y_BOTTOM * dpr;

      // yOffset: durante entry il frame scende dall'alto. -H * (1 - entry).
      const yOffset_px = -H * (1 - entry);

      const entryEdge = (1 - entry) * 0.7; // chromatic max su entry
      const totalMomentum = momentumRef.current + entryBow;

      gl.viewport(0, 0, W, H);
      twgl.setUniforms(programInfo, {
        resolution: [W, H],
        fromImage: fromTex.texture,
        toImage: toTex.texture,
        fromResolution: [fromTex.w, fromTex.h],
        toResolution: [toTex.w, toTex.h],
        transitionProgress: frac,
        bow: 0.5 - frac,
        momentum: totalMomentum,
        edgeIntensity: Math.min(0.7, entryEdge + momentumRef.current * 0.35),
        paddingX: paddingX_px,
        paddingTop: paddingTop_px,
        paddingBottom: paddingBottom_px,
        yOffset: yOffset_px,
        cornerRadius: CORNER_RADIUS * dpr
      });
      twgl.drawBufferInfo(gl, bufferInfo);

      // damp momentum 20% per frame
      momentumRef.current += (0 - momentumRef.current) * 0.2;
    }

    return () => {
      cancelled = true;
      running = false;
      cancelAnimationFrame(rafId);
      ro.disconnect();
      io.disconnect();
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [reduce]);

  // Fallback prefers-reduced-motion → riusa il DesktopSticky originale
  if (reduce) return <DesktopSticky />;

  // Layout del frame in CSS (deve combaciare con il shader)
  // paddingX = 4% di larghezza, top 80px, bottom 160px
  const frameInsetStyle = {
    top: `${FRAME_PADDING_Y_TOP}px`,
    bottom: `${FRAME_PADDING_Y_BOTTOM}px`,
    left: `${FRAME_PADDING_X_RATIO * 100}%`,
    right: `${FRAME_PADDING_X_RATIO * 100}%`
  } as const;

  return (
    <div
      ref={containerRef}
      style={{height: `${TOTAL_VH}svh`}}
      className="relative bg-black"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Fallback image: posizionato DENTRO il frame inset, dietro il canvas.
            Plain <Image> con `fill` su un parent relative (matchando esattamente
            l'inset dove il canvas dipingera' il frame SDF). Resta visibile
            mentre le 5 textures WebGL caricano (canvas opacity 0). Quando il
            canvas diventa ready, lo copre con opacity 1 + l'animazione di
            entry rolling prende il sopravvento.
            Fuori dal frame: spazio nero (bg-black del container) = letterbox
            del shader, coerente con il rendering finale. */}
        <div
          className="absolute pointer-events-none overflow-hidden"
          style={{
            top: `${FRAME_PADDING_Y_TOP}px`,
            bottom: `${FRAME_PADDING_Y_BOTTOM}px`,
            left: `${FRAME_PADDING_X_RATIO * 100}%`,
            right: `${FRAME_PADDING_X_RATIO * 100}%`,
            borderRadius: `${CORNER_RADIUS}px`,
            opacity: ready ? 0 : 1,
            transition: 'opacity 400ms ease-out'
          }}
          aria-hidden="true"
        >
          <Image
            src={ESPERIENZE[0].image}
            alt=""
            fill
            priority
            sizes="92vw"
            quality={80}
            className="object-cover"
            style={{
              filter: 'saturate(0.88) brightness(0.82) contrast(1.06)'
            }}
          />
          <div className="absolute inset-0 atmo-overlay-dark" />
        </div>

        {/* WebGL canvas: il fondo nero dello shader fa da letterbox */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block"
          style={{
            opacity: ready ? 1 : 0,
            transition: 'opacity 400ms ease-out'
          }}
          aria-hidden="true"
        />

        {/* Eyebrow top-left */}
        <div className="absolute top-8 sm:top-10 inset-x-0 z-20 pointer-events-none">
          <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
            <p className="eyebrow text-cream-on-dark/85">{t('eyebrow')}</p>
          </div>
        </div>

        {/* Frame-aligned text overlays (scene text) */}
        <div className="absolute z-10 pointer-events-none" style={frameInsetStyle}>
          {/* atmo overlay scuro dentro al frame, per leggibilita' del testo */}
          <div
            className="absolute inset-0 atmo-overlay-dark"
            style={{borderRadius: `${CORNER_RADIUS}px`}}
          />

          {ESPERIENZE.map((e, i) => {
            const active = activeIndex === i;
            // Override e.align: il cliente vuole TUTTI i testi sulla sinistra
            // (data.ts mantiene il campo align per il mobile/altri usi futuri,
            // ma qui forziamo left). Niente piu' alternanza desktra/sinistra.
            return (
              <div
                key={e.key}
                className="absolute inset-0 flex flex-col justify-end items-start text-left px-8 sm:px-12 lg:px-20 pb-20 sm:pb-28 lg:pb-32"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active ? 'translateY(0)' : 'translateY(2%)',
                  transition:
                    'opacity 400ms cubic-bezier(0.16, 1, 0.3, 1), transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                  willChange: 'opacity, transform'
                }}
                aria-hidden={!active}
              >
                <div
                  style={{maxWidth: 'min(520px, 80%)'}}
                  className="pointer-events-auto"
                >
                  <h2
                    className="hero-headline font-display text-display-md sm:text-display-lg font-medium text-cream-on-dark whitespace-pre-line"
                    style={{
                      fontStretch: '92%',
                      textShadow: '0 2px 18px rgba(0,0,0,0.4)'
                    }}
                  >
                    {t(`card${e.key}Title`)}
                  </h2>
                  <p className="mt-5 max-w-[36ch] text-[16px] sm:text-[18px] text-cream-on-dark/90 leading-[1.55]">
                    {t(`card${e.key}Body`)}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3 justify-start">
                    <Link
                      href={e.href}
                      className="inline-flex items-center gap-3 rounded-full bg-cream-on-dark px-6 py-2.5 text-[12px] uppercase tracking-[0.16em] font-medium text-primary-deep hover:bg-cream-soft transition-colors"
                    >
                      {tCommon('ctaDiscoverTour')}
                      <span aria-hidden="true">→</span>
                    </Link>
                    <Link
                      href="/contatti"
                      className="inline-flex items-center gap-3 rounded-full border border-cream-on-dark/50 px-6 py-2.5 text-[12px] uppercase tracking-[0.16em] font-medium text-cream-on-dark hover:bg-cream-on-dark/10 hover:border-cream-on-dark transition-colors"
                    >
                      {tCommon('ctaWhatsApp')}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
