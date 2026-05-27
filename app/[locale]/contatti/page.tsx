import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {breadcrumbSchema, localBusinessSchema, JsonLd} from '@/lib/schema';
import {getBreadcrumb} from '@/lib/breadcrumbs';
import {routing} from '@/i18n/routing';
import {ContactForm} from '@/components/sections/ContactForm';
import type {Locale} from '@/lib/cities';
import {AnimatedHeading} from '@/components/ui/AnimatedHeading';
import {WHATSAPP_HREF, EMAIL_HREF} from '@/lib/contact';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Contatti.meta'});
  const itPath = '/it/contatti';
  const enPath = '/en/contact';
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: locale === 'it' ? itPath : enPath,
      languages: {it: itPath, en: enPath, 'x-default': itPath}
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      type: 'website',
      url: `https://ncctaxisiracusa.com${locale === 'it' ? itPath : enPath}`,
      siteName: 'Sicily Driver Siracusa'
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function ContattiPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Contatti');

  // Solo 2 canali: WhatsApp (sempre veloce) + Email (per richieste articolate).
  // Telefono rimosso il 27/05/2026 — il cliente non vuole gestire chiamate
  // dirette perche' la maggior parte dei clienti e' stranieri (barriere
  // linguistiche). I copy card2Label/Value/Note/CtaLabel restano nei messages
  // per backward compat / riuso futuro.
  const channels = [
    {
      kind: 'whatsapp' as const,
      label: t('ways.card1Label'),
      value: t('ways.card1Value'),
      note: t('ways.card1Note'),
      ctaLabel: t('ways.card1CtaLabel'),
      ctaHref: WHATSAPP_HREF,
      external: true
    },
    {
      kind: 'email' as const,
      label: t('ways.card3Label'),
      value: t('ways.card3Value'),
      note: t('ways.card3Note'),
      ctaLabel: t('ways.card3CtaLabel'),
      ctaHref: EMAIL_HREF,
      external: false
    }
  ];

  // bases (Siracusa/Noto/Marzamemi) rimosso dalla pagina contatti
  // il 27/05/2026 — info preservata nel Footer.Sedi, ridondante in pagina.
  // I copy bases.* restano nei messages per backward compat e per la
  // schema.org LocalBusiness che ne potrebbe aver bisogno.

  return (
    <>
      <JsonLd data={localBusinessSchema(locale as Locale)} />
      <JsonLd
        data={breadcrumbSchema(
          getBreadcrumb(
            'contatti',
            locale as Locale,
            `${t('hero.h1Pre')} ${t('hero.h1Accent')}`
          )
        )}
      />

      {/* 01 — FORM PRIMA (priorità cliente: il visitatore deve vedere
            subito il form aprendo la pagina contatti. Hero rimossa il
            27/05/2026 — il cliente non la voleva piu', il form ora e' la
            prima cosa visibile sotto la navbar.)
            pt-40/pt-52 replica il padding-top della vecchia hero per dare
            respiro tra navbar fissa e h2 del form. */}
      <section className="bg-canvas-deep pt-40 sm:pt-52 pb-32 sm:pb-40 border-b border-[var(--border)]">
        <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow mb-7">{t('form.eyebrow')}</p>
              <h2
                className="font-display text-display-md font-light text-ink max-w-[14ch] mb-7"
                style={{fontStretch: '95%'}}
              >
                {t('form.h2Pre')}{' '}
                <span className="italic text-accent">{t('form.h2Accent')}</span>
              </h2>
              <p className="text-[17px] leading-[1.7] text-ink-soft max-w-[44ch]">
                {t('form.subhead')}
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* 03 — DUE CANALI DIRETTI (WhatsApp + Email)
            Versione compatta sostituita il 27/05/2026.
            - max-w-3xl: container stretto (768px) anziche' editorial
            - py-16 sm:py-20: padding verticale ridotto
            - 2 card affiancate (1 col mobile, 2 cols sm+), gap 4
            - Card: icon (brand color) + label + value + note + CTA inline
            - Hover lift sottile (-translate-y-0.5) + border color shift
            - Telefono rimosso (cliente preferisce WhatsApp/email per
              barriere linguistiche con clientela straniera) */}
      <section className="bg-canvas py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <div className="text-center mb-10 sm:mb-12">
            <p className="eyebrow mb-4">{t('ways.eyebrow')}</p>
            <h2
              className="font-display text-display-sm sm:text-[40px] font-light text-ink leading-[1.05]"
              style={{fontStretch: '95%'}}
            >
              {t('ways.h2Pre')}{' '}
              <span className="italic text-accent">{t('ways.h2Accent')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {channels.map((c) => {
              const accentColor =
                c.kind === 'whatsapp' ? '#25D366' : 'var(--accent)';
              const hoverBorderClass =
                c.kind === 'whatsapp'
                  ? 'hover:border-[#25D366]'
                  : 'hover:border-accent';
              return (
                <a
                  key={c.kind}
                  href={c.ctaHref}
                  {...(c.external
                    ? {target: '_blank', rel: 'noopener noreferrer'}
                    : {})}
                  className={`group relative rounded-2xl border border-[var(--border-strong)] bg-canvas-warm p-6 sm:p-7 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(20,18,14,0.08)] ${hoverBorderClass}`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white"
                      style={{backgroundColor: accentColor}}
                      aria-hidden="true"
                    >
                      {c.kind === 'whatsapp' ? (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 32 32"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.55-1.66a12.74 12.74 0 0 0 6.25 1.6h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05A12.71 12.71 0 0 0 16 3.2zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.02 1.07-3.91-.25-.4a10.6 10.6 0 0 1-1.62-5.66c0-5.87 4.78-10.64 10.65-10.64 2.85 0 5.51 1.11 7.52 3.13a10.55 10.55 0 0 1 3.11 7.52c0 5.87-4.78 10.65-10.66 10.65zm5.84-7.97c-.32-.16-1.9-.94-2.19-1.04-.29-.11-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55l-.61-.01a1.17 1.17 0 0 0-.85.4c-.29.32-1.11 1.09-1.11 2.65 0 1.57 1.14 3.08 1.29 3.29.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.16-1.53.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
                        </svg>
                      ) : (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <path d="M22 6l-10 7L2 6" />
                        </svg>
                      )}
                    </span>
                    <p className="text-[11px] uppercase tracking-[0.22em] font-medium text-secondary">
                      {c.label}
                    </p>
                  </div>

                  <p
                    className="font-display italic text-[20px] sm:text-[22px] font-light text-ink leading-tight tabular-nums break-all"
                    style={{fontStretch: '95%'}}
                  >
                    {c.value}
                  </p>
                  <p className="mt-3 text-[14px] leading-[1.55] text-ink-soft">
                    {c.note}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-primary">
                    {c.ctaLabel}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          <p className="mt-8 text-center text-[12px] italic text-ink/45">
            {t('ways.pec')}
          </p>
        </div>
      </section>

      {/* 04 — TEMPI DI RISPOSTA (sezione blu compatta)
            Cliente 27/05/2026:
            - Rimossa sezione "Dove siamo" (sedi Siracusa/Noto/Marzamemi):
              info preservata nel Footer.Sedi, ridondante in pagina.
            - py-32/40 → py-20/24: padding verticale dimezzato
            - display-lg → display-md: h2 piu' contenuto
            - body 21px → 18px, businessNote 16px → 15px: gerarchia
              piu' compatta
            - max-w-(--container-narrow) → max-w-3xl: container piu' stretto */}
      <section
        className="relative bg-primary-deep py-20 sm:py-24 overflow-hidden"
        style={{color: 'var(--cream-on-dark)'}}
      >
        <div
          className="absolute top-[-15%] right-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(176, 94, 64, 0.15) 0%, transparent 60%)'
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl px-6 sm:px-10">
          <AnimatedHeading
            as="h2"
            text={`${t('times.h2Pre')} ${t('times.h2Accent')}`}
            className="font-display text-display-md font-light text-cream-on-dark max-w-[22ch] leading-[1.02]"
            style={{fontStretch: '95%'}}
          />
          <p className="mt-7 text-[17px] sm:text-[18px] text-cream-soft leading-[1.6] max-w-[58ch]">
            {t('times.body')}
          </p>
          <p className="mt-5 text-[15px] text-cream-on-dark/65 leading-[1.6] max-w-[58ch]">
            {t('times.businessNote')}
          </p>
        </div>
      </section>
    </>
  );
}
