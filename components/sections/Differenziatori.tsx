import {getTranslations} from 'next-intl/server';

export async function Differenziatori() {
  const t = await getTranslations('Home.differenziatori');

  const items = [
    {
      number: t('item1Number'),
      title: t('item1Title'),
      body: t('item1Body')
    },
    {
      number: t('item2Number'),
      title: t('item2Title'),
      body: t('item2Body')
    },
    {
      number: t('item3Number'),
      title: t('item3Title'),
      body: t('item3Body')
    }
  ];

  return (
    <section className="bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
            {t('eyebrow')}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
            {t('h2Pre')}{' '}
            <span className="italic">{t('h2Accent')}</span>
          </h2>
        </div>

        {/* 3 voci verticali con numerazione editoriale grande */}
        <ul className="divide-y divide-[var(--border)]">
          {items.map((item, i) => (
            <li
              key={i}
              className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-16 items-start"
            >
              <p className="font-display italic font-medium text-accent text-[96px] sm:text-[140px] leading-[0.85] tabular-nums">
                {item.number}
              </p>
              <div className="lg:pt-4">
                <h3 className="font-display italic font-medium text-2xl sm:text-3xl text-primary leading-tight max-w-[26ch]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.65] text-ink/80 max-w-[55ch]">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
