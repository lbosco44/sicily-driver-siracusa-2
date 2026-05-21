import {getTranslations} from 'next-intl/server';

export async function TrustStrip() {
  const t = await getTranslations('Home.trust');

  const items = [
    {number: t('item1Number'), label: t('item1Label')},
    {number: t('item2Number'), label: t('item2Label')},
    {number: t('item3Number'), label: t('item3Label')}
  ];

  return (
    <section className="bg-canvas py-10 sm:py-14 border-b border-[var(--border)]/60">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-[var(--border)]">
          {items.map((item, i) => (
            <div
              key={i}
              className="sm:px-10 first:sm:pl-0 last:sm:pr-0 flex flex-col items-start sm:items-center text-left sm:text-center"
            >
              <p className="font-display text-3xl sm:text-4xl font-medium text-primary tabular-nums">
                {item.number}
              </p>
              <p className="mt-2 text-[14px] text-ink/65 font-medium tracking-[0.01em]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
