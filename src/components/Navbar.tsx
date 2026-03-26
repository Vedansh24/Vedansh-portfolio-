import React, { useState, useEffect } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { Menu, X, Command } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'ai', label: 'AI Vision' },
  { id: 'hire-me', label: 'Hire Me' },
];

const Navbar = ({ onOpenCmd }: { onOpenCmd: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map(item => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <button 
            onClick={() => scrollTo('home')}
            className="text-2xl font-mono font-bold tracking-tighter hover:opacity-80 transition-opacity"
          >
            VW<span className="text-accent">.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`text-sm font-medium transition-colors relative ${
                      activeSection === item.id ? 'text-white' : 'text-text2 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent rounded-full animate-pulse-slow" />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 border-l border-white/10 pl-6">
              <button 
                onClick={onOpenCmd}
                className="flex items-center gap-2 text-xs font-medium text-text3 bg-surface hover:bg-surface2 border border-white/5 py-1.5 px-3 rounded-md transition-colors interactive"
              >
                <SearchIcon size={14} />
                <span>Search</span>
                <kbd className="hidden sm:inline-block font-mono bg-bg px-1.5 rounded text-[10px]">⌘K</kbd>
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={onOpenCmd} className="text-text2 hover:text-white p-1">
              <SearchIcon size={20} />
            </button>
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-text2 hover:text-white p-1"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 z-40 bg-bg backdrop-blur-xl transition-transform duration-500 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-24 px-6`}
      >
        <ul className="flex flex-col gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`text-2xl font-semibold transition-colors ${
                  activeSection === item.id ? 'text-accent' : 'text-text2'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const SearchIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export default Navbar;
