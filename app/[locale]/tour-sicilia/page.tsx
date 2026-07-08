import type {Metadata} from 'next';
import {ogImage, twitterCard} from '@/lib/seo';
import {setRequestLocale} from 'next-intl/server';
import {TourHubNarrative} from '@/components/templates/TourHubNarrative';
import {getTourHub} from '@/lib/tours';
import {faqPageSchema, breadcrumbSchema, localBusinessSchema, JsonLd} from '@/lib/schema';
import {getBreadcrumb} from '@/lib/breadcrumbs';
import {routing} from '@/i18n/routing';
import type {Locale} from '@/lib/cities';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const hub = getTourHub(locale as Locale);
  const itPath = '/tour-sicilia';
  const enPath = '/en/sicily-tours';
  const frPath = '/fr/tours-sicile';
  return {
    title: hub.metaTitle,
    description: hub.metaDescription,
    alternates: {
      canonical: locale === 'fr' ? frPath : locale === 'en' ? enPath : itPath,
      languages: {it: itPath, en: enPath, fr: frPath, 'x-default': itPath}
    },
    openGraph: {
      title: hub.metaTitle,
      description: hub.metaDescription,
      locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : 'it_IT',
      type: 'website',
      url: `https://ncctaxisiracusa.com${locale === 'fr' ? frPath : locale === 'en' ? enPath : itPath}`,
      siteName: 'Sicily Driver Siracusa',
      images: ogImage(locale, hub.metaTitle)
    },
    twitter: twitterCard(hub.metaTitle, hub.metaDescription, locale)
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function TourSiciliaHubPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const hub = getTourHub(locale as Locale);

  return (
    <>
      <JsonLd data={localBusinessSchema(locale as Locale)} />
      <JsonLd data={faqPageSchema(hub.faqs)} />
      <JsonLd
        data={breadcrumbSchema(
          getBreadcrumb('tour-sicilia', locale as Locale, `${hub.h1Pre} ${hub.h1Accent}`)
        )}
      />
      <TourHubNarrative hub={hub} />
    </>
  );
}
