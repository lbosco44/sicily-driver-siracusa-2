import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';

export async function PartnerSelezionati() {
  const t = await getTranslations('Home.partnerSelezionati');

  const partners = [
    {name: t('card1Name'), tag: t('card1Tag')},
    {name: t('card2Name'), tag: t('card2Tag')},
    {name: t('card3Name'), tag: t('card3Tag')},
    {name: t('card4Name'), tag: t('card4Tag')}
  ];

  return (
    <section className="bg-[#D9C9B8] py-24 sm:py-32 border-y border-[var(--border)]">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 mb-12 sm:mb-14">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
              {t('eyebrow')}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
              {t('h2Pre')}{' '}
              <span className="italic">{t('h2Accent')}</span>
            </h2>
          </div>
          <p className="text-[17px] leading-[1.7] text-ink/80 max-w-[60ch] lg:self-end">
            {t('subhead')}
          </p>
        </div>

        {/* 4 card partner — scroll orizzontale mobile, grid 4 col desktop */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {partners.map((p, i) => (
            <li
              key={i}
              className="bg-canvas rounded-xl p-7 border border-[var(--border)]/40 flex flex-col gap-3"
            >
              <p
                className="font-display italic font-medium text-[40px] sm:text-[48px] leading-none mb-3"
                style={{color: 'var(--accent-decorative)'}}
              >
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="font-display italic font-medium text-xl sm:text-2xl text-primary leading-tight">
                {p.name}
              </h3>
              <p className="text-[14px] leading-relaxed text-ink/70">{p.tag}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <Link
            href="/partner"
            className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.06em] font-medium text-primary border-b border-accent/60 pb-1 hover:border-accent transition-colors"
          >
            {t('cta')}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
