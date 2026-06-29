import Image from 'next/image';
import {MessageCircle} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {LanguageSwitcher} from './LanguageSwitcher';
import {DesktopNav} from './DesktopNav';
import {HomeLink} from './HomeLink';
import {MobileMenu, type MobileMenuLink} from './MobileMenu';

export async function Navbar() {
  const t = await getTranslations('Nav');
  const tBrand = await getTranslations('Brand');
  const tTours = await getTranslations('Nav.toursList');
  const tLang = await getTranslations('LanguageSwitcher');

  const links: MobileMenuLink[] = [
    {href: '/', label: t('home')},
    {href: '/servizi', label: t('services')},
    {href: '/tour-sicilia', label: t('tours')},
    {href: '/chi-siamo', label: t('about')},
    {href: '/contatti', label: t('contact')}
  ];

  const navLabels = {
    home: t('home'),
    services: t('services'),
    tours: t('tours'),
    about: t('about'),
    contact: t('contact'),
    toursList: {
      overview: tTours('overview'),
      overviewDesc: tTours('overviewDesc'),
      barocco: tTours('barocco'),
      baroccoDesc: tTours('baroccoDesc'),
      etna: tTours('etna'),
      etnaDesc: tTours('etnaDesc'),
      isola: tTours('isola'),
      isolaDesc: tTours('isolaDesc'),
      dolceVita: tTours('dolceVita'),
      dolceVitaDesc: tTours('dolceVitaDesc'),
      sailing: tTours('sailing'),
      sailingDesc: tTours('sailingDesc')
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-canvas/85 backdrop-blur-md border-b border-[var(--border)]/60">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 h-16 sm:h-20 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <HomeLink
          ariaLabel={`${tBrand('name')} — ${t('home')}`}
          className="hover:opacity-80 transition-opacity shrink-0 justify-self-start"
        >
          <Image
            src="/logo-nero.png"
            alt={tBrand('name')}
            width={180}
            height={40}
            className="h-8 sm:h-9 w-auto"
            priority
          />
        </HomeLink>

        <DesktopNav labels={navLabels} />

        <div className="flex items-center gap-3 sm:gap-6 justify-self-end">
          <a
            href="https://www.instagram.com/sicilydriversyracuse?igsh=NmJrYjFuZWgyYWl0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Sicily Driver Syracuse"
            className="inline-flex items-center justify-center w-8 h-8 rounded-md text-ink/70 hover:text-accent hover:bg-ink/5 transition-colors"
          >
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          {/* Language switcher: solo desktop (md+). Su mobile vive nell'hamburger. */}
          <div className="hidden md:flex items-center">
            <LanguageSwitcher />
          </div>
          {/* Contattaci: ora visibile anche su mobile (al posto delle lingue),
              compatto su small screen. */}
          <Link
            href="/contatti"
            className="
              inline-flex items-center gap-2
              rounded-full bg-accent
              px-4 py-2.5 sm:px-5
              text-[12px] sm:text-[13px] uppercase tracking-[0.05em] font-medium
              whitespace-nowrap
              transition-all duration-200 ease-out
              hover:bg-accent-hover
            "
            style={{color: 'var(--cream-on-dark)'}}
          >
            <MessageCircle
              aria-hidden="true"
              className="size-4 shrink-0"
              strokeWidth={2}
            />
            {t('bookNow')}
          </Link>

          <MobileMenu
            links={links}
            toursList={navLabels.toursList}
            bookLabel={t('bookNow')}
            whatsappLabel={t('whatsappCta')}
            languageLabel={tLang('ariaLabel')}
          />
        </div>
      </div>
    </header>
  );
}
