import { Reveal } from '../ui/Reveal';
import { Stat } from '../ui/Stat';
import { heroMetrics } from '../../data/profile';

export function MetricsStrip() {
  return (
    <section className="bg-contrast ambient-dark">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-invert">
            Currently building — ShiftEaze, live in production
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          {heroMetrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.08}>
              <Stat value={metric.value} label={metric.label} invert />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
