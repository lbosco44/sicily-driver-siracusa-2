import type {Metadata} from 'next';
import {Cormorant_Garamond, DM_Sans} from 'next/font/google';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {setRequestLocale, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Navbar} from '@/components/layout/Navbar';
import {Footer} from '@/components/layout/Footer';
import {WhatsAppFloat} from '@/components/layout/WhatsAppFloat';
import {CookieBanner} from '@/components/layout/CookieBanner';
import {ScrollToTop} from '@/components/layout/ScrollToTop';
import '../globals.css';

// Display font — Cormorant Garamond (serif italian editorial, calore rinascimentale).
// Italic e' la chiave emotiva del concept "Diario Mediterraneo": H1/H2 accent
// words + quote testimonial + storytelling tour. Brief DESIGN.md sez. "Tipografia".
const cormorant = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  fallback: ['Georgia', 'ui-serif', 'serif']
});

// Body/UI font — DM Sans (sans geometrico moderno pulito).
// DM Sans mai in italic per policy Brief: solo Cormorant porta l'italic.
const dmSans = DM_Sans({
  variable: '--font-sans',
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
          <ScrollToTop />
          <Navbar />
          <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
