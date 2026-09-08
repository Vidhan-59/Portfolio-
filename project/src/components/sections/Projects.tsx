import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { shiftEazeStats, shiftEazeSummary, productModules } from '../../data/shifteaze';
import { earlierProjects } from '../../data/projects';

const chip = 'font-mono text-[11px] px-2.5 py-1 rounded-md border border-line bg-surface/70 text-muted';

export function Projects() {
  const [featuredProject, ...restProjects] = earlierProjects;

  return (
    <section id="work" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Selected work" title="Projects" />

        {/* ShiftEaze — flagship */}
        <Reveal delay={0.1}>
          <div className="mt-14 rounded-xl border border-line bg-card shadow-card p-8 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div>
                <span className="tag">Flagship</span>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-paper">ShiftEaze</h3>
                <p className="mt-1.5 text-sm text-muted">
                  Shift-based workforce management for port &amp; terminal operations
                </p>
              </div>
              <div className="flex gap-8 flex-shrink-0">
                {shiftEazeStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-xl font-semibold text-beacon">{stat.value}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted max-w-[9rem]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-7 text-[15px] leading-relaxed text-muted max-w-2xl">{shiftEazeSummary}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {productModules.map((mod) => (
                <span key={mod.title} className="font-mono text-xs px-3 py-1.5 rounded-md border border-line bg-surface/70 text-muted">
                  {mod.title}
                </span>
              ))}
            </div>

            <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
              Proprietary product — Veracity Supply Chain Limited
            </p>
          </div>
        </Reveal>

        {/* earlier projects */}
        <div className="mt-16 grid lg:grid-cols-2 gap-6 items-stretch">
          <Reveal>
            <a
              href={featuredProject.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-full flex flex-col rounded-xl border border-line bg-card shadow-card overflow-hidden transition-all duration-200 hover:shadow-card-lift hover:-translate-y-1"
            >
              <div className="w-full aspect-[16/9] overflow-hidden border-b border-line bg-surface">
                <img
                  src={featuredProject.image}
                  alt={`${featuredProject.title} interface screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-paper">{featuredProject.title}</h3>
                  <ArrowUpRight size={16} className="text-dim group-hover:text-beacon transition-colors" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted flex-1">{featuredProject.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featuredProject.tech.map((t) => (
                    <span key={t} className={chip}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>

          <div className="grid sm:grid-cols-1 gap-6">
            {restProjects.map((project, i) => (
              <Reveal key={project.title} delay={0.06 * (i + 1)}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-xl border border-line bg-card shadow-card p-6 transition-all duration-200 hover:shadow-card-lift hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-base font-semibold text-paper">{project.title}</h3>
                    <ArrowUpRight size={15} className="text-dim group-hover:text-beacon transition-colors" />
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className={chip}>
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
