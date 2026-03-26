import React from 'react';
import { motion } from 'framer-motion';
import { Github, GitCommit, GitPullRequest, Star } from 'lucide-react';

const HeatmapCell = ({ level }: { level: number }) => {
  const colors = [
    'bg-white/5',
    'bg-accent/30',
    'bg-accent/60',
    'bg-accent/80',
    'bg-accent shadow-[0_0_8px_rgba(99,102,241,0.6)]',
  ];
  return (
    <div className={`w-3 h-3 rounded-[2px] ${colors[level]} hover:scale-150 transition-transform duration-200 cursor-none origin-center`}></div>
  );
};

const GitHub = () => {
  // Generate pseudo-random heatmap data that looks realistic
  const weeks = 40;
  const days = 7;
  const heatmapData = Array.from({ length: weeks }, (_, w) => 
    Array.from({ length: days }, () => {
      const r = Math.random();
      let level = 0;
      if (r > 0.6) level = 1;
      if (r > 0.8) level = 2;
      if (r > 0.9) level = 3;
      if (r > 0.97) level = 4;
      // Make right side (recent) more active
      if (w > 30 && r > 0.4) level = Math.floor(Math.random() * 3) + 2;
      return level;
    })
  );

  const stats = [
    { label: "Public Repos", value: "3+", icon: Github },
    { label: "Total Commits", value: "150+", icon: GitCommit },
    { label: "Pull Requests", value: "20+", icon: GitPullRequest },
    { label: "Stars Earned", value: "10+", icon: Star },
  ];

  return (
    <section id="github" className="py-24 bg-bg relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-accent font-mono text-sm tracking-widest uppercase">04 // Activity</span>
          <div className="h-[1px] flex-1 bg-white/10 max-w-[100px]"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl glass border border-white/5 text-center group hover:border-accent/20 transition-colors"
            >
              <div className="mx-auto w-10 h-10 rounded-xl bg-surface2 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                <stat.icon size={20} />
              </div>
              <div className="text-3xl font-black font-mono text-white mb-1">{stat.value}</div>
              <div className="text-xs text-text3 uppercase font-semibold tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl glass border border-white/5"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-1">Contribution Activity</h3>
              <p className="text-sm text-text3">A year of building and shipping code.</p>
            </div>
            
            <a 
              href="https://github.com/Vedansh24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white flex items-center gap-2 text-bg font-bold rounded-lg text-sm transition-transform hover:-translate-y-0.5 interactive self-start"
            >
              <Github size={16} /> Follow on GitHub
            </a>
          </div>

          <div className="overflow-x-auto pb-4 custom-scrollbar">
            <div className="flex gap-1 min-w-max">
              {heatmapData.map((week, i) => (
                <div key={i} className="flex flex-col gap-1">
                  {week.map((level, j) => (
                    <HeatmapCell key={`${i}-${j}`} level={level} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 mt-4 text-xs text-text3">
            <span>Less</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map(l => (
                <div key={l} className={`w-3 h-3 rounded-[2px] ${
                  l === 0 ? 'bg-white/5' : 
                  l === 1 ? 'bg-accent/30' : 
                  l === 2 ? 'bg-accent/60' : 
                  l === 3 ? 'bg-accent/80' : 
                  'bg-accent'
                }`}></div>
              ))}
            </div>
            <span>More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHub;
