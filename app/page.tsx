'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-primary-900 via-primary-900 to-primary-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-primary-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">OBEzy™</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-accent-400 to-accent-600 text-white font-medium"
          >
            Book Demo
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/30">
              <p className="text-sm text-accent-400 font-medium flex items-center gap-2">
                <Sparkles size={16} />
                AI-Powered Academic Intelligence
              </p>
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold text-light mb-6 leading-tight">
              Transform Outcome-Based Education Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-secondary-400 to-accent-400">
                Intelligent Academic Excellence
              </span>
            </h1>

            <p className="text-xl text-light/70 max-w-3xl mx-auto mb-8">
              OBEzy automates attainment analytics, accreditation workflows, institutional intelligence, and academic quality monitoring through AI-powered academic analytics.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(123, 97, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-accent-400 to-accent-600 text-white font-semibold flex items-center justify-center gap-2"
              >
                <Zap size={20} />
                Book Live Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg border border-secondary-400/50 text-light font-semibold hover:border-secondary-400 transition-colors"
              >
                Explore Platform
                <ArrowRight size={20} className="ml-2" />
              </motion.button>
            </div>
          </motion.div>

          {/* Hero Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20"
          >
            {[
              '360° Attainment Analytics',
              'Accreditation-Ready Reports',
              'AI-Powered Academic Intelligence',
              'Real-Time Institutional Monitoring'
            ].map((metric, idx) => (
              <div key={idx} className="p-4 rounded-lg glass border border-white/10">
                <p className="text-light/80 text-sm font-medium">{metric}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-light text-center mb-12">Core Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'CO Attainment', desc: 'Automated calculations' },
              { title: 'PO Analytics', desc: 'Program outcomes tracking' },
              { title: 'Accreditation', desc: 'NAAC & NBA compliance' },
              { title: 'Faculty Analytics', desc: 'Performance insights' },
              { title: 'Gap Analysis', desc: 'Identify improvement areas' },
              { title: 'Intelligence Dashboard', desc: 'AI-powered insights' }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-lg glass border border-white/10 hover:border-accent-500/50 transition-all group"
              >
                <h3 className="text-lg font-semibold text-light mb-2 group-hover:text-accent-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-light/60 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-light mb-6">
            Build the Future of Academic Excellence
          </h2>
          <p className="text-xl text-light/70 mb-8">
            Experience intelligent accreditation, analytics, and academic quality automation with OBEzy.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-secondary-400 to-secondary-600 text-primary-900 font-semibold"
          >
            Schedule Demo Today
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 bg-primary-900/50">
        <div className="max-w-7xl mx-auto text-center text-light/60 text-sm">
          <p>© 2024 OBEzy™. All rights reserved. | The future operating system for academic excellence.</p>
        </div>
      </footer>
    </main>
  );
}