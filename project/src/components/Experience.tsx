import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

export function Experience() {
  const resumeLink = "https://drive.google.com/file/d/1LVX3iiJMZ8qB_rdDeWdwUaCMNXwwlmvl/view?usp=sharing";

  return (
    <section id="experience" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition-opacity"
          >
            View Resume <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="space-y-12">
          <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-black dark:bg-white rounded-lg">
                <Briefcase className="w-6 h-6 text-white dark:text-black" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <h3 className="text-xl font-semibold">Aasma Technology Solutions</h3>
                  <span className="text-sm bg-black/10 dark:bg-white/10 px-3 py-1 rounded-full">
                    October 2024 - Present
                  </span>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">
                  Software Engineering Intern – Full Stack & AI/ML
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white mt-2"></span>
                    <span>Solely owned and drove the entire backend of production web applications, making independent architectural decisions across API design, data modelling, and cloud infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white mt-2"></span>
                    <span>Designed and built scalable RESTful APIs using Node.js and Python, architecting systems around AWS API Gateway, Load Balancers, and SQS-based event-driven pipelines for reliable, decoupled service communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white mt-2"></span>
                    <span>Developed and integrated LangChain and LangGraph AI pipelines with RAG architecture, adding intelligent, context-aware capabilities directly into the core product</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white mt-2"></span>
                    <span>Built and maintained full-stack features end-to-end using React.js on the frontend, taking complete ownership from backend API to UI integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white mt-2"></span>
                    <span>Containerized services using Docker and managed CI/CD pipelines, owning the full deployment lifecycle from local development through production releases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white mt-2"></span>
                    <span>Designed and maintained database schemas across MongoDB and MySQL, handling query optimization, indexing, and schema evolution as the system grew</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}