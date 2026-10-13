import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Intro() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
          <div>
            <SectionHeading
              eyebrow="Where I work"
              title="I work where software meets operations."
            />
            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-col items-start gap-5">
                {/*
                  Circular head-and-shoulders crop of the 889x1186 source.
                  Frames image region x 285-555, y 440-710 (270px square):
                  width = 889/270, left = -285/270, top = -440/270.
                */}
                <div className="glass glass-lift relative h-52 w-52 sm:h-60 sm:w-60 overflow-hidden rounded-full p-0">
                  <img
                    src="/images/profile.jpg"
                    alt="Portrait of Vidhan Shah"
                    className="absolute max-w-none"
                    style={{ width: '329.3%', left: '-105.6%', top: '-163%' }}
                    width={889}
                    height={1186}
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-beacon animate-beacon" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Vidhan Shah</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted max-w-prose">
            <Reveal>
              <p>
                I'm an Assistant Product Manager at Veracity Supply Chain and the Product Owner for{' '}
                <span className="text-paper">ShiftEaze</span> — a shift-based workforce management platform for
                port and terminal operations. It's deployed at Mundra Port, supporting workforce planning and
                operational workflows for 6,000+ operators across 12+ terminals.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>Port operations are continuous. A workforce system in this environment can't behave like ordinary HR software.</p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                Operators work rotating shifts. Attendance comes from real biometric systems. A missing operator
                can affect a live operation. Many users don't open a mobile app every five minutes. So the product
                has to work around the realities of the operation — not the other way around.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="text-paper">
                From port operations to AI automation, I turn complex operational problems into products people
                can actually use.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
