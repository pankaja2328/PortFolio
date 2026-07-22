import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UserCheck, Mail, Phone, Building2 } from 'lucide-react';

const References = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const references = [
    {
      name: 'Mr. Y. Pirunthapan',
      title: 'Lecturer (Probationary)',
      department: 'Department of Computer Engineering',
      institution: 'University of Jaffna, Sri Lanka',
      email: 'pirunthapany@eng.jfn.ac.lk',
      phone: '+94 21 206 0160'
    },
    {
      name: 'Dr. Jananie Jarachanthan',
      title: 'Senior Lecturer',
      department: 'Department of Computer Engineering',
      institution: 'University of Jaffna, Sri Lanka',
      email: 'jananie@eng.jfn.ac.lk',
      phone: '+94 21 206 0161'
    }
  ];

  return (
    <section id="references" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Academic <span className="gradient-text">References</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Academic supervisors from the Department of Computer Engineering, University of Jaffna.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {references.map((refItem, index) => (
            <motion.div
              key={refItem.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{refItem.name}</h3>
                  <p className="text-orange-400 font-medium text-sm">{refItem.title}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-300 mb-4 border-l-2 border-gray-700 pl-3">
                <p className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span>{refItem.department}, {refItem.institution}</span>
                </p>
              </div>

              <div className="space-y-2 text-sm">
                <a
                  href={`mailto:${refItem.email}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span>{refItem.email}</span>
                </a>
                <a
                  href={`tel:${refItem.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>{refItem.phone}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
