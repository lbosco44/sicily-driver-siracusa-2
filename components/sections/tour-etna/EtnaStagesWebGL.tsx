'use client';

import {useRef, useState, useEffect} from 'react';
import {useReducedMotion, useScroll, useMotionValueEvent} from 'motion/react';
import * as twgl from 'twgl.js';
import type {TourContent} from '@/lib/tours';

// EtnaStagesWebGL — variante del DesktopWebGL della homepage, adattata per
// la pagina Tour Etna Premium. Stesso shader (wipe Bezier + barrel +
// chromatic), stessa logic di scroll/LERP, ma renderizza le 5 STAGES del
// tour Etna (con number + duration + title + body) invece delle 5
// esperienze della home.
//
// Cliente 27/05/2026: voleva lo stesso scroll WebGL orizzontale della home
// anche su Etna Premium, mantenendo foto e testi specifici di Etna.
// Testi sempre allineati a sinistra.
//
// Per ridurre duplicazione del codice 600+ righe del DesktopWebGL, ho fatto
// una copia focalizzata che riusa il pattern ma con la prop `stages`.
// La gestione del Mobile rimane delegata al sticky scroll vertical
// esistente nel TourDetailEtnaDark (md:hidden block).

const ENTRY_VH = 0;
const SLIDE_VH = 220;

const FRAME_PADDING_X_RATIO = 0;
const FRAME_PADDING_Y_TOP = 0;
const FRAME_PADDING_Y_BOTTOM = 0;
const CORNER_RADIUS = 0;

const LAVA_GLOW = '#E84B36';
const ETNA_BLACK = '#0A0908';

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
  float k = 0.09 * momentum;
  uv = brownConrady(uv, k, k);
  float scale = abs(k) < 1.0 ? 1.0 - abs(k) : 1.0 / (k + 1.0);
  return uv * scale - (scale * 0.5) + 0.5;
}

float roundedBoxSDF(vec2 p, vec2 b, float r) {
  return length(max(abs(p) - b + r, 0.0)) - r;
}

