import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Attempt backend API if available
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        // Fallback to mailto if backend is off
        window.location.href = `mailto:pankajamalshan@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nPhone: ' + formData.phone + '\nEmail: ' + formData.email)}`;
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      // Direct mailto fallback
      window.location.href = `mailto:pankajamalshan@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nPhone: ' + formData.phone + '\nEmail: ' + formData.email)}`;
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'pankajamalshan@gmail.com',
      href: 'mailto:pankajamalshan@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+94 76 302 6019',
      href: 'tel:+94763026019'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Negombo, Sri Lanka',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's discuss your next embedded systems project, firmware design, or engineering collaboration.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-orange-500 mb-6">Direct Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:bg-orange-500/30 transition-colors flex-shrink-0">
                      <info.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{info.title}</h4>
                      <p className="text-gray-300 font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gray-800/40 rounded-xl border border-gray-700/50">
              <h4 className="text-lg font-bold text-white mb-3">Connect via Profiles</h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/pankaja2328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700/60 hover:bg-orange-500/20 border border-gray-600/50 hover:border-orange-500/50 text-white rounded-lg transition-all text-sm font-medium"
                >
                  <Github className="w-4 h-4 text-orange-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/pankaja-malshan-0a0791295"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700/60 hover:bg-blue-500/20 border border-gray-600/50 hover:border-blue-500/50 text-white rounded-lg transition-all text-sm font-medium"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:border-orange-500 focus:outline-none text-white text-sm placeholder-gray-400"
                    placeholder="Pankaja Malshan"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:border-orange-500 focus:outline-none text-white text-sm placeholder-gray-400"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:border-orange-500 focus:outline-none text-white text-sm placeholder-gray-400"
                  placeholder="+94 76 302 6019"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                  Project / Message Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:border-orange-500 focus:outline-none text-white text-sm placeholder-gray-400 resize-none"
                  placeholder="Describe your hardware, MCU, or firmware requirement..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </motion.button>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 bg-green-500/10 border border-green-500/30 rounded-xl p-3 text-sm font-medium"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Message initiated! If email client opens, click send to complete.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;