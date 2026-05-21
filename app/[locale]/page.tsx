import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';

export default async function HomePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Brand');

  return (
    <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10 py-24 sm:py-32">
      <p className="text-xs uppercase tracking-[0.12em] text-secondary mb-6 font-medium">
        Setup tecnico globale
      </p>
      <h1 className="text-5xl sm:text-7xl font-display font-medium leading-[1.05]">
        {t('name')}
      </h1>
      <p className="font-display italic text-2xl sm:text-3xl text-primary mt-6">
        {t('tagline')}
      </p>
      <p className="mt-12 max-w-prose text-ink/80 leading-relaxed">
        Placeholder home — la build delle 10 sezioni del WIREFRAME parte dal prossimo step.
        Palette, tipografia, navbar, footer, WhatsApp persistente e language switcher
        sono già attivi.
      </p>
    </div>
  );
}
