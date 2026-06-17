import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckSquare, GitCommit } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-bg2 relative border-t border-white/5">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-white/10"></div>
          <span className="text-accent font-mono text-sm tracking-widest uppercase">05 // Work Deployments</span>
          <div className="h-[1px] flex-1 bg-white/10 max-w-[100px]"></div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">
            Engineering Timeline
          </h2>
          <p className="text-text2 text-lg">Vetted work history and systems engineering internships.</p>
        </div>

        <div className="relative max-w-4xl mx-auto mt-16 px-4 md:px-0">
          
          {/* Timeline center line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/10 via-accent/30 to-transparent"></div>

          <div className="space-y-16 md:space-y-24">
            {portfolioData.experience.map((exp, i) => {
              const isEven = i % 2 === 0;

              return (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative w-full group"
                >
                  
                  {/* Dot icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-2 md:top-2 w-8 h-8 rounded-full bg-surface border border-white/10 flex items-center justify-center z-20 group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all duration-300">
                    <GitCommit className="w-4 h-4 text-accent" />
                  </div>

                  {/* Card wrapper */}
                  <div className={`w-full md:w-[calc(50%-30px)] pl-16 md:pl-0 ${isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto'}`}>
                    
                    <div className="glass p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl hover:border-accent/20 transition-all duration-500 relative bg-surface/10 hover:bg-surface/30 backdrop-blur-xl">
                      
                      <div className={`flex items-center gap-2 mb-2 font-mono text-[10px] text-text3 ${isEven ? 'md:justify-end' : ''}`}>
                        <Calendar size={12} className="text-accent" />
                        <span>{exp.date}</span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors mb-2">
                        {exp.role}
                      </h3>
                      
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold mb-4 bg-accent/10 text-accent border border-accent/10`}>
                        <Briefcase size={12} /> {exp.company}
                      </div>

                      <p className="text-text2 text-sm leading-relaxed mb-6">
                        {exp.description}
                      </p>
                      
                      <div className="p-5 rounded-2xl bg-black/40 border border-white/5 text-sm text-left">
                        <strong className="block text-white mb-4 text-xs uppercase tracking-wider font-mono text-text3 flex items-center gap-1.5">
                          <CheckSquare size={13} className="text-accent" /> Key Contributions
                        </strong>
                        <ul className="text-text2 leading-relaxed space-y-3">
                          {exp.impact.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed">
                              <span className="text-accent mt-0.5 opacity-60">▹</span>
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
