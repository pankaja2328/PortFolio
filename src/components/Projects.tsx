import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Github, Cpu, Zap, Brain, Wifi, Shield, Leaf, RotateCcw,
  ExternalLink, Video, Globe, GraduationCap, Layers, Bot,
  Coins, Folder, Activity
} from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [filter, setFilter] = useState('all');

  // All 18 repos ordered by relevance (most relevant to embedded/firmware first)
  const projects = [
    // ── EMBEDDED & FIRMWARE ──────────────────────────────────────────────
    {
      id: 1,
      title: 'All-in-One Adventure Companion Wearable',
      year: '2025',
      description: 'Custom-PCB outdoor wearable on ESP32/ESP-IDF/FreeRTOS with real-time GPS and heart-rate monitoring (NRF24L01+PA+LNA, MAX30100, OLED). Achieved 1 km wireless range on a 2000 mAh battery for 6 hours. Libraries published separately.',
      category: 'embedded',
      technologies: ['ESP-IDF v5.4', 'FreeRTOS', 'C', 'NRF24L01+', 'MAX30100', 'OLED', 'EasyEDA'],
      icon: Activity,
      accentColor: '#00d4ff',
      github: 'https://github.com/pankaja2328/ESP-IDF-Libraries',
      forked: false,
      stars: 1,
    },
    {
      id: 2,
      title: 'Rotary Inverted Pendulum Control',
      year: '2026',
      description: 'Real-time embedded control system for a rotary inverted pendulum using C++. Implements LQR/PID stabilization on microcontroller hardware with high-frequency control loops. Forked by the community.',
      category: 'embedded',
      technologies: ['C++', 'Arduino', 'LQR', 'PID Control', 'Real-time Control', 'Sensors'],
      icon: RotateCcw,
      accentColor: '#8b5cf6',
      github: 'https://github.com/pankaja2328/Rotary-Inverted-Pendulum',
      forked: false,
      stars: 0,
      forks: 1,
    },
    {
      id: 3,
      title: 'ESP-IDF Peripheral Driver Library',
      year: '2025',
      description: 'Modular, reusable ESP-IDF C driver library covering 6+ peripheral protocols (I2C, SPI, UART, ADC, etc.). Built for the All-in-One Companion Wearable project and adopted in multiple team projects. 1 ⭐ on GitHub.',
      category: 'embedded',
      technologies: ['C', 'ESP-IDF v5.0+', 'I2C', 'SPI', 'UART', 'ADC', 'FreeRTOS'],
      icon: Cpu,
      accentColor: '#06b6d4',
      github: 'https://github.com/pankaja2328/ESP-IDF-Libraries',
      forked: false,
      stars: 1,
    },
    {
      id: 4,
      title: 'Smart Traffic Light System',
      year: '2026',
      description: 'Embedded C traffic management system that dynamically adjusts signal timing based on sensor inputs. Designed for deterministic, real-time traffic flow control on microcontroller hardware.',
      category: 'embedded',
      technologies: ['C', 'Embedded C', 'GPIO', 'Timers', 'Interrupts', 'Sensors'],
      icon: Zap,
      accentColor: '#facc15',
      github: 'https://github.com/pankaja2328/smart-traffic-light-system',
      forked: false,
      stars: 0,
    },
    {
      id: 5,
      title: 'Double Clap Switch Circuit & Signal Analyzer',
      year: '2026',
      description: 'Analog double clap switch circuit (LM358 op-amps, 555 timer, 2N2222, thyristor) with Proteus simulation, schematics, and Python FFT & spectrogram audio frequency analyzer.',
      category: 'embedded',
      technologies: ['Analog Circuit', 'LM358', '555 Timer', 'Proteus', 'Python', 'FFT', 'Spectrogram'],
      icon: Shield,
      accentColor: '#f97316',
      github: 'https://github.com/pankaja2328/Double-Clap-Switch-Circuit',
      forked: false,
      stars: 0,
    },
    {
      id: 6,
      title: 'S-Curve Step-Dir Trajectory Planner',
      year: '2022',
      description: 'S-curve step-direction trajectory planner and controller for stepper motors in C. Provides smooth acceleration/deceleration profiles for precision motion control, reducing mechanical stress and improving positional accuracy.',
      category: 'embedded',
      technologies: ['C', 'Stepper Motors', 'Motion Control', 'S-curve', 'Step-Dir', 'Trajectory Planning'],
      icon: Layers,
      accentColor: '#a78bfa',
      github: 'https://github.com/pankaja2328/S-curve-stepdir',
      forked: true,
      stars: 0,
    },
    {
      id: 7,
      title: 'MPU6050 IMU Sensor Library',
      year: '2025',
      description: 'Arduino sketch and library for MPU6050 6-axis IMU sensor (3-axis gyroscope + 3-axis accelerometer). Demonstrates full sensor initialization, DMP configuration, and real-time orientation data reading via I2C.',
      category: 'embedded',
      technologies: ['C++', 'Arduino', 'MPU6050', 'I2C', 'IMU', 'Gyroscope', 'Accelerometer'],
      icon: Activity,
      accentColor: '#34d399',
      github: 'https://github.com/pankaja2328/MPU6050',
      forked: true,
      stars: 0,
    },
    // ── IoT & SYSTEMS ────────────────────────────────────────────────────
    {
      id: 8,
      title: 'AI-Based Optimized Energy Utilization',
      year: '2026',
      description: 'Edge-deployed AI system using LSTM and Q-learning for smart home energy optimization based on real-time electricity pricing and weather telemetry. Deployed on ESP32 and Raspberry Pi edge controllers. 1 fork.',
      category: 'iot',
      technologies: ['Python', 'Jupyter', 'LSTM', 'Q-Learning', 'ESP32', 'Raspberry Pi', 'MQTT'],
      icon: Zap,
      accentColor: '#10b981',
      github: 'https://github.com/pankaja2328/AI-Based-Optimized-Energy-Utilization-system-Using-Edge-Controllers',
      forked: false,
      stars: 0,
      forks: 1,
    },
    {
      id: 9,
      title: 'Raspberry Pi Local File Share',
      year: '2024',
      description: 'Flask-based web server for local file sharing on Raspberry Pi. Allows users to upload, list, download, and delete files via a web interface on an isolated local network — ideal for offline lab environments.',
      category: 'iot',
      technologies: ['Python', 'Flask', 'Raspberry Pi', 'HTML/CSS', 'Local Network', 'REST API'],
      icon: Wifi,
      accentColor: '#ec4899',
      github: 'https://github.com/pankaja2328/Local-file-share-Raspberry-pi',
      forked: false,
      stars: 0,
    },
    // ── AI & ML ──────────────────────────────────────────────────────────
    {
      id: 10,
      title: 'Plant Leaf Classification (Deep Learning)',
      year: '2026',
      description: 'Deep learning CNN model for plant leaf disease classification from images. Implemented in Python/Jupyter Notebook targeting precision agriculture — enabling early disease detection from leaf imagery.',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'CNN', 'Jupyter Notebook', 'OpenCV', 'NumPy', 'Image Classification'],
      icon: Leaf,
      accentColor: '#22c55e',
      github: 'https://github.com/pankaja2328/Plant-Leaf-Classification-Using-Deep-Learning',
      forked: false,
      stars: 0,
    },
    {
      id: 11,
      title: 'LangGraph Cybersecurity Assistant',
      year: '2025',
      description: 'AI-powered cybersecurity assistant built with LangGraph. Uses language model agents for automated threat analysis, security advisory, and interactive security workflows.',
      category: 'ai',
      technologies: ['Python', 'LangGraph', 'LLM', 'LangChain', 'AI Agents', 'Cybersecurity'],
      icon: Brain,
      accentColor: '#818cf8',
      github: 'https://github.com/pankaja2328/LangGraph-Cybersecurity-Assistant',
      forked: false,
      stars: 0,
    },
    {
      id: 12,
      title: 'OpenClaw — Personal AI Assistant',
      year: '2026',
      description: 'Cross-platform personal AI assistant ("the lobster way 🦞"). Built in TypeScript, runs on any OS and platform with a unique developer-friendly interface for local AI queries and task automation.',
      category: 'ai',
      technologies: ['TypeScript', 'Node.js', 'LLM', 'Cross-platform', 'AI Assistant'],
      icon: Bot,
      accentColor: '#f59e0b',
      github: 'https://github.com/pankaja2328/openclaw',
      forked: true,
      stars: 0,
    },
    // ── SOFTWARE ─────────────────────────────────────────────────────────
    {
      id: 13,
      title: 'Real-Time Video Calling App (Zoom Clone)',
      year: '2025',
      description: 'Full-stack peer-to-peer video communication platform using WebRTC and Firebase. Supports low-latency audio/video calls, dynamic room management, and multi-user sessions.',
      category: 'software',
      technologies: ['JavaScript', 'WebRTC', 'Firebase', 'React', 'Tailwind CSS', 'Peer.js'],
      icon: Video,
      accentColor: '#60a5fa',
      github: 'https://github.com/pankaja2328/ZoomCLone',
      forked: false,
      stars: 0,
    },
    {
      id: 14,
      title: 'GobFinder Web Application',
      year: '2025',
      description: 'PHP-based web application for job/opportunity discovery. Features a structured backend with database-driven listings, user authentication, and search functionality.',
      category: 'software',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Web Backend'],
      icon: Globe,
      accentColor: '#f472b6',
      github: 'https://github.com/pankaja2328/GobFinderWebApplication',
      forked: false,
      stars: 0,
    },
    {
      id: 15,
      title: 'Student Career Net',
      year: '2024',
      description: 'HTML/web-based career guidance and resource platform for students. Provides structured career pathway information, resource links, and educational content for undergraduate students.',
      category: 'software',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Design', 'Frontend'],
      icon: GraduationCap,
      accentColor: '#4ade80',
      github: 'https://github.com/pankaja2328/Student-Career',
      forked: false,
      stars: 0,
    },
    {
      id: 16,
      title: 'LMS — Learning Experience Platform',
      year: '2025',
      description: 'Powerful, flexible, open-source Learning Experience Platform built entirely in JavaScript. Supports courses, user management, content delivery, and interactive learning modules.',
      category: 'software',
      technologies: ['JavaScript', 'Node.js', 'React', 'MongoDB', 'LMS', 'Full-stack'],
      icon: Layers,
      accentColor: '#e879f9',
      github: 'https://github.com/pankaja2328/LMS',
      forked: true,
      stars: 0,
    },
    {
      id: 17,
      title: 'Bitcoin Core (Integration/Staging)',
      year: '2026',
      description: 'Fork of Bitcoin Core integration and staging tree. Includes C++ peer-to-peer network protocols, consensus rules, wallet management, and cryptographic primitives at the heart of the Bitcoin network.',
      category: 'software',
      technologies: ['C++', 'Cryptography', 'P2P Networking', 'Blockchain', 'Consensus'],
      icon: Coins,
      accentColor: '#fb923c',
      github: 'https://github.com/pankaja2328/bitcoin',
      forked: true,
      stars: 0,
    },
    {
      id: 18,
      title: 'Portfolio Website (This Site)',
      year: '2026',
      description: 'Responsive personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. Features glassmorphism design, smooth animations, dark-mode-first aesthetic, and GitHub Pages deployment.',
      category: 'software',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GitHub Pages'],
      icon: Folder,
      accentColor: '#38bdf8',
      github: 'https://github.com/pankaja2328/PortFolio',
      forked: false,
      stars: 0,
    },
  ];

  const categories = [
    { id: 'all', label: 'All 18 Projects' },
    { id: 'embedded', label: 'Embedded & Firmware' },
    { id: 'iot', label: 'IoT & Systems' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'software', label: 'Software' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const categoryLabel = (cat: string) => {
    if (cat === 'embedded') return 'Embedded';
    if (cat === 'iot') return 'IoT';
    if (cat === 'ai') return 'AI / ML';
    return 'Software';
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #050b18 0%, #080f1e 50%, #050b18 100%)' }} />
      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
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
            All 18 repositories — embedded firmware, IoT systems, AI/ML research, and software projects ordered by relevance.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className="px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300"
              style={{
                background: filter === cat.id ? 'linear-gradient(135deg, #00d4ff, #0099b8)' : 'rgba(13,26,46,0.6)',
                color: filter === cat.id ? '#050b18' : 'rgba(226,240,255,0.7)',
                border: filter === cat.id ? 'none' : '1px solid rgba(0,212,255,0.15)',
                boxShadow: filter === cat.id ? '0 0 20px rgba(0,212,255,0.3)' : 'none',
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.05 + index * 0.06 }}
              className="group rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: 'rgba(10,20,40,0.7)',
                border: '1px solid rgba(0,212,255,0.1)',
                backdropFilter: 'blur(16px)',
                transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
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
              {/* Card Header Banner */}
              <div
                className="relative h-32 flex items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.accentColor}20 0%, ${project.accentColor}07 100%)`,
                  borderBottom: `1px solid ${project.accentColor}20`,
                }}
              >
                {/* Subtle grid */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(${project.accentColor}12 1px, transparent 1px), linear-gradient(90deg, ${project.accentColor}12 1px, transparent 1px)`,
                    backgroundSize: '28px 28px',
                  }}
                />
                {/* Icon */}
                <div
                  className="relative z-10 w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${project.accentColor}18`,
                    border: `1.5px solid ${project.accentColor}40`,
                    boxShadow: `0 0 24px ${project.accentColor}20`,
                  }}
                >
                  <project.icon className="w-8 h-8" style={{ color: project.accentColor }} />
                </div>

                {/* Year pill */}
                <span
                  className="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold rounded-full"
                  style={{
                    background: 'rgba(5,11,24,0.9)',
                    border: `1px solid ${project.accentColor}40`,
                    color: project.accentColor,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {project.year}
                </span>

                {/* Category + forked pill */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  {project.forked && (
                    <span
                      className="px-2 py-0.5 text-xs font-medium rounded-full"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: 'rgba(226,240,255,0.45)',
                      }}
                    >
                      Forked
                    </span>
                  )}
                  <span
                    className="px-2.5 py-1 text-xs font-semibold rounded-full"
                    style={{
                      background: `${project.accentColor}18`,
                      border: `1px solid ${project.accentColor}35`,
                      color: project.accentColor,
                    }}
                  >
                    {categoryLabel(project.category)}
                  </span>
                </div>

                {/* Stars badge */}
                {project.stars ? (
                  <span
                    className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-0.5 text-xs rounded-full"
                    style={{
                      background: 'rgba(251,191,36,0.12)',
                      border: '1px solid rgba(251,191,36,0.3)',
                      color: '#fbbf24',
                    }}
                  >
                    ⭐ {project.stars}
                  </span>
                ) : null}
                {project.forks ? (
                  <span
                    className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-0.5 text-xs rounded-full"
                    style={{
                      background: 'rgba(100,200,255,0.08)',
                      border: '1px solid rgba(100,200,255,0.2)',
                      color: 'rgba(150,220,255,0.8)',
                    }}
                  >
                    🍴 {project.forks}
                  </span>
                ) : null}
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold mb-2 leading-snug" style={{ color: '#e2f0ff' }}>
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'rgba(226,240,255,0.55)' }}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-md border"
                      style={{
                        background: `${project.accentColor}0d`,
                        borderColor: `${project.accentColor}28`,
                        color: `${project.accentColor}cc`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <div className="pt-4 border-t" style={{ borderColor: 'rgba(0,212,255,0.08)' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                    style={{ color: 'rgba(226,240,255,0.6)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = project.accentColor)}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(226,240,255,0.6)')}
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
          transition={{ duration: 0.8, delay: 0.6 }}
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