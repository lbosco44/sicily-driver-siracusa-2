'use client';

import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {useTransition} from 'react';
import {cn} from '@/lib/utils';

export function LanguageSwitcher({className}: {className?: string}) {
  const locale = useLocale();
  const t = useTranslations('LanguageSwitcher');
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (next: 'it' | 'en') => {
    if (next === locale || isPending) return;
    startTransition(() => {
      router.replace(pathname, {locale: next});
    });
  };

  return (
    <div
      role="group"
      aria-label={t('ariaLabel')}
      className={cn(
        'inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-medium',
        className
      )}
    >
      <button
        type="button"
        onClick={() => switchLocale('it')}
        aria-current={locale === 'it' ? 'true' : undefined}
        className={cn(
          'transition-opacity duration-200 cursor-pointer',
          locale === 'it'
            ? 'text-primary opacity-100'
            : 'text-ink/50 hover:opacity-100 hover:text-primary'
        )}
      >
        {t('it')}
      </button>
      <span aria-hidden="true" className="text-ink/30">
        /
      </span>
      <button
        type="button"
        onClick={() => switchLocale('en')}
        aria-current={locale === 'en' ? 'true' : undefined}
        className={cn(
          'transition-opacity duration-200 cursor-pointer',
          locale === 'en'
            ? 'text-primary opacity-100'
            : 'text-ink/50 hover:opacity-100 hover:text-primary'
        )}
      >
        {t('en')}
      </button>
    </div>
  );
}
