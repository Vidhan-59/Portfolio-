import { useCountUp } from '../../hooks/useCountUp';

interface StatProps {
  value: string;
  label: string;
  invert?: boolean;
}

export function Stat({ value, label, invert }: StatProps) {
  const numericMatch = value.match(/^([\d,]+)(\+?)$/);
  const numeric = numericMatch ? parseInt(numericMatch[1].replace(/,/g, ''), 10) : null;
  const suffix = numericMatch ? numericMatch[2] : '';
  const { ref, value: animated } = useCountUp(numeric ?? 0);

  return (
    <div>
      <div
        className={`font-display text-4xl sm:text-5xl font-semibold tracking-tight ${
          invert ? 'text-paper-invert' : 'text-paper'
        }`}
      >
        {numeric !== null ? (
          <span>
            <span ref={ref}>{animated.toLocaleString()}</span>
            {suffix}
          </span>
        ) : (
          value
        )}
      </div>
      <div
        className={`mt-2.5 font-mono text-[11px] uppercase tracking-[0.14em] ${
          invert ? 'text-muted-invert' : 'text-muted'
        }`}
      >
        {label}
      </div>
    </div>
  );
}
