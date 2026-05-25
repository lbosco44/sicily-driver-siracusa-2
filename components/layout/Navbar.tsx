import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {LanguageSwitcher} from './LanguageSwitcher';
import {DesktopNav} from './DesktopNav';
import {HomeLink} from './HomeLink';
import {MobileMenu, type MobileMenuLink} from './MobileMenu';
import {PHONE_DISPLAY} from '@/lib/contact';

export async function Navbar() {
  const t = await getTranslations('Nav');
  const tBrand = await getTranslations('Brand');
  const tNcc = await getTranslations('NccPage');
  const tTours = await getTranslations('Nav.toursList');

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
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 h-16 sm:h-20 flex items-center justify-between gap-4">
        <HomeLink
          ariaLabel={`${tBrand('name')} — ${t('home')}`}
          className="hover:opacity-80 transition-opacity shrink-0"
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

        <div className="flex items-center gap-3 sm:gap-6">
          <LanguageSwitcher />
          <Link
            href="/contatti"
            className="
              hidden sm:inline-flex items-center gap-2
              rounded-full bg-accent
              px-5 py-2.5
              text-[13px] uppercase tracking-[0.05em] font-medium
              transition-all duration-200 ease-out
              hover:bg-accent-hover
            "
            style={{color: 'var(--cream-on-dark)'}}
          >
            {t('bookNow')}
            <span aria-hidden="true">→</span>
          </Link>

          <MobileMenu
            links={links}
            toursList={navLabels.toursList}
            bookLabel={t('bookNow')}
            whatsappLabel={tNcc('ctaWhatsApp')}
            callLabel={t('callShort')}
            callValue={PHONE_DISPLAY}
          />
        </div>
      </div>
    </header>
  );
}
