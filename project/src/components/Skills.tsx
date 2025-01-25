import React from 'react';

export function Skills() {
  const skills = {
    'Programming Languages': ['Java', 'Python', 'C', 'C++', 'JavaScript', 'SQL'],
    'Web Technologies': ['React JS', 'Node JS', 'Express JS', 'Bootstrap', 'Django', 'FastAPI'],
    'Databases': ['MongoDB', 'MySQL', 'SQLite'],
    'Tools & Platforms': ['Git', 'GitHub', 'VSCode'],
    'Other Skills': ['Problem Solving', 'Deployment', 'System Design']
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="card-hover bg-gray-50 dark:bg-zinc-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
