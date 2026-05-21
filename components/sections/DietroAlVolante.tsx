import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import Image from 'next/image';

export async function DietroAlVolante() {
  const t = await getTranslations('Home.about');

  return (
    <section className="bg-[var(--muted-bg)] py-24 sm:py-32">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Testo asimmetrico — leggermente "diario" */}
          <div className="lg:pt-8">
            <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
              {t('eyebrow')}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
              {t('h2Pre')}{' '}
              <span className="italic">{t('h2Accent')}</span>
            </h2>

            <div className="mt-10 space-y-5 text-[17px] sm:text-[18px] leading-[1.7] text-ink/85 max-w-prose">
              <p className="font-display italic text-2xl sm:text-3xl text-primary leading-[1.3]">
                {t('body1')}
              </p>
              <p>{t('body2')}</p>
              <p className="text-ink/65">{t('body3')}</p>
            </div>

            <Link
              href="/chi-siamo"
              className="inline-flex items-center gap-2 mt-10 text-[14px] uppercase tracking-[0.06em] font-medium text-primary border-b border-accent/60 pb-1 hover:border-accent transition-colors"
            >
              {t('cta')}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Foto editoriale */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=70&auto=format&fm=webp"
              alt="Interno Mercedes Classe V — sedili in pelle con luce ambient calda"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{filter: 'saturate(0.82) brightness(0.96) contrast(1.05)'}}
              loading="lazy"
            />
            {/* Caption marginalia */}
            <p className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.14em] text-[#F5EFE4] font-medium font-display">
              Mercedes Classe V · interni
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
