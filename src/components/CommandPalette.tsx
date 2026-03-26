import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, Home, User, Briefcase, Cpu, Layers, Github, Mail } from 'lucide-react';

const CommandPalette = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [search, setSearch] = useState('');

  const links = [
    { id: 'home', title: 'Home', icon: Home, section: true },
    { id: 'about', title: 'About Me', icon: User, section: true },
    { id: 'projects', title: 'Projects', icon: Briefcase, section: true },
    { id: 'ai', title: 'AI Vision', icon: Cpu, section: true },
    { id: 'skills', title: 'Tech Stack', icon: Layers, section: true },
    { id: 'hire-me', title: 'Hire Me', icon: Briefcase, section: true },
    { id: 'contact', title: 'Contact', icon: Mail, section: true },
    { id: 'https://github.com/Vedansh24', title: 'GitHub Profile', icon: Github, external: true },
  ];

  const filteredLinks = links.filter(link => 
    link.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  const handleSelect = (item: typeof links[0]) => {
    setIsOpen(false);
    setSearch('');
    
    if (item.external) {
      window.open(item.id, '_blank');
    } else if (item.section) {
      const el = document.getElementById(item.id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-[15vh] left-1/2 -translate-x-1/2 w-full max-w-xl z-[101] p-4"
          >
            <div className="bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden glass">
              <div className="flex items-center px-4 py-3 border-b border-white/5">
                <Search className="w-5 h-5 text-text2 mr-3" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-text placeholder-text3 text-lg"
                />
                <div className="flex items-center gap-1 text-xs text-text3 bg-surface2 px-2 py-1 rounded">
                  <Command className="w-3 h-3" />
                  <span>K</span>
                </div>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {filteredLinks.length > 0 ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-xs font-semibold text-text3 uppercase tracking-wider">
                      Navigation
                    </div>
                    {filteredLinks.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => handleSelect(link)}
                        className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-white/5 text-text2 hover:text-text transition-colors group text-left"
                      >
                        <div className="flex items-center gap-3">
                          <link.icon className="w-5 h-5 group-hover:text-accent transition-colors" />
                          <span className="font-medium">{link.title}</span>
                        </div>
                        {link.external && <span className="text-xs text-text3">External</span>}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="py-8 text-center text-text3">
                    No results found for "{search}"
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
