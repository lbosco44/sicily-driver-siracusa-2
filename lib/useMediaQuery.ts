'use client';

import {useState, useEffect} from 'react';

// Hook matchMedia SSR-safe. Ritorna SEMPRE false al primo render (server +
// idratazione) per evitare hydration mismatch, poi si allinea al vero stato
// del viewport dopo il mount e reagisce ai cambi di breakpoint.
//
// Usato per NON eseguire su mobile il lavoro pesante dei componenti WebGL
// (creazione context webgl2 + download texture) che restano montati ma
// display:none via `hidden md:block`. Il DOM renderizzato non cambia → niente
// flash mobile→desktop; cambia solo se l'effetto costoso parte.
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}
