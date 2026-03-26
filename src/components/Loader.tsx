import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[10000] bg-bg flex flex-col items-center justify-center"
        exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col items-center max-w-xs w-full px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-mono font-bold font-black gradient-text mb-8 tracking-tighter"
          >
            VW<span className="text-accent">.</span>
          </motion.div>
          
          <div className="w-full h-1 bg-surface2 rounded-full overflow-hidden relative mb-4">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent via-accent2 to-accent3"
              initial={{ width: '0%' }}
              animate={{ width: `${Math.min(100, progress)}%` }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            />
          </div>
          
          <div className="flex justify-between w-full text-xs font-mono text-text3 tracking-widest uppercase">
            <span>System Init</span>
            <span>{Math.min(100, progress)}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
