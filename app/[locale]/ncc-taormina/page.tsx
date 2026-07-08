import type {Metadata} from 'next';
import {ogImage, twitterCard} from '@/lib/seo';
import {setRequestLocale} from 'next-intl/server';
import {NccCityNarrative} from '@/components/templates/NccCityNarrative';
import {getCity, type Locale} from '@/lib/cities';
import {faqPageSchema, breadcrumbSchema, localBusinessSchema, JsonLd} from '@/lib/schema';
import {getBreadcrumb} from '@/lib/breadcrumbs';
import {routing} from '@/i18n/routing';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const city = getCity('taormina', locale as Locale);
  const itPath = '/ncc-taormina';
  const enPath = '/en/driver-taormina';
  const frPath = '/fr/chauffeur-taormine';
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: locale === 'fr' ? frPath : locale === 'en' ? enPath : itPath,
      languages: {
        it: itPath,
        en: enPath,
        fr: frPath,
        'x-default': itPath
      }
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : 'it_IT',
      type: 'website',
      url: `https://ncctaxisiracusa.com${locale === 'fr' ? frPath : locale === 'en' ? enPath : itPath}`,
      siteName: 'Sicily Driver Siracusa',
      images: ogImage(locale, city.metaTitle)
    },
    twitter: twitterCard(city.metaTitle, city.metaDescription, locale)
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function NccTaorminaPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const city = getCity('taormina', locale as Locale);

  return (
    <>
      <JsonLd data={localBusinessSchema(locale as Locale)} />
      <JsonLd data={faqPageSchema(city.faqs)} />
      <JsonLd
        data={breadcrumbSchema(getBreadcrumb('ncc-taormina', locale as Locale, city.h1))}
      />
      <NccCityNarrative city={city} />
    </>
  );
}
