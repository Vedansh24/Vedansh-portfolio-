import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';
import { ExternalLink, Github, X, Code2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const TiltCard = ({ children, className }: { children: React.ReactNode, className: string }) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.1,
      });
    }
    return () => {
      if (tiltRef.current && (tiltRef.current as any).vanillaTilt) {
        (tiltRef.current as any).vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div ref={tiltRef} className={`tilt-card ${className}`}>
      {children}
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai', label: 'AI / ML' }
  ];

  const filteredProjects = portfolioData.projects.filter(p => 
    filter === 'all' ? true : p.category.includes(filter)
  );

  return (
    <section id="projects" className="py-24 relative bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-white/10"></div>
          <span className="text-accent font-mono text-sm tracking-widest uppercase">02 // Projects</span>
          <div className="h-[1px] flex-1 bg-white/10 max-w-[100px]"></div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-text2 text-lg">Handcrafted products solving real problems.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border interactive ${
                filter === f.id 
                  ? 'bg-accent border-accent text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]' 
                  : 'bg-surface border-white/10 text-text2 hover:text-white hover:border-white/30'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
              >
                <TiltCard className="h-full">
                  <div className="relative group h-full glass rounded-2xl overflow-hidden border border-white/5 transition-colors duration-500 hover:border-accent/40 flex flex-col">
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl shadow-[inset_0_0_0_1px_${project.category.includes('ai') ? 'rgba(16,185,129,0.5)' : 'rgba(99,102,241,0.5)'}]`}></div>
                    
                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110 ${
                          project.category.includes('ai') 
                            ? 'bg-ai/10 border-ai/20 text-ai group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                            : 'bg-accent/10 border-accent/20 text-accent group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                        }`}>
                          <Code2 size={24} />
                        </div>

                        <div className="flex items-center gap-2 relative z-20">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-surface2 rounded-lg text-text2 hover:text-white hover:bg-white/10 transition-colors interactive">
                              <Github size={18} />
                            </a>
                          )}
                          {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-surface2 rounded-lg text-text2 hover:text-accent hover:bg-accent/10 transition-colors interactive">
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="mb-4">
                        {project.featured && (
                          <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded inline-block mb-3 ${
                            project.category.includes('ai') ? 'bg-ai/10 text-ai' : 'bg-accent/10 text-accent'
                          }`}>
                            Featured
                          </span>
                        )}
                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                        <p className="text-text2 text-sm leading-relaxed">{project.description}</p>
                      </div>

                      <div className="mt-auto pt-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, idx) => (
                            <span key={idx} className="text-[11px] font-mono font-medium text-text3 px-2.5 py-1 bg-surface2 rounded border border-white/5">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Expand Button hit area */}
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="absolute inset-0 z-10 w-full h-full cursor-none"
                        aria-label="View Project Details"
                      ></button>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[200] bg-bg/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface glass border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-surface2 rounded-full text-text2 hover:text-white transition-colors interactive"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${
                    selectedProject.category.includes('ai') 
                      ? 'bg-ai/10 border-ai/20 text-ai glow-ai' 
                      : 'bg-accent/10 border-accent/20 text-accent glow-accent'
                  }`}>
                    <Code2 size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">{selectedProject.title}</h2>
                    <div className="flex gap-4 mt-2">
                      {selectedProject.github && (
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold flex items-center gap-2 text-text3 hover:text-white transition-colors interactive">
                          <Github size={16} /> Code
                        </a>
                      )}
                      {selectedProject.live && (
                        <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold flex items-center gap-2 text-accent hover:text-accent2 transition-colors interactive">
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-12 mt-10">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">The Problem It Solves</h4>
                      <p className="text-text2 leading-relaxed text-lg">{selectedProject.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">What I Learned</h4>
                      <p className="text-text2 leading-relaxed text-lg">{selectedProject.learned}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t: string, i: number) => (
                        <span key={i} className="px-3 py-1.5 bg-surface2 border border-white/5 rounded-lg text-sm font-medium text-text">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
