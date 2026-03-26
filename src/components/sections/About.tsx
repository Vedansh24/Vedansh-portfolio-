import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-bg2">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-white/10"></div>
          <span className="text-accent font-mono text-sm tracking-widest uppercase">01 // About</span>
          <div className="h-[1px] flex-1 bg-white/10 max-w-[100px]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative glass border border-white/5 rounded-3xl p-8 flex flex-col items-center gap-8 group hover:border-accent/30 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl pointer-events-none"></div>
              
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-accent2 to-accent3 animate-spin-slow opacity-50 blur-md"></div>
                <div className="absolute inset-1 rounded-full bg-surface2 flex items-center justify-center border-2 border-surface2 z-10">
                  <span className="text-4xl font-black font-mono gradient-text">VW</span>
                </div>
                <div className="absolute bottom-1 right-1 w-5 h-5 bg-ai rounded-full border-[3px] border-surface2 z-20 animate-pulse"></div>
              </div>

              <div className="w-full bg-bg rounded-xl border border-white/5 overflow-hidden font-mono text-[13px] shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-2 bg-surface2 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-text3 text-[11px]">profile.ts</span>
                </div>
                <div className="p-5 leading-relaxed overflow-x-auto">
                  <pre>
                    <code>
                      <span className="c-keyword">const</span> <span className="c-var">vedansh</span> = {'{\n'}
                      {'  '}<span className="c-prop">role</span>: <span className="c-string">"{portfolioData.personal.role}"</span>,\n
                      {'  '}<span className="c-prop">status</span>: <span className="c-string">"{portfolioData.personal.status}"</span>,\n
                      {'  '}<span className="c-prop">openTo</span>: <span className="c-bool">true</span>\n
                      {'};'}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              From curiosity to code.<br />
              <span className="gradient-text">From code to impact.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-text2">
              <p>
                {portfolioData.personal.tagline}
              </p>
              <p>
                I am not just writing loops &mdash; <strong className="text-white">I am building systems</strong>. Whether it's a scalable backend architecture or an intelligent synthetic data pipeline, my mission is to merge <strong className="text-ai">AI methodologies</strong> with robust software engineering principles to solve real-world problems.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
