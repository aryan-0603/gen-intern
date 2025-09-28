
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

interface HeaderProps {
  toggleTheme: () => void;
  currentTheme: string;
  isHomePage: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, currentTheme, isHomePage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = "relative text-gray-800 dark:text-gray-200 font-medium hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300";
  const activeLinkClasses = "text-cyan-500 dark:text-cyan-400 after:w-full";

  const headerClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${
    isScrolled || !isHomePage ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-sm py-4' : 'py-6'
  }`;

  return (
    <header className={headerClasses}>
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold font-heading text-gray-800 dark:text-gray-200">
          <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
            <path d="M 75 50 A 25 25 0 1 1 50 25 L 50 35 A 15 15 0 1 0 65 50 L 85 50 L 65 70 L 65 50 Z" fill="url(#logo-gradient)"/>
          </svg>
          <span>GenIntern</span>
        </Link>

        <div className={`fixed lg:static top-0 ${menuOpen ? 'left-0' : '-left-full'} w-full h-full lg:w-auto lg:h-auto bg-white dark:bg-gray-900 lg:bg-transparent dark:lg:bg-transparent flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-8 lg:gap-6 transition-all duration-300 z-40`}>
          {['Home', 'About', 'Internships', 'Contact'].map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </NavLink>
          ))}
          <button onClick={toggleTheme} className="text-xl text-gray-800 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden z-50">
           <div className="space-y-2">
                <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
        </button>
      </nav>
    </header>
  );
};

export default Header;