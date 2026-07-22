import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Zap, Code, Radio, Download, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Cpu,
      title: 'MCU Firmware',
      description: 'Production firmware for ESP32-S3/C3, STM32 (L071/F407), and TI MSPM0 microcontrollers.'
    },
    {
      icon: Zap,
      title: 'FreeRTOS & Bare-Metal',
      description: 'Multi-threaded task scheduling, queues, semaphores, and optimized interrupt architectures.'
    },
    {
      icon: Radio,
      title: 'Wireless & Telemetry',
      description: 'Point-to-point LoRa, BLE GATT peripherals with mobile sync, Bluetooth SPP, and MQTT.'
    },
    {
      icon: Code,
      title: 'Control & Hardware Bring-Up',
      description: 'Closed-loop PID motor controllers, TMC2209 stepper safety systems, logic analyzers & oscilloscopes.'
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
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-orange-500">
              Embedded Firmware Engineer
            </h3>
            <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed">
              I am a Computer Engineering undergraduate at the <strong className="text-white">University of Jaffna</strong> with hands-on internship experience at <strong className="text-white">ExcelTech Consulting</strong> building robust firmware on ESP32, STM32, and TI microcontrollers.
            </p>
            <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
              Comfortable across the entire embedded stack—from peripheral drivers (<strong className="text-white">I2C, SPI, UART, BLE, LoRa</strong>) to real-time closed-loop PID motor control, biosignal processing with Gaussian filtering, and hardware bring-up using oscilloscopes, logic analyzers, ST-Link, and JTAG.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 bg-gray-800/40 p-4 rounded-xl border border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="text-sm font-semibold text-white">pankajamalshan@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="text-sm font-semibold text-white">+94 76 302 6019</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:col-span-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-sm font-semibold text-white">Negombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            <motion.a
              href="/Pankaja_Malshan_CV.pdf"
              download="Pankaja_Malshan_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3.5 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 transition-all inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Full CV (PDF)</span>
            </motion.a>
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
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                  <highlight.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">{highlight.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;