import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';

export async function IntroParagraph() {
  const t = await getTranslations('Home.intro');

  return (
    <section className="bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-6">
            {t('eyebrow')}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08] mb-10">
            {t('h2Pre')}{' '}
            <span className="italic">{t('h2Accent')}</span>{' '}
            {t('h2Post')}
          </h2>

          <div className="space-y-6 text-[17px] sm:text-[18px] leading-[1.7] text-ink/85">
            <p className="first-letter:font-display first-letter:italic first-letter:text-[64px] first-letter:leading-[0.85] first-letter:text-accent first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              <strong className="font-semibold text-ink">{t('body1Bold')}</strong>
              {t('body1Rest')}
            </p>
            <p>{t('body2')}</p>
          </div>

          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 mt-10 text-[14px] uppercase tracking-[0.06em] font-medium text-primary border-b border-accent/60 pb-1 hover:border-accent transition-colors"
          >
            {t('cta')}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
