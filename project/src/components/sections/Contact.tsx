import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';
import { profile } from '../../data/profile';

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin, external: true },
  { icon: Github, label: 'GitHub', value: 'View my work', href: profile.github, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="bg-contrast grid-veil">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <Reveal>
          <Eyebrow invert>Let's connect</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] text-paper-invert max-w-3xl">
            Have a hard problem? Let's talk.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 text-lg leading-relaxed text-muted-invert max-w-xl">
            I'm open to freelance and consulting work across product management, full-stack engineering,
            systems architecture and AI automation — and always happy to talk through a problem.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={`mailto:${profile.email}`} variant="primaryOnDark" icon={<ArrowUpRight size={15} />}>
              Email me
            </Button>
            <Button
              href={profile.linkedin}
              variant="secondaryOnDark"
              target="_blank"
              icon={<ArrowUpRight size={15} />}
            >
              View LinkedIn
            </Button>
          </div>
        </Reveal>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-line-invert pt-12">
          {channels.map((channel, i) => (
            <Reveal key={channel.label} delay={i * 0.06}>
              <a
                href={channel.href}
                target={channel.external ? '_blank' : undefined}
                rel={channel.external ? 'noopener noreferrer' : undefined}
                className="group flex items-start gap-4 rounded-xl border border-line-invert bg-contrast-raised p-6 h-full transition-all duration-200 hover:border-beacon-bright hover:-translate-y-0.5"
              >
                <channel.icon size={18} className="text-beacon-bright mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-invert">
                    {channel.label}
                  </div>
                  <div className="mt-1.5 text-sm text-paper-invert break-words">{channel.value}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
