import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks } from '../../data/profile';
import { Logo } from '../ui/Logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-white/60 backdrop-blur-xl backdrop-saturate-150 border-b border-white/70 shadow-[0_4px_24px_rgba(18,21,27,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <a href="#home" aria-label="Vidhan Shah — home" className="rounded-md">
          <Logo />
        </a>

        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-muted hover:text-paper transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-beacon hover:text-beacon-bright transition-colors"
          >
            Let's connect
            <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          className="md:hidden text-paper"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-ink border-t border-line px-5 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-mono text-sm uppercase tracking-widest text-paper py-3 border-b border-line last:border-none"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 inline-flex items-center gap-1.5 font-mono text-sm uppercase tracking-widest text-beacon"
          >
            Let's connect
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
