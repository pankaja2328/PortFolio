import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Cpu, Wifi, Zap, Brain } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const projects = [
  {
    id: 1,
    title: 'AI-Based Optimized Energy Utilization System',
    description: 'Edge-deployed AI system using LSTM and Q-learning for smart home energy optimization based on real-time electricity pricing and weather data.',
    category: 'iot',
    technologies: ['ESP32', 'Raspberry Pi', 'Python', 'LSTM', 'Q-learning', 'MQTT'],
    icon: Wifi,
    image: 'https://images.pexels.com/photos/6985180/pexels-photo-6985180.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'ESP-IDF Libraries',
    description: 'Comprehensive collection of ESP-IDF libraries for various sensors and modules, providing easy-to-use APIs for embedded development.',
    category: 'embedded',
    technologies: ['ESP32', 'ESP-IDF', 'C/C++', 'FreeRTOS'],
    icon: Cpu,
    image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com/pankaja2328/ESP-IDF-Libraries.git',
    demo: '#'
  },
  {
    id: 3,
    title: 'All-in-One Adventure Companion Wearable',
    description: 'Advanced wearable for outdoor adventurers with GPS, Bluetooth, MAX30100, and real-time health/environmental monitoring.',
    category: 'iot',
    technologies: ['ESP32', 'ESP-IDF', 'Bluetooth', 'C', 'EasyEDA'],
    icon: Wifi,
    image: 'https://images.pexels.com/photos/4792741/pexels-photo-4792741.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com/Dinith132/ALL-IN-ONE-ADVENTURE-COMPANION-WEARABLE.git',
    demo: '#'
  },
  {
    id: 4,
    title: 'Smart Water Planting System',
    description: 'Smart ATmega328P-based system for plant health with soil sensing, serial desktop UI, and email alerts.',
    category: 'embedded',
    technologies: ['ATmega328P', 'Bluetooth', 'Arduino', 'Proteus'],
    icon: Cpu,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: '#',
    demo: '#'
  },
  {
    id: 5,
    title: 'Real-Time Video Calling Web Application',
    description: 'Zoom-like video chat app using WebRTC and Firebase, supporting peer-to-peer audio/video calls with room management.',
    category: 'software',
    technologies: ['WebRTC', 'Firebase', 'JavaScript', 'React'],
    icon: Brain,
    image: 'https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com/pankaja2328/ZoomCLone.git',
    demo: '#'
  },
  {
    id: 6,
    title: 'Image Caption Generator Using CNN-LSTM',
    description: 'Built from scratch using custom CNN encoder and LSTM decoder with attention for generating image captions.',
    category: 'software',
    technologies: ['Python', 'TensorFlow', 'CNN', 'LSTM'],
    icon: Brain,
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: '#',
    demo: '#'
  }
];


  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'iot', label: 'IoT Systems' },
    { id: 'embedded', label: 'Embedded' },
    { id: 'software', label: 'Software' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my portfolio of embedded systems projects, from IoT applications 
            to AI-powered solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
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
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-orange-500" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;