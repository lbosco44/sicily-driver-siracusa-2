import type {Metadata} from 'next';
import {setRequestLocale} from 'next-intl/server';
import {TourDetailTemplate} from '@/components/templates/TourDetailTemplate';
import {getTour} from '@/lib/tours';
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
  const tour = getTour('silent-sailing', locale as Locale);
  const path = `/${locale}/tour/silent-sailing`;
  return {
    title: tour.metaTitle,
    description: tour.metaDescription,
    alternates: {
      canonical: path,
      languages: {
        it: '/it/tour/silent-sailing',
        en: '/en/tour/silent-sailing',
        'x-default': '/it/tour/silent-sailing'
      }
    },
    openGraph: {
      title: tour.metaTitle,
      description: tour.metaDescription,
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      type: 'website',
      url: `https://ncctaxisiracusa.com${path}`,
      siteName: 'Sicily Driver Siracusa'
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function TourSilentSailingPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const tour = getTour('silent-sailing', locale as Locale);

  return (
    <>
      <JsonLd data={localBusinessSchema(locale as Locale)} />
      <JsonLd data={faqPageSchema(tour.faqs)} />
      <JsonLd
        data={breadcrumbSchema(
          getBreadcrumb('tour/silent-sailing', locale as Locale, tour.h1)
        )}
      />
      <TourDetailTemplate tour={tour} />
    </>
  );
}
