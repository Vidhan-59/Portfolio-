import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { lifecycleStages } from '../../data/shifteaze';

export function ProductRole() {
  return (
    <section className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            eyebrow="Product role"
            title="What I actually do"
            description="Requirement discovery, BRDs, UX flows, sprint prioritisation, UAT, release planning, production rollout, engineering collaboration, product analytics and operational validation — across a live system, not a backlog."
          />
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl px-7 py-5 whitespace-nowrap">
              <div className="font-display text-3xl font-semibold text-beacon">20+</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                BRDs shipped
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
          <div className="flex w-max border-t border-line-strong">
            {lifecycleStages.map((item, i) => (
              <Reveal key={item.stage} delay={i * 0.05}>
                <div className="w-[190px] sm:w-[210px] pr-8 pt-6 relative">
                  <span className="absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full bg-beacon" />
                  <div className="font-mono text-xs tracking-widest text-beacon">{item.stage}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
