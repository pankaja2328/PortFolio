import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Cpu, Download } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#references', label: 'References' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-gray-800/80' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('#home')}
            className="flex items-center space-x-2 text-xl font-bold cursor-pointer"
          >
            <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <Cpu className="w-6 h-6 text-orange-500" />
            </div>
            <span className="gradient-text">Pankaja Malshan</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium text-sm"
              >
                {item.label}
              </motion.button>
            ))}

            <a
              href="/Pankaja_Malshan_CV.pdf"
              download="Pankaja_Malshan_CV.pdf"
              className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-sm font-semibold rounded-lg shadow-md shadow-orange-500/20 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="/Pankaja_Malshan_CV.pdf"
              download="Pankaja_Malshan_CV.pdf"
              className="px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
            <button
              className="text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0
          }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-3 bg-gray-900/90 rounded-xl mt-3 p-4 border border-gray-800">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-300 hover:text-orange-500 transition-colors duration-200 py-1 font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;