import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {LanguageSwitcher} from './LanguageSwitcher';
import {NavLink} from './NavLink';
import {MobileMenu, type MobileMenuLink} from './MobileMenu';

export async function Navbar() {
  const t = await getTranslations('Nav');
  const tBrand = await getTranslations('Brand');
  const tNcc = await getTranslations('NccPage');

  const links: MobileMenuLink[] = [
    {href: '/servizi', label: t('services')},
    {href: '/tour-sicilia', label: t('tours')},
    {href: '/chi-siamo', label: t('about')},
    {href: '/contatti', label: t('contact')}
  ];

  return (
    <header className="sticky top-0 z-40 bg-canvas/85 backdrop-blur-md border-b border-[var(--border)]/60">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 h-16 sm:h-20 flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${tBrand('name')} — ${t('home')}`}
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
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

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
            bookLabel={t('bookNow')}
            whatsappLabel={tNcc('ctaWhatsApp')}
            callLabel={t('callShort')}
            callValue="+39 375 641 3379"
          />
        </div>
      </div>
    </header>
  );
}
