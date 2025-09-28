import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { FaJava, FaPython, FaChartBar, FaBriefcase, FaLayerGroup, FaCode } from 'react-icons/fa';

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

const internshipTracks = [
  {
    icon: <FaJava className="mx-auto text-5xl text-cyan-500 dark:text-cyan-400 mb-6" />,
    title: 'Java Development',
    description: 'Master object-oriented programming and enterprise application development by building robust applications using Java frameworks and tools. Gain expertise in backend logic, APIs, and scalable systems.',
    tags: ['Spring Boot', 'Hibernate', 'MySQL'],
  },
  {
    icon: <FaLayerGroup className="mx-auto text-5xl text-cyan-500 dark:text-cyan-400 mb-6" />,
    title: 'Full-Stack Web Development',
    description: 'Master both frontend and backend development by building a complete web application from scratch using the MERN stack. Become proficient in handling the complete lifecycle of web apps.',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    icon: <FaChartBar className="mx-auto text-5xl text-cyan-500 dark:text-cyan-400 mb-6" />,
    title: 'Data Analytics',
    description: 'Gain hands-on experience in analyzing data, generating insights, and making data-driven decisions using modern analytics tools. Build dashboards and reports to communicate findings effectively.',
    tags: ['SQL', 'Excel', 'Power BI'],
  },
  {
    icon: <FaPython className="mx-auto text-5xl text-cyan-500 dark:text-cyan-400 mb-6" />,
    title: 'Python Development',
    description: 'Learn to build versatile applications using Python, from automation scripts to scalable web solutions. Master libraries and frameworks for backend, APIs, and more.',
    tags: ['Django', 'Flask', 'PostgreSQL'],
  },
  {
    icon: <FaCode className="mx-auto text-5xl text-cyan-500 dark:text-cyan-400 mb-6" />,
    title: 'Frontend Development',
    description: 'Build modern, responsive, and interactive web applications by mastering client-side technologies. Learn to create user-friendly designs with efficient coding practices.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    icon: <FaBriefcase className="mx-auto text-5xl text-cyan-500 dark:text-cyan-400 mb-6" />,
    title: 'Business Analytics',
    description: 'Develop the ability to interpret business data and drive strategy through insights. Learn statistical modeling, forecasting, and visualization techniques to support decision-making.',
    tags: ['Tableau', 'Excel', 'Statistics'],
  },
];

const InternshipsPage: React.FC = () => {
  return (
    <>
      <PageHeader title="Internship Tracks" subtitle="Choose your path and start building real-world projects." />

      <section id="internship-list" className="py-20 lg:py-28 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internshipTracks.map((track, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 h-full flex flex-col text-center hover:-translate-y-2 transition-transform duration-300">
                  {track.icon}
                  <h3 className="text-2xl font-bold font-heading mb-2 text-gray-900 dark:text-white">{track.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{track.description}</p>
                  <div className="mb-6">
                    {track.tags.map(tag => (
                      <span key={tag} className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to="/contact" className="mt-auto inline-block bg-gradient-to-r from-cyan-400 to-orange-400 text-gray-900 font-bold py-2 px-6 rounded-lg hover:shadow-xl transition-shadow">
                    Apply Now
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InternshipsPage;