// Tipi condivisi per i menu di navigazione.
// Evita duplicazione di shape tra Navbar (server), DesktopNav (client),
// MobileMenu (client).

import type {TourNavKey} from './tours-nav';

// Una voce per ogni tour key + chiave Desc parallela
export type ToursListLabels = Record<TourNavKey | `${TourNavKey}Desc`, string>;

export type NavLabels = {
  home: string;
  services: string;
  tours: string;
  about: string;
  contact: string;
  toursList: ToursListLabels;
};
