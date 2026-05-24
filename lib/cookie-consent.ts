'use client';

import {useCallback, useEffect, useState} from 'react';

// GDPR cookie consent management — versioned, granular, persisted in
// localStorage. Re-prompt automatico se cambiamo la versione (es. aggiunta
// di nuove categorie). Niente fired analytics/marketing finché l'utente
// non ha dato consenso esplicito.

export type ConsentCategories = {
  necessary: true; // sempre on, non rifiutabile
  analytics: boolean;
  marketing: boolean;
};

export type Consent = {
  v: number; // schema version
  ts: number; // timestamp di salvataggio
  categories: ConsentCategories;
};

// Bump questa versione se cambiano le categorie/policy → re-prompt utente.
export const CONSENT_VERSION = 1;
const STORAGE_KEY = 'sds-cookie-consent';

// Custom event per propagare cambi tra istanze (es. footer + banner stessa pagina)
const CHANGE_EVENT = 'sds-cookie-consent-change';

function readStorage(): Consent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Consent;
    if (parsed?.v !== CONSENT_VERSION) return null; // versione cambiata → ignora
    return parsed;
  } catch {
    return null;
  }
}

function writeStorage(consent: Consent) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    window.dispatchEvent(new CustomEvent(CHANGE_EVENT, {detail: consent}));
  } catch {
    // localStorage può fallire (incognito, quota piena) — failsafe silenzioso
  }
}

function clearStorage() {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(CHANGE_EVENT, {detail: null}));
  } catch {
    // noop
  }
}

export function useCookieConsent() {
  // hydration-safe: initial null finché non leggiamo localStorage
  const [consent, setConsent] = useState<Consent | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setConsent(readStorage());
    setHydrated(true);

    // Listener custom event per sync tra istanze nella stessa tab
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<Consent | null>).detail;
      setConsent(detail);
    };
    window.addEventListener(CHANGE_EVENT, handler);

    // Sync cross-tab via storage event
    const storageHandler = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setConsent(readStorage());
      }
    };
    window.addEventListener('storage', storageHandler);

    return () => {
      window.removeEventListener(CHANGE_EVENT, handler);
      window.removeEventListener('storage', storageHandler);
    };
  }, []);

  const save = useCallback((categories: ConsentCategories) => {
    const next: Consent = {
      v: CONSENT_VERSION,
      ts: Date.now(),
      categories
    };
    writeStorage(next);
    setConsent(next);
  }, []);

  const acceptAll = useCallback(() => {
    save({necessary: true, analytics: true, marketing: true});
  }, [save]);

  const rejectAll = useCallback(() => {
    save({necessary: true, analytics: false, marketing: false});
  }, [save]);

  const reset = useCallback(() => {
    clearStorage();
    setConsent(null);
  }, []);

  return {
    consent,
    hydrated,
    hasConsent: consent !== null,
    save,
    acceptAll,
    rejectAll,
    reset
  };
}

// Helper non-React per check al volo (es. dentro un useEffect tracking)
export function getConsentCategory(category: keyof ConsentCategories): boolean {
  const c = readStorage();
  if (!c) return false;
  return Boolean(c.categories[category]);
}
