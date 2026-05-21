import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import Image from 'next/image';

type CardData = {
  number: string;
  kicker: string;
  title: string;
  body: string;
  cta: string;
  href: '/servizi' | '/tour-barocco' | '/tour-etna' | '/wedding-eventi';
  bg: string;
  textColor: string;
  numberColor: string;
  image: string;
  layoutClass: string;
};

export async function ServiziCards() {
  const t = await getTranslations('Home.servizi');

  const cards: CardData[] = [
    {
      ...(t.raw('card1') as Omit<CardData, 'href' | 'bg' | 'textColor' | 'numberColor' | 'image' | 'layoutClass'>),
      href: '/servizi',
      bg: 'bg-[#EDE5D6]',
      textColor: 'text-ink',
      numberColor: 'text-accent',
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
      // Card 01 — LARGE (span 2 col / 2 row on desktop)
      layoutClass: 'lg:col-span-7 lg:row-span-2'
    },
    {
      ...(t.raw('card2') as Omit<CardData, 'href' | 'bg' | 'textColor' | 'numberColor' | 'image' | 'layoutClass'>),
      href: '/tour-barocco',
      bg: 'bg-primary',
      textColor: 'text-[#F5EFE4]',
      numberColor: 'text-accent',
      image:
        'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1000&q=80',
      // Card 02 — TALL (span 1 col / 2 row)
      layoutClass: 'lg:col-span-5 lg:row-span-2'
    },
    {
      ...(t.raw('card3') as Omit<CardData, 'href' | 'bg' | 'textColor' | 'numberColor' | 'image' | 'layoutClass'>),
      href: '/tour-etna',
      bg: 'bg-accent',
      textColor: 'text-[#F5EFE4]',
      numberColor: 'text-[#F5EFE4]/95',
      image:
        'https://images.unsplash.com/photo-1604930571107-7e07e44f31b8?w=1000&q=80',
      // Card 03 — SHORT (span 1 col / 1 row)
      layoutClass: 'lg:col-span-6 lg:row-span-1'
    },
    {
      ...(t.raw('card4') as Omit<CardData, 'href' | 'bg' | 'textColor' | 'numberColor' | 'image' | 'layoutClass'>),
      href: '/wedding-eventi',
      bg: 'bg-[#D9C9B8]',
      textColor: 'text-primary',
      numberColor: 'text-primary',
      image:
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1000&q=80',
      // Card 04 — WIDE (span 2 col / 1 row)
      layoutClass: 'lg:col-span-6 lg:row-span-1'
    }
  ];

  return (
    <section className="bg-canvas pt-12 pb-24 sm:pb-32">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        {/* Header sezione */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
            {t('eyebrow')}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
            {t('h2Pre')}{' '}
            <span className="italic">{t('h2Accent')}</span>
          </h2>
        </div>

        {/* Grid asimmetrico 12-col editorial magazine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:auto-rows-[260px]">
          {cards.map((card, i) => (
            <Link
              key={i}
              href={card.href}
              className={`group relative overflow-hidden rounded-xl ${card.bg} ${card.textColor} ${card.layoutClass} p-7 sm:p-9 flex flex-col justify-between min-h-[320px] lg:min-h-0 transition-shadow duration-300 hover:shadow-[0_18px_48px_rgba(42,37,32,0.18)]`}
              style={{color: 'inherit'}}
            >
              {/* Foto background sottile a destra */}
              <div className="absolute inset-y-0 right-0 w-1/2 opacity-[0.18] lg:opacity-[0.22] pointer-events-none">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                  style={{
                    filter: 'saturate(0.6) contrast(0.95)',
                    mixBlendMode: 'overlay'
                  }}
                />
                {/* Sfumatura verso il background card per dissolvere */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-current/60 via-current/30 to-transparent`}
                  style={{opacity: 0.4}}
                />
              </div>

              {/* Top: numero + kicker */}
              <div className="relative flex items-start justify-between gap-4">
                <p
                  className={`font-display italic font-medium text-[88px] sm:text-[110px] leading-[0.85] ${card.numberColor}`}
                >
                  {card.number}
                </p>
                <p className="text-[10px] uppercase tracking-[0.14em] font-medium opacity-80 mt-3 max-w-[12ch] text-right">
                  {card.kicker}
                </p>
              </div>

              {/* Bottom: title + body + CTA */}
              <div className="relative">
                <h3 className="font-display italic font-medium text-2xl sm:text-3xl leading-tight max-w-[18ch]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.55] opacity-85 max-w-[40ch]">
                  {card.body}
                </p>
                <p className="mt-6 text-[12px] uppercase tracking-[0.08em] font-medium opacity-90 group-hover:opacity-100 transition-opacity inline-flex items-center gap-2">
                  {card.cta}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
