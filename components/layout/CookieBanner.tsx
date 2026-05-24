'use client';

import {useEffect, useState} from 'react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {motion, AnimatePresence, useReducedMotion} from 'motion/react';
import {useCookieConsent} from '@/lib/cookie-consent';

// GDPR cookie banner: prima visita → banner sticky-bottom con 3 azioni
// (Accetta tutto / Rifiuta tutto / Personalizza). Customize apre modale
// con switch per Analytics/Marketing. Riapribile da link "Gestisci cookie"
// nel footer (dispatch evento custom 'sds-cookie-open-settings').

const OPEN_SETTINGS_EVENT = 'sds-cookie-open-settings';

// Funzione esposta per riaprire il banner da link footer
export function openCookieSettings() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(OPEN_SETTINGS_EVENT));
}

export function CookieBanner() {
  const t = useTranslations('Cookie');
  const reduce = useReducedMotion();
  const {consent, hydrated, acceptAll, rejectAll, save} = useCookieConsent();

  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  // Riapri banner se trigger esterno (es. footer)
  useEffect(() => {
    const open = () => {
      // Pre-popola con valori attuali se già consensuati
      if (consent?.categories) {
        setAnalytics(consent.categories.analytics);
        setMarketing(consent.categories.marketing);
      }
      setShowSettings(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, [consent]);

  // Non renderizzare nulla finché lo stato non è idratato (evita flash SSR/hydration mismatch)
  if (!hydrated) return null;

  // Banner principale: visibile solo se NON c'è consenso E settings non aperti
  const showBanner = consent === null && !showSettings;

  return (
    <>
      {/* BANNER PRIMA VISITA */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            role="dialog"
            aria-labelledby="cookie-banner-title"
            aria-describedby="cookie-banner-desc"
            className="fixed bottom-0 inset-x-0 z-[80] px-4 sm:px-6 pb-4 sm:pb-6 pointer-events-none"
            initial={reduce ? false : {opacity: 0, y: 24}}
            animate={reduce ? {opacity: 1} : {opacity: 1, y: 0}}
            exit={reduce ? {opacity: 0} : {opacity: 0, y: 24}}
            transition={{duration: 0.5, ease: [0.16, 1, 0.3, 1]}}
          >
            <div
              className="pointer-events-auto mx-auto max-w-(--container-editorial) bg-ink text-cream-on-dark border border-cream-on-dark/15 shadow-2xl"
              style={{
                color: 'var(--cream-on-dark)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.4)'
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_auto] gap-6 lg:gap-10 items-center px-6 sm:px-8 py-7 sm:py-8">
                <div>
                  <p
                    id="cookie-banner-title"
                    className="font-display text-[18px] sm:text-[20px] font-light leading-snug mb-2.5"
                    style={{fontStretch: '95%'}}
                  >
                    {t('title')}
                  </p>
                  <p
                    id="cookie-banner-desc"
                    className="text-[14px] sm:text-[15px] leading-[1.55] text-cream-on-dark/75"
                  >
                    {t('body')}{' '}
                    <Link
                      href="/privacy"
                      className="underline underline-offset-4 decoration-cream-on-dark/40 hover:decoration-accent-decorative transition-colors"
                    >
                      {t('privacyLink')}
                    </Link>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 lg:flex-col xl:flex-row shrink-0">
                  <button
                    type="button"
                    onClick={acceptAll}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-[12px] uppercase tracking-[0.14em] font-medium text-cream-on-dark hover:bg-accent-hover transition-colors whitespace-nowrap"
                  >
                    {t('acceptAll')}
                  </button>
                  <button
                    type="button"
                    onClick={rejectAll}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-on-dark/35 px-7 py-3 text-[12px] uppercase tracking-[0.14em] font-medium text-cream-on-dark hover:bg-cream-on-dark/8 transition-colors whitespace-nowrap"
                  >
                    {t('rejectAll')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSettings(true)}
                    className="inline-flex items-center justify-center gap-2 text-[12px] uppercase tracking-[0.14em] font-medium text-cream-on-dark/75 hover:text-cream-on-dark transition-colors whitespace-nowrap px-2 py-3"
                  >
                    {t('customize')}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODALE PERSONALIZZAZIONE */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6"
            initial={reduce ? false : {opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.3}}
          >
            {/* Backdrop */}
            <button
              type="button"
              aria-label={t('closeAria')}
              onClick={() => setShowSettings(false)}
              className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              className="relative w-full max-w-[640px] max-h-[88vh] overflow-y-auto bg-canvas text-ink border border-[var(--border-strong)]"
              style={{boxShadow: '0 32px 80px rgba(0,0,0,0.35)'}}
              initial={reduce ? false : {opacity: 0, y: 32, scale: 0.98}}
              animate={{opacity: 1, y: 0, scale: 1}}
              exit={reduce ? {opacity: 0} : {opacity: 0, y: 24, scale: 0.98}}
              transition={{duration: 0.4, ease: [0.16, 1, 0.3, 1]}}
            >
              <div className="px-7 sm:px-10 py-9 sm:py-11">
                <div className="flex items-start justify-between gap-6 mb-7">
                  <div>
                    <p className="eyebrow mb-3">{t('settings.eyebrow')}</p>
                    <h2
                      id="cookie-settings-title"
                      className="font-display text-display-sm font-light text-ink leading-[1.05] max-w-[18ch]"
                      style={{fontStretch: '95%'}}
                    >
                      {t('settings.title')}
                    </h2>
                  </div>
                  <button
                    type="button"
                    aria-label={t('closeAria')}
                    onClick={() => setShowSettings(false)}
                    className="shrink-0 w-10 h-10 rounded-full border border-ink/20 text-ink hover:bg-ink hover:text-cream-on-dark transition-colors flex items-center justify-center text-xl leading-none"
                  >
                    ×
                  </button>
                </div>

                <p className="text-[15px] leading-[1.6] text-ink-soft mb-9 max-w-[58ch]">
                  {t('settings.body')}{' '}
                  <Link
                    href="/privacy"
                    className="underline underline-offset-4 decoration-accent/50 hover:decoration-accent transition-colors"
                  >
                    {t('privacyLink')}
                  </Link>
                </p>

                <ul className="divide-y divide-[var(--border)]">
                  <CategoryRow
                    name={t('categories.necessary.name')}
                    description={t('categories.necessary.description')}
                    alwaysOnLabel={t('alwaysOn')}
                    checked={true}
                    locked
                  />
                  <CategoryRow
                    name={t('categories.analytics.name')}
                    description={t('categories.analytics.description')}
                    checked={analytics}
                    onChange={setAnalytics}
                  />
                  <CategoryRow
                    name={t('categories.marketing.name')}
                    description={t('categories.marketing.description')}
                    checked={marketing}
                    onChange={setMarketing}
                  />
                </ul>

                <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      save({necessary: true, analytics, marketing});
                      setShowSettings(false);
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-[12px] uppercase tracking-[0.14em] font-medium text-cream-on-dark hover:bg-accent-hover transition-colors"
                  >
                    {t('settings.save')}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      acceptAll();
                      setShowSettings(false);
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/30 px-8 py-4 text-[12px] uppercase tracking-[0.14em] font-medium text-ink hover:bg-ink hover:text-cream-on-dark transition-colors"
                  >
                    {t('acceptAll')}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      rejectAll();
                      setShowSettings(false);
                    }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-4 text-[12px] uppercase tracking-[0.14em] font-medium text-ink/65 hover:text-ink transition-colors"
                  >
                    {t('rejectAll')}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Riga categoria con switch on/off accessibile
function CategoryRow({
  name,
  description,
  alwaysOnLabel,
  checked,
  locked = false,
  onChange
}: {
  name: string;
  description: string;
  alwaysOnLabel?: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <li className="py-6 grid grid-cols-[1fr_auto] gap-5 items-start">
      <div>
        <p
          className="font-display text-[19px] sm:text-[21px] font-light text-ink leading-snug"
          style={{fontStretch: '95%'}}
        >
          {name}
        </p>
        <p className="mt-2 text-[14px] leading-[1.55] text-ink-soft max-w-[54ch]">
          {description}
        </p>
      </div>

      {locked ? (
        <span className="shrink-0 text-[11px] uppercase tracking-[0.16em] font-medium text-secondary mt-2">
          {alwaysOnLabel}
        </span>
      ) : (
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-label={name}
          onClick={() => onChange?.(!checked)}
          className={`shrink-0 mt-1 relative w-12 h-7 rounded-full transition-colors ${
            checked ? 'bg-accent' : 'bg-ink/25'
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-cream-on-dark transition-transform ${
              checked ? 'translate-x-5' : ''
            }`}
          />
        </button>
      )}
    </li>
  );
}
