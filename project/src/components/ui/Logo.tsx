interface LogoProps {
  /** Render for placement on a dark background. */
  invert?: boolean;
  /** Show the "Vidhan Shah" wordmark next to the mark. */
  withWordmark?: boolean;
  className?: string;
}

/**
 * Monogram: a converging "V" path terminating in an accent node —
 * the same flow-into-node motif used by the site's system diagrams.
 */
export function Logo({ invert, withWordmark = true, className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        width="26"
        height="26"
        aria-hidden="true"
        focusable="false"
        className="flex-shrink-0"
      >
        <path
          d="M10 10.8 L16 22.4 L22 10.8"
          fill="none"
          stroke={invert ? '#F7F7F4' : '#12151B'}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="22" cy="10.8" r="3" fill={invert ? '#12A97F' : '#0A7A5F'} />
      </svg>
      {withWordmark && (
        <span
          className={`font-display text-[15px] font-semibold tracking-tight ${
            invert ? 'text-paper-invert' : 'text-paper'
          }`}
        >
          Vidhan Shah
        </span>
      )}
    </span>
  );
}
