import '@testing-library/jest-dom/vitest';
import {afterEach, vi} from 'vitest';
import {cleanup} from '@testing-library/react';

afterEach(() => {
  cleanup();
});

// IntersectionObserver mock per i test (happy-dom non lo implementa).
// I test che hanno bisogno di controllarlo possono fare vi.mocked(...).
class IntersectionObserverMock {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);
  root = null;
  rootMargin = '';
  thresholds = [];
  constructor(public callback: IntersectionObserverCallback) {}
}
globalThis.IntersectionObserver =
  IntersectionObserverMock as unknown as typeof IntersectionObserver;

// scrollTo mock per happy-dom
if (!window.scrollTo) {
  window.scrollTo = vi.fn() as never;
}

// matchMedia mock
if (!window.matchMedia) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }));
}
