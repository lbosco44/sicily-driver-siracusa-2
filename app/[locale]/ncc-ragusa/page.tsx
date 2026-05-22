import type {Metadata} from 'next';
import {setRequestLocale} from 'next-intl/server';
import {NccCityTemplate} from '@/components/templates/NccCityTemplate';
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
  const city = getCity('ragusa', locale as Locale);
  const itPath = '/it/ncc-ragusa';
  const enPath = '/en/driver-ragusa';
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: locale === 'it' ? itPath : enPath,
      languages: {
        it: itPath,
        en: enPath,
        'x-default': itPath
      }
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
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

export default async function NccRagusaPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const city = getCity('ragusa', locale as Locale);

  return (
    <>
      <JsonLd data={localBusinessSchema(locale as Locale)} />
      <JsonLd data={faqPageSchema(city.faqs)} />
      <JsonLd
        data={breadcrumbSchema(getBreadcrumb('ncc-ragusa', locale as Locale, city.h1))}
      />
      <NccCityTemplate city={city} />
    </>
  );
}
