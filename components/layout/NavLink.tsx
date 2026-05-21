'use client';

import {Link, usePathname} from '@/i18n/navigation';

export function NavLink({
  href,
  children
}: {
  href: '/servizi' | '/tour-sicilia' | '/chi-siamo' | '/contatti';
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={`text-[13px] uppercase tracking-[0.08em] font-medium transition-colors ${
        isActive
          ? 'text-primary'
          : 'text-ink/75 hover:text-primary'
      }`}
    >
      {children}
    </Link>
  );
}
