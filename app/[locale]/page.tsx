import {setRequestLocale, getTranslations} from 'next-intl/server';
import type {Metadata} from 'next';
import {HeroLaRotta} from '@/components/sections/HeroLaRotta';
import {TrustStrip} from '@/components/sections/TrustStrip';
import {IntroParagraph} from '@/components/sections/IntroParagraph';
import {EsperienzeCards} from '@/components/sections/EsperienzeCards';
import {TransferRapidoLayer} from '@/components/sections/TransferRapidoLayer';
import {DestinazioniMosaic} from '@/components/sections/DestinazioniMosaic';
import {PartnerSelezionati} from '@/components/sections/PartnerSelezionati';
import {ListinoTratte} from '@/components/sections/ListinoTratte';
import {DietroAlVolante} from '@/components/sections/DietroAlVolante';
import {Differenziatori} from '@/components/sections/Differenziatori';
import {CtaFinale} from '@/components/sections/CtaFinale';
import {FaqAccordion} from '@/components/sections/FaqAccordion';
import {localBusinessSchema, faqPageSchema, JsonLd} from '@/lib/schema';
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
      languages: {
        it: '/it',
        en: '/en',
        'x-default': '/it'
      }
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
          url: `/og/home-${locale}.jpg`,
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
      images: [`/og/home-${locale}.jpg`]
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

  const t = await getTranslations({locale, namespace: 'Home.faq'});
  const faqItems = [
    {q: t('q1'), a: t('a1')},
    {q: t('q2'), a: t('a2')},
    {q: t('q3'), a: t('a3')},
    {q: t('q4'), a: t('a4')},
    {q: t('q5'), a: t('a5')},
    {q: t('q6'), a: t('a6')},
    {q: t('q7'), a: t('a7')}
  ];

  return (
    <>
      <JsonLd data={localBusinessSchema(locale as 'it' | 'en')} />
      <JsonLd data={faqPageSchema(faqItems)} />

      <HeroLaRotta />
      <TrustStrip />
      <IntroParagraph />
      <EsperienzeCards />
      <TransferRapidoLayer />
      <DestinazioniMosaic />
      <PartnerSelezionati />
      <ListinoTratte />
      <DietroAlVolante />
      <Differenziatori />
      <CtaFinale />
      <FaqAccordion />
    </>
  );
}
