import {getTranslations} from 'next-intl/server';
import Image from 'next/image';
import {SearchBar} from './SearchBar';

export async function HeroLaRotta() {
  const t = await getTranslations('Home.hero');

  return (
    <section className="relative isolate min-h-[min(94vh,820px)] flex items-end overflow-hidden">
      {/* Foto background — placeholder Unsplash Sicilia luce dorata */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1583435423797-be15ddffe3c2?w=2400&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{filter: 'saturate(0.85) brightness(0.92) contrast(1.05)'}}
        />
        {/* Vignettatura editoriale + leggero darken al footer della foto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/55" />
      </div>

      <div className="relative w-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 pb-12 sm:pb-16 pt-32 sm:pt-40">
        {/* Eyebrow */}
        <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.18em] font-medium text-[#F5EFE4]/85 mb-6">
          {t('eyebrow')}
        </p>

        {/* H1 */}
        <h1 className="font-display font-medium text-[#F5EFE4] text-[44px] sm:text-[68px] lg:text-[88px] leading-[1.02] tracking-tight max-w-[18ch]">
          {t('h1Pre')}{' '}
          <span className="italic font-medium">{t('h1Accent')}</span>{' '}
          {t('h1Post')}
        </h1>

        {/* Tagline SEO-locked */}
        <p className="mt-6 sm:mt-8 max-w-[44ch]">
          <span className="font-display italic text-[#F5EFE4] text-xl sm:text-2xl leading-relaxed">
            {t('taglineAccent')}
          </span>
          <span className="text-[#F5EFE4]/80 text-sm sm:text-base ml-2 font-medium">
            {t('taglinePost')}
          </span>
        </p>

        {/* Search bar */}
        <div className="mt-10 sm:mt-12 max-w-3xl">
          <SearchBar />
          <p className="mt-3 text-xs sm:text-sm text-[#F5EFE4]/70">
            {t('secondaryCta')}{' '}
            <a
              href="https://wa.me/393756413379"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-accent hover:text-accent transition-colors"
            >
              →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
