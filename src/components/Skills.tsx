import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C/C++', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'Assembly', level: 80 },
        { name: 'JavaScript', level: 75 }
      ]
    },
    {
      title: 'Embedded Systems',
      skills: [
        { name: 'Arduino', level: 95 },
        { name: 'Raspberry Pi', level: 90 },
        { name: 'ESP32/ESP8266', level: 90 },
        { name: 'STM32', level: 85 },
        { name: 'PIC Microcontrollers', level: 80 }
      ]
    },
    {
      title: 'Hardware & Tools',
      skills: [
        { name: 'PCB Design', level: 90 },
        { name: 'EasyEDA Designer', level: 90 },
        { name: 'Oscilloscope', level: 75 },
        { name: 'Logic Analyzer', level: 80 },
        { name: 'Multimeter', level: 90 }
      ]
    },
    {
      title: 'Technologies',
      skills: [
        { name: 'IoT Development', level: 90 },
        { name: 'MQTT Protocol', level: 85 },
        { name: 'Bluetooth/WiFi', level: 85 },
        { name: 'Machine Learning', level: 85 },
        { name: 'Real-time Systems', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for embedded systems development, from low-level hardware 
            programming to high-level IoT solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
            >
              <h3 className="text-2xl font-bold mb-8 text-orange-500">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                        className="bg-gradient-to-r from-orange-500 to-blue-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;