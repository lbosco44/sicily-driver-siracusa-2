import {setRequestLocale, getTranslations} from 'next-intl/server';
import type {Metadata} from 'next';

import {Hero} from '@/components/sections/home/Hero';
import {Whisper} from '@/components/sections/home/Whisper';
import {EsperienzeScroll} from '@/components/sections/home/EsperienzeScroll';
import {Manifesto} from '@/components/sections/home/Manifesto';
import {PartnersBar} from '@/components/sections/home/PartnersBar';
import {Interni} from '@/components/sections/home/Interni';
import {PolaroidMosaic} from '@/components/sections/home/PolaroidMosaic';
import {ListinoProse} from '@/components/sections/home/ListinoProse';
import {DietroAlVolante} from '@/components/sections/home/DietroAlVolante';
import {Testimonianza} from '@/components/sections/home/Testimonianza';
import {CtaFinale} from '@/components/sections/home/CtaFinale';

import {localBusinessSchema, JsonLd} from '@/lib/schema';
import {routing} from '@/i18n/routing';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Home.meta'});
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}`,
      languages: {it: '/it', en: '/en', 'x-default': '/it'}
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      type: 'website',
      url: `https://ncctaxisiracusa.com/${locale}`,
      siteName: 'Sicily Driver Siracusa',
      images: [
        {
          url: `/og?locale=${locale}`,
          width: 1200,
          height: 630,
          alt:
            locale === 'it'
              ? 'Sicily Driver Siracusa — NCC e tour privati in Sicilia orientale'
              : 'Sicily Driver Syracuse — Private NCC and tours across eastern Sicily'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`/og?locale=${locale}`]
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function HomePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'Home.whisper1'});

  return (
    <>
      <JsonLd data={localBusinessSchema(locale as 'it' | 'en')} />

      {/* 01 — Hero atmosferica full-bleed */}
      <Hero />

      {/* 02 — Whisper "Non facciamo semplici transfer, creiamo ricordi."
          maxWidthCh=30 per testo lungo: ~4 parole per riga invece di 2-3 */}
      <Whisper text={t('text')} bg="canvas" size="lg" maxWidthCh={30} />

      {/* 03 — 5 esperienze scroll-driven sticky (la sezione cuore della home) */}
      <EsperienzeScroll />

      {/* 04 — Manifesto: paragrafo keyword-dense SEO-locked, reso narrativo */}
      <Manifesto />

      {/* 04b — Partners marquee: loghi dei posti che frequentiamo
          (Pura Vida, Burgio, Benanti, Palmeri, hotel selezionati). Marquee
          CSS-only, pause su hover. Loghi in /public/images/loghi-partner/. */}
      <PartnersBar />

      {/* 05 — Le auto, sotto-screen: 3 dettagli interni */}
      <Interni />

      {/* 06 — Mosaico polaroid destinazioni */}
      <PolaroidMosaic />

      {/* 07 — Listino come prosa narrativa */}
      <ListinoProse />

      {/* 09 — Dietro al volante */}
      <DietroAlVolante />

      {/* 10 — Una sola testimonianza, dominante */}
      <Testimonianza />

      {/* 11 — CTA finale immersiva, blu mare profondo */}
      <CtaFinale />
    </>
  );
}
