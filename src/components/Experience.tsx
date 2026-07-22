import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, Cpu, Activity, Radio, ShieldCheck, Zap } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'ExcelTech Consulting (Private) Limited',
      role: 'Embedded Firmware Engineering Intern',
      period: 'Nov 2025 – May 2026',
      location: 'Sri Lanka',
      type: 'Internship',
      description: 'Hands-on firmware development across ARM Cortex-M0+/M4, ESP32, and TI microcontrollers utilizing FreeRTOS and bare-metal architectures.',
      bullets: [
        {
          title: 'Multi-MCU Architecture & Integration',
          desc: 'Programmed and integrated diverse MCUs – ESP32-S3/C3 and STM32L071/F407 under FreeRTOS, plus the TI MSPM0C1104 in a NoRTOS environment, interfacing peripherals over I2C, SPI, and UART.',
          icon: Cpu
        },
        {
          title: 'Closed-Loop PID Control',
          desc: 'Designed a closed-loop PID motor controller on STM32L071, combining PWM generation with an ETR-triggered reset via optocoupler and rotary-encoder feedback.',
          icon: Zap
        },
        {
          title: 'Precision Stepper Motor System',
          desc: 'Built a stepper motor control system on STM32F407 with TMC2209 UART configuration, custom accel/decel profiles, photoelectric homing, and an interrupt-based safety halt with acknowledgement.',
          icon: ShieldCheck
        },
        {
          title: 'BLE GATT Peripheral & Mobile App',
          desc: 'Delivered a custom BLE GATT peripheral with a companion React Native app for real-time sensor data streaming.',
          icon: Activity
        },
        {
          title: 'LoRa Telemetry & Biosignal Processing',
          desc: 'Developed a point-to-point LoRa communication system on ESP32-S3/FreeRTOS for long-range telemetry, and engineered heart-rate/SpO2 estimation for MAX30102 using Gaussian kernel filtering.',
          icon: Radio
        },
        {
          title: 'Multi-mode LED Driver & Hardware Bring-Up',
          desc: 'Programmed multi-mode LED driver control (LM3643) on MSPM0C1104 with NVS flash storage, and validated firmware across all projects using oscilloscopes, logic analyzers, ST-Link, XDS110, and JTAG.',
          icon: Cpu
        }
      ],
      technologies: [
        'FreeRTOS', 'ESP-IDF', 'STM32 CubeIDE', 'ESP32-S3/C3', 'STM32F407', 'STM32L071',
        'TI MSPM0C1104', 'TMC2209 UART', 'BLE GATT', 'LoRa', 'React Native', 'MAX30102', 'JTAG / ST-Link'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Practical engineering experience in building production-grade firmware, real-time motor controllers, wireless telemetry, and hardware debugging.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, expIdx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: expIdx * 0.2 }}
              className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-700/60 shadow-xl hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  </div>
                  <p className="text-xl font-semibold text-orange-400 pl-13">{exp.company}</p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1 bg-gray-700/50 px-3 py-1.5 rounded-full border border-gray-600/50">
                    <Calendar className="w-4 h-4 text-orange-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 bg-gray-700/50 px-3 py-1.5 rounded-full border border-gray-600/50">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-8 text-lg leading-relaxed border-l-2 border-orange-500/40 pl-4">
                {exp.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {exp.bullets.map((bullet, idx) => (
                  <motion.div
                    key={bullet.title}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="p-4 rounded-xl bg-gray-900/40 border border-gray-700/40 hover:bg-gray-700/30 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 flex-shrink-0 mt-0.5">
                        <bullet.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 text-base">
                          {bullet.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{bullet.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Technologies & Hardware Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-gray-700/60 to-gray-800/60 hover:from-orange-500/20 hover:to-orange-600/20 border border-gray-600/40 text-gray-200 text-xs rounded-lg font-medium transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
