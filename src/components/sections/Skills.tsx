import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-bg">
      <div className="absolute inset-0 z-0 grid-bg opacity-20 pointer-events-none mask-radial"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-4 mb-16 justify-end">
          <div className="h-[1px] flex-1 bg-white/10 max-w-[100px]"></div>
          <span className="text-accent font-mono text-sm tracking-widest uppercase">04 // Core Technologies</span>
          <div className="h-[1px] w-12 bg-white/10"></div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white animate-pulse-slow">
            Technical Arsenal
          </h2>
          <p className="text-text2 text-lg max-w-xl mx-auto">
            A vetted collection of frontend frameworks, backend engines, databases, and DevOps automation pipelines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl glass border border-white/5 hover:border-accent/30 hover:shadow-[0_4px_30px_rgba(99,102,241,0.05)] transition-all duration-300 group bg-surface/20"
              >
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-2.5 rounded-xl bg-surface border border-white/5 text-accent group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-350">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((item, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="px-3.5 py-1.5 bg-black/30 text-text2 hover:text-white rounded-xl text-xs font-mono font-medium border border-white/5 hover:border-accent/40 hover:bg-surface/50 transition-all duration-200 cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
