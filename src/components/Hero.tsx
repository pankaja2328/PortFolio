import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Download, Cpu, Sparkles } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Embedded Firmware Engineer',
    'RTOS & STM32 Developer',
    'ESP32 & LoRa Systems Specialist',
    'PID & Motor Control Developer',
    'Computer Engineering Undergraduate'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, roles]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/pankaja2328', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/pankaja-malshan-0a0791295', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 z-10 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Embedded Firmware Engineer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-white"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Pankaja Malshan</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 min-h-[40px]"
            >
              I am a <span className="text-orange-400 font-semibold">{displayText}</span>
              <span className="animate-pulse text-orange-500">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed"
            >
              Embedded systems engineering undergraduate with hands-on internship experience building production firmware on <strong className="text-white">ESP32, STM32,</strong> and <strong className="text-white">TI microcontrollers</strong> using FreeRTOS and bare-metal architectures. Comfortable from low-level driver bring-up to real-time motor control and long-range wireless telemetry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href="/Pankaja_Malshan_CV.pdf"
                download="Pankaja_Malshan_CV.pdf"
                className="px-6 py-3.5 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-300 flex items-center gap-2.5 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Download CV (PDF)</span>
              </a>

              <button
                onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3.5 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 flex items-center gap-2 hover:border-orange-500/50"
              >
                <span>View Experience</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 ml-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="w-11 h-11 rounded-xl bg-gray-800/80 border border-gray-700/60 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:text-orange-400 hover:border-orange-500/40 hover:scale-110 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-400 text-sm"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span>Negombo, Sri Lanka</span>
              </div>
              <span className="text-gray-600">•</span>
              <div className="flex items-center gap-1.5 text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                <span>Open for Engineering Opportunities</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image & Chip Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-orange-500 via-purple-600 to-blue-600 p-1 shadow-2xl shadow-orange-500/20">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                    alt="Pankaja Malshan"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 bg-gray-900/90 border border-gray-700/80 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Core Specialty</div>
                  <div className="text-sm font-bold text-white">ESP32 & STM32</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -bottom-4 -right-4 bg-gray-900/90 border border-gray-700/80 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <span className="text-xs font-bold">RTOS</span>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Architecture</div>
                  <div className="text-sm font-bold text-white">FreeRTOS & Bare-Metal</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;