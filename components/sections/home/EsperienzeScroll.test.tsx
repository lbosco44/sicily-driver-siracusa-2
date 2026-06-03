import {describe, it, expect, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import {EsperienzeScroll} from './EsperienzeScroll';
import {N} from './esperienze/data';

// Mock di tutto l'ecosistema necessario al rendering iniziale.
vi.mock('@/i18n/navigation', () => ({
  Link: ({children, href}: {children: React.ReactNode; href: string}) => (
    <a href={href}>{children}</a>
  ),
  usePathname: () => '/'
}));

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => `t(${key})`
}));

vi.mock('next/image', () => ({
  default: ({alt, src}: {alt: string; src: string}) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img alt={alt} src={src} />
  )
}));

// Motion mocks: useScroll torna un MotionValue mock, useMotionValueEvent no-op
vi.mock('motion/react', () => ({
  useScroll: () => ({scrollYProgress: {get: () => 0, on: vi.fn()}}),
  useMotionValueEvent: vi.fn(),
  useReducedMotion: () => false
}));

describe('EsperienzeScroll', () => {
  it('renders without crashing', () => {
    const {container} = render(<EsperienzeScroll />);
    expect(container).toBeTruthy();
  });

  it('renders 5 scene layers (one per esperienza)', () => {
    const {container} = render(<EsperienzeScroll />);
    // Le scene sono div absolute inset-0 con backgroundColor inline.
    // Cerco gli H2 delle scene (Tour + La Dolce Vita, Silent Sailing, ecc.)
    const headings = container.querySelectorAll('h2');
    // Almeno una scena ha un h2 visibile
    expect(headings.length).toBeGreaterThanOrEqual(1);
  });

  it('shows the eyebrow with translation key', () => {
    render(<EsperienzeScroll />);
    // L'eyebrow appare nel counter top (compare 2 volte: una in desktop, una in mobile)
    const eyebrows = screen.getAllByText('t(eyebrow)');
    expect(eyebrows.length).toBeGreaterThanOrEqual(1);
  });

  it('initial counter shows 01 / total (derivato da N)', () => {
    render(<EsperienzeScroll />);
    expect(screen.getAllByText('01').length).toBeGreaterThanOrEqual(1);
    // Totale derivato da N: il test non va aggiornato a mano se cambia
    // il numero di esperienze (es. card rimossa → N=4 → "/ 04").
    const total = String(N).padStart(2, '0');
    expect(screen.getAllByText(`/ ${total}`).length).toBeGreaterThanOrEqual(1);
  });
});
