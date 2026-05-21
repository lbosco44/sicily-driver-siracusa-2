import type {Metadata} from 'next';
import {Cormorant_Garamond, DM_Sans} from 'next/font/google';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Navbar} from '@/components/layout/Navbar';
import {Footer} from '@/components/layout/Footer';
import {WhatsAppFloat} from '@/components/layout/WhatsAppFloat';
import '../globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap'
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ncctaxisiracusa.com'),
  title: {
    default: 'Sicily Driver Siracusa — NCC e Tour Privati Sicilia Orientale',
    template: '%s · Sicily Driver Siracusa'
  },
  description:
    'NCC Siracusa, transfer aeroporti e tour privati con Mercedes. Servizio 24/7 a Catania, Noto, Taormina, Ragusa. Eleganza da VIP, prezzi di mercato.'
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${cormorant.variable} ${dmSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-canvas text-ink">
        <NextIntlClientProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
