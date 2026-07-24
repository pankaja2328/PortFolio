import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Cpu, Zap, Brain, Wifi, Shield, Leaf, RotateCcw, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'All-in-One Adventure Companion Wearable',
      year: '2025',
      description: 'Custom-PCB outdoor wearable built on ESP32/ESP-IDF/FreeRTOS with real-time GPS and heart-rate monitoring (NRF24L01+PA+LNA, MAX30100, OLED), reaching 1 km wireless range on a 2000 mAh battery lasting 6 hours.',
      category: 'embedded',
      technologies: ['ESP-IDF v5.4', 'FreeRTOS', 'C', 'NRF24L01+', 'MAX30100', 'EasyEDA'],
      icon: Cpu,
      gradient: 'from-cyan-500 to-blue-600',
      accentColor: '#00d4ff',
      github: 'https://github.com/pankaja2328/ESP-IDF-Libraries',
      demo: null,
    },
    {
      id: 2,
      title: 'ESP-IDF Peripheral Driver Library',
      year: '2025',
      description: 'Modular, reusable ESP-IDF driver library covering 6 peripheral protocols (I2C, SPI, UART, ADC, etc.), published for use across personal and team engineering projects. 1 GitHub star.',
      category: 'embedded',
      technologies: ['C', 'ESP-IDF v5.0+', 'I2C', 'SPI', 'UART', 'ADC', 'FreeRTOS'],
      icon: Cpu,
      gradient: 'from-blue-500 to-indigo-600',
      accentColor: '#60a5fa',
      github: 'https://github.com/pankaja2328/ESP-IDF-Libraries',
      demo: null,
    },
    {
      id: 3,
      title: 'Rotary Inverted Pendulum Control',
      year: '2026',
      description: 'Real-time control system for a rotary inverted pendulum using C++ and embedded control algorithms. Implements LQR/PID stabilization on embedded hardware. 1 fork by the community.',
      category: 'embedded',
      technologies: ['C++', 'Arduino', 'LQR', 'PID Control', 'Real-time Control'],
      icon: RotateCcw,
      gradient: 'from-violet-500 to-purple-700',
      accentColor: '#8b5cf6',
      github: 'https://github.com/pankaja2328/Rotary-Inverted-Pendulum',
      demo: null,
    },
    {
      id: 4,
      title: 'Flipper Zero Clone',
      year: '2025',
      description: 'Custom open-source hardware hacking tool inspired by Flipper Zero, built in C++. Implements RF signal capture/replay, RFID reader, IR transmitter, and GPIO interaction on a compact microcontroller platform.',
      category: 'embedded',
      technologies: ['C++', 'RFID', 'IR', 'RF', 'GPIO', 'Embedded Security'],
      icon: Shield,
      gradient: 'from-orange-500 to-red-600',
      accentColor: '#f97316',
      github: 'https://github.com/pankaja2328/Fippler_Zero_Clone',
      demo: null,
    },
    {
      id: 5,
      title: 'Smart Traffic Light System',
      year: '2026',
      description: 'Embedded C traffic management system running on a microcontroller that dynamically adjusts signal timing based on sensor inputs. Designed for real-time, deterministic traffic flow control.',
      category: 'iot',
      technologies: ['C', 'Embedded C', 'GPIO', 'Timers', 'Sensors'],
      icon: Zap,
      gradient: 'from-yellow-500 to-orange-500',
      accentColor: '#facc15',
      github: 'https://github.com/pankaja2328/smart-traffic-light-system',
      demo: null,
    },
    {
      id: 6,
      title: 'AI-Based Optimized Energy Utilization',
      year: '2026',
      description: 'Edge-deployed AI system using LSTM and Q-learning for smart home energy optimization based on real-time electricity pricing and weather telemetry. 1 fork by community members.',
      category: 'ai',
      technologies: ['Python', 'Jupyter', 'LSTM', 'Q-Learning', 'ESP32', 'Raspberry Pi', 'MQTT'],
      icon: Zap,
      gradient: 'from-emerald-500 to-teal-600',
      accentColor: '#10b981',
      github: 'https://github.com/pankaja2328/AI-Based-Optimized-Energy-Utilization-system-Using-Edge-Controllers',
      demo: null,
    },
    {
      id: 7,
      title: 'Plant Leaf Classification (Deep Learning)',
      year: '2026',
      description: 'Deep learning model using CNNs for accurate plant leaf disease classification from images. Implemented in Python with Jupyter Notebook for research and agriculture applications.',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'CNN', 'Jupyter Notebook', 'OpenCV', 'NumPy'],
      icon: Leaf,
      gradient: 'from-green-500 to-emerald-600',
      accentColor: '#22c55e',
      github: 'https://github.com/pankaja2328/Plant-Leaf-Classification-Using-Deep-Learning',
      demo: null,
    },
    {
      id: 8,
      title: 'Raspberry Pi Local File Share',
      year: '2024',
      description: 'Flask-based web interface for local file sharing on Raspberry Pi. Allows users to upload, list, download, and delete files within a shared directory — ideal for isolated local networks.',
      category: 'iot',
      technologies: ['Python', 'Flask', 'Raspberry Pi', 'HTML', 'Local Network'],
      icon: Wifi,
      gradient: 'from-pink-500 to-rose-600',
      accentColor: '#ec4899',
      github: 'https://github.com/pankaja2328/Local-file-share-Raspberry-pi',
      demo: null,
    },
    {
      id: 9,
      title: 'LangGraph Cybersecurity Assistant',
      year: '2025',
      description: 'AI-powered cybersecurity assistant built with LangGraph. Leverages language model agents for automated threat analysis, security advisory, and interactive cybersecurity workflows.',
      category: 'ai',
      technologies: ['Python', 'LangGraph', 'LLM', 'Cybersecurity', 'AI Agents'],
      icon: Brain,
      gradient: 'from-indigo-500 to-violet-600',
      accentColor: '#818cf8',
      github: 'https://github.com/pankaja2328/LangGraph-Cybersecurity-Assistant',
      demo: null,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'embedded', label: 'Embedded & Firmware' },
    { id: 'iot', label: 'IoT & Systems' },
    { id: 'ai', label: 'AI & ML' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #050b18 0%, #080f1e 50%, #050b18 100%)' }} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: '#e2f0ff' }}>
            GitHub <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(226,240,255,0.55)' }}>
            Real-world engineering projects spanning embedded firmware, IoT systems, AI/ML research, and hardware hacking — all open-source on GitHub.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className="px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300"
              style={{
                background: filter === category.id
                  ? 'linear-gradient(135deg, #00d4ff, #0099b8)'
                  : 'rgba(13,26,46,0.6)',
                color: filter === category.id ? '#050b18' : 'rgba(226,240,255,0.7)',
                border: filter === category.id ? 'none' : '1px solid rgba(0,212,255,0.15)',
                boxShadow: filter === category.id ? '0 0 20px rgba(0,212,255,0.3)' : 'none',
              }}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
              className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
              style={{
                background: 'rgba(13,26,46,0.65)',
                border: '1px solid rgba(0,212,255,0.1)',
                backdropFilter: 'blur(16px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${project.accentColor}55`;
                e.currentTarget.style.boxShadow = `0 0 40px ${project.accentColor}18`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Project Header with gradient banner */}
              <div
                className="relative h-36 flex items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.accentColor}22 0%, ${project.accentColor}08 100%)`,
                  borderBottom: `1px solid ${project.accentColor}22`,
                }}
              >
                {/* Cyber grid overlay */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `linear-gradient(${project.accentColor}18 1px, transparent 1px), linear-gradient(90deg, ${project.accentColor}18 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                  }}
                />
                {/* Large icon */}
                <div
                  className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{
                    background: `${project.accentColor}20`,
                    border: `1.5px solid ${project.accentColor}45`,
                    boxShadow: `0 0 30px ${project.accentColor}25`,
                  }}
                >
                  <project.icon className="w-10 h-10" style={{ color: project.accentColor }} />
                </div>

                {/* Year badge */}
                <span
                  className="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold rounded-full"
                  style={{
                    background: 'rgba(5,11,24,0.85)',
                    border: `1px solid ${project.accentColor}40`,
                    color: project.accentColor,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {project.year}
                </span>

                {/* Category badge */}
                <span
                  className="absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold rounded-full capitalize"
                  style={{
                    background: `${project.accentColor}18`,
                    border: `1px solid ${project.accentColor}30`,
                    color: project.accentColor,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {project.category === 'ai' ? 'AI / ML' : project.category === 'iot' ? 'IoT' : 'Embedded'}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-3 leading-snug" style={{ color: '#e2f0ff' }}>
                  {project.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed flex-1" style={{ color: 'rgba(226,240,255,0.58)' }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md border"
                      style={{
                        background: `${project.accentColor}10`,
                        borderColor: `${project.accentColor}25`,
                        color: `${project.accentColor}dd`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Actions */}
                <div className="flex items-center gap-4 pt-4 border-t" style={{ borderColor: 'rgba(0,212,255,0.08)' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 group/link"
                    style={{ color: 'rgba(226,240,255,0.65)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = project.accentColor)}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(226,240,255,0.65)')}
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/pankaja2328"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300"
            style={{
              background: 'rgba(13,26,46,0.7)',
              border: '1px solid rgba(0,212,255,0.25)',
              color: '#e2f0ff',
              backdropFilter: 'blur(12px)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(0,212,255,0.55)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(0,212,255,0.25)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Github className="w-5 h-5" style={{ color: '#00d4ff' }} />
            <span>View All 18 Repositories on GitHub</span>
            <ExternalLink className="w-4 h-4" style={{ color: '#00d4ff' }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;