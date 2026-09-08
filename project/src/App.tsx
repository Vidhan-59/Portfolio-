import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { MetricsStrip } from './components/sections/MetricsStrip';
import { Intro } from './components/sections/Intro';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { ProductEngineering } from './components/sections/ProductEngineering';
import { ProductRole } from './components/sections/ProductRole';
import { TechEcosystem } from './components/sections/TechEcosystem';
import { HowIThink } from './components/sections/HowIThink';
import { Education } from './components/sections/Education';
import { Philosophy } from './components/sections/Philosophy';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Navbar />
      <main>
        <Hero />
        <MetricsStrip />
        <Intro />
        <Experience />
        <Projects />
        <ProductEngineering />
        <ProductRole />
        <TechEcosystem />
        <HowIThink />
        <Education />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
