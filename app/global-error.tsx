'use client';

// Error boundary di ultima istanza: scatta solo se crasha il root layout.
// Rimpiazza l'intero documento, quindi deve includere <html>/<body> e NON
// può fare affidamento su Tailwind/CSS globali → stili inline con la palette.
export default function GlobalError({
  error,
  reset
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  return (
    <html lang="it">
      <body
        style={{
          margin: 0,
          background: '#F5EFE4',
          color: '#1F1A14',
          fontFamily: 'Georgia, serif',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <main style={{textAlign: 'center', padding: '24px', maxWidth: '42ch'}}>
          <h1 style={{fontSize: '2rem', fontWeight: 500, margin: 0}}>
            Qualcosa è andato storto.
          </h1>
          <p style={{marginTop: '12px', color: '#4A3E33', lineHeight: 1.6}}>
            Si è verificato un errore imprevisto. Riprova.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              marginTop: '24px',
              padding: '14px 28px',
              borderRadius: '999px',
              border: 'none',
              background: '#A5532F',
              color: '#F5EFE4',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontSize: '13px',
              cursor: 'pointer'
            }}
          >
            Riprova
          </button>
        </main>
      </body>
    </html>
  );
}
