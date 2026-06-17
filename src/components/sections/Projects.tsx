import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2, AlertTriangle, Layers, Lightbulb, Compass } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Systems' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'frontend', label: 'Frontend Dashboards' }
  ];

  const filteredProjects = portfolioData.projects.filter(p => 
    filter === 'all' ? true : p.category.includes(filter)
  );

  return (
    <section id="projects" className="py-28 relative bg-bg border-t border-white/5">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-white/10"></div>
          <span className="text-accent font-mono text-sm tracking-widest uppercase">02 // Flagship Systems</span>
          <div className="h-[1px] flex-1 bg-white/10 max-w-[100px]"></div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">
            Engineering Showcase
          </h2>
          <p className="text-text2 text-lg max-w-2xl mx-auto">
            Production-grade systems designed with robust architectures, structured databases, and fine-grained authorization.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all duration-300 border interactive ${
                filter === f.id 
                  ? 'bg-accent border-accent text-white shadow-[0_0_20px_rgba(99,102,241,0.35)]' 
                  : 'bg-surface border-white/5 text-text2 hover:text-white hover:border-white/20'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => {
              const IconComponent = project.icon || Code2;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  key={project.id}
                  className="glass rounded-3xl border border-white/5 bg-surface/30 hover:border-accent/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    
                    {/* Project Overview Panel */}
                    <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 bg-white/[0.01]">
                      <div>
                        <div className="flex items-center justify-between mb-8">
                          <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                            <IconComponent size={24} />
                          </div>
                          
                          <div className="flex items-center gap-2">
                            {project.github && (
                              <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="p-2.5 bg-surface rounded-xl text-text2 hover:text-white hover:bg-white/10 transition-colors border border-white/5 interactive"
                                title="View Source Code"
                              >
                                <Github size={18} />
                              </a>
                            )}
                            {project.live && (
                              <a 
                                href={project.live} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="p-2.5 bg-surface rounded-xl text-text2 hover:text-accent hover:bg-accent/10 transition-colors border border-white/5 interactive"
                                title="Launch Live Demo"
                              >
                                <ExternalLink size={18} />
                              </a>
                            )}
                          </div>
                        </div>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent text-[10px] font-bold uppercase tracking-wider mb-4 font-mono border border-accent/10">
                          {project.tagline}
                        </div>

                        <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
                          {project.title}
                        </h3>

                        <p className="text-text2 leading-relaxed text-base mb-8">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack tags */}
                      <div className="pt-6 border-t border-white/5">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-text3 font-mono mb-3">Technologies deployed</div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, idx) => (
                            <span key={idx} className="text-xs font-mono text-white px-3 py-1 bg-surface rounded border border-white/5">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Engineering Specs Panel */}
                    <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between bg-black/20">
                      <div className="space-y-8">
                        
                        {/* Problem Solved */}
                        <div className="flex gap-4">
                          <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                            <AlertTriangle size={16} />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold font-mono text-white uppercase tracking-wider mb-2">Problem Solved</h4>
                            <p className="text-text2 text-sm leading-relaxed">{project.problem}</p>
                          </div>
                        </div>

                        {/* Architecture Highlights */}
                        <div className="flex gap-4">
                          <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                            <Layers size={16} />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold font-mono text-white uppercase tracking-wider mb-2">Architecture Highlights</h4>
                            <p className="text-text2 text-sm leading-relaxed">{project.architecture}</p>
                          </div>
                        </div>

                        {/* Key Learnings */}
                        <div className="flex gap-4">
                          <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                            <Lightbulb size={16} />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold font-mono text-white uppercase tracking-wider mb-2">Key Engineering Learnings</h4>
                            <p className="text-text2 text-sm leading-relaxed">{project.learned}</p>
                          </div>
                        </div>

                      </div>
                      
                      {/* Monospace System Metadata Footer */}
                      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-text3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          <span>SYS_STATUS: DEPLOYED</span>
                        </div>
                        <div>
                          <span>TARGET_ENV: PRODUCTION</span>
                        </div>
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
