import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { HeroVisual } from './HeroVisual';
import { Button } from '../ui/Button';
import { Eyebrow } from '../ui/Eyebrow';
import { profile } from '../../data/profile';

export function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Eyebrow>Product × Engineering × Systems</Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-7 font-display text-[2.6rem] leading-[1.05] sm:text-6xl md:text-[4.2rem] font-semibold text-paper"
            >
              I build products, and the systems that run them.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
            >
              I'm Vidhan Shah — a product manager and full-stack engineer. I'm an {profile.role} at{' '}
              {profile.company}, and I take on independent product, engineering and systems-architecture work on
              the side.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <Button href="#work">View my work</Button>
              <Button href="#contact" variant="secondary">
                Let's connect
              </Button>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted hover:text-beacon transition-colors"
              >
                LinkedIn <ArrowUpRight size={13} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
