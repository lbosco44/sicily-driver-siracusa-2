'use client';

import {useEffect, useRef} from 'react';

// Focus trap WCAG 2.4.3 compliant per dialog/drawer:
// 1) Salva l'elemento focused all'apertura
// 2) Auto-focus sul primo elemento tabbabile del container
// 3) Loop Tab / Shift+Tab (non si esce dal container)
// 4) Ripristina focus all'origine alla chiusura
//
// Usage:
//   const ref = useFocusTrap<HTMLDivElement>(open);
//   return <div ref={ref} role="dialog">...</div>

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(',');

export function useFocusTrap<T extends HTMLElement>(active: boolean) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (!active) return;
    const container = containerRef.current;
    if (!container) return;

    // Salva chi era focused prima dell'apertura
    const previouslyFocused = document.activeElement as HTMLElement | null;

    // Auto-focus sul primo elemento tabbabile (requestAnimationFrame
    // per dare tempo all'animazione enter di partire)
    const raf = requestAnimationFrame(() => {
      const list = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (list.length > 0) list[0].focus();
    });

    // Loop Tab dentro container
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const list = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first || !container.contains(document.activeElement)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    container.addEventListener('keydown', onKey);

    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener('keydown', onKey);
      // Ripristina focus solo se l'elemento esiste ancora nel DOM
      if (previouslyFocused && document.body.contains(previouslyFocused)) {
        previouslyFocused.focus();
      }
    };
  }, [active]);

  return containerRef;
}
