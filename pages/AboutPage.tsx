
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const teamMembers = [
  { name: 'Rajesh Kumar', role: 'Founder & Lead Mentor', img: 'https://picsum.photos/seed/rajesh/400/400', socials: { linkedin: '#', twitter: '#' } },
  { name: 'Priya Sharma', role: 'Frontend Development Mentor', img: 'https://picsum.photos/seed/priya/400/400', socials: { linkedin: '#', github: '#' } },
  { name: 'Amit Singh', role: 'Data Science Mentor', img: 'https://picsum.photos/seed/amit/400/400', socials: { linkedin: '#' } },
];

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

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader title="About GenIntern" subtitle="Our mission, our vision, and the team behind it all." />

      <section id="our-story" className="py-20 lg:py-28 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4 text-gray-900 dark:text-white">Our Story</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">GenIntern was founded on a simple principle: talent is everywhere, but opportunity is not. We saw countless brilliant students graduating with theoretical knowledge but lacking the practical, real-world project experience that tech companies demand.</p>
                <p className="text-gray-600 dark:text-gray-300">Our goal is to create a launchpad for the next generation of tech professionals by providing a structured, mentorship-driven environment where they can learn by building. We believe that a strong portfolio is the key to unlocking a successful career in tech.</p>
              </div>
              <div className="md:w-1/2">
                <img src="https://picsum.photos/seed/teamwork/800/600" alt="A diverse group of young professionals collaborating" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="team" className="py-20 lg:py-28 bg-white dark:bg-gray-950/50 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-12 text-gray-900 dark:text-white">Meet the Team</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={index}>
                <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:-translate-y-2 transition-transform duration-300">
                  <img src={member.img} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-cyan-400" />
                  <h3 className="text-2xl font-bold font-heading mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-orange-500 dark:text-orange-400 mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    {member.socials.linkedin && <a href={member.socials.linkedin} aria-label="LinkedIn" className="text-gray-500 dark:text-gray-400 hover:text-cyan-400 transition-colors"><FaLinkedin size={24} /></a>}
                    {member.socials.twitter && <a href={member.socials.twitter} aria-label="Twitter" className="text-gray-500 dark:text-gray-400 hover:text-cyan-400 transition-colors"><FaTwitter size={24} /></a>}
                    {member.socials.github && <a href={member.socials.github} aria-label="GitHub" className="text-gray-500 dark:text-gray-400 hover:text-cyan-400 transition-colors"><FaGithub size={24} /></a>}
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

export default AboutPage;