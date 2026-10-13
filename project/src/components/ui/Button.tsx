import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'primaryOnDark' | 'secondaryOnDark';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  target?: string;
  icon?: ReactNode;
  /** Filename to save as — turns the link into a direct download. */
  download?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm tracking-wide transition-all duration-200';

const variants: Record<Variant, string> = {
  primary: 'bg-beacon text-white shadow-cta hover:bg-beacon-bright hover:-translate-y-0.5',
  secondary: 'glass text-paper hover:border-beacon/40 hover:text-beacon hover:-translate-y-0.5',
  ghost: 'text-muted hover:text-beacon',
  primaryOnDark: 'bg-beacon-bright text-contrast font-medium hover:bg-white hover:-translate-y-0.5',
  secondaryOnDark: 'glass-dark text-paper-invert hover:border-beacon-bright/50 hover:text-beacon-bright hover:-translate-y-0.5',
};

export function Button({ href, children, variant = 'primary', target, icon, download }: ButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      download={download}
      className={`${base} ${variants[variant]}`}
    >
      {children}
      {icon}
    </a>
  );
}
