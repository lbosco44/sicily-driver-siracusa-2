import type {Metadata} from 'next';
import {Cormorant_Garamond, DM_Sans} from 'next/font/google';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {setRequestLocale, getTranslations} from 'next-intl/server';
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
  display: 'swap',
  fallback: ['Georgia', 'serif']
  // adjustFontFallback default true: Next.js inietta size-adjust metric-matched fallback
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ncctaxisiracusa.com')
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

  const tA11y = await getTranslations({locale, namespace: 'A11y'});

  return (
    <html
      lang={locale}
      className={`${cormorant.variable} ${dmSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preconnect"
          href="https://images.unsplash.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-canvas text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:px-4 focus:py-2 focus:rounded focus:text-[14px] focus:font-medium"
          style={{color: 'var(--cream-on-dark)'}}
        >
          {tA11y('skipToContent')}
        </a>
        <NextIntlClientProvider>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
