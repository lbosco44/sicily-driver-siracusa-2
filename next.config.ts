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
      {source: '/index.php', destination: '/it', permanent: true},
      {source: '/chi-siamo.php', destination: '/it/chi-siamo', permanent: true},
      {source: '/servizi.php', destination: '/it/servizi', permanent: true},
      {source: '/tour-sicilia.php', destination: '/it/tour-sicilia', permanent: true},
      {source: '/tour-barocco.php', destination: '/it/tour-barocco', permanent: true},
      {source: '/contatti.php', destination: '/it/contatti', permanent: true},
      {source: '/ncc-catania.php', destination: '/it/ncc-catania', permanent: true},
      {source: '/ncc-noto.php', destination: '/it/ncc-noto', permanent: true},
      {source: '/ncc-taormina.php', destination: '/it/ncc-taormina', permanent: true},
      {source: '/ncc-ragusa.php', destination: '/it/ncc-ragusa', permanent: true},

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

      // --- Domain root catch-all (fallback se proxy next-intl non risolve) ---
      // Non aggiungiamo /` → /it qui perche il proxy next-intl gestisce
      // gia la rilevazione automatica del locale e il redirect a /it / /en.
    ];
  }
};

export default withNextIntl(nextConfig);
