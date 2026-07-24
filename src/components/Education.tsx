import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'B.Sc. Engineering (Hons.) in Computer Engineering',
      institution: 'University of Jaffna',
      location: 'Jaffna, Sri Lanka',
      period: 'Apr 2022 – Expected Aug 2026',
      status: 'In Progress',
      description: 'Specializing in computer architecture, firmware development, embedded microcontrollers, operating systems, and hardware-software integration.',
      achievements: [
        'Hands-on expertise in FreeRTOS, ESP32, STM32, and TI platforms',
        'Advanced coursework in real-time control, IoT telemetry, and digital signal processing',
        'Active contributor to departmental hardware and software projects'
      ],
      icon: GraduationCap,
    },
    {
      degree: 'G.C.E. Advanced Level - Physical Science Stream',
      institution: 'C.W.W. Kannangara Central College',
      location: 'Hunumulla, Sri Lanka',
      period: '2018 – 2020',
      status: 'Completed',
      description: 'Combined Mathematics, Physics, Chemistry, and Information & Communication Technology.',
      achievements: [
        'High achievement in Combined Mathematics and Physics',
        'Strong theoretical foundation for physical engineering systems',
        'Early practical programming and circuit fundamentals'
      ],
      icon: Award,
    }
  ];

  const coreCompetencies = [
    'Embedded C / C++ & Assembly Architecture',
    'FreeRTOS Real-Time Task Scheduling & Queues',
    'PID Closed-Loop Controller Design & Rotary Feedback',
    'Peripheral Drivers: I2C, SPI, UART, ADC, BLE GATT',
    'Hardware Bring-Up: Oscilloscopes, Logic Analyzers, JTAG',
    'PCB Design & Circuit Simulation (EasyEDA, Proteus)'
  ];

  return (
    <section id="education" className="py-24 relative">
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
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(226,240,255,0.55)' }}>
            Academic background in Computer Engineering at University of Jaffna, complemented by hands-on firmware research.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2" style={{ color: '#00d4ff' }}>
              <BookOpen className="w-6 h-6" />
              <span>Academic Degree & Qualifications</span>
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative rounded-xl p-6 border transition-all duration-300"
                style={{
                  background: 'rgba(13,26,46,0.6)',
                  borderColor: 'rgba(0,212,255,0.12)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,212,255,0.12)', border: '1px solid rgba(0,212,255,0.25)' }}
                  >
                    <edu.icon className="w-6 h-6" style={{ color: '#00d4ff' }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold" style={{ color: '#e2f0ff' }}>{edu.degree}</h4>
                      <span
                        className="text-xs px-3 py-1 rounded-full font-semibold w-fit mt-1 md:mt-0"
                        style={{
                          background: edu.status === 'In Progress' ? 'rgba(0,212,255,0.12)' : 'rgba(74,222,128,0.12)',
                          color: edu.status === 'In Progress' ? '#00d4ff' : '#4ade80',
                          border: `1px solid ${edu.status === 'In Progress' ? 'rgba(0,212,255,0.25)' : 'rgba(74,222,128,0.25)'}`
                        }}
                      >
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-lg font-semibold mb-2" style={{ color: '#00b4d8' }}>{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm mb-4" style={{ color: 'rgba(226,240,255,0.5)' }}>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" style={{ color: '#00d4ff' }} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" style={{ color: '#8b5cf6' }} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <p className="mb-4 leading-relaxed" style={{ color: 'rgba(226,240,255,0.7)' }}>{edu.description}</p>
                    <div className="space-y-2">
                      <h5 className="font-semibold text-sm" style={{ color: '#e2f0ff' }}>Key Focus & Achievements:</h5>
                      <ul className="space-y-1.5">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm flex items-start gap-2" style={{ color: 'rgba(226,240,255,0.65)' }}>
                            <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#00d4ff' }}></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Engineering Foundations */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-8" style={{ color: '#00d4ff' }}>Engineering Focus Areas</h3>
              <div
                className="rounded-xl p-6 space-y-4"
                style={{
                  background: 'rgba(13,26,46,0.6)',
                  border: '1px solid rgba(0,212,255,0.12)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {coreCompetencies.map((comp, index) => (
                  <motion.div
                    key={comp}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 p-3.5 rounded-xl border transition-colors"
                    style={{
                      background: 'rgba(5,11,24,0.4)',
                      borderColor: 'rgba(0,212,255,0.08)'
                    }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#00d4ff' }}></div>
                    <span className="font-medium text-sm" style={{ color: 'rgba(226,240,255,0.85)' }}>{comp}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="rounded-xl p-6 border"
              style={{
                background: 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(139,92,246,0.05))',
                borderColor: 'rgba(0,212,255,0.2)',
              }}
            >
              <blockquote className="italic text-base mb-3 leading-relaxed" style={{ color: 'rgba(226,240,255,0.8)' }}>
                "Driven by precision engineering and low-level firmware optimization to connect hardware seamlessly with smart environments."
              </blockquote>
              <cite className="font-semibold text-sm" style={{ color: '#00d4ff' }}>- Pankaja Malshan</cite>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;