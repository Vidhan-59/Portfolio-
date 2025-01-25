import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'BiteLearn',
      problemStatement: `The education sector faces challenges in delivering personalized, engaging learning experiences at scale. Traditional learning platforms lack interactive features, personalization, and fail to leverage modern AI capabilities for enhanced learning outcomes. There's a need for a platform that can automatically generate assessments, provide personalized recommendations, and track progress effectively.`,
      solution: `BiteLearn addresses these challenges through:
      1. AI-Powered Content Processing: Utilizing Hugging Face ML models to automatically generate transcripts and quizzes from video content
      2. Personalization Engine: Implementing smart recommendation algorithms based on user progress and interests
      3. Interactive Learning: Creating an engaging platform with progress tracking, assessment quizzes, and a competitive ranking system
      4. Comprehensive Analytics: Providing detailed insights into learning patterns and progress
      5. Smart Assessment: Generating dynamic MCQs with video timestamp references for incorrect answers`,
      tech: ['Django', 'React', 'MongoDB'],
      github: 'https://github.com/Vidhan-59/BiteLearn-Smart-Learning',
      images: [
        '/images/image1.png',
        '/images/image2.png',
        '/images/image3.png',
        '/images/image5.png'
      ],
      featured: true
    },
    {
      title: 'MegaMart',
      description: 'E-commerce website with PayPal integration for secure transactions, featuring intuitive navigation and dynamic product displays.',
      tech: ['Django'],
      github: 'https://github.com/Vidhan-59/Megamart'
    },
    {
      title: 'StealthCheck Data Detector',
      description: 'Tool for detecting hidden data within images using advanced algorithms to ensure data security.',
      tech: ['Python'],
      github: 'https://github.com/Vidhan-59/Staganography'
    },
    {
      title: 'Connect',
      description: 'Social networking system with features for account creation, connection management, and friend requests.',
      tech: ['Java'],
      github: 'https://github.com/Vidhan-59/Dungeon_59/blob/main/Connect.java'
    },
    {
      title: 'Route-Rover',
      description: 'Bus route navigation system for efficient transportation management with features for station listing and route planning.',
      tech: ['Java'],
      github: 'https://github.com/Vidhan-59/Dungeon_59/blob/main/RouteRover.java'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-black dark:text-white text-center mb-16">Featured Project</h2>
        
        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project) => (
          <div key={project.title} className="mb-20">
            <div className="bg-gray-50 dark:bg-zinc-900 rounded-2xl p-8 lg:p-12 border border-gray-200 dark:border-gray-800">
              <h3 className="text-3xl font-bold text-black dark:text-white mb-8">{project.title}</h3>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-black dark:text-white mb-4">Problem Statement</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.problemStatement}</p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-black dark:text-white mb-4">Solution</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{project.solution}</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    className="inline-flex items-center text-black dark:text-white hover:opacity-80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2" size={20} />
                    View Source
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {project.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <h2 className="text-4xl font-bold text-black dark:text-white text-center mb-16">Other Projects</h2>
        
        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.filter(p => !p.featured).map((project) => (
            <div key={project.title} className="card-hover bg-gray-50 dark:bg-zinc-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                className="inline-flex items-center text-black dark:text-white hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2" size={20} />
                View Source
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}