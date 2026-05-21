import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import Image from 'next/image';

type Item = {
  number: string;
  caption: string;
  href:
    | '/tour-ortigia-taormina'
    | '/ncc-noto'
    | '/tour-barocco'
    | '/ncc-ragusa'
    | '/tour-etna'
    | '/ncc-taormina';
  image: string;
  span: string;
};

export async function DestinazioniMosaic() {
  const t = await getTranslations('Home.destinazioni');

  const items: Item[] = [
    {
      number: '01',
      caption: t('ortigia'),
      href: '/tour-ortigia-taormina',
      image:
        'https://images.unsplash.com/photo-1602473922972-1f9c0c7a2dbe?w=1200&q=80',
      span: 'lg:col-span-6 lg:row-span-2 aspect-[4/5] lg:aspect-auto'
    },
    {
      number: '02',
      caption: t('noto'),
      href: '/ncc-noto',
      image:
        'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1000&q=80',
      span: 'lg:col-span-3 lg:row-span-1 aspect-[4/3]'
    },
    {
      number: '03',
      caption: t('modica'),
      href: '/tour-barocco',
      image:
        'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1000&q=80',
      span: 'lg:col-span-3 lg:row-span-1 aspect-[4/3]'
    },
    {
      number: '04',
      caption: t('ragusa'),
      href: '/ncc-ragusa',
      image:
        'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1000&q=80',
      span: 'lg:col-span-3 lg:row-span-1 aspect-[4/3]'
    },
    {
      number: '05',
      caption: t('etna'),
      href: '/tour-etna',
      image:
        'https://images.unsplash.com/photo-1592833167001-5c43d9a6f3a8?w=1000&q=80',
      span: 'lg:col-span-3 lg:row-span-1 aspect-[4/3]'
    },
    {
      number: '06',
      caption: t('taormina'),
      href: '/ncc-taormina',
      image:
        'https://images.unsplash.com/photo-1601128020608-e3e1afe1c1a3?w=1000&q=80',
      span: 'lg:col-span-12 lg:row-span-1 aspect-[16/9] lg:aspect-[21/9]'
    }
  ];

  return (
    <section className="bg-[var(--muted-bg)] py-24 sm:py-32">
      <div className="mx-auto max-w-(--container-editorial) px-6 sm:px-10">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-secondary mb-5">
            {t('eyebrow')}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.08]">
            {t('h2Pre')}{' '}
            <span className="italic">{t('h2Accent')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {items.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className={`group relative overflow-hidden rounded-lg ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.caption}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{filter: 'saturate(0.82) brightness(0.96) contrast(1.05)'}}
              />
              {/* Gradient overlay editoriale */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Label */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between gap-3">
                <p className="font-display italic text-cream-on-dark text-lg sm:text-xl leading-snug max-w-[24ch]">
                  <span className="font-medium opacity-95 mr-2">{item.number}</span>
                  {item.caption.replace(/^\d+\s·\s/, '')}
                </p>
                <span
                  aria-hidden="true"
                  className="text-cream-on-dark/85 text-xl translate-y-0.5 transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
