import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, ShieldCheck, Code, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const HireMe = () => {
  const points = portfolioData.whyHireMe.points;

  // Let's create visual sub-components to render inside each bento card
  const renderVisual = (idx: number) => {
    switch (idx) {
      case 0: // I build systems, not just interfaces
        return (
          <div className="mt-6 p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-[10px] space-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 blur-[25px]"></div>
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2 text-text3">
              <span>SYSTEM ARCHITECTURE</span>
              <span>v1.0.0</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="px-2 py-1 bg-surface border border-white/5 rounded text-white text-center w-full">Client UI</div>
              <span className="text-accent">→</span>
              <div className="px-2 py-1 bg-accent/20 border border-accent/30 text-accent rounded text-center w-full font-bold">Fastify API</div>
              <span className="text-accent">→</span>
              <div className="px-2 py-1 bg-surface border border-white/5 rounded text-center w-full">Redis Cache</div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <span className="text-text3 text-[9px]">Db Writeback:</span>
              <div className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">PostgreSQL (Neon)</div>
            </div>
          </div>
        );
      case 1: // End-to-End Capabilities
        return (
          <div className="mt-6 grid grid-cols-2 gap-2 text-[10px] font-mono">
            {[
              { label: "Frontend", val: "React, Next.js" },
              { label: "Backend", val: "Fastify, Express" },
              { label: "Databases", val: "PostgreSQL, Redis" },
              { label: "DevOps", val: "Docker, Actions" }
            ].map((cap, i) => (
              <div key={i} className="p-2 bg-surface/40 border border-white/5 rounded-lg">
                <span className="block text-text3 text-[9px] uppercase font-bold">{cap.label}</span>
                <span className="text-white font-medium">{cap.val}</span>
              </div>
            ))}
          </div>
        );
      case 2: // Enterprise-Style Systems
        return (
          <div className="mt-6 flex flex-wrap gap-2 text-[9px] font-mono">
            <span className="px-2.5 py-1 bg-accent/10 text-accent border border-accent/20 rounded-lg">Verdict State Engine</span>
            <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg">Role Permission Guard</span>
            <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg">Evidence Storage Pipeline</span>
          </div>
        );
      case 3: // Engineering & Problem Solving Focus
        return (
          <div className="mt-6 p-3 rounded-lg bg-black/50 border border-white/5 font-mono text-[9px] text-text2 space-y-1">
            <div className="text-text3">// Query Execution Plan Optimization</div>
            <div><span className="text-red-400">EXPLAIN ANALYZE</span> SELECT * FROM claims;</div>
            <div className="text-emerald-400 font-bold">» Execution Time: 0.125ms (Index Scan)</div>
          </div>
        );
      default:
        return null;
    }
  };

  const icons = [Cpu, Layers, ShieldCheck, Code];

  return (
    <section id="why-hire-me" className="py-28 bg-bg2 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-white/10"></div>
          <span className="text-accent font-mono text-sm tracking-widest uppercase">06 // Core Competencies</span>
          <div className="h-[1px] flex-1 bg-white/10 max-w-[100px]"></div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">
            Why Hire Me
          </h2>
          <p className="text-text2 text-lg max-w-2xl mx-auto">
            Combining full-stack software proficiency with rigorous backend architectural standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {points.map((point, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 md:p-8 rounded-3xl glass border border-white/5 hover:border-accent/25 hover:shadow-[0_10px_40px_rgba(99,102,241,0.05)] transition-all duration-300 flex flex-col justify-between bg-surface/10 hover:bg-surface/20"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-text2 text-sm md:text-base leading-relaxed">
                    {point.description}
                  </p>
                </div>

                {renderVisual(idx)}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center border-t border-white/5 pt-12"
        >
          <p className="text-text3 text-sm font-mono mb-4">READY FOR DEPLOYMENT INTO TECH TEAMS</p>
          <a 
            href={portfolioData.personal.resumeUrl} 
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-bg font-bold rounded-xl hover:-translate-y-0.5 transition-all interactive shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] text-sm"
          >
            Download Resume (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMe;
