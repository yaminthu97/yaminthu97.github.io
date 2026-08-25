interface LogoProps {
  size?: number;
  className?: string;
}

/** "YT" monogram badge used as the site's logo mark. */
export function Logo({ size = 36, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="logo-bg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--color-surface)" />
          <stop offset="100%" stopColor="var(--color-bg)" />
        </linearGradient>
        <linearGradient id="logo-text" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--color-accent-strong)" />
          <stop offset="100%" stopColor="var(--color-accent)" />
        </linearGradient>
        <filter id="logo-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 0.31  0 0 0 0 0.82  0 0 0 0 0.77  0 0 0 0.55 0"
          />
        </filter>
      </defs>

      <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#logo-bg)" filter="url(#logo-glow)" />
      <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#logo-bg)" />
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="10.5"
        fill="none"
        stroke="var(--color-accent)"
        strokeOpacity="0.4"
      />
      <path
        d="M4 4.5C4 3 5.5 1.5 7.5 1.5H32.5"
        fill="none"
        stroke="white"
        strokeOpacity="0.08"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <text
        x="50%"
        y="53%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="15"
        fontWeight="700"
        letterSpacing="0.5"
        fill="url(#logo-text)"
      >
        YT
      </text>
    </svg>
  );
}