vec4 wipeSample(vec2 innerUv, vec2 frameSize) {
  float threshold = transitionProgress;
  float curved = innerUv.x + bezier(innerUv.y, bow / 3.0);
  float isNew = 1.0 - smoothstep(threshold - 0.0005, threshold + 0.0005, curved);

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

  vec2 center = frameOrigin + frameSize * 0.5;
  float dist = roundedBoxSDF(fragCoord - center, frameSize * 0.5, cornerRadius);
  float alpha = 1.0 - smoothstep(0.0, 1.0, dist);

  vec2 innerUv = (fragCoord - frameOrigin) / frameSize;

  vec4 framedImage = wipeSample(innerUv, frameSize);
  vec4 outsideColor = vec4(0.0, 0.0, 0.0, 1.0);
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

type EtnaStage = TourContent['stages'][number];

export function EtnaStagesWebGL({
  stages,
  eyebrow
}: {
  stages: readonly EtnaStage[];
  eyebrow: string;
}) {
  const reduce = useReducedMotion();
  const N = stages.length;
  const TOTAL_VH = ENTRY_VH + N * SLIDE_VH;

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasDrawn, setHasDrawn] = useState(false);

  const entryProgressRef = useRef(ENTRY_VH > 0 ? 0 : 1);
  const slideProgressRef = useRef(0);
  const slideSmoothedRef = useRef(0);
  const momentumRef = useRef(0);
  const lastSlideProgressRef = useRef(0);
  const hasDrawnRef = useRef(false);

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (ENTRY_VH > 0) {
      const entryFraction = ENTRY_VH / TOTAL_VH;
      const slidesFraction = 1 - entryFraction;
      if (latest <= entryFraction) {
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
      entryProgressRef.current = 1;
      const p = Math.max(0, Math.min(N - 1, latest * N));
      slideProgressRef.current = p;
    }
    const idx = Math.min(Math.round(slideProgressRef.current), N - 1);
    setActiveIndex((prev) => (prev === idx ? prev : idx));
  });

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', {antialias: true, alpha: true});
    if (!gl) {
      console.warn('[EtnaStagesWebGL] WebGL2 non disponibile');
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

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const dpr = window.devicePixelRatio === 3 ? 2 : 1;

    function resize() {
      if (!canvas || !gl) return;
      const w = canvas.clientWidth * dpr;
      const h = canvas.clientHeight * dpr;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
      }
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const textures: LoadedTex[] = new Array(N);
    let loadedCount = 0;
    let cancelled = false;

    stages.forEach((s, i) => {
      const img = new window.Image();
      img.crossOrigin = 'anonymous';
      img.src = s.image;
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
      };
      img.onerror = () => {
        console.warn(`[EtnaStagesWebGL] image load failed: ${s.image}`);
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

      const LERP_LAMBDA = 0.08;
      slideSmoothedRef.current +=
        (slideProgressRef.current - slideSmoothedRef.current) * LERP_LAMBDA;

      const p = slideSmoothedRef.current;
      const entry = entryProgressRef.current;

      const idx = Math.min(Math.floor(p), N - 1);
      const fracRaw = p - idx;
      const frac = Math.min(1, Math.max(0, fracRaw));

      const slideDelta = Math.abs(p - lastSlideProgressRef.current);
      momentumRef.current += slideDelta * 1.4;
      lastSlideProgressRef.current = p;

      const easeOutEntry = 1.0 - Math.pow(1.0 - entry, 2.5);
      const entryBow = (1.0 - easeOutEntry) * 2.2;

      const fromTex = textures[idx];
      const toTex = textures[Math.min(idx + 1, N - 1)];
      if (!fromTex || !toTex) return;

      const W = canvas!.width;
      const H = canvas!.height;
      const paddingX_px = W * FRAME_PADDING_X_RATIO;
      const paddingTop_px = FRAME_PADDING_Y_TOP * dpr;
      const paddingBottom_px = FRAME_PADDING_Y_BOTTOM * dpr;
      const yOffset_px = 0;

      const entryEdge = (1.0 - easeOutEntry) * 1.1;
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
        edgeIntensity: Math.min(0.4, entryEdge + momentumRef.current * 0.2),
        paddingX: paddingX_px,
        paddingTop: paddingTop_px,
        paddingBottom: paddingBottom_px,
        yOffset: yOffset_px,
        cornerRadius: CORNER_RADIUS * dpr
      });
      twgl.drawBufferInfo(gl, bufferInfo);

      if (!hasDrawnRef.current) {
        hasDrawnRef.current = true;
        setHasDrawn(true);
      }

      momentumRef.current += (0 - momentumRef.current) * 0.07;
    }

    return () => {
      cancelled = true;
      running = false;
      cancelAnimationFrame(rafId);
      ro.disconnect();
      io.disconnect();
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [reduce, stages, N]);

  // Reduced motion: niente WebGL, fallback semplice — il caller (TourDetailEtnaDark)
  // ha gia' il sticky scroll vertical, quindi qui ritorniamo null per non
  // renderizzare nulla in caso di reduce. La componente sticky-vertical mobile
  // sara' visibile via responsive class md:hidden.
  if (reduce) return null;

  const frameInsetStyle = {
    top: `${FRAME_PADDING_Y_TOP}px`,
    bottom: `${FRAME_PADDING_Y_BOTTOM}px`,
    left: `${FRAME_PADDING_X_RATIO * 100}%`,
    right: `${FRAME_PADDING_X_RATIO * 100}%`
  } as const;

  return (
    <div
      ref={containerRef}
      style={{height: `${TOTAL_VH}svh`, backgroundColor: ETNA_BLACK}}
      className="relative"
    >
      <div
        className="sticky top-0 h-[100svh] overflow-hidden"
        style={{
          backgroundImage: `url(${stages[0].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: ETNA_BLACK
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={stages[0].image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none block"
          style={{display: 'block'}}
          loading="eager"
          decoding="sync"
          aria-hidden="true"
        />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block"
          style={{
            opacity: hasDrawn ? 1 : 0,
            transition: 'opacity 200ms ease-out'
          }}
          aria-hidden="true"
        />

        {/* Eyebrow top-left, lava color (matcha mood Etna) */}
        <div className="absolute top-8 sm:top-10 inset-x-0 z-20 pointer-events-none">
          <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
            <p className="eyebrow" style={{color: LAVA_GLOW}}>
              {eyebrow}
            </p>
          </div>
        </div>

        {/* Stage counter top-right */}
        <div className="absolute top-8 sm:top-10 inset-x-0 z-20 pointer-events-none">
          <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex justify-end">
            <div className="flex items-baseline gap-2 tabular-nums">
              <span
                className="font-display text-2xl sm:text-3xl transition-colors"
                style={{color: LAVA_GLOW}}
              >
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span
                className="text-[11px] uppercase tracking-[0.18em]"
                style={{color: 'rgba(245, 239, 228, 0.5)'}}
              >
                / {String(N).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Text overlays per stage — sempre a sinistra come da richiesta cliente */}
        <div className="absolute z-10 pointer-events-none" style={frameInsetStyle}>
          {stages.map((s, i) => {
            const active = activeIndex === i;
            return (
              <div
                key={s.number}
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
                  style={{maxWidth: 'min(560px, 80%)'}}
                  className="pointer-events-auto"
                >
                  {/* Number + duration in lava italic */}
                  <p
                    className="font-display italic font-light text-[20px] sm:text-[22px] mb-4 tabular-nums"
                    style={{
                      color: LAVA_GLOW,
                      textShadow: '0 2px 16px rgba(0,0,0,0.6)'
                    }}
                  >
                    {s.number} · {s.duration}
                  </p>
                  <h3
                    className="hero-headline font-display text-display-md sm:text-display-lg font-medium text-cream-on-dark whitespace-pre-line"
                    style={{
                      fontStretch: '92%',
                      textShadow: '0 4px 32px rgba(0,0,0,0.5)'
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-5 max-w-[40ch] text-[16px] sm:text-[18px] leading-[1.55]"
                    style={{
                      color: 'rgba(245, 239, 228, 0.9)',
                      textShadow: '0 2px 12px rgba(0,0,0,0.4)'
                    }}
                  >
                    {s.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
