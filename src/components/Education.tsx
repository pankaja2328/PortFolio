import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Engineering',
      institution: 'University of Jaffna',
      location: 'Jaffna, Sri Lanka',
      period: '2020 - Present',
      status: 'Pursuing',
      description: 'Specialized in embedded systems, computer architecture, and software engineering. Focus on IoT development, AI integration, and real-time systems.',
      achievements: [
        'Strong foundation in embedded systems design',
        'Hands-on experience with microcontrollers',
        'Active participation in engineering projects'
      ],
      icon: GraduationCap,
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      degree: 'Advanced Level - Physical Science Stream',
      institution: 'Mahinda College',
      location: 'Galle, Sri Lanka',
      period: '2018 - 2020',
      status: 'Completed',
      description: 'Mathematics, Physics, and Chemistry with Information & Communication Technology. Strong foundation in mathematical and scientific principles.',
      achievements: [
        'Excellent performance in science subjects',
        'Strong mathematical foundation',
        'Early exposure to programming concepts'
      ],
      icon: Award,
      image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const certifications = [
    'Embedded Systems Programming - Online Courses',
    'IoT Application Development - Self-Study',
    'Machine Learning Fundamentals - Online Learning',
    'PCB Design and Manufacturing - Practical Experience',
    'Industrial Automation - Project Work'
  ];

  return (
    <section id="education" className="py-20 relative">
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
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building a strong foundation in engineering and technology through 
            formal education and continuous learning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-orange-500 mb-8">Academic Journey</h3>
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <edu.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        edu.status === 'Pursuing' 
                          ? 'bg-orange-500/20 text-orange-500' 
                          : 'bg-green-500/20 text-green-500'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-lg text-gray-300 mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{edu.description}</p>
                    <div className="space-y-2">
                      <h5 className="font-semibold text-orange-500">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-orange-500 mb-8">Skills & Learning</h3>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-300">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-xl p-6 border border-orange-500/20"
            >
              <blockquote className="text-gray-300 italic text-lg mb-4">
                "Education is not the learning of facts, but the training of the mind to think."
              </blockquote>
              <cite className="text-orange-500 font-semibold">- Albert Einstein</cite>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;