// 404 di root: scatta per i path che non corrispondono a un locale valido
// (es. /pagina-inesistente). Renderizzata dentro app/layout.tsx, che è un
// passthrough SENZA <html> e senza globals.css → deve essere autonoma
// (proprio <html>/<body> + stili inline con la palette del sito).
// I 404 DENTRO un locale valido (es. /en/foo) usano app/[locale]/not-found.tsx.
export default function RootNotFound() {
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
        <main style={{textAlign: 'center', padding: '32px', maxWidth: '46ch'}}>
          <p
            style={{
              fontSize: 'clamp(72px, 16vw, 160px)',
              lineHeight: 1,
              color: '#A5532F',
              margin: 0,
              fontWeight: 300
            }}
          >
            404
          </p>
          <h1 style={{fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 500, marginTop: '16px'}}>
            Questa strada non porta da nessuna parte.
          </h1>
          <p style={{marginTop: '12px', color: '#4A3E33', lineHeight: 1.6}}>
            La pagina che cerchi non esiste o è stata spostata.
            <br />
            <span style={{color: 'rgba(31,26,20,0.55)'}}>
              The page you’re looking for doesn’t exist.
            </span>
          </p>
          <a
            href="/"
            style={{
              display: 'inline-block',
              marginTop: '32px',
              padding: '14px 30px',
              borderRadius: '999px',
              background: '#A5532F',
              color: '#F5EFE4',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontSize: '13px'
            }}
          >
            Torna alla home →
          </a>
        </main>
      </body>
    </html>
  );
}
