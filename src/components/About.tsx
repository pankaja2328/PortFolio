import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Zap, Code, Brain, Download } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Cpu,
      title: 'Embedded Systems',
      description: 'Expert in microcontroller programming and embedded system design'
    },
    {
      icon: Zap,
      title: 'IoT Development',
      description: 'Building connected devices and smart systems for Industry 4.0'
    },
    {
      icon: Code,
      title: 'Multi-Language',
      description: 'Proficient in C/C++, Python, Java, and assembly languages'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Implementing AI and machine learning in embedded systems'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-orange-500">
              Embedded Systems Engineer
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm a passionate Embedded Software and Hardware Engineer from Sri Lanka, 
              currently pursuing Computer Engineering at the University of Jaffna. 
              With a deep curiosity in Artificial Intelligence and IoT, I specialize 
              in creating innovative solutions that seamlessly integrate hardware and software.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              My expertise spans across embedded systems design, firmware development, 
              IoT applications, and AI integration. I have hands-on experience with 
              various microcontrollers, development boards, and emerging technologies 
              that are shaping the future of embedded systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <p className="text-gray-400"><span className="text-orange-500 font-semibold">Email:</span></p>
                <p className="text-white">pankajamalshan@gmail.com</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400"><span className="text-orange-500 font-semibold">Location:</span></p>
                <p className="text-white">Sri Lanka</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">{highlight.title}</h4>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;