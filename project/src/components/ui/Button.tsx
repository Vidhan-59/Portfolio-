import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'primaryOnDark' | 'secondaryOnDark';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  target?: string;
  icon?: ReactNode;
}

const base =
  'inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-mono text-sm tracking-wide transition-all duration-200';

const variants: Record<Variant, string> = {
  primary: 'bg-beacon text-white shadow-cta hover:bg-beacon-bright hover:-translate-y-0.5',
  secondary: 'bg-card border border-line-strong text-paper shadow-card hover:border-beacon hover:text-beacon hover:-translate-y-0.5',
  ghost: 'text-muted hover:text-beacon',
  primaryOnDark: 'bg-beacon-bright text-contrast font-medium hover:bg-white hover:-translate-y-0.5',
  secondaryOnDark: 'border border-line-invert text-paper-invert hover:border-beacon-bright hover:text-beacon-bright hover:-translate-y-0.5',
};

export function Button({ href, children, variant = 'primary', target, icon }: ButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`${base} ${variants[variant]}`}
    >
      {children}
      {icon}
    </a>
  );
}
