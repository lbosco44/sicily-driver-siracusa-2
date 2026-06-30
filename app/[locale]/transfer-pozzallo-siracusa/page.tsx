import type {Metadata} from 'next';
import {ogImage, twitterCard} from '@/lib/seo';
import {setRequestLocale} from 'next-intl/server';
import {TransferRouteNarrative} from '@/components/templates/TransferRouteNarrative';
import {getTransferRoute, getAllTransferRoutes} from '@/lib/transferRoutes';
import type {Locale} from '@/lib/cities';
import {faqPageSchema, breadcrumbSchema, localBusinessSchema, JsonLd} from '@/lib/schema';
import {getBreadcrumb} from '@/lib/breadcrumbs';
import {routing} from '@/i18n/routing';

const KEY = 'pozzallo-siracusa' as const;
const IT_PATH = '/transfer-pozzallo-siracusa';
const EN_PATH = '/en/pozzallo-syracuse-transfer';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const route = getTransferRoute(KEY, locale as Locale);
  return {
    title: route.metaTitle,
    description: route.metaDescription,
    alternates: {
      canonical: locale === 'it' ? IT_PATH : EN_PATH,
      languages: {it: IT_PATH, en: EN_PATH, 'x-default': IT_PATH}
    },
    openGraph: {
      title: route.metaTitle,
      description: route.metaDescription,
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      type: 'website',
      url: `https://ncctaxisiracusa.com${locale === 'it' ? IT_PATH : EN_PATH}`,
      siteName: 'Sicily Driver Siracusa',
      images: ogImage(locale, route.metaTitle)
    },
    twitter: twitterCard(route.metaTitle, route.metaDescription, locale)
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function Page({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const route = getTransferRoute(KEY, locale as Locale);
  const others = getAllTransferRoutes(locale as Locale).filter((r) => r.key !== KEY);

  return (
    <>
      <JsonLd data={localBusinessSchema(locale as Locale)} />
      <JsonLd data={faqPageSchema(route.faqs)} />
      <JsonLd
        data={breadcrumbSchema(
          getBreadcrumb('transfer-pozzallo-siracusa', locale as Locale, route.h1)
        )}
      />
      <TransferRouteNarrative route={route} others={others} />
    </>
  );
}
