import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Cpu, Zap, HeartPulse, Droplets, Video } from 'lucide-react';

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
      description: 'Built a custom-PCB outdoor wearable on ESP32/ESP-IDF/FreeRTOS with real-time GPS and heart-rate monitoring (NRF24L01+PA+LNA, MAX30100, OLED), reaching 1 km wireless range on a 2000 mAh battery lasting 6 hours.',
      category: 'embedded',
      technologies: ['ESP-IDF v5.4', 'FreeRTOS', 'Bluetooth SPP', 'EasyEDA', 'NRF24L01+', 'MAX30100'],
      icon: HeartPulse,
      image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80&w=600',
      github: 'https://github.com/Dinith132/ALL-IN-ONE-ADVENTURE-COMPANION-WEARABLE.git',
      demo: '#'
    },
    {
      id: 2,
      title: 'ESP-IDF Peripheral Driver Library',
      year: '2025',
      description: 'Published a modular, reusable ESP-IDF driver library covering 6 peripheral protocols (I2C, SPI, UART, ADC, etc.), adopted in 3 downstream personal and team engineering projects.',
      category: 'embedded',
      technologies: ['C', 'ESP-IDF v5.0+', 'I2C', 'SPI', 'UART', 'ADC', 'FreeRTOS'],
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
      github: 'https://github.com/pankaja2328/ESP-IDF-Libraries.git',
      demo: '#'
    },
    {
      id: 3,
      title: 'Smart Water Planting System',
      year: '2023',
      description: 'Designed a soil-moisture monitoring system on ATmega328P with Bluetooth-linked desktop app and email alerting, maintaining plant soil moisture within 5% of target over a 1-week test.',
      category: 'iot',
      technologies: ['ATmega328P', 'Arduino Framework', 'Proteus', 'EasyEDA', 'Bluetooth'],
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=600',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'AI-Based Optimized Energy Utilization System',
      year: '2024',
      description: 'Edge-deployed AI system using LSTM and Q-learning for smart home energy optimization based on real-time electricity pricing and weather telemetry.',
      category: 'iot',
      technologies: ['ESP32', 'Raspberry Pi', 'Python', 'LSTM', 'Q-learning', 'MQTT'],
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600',
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Real-Time Video Calling Web Application',
      year: '2024',
      description: 'Full-stack video communication platform using WebRTC and Firebase, supporting peer-to-peer low-latency audio/video calls with dynamic room management.',
      category: 'software',
      technologies: ['WebRTC', 'Firebase', 'JavaScript', 'React', 'Tailwind CSS'],
      icon: Video,
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=600',
      github: 'https://github.com/pankaja2328/ZoomCLone.git',
      demo: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'embedded', label: 'Embedded & Firmware' },
    { id: 'iot', label: 'IoT & Telemetry' },
    { id: 'software', label: 'Software' }
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
            Technical <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(226,240,255,0.55)' }}>
            Featured engineering work spanning low-level C firmware, custom PCB wearables, wireless IoT telemetry, and AI systems.
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
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
              style={{
                background: 'rgba(13,26,46,0.6)',
                border: '1px solid rgba(0,212,255,0.12)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.35)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.12)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0d1a2e 0%, transparent 60%)' }} />

                  <span
                    className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full"
                    style={{
                      background: 'rgba(5,11,24,0.85)',
                      border: '1px solid rgba(0,212,255,0.25)',
                      color: '#00d4ff',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {project.year}
                  </span>

                  <div
                    className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center border"
                    style={{
                      background: 'rgba(0,212,255,0.15)',
                      borderColor: 'rgba(0,212,255,0.3)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <project.icon className="w-5 h-5" style={{ color: '#00d4ff' }} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 transition-colors" style={{ color: '#e2f0ff' }}>
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed" style={{ color: 'rgba(226,240,255,0.6)' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md border"
                        style={{
                          background: 'rgba(0,212,255,0.06)',
                          borderColor: 'rgba(0,212,255,0.15)',
                          color: 'rgba(226,240,255,0.7)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex items-center gap-4 mt-auto border-t" style={{ borderColor: 'rgba(0,212,255,0.08)' }}>
                {project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-colors text-sm font-semibold pt-4"
                    style={{ color: 'rgba(226,240,255,0.7)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#00d4ff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(226,240,255,0.7)')}
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;