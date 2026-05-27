import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {LanguageSwitcher} from './LanguageSwitcher';
import {CookieSettingsLink} from './CookieSettingsLink';
import {WHATSAPP_HREF} from '@/lib/contact';

export async function Footer() {
  const t = await getTranslations('Footer');
  const tNav = await getTranslations('Nav');
  const tBrand = await getTranslations('Brand');

  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-cream-on-dark" style={{color: 'var(--cream-on-dark)'}}>
      {/* Cliente 27/05/2026: footer ridotto da 783px → ~440px.
          - py 16/20 → 10/12 (padding verticale dimezzato)
          - wordmark 3xl/4xl → 2xl (piu' contenuto, niente tagline)
          - pb-12 mt-12 → pb-6 mt-8 (gap wordmark→grid ridotto)
          - mt-16 → mt-10 (gap grid→bottom strip ridotto)
          - space-y-2 → space-y-2 sulle liste link
          - rimosso tagline italic (informazione duplicata col wordmark) */}
      {/* Cliente 27/05/2026 (mobile): "fai il footer su mobile come
          desktop piu piccolo" → 4 colonne anche su mobile (era 2x2),
          ma testo/spacing tighter per stare in viewport stretti.
          Email/phone usano break-words per wrappare naturalmente al "@"
          o "-" senza overflow. */}
      <div className="mx-auto max-w-(--container-editorial) px-4 sm:px-10 py-8 sm:py-12">
        {/* Top: wordmark compatto, niente tagline */}
        <div className="border-b border-cream-on-dark/15 pb-5 sm:pb-6">
          <p className="font-display italic text-xl sm:text-3xl font-medium text-cream-on-dark/95">
            {tBrand('name')}
          </p>
        </div>

        {/* Grid 4 col su mobile + desktop, gap responsive */}
        <div className="grid grid-cols-4 gap-3 sm:gap-8 lg:gap-10 mt-6 sm:mt-8">
          {/* Servizi — Cliente 27/05/2026: lista ridotta da 9 link a 5
              (rimossi i 5 sotto-tour individuali — chi li vuole va su
              /tour-sicilia hub). Footer piu' compatto. */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] font-medium text-cream-on-dark/75 mb-3 sm:mb-4">
              {t('servicesHeading')}
            </h4>
            <ul className="space-y-2 text-[12px] sm:text-[14px] text-cream-on-dark/85 break-words">
              <li>
                <Link href="/servizi" className="hover:text-accent transition-colors">
                  {tNav('services')}
                </Link>
              </li>
              <li>
                <Link href="/tour-sicilia" className="hover:text-accent transition-colors">
                  {tNav('tours')}
                </Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-accent transition-colors">
                  Partner
                </Link>
              </li>
              <li>
                <Link href="/wedding" className="hover:text-accent transition-colors">
                  Wedding &amp; eventi
                </Link>
              </li>
              <li>
                <Link href="/chi-siamo" className="hover:text-accent transition-colors">
                  {tNav('about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Aree servite */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] font-medium text-cream-on-dark/75 mb-3 sm:mb-4">
              {t('areasHeading')}
            </h4>
            <ul className="space-y-2 text-[12px] sm:text-[14px] text-cream-on-dark/85 break-words">
              <li>
                <Link href="/ncc-catania" className="hover:text-accent transition-colors">
                  Catania
                </Link>
              </li>
              <li>
                <Link href="/ncc-noto" className="hover:text-accent transition-colors">
                  Noto
                </Link>
              </li>
              <li>
                <Link href="/ncc-taormina" className="hover:text-accent transition-colors">
                  Taormina
                </Link>
              </li>
              <li>
                <Link href="/ncc-ragusa" className="hover:text-accent transition-colors">
                  Ragusa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] font-medium text-cream-on-dark/75 mb-3 sm:mb-4">
              {t('contactsHeading')}
            </h4>
            <ul className="space-y-2 text-[12px] sm:text-[14px] text-cream-on-dark/85 break-words">
              <li>
                <a
                  href={`tel:${t('phone').replace(/\s/g, '')}`}
                  className="hover:text-accent transition-colors tabular-nums"
                >
                  {t('phone')}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t('email')}`}
                  className="hover:text-accent transition-colors"
                >
                  {t('email')}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Sedi */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] font-medium text-cream-on-dark/75 mb-3 sm:mb-4">
              {t('officesHeading')}
            </h4>
            <ul className="space-y-2 text-[12px] sm:text-[14px] text-cream-on-dark/85 break-words leading-relaxed">
              <li>Siracusa</li>
              <li>Noto</li>
              <li>Marzamemi</li>
            </ul>
          </div>
        </div>

        {/* Bottom strip — mt-16 → mt-10 (ridotto) */}
        <div className="mt-10 pt-5 border-t border-cream-on-dark/15 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 text-[12px] text-cream-on-dark/70">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
            <p>
              © {year} {tBrand('name')}. {t('rights')}. {t('vat')} {t('vatNumber')}.
            </p>
            <span className="hidden sm:inline text-cream-on-dark/30">·</span>
            <Link
              href="/privacy"
              className="hover:text-accent transition-colors underline-offset-4 hover:underline"
            >
              Privacy
            </Link>
            <span className="hidden sm:inline text-cream-on-dark/30">·</span>
            <CookieSettingsLink />
          </div>
          <LanguageSwitcher className="[&_button]:text-cream-on-dark/55 [&_button[aria-current]]:text-accent [&_span]:text-cream-on-dark/30" />
        </div>
      </div>
    </footer>
  );
}
