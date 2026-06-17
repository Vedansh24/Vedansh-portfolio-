import React from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, Brain, Code, Network, BookOpen, Database, Shield } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const WhatImBuilding = () => {
  // Map icons for display
  const buildIcons = [GitPullRequest, Shield, Network];
  const learningIcons = [Network, Brain, Database, Code];

  return (
    <section id="building" className="py-24 relative bg-bg2 border-y border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-4 mb-16 justify-end">
          <div className="h-[1px] flex-1 bg-white/10 max-w-[100px]"></div>
          <span className="text-accent font-mono text-sm tracking-widest uppercase">03 // Active Cycles</span>
          <div className="h-[1px] w-12 bg-white/10"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Panel: Currently Building */}
          <div className="lg:col-span-6 space-y-6">
            <div className="mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/10">
                In Development
              </span>
              <h3 className="text-3xl font-black text-white mt-3 tracking-tight">
                Currently Building
              </h3>
              <p className="text-text3 text-sm mt-1 font-mono">
                Active repositories and workflow engines
              </p>
            </div>

            <div className="space-y-4">
              {portfolioData.whatImBuilding.currentlyBuilding.map((item, idx) => {
                const Icon = buildIcons[idx % buildIcons.length];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group p-5 rounded-2xl glass border border-white/5 hover:border-accent/20 transition-all duration-300 flex items-start gap-4 bg-surface/20"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent group-hover:scale-105 transition-transform flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-white group-hover:text-accent transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-[10px] font-mono font-semibold text-accent/80 bg-accent/5 px-2 py-0.5 rounded border border-accent/10">
                          Active
                        </span>
                      </div>
                      <p className="text-text2 text-sm mt-1 leading-relaxed">
                        {item.details}
                      </p>
                      
                      {/* Fake activity tracker */}
                      <div className="mt-3 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                        <span className="text-[10px] font-mono text-text3">Continuous integration verification online</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Currently Learning */}
          <div className="lg:col-span-6 space-y-6">
            <div className="mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-ai bg-ai/10 px-3 py-1 rounded-full border border-ai/10">
                Knowledge Expansion
              </span>
              <h3 className="text-3xl font-black text-white mt-3 tracking-tight">
                Currently Learning
              </h3>
              <p className="text-text3 text-sm mt-1 font-mono">
                System design patterns and theoretical foundations
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {portfolioData.whatImBuilding.currentlyLearning.map((item, idx) => {
                const Icon = learningIcons[idx % learningIcons.length];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl glass border border-white/5 hover:border-ai/20 transition-all duration-300 flex flex-col justify-between bg-surface/20 group"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-ai/10 border border-ai/25 flex items-center justify-center text-ai mb-4 group-hover:scale-105 transition-transform flex-shrink-0">
                        <Icon size={16} />
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 group-hover:text-ai transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-text2 text-xs leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                    
                    <div className="mt-6 flex items-center gap-2 text-[10px] font-mono text-text3">
                      <BookOpen size={12} className="text-ai" />
                      <span>Reference Material Active</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatImBuilding;
