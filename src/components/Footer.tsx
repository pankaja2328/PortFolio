import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Download } from 'lucide-react';

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
    <footer className="relative border-t" style={{ background: '#020810', borderColor: 'rgba(0,212,255,0.1)' }}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Pankaja Malshan</h3>
            <p className="mb-6 leading-relaxed text-sm" style={{ color: 'rgba(226,240,255,0.5)' }}>
              Embedded Firmware Engineer specializing in ESP32, STM32, TI microcontrollers, FreeRTOS, and real-time wireless telemetry.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border"
                  style={{
                    background: 'rgba(13,26,46,0.8)',
                    borderColor: 'rgba(0,212,255,0.2)',
                    color: 'rgba(226,240,255,0.7)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#00d4ff';
                    e.currentTarget.style.color = '#00d4ff';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)';
                    e.currentTarget.style.color = 'rgba(226,240,255,0.7)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4" style={{ color: '#e2f0ff' }}>Quick Links</h4>
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
                    className="transition-colors duration-200 text-sm font-medium"
                    style={{ color: 'rgba(226,240,255,0.5)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#00d4ff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(226,240,255,0.5)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Download */}
          <div>
            <h4 className="text-base font-semibold mb-4" style={{ color: '#e2f0ff' }}>Contact & CV</h4>
            <div className="space-y-2 text-sm mb-6" style={{ color: 'rgba(226,240,255,0.5)' }}>
              <p>📧 pankajamalshan@gmail.com</p>
              <p>📱 +94 76 302 6019</p>
              <p>📍 Negombo, Sri Lanka</p>
            </div>

            <a
              href="/Pankaja_Malshan_CV.pdf"
              download="Pankaja_Malshan_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 border font-semibold text-sm rounded-xl transition-all"
              style={{
                background: 'rgba(0,212,255,0.08)',
                borderColor: 'rgba(0,212,255,0.25)',
                color: '#00d4ff',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(0,212,255,0.15)';
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.45)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(0,212,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.25)';
              }}
            >
              <Download className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>

        <div className="border-t mt-12 pt-8" style={{ borderColor: 'rgba(0,212,255,0.08)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center md:text-left" style={{ color: 'rgba(226,240,255,0.4)' }}>
              © {new Date().getFullYear()} Pankaja Malshan. All rights reserved.
            </p>
            <p className="text-sm flex items-center gap-1.5" style={{ color: 'rgba(226,240,255,0.4)' }}>
              Built for <span className="font-medium" style={{ color: '#00d4ff' }}>Embedded Firmware Engineering</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all z-50"
        style={{
          background: 'linear-gradient(135deg, #00d4ff, #0099b8)',
          color: '#050b18',
          boxShadow: '0 0 20px rgba(0,212,255,0.3)',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;