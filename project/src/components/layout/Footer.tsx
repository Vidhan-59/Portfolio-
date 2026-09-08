import { profile, navLinks } from '../../data/profile';
import { Logo } from '../ui/Logo';

const linkClass =
  'font-mono text-xs uppercase tracking-[0.14em] text-muted-invert hover:text-beacon-bright transition-colors';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-contrast border-t border-line-invert">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <Logo invert />
            <div className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-muted-invert">
              Product × Engineering × Systems
            </div>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {navLinks
              .filter((l) => l.label !== 'Home')
              .map((link) => (
                <a key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </a>
              ))}
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              GitHub
            </a>
            <a href={`mailto:${profile.email}`} className={linkClass}>
              Email
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-line-invert flex flex-col sm:flex-row justify-between gap-3">
          <p className="font-mono text-xs text-muted-invert">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-invert">Built with curiosity. Shipped for reality.</p>
        </div>
      </div>
    </footer>
  );
}
