import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { techEcosystem } from '../../data/skills';

export function TechEcosystem() {
  return (
    <section className="py-24 sm:py-32 border-t border-line bg-surface/40">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Technical background" title="A working ecosystem, not a skill bar." />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techEcosystem.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-line bg-card shadow-card p-7 transition-shadow duration-200 hover:shadow-card-lift">
                <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-beacon">{group.group}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-paper/90 rounded-md border border-line bg-surface/70 px-3 py-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
