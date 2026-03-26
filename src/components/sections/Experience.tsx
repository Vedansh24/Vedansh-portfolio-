import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-bg2 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Hackathons & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="text-text2">Building under pressure and learning by doing.</p>
        </div>

        <div className="relative max-w-4xl mx-auto mt-16 px-4 md:px-0">
          
          {/* Main Vertical Timeline Line */}
          <div className="absolute left-9 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          {/* Animated glow line */}
          <div className="absolute left-9 md:left-1/2 w-[2px] bg-accent/50 -translate-x-1/2 h-0 animate-[growDown_2s_ease-out_forwards]" style={{ animationTimeline: 'view()' }}></div>

          <div className="space-y-12 md:space-y-24">
            {portfolioData.experience.map((exp, i) => {
              const isEven = i % 2 === 0;

              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative w-full group"
                >
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-10 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-accent border-4 border-bg2 z-20 group-hover:scale-150 group-hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.6)]"></div>

                  {/* Card wrapper */}
                  <div className={`w-full md:w-[calc(50%-40px)] pl-16 md:pl-0 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    
                    <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 shadow-xl hover:border-accent/40 hover:shadow-[0_10px_40px_rgba(99,102,241,0.1)] transition-all duration-500 relative bg-surface/40 hover:bg-surface/60 backdrop-blur-xl">
                      
                      {/* Horizontal Connecting Line (Desktop Only) */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-[40px] h-[2px] bg-white/10 group-hover:bg-accent/60 transition-colors duration-500 ${isEven ? '-right-[40px]' : '-left-[40px]'}`}></div>

                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">{exp.role}</h3>
                        <span className="text-xs font-mono text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">{exp.date}</span>
                      </div>
                      
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold mb-4 bg-ai/10 text-ai border border-ai/20">
                        {exp.company}
                      </div>

                      <p className="text-text2 text-sm leading-relaxed mb-6">{exp.description}</p>
                      
                      <div className="p-4 rounded-xl bg-bg/50 border border-white/5 text-sm">
                        <strong className="block text-white mb-3 text-xs uppercase tracking-widest font-mono text-text3">Impact & Learnings</strong>
                        <ul className="text-text2 leading-relaxed space-y-2">
                          {exp.impact.map((point, idx) => (
                             <li key={idx} className="flex items-start gap-3">
                               <span className="text-accent mt-0.5 opacity-50">▹</span>
                               <span>{point}</span>
                             </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
