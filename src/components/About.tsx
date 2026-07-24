import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Zap, Code, Radio, Download, Mail, Phone, MapPin } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = [
    {
      icon: Cpu,
      title: 'MCU Firmware',
      description: 'Production firmware for ESP32-S3/C3, STM32 (L071/F407), and TI MSPM0 microcontrollers.',
      color: '#00d4ff',
      bgColor: 'rgba(0,212,255,0.08)',
      borderColor: 'rgba(0,212,255,0.2)',
    },
    {
      icon: Zap,
      title: 'FreeRTOS & Bare-Metal',
      description: 'Multi-threaded task scheduling, queues, semaphores, and optimized interrupt architectures.',
      color: '#00b4d8',
      bgColor: 'rgba(0,180,216,0.08)',
      borderColor: 'rgba(0,180,216,0.2)',
    },
    {
      icon: Radio,
      title: 'Wireless & Telemetry',
      description: 'Point-to-point LoRa, BLE GATT peripherals with mobile sync, Bluetooth SPP, and MQTT.',
      color: '#8b5cf6',
      bgColor: 'rgba(139,92,246,0.08)',
      borderColor: 'rgba(139,92,246,0.2)',
    },
    {
      icon: Code,
      title: 'Control & Hardware Bring-Up',
      description: 'Closed-loop PID motor controllers, TMC2209 stepper safety systems, logic analyzers & oscilloscopes.',
      color: '#2dd4bf',
      bgColor: 'rgba(45,212,191,0.08)',
      borderColor: 'rgba(45,212,191,0.2)',
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #050b18 0%, #080f1e 50%, #050b18 100%)' }}
      />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#00d4ff' }}>
              Embedded Firmware Engineer
            </h3>
            <p className="text-base md:text-lg mb-4 leading-relaxed" style={{ color: 'rgba(226,240,255,0.75)' }}>
              I am a Computer Engineering undergraduate at the{' '}
              <strong style={{ color: '#e2f0ff' }}>University of Jaffna</strong> with hands-on internship experience at{' '}
              <strong style={{ color: '#e2f0ff' }}>ExcelTech Consulting</strong> building robust firmware on ESP32, STM32, and TI microcontrollers.
            </p>
            <p className="text-base md:text-lg mb-8 leading-relaxed" style={{ color: 'rgba(226,240,255,0.75)' }}>
              Comfortable across the entire embedded stack—from peripheral drivers (
              <strong style={{ color: '#00d4ff' }}>I2C, SPI, UART, BLE, LoRa</strong>) to real-time closed-loop PID motor control,
              biosignal processing with Gaussian filtering, and hardware bring-up using oscilloscopes, logic analyzers, ST-Link, and JTAG.
            </p>

            {/* Contact Info */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 rounded-xl p-4"
              style={{ background: 'rgba(13,26,46,0.6)', border: '1px solid rgba(0,212,255,0.1)' }}
            >
              {[
                { icon: Mail, label: 'Email', value: 'pankajamalshan@gmail.com', color: '#00d4ff', bg: 'rgba(0,212,255,0.08)' },
                { icon: Phone, label: 'Phone', value: '+94 76 302 6019', color: '#8b5cf6', bg: 'rgba(139,92,246,0.08)' },
                { icon: MapPin, label: 'Location', value: 'Negombo, Sri Lanka', color: '#2dd4bf', bg: 'rgba(45,212,191,0.08)', span: true },
              ].map((item) => (
                <div key={item.label} className={`flex items-center gap-3 ${item.span ? 'sm:col-span-2' : ''}`}>
                  <div className="p-2 rounded-lg flex-shrink-0" style={{ background: item.bg }}>
                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: 'rgba(226,240,255,0.4)' }}>{item.label}</p>
                    <p className="text-sm font-semibold" style={{ color: '#e2f0ff' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              href="/Pankaja_Malshan_CV.pdf"
              download="Pankaja_Malshan_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #0099b8)',
                color: '#050b18',
                boxShadow: '0 0 20px rgba(0,212,255,0.25)',
              }}
            >
              <Download className="w-5 h-5" />
              <span>Download Full CV (PDF)</span>
            </motion.a>
          </motion.div>

          {/* Highlights Grid Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 + index * 0.1 }}
                className="rounded-xl p-6 transition-all duration-300 group cursor-default"
                style={{
                  background: 'rgba(13,26,46,0.6)',
                  border: `1px solid ${highlight.borderColor}`,
                  backdropFilter: 'blur(12px)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 0 25px ${highlight.color}20`;
                  e.currentTarget.style.borderColor = highlight.color + '60';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = highlight.borderColor;
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                  style={{ background: highlight.bgColor, border: `1px solid ${highlight.borderColor}` }}
                >
                  <highlight.icon className="w-6 h-6" style={{ color: highlight.color }} />
                </div>
                <h4 className="text-base font-bold mb-2" style={{ color: '#e2f0ff' }}>{highlight.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(226,240,255,0.55)' }}>{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;