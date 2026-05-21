import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';

export async function ListinoTratte() {
  const t = await getTranslations('Home.listino');

  const rows = [
    {from: t('row1From'), to: t('row1To'), price: t('row1Price')},
    {from: t('row2From'), to: t('row2To'), price: t('row2Price')},
    {from: t('row3From'), to: t('row3To'), price: t('row3Price')},
    {from: t('row4From'), to: t('row4To'), price: t('row4Price')},
    {from: t('row5From'), to: t('row5To'), price: t('row5Price')},
    {from: t('row6From'), to: t('row6To'), price: t('row6Price')}
  ];

  return (
    <section className="bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          {/* Header sticky */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
              {t('eyebrow')}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
              {t('h2Pre')}{' '}
              <span className="italic">{t('h2Accent')}</span>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink/75 max-w-prose">
              {t('subhead')}
            </p>
          </div>

          {/* Tabella tratte */}
          <div>
            <ul className="divide-y divide-[var(--border)]">
              {rows.map((row, i) => (
                <li
                  key={i}
                  className="py-5 sm:py-6 grid grid-cols-[1fr_auto] sm:grid-cols-[2.5fr_1.5fr_auto] gap-4 items-center"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <span className="text-[15px] sm:text-[16px] text-ink/85 font-medium">
                      {row.from}
                    </span>
                    <span
                      aria-hidden="true"
                      className="hidden sm:inline text-ink/40"
                    >
                      →
                    </span>
                    <span className="sm:hidden text-[11px] text-ink/50 uppercase tracking-wider">
                      →
                    </span>
                  </div>
                  <span className="hidden sm:block text-[16px] text-ink font-medium">
                    {row.to}
                  </span>
                  <span className="sm:hidden text-[14px] text-ink/85 font-medium col-span-2 -mt-2">
                    {row.to}
                  </span>
                  <span className="font-display text-2xl sm:text-3xl font-medium text-accent tabular-nums whitespace-nowrap">
                    {row.price}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-[13px] leading-relaxed text-ink/55 max-w-prose">
              {t('microcopy')}
            </p>

            <Link
              href="/contatti"
              className="
                inline-flex items-center gap-2 mt-8
                rounded-full bg-accent text-cream-on-dark
                px-7 py-3.5
                text-[13px] uppercase tracking-[0.05em] font-medium
                transition-all duration-200 ease-out
                hover:bg-accent-hover
              "
              style={{color: 'var(--cream-on-dark)'}}
            >
              {t('cta')}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
