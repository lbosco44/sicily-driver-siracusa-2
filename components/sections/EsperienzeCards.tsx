import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import Image from 'next/image';

type CardMeta = {
  number: string;
  tag: string;
  title: string;
  body: string;
  href:
    | '/tour/dolce-vita-siracusa'
    | '/tour/silent-sailing'
    | '/tour/isola-delle-correnti'
    | '/tour/etna-premium'
    | '/tour-barocco';
  image: string;
  bg: string;
  textColor: string;
  numberColor: string;
  // Posizione griglia asimmetrica magazine
  layout: string;
};

export async function EsperienzeCards() {
  const t = await getTranslations('Home.esperienze');

  const cards: CardMeta[] = [
    {
      number: '01',
      tag: t('card1Tag'),
      title: t('card1Title'),
      body: t('card1Body'),
      href: '/tour/dolce-vita-siracusa',
      image:
        'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?w=1400&q=70&auto=format&fm=webp',
      bg: 'bg-[#EDE5D6]',
      textColor: 'text-ink',
      numberColor: 'var(--accent-decorative)',
      // Hero: tall su lg (span 2 rows)
      layout: 'lg:row-span-2 lg:min-h-[640px]'
    },
    {
      number: '02',
      tag: t('card2Tag'),
      title: t('card2Title'),
      body: t('card2Body'),
      href: '/tour/silent-sailing',
      image:
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1000&q=70&auto=format&fm=webp',
      bg: 'bg-primary',
      textColor: 'text-[#F5EFE4]',
      numberColor: 'var(--accent-decorative)',
      layout: ''
    },
    {
      number: '03',
      tag: t('card3Tag'),
      title: t('card3Title'),
      body: t('card3Body'),
      href: '/tour/isola-delle-correnti',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&q=70&auto=format&fm=webp',
      bg: 'bg-[#D9C9B8]',
      textColor: 'text-primary',
      numberColor: 'var(--primary)',
      layout: ''
    },
    {
      number: '04',
      tag: t('card4Tag'),
      title: t('card4Title'),
      body: t('card4Body'),
      href: '/tour/etna-premium',
      image:
        'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=1000&q=70&auto=format&fm=webp',
      bg: 'bg-accent',
      textColor: 'text-[#F5EFE4]',
      numberColor: '#F5EFE4',
      layout: ''
    },
    {
      number: '05',
      tag: t('card5Tag'),
      title: t('card5Title'),
      body: t('card5Body'),
      href: '/tour-barocco',
      image:
        'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1000&q=70&auto=format&fm=webp',
      // Verde ulivo desaturato — uso muted-bg con border accent
      bg: 'bg-[var(--muted-bg)]',
      textColor: 'text-primary',
      numberColor: 'var(--secondary)',
      layout: ''
    }
  ];

  return (
    <section className="bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
            {t('eyebrow')}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08] mb-6">
            {t('h2Pre')}{' '}
            <span className="italic">{t('h2Accent')}</span>
          </h2>
          <p className="text-[16px] sm:text-[17px] leading-[1.7] text-ink/75 max-w-[60ch]">
            {t('subhead')}
          </p>
        </div>

        {/* Griglia asimmetrica magazine: card 1 hero (tall left), 2-3 stacked right, 4-5 wide bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:auto-rows-[280px]">
          {cards.map((card) => (
            <Link
              key={card.number}
              href={card.href}
              className={`group relative overflow-hidden rounded-xl ${card.bg} ${card.textColor} ${card.layout} p-7 sm:p-9 flex flex-col justify-between min-h-[360px] transition-shadow duration-300 hover:shadow-[0_18px_48px_rgba(42,37,32,0.18)]`}
              style={{color: 'inherit'}}
            >
              {/* Foto decorativa */}
              <div className="absolute inset-y-0 right-0 w-1/2 opacity-[0.18] lg:opacity-[0.25] pointer-events-none">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-current/30 via-current/10 to-transparent opacity-40" />
              </div>

              {/* Top: numero + tag */}
              <div className="relative flex items-start justify-between gap-4">
                <p
                  className="font-display italic font-medium text-[88px] sm:text-[120px] leading-[0.85]"
                  style={{color: card.numberColor}}
                >
                  {card.number}
                </p>
                <p className="text-[10px] uppercase tracking-[0.14em] font-medium opacity-95 mt-3 max-w-[16ch] text-right">
                  {card.tag}
                </p>
              </div>

              {/* Bottom: titolo + body + CTA */}
              <div className="relative">
                <h3 className="font-display italic font-medium text-3xl sm:text-4xl leading-tight max-w-[18ch]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.55] opacity-95 max-w-[40ch]">
                  {card.body}
                </p>
                <p className="mt-6 text-[12px] uppercase tracking-[0.08em] font-medium opacity-95 group-hover:opacity-100 transition-opacity inline-flex items-center gap-2">
                  {t('cardCta')}
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

        {/* Riga finale "tour su misura" */}
        <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-5 pt-10 border-t border-[var(--border)]/60">
          <p className="text-[17px] sm:text-[18px] font-display italic text-ink/80 max-w-[60ch]">
            {t('customTagline')}
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.06em] font-medium text-primary border-b border-accent/60 pb-1 hover:border-accent transition-colors self-start"
          >
            {t('customCta')}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
