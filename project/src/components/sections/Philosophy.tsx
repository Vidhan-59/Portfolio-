import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/Eyebrow';

export function Philosophy() {
  return (
    <section className="py-28 sm:py-40 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow>Career philosophy</Eyebrow>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-8 font-display text-3xl sm:text-5xl md:text-6xl font-semibold leading-[1.15] text-paper max-w-4xl mx-auto">
            I'm interested in the intersection of ports, trade, technology, AI and product.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 text-lg text-muted max-w-xl mx-auto">
            Building systems that solve difficult operational problems — not because they're trendy, but because
            real operations are where software actually gets tested.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
