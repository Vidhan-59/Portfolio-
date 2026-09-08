import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { experience } from '../../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Timeline" title="Experience" />

        <div className="mt-16 space-y-14">
          {experience.map((role, i) => (
            <Reveal key={role.id} delay={i * 0.08}>
              <div
                className={`grid md:grid-cols-[280px_1fr] gap-8 md:gap-12 pb-14 ${
                  i < experience.length - 1 ? 'border-b border-line' : ''
                }`}
              >
                <div>
                  {role.kind === 'current' && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-beacon-dim px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-beacon">
                      <span className="h-1.5 w-1.5 rounded-full bg-beacon animate-beacon" />
                      Current
                    </span>
                  )}
                  <h3 className="mt-3 font-display text-xl font-semibold text-paper">{role.company}</h3>
                  <p className="mt-1 text-sm text-muted">{role.role}</p>
                  <p className="text-sm text-beacon">{role.subrole}</p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-dim">{role.period}</p>
                </div>

                <ul className="space-y-4">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                      <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-beacon/40 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
