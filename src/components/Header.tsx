import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
      setActiveSection(href.replace('#', ''));
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(5, 11, 24, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 212, 255, 0.1)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Animated logo mark */}
            <div className="relative w-9 h-9">
              <div
                className="absolute inset-0 rounded-lg animate-glow-pulse"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(139,92,246,0.15))',
                  border: '1px solid rgba(0,212,255,0.4)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold" style={{ color: '#00d4ff' }}>PM</span>
              </div>
            </div>
            <span className="text-lg font-bold gradient-text">Pankaja Malshan</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => scrollToSection(item.href)}
                className="relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg group"
                style={{ color: 'rgba(226,240,255,0.7)' }}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-200">{item.label}</span>
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-4/5"
                  style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }}
                />
              </motion.button>
            ))}

            <a
              href="/Pankaja_Malshan_CV.pdf"
              download="Pankaja_Malshan_CV.pdf"
              className="ml-4 px-4 py-2 text-sm font-semibold rounded-lg flex items-center gap-2 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #0099b8)',
                color: '#050b18',
                boxShadow: '0 0 15px rgba(0,212,255,0.25)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 25px rgba(0,212,255,0.5)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.25)')}
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
              className="px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #0099b8)', color: '#050b18' }}
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
            <button
              className="p-2 rounded-lg transition-colors duration-200"
              style={{ color: '#00d4ff' }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          className="lg:hidden overflow-hidden"
        >
          <div
            className="mt-3 py-4 px-4 space-y-1 rounded-xl"
            style={{
              background: 'rgba(13,26,46,0.95)',
              border: '1px solid rgba(0,212,255,0.15)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ color: 'rgba(226,240,255,0.7)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#00d4ff';
                  e.currentTarget.style.background = 'rgba(0,212,255,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(226,240,255,0.7)';
                  e.currentTarget.style.background = 'transparent';
                }}
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