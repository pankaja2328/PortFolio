import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Radio, Wrench, Activity, Code2, Terminal } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillGroups = [
    {
      title: 'Microcontrollers & MCUs',
      icon: Cpu,
      color: '#00d4ff',
      skills: [
        { name: 'ESP32-S3 / C3', level: 95 },
        { name: 'STM32F407 (Cortex-M4)', level: 90 },
        { name: 'STM32L071 (Cortex-M0+)', level: 88 },
        { name: 'TI MSPM0C1104', level: 85 },
        { name: 'ATmega328P / Arduino', level: 95 }
      ]
    },
    {
      title: 'Firmware & RTOS Architecture',
      icon: Terminal,
      color: '#00b4d8',
      skills: [
        { name: 'FreeRTOS', level: 92 },
        { name: 'ESP-IDF (v5.0+)', level: 90 },
        { name: 'Bare-Metal / NoRTOS', level: 90 },
        { name: 'Interrupt-Driven Systems', level: 92 },
        { name: 'NVS / Flash Storage', level: 88 }
      ]
    },
    {
      title: 'Protocols & Wireless',
      icon: Radio,
      color: '#8b5cf6',
      skills: [
        { name: 'I2C / SPI / UART', level: 95 },
        { name: 'BLE (GATT Peripheral)', level: 90 },
        { name: 'LoRa Telemetry', level: 88 },
        { name: 'Bluetooth SPP', level: 88 },
        { name: 'MQTT Protocol', level: 85 }
      ]
    },
    {
      title: 'Hardware Debugging & Bring-Up',
      icon: Wrench,
      color: '#2dd4bf',
      skills: [
        { name: 'Oscilloscope & Logic Analyzer', level: 90 },
        { name: 'JTAG & ST-Link / XDS110', level: 88 },
        { name: 'PCB Bring-Up', level: 85 },
        { name: 'EasyEDA PCB Design', level: 90 },
        { name: 'Proteus Circuit Simulation', level: 85 }
      ]
    },
    {
      title: 'Sensors & Closed-Loop Control',
      icon: Activity,
      color: '#a78bfa',
      skills: [
        { name: 'Closed-Loop PID Control', level: 90 },
        { name: 'TMC2209 Stepper Drivers', level: 88 },
        { name: 'MAX30102 / MAX30100 Biosensors', level: 92 },
        { name: 'Rotary Encoders & ETR Trigger', level: 88 },
        { name: 'TMP116 & MAX31865 ICs', level: 85 }
      ]
    },
    {
      title: 'Programming Languages & Tools',
      icon: Code2,
      color: '#38bdf8',
      skills: [
        { name: 'Embedded C / C++', level: 95 },
        { name: 'Python', level: 88 },
        { name: 'Java', level: 80 },
        { name: 'JavaScript / React Native', level: 78 },
        { name: 'Git / GitHub / VS Code', level: 92 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #050b18 0%, #080f1e 50%, #050b18 100%)' }} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: '#e2f0ff' }}>
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(226,240,255,0.55)' }}>
            Comprehensive skill set in embedded systems engineering, low-level firmware architecture, hardware debugging, and wireless protocols.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, categoryIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="rounded-xl p-6 transition-all duration-300"
              style={{
                background: 'rgba(13,26,46,0.6)',
                border: '1px solid rgba(0,212,255,0.12)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.35)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(0,212,255,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.12)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-2.5 rounded-lg border"
                  style={{
                    background: `${group.color}15`,
                    borderColor: `${group.color}30`,
                    color: group.color
                  }}
                >
                  <group.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#e2f0ff' }}>{group.title}</h3>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium" style={{ color: 'rgba(226,240,255,0.85)' }}>{skill.name}</span>
                      <span className="text-xs font-semibold" style={{ color: group.color }}>{skill.level}%</span>
                    </div>
                    <div className="w-full rounded-full h-2 overflow-hidden" style={{ background: 'rgba(5,11,24,0.6)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                        className="h-2 rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${group.color}, #00d4ff)`
                        }}
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