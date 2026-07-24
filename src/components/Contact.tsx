import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Github } from 'lucide-react';

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
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        window.location.href = `mailto:pankajamalshan@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nPhone: ' + formData.phone + '\nEmail: ' + formData.email)}`;
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
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
    { icon: Mail, title: 'Email', value: 'pankajamalshan@gmail.com', href: 'mailto:pankajamalshan@gmail.com', color: '#00d4ff' },
    { icon: Phone, title: 'Phone', value: '+94 76 302 6019', href: 'tel:+94763026019', color: '#8b5cf6' },
    { icon: MapPin, title: 'Location', value: 'Negombo, Sri Lanka', href: '#', color: '#2dd4bf' }
  ];

  return (
    <section id="contact" className="py-24 relative">
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(226,240,255,0.55)' }}>
            Let's discuss your next embedded systems project, firmware design, or engineering collaboration.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#00d4ff' }}>Direct Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 group"
                    style={{
                      background: 'rgba(13,26,46,0.6)',
                      borderColor: 'rgba(0,212,255,0.12)',
                      backdropFilter: 'blur(12px)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(0,212,255,0.35)';
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.08)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(0,212,255,0.12)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${info.color}15`, border: `1px solid ${info.color}30` }}
                    >
                      <info.icon className="w-6 h-6" style={{ color: info.color }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs uppercase tracking-wider" style={{ color: 'rgba(226,240,255,0.5)' }}>{info.title}</h4>
                      <p className="font-semibold text-sm" style={{ color: '#e2f0ff' }}>{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div
              className="p-6 rounded-xl border"
              style={{
                background: 'rgba(13,26,46,0.6)',
                borderColor: 'rgba(0,212,255,0.12)',
              }}
            >
              <h4 className="text-lg font-bold mb-4" style={{ color: '#e2f0ff' }}>Connect via Profiles</h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/pankaja2328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all text-sm font-medium"
                  style={{
                    background: 'rgba(5,11,24,0.6)',
                    borderColor: 'rgba(0,212,255,0.2)',
                    color: '#e2f0ff',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#00d4ff';
                    e.currentTarget.style.color = '#00d4ff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)';
                    e.currentTarget.style.color = '#e2f0ff';
                  }}
                >
                  <Github className="w-4 h-4" style={{ color: '#00d4ff' }} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/pankaja-malshan-0a0791295"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all text-sm font-medium"
                  style={{
                    background: 'rgba(5,11,24,0.6)',
                    borderColor: 'rgba(139,92,246,0.2)',
                    color: '#e2f0ff',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#8b5cf6';
                    e.currentTarget.style.color = '#8b5cf6';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(139,92,246,0.2)';
                    e.currentTarget.style.color = '#e2f0ff';
                  }}
                >
                  <Linkedin className="w-4 h-4" style={{ color: '#8b5cf6' }} />
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
            className="rounded-2xl p-8 border shadow-xl"
            style={{
              background: 'rgba(13,26,46,0.7)',
              borderColor: 'rgba(0,212,255,0.15)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#e2f0ff' }}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(226,240,255,0.6)' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl focus:outline-none text-sm transition-all"
                    style={{
                      background: 'rgba(5,11,24,0.7)',
                      border: '1px solid rgba(0,212,255,0.2)',
                      color: '#e2f0ff',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#00d4ff')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)')}
                    placeholder="Pankaja Malshan"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(226,240,255,0.6)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl focus:outline-none text-sm transition-all"
                    style={{
                      background: 'rgba(5,11,24,0.7)',
                      border: '1px solid rgba(0,212,255,0.2)',
                      color: '#e2f0ff',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#00d4ff')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)')}
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(226,240,255,0.6)' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none text-sm transition-all"
                  style={{
                    background: 'rgba(5,11,24,0.7)',
                    border: '1px solid rgba(0,212,255,0.2)',
                    color: '#e2f0ff',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#00d4ff')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)')}
                  placeholder="+94 76 302 6019"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(226,240,255,0.6)' }}>
                  Project / Message Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none text-sm transition-all resize-none"
                  style={{
                    background: 'rgba(5,11,24,0.7)',
                    border: '1px solid rgba(0,212,255,0.2)',
                    color: '#e2f0ff',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#00d4ff')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)')}
                  placeholder="Describe your hardware, MCU, or firmware requirement..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl font-bold text-sm transition-all disabled:opacity-50"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff, #0099b8)',
                  color: '#050b18',
                  boxShadow: '0 0 20px rgba(0,212,255,0.25)',
                }}
              >
                {status === 'loading' ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </motion.button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 text-sm font-medium rounded-xl border"
                  style={{
                    background: 'rgba(74,222,128,0.1)',
                    borderColor: 'rgba(74,222,128,0.3)',
                    color: '#4ade80'
                  }}
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