
import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

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

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
  };

  return (
    <>
      <PageHeader title="Get In Touch" subtitle="Have questions or want to apply? We’d love to hear from you." />

      <section id="contact-form-section" className="py-20 lg:py-28 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <AnimatedSection className="lg:w-1/3">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 h-full">
                <h3 className="text-2xl font-bold font-heading mb-6 text-gray-900 dark:text-white">Contact Information</h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-4"><FaEnvelope className="text-cyan-500 dark:text-cyan-400" /> contact@genintern.com</li>
                  <li className="flex items-center gap-4"><FaPhone className="text-cyan-500 dark:text-cyan-400" /> +91 12345 67890</li>
                  <li className="flex items-center gap-4"><FaMapMarkerAlt className="text-cyan-500 dark:text-cyan-400" /> Ghaziabad, Uttar Pradesh, India</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection className="lg:w-2/3">
              {isSubmitted ? (
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 h-full flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white">Thank You!</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 space-y-6">
                  <div className="relative">
                    <input type="text" id="name" name="name" required placeholder=" " value={formState.name} onChange={handleChange} className="peer w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    <label htmlFor="name" className="absolute left-3 -top-2.5 bg-white dark:bg-gray-800 px-1 text-sm text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-500 transition-all">Name</label>
                  </div>
                  <div className="relative">
                    <input type="email" id="email" name="email" required placeholder=" " value={formState.email} onChange={handleChange} className="peer w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    <label htmlFor="email" className="absolute left-3 -top-2.5 bg-white dark:bg-gray-800 px-1 text-sm text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-500 transition-all">Email</label>
                  </div>
                  <div className="relative">
                    <textarea id="message" name="message" rows={5} required placeholder=" " value={formState.message} onChange={handleChange} className="peer w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
                    <label htmlFor="message" className="absolute left-3 -top-2.5 bg-white dark:bg-gray-800 px-1 text-sm text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-500 transition-all">Message</label>
                  </div>
                  <button type="submit" className="inline-block bg-gradient-to-r from-cyan-400 to-orange-400 text-gray-900 font-bold py-3 px-8 rounded-lg hover:-translate-y-1 transition-transform shadow-lg">
                    Send Message
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
