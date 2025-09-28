
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-950/50 pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-col">
            <Link to="/" className="inline-flex items-center gap-2 text-2xl font-bold font-heading text-gray-800 dark:text-gray-200 mb-4">
              <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logo-gradient-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
                <path d="M 75 50 A 25 25 0 1 1 50 25 L 50 35 A 15 15 0 1 0 65 50 L 85 50 L 65 70 L 65 50 Z" fill="url(#logo-gradient-footer)"/>
              </svg>
              <span>GenIntern</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">Bridging the gap between classroom and career.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"><FaLinkedin size={24}/></a>
              <a href="#" aria-label="GitHub" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"><FaGithub size={24}/></a>
              <a href="#" aria-label="Twitter" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"><FaTwitter size={24}/></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/internships" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Internships</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-gray-900 dark:text-white">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2"><i className="fa-solid fa-envelope"></i> contact@genintern.com</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-location-dot"></i> Ghaziabad, UP, India</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
          &copy; {new Date().getFullYear()} GenIntern. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;