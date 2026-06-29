// Classificazione lingua delle recensioni Google reali (Testimonianza).
// Le recensioni sono testi ORIGINALI dei clienti: non vanno tradotte.
// Su pagine IT mostriamo solo le recensioni scritte in italiano, su pagine EN
// solo quelle in inglese (filtro per-locale, scelta cliente 2026-06-29).
//
// L'elenco sotto è l'insieme degli autori delle recensioni in ITALIANO.
// Tutte le altre recensioni in `Home.testimonianze.items` sono in inglese.
// Se in futuro si aggiungono recensioni, aggiornare questo set.
export const ITALIAN_REVIEW_AUTHORS = new Set<string>([
  'Gaia Conforto',
  'Alberto Scamacca',
  'Giulia Magnano',
  'Giovanni Napolitano',
  'Emilio Di Maggio'
]);

/** True se la recensione (per autore) è in italiano. */
export function isItalianReview(author: string): boolean {
  return ITALIAN_REVIEW_AUTHORS.has(author);
}
