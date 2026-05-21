import {getTranslations} from 'next-intl/server';

export async function CtaFinale() {
  const t = await getTranslations('Home.ctaFinale');

  return (
    <section
      className="bg-primary py-24 sm:py-32"
      style={{color: 'var(--cream-on-dark)'}}
    >
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#F5EFE4]/65 mb-5">
            {t('eyebrow')}
          </p>
          <h2 className="font-display italic font-medium text-[#F5EFE4] text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
            {t('h2Accent')}
          </h2>
          <p className="mt-6 text-[18px] sm:text-[20px] text-[#F5EFE4]/80 leading-relaxed max-w-prose">
            {t('subhead')}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
            <a
              href="https://wa.me/393756413379"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-2
                rounded-full bg-accent
                px-8 py-4
                text-[13px] uppercase tracking-[0.05em] font-medium
                transition-all duration-200 ease-out
                hover:bg-accent-hover
              "
              style={{color: 'var(--cream-on-dark)'}}
            >
              {t('cta1')}
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="tel:+393756413379"
              className="
                inline-flex items-center justify-center gap-2
                rounded-full bg-accent
                px-8 py-4
                text-[13px] uppercase tracking-[0.05em] font-medium tabular-nums
                transition-all duration-200 ease-out
                hover:bg-accent-hover
              "
              style={{color: 'var(--cream-on-dark)'}}
            >
              {t('cta2')}
            </a>
          </div>

          <p className="mt-8 text-[14px] text-[#F5EFE4]/65">
            {t('cta3Pre')}{' '}
            <a
              href={`mailto:${t('cta3Email')}`}
              className="text-[#F5EFE4] underline underline-offset-4 decoration-accent/70 hover:decoration-accent transition-colors"
            >
              {t('cta3Email')}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
