'use client';

import {useTranslations} from 'next-intl';
import {openCookieSettings} from './CookieBanner';

// Trigger riapertura banner cookie da link in Footer.
// Wrapper client perché il Footer è server component.

export function CookieSettingsLink({className}: {className?: string}) {
  const t = useTranslations('Cookie');
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className={
        className ??
        'text-cream-on-dark/70 hover:text-accent transition-colors underline-offset-4 hover:underline'
      }
    >
      {t('manageLink')}
    </button>
  );
}
