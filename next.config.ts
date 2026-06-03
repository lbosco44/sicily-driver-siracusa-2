import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {protocol: 'https', hostname: 'images.unsplash.com'},
      {protocol: 'https', hostname: 'picsum.photos'}
    ],
    // AVIF prima di WebP: -30% size vs WebP, ~50% vs JPEG.
    // Chrome 85+/Safari 16+/Firefox 113+ supportano AVIF.
    formats: ['image/avif', 'image/webp'],
    // Dimezziamo i breakpoint generati (default 8): basta coprire
    // mobile/tablet/desktop/4K, ogni tear extra bloat il proxy.
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [16, 32, 64, 128, 256, 512]
  },

  async redirects() {
    return [
      // ============================================================
      // SEO migration — 20 redirect 301 dalle URL legacy .php
      // alle nuove URL Next.js. Tutti permanent (301).
      // Ref: Brief/SITEMAP.md Sezione A
      // ============================================================

      // --- Italiano (10) ---
      {source: '/index.php', destination: '/', permanent: true},
      {source: '/chi-siamo.php', destination: '/chi-siamo', permanent: true},
      {source: '/servizi.php', destination: '/servizi', permanent: true},
      {source: '/tour-sicilia.php', destination: '/tour-sicilia', permanent: true},
      {source: '/tour-barocco.php', destination: '/tour-barocco', permanent: true},
      {source: '/contatti.php', destination: '/contatti', permanent: true},
      {source: '/ncc-catania.php', destination: '/ncc-catania', permanent: true},
      {source: '/ncc-noto.php', destination: '/ncc-noto', permanent: true},
      {source: '/ncc-taormina.php', destination: '/ncc-taormina', permanent: true},
      {source: '/ncc-ragusa.php', destination: '/ncc-ragusa', permanent: true},

      // --- Inglese (10) — riorganizzate sotto /en/ ---
      {source: '/index-en.php', destination: '/en', permanent: true},
      {source: '/chi-siamo-en.php', destination: '/en/about', permanent: true},
      {source: '/servizi-en.php', destination: '/en/services', permanent: true},
      {source: '/tour-sicilia-en.php', destination: '/en/sicily-tours', permanent: true},
      {source: '/tour-barocco-en.php', destination: '/en/baroque-tour', permanent: true},
      {source: '/contatti-en.php', destination: '/en/contact', permanent: true},
      // Bug fix: la home EN del sito vecchio puntava a /contact-en.php (URL inesistente).
      // Mappata comunque a /en/contact per non disperdere eventuali link interni/esterni.
      {source: '/contact-en.php', destination: '/en/contact', permanent: true},
      {source: '/driver-catania.php', destination: '/en/driver-catania', permanent: true},
      {source: '/driver-noto.php', destination: '/en/driver-noto', permanent: true},
      {source: '/driver-taormina.php', destination: '/en/driver-taormina', permanent: true},
      {source: '/driver-ragusa.php', destination: '/en/driver-ragusa', permanent: true},

      // --- Safety-net: URL 404/stale del vecchio sito (Audit SEO P1.3) ---
      // Non sono pagine vive, ma possono essere ancora nell'indice Google via
      // vecchia sitemap (/tour.php) o link interni rotti (/contact.php,
      // /sicily-tours.php). Catturano eventuale equity residua.
      {source: '/tour.php', destination: '/tour-sicilia', permanent: true},
      {source: '/contact.php', destination: '/en/contact', permanent: true},
      {source: '/sicily-tours.php', destination: '/en/sicily-tours', permanent: true},

      // --- Root / ---
      // Con localePrefix 'as-needed' + localeDetection false (i18n/routing.ts),
      // la root / serve direttamente l'italiano (default) come contenuto
      // indicizzabile — nessun redirect, equity preservata sull'URL storico.
      // (Audit SEO P0.1/P0.2)

      // --- Canonica host: www → non-www (Brief/SEO.md §6.3) ---
      // Scelta canonica unica senza www. http→https è già forzato da Vercel.
      {
        source: '/:path*',
        has: [{type: 'host', value: 'www.ncctaxisiracusa.com'}],
        destination: 'https://ncctaxisiracusa.com/:path*',
        permanent: true
      }
    ];
  }
};

export default withNextIntl(nextConfig);
