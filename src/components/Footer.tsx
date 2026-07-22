import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp, Download } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/pankaja2328', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/pankaja-malshan-0a0791295', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:pankajamalshan@gmail.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'references', label: 'References' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800/80">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Pankaja Malshan</h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Embedded Firmware Engineer specializing in ESP32, STM32, TI microcontrollers, FreeRTOS, and real-time wireless telemetry.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="w-10 h-10 bg-gray-800/80 border border-gray-700/60 rounded-xl flex items-center justify-center text-gray-300 hover:text-orange-400 hover:border-orange-500/40 hover:scale-105 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${link.id}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Download */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Contact & CV</h4>
            <div className="space-y-2 text-gray-400 text-sm mb-6">
              <p>📧 pankajamalshan@gmail.com</p>
              <p>📱 +94 76 302 6019</p>
              <p>📍 Negombo, Sri Lanka</p>
            </div>

            <a
              href="/Pankaja_Malshan_CV.pdf"
              download="Pankaja_Malshan_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-orange-400 font-semibold text-sm rounded-xl transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800/80 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Pankaja Malshan. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1.5">
              Built for <span className="text-white font-medium">Embedded Firmware Engineering</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-orange-500/20 hover:scale-110 transition-all z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;