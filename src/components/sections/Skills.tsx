import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

const SkillBar = ({ name, level, index }: { name: string, level: number, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between items-end mb-1.5">
        <span className="text-sm font-medium text-text2">{name}</span>
        <span className="text-xs font-mono text-text3">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-surface2 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.1 * index, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-accent to-accent3 rounded-full"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16 justify-end">
          <div className="h-[1px] flex-1 bg-white/10 max-w-[100px]"></div>
          <span className="text-accent font-mono text-sm tracking-widest uppercase">03 // Tech Arsenal</span>
          <div className="h-[1px] w-12 bg-white/10"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass border border-white/5 hover:border-accent/20 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl bg-surface2 border border-white/10 group-hover:border-accent/30 group-hover:text-accent transition-colors ${category.category === 'AI / ML' ? 'group-hover:text-ai group-hover:border-ai/30' : ''}`}>
                  <div className="w-5 h-5 bg-white/20 rounded-full"></div>
                </div>
                <h3 className="text-lg font-bold">{category.category}</h3>
              </div>

              <div>
                {category.items.map((item, i) => (
                  <SkillBar key={i} name={item.name} level={item.level} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
