import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            I'm currently in my 3rd year of Computer Engineering, passionate about building innovative solutions
            and solving complex problems through technology.
          </p>
          <p>
            With a strong foundation in both frontend and backend development, I specialize in creating
            full-stack applications that deliver exceptional user experiences while maintaining robust
            functionality.
          </p>
          <p>
            I'm constantly learning and exploring new technologies to stay at the forefront of software
            development, with a particular interest in AI and machine learning applications.
          </p>
        </div>
      </div>
    </section>
  );
}