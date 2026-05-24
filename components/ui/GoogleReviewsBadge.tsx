import {useTranslations} from 'next-intl';

// Badge Google Reviews — pill cliccabile che porta al Google Business Profile.
// Niente script esterni, niente widget Google: solo SVG + numeri.
// Aggiorna RATING e GBP_URL qui se cambia in futuro.

const GBP_URL = 'https://www.google.com/maps?cid=16944631268431014158';
const RATING = 4.9;

export function GoogleReviewsBadge({
  size = 'md',
  className = ''
}: {
  size?: 'sm' | 'md';
  className?: string;
}) {
  const t = useTranslations('Home.testimonianze');
  const ratingDisplay = RATING.toFixed(1).replace('.', ',');

  const padding = size === 'sm' ? 'px-4 py-2.5' : 'px-5 py-3';
  const numberSize =
    size === 'sm' ? 'text-[16px] sm:text-[17px]' : 'text-[18px] sm:text-[20px]';
  const starSize = size === 'sm' ? 'text-[12px]' : 'text-[14px]';
  const gSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5 sm:w-6 sm:h-6';

  return (
    <a
      href={GBP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('googleAria', {rating: ratingDisplay})}
      className={`group inline-flex items-center gap-3 rounded-full bg-canvas border border-[var(--border-strong)] ${padding} transition-all duration-200 hover:shadow-md hover:border-accent/50 ${className}`}
    >
      <GoogleG className={`shrink-0 ${gSize}`} />
      <span
        className={`font-display font-medium tabular-nums text-ink ${numberSize}`}
      >
        {ratingDisplay}
      </span>
      <span
        aria-hidden="true"
        className={`text-[#FBBC04] tracking-tighter ${starSize}`}
      >
        ★★★★★
      </span>
    </a>
  );
}

function GoogleG({className = ''}: {className?: string}) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  );
}
