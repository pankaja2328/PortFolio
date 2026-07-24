import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Download, Cpu, Sparkles, Wifi } from 'lucide-react';
import profilePhoto from '/profile.jpg';

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
  }, [displayText, currentIndex, isDeleting]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/pankaja2328', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/pankaja-malshan-0a0791295', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-0">
      {/* Deep navy base background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #020810 0%, #050b18 50%, #080f1e 100%)' }} />

      {/* Cyber grid overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orbs */}
      <div
        className="absolute top-16 left-16 w-96 h-96 rounded-full blur-3xl animate-pulse-soft"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-16 right-16 w-80 h-80 rounded-full blur-3xl animate-pulse-soft"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', animationDelay: '1.5s' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(0,180,216,0.06) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 z-10 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{
                background: 'rgba(0,212,255,0.08)',
                border: '1px solid rgba(0,212,255,0.25)',
                color: '#00d4ff',
              }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Embedded Firmware Engineer</span>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00d4ff' }} />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
              style={{ color: '#e2f0ff' }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">Pankaja Malshan</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl mb-8 min-h-[40px]"
              style={{ color: 'rgba(226,240,255,0.75)' }}
            >
              I am a{' '}
              <span style={{ color: '#00d4ff', fontWeight: 600 }}>{displayText}</span>
              <span className="animate-pulse" style={{ color: '#00d4ff' }}>|</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg mb-10 max-w-2xl leading-relaxed"
              style={{ color: 'rgba(226,240,255,0.65)' }}
            >
              Embedded systems engineering undergraduate with hands-on internship experience building production firmware on{' '}
              <strong style={{ color: '#e2f0ff' }}>ESP32, STM32,</strong> and{' '}
              <strong style={{ color: '#e2f0ff' }}>TI microcontrollers</strong> using FreeRTOS and bare-metal architectures.
              Comfortable from low-level driver bring-up to real-time motor control and long-range wireless telemetry.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href="/Pankaja_Malshan_CV.pdf"
                download="Pankaja_Malshan_CV.pdf"
                className="px-7 py-3.5 text-sm font-bold rounded-xl flex items-center gap-2.5 transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff, #0099b8)',
                  color: '#050b18',
                  boxShadow: '0 0 20px rgba(0,212,255,0.3)',
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 35px rgba(0,212,255,0.55)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.3)')}
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>

              <button
                onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3.5 text-sm font-semibold rounded-xl flex items-center gap-2 transition-all duration-300"
                style={{
                  background: 'rgba(13,26,46,0.8)',
                  border: '1px solid rgba(0,212,255,0.25)',
                  color: '#e2f0ff',
                  backdropFilter: 'blur(12px)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,212,255,0.6)';
                  e.currentTarget.style.color = '#00d4ff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,212,255,0.25)';
                  e.currentTarget.style.color = '#e2f0ff';
                }}
              >
                <span>View Experience</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 ml-1">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      background: 'rgba(13,26,46,0.8)',
                      border: '1px solid rgba(0,212,255,0.2)',
                      color: 'rgba(226,240,255,0.6)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(0,212,255,0.6)';
                      e.currentTarget.style.color = '#00d4ff';
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.2)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)';
                      e.currentTarget.style.color = 'rgba(226,240,255,0.6)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Location & Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm"
              style={{ color: 'rgba(226,240,255,0.5)' }}
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" style={{ color: '#00d4ff' }} />
                <span>Negombo, Sri Lanka</span>
              </div>
              <span style={{ color: 'rgba(226,240,255,0.2)' }}>•</span>
              <div className="flex items-center gap-1.5" style={{ color: '#4ade80' }}>
                <span className="w-2 h-2 rounded-full animate-ping" style={{ background: '#4ade80' }} />
                <span>Open for Engineering Opportunities</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative px-8 py-6">
              {/* Spinning outer ring */}
              <div
                className="absolute inset-6 rounded-full animate-spin-ring opacity-30"
                style={{
                  border: '1px dashed rgba(0,212,255,0.4)',
                }}
              />

              {/* Profile ring */}
              <div
                className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-[3px] animate-glow-pulse"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff, #8b5cf6, #00b4d8)',
                }}
              >
                <div
                  className="w-full h-full rounded-full overflow-hidden relative"
                  style={{ background: '#0d1a2e' }}
                >
                  <img
                    src={profilePhoto}
                    alt="Pankaja Malshan"
                    className="w-full h-full object-cover object-top"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(5,11,24,0.6) 0%, transparent 50%)' }}
                  />
                </div>
              </div>

              {/* Floating badge 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-2 -left-8 px-3 py-2.5 rounded-xl flex items-center gap-2.5 z-10"
                style={{
                  background: 'rgba(13,26,46,0.95)',
                  border: '1px solid rgba(0,212,255,0.25)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 0 20px rgba(0,212,255,0.1)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,212,255,0.12)', border: '1px solid rgba(0,212,255,0.2)' }}
                >
                  <Cpu className="w-4 h-4" style={{ color: '#00d4ff' }} />
                </div>
                <div>
                  <div className="text-xs" style={{ color: 'rgba(226,240,255,0.5)' }}>Core Specialty</div>
                  <div className="text-sm font-bold" style={{ color: '#e2f0ff' }}>ESP32 & STM32</div>
                </div>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-2 -right-8 px-3 py-2.5 rounded-xl flex items-center gap-2.5 z-10"
                style={{
                  background: 'rgba(13,26,46,0.95)',
                  border: '1px solid rgba(139,92,246,0.25)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 0 20px rgba(139,92,246,0.1)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.2)' }}
                >
                  <Wifi className="w-4 h-4" style={{ color: '#8b5cf6' }} />
                </div>
                <div>
                  <div className="text-xs" style={{ color: 'rgba(226,240,255,0.5)' }}>Architecture</div>
                  <div className="text-sm font-bold" style={{ color: '#e2f0ff' }}>FreeRTOS & LoRa</div>
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