import type {Metadata} from 'next';
import {ogImage, twitterCard} from '@/lib/seo';
import {setRequestLocale} from 'next-intl/server';
import {TourDetailEtnaDark} from '@/components/templates/TourDetailEtnaDark';
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
  const tour = getTour('etna-premium', locale as Locale);
  const path =
    locale === 'fr'
      ? '/fr/tour/etna-premium'
      : locale === 'en'
        ? '/en/tour/etna-premium'
        : '/tour/etna-premium';
  return {
    title: tour.metaTitle,
    description: tour.metaDescription,
    alternates: {
      canonical: path,
      languages: {
        it: '/tour/etna-premium',
        en: '/en/tour/etna-premium',
        fr: '/fr/tour/etna-premium',
        'x-default': '/tour/etna-premium'
      }
    },
    openGraph: {
      title: tour.metaTitle,
      description: tour.metaDescription,
      locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : 'it_IT',
      type: 'website',
      url: `https://ncctaxisiracusa.com${path}`,
      siteName: 'Sicily Driver Siracusa',
      images: ogImage(locale, tour.metaTitle)
    },
    twitter: twitterCard(tour.metaTitle, tour.metaDescription, locale)
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function TourEtnaPremiumPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const tour = getTour('etna-premium', locale as Locale);

  return (
    <>
      <JsonLd data={localBusinessSchema(locale as Locale)} />
      <JsonLd data={faqPageSchema(tour.faqs)} />
      <JsonLd
        data={breadcrumbSchema(
          getBreadcrumb('tour/etna-premium', locale as Locale, tour.h1)
        )}
      />
      <JsonLd
        data={touristTripSchema({
          name: tour.h1,
          description: tour.metaDescription,
          image: tour.heroImage,
          url: locale === 'it' ? '/tour/etna-premium' : '/en/tour/etna-premium'
        })}
      />
      <TourDetailEtnaDark tour={tour} />
    </>
  );
}
