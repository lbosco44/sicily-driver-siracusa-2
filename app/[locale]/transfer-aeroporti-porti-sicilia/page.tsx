import type {Metadata} from 'next';
import {ogImage, twitterCard} from '@/lib/seo';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {TransferNarrative} from '@/components/templates/TransferNarrative';
import {getTransferHub, type Locale} from '@/lib/cities';
import {faqPageSchema, breadcrumbSchema, localBusinessSchema, JsonLd} from '@/lib/schema';
import {getBreadcrumb} from '@/lib/breadcrumbs';
import {routing} from '@/i18n/routing';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const hub = getTransferHub(locale as Locale);
  const itPath = '/transfer-aeroporti-porti-sicilia';
  const enPath = '/en/sicily-airport-port-transfers';
  const frPath = '/fr/transferts-aeroports-ports-sicile';
  return {
    title: hub.metaTitle,
    description: hub.metaDescription,
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

export default async function TransferSiciliaPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const hub = getTransferHub(locale as Locale);
  const tForm = await getTranslations('TransferForm');
  const faqs = tForm.raw('faqs') as {q: string; a: string}[];

  return (
    <>
      <JsonLd data={localBusinessSchema(locale as Locale)} />
      <JsonLd data={faqPageSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema(getBreadcrumb('transfer-aeroporti-porti-sicilia', locale as Locale, hub.h1))}
      />
      <TransferNarrative hub={hub} />
    </>
  );
}
