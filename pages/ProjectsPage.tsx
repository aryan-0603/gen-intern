
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <section className="pt-32 pb-12 md:pt-40 md:pb-20 text-center relative bg-gray-100 dark:bg-gray-950/30">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-4">{title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
      </AnimatedSection>
    </div>
  </section>
);

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store built with the MERN stack, including payment gateway integration.',
    img: 'https://picsum.photos/seed/ecommerce/800/600',
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Movie Review Sentiment Analysis',
    description: 'A machine learning model that predicts whether a movie review is positive or negative.',
    img: 'https://picsum.photos/seed/ml/800/600',
    liveLink: '#',
    githubLink: '#',
  },
   {
    title: 'Task Management App',
    description: 'A cross-platform mobile app built with Flutter for organizing daily tasks and projects.',
    img: 'https://picsum.photos/seed/taskapp/800/600',
    liveLink: '#',
    githubLink: '#',
  },
   {
    title: 'Personal Portfolio Generator',
    description: 'A web app that allows users to create and deploy their own developer portfolio websites with ease.',
    img: 'https://picsum.photos/seed/portfolio/800/600',
    liveLink: '#',
    githubLink: '#',
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <>
      <PageHeader title="Our Interns' Projects" subtitle="A showcase of the real-world applications built by our talented interns." />

      <section id="project-gallery" className="py-20 lg:py-28 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index}>
                <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="overflow-hidden relative">
                    <img src={project.img} alt={project.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold font-heading mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex space-x-4">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-500 dark:text-cyan-400 hover:underline">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-500 dark:text-cyan-400 hover:underline">
                        <FaGithub /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
