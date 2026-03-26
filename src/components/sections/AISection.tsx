import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const AISection = () => {
  return (
    <section id="ai" className="py-24 relative overflow-hidden bg-bg2 border-y border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ai/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-ai/30"></div>
            <span className="text-ai font-mono text-sm tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ai animate-pulse"></span>
              AI Vision & Focus
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-[1.1]"
            >
              Engineering <br />
              <span className="gradient-text-ai">Intelligent Systems.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text2 leading-relaxed mb-10"
            >
              Beyond traditional software engineering, I am deeply invested in the intersection of data and product. My goal is to build scalable, AI-powered applications that leverage machine learning models, intelligent preprocessing pipelines, and seamless user experiences.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-surface border border-ai/20 shadow-[0_0_30px_rgba(16,185,129,0.05)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-ai/10 blur-[40px]"></div>
              <h4 className="text-ai font-mono text-sm uppercase tracking-widest mb-4">What I'm Learning</h4>
              <ul className="space-y-3 relative z-10">
                {portfolioData.aiVision.learning.map((goal: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-ai mt-1 text-xs">▹</span>
                    <span className="text-sm font-medium">{goal}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="lg:col-span-7 relative flex flex-col justify-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl glass border border-white/5 bg-gradient-to-br from-surface to-bg relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 blur-[50px] rounded-full pointer-events-none"></div>
              <h3 className="text-2xl font-bold mb-4 text-white">The Vision</h3>
              <p className="text-xl text-ai font-mono tracking-tight glow-ai">"{portfolioData.aiVision.vision}"</p>
            </motion.div>

            {/* Pipeline Diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 p-6 rounded-2xl border border-white/5 bg-surface flex flex-col md:flex-row items-center justify-between gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-surface2 flex items-center justify-center text-xs font-mono mb-2">RAW</div>
                <div className="w-1 h-6 bg-white/10 md:hidden"></div>
              </div>
              <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent relative">
                <div className="absolute top-1/2 left-0 h-[2px] w-4 bg-ai rounded-full -translate-y-1/2 animate-[pulse_2s_ease-in-out_infinite]"></div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-ai/50 bg-ai/10 flex items-center justify-center text-ai font-mono text-sm glow-ai">PurifAI</div>
                <div className="w-1 h-6 bg-white/10 md:hidden"></div>
              </div>
              
              <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent relative">
                <div className="absolute top-1/2 right-0 h-[2px] w-4 bg-accent rounded-full -translate-y-1/2 animate-[pulse_2s_ease-in-out_infinite_0.5s]"></div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border border-accent/50 bg-accent/10 flex items-center justify-center text-accent text-xs font-mono mb-2">MODEL</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AISection;
