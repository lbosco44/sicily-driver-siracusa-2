// Types + dati statici condivisi tra DesktopSticky e MobileScrollLock.

export type EsperienzaHref =
  | '/tour/dolce-vita-siracusa'
  | '/tour/silent-sailing'
  | '/tour/isola-delle-correnti'
  | '/tour/etna-premium'
  | '/tour-barocco';

export type EsperienzaKey = '1' | '2' | '3' | '4' | '5';

export type Esperienza = {
  key: EsperienzaKey;
  href: EsperienzaHref;
  image: string;
  bg: string;
  align: 'left' | 'right';
};

export const ESPERIENZE: readonly Esperienza[] = [
  {
    key: '1',
    href: '/tour/dolce-vita-siracusa',
    image: '/images/home/dolce-vita.png',
    bg: '#E8DBC4',
    align: 'left'
  },
  {
    key: '2',
    href: '/tour/silent-sailing',
    image: '/images/home/sailing.png',
    bg: '#1E3A4F',
    align: 'right'
  },
  // Cliente 28/05/2026: card "Isola delle Correnti" (Dove finisce la Sicilia)
  // RIMOSSA dalla sezione scroll della home. Il tour resta accessibile dal
  // menu Tour Sicilia e dalla pagina /tour/isola-delle-correnti.
  {
    key: '4',
    href: '/tour/etna-premium',
    image: '/images/home/etna.png',
    bg: '#B05E40',
    align: 'right'
  },
  {
    key: '5',
    href: '/tour-barocco',
    image: '/images/home/barocco.png',
    bg: '#5F7367',
    align: 'left'
  }
] as const;

export const N = ESPERIENZE.length;
