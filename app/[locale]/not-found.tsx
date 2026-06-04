import {Link} from '@/i18n/navigation';

// 404 brandizzata. Renderizzata dentro app/[locale]/layout.tsx → eredita
// navbar/footer, font e palette del sito. Copy IT (locale default) + riga EN
// per i visitatori inglesi che atterrano su un URL inesistente.
export default function NotFound() {
  return (
    <main className="min-h-[68vh] flex items-center justify-center bg-canvas px-6 py-28 sm:py-36">
      <div className="text-center max-w-[44ch]">
        <p
          className="font-display font-light text-accent leading-none"
          style={{fontSize: 'clamp(72px, 16vw, 160px)', fontStretch: '95%'}}
        >
          404
        </p>
        <h1
          className="mt-6 font-display text-display-sm font-light text-ink"
          style={{fontStretch: '95%'}}
        >
          Questa strada non porta da nessuna parte.
        </h1>
        <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.6] text-ink-soft">
          La pagina che cerchi non esiste o è stata spostata.
          <br />
          <span className="text-ink/55">The page you’re looking for doesn’t exist.</span>
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 mt-10 rounded-full bg-accent px-8 py-4 text-[13px] uppercase tracking-[0.08em] font-medium text-cream-on-dark hover:bg-accent-hover transition-colors"
        >
          Torna alla home
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
