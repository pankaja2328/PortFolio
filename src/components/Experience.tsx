import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Zap, Activity, Radio, ShieldCheck, Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
          icon: Cpu, color: '#00d4ff', bg: 'rgba(0,212,255,0.08)'
        },
        {
          title: 'Closed-Loop PID Control',
          desc: 'Designed a closed-loop PID motor controller on STM32L071, combining PWM generation with an ETR-triggered reset via optocoupler and rotary-encoder feedback.',
          icon: Zap, color: '#00b4d8', bg: 'rgba(0,180,216,0.08)'
        },
        {
          title: 'Precision Stepper Motor System',
          desc: 'Built a stepper motor control system on STM32F407 with TMC2209 UART configuration, custom accel/decel profiles, photoelectric homing, and an interrupt-based safety halt with acknowledgement.',
          icon: ShieldCheck, color: '#8b5cf6', bg: 'rgba(139,92,246,0.08)'
        },
        {
          title: 'BLE GATT Peripheral & Mobile App',
          desc: 'Delivered a custom BLE GATT peripheral with a companion React Native app for real-time sensor data streaming.',
          icon: Activity, color: '#2dd4bf', bg: 'rgba(45,212,191,0.08)'
        },
        {
          title: 'LoRa Telemetry & Biosignal Processing',
          desc: 'Developed a point-to-point LoRa communication system on ESP32-S3/FreeRTOS for long-range telemetry, and engineered heart-rate/SpO2 estimation for MAX30102 using Gaussian kernel filtering.',
          icon: Radio, color: '#00d4ff', bg: 'rgba(0,212,255,0.08)'
        },
        {
          title: 'Multi-mode LED Driver & Hardware Bring-Up',
          desc: 'Programmed multi-mode LED driver control (LM3643) on MSPM0C1104 with NVS flash storage, and validated firmware across all projects using oscilloscopes, logic analyzers, ST-Link, XDS110, and JTAG.',
          icon: Cpu, color: '#a78bfa', bg: 'rgba(167,139,250,0.08)'
        }
      ],
      technologies: [
        'FreeRTOS', 'ESP-IDF', 'STM32 CubeIDE', 'ESP32-S3/C3', 'STM32F407', 'STM32L071',
        'TI MSPM0C1104', 'TMC2209 UART', 'BLE GATT', 'LoRa', 'React Native', 'MAX30102', 'JTAG / ST-Link'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #050b18 0%, #07101f 50%, #050b18 100%)' }} />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: '#e2f0ff' }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
          <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: 'rgba(226,240,255,0.55)' }}>
            Practical engineering experience in building production-grade firmware, real-time motor controllers, wireless telemetry, and hardware debugging.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {experiences.map((exp, expIdx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: expIdx * 0.2 }}
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: 'rgba(13,26,46,0.7)',
                border: '1px solid rgba(0,212,255,0.15)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 4px 40px rgba(0,0,0,0.3)',
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6, #00b4d8)' }}
              />

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}
                    >
                      <Briefcase className="w-5 h-5" style={{ color: '#00d4ff' }} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#e2f0ff' }}>{exp.role}</h3>
                  </div>
                  <p className="text-lg font-semibold pl-[52px]" style={{ color: '#00d4ff' }}>{exp.company}</p>
                </div>

                <div className="flex flex-wrap gap-3 text-sm">
                  <span
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', color: 'rgba(226,240,255,0.7)' }}
                  >
                    <Calendar className="w-3.5 h-3.5" style={{ color: '#00d4ff' }} />
                    {exp.period}
                  </span>
                  <span
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)', color: 'rgba(226,240,255,0.7)' }}
                  >
                    <MapPin className="w-3.5 h-3.5" style={{ color: '#8b5cf6' }} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p
                className="text-base md:text-lg mb-8 leading-relaxed pl-4"
                style={{
                  color: 'rgba(226,240,255,0.7)',
                  borderLeft: '2px solid rgba(0,212,255,0.4)'
                }}
              >
                {exp.description}
              </p>

              {/* Bullets Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {exp.bullets.map((bullet, idx) => (
                  <motion.div
                    key={bullet.title}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }}
                    className="p-4 rounded-xl transition-all duration-300"
                    style={{
                      background: 'rgba(8,16,30,0.5)',
                      border: '1px solid rgba(226,240,255,0.06)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(0,212,255,0.05)';
                      e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(8,16,30,0.5)';
                      e.currentTarget.style.borderColor = 'rgba(226,240,255,0.06)';
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg flex-shrink-0 mt-0.5" style={{ background: bullet.bg }}>
                        <bullet.icon className="w-4 h-4" style={{ color: bullet.color }} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1" style={{ color: '#e2f0ff' }}>{bullet.title}</h4>
                        <p className="text-xs leading-relaxed" style={{ color: 'rgba(226,240,255,0.5)' }}>{bullet.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech Tags */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(226,240,255,0.4)' }}>
                  Technologies & Hardware Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-lg transition-all duration-200 cursor-default"
                      style={{
                        background: 'rgba(0,212,255,0.06)',
                        border: '1px solid rgba(0,212,255,0.15)',
                        color: 'rgba(226,240,255,0.75)',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(0,212,255,0.12)';
                        e.currentTarget.style.borderColor = 'rgba(0,212,255,0.35)';
                        e.currentTarget.style.color = '#00d4ff';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(0,212,255,0.06)';
                        e.currentTarget.style.borderColor = 'rgba(0,212,255,0.15)';
                        e.currentTarget.style.color = 'rgba(226,240,255,0.75)';
                      }}
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
