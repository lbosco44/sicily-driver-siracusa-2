import {ImageResponse} from 'next/og';
import type {NextRequest} from 'next/server';

// OG image generata dinamicamente. Default fallback per quando il cliente
// non ha ancora fornito le immagini OG vere. Brand wordmark + tagline +
// palette "Calce e Mare" coerente col resto del sito.
//
// Usage:
//   /og — default brand
//   /og?title=Tour%20del%20Barocco — per pagine specifiche
//   /og?title=...&locale=en — versione EN
//
// Cached come static via next/og + revalidate.

export const runtime = 'edge';
export const contentType = 'image/png';
export const size = {width: 1200, height: 630};

export async function GET(request: NextRequest) {
  const {searchParams} = new URL(request.url);
  const title = searchParams.get('title') || 'Sicily Driver Siracusa';
  const subtitle =
    searchParams.get('subtitle') ||
    (searchParams.get('locale') === 'en'
      ? 'Private NCC · Sicily Tours · Mercedes 24/7'
      : 'NCC privato · Tour Sicilia · Mercedes 24/7');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #1E3A4F 0%, #142838 60%, #0A1F2E 100%)',
          color: '#F5EFE4',
          padding: '64px 80px',
          fontFamily: 'Georgia, serif',
          position: 'relative'
        }}
      >
        {/* Glow terracotta in alto-destra */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            background:
              'radial-gradient(circle, rgba(224, 120, 86, 0.25) 0%, transparent 65%)',
            display: 'flex'
          }}
        />

        {/* Top: wordmark italic */}
        <div
          style={{
            fontSize: 36,
            fontStyle: 'italic',
            fontWeight: 500,
            opacity: 0.95,
            letterSpacing: '-0.01em',
            display: 'flex'
          }}
        >
          Sicily Driver Siracusa
        </div>

        {/* Spacer */}
        <div style={{flex: 1, display: 'flex'}} />

        {/* Bottom: titolo + sottotitolo */}
        <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
          <div
            style={{
              fontSize: title.length > 40 ? 80 : 96,
              fontWeight: 500,
              lineHeight: 1,
              letterSpacing: '-0.035em',
              color: '#F5EFE4',
              display: 'flex',
              maxWidth: '85%'
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 300,
              letterSpacing: '0.04em',
              color: '#E07856',
              textTransform: 'uppercase',
              display: 'flex'
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Linea decorativa bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 64,
            right: 80,
            width: 80,
            height: 2,
            background: '#E07856',
            display: 'flex'
          }}
        />
      </div>
    ),
    {
      ...size,
      headers: {
        // Cache lungo per OG image (cambia raramente)
        'cache-control': 'public, max-age=31536000, immutable'
      }
    }
  );
}
