import {getTranslations} from 'next-intl/server';
import Image from 'next/image';
import {SearchBar} from './SearchBar';

export async function HeroLaRotta() {
  const t = await getTranslations('Home.hero');

  return (
    <section className="relative isolate min-h-[min(94vh,820px)] flex items-end overflow-hidden">
      {/* Foto background — Sicilia luce dorata, sizes responsive, filter sul wrapper */}
      <div
        className="absolute inset-0 -z-10"
        style={{filter: 'saturate(0.85) brightness(0.92) contrast(1.05)'}}
      >
        <Image
          src="https://images.unsplash.com/photo-1583435423797-be15ddffe3c2?w=1600&q=70&auto=format&fm=webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1600px"
          quality={70}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wCEAAkGBxAQEBAQEBAQEA8QDxAQDw8PDw8PDw8PFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAQGi0lHR8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAAoAFAMBIgACEQEDEQH/xAAVAAEBAQAAAAAAAAAAAAAAAAACAAH/xAAYEAEAAwEAAAAAAAAAAAAAAAAAAQIDEf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AzhfElQ2H/9k="
          className="object-cover"
        />
        {/* Overlay editoriale: gradient da sinistra (testo) + leggero darken complessivo */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      <div className="relative w-full mx-auto max-w-(--container-editorial) px-6 sm:px-10 pb-12 sm:pb-16 pt-32 sm:pt-40">
        <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.18em] font-medium text-[#F5EFE4]/90 mb-6">
          {t('eyebrow')}
        </p>

        <h1 className="font-display font-medium text-[#F5EFE4] text-[44px] sm:text-[68px] lg:text-[88px] leading-[1.02] tracking-tight max-w-[18ch]">
          {t('h1Pre')}{' '}
          <span className="italic font-medium">{t('h1Accent')}</span>{' '}
          {t('h1Post')}
        </h1>

        <p className="mt-6 sm:mt-8 max-w-[44ch]">
          <span className="font-display italic text-[#F5EFE4] text-xl sm:text-2xl leading-relaxed">
            {t('taglineAccent')}
          </span>
          <span className="text-[#F5EFE4]/90 text-sm sm:text-base ml-2 font-medium">
            {t('taglinePost')}
          </span>
        </p>

        <div className="mt-10 sm:mt-12 max-w-3xl">
          <SearchBar />
          <p className="mt-3 text-xs sm:text-sm text-[#F5EFE4]/80">
            {t('secondaryCta')}{' '}
            <a
              href="https://wa.me/393756413379"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-accent-decorative hover:text-accent-decorative transition-colors"
            >
              →
              <span className="sr-only">(apre in nuova scheda)</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
