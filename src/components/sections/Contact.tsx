import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-bg border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-white/10"></div>
          <span className="text-accent font-mono text-sm tracking-widest uppercase">05 // Contact</span>
          <div className="h-[1px] flex-1 bg-white/10 max-w-[100px]"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Let's build something <span className="gradient-text">extraordinary.</span>
            </h2>
            <p className="text-lg text-text2 leading-relaxed mb-10 max-w-lg">
              Whether you're looking for a driven developer to join your team, want to collaborate on a hackathon, or just want to talk tech — my inbox is always open.
            </p>

            <div className="space-y-4">
              <a href="mailto:hello@vedanshwagh.com" className="flex items-center gap-4 p-4 rounded-xl glass border border-white/5 hover:border-accent/40 hover:-translate-y-1 transition-all group interactive w-full max-w-md">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs text-text3 font-mono uppercase tracking-widest mb-1">Email</div>
                  <div className="font-semibold text-white">hello@vedanshwagh.com</div>
                </div>
              </a>

              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl glass border border-white/5 hover:border-white/30 hover:-translate-y-1 transition-all group interactive w-full max-w-md">
                <div className="w-12 h-12 rounded-lg bg-surface2 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Github size={24} />
                </div>
                <div>
                  <div className="text-xs text-text3 font-mono uppercase tracking-widest mb-1">GitHub</div>
                  <div className="font-semibold text-white">github.com/Vedansh24</div>
                </div>
              </a>

              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl glass border border-white/5 hover:border-[#0a66c2]/40 hover:-translate-y-1 transition-all group interactive w-full max-w-md">
                <div className="w-12 h-12 rounded-lg bg-[#0a66c2]/10 flex items-center justify-center text-[#0a66c2] group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div>
                  <div className="text-xs text-text3 font-mono uppercase tracking-widest mb-1">LinkedIn</div>
                  <div className="font-semibold text-white">Vedansh Wagh</div>
                </div>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full"></div>
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="relative p-8 rounded-3xl glass border border-white/10 shadow-2xl flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-mono text-text3 uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-surface transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-mono text-text3 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-surface transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono text-text3 uppercase tracking-widest">Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={4}
                  className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-surface transition-colors resize-none"
                  placeholder="What's on your mind?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus !== 'idle'}
                className="mt-2 w-full py-4 bg-accent hover:bg-accent2 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 interactive disabled:opacity-70"
              >
                {formStatus === 'idle' && <><Send size={18} /> Send Message</>}
                {formStatus === 'submitting' && <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                {formStatus === 'success' && <><CheckCircle2 size={18} className="text-green-300" /> Sent Successfully</>}
              </button>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
