import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {LanguageSwitcher} from './LanguageSwitcher';

export async function Footer() {
  const t = await getTranslations('Footer');
  const tNav = await getTranslations('Nav');
  const tBrand = await getTranslations('Brand');

  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-cream-on-dark" style={{color: 'var(--cream-on-dark)'}}>
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 py-16 sm:py-20">
        {/* Top: wordmark + tagline */}
        <div className="border-b border-cream-on-dark/15 pb-12">
          <p className="font-display italic text-3xl sm:text-4xl font-medium text-cream-on-dark/95">
            {tBrand('name')}
          </p>
          <p className="font-display italic text-base sm:text-lg text-cream-on-dark/70 mt-2">
            {tBrand('tagline')}
          </p>
        </div>

        {/* Grid 4 col */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mt-12">
          {/* Servizi */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.12em] font-medium text-cream-on-dark/75 mb-4">
              {t('servicesHeading')}
            </h4>
            <ul className="space-y-2.5 text-[14px] text-cream-on-dark/85">
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
                <Link href="/tour-barocco" className="hover:text-accent transition-colors">
                  Tour Barocco
                </Link>
              </li>
              <li>
                <Link href="/tour/etna-premium" className="hover:text-accent transition-colors">
                  Tour Etna Premium
                </Link>
              </li>
              <li>
                <Link href="/tour/dolce-vita-siracusa" className="hover:text-accent transition-colors">
                  Dolce Vita Siracusa
                </Link>
              </li>
              <li>
                <Link href="/tour/silent-sailing" className="hover:text-accent transition-colors">
                  Silent Sailing
                </Link>
              </li>
              <li>
                <Link href="/tour/isola-delle-correnti" className="hover:text-accent transition-colors">
                  Isola delle Correnti
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
            <h4 className="text-[11px] uppercase tracking-[0.12em] font-medium text-cream-on-dark/75 mb-4">
              {t('areasHeading')}
            </h4>
            <ul className="space-y-2.5 text-[14px] text-cream-on-dark/85">
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
            <h4 className="text-[11px] uppercase tracking-[0.12em] font-medium text-cream-on-dark/75 mb-4">
              {t('contactsHeading')}
            </h4>
            <ul className="space-y-2.5 text-[14px] text-cream-on-dark/85">
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
                  href="https://wa.me/393756413379"
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
            <h4 className="text-[11px] uppercase tracking-[0.12em] font-medium text-cream-on-dark/75 mb-4">
              {t('officesHeading')}
            </h4>
            <ul className="space-y-2.5 text-[14px] text-cream-on-dark/85 leading-relaxed">
              <li>Siracusa</li>
              <li>Noto</li>
              <li>Marzamemi</li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 pt-6 border-t border-cream-on-dark/15 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 text-[12px] text-cream-on-dark/70">
          <p>
            © {year} {tBrand('name')}. {t('rights')}. {t('vat')} {t('vatNumber')}.
          </p>
          <LanguageSwitcher className="[&_button]:text-cream-on-dark/55 [&_button[aria-current]]:text-accent [&_span]:text-cream-on-dark/30" />
        </div>
      </div>
    </footer>
  );
}
