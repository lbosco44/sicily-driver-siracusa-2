import {getTranslations} from 'next-intl/server';

export async function FaqAccordion() {
  const t = await getTranslations('Home.faq');

  const items = [
    {q: t('q1'), a: t('a1')},
    {q: t('q2'), a: t('a2')},
    {q: t('q3'), a: t('a3')},
    {q: t('q4'), a: t('a4')},
    {q: t('q5'), a: t('a5')},
    {q: t('q6'), a: t('a6')},
    {q: t('q7'), a: t('a7')}
  ];

  return (
    <section className="bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
              {t('eyebrow')}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
              {t('h2Pre')}{' '}
              <span className="italic">{t('h2Accent')}</span>
            </h2>
          </div>

          <ul className="divide-y divide-[var(--border)]">
            {items.map((item, i) => (
              <li key={i} className="py-2">
                <details className="group">
                  <summary className="cursor-pointer list-none py-5 sm:py-6 flex items-start justify-between gap-6">
                    <h3 className="font-display text-xl sm:text-2xl font-medium text-primary leading-snug max-w-[55ch] group-open:italic transition-all">
                      {item.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="font-display text-2xl text-accent leading-none mt-1 transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="pb-6 pr-10 text-[16px] sm:text-[17px] leading-[1.7] text-ink/80 max-w-prose">
                    {item.a}
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
