import type {Metadata} from 'next';
import {setRequestLocale} from 'next-intl/server';
import {TourDetailDolceVita} from '@/components/templates/TourDetailDolceVita';
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
  const tour = getTour('dolce-vita-siracusa', locale as Locale);
  const path = `/${locale}/tour/dolce-vita-siracusa`;
  return {
    title: tour.metaTitle,
    description: tour.metaDescription,
    alternates: {
      canonical: path,
      languages: {
        it: '/it/tour/dolce-vita-siracusa',
        en: '/en/tour/dolce-vita-siracusa',
        'x-default': '/it/tour/dolce-vita-siracusa'
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

export default async function TourDolceVitaPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const tour = getTour('dolce-vita-siracusa', locale as Locale);

  return (
    <>
      <JsonLd data={localBusinessSchema(locale as Locale)} />
      <JsonLd data={faqPageSchema(tour.faqs)} />
      <JsonLd
        data={breadcrumbSchema(
          getBreadcrumb('tour/dolce-vita-siracusa', locale as Locale, tour.h1)
        )}
      />
      <TourDetailDolceVita tour={tour} />
    </>
  );
}
