import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-bg2">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-white/10"></div>
          <span className="text-accent font-mono text-sm tracking-widest uppercase">01 // Architecture & Profile</span>
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
            <div className="relative glass border border-white/5 rounded-3xl p-6 flex flex-col items-center gap-6 group hover:border-accent/35 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl pointer-events-none"></div>
              
              <div className="relative w-28 h-28">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-accent2 to-accent3 animate-spin-slow opacity-40 blur-md"></div>
                <div className="absolute inset-1 rounded-full bg-surface2 flex items-center justify-center border-2 border-surface2 z-10">
                  <span className="text-3xl font-black font-mono text-white tracking-tighter">VW</span>
                </div>
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-ai rounded-full border-[3px] border-surface2 z-20 animate-pulse"></div>
              </div>

              <div className="w-full bg-bg rounded-xl border border-white/5 overflow-hidden font-mono text-[11px] shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-2 bg-surface2 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  <span className="ml-2 text-text3 text-[10px]">backend-systems.ts</span>
                </div>
                <div className="p-4 leading-relaxed overflow-x-auto text-text2">
                  <pre>
                    <code>
                      <span className="c-keyword">import</span> {'{ FastifyInstance }'} <span className="c-keyword">from</span> <span className="c-string">"fastify"</span>;<br/>
                      <span className="c-keyword">import</span> {'{ db, cache }'} <span className="c-keyword">from</span> <span className="c-string">"./infra"</span>;<br/><br/>
                      <span className="c-keyword">export async function</span> <span className="c-var">verdictEngine</span>(app: FastifyInstance) {'{\n'}
                      {'  '}app.post(<span className="c-string">"/verdict"</span>, {'async (req, reply) => {\n'}
                      {'    '}<span className="c-keyword">const</span> {'{ claimId, evidence }'} = req.body;<br/>
                      {'    '}<span className="c-keyword">const</span> verified = <span className="c-keyword">await</span> db.claims.update({'{'}<br/>
                      {'      '}where: {'{ id: claimId }'},<br/>
                      {'      '}data: {'{ status: '} <span className="c-string">"VERIFIED"</span> {'}\n'}
                      {'    }'});<br/>
                      {'    '}<span className="c-keyword">await</span> cache.set(<span className="c-string">{"`verdict:${claimId}`"}</span>, verified);<br/>
                      {'    '}<span className="c-keyword">return</span> reply.code(<span className="c-bool">200</span>).send(verified);<br/>
                      {'  '});<br/>
                      {'}'}
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
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight text-white leading-tight">
              Designing Reliable Backend Architectures.<br />
              <span className="gradient-text">Engineering Scalable Systems.</span>
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-text2 leading-relaxed">
              <p>
                I am a Computer Science Engineering student with hands-on experience building production-oriented applications using <strong className="text-white">React, Next.js, TypeScript, Fastify, Prisma ORM, PostgreSQL, Redis, JWT Authentication</strong>, and modern backend architecture patterns.
              </p>
              <p>
                My professional experience covers developing enterprise-style systems including <strong className="text-accent">Role-Based Access Control (RBAC)</strong>, <strong className="text-accent">workflow engines</strong>, <strong className="text-accent">evidence management systems</strong>, <strong className="text-accent">verdict engines</strong>, real-time APIs, and scalable full-stack applications.
              </p>
              <p>
                I focus on building reliable, maintainable, and scalable software solutions rather than basic CRUD applications. I'm passionate about clean code, database design optimization, and handling complex systems bottlenecks.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
