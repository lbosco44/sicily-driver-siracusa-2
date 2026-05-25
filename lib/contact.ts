// Single source of truth per i contatti del cliente.
// Cambio numero futuro = 1 punto invece di find/replace su 13 file.

export const PHONE_RAW = '393756413379';
export const PHONE_DISPLAY = '+39 375 641 3379';
export const PHONE_TEL_HREF = `tel:+${PHONE_RAW}` as const;
export const WHATSAPP_HREF = `https://wa.me/${PHONE_RAW}` as const;
export const EMAIL = 'info@ncctaxisiracusa.com';
export const EMAIL_HREF = `mailto:${EMAIL}` as const;
