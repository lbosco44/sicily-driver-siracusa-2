// Costruisce l'URL dell'optimizer immagini di Next per un asset in /public.
// Serve AVIF/WebP ridimensionato on-demand (vedi next.config `images`), così
// anche dove NON si può usare il componente next/<Image> — texture WebGL
// caricate con `new Image()`, attributo `poster` di <video>, background-image
// CSS — l'immagine non viene scaricata in RAW multi-MB.
//
// `width` deve essere tra i deviceSizes/imageSizes e `quality` tra le
// `qualities` configurate (75/80/85), altrimenti l'optimizer risponde 400.
export function nextImageUrl(src: string, width = 1920, quality = 80): string {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}
