import type {Metadata} from 'next';
import {ogImage, twitterCard} from '@/lib/seo';
import {setRequestLocale} from 'next-intl/server';
import {TourDetailNarrative} from '@/components/templates/TourDetailNarrative';
import {getTour} from '@/lib/tours';
import {faqPageSchema, breadcrumbSchema, localBusinessSchema, touristTripSchema, JsonLd} from '@/lib/schema';
import {getBreadcrumb} from '@/lib/breadcrumbs';
import {routing} from '@/i18n/routing';
import type {Locale} from '@/lib/cities';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const tour = getTour('barocco', locale as Locale);
  const itPath = '/tour-barocco';
  const enPath = '/en/baroque-tour';
  const frPath = '/fr/tour-baroque';
  return {
    title: tour.metaTitle,
    description: tour.metaDescription,
    alternates: {
      canonical: locale === 'fr' ? frPath : locale === 'en' ? enPath : itPath,
      languages: {it: itPath, en: enPath, fr: frPath, 'x-default': itPath}
    },
    openGraph: {
      title: tour.metaTitle,
      description: tour.metaDescription,
      locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : 'it_IT',
      type: 'website',
      url: `https://ncctaxisiracusa.com${locale === 'fr' ? frPath : locale === 'en' ? enPath : itPath}`,
      siteName: 'Sicily Driver Siracusa',
      images: ogImage(locale, tour.metaTitle)
    },
    twitter: twitterCard(tour.metaTitle, tour.metaDescription, locale)
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function TourBaroccoPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const tour = getTour('barocco', locale as Locale);

  return (
    <>
      <JsonLd data={localBusinessSchema(locale as Locale)} />
      <JsonLd data={faqPageSchema(tour.faqs)} />
      <JsonLd
        data={breadcrumbSchema(getBreadcrumb('tour-barocco', locale as Locale, tour.h1))}
      />
      <JsonLd
        data={touristTripSchema({
          name: tour.h1,
          description: tour.metaDescription,
          image: tour.heroImage,
          url: locale === 'it' ? '/tour-barocco' : '/en/baroque-tour'
        })}
      />
      <TourDetailNarrative tour={tour} />
    </>
  );
}
