'use client';

import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
import {DesktopSticky} from './esperienze/DesktopSticky';
import {MobileScrollLock} from './esperienze/MobileScrollLock';

// EsperienzeScroll — entry point pubblico.
// Render double-mount via Tailwind responsive classes (T6): niente piu'
// matchMedia + useState/useEffect (causava potenziale flash mobile→desktop
// al primo render). Solo uno dei due e' visibile per CSS; l'altro ha
// display:none e i suoi effects naturalmente non triggherano (useScroll
// vede 0 height, IntersectionObserver non firea threshold).

export function EsperienzeScroll() {
  const t = useTranslations('Home.esperienze');

  return (
    <section aria-label={t('eyebrow')}>
      <div className="md:hidden">
        <MobileScrollLock />
      </div>
      <div className="hidden md:block">
        <DesktopSticky />
      </div>

      {/* Band terracotta finale */}
      <div className="bg-accent py-20 sm:py-24">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-7">
          <p
            className="font-display text-display-sm font-light text-cream-on-dark max-w-[28ch]"
            style={{fontStretch: '95%'}}
          >
            {t('customTagline')}
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-3 rounded-full bg-cream-on-dark px-7 py-3 text-[12px] uppercase tracking-[0.16em] font-medium text-accent hover:bg-cream-soft transition-colors self-start"
          >
            {t('customCta')}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
