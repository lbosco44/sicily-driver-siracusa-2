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
  return {
    title: tour.metaTitle,
    description: tour.metaDescription,
    alternates: {
      canonical: locale === 'it' ? itPath : enPath,
      languages: {it: itPath, en: enPath, 'x-default': itPath}
    },
    openGraph: {
      title: tour.metaTitle,
      description: tour.metaDescription,
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      type: 'website',
      url: `https://ncctaxisiracusa.com${locale === 'it' ? itPath : enPath}`,
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
