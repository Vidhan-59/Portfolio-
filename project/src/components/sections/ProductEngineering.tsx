import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { FlowSequence } from '../ui/FlowSequence';
import { engineeringFlow } from '../../data/shifteaze';

export function ProductEngineering() {
  return (
    <section className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[auto_1fr] gap-16 items-start">
          <div className="order-2 lg:order-1 overflow-x-auto">
            <FlowSequence items={engineeringFlow} orientation="vertical" />
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Product + engineering"
              title="I don't stop at the requirements document."
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted max-w-prose">
              <Reveal>
                <p>
                  I have a Computer Science background, and I stay comfortable working directly with the technical
                  system behind the product decisions I make.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p>
                  On ShiftEaze, that means working with engineering on Odoo 18, data models, module behaviour, API
                  flows and production issues — not just handing off a spec and waiting for a demo.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="text-paper">
                  I can move between business requirements and technical implementation, which shortens the
                  distance between a problem on the terminal floor and a system that actually solves it.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
