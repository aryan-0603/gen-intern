
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { FaCrosshairs, FaCode, FaRocket } from 'react-icons/fa';
// Note: TypeAnimation requires react-type-animation library
import { TypeAnimation } from 'react-type-animation';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center text-center relative px-6 z-10">
        <div className="absolute inset-0 bg-gray-900/50 dark:bg-gray-900/70"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-4">
            <TypeAnimation
              sequence={[
                'Code Your Future.',
                2000,
                'Your First Tech Internship Starts Here.',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Stop watching tutorials. Start building. GenIntern provides hands-on, remote project experience that turns your academic knowledge into a job-ready tech portfolio.
          </p>
          <Link to="/internships" className="inline-block bg-gradient-to-r from-cyan-400 to-orange-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg hover:-translate-y-1 transition-transform shadow-lg">
            View Internship Tracks
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 lg:py-28 bg-white dark:bg-gray-950/50 relative">
          <div className="container mx-auto px-6 text-center">
            <AnimatedSection>
                <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4 text-gray-900 dark:text-white">Your Degree Got You Here. Your Portfolio Gets You Hired.</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    Tech companies want to see what you can build. Theory is great, but a polished, real-world project on your GitHub profile is what truly opens doors. We help you bridge that critical gap.
                </p>
            </AnimatedSection>
          </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 lg:py-28 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-12 text-gray-900 dark:text-white">From Fresher to Job-Ready in Three Steps</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="text-center p-8 bg-white/50 dark:bg-gray-800/50 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 h-full">
                <FaCrosshairs className="mx-auto text-5xl text-cyan-500 dark:text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold font-heading mb-2 text-gray-900 dark:text-white">1. Choose Your Track</h3>
                <p className="text-gray-600 dark:text-gray-300">Apply and select a track that matches your career goals, whether it's Full-Stack Development, Data Science, or Mobile App Dev.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="text-center p-8 bg-white/50 dark:bg-gray-800/50 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 h-full">
                <FaCode className="mx-auto text-5xl text-cyan-500 dark:text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold font-heading mb-2 text-gray-900 dark:text-white">2. Build & Collaborate</h3>
                <p className="text-gray-600 dark:text-gray-300">Work on a real-world tech project. Push code to a shared repository, collaborate with peers, and learn agile methodologies.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="text-center p-8 bg-white/50 dark:bg-gray-800/50 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 h-full">
                <FaRocket className="mx-auto text-5xl text-cyan-500 dark:text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold font-heading mb-2 text-gray-900 dark:text-white">3. Launch Your Career</h3>
                <p className="text-gray-600 dark:text-gray-300">Deploy your project, polish your GitHub, and receive your Certificate and Letter of Recommendation to supercharge your applications.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 lg:py-28 bg-white dark:bg-gray-950/50 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-12 text-gray-900 dark:text-white">What Our Interns Say</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <img src="https://picsum.photos/seed/person1/100/100" alt="Anjali Mehta" className="w-20 h-20 rounded-full mb-4" />
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">"The mentorship was incredible. I learned more in 3 months at GenIntern than in 2 years of college. My project landed me my first job!"</p>
                <h4 className="font-bold font-heading text-gray-900 dark:text-white">- Anjali Mehta</h4>
                <span className="text-sm text-orange-500 dark:text-orange-400">Full-Stack Developer Intern</span>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <img src="https://picsum.photos/seed/person2/100/100" alt="Rohan Desai" className="w-20 h-20 rounded-full mb-4" />
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">"A fantastic experience from start to finish. The project was challenging but rewarding, and the feedback was always constructive."</p>
                <h4 className="font-bold font-heading text-gray-900 dark:text-white">- Rohan Desai</h4>
                <span className="text-sm text-orange-500 dark:text-orange-400">Machine Learning Intern</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 lg:py-28 text-center relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4 text-gray-900 dark:text-white">Ready to Build Your Tech Career?</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8">Your dream job is waiting. All you need is the right experience. Let's build it together.</p>
            <Link to="/contact" className="inline-block bg-gradient-to-r from-cyan-400 to-orange-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg hover:-translate-y-1 transition-transform shadow-lg">
              Apply to GenIntern Now
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default HomePage;