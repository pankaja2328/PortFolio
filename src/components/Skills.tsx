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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400">
                  <group.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{group.title}</h3>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-orange-400 text-xs font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/60 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                        className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full shadow-sm"
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