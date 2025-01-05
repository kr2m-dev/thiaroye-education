import React, { useState, useEffect } from 'react';
import { Menu, X, Award, Building2, Users, GraduationCap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const SenegalFlag = () => (
  <svg width="24" height="24" viewBox="0 0 900 600">
    <rect fill="#00853F" width="300" height="600"/>
    <rect fill="#FDEF42" x="300" width="300" height="600"/>
    <rect fill="#E31B23" x="600" width="300" height="600"/>
    <polygon fill="#00853F" points="450,300 520,400 380,400"/>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/', icon: Award },
    { name: 'Concours', path: '/concours', icon: Award },
    { name: 'Universités', path: '/universites', icon: Building2 },
    { name: <div className="text-center leading-tight"><div>Espace</div><div>d'Échange</div></div>, path: '/echange', icon: Users },
    { name: 'Alumni', path: '/alumni', icon: GraduationCap },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <SenegalFlag className="h-8 w-8" />
              <span className="font-bold text-2xl text-gradient animate-text-shimmer text-3d text-white">
                Thiaroye Education
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block ml-auto">
            <div className="ml-10 flex items-baseline space-x-2">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        location.pathname === link.path
                          ? 'bg-indigo-600 text-white'
                          : 'text-gray-700 hover:bg-blue-100'
                      }`}
                    >
                      <Icon className="h-4 w-4 mr-1" />
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-50 shadow-lg">
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:bg-blue-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon className="h-5 w-5 mr-2" />
                {link.name}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
