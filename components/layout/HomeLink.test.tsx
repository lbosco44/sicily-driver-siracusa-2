import {describe, it, expect, vi, beforeEach} from 'vitest';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {HomeLink} from './HomeLink';

// Mock dei moduli i18n (next-intl Link è un wrapper di next/link)
let mockPathname = '/';
vi.mock('@/i18n/navigation', () => ({
  Link: ({
    children,
    href,
    onClick,
    className,
    style,
    ...rest
  }: {
    children: React.ReactNode;
    href: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    className?: string;
    style?: React.CSSProperties;
  }) => (
    <a href={href} onClick={onClick} className={className} style={style} {...rest}>
      {children}
    </a>
  ),
  usePathname: () => mockPathname
}));

describe('HomeLink', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.scrollTo = vi.fn() as never;
  });

  it('renders children inside an anchor pointing to /', () => {
    mockPathname = '/some-page';
    render(<HomeLink>Home</HomeLink>);
    const link = screen.getByText('Home').closest('a');
    expect(link).toHaveAttribute('href', '/');
  });

  it('on /, click prevents navigation and triggers smooth scrollTo top', async () => {
    mockPathname = '/';
    const user = userEvent.setup();
    render(<HomeLink>Home</HomeLink>);
    await user.click(screen.getByText('Home'));

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    });
  });

  it('on other pages, click does NOT scroll (relies on ScrollToTop global)', async () => {
    mockPathname = '/chi-siamo';
    const user = userEvent.setup();
    render(<HomeLink>Home</HomeLink>);
    await user.click(screen.getByText('Home'));

    expect(window.scrollTo).not.toHaveBeenCalled();
  });

  it('calls onNavigate callback in both cases (same page + cross page)', async () => {
    const onNavigate = vi.fn();
    const user = userEvent.setup();

    mockPathname = '/';
    const {unmount} = render(<HomeLink onNavigate={onNavigate}>Home</HomeLink>);
    await user.click(screen.getByText('Home'));
    expect(onNavigate).toHaveBeenCalledTimes(1);
    unmount();

    mockPathname = '/altra';
    render(<HomeLink onNavigate={onNavigate}>Home2</HomeLink>);
    await user.click(screen.getByText('Home2'));
    expect(onNavigate).toHaveBeenCalledTimes(2);
  });

  it('forwards className, style, ariaLabel', () => {
    mockPathname = '/';
    render(
      <HomeLink
        className="foo"
        style={{color: 'red'}}
        ariaLabel="Torna alla home"
      >
        H
      </HomeLink>
    );
    const link = screen.getByText('H').closest('a');
    expect(link).toHaveClass('foo');
    expect(link).toHaveStyle({color: 'red'});
    expect(link).toHaveAttribute('aria-label', 'Torna alla home');
  });
});
