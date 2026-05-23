import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';

export async function TransferRapidoLayer() {
  const t = await getTranslations('Home.transferRapido');

  return (
    <section
      className="bg-accent py-10 sm:py-12 border-y border-accent-active/30"
      style={{color: 'var(--cream-on-dark)'}}
    >
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_auto] gap-6 lg:gap-12 items-center">
          <div>
            <h2 className="font-display italic font-medium text-2xl sm:text-3xl lg:text-4xl text-[#F5EFE4] leading-tight">
              {t('h2')}
            </h2>
            <p className="mt-2 text-[15px] sm:text-[16px] text-[#F5EFE4]/90 leading-relaxed max-w-[60ch]">
              {t('body')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:shrink-0">
            <a
              href="tel:+393756413379"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F5EFE4] text-accent px-7 py-3.5 text-[13px] uppercase tracking-[0.05em] font-medium tabular-nums transition-all duration-200 hover:bg-[#F5EFE4]/90"
            >
              {t('ctaCall')}
            </a>
            <Link
              href="/servizi"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F5EFE4]/50 px-7 py-3.5 text-[13px] uppercase tracking-[0.05em] font-medium text-[#F5EFE4] hover:bg-[#F5EFE4]/10 transition-colors"
            >
              {t('ctaPrices')}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
