import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const HireMe = () => {
  return (
    <section id="hire-me" className="py-24 relative overflow-hidden bg-bg2">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent2/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ai/10 border border-ai/30 text-ai text-sm font-semibold uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-ai animate-pulse"></span>
          Available for Internships
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Looking for a driven <br />
          <span className="gradient-text">Full Stack & AI Engineer?</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-text2 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I bring a strong foundation in scalable web architectures, a growing expertise in AI/ML data pipelines, and a proven track record of shipping fast, reliable products under pressure.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { title: "Full Stack Mastery", desc: "React, Node, MongoDB, SQL" },
            { title: "AI/ML Focused", desc: "Python, Pandas, Scikit-Learn" },
            { title: "Problem Solver", desc: "Top 70 / 500+ AceHack" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="p-5 rounded-2xl bg-surface border border-white/5 flex flex-col items-center justify-center text-center"
            >
              <CheckCircle2 className="text-accent mb-3" size={24} />
              <h4 className="text-white font-bold mb-1">{item.title}</h4>
              <p className="text-sm text-text3">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a 
            href={portfolioData.personal.resumeUrl} 
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-bg font-bold rounded-xl hover:-translate-y-1 transition-transform interactive shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          >
            <FileText size={20} />
            Download Resume
          </a>
          <p className="mt-4 text-xs text-text3 font-mono">PDF • 120KB</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMe;
