import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, FileDown, Mail, Terminal } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    class Particle {
      x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; color: string;
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.color = Math.random() < 0.5 ? 'rgba(99,102,241,' : 'rgba(6,182,212,';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${this.opacity})`;
        ctx.fill();
      }
    }

    const particles: Particle[] = Array.from({ length: 60 }, () => new Particle());

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99,102,241,${0.1 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-bg">
      {/* Backgrounds */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-50" />
      <div className="absolute inset-0 z-0 grid-bg opacity-30 pointer-events-none mask-radial"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-white/10 text-text2 text-xs font-mono mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-ai animate-pulse"></span>
            <span>{portfolioData.personal.status}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.05] mb-4"
          >
            <span className="block text-white">Vedansh</span>
            <span className="block gradient-text uppercase tracking-tight">Wagh</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-3xl font-mono text-text2 mb-6 flex items-center flex-wrap gap-2"
          >
            <span className="text-accent font-bold">{'>_'}</span>
            <span className="text-white font-semibold">{portfolioData.personal.role}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-text2 font-sans font-medium mb-4 max-w-3xl"
          >
            {portfolioData.personal.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base md:text-lg text-text3 max-w-2xl mb-10 leading-relaxed"
          >
            Building high-performance backend systems, managing structured database designs, and developing robust full-stack applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="group relative px-6 py-3.5 bg-accent hover:bg-accent2 text-white rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] flex items-center gap-2 overflow-hidden interactive"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <a
              href="/Vedansh_Wagh_Resume.pdf"
              download="Vedansh_Wagh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-surface border border-white/5 hover:border-white/20 text-text rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 interactive font-mono text-sm"
            >
              <FileDown size={18} className="text-accent" /> Download Resume
            </a>

            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3.5 bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 text-white rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 interactive "
            >
              <Mail size={18} className="text-text3" /> Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-8 md:gap-16 flex-wrap border-t border-white/5 pt-8"
          >
            {portfolioData.personal.aboutStats.map((stat: any, i: number) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black font-mono text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-[10px] text-text3 uppercase font-bold tracking-wider font-mono">
                  {stat.label}
                </span>
              </div>
            ))}

            <div className="flex flex-col ml-auto md:ml-0 font-mono text-xs text-text3 gap-1">
              <span className="text-[10px] uppercase font-bold tracking-wider">Compiling Stack:</span>
              <div className="flex items-center gap-2 text-white">
                <Terminal size={14} className="text-accent" />
                <TypeAnimation
                  sequence={[
                    'Fastify', 2000,
                    'TypeScript', 2000,
                    'PostgreSQL', 2000,
                    'Redis', 2000,
                    'Prisma', 2000,
                    'Next.js', 2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-medium"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] text-text3 font-mono">Scroll System</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-accent to-transparent">
          <motion.div
            animate={{ y: [0, 20, 40], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-1 h-2 -ml-[1.5px] bg-accent rounded-full shadow-[0_0_8px_#6366f1]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
