# Backup DNS — ncctaxisiracusa.com (Aruba)

**Snapshot preso il 2026-07-06, PRIMA del cutover verso Vercel.**
Serve per tornare indietro (rollback) se il cliente lo chiede. Tutti i valori
sono record DNS pubblici (nessun segreto). TTL di tutti i record: **1 Hour**.

Archivio visivo del sito vecchio (home): `before-old-site-home.png` (accanto a
questo file). Il vecchio sito resta comunque live su Aruba finché non ripuntiamo il DNS.

---

## ⏪ ROLLBACK — per tornare al sito vecchio (Aruba)
Al cutover cambiamo SOLO 4 record. Per annullare tutto, ripristinali così:

| Azione al rollback | Tipo | Host | Valore da rimettere |
|---|---|---|---|
| Rimetti | `A` | `@` | `89.46.106.60` |
| Ri-aggiungi | `AAAA` | `@` | `2a00:6d40:4:3::c245:60` |
| Rimetti | `A` | `www` | `89.46.106.60` |
| Ri-aggiungi | `AAAA` | `www` | `2a00:6d40:4:3::c245:60` |
| Rimuovi | `CNAME` | `www` | (quello aggiunto verso Vercel) |

Inoltre: **NON cancellare l'hosting Aruba** del vecchio sito per almeno 2–4
settimane — finché il DNS punta a Vercel resta lì spento, e il rollback è solo
un cambio DNS (pochi minuti + propagazione, veloce se TTL abbassato).

---

## Snapshot completo (50 record)

### A — sito (EDITABILI, sono questi che cambiamo)
- `A  @    89.46.106.60`
- `A  www  89.46.106.60`

### AAAA — sito IPv6 (EDITABILI, da ELIMINARE al cutover)
- `AAAA  @    2a00:6d40:4:3::c245:60`
- `AAAA  www  2a00:6d40:4:3::c245:60`

### A — email/servizi Aruba (NON toccare)
- `A  mail  62.149.128.157 / .74 / .166 / .154 / .151 / .160 / .163`
- `A  mx    62.149.128.166 / .163 / .160 / .157 / .154 / .151 / .74`
- `A  pop3  62.149.128.167 / .164 / .161 / .158 / .73 / .75 / .152 / .155`
- `A  smtp  62.149.128.203 / .202 / .201 / .200`
- `A  webmail  62.149.158.91 / .92`
- `A  ftp  89.46.104.211 / 89.46.104.218`
- `A  localhost  127.0.0.1`

### MX (NON toccare)
- `MX  @  mx.ncctaxisiracusa.com  (priority 10)`

### CNAME (NON toccare — servizi/mail Aruba; www lo gestiamo a parte)
- `CNAME  _domainconnect  _domainconnect.hst.aruba.it`
- `CNAME  admin           admin.redirect.aruba.it`
- `CNAME  autoconfig      autodiscover.aruba.it`
- `CNAME  imap            imaps.aruba.it`
- `CNAME  sms             admin.sms.aruba.it`
- `CNAME  stat            redirectstat.aruba.it`
- `CNAME  statistiche     redirectstat.aruba.it`

### SRV (NON toccare)
- `SRV  _autodiscover._tcp   0 0 443 autodiscover.aruba.it`
- `SRV  _xmpp-client._tcp    5 0 5222 imchat1.aruba.it`
- `SRV  _xmpp-server._tcp    5 0 5269 imchat1.aruba.it`

### TXT (NON toccare)
- `TXT  @        "v=spf1 include:spf.aruba.it ~all"`
- `TXT  @        "v=spf1 include:_spf.aruba.it ~all"`
- `TXT  @        "google-site-verification=uEDf4ezj2GmHmEw4E3fYCGBr6UIJ9S0xR2dz9pzuQW8"`
- `TXT  _dmarc   "v=DMARC1; p=none; adkim=r; aspf=r;"`
- `TXT  a1._domainkey  "v=DKIM1; h=sha256; k=rsa; p=MIIBIjANBgkq...IDAQAB"`
  (chiave DKIM lunga — valore autorevole nel pannello Aruba; non la modifichiamo)

---

## Backup extra consigliato (azione su Aruba, opzionale)
Se il cliente vuole conservare anche i FILE del vecchio sito (non solo poterci
ripuntare il DNS): dal pannello Aruba → Hosting → fai un **backup file (+ DB se
presente)** del sito attuale e scaricalo. Non è necessario per il rollback DNS,
ma è la cintura di sicurezza completa.

## Prima del cutover: abbassare i TTL
Un giorno prima, portare il TTL di `A @`, `A www`, `AAAA @`, `AAAA www` a **300s
(5 min)** → così sia il cutover sia un eventuale rollback propagano in minuti,
non in un'ora.
