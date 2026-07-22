import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Cpu, Wifi, Zap, HeartPulse, Droplets, Video } from 'lucide-react';

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
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 hover:text-white border border-gray-700/50'
              }`}
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
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                  
                  <span className="absolute top-4 left-4 px-3 py-1 bg-gray-900/80 backdrop-blur-md border border-gray-700 text-orange-400 text-xs font-bold rounded-full">
                    {project.year}
                  </span>

                  <div className="absolute top-4 right-4 w-10 h-10 bg-orange-500/20 backdrop-blur-md rounded-full flex items-center justify-center border border-orange-500/30">
                    <project.icon className="w-5 h-5 text-orange-400" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-gray-700/40 border border-gray-600/40 text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 border-t border-gray-700/30 flex items-center gap-4 mt-auto">
                {project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors text-sm font-semibold pt-4"
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