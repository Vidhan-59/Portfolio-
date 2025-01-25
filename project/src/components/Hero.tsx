import React from 'react';
import { Github, Linkedin, Mail, Phone, Code2 } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left md:flex-1">
            <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6">
              Vidhan Shah
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
              Computer Engineering Student & Full Stack Developer
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mb-8">
              <a href="https://github.com/Vidhan-59" className="text-black dark:text-white hover:opacity-80 transition-opacity">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/vidhan-shah-bb5577241/" className="text-black dark:text-white hover:opacity-80 transition-opacity">
                <Linkedin size={24} />
              </a>
              <a href="mailto:vidhanshah59@gmail.com" className="text-black dark:text-white hover:opacity-80 transition-opacity">
                <Mail size={24} />
              </a>
              <a href="tel:+919426005911" className="text-black dark:text-white hover:opacity-80 transition-opacity">
                <Phone size={24} />
              </a>
              <a href="https://codeforces.com/profile/dungeon59" className="text-black dark:text-white hover:opacity-80 transition-opacity">
                <Code2 size={24} />
              </a>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#projects" className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
                View Projects
              </a>
              <a href="#contact" className="border-2 border-black dark:border-white text-black dark:text-white px-8 py-3 rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:flex-1 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-800 shadow-xl">
              <img 
                src="/images/profile.png" 
                alt="Vidhan Shah"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}