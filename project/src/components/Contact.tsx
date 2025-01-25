import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="mailto:vidhanshah59@gmail.com"
              className="card-hover bg-gray-50 dark:bg-zinc-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 flex items-center shadow-md hover:shadow-lg transition-shadow"
            >
              <Mail className="text-gray-600 dark:text-gray-400 mr-4" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">vidhanshah59@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+919426005911"
              className="card-hover bg-gray-50 dark:bg-zinc-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 flex items-center shadow-md hover:shadow-lg transition-shadow"
            >
              <Phone className="text-gray-600 dark:text-gray-400 mr-4" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+91 94260 05911</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/vidhan-shah-bb5577241/"
              className="card-hover bg-gray-50 dark:bg-zinc-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 flex items-center shadow-md hover:shadow-lg transition-shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-gray-600 dark:text-gray-400 mr-4" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
                <p className="text-gray-600 dark:text-gray-400">Connect with me</p>
              </div>
            </a>

            <a
              href="https://github.com/Vidhan-59"
              className="card-hover bg-gray-50 dark:bg-zinc-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 flex items-center shadow-md hover:shadow-lg transition-shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="text-gray-600 dark:text-gray-400 mr-4" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">GitHub</h3>
                <p className="text-gray-600 dark:text-gray-400">View my work</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
