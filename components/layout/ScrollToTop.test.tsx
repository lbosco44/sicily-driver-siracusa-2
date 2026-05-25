import {describe, it, expect, vi, beforeEach} from 'vitest';
import {render} from '@testing-library/react';
import {ScrollToTop} from './ScrollToTop';

let mockPathname = '/';
vi.mock('@/i18n/navigation', () => ({
  usePathname: () => mockPathname
}));

describe('ScrollToTop', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.scrollTo = vi.fn() as never;
  });

  it('scrolls to top on mount', () => {
    mockPathname = '/qualsiasi';
    render(<ScrollToTop />);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  });

  it('scrolls to top again when pathname changes', () => {
    mockPathname = '/a';
    const {rerender} = render(<ScrollToTop />);
    expect(window.scrollTo).toHaveBeenCalledTimes(1);

    mockPathname = '/b';
    rerender(<ScrollToTop />);
    expect(window.scrollTo).toHaveBeenCalledTimes(2);
  });

  it('renders null (no DOM output)', () => {
    const {container} = render(<ScrollToTop />);
    expect(container.firstChild).toBeNull();
  });
});
