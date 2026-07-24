import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle } from 'lucide-react';

const References = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const references = [
    {
      name: 'Professional & Academic References Available',
      role: 'Upon Request',
      organization: 'University of Jaffna & Industry Supervisors',
      text: 'Detailed references from academic advisors and internship supervisors at ExcelTech Consulting can be provided upon request.',
    }
  ];

  return (
    <section id="references" className="py-24 relative">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #050b18 0%, #07101f 50%, #050b18 100%)' }} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: '#e2f0ff' }}>
            My <span className="gradient-text">References</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {references.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl p-8 text-center border"
              style={{
                background: 'rgba(13,26,46,0.6)',
                borderColor: 'rgba(0,212,255,0.15)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center border"
                style={{
                  background: 'rgba(0,212,255,0.12)',
                  borderColor: 'rgba(0,212,255,0.25)',
                }}
              >
                <Award className="w-8 h-8" style={{ color: '#00d4ff' }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#e2f0ff' }}>{item.name}</h3>
              <p className="text-sm font-semibold mb-4" style={{ color: '#00d4ff' }}>{item.organization}</p>
              <p className="leading-relaxed text-sm max-w-xl mx-auto" style={{ color: 'rgba(226,240,255,0.65)' }}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
