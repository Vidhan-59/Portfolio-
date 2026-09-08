import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { howIThink } from '../../data/thinking';

export function HowIThink() {
  return (
    <section id="thinking" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Product philosophy" title="How I think" />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {howIThink.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <div
                className={`h-full rounded-xl border border-line bg-card shadow-card p-8 sm:p-10 transition-shadow duration-200 hover:shadow-card-lift ${
                  i === howIThink.length - 1 ? 'md:col-span-2' : ''
                }`}
              >
                <span className="font-mono text-xs text-beacon">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-xl sm:text-2xl font-semibold text-paper">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted max-w-prose">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
