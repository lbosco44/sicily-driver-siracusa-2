import type {Metadata} from 'next';
import {setRequestLocale} from 'next-intl/server';
import {TourDetailTemplate} from '@/components/templates/TourDetailTemplate';
import {getTour} from '@/lib/tours';
import {faqPageSchema, localBusinessSchema, JsonLd} from '@/lib/schema';
import {routing} from '@/i18n/routing';
import type {Locale} from '@/lib/cities';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const tour = getTour('ortigia-taormina', locale as Locale);
  const itPath = '/it/tour-ortigia-taormina';
  const enPath = '/en/ortigia-taormina-tour';
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
      siteName: 'Sicily Driver Siracusa'
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function TourOrtigiaTaorminaPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const tour = getTour('ortigia-taormina', locale as Locale);

  return (
    <>
      <JsonLd data={localBusinessSchema(locale as Locale)} />
      <JsonLd data={faqPageSchema(tour.faqs)} />
      <TourDetailTemplate tour={tour} />
    </>
  );
}
