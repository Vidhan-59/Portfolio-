import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/Eyebrow';

export function Education() {
  return (
    <section className="py-16 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-xl border border-line bg-card shadow-card px-7 py-6">
            <div>
              <Eyebrow>Education</Eyebrow>
              <h3 className="mt-3 font-display text-lg font-semibold text-paper">
                LJ Institute of Engineering and Technology
              </h3>
              <p className="mt-1 text-sm text-muted">
                Bachelor of Engineering — Computer Science / Computer Engineering · CPI 8.8 / 10
              </p>
            </div>
            <div className="font-mono text-xs text-muted sm:text-right flex-shrink-0">
              <div className="text-beacon">3★ CodeChef Programmer</div>
              <div className="mt-1 text-dim">300+ problems solved</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
