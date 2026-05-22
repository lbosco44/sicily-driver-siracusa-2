import type {Metadata} from 'next';
import {setRequestLocale} from 'next-intl/server';
import {TourHubTemplate} from '@/components/templates/TourHubTemplate';
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
  const itPath = '/it/tour-sicilia';
  const enPath = '/en/sicily-tours';
  return {
    title: hub.metaTitle,
    description: hub.metaDescription,
    alternates: {
      canonical: locale === 'it' ? itPath : enPath,
      languages: {it: itPath, en: enPath, 'x-default': itPath}
    },
    openGraph: {
      title: hub.metaTitle,
      description: hub.metaDescription,
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
      <TourHubTemplate hub={hub} />
    </>
  );
}
