import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {LanguageSwitcher} from './LanguageSwitcher';

export async function Navbar() {
  const t = await getTranslations('Nav');
  const tBrand = await getTranslations('Brand');

  const links = [
    {href: '/servizi', label: t('services')} as const,
    {href: '/tour-sicilia', label: t('tours')} as const,
    {href: '/chi-siamo', label: t('about')} as const,
    {href: '/contatti', label: t('contact')} as const
  ];

  return (
    <header
      className="
        sticky top-0 z-40
        bg-canvas/85 backdrop-blur-md
        border-b border-[var(--border)]/60
      "
    >
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Logo wordmark Cormorant italic */}
        <Link
          href="/"
          className="font-display italic font-medium text-xl sm:text-2xl text-primary tracking-tight hover:opacity-80 transition-opacity"
        >
          {tBrand('name')}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] uppercase tracking-[0.08em] font-medium text-ink/75 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: language switcher + book CTA */}
        <div className="flex items-center gap-4 sm:gap-6">
          <LanguageSwitcher />
          <Link
            href="/contatti"
            className="
              hidden sm:inline-flex items-center gap-2
              rounded-full bg-accent text-cream-on-dark
              px-5 py-2.5
              text-[13px] uppercase tracking-[0.05em] font-medium
              transition-all duration-200 ease-out
              hover:bg-accent-hover
              focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-3
            "
            style={{color: 'var(--cream-on-dark)'}}
          >
            {t('bookNow')}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
