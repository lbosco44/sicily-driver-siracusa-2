'use client';

import {Link, usePathname} from '@/i18n/navigation';
import type {ReactNode, MouseEvent} from 'react';

// Link a / che fa SEMPRE scroll-to-top, anche se siamo gia' sulla homepage.
// (Lo ScrollToTop globale si attiva solo al cambio di pathname.)

export function HomeLink({
  children,
  className,
  style,
  ariaLabel,
  onNavigate
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      // Stessa pagina: smooth scroll a top, niente navigation
      e.preventDefault();
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
    // Cambio pagina: Link naviga, ScrollToTop globale gestisce il reset
    onNavigate?.();
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      className={className}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}
