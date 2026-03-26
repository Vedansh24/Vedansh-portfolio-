import { useState, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import TerminalOS from './components/TerminalOS';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import AISection from './components/sections/AISection';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import GitHub from './components/sections/GitHub';
import HireMe from './components/sections/HireMe';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

// Konami Code Sequence: Up, Up, Down, Down, Left, Right, Left, Right, B, A
const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

function App() {
  const [loading, setLoading] = useState(true);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [termOpen, setTermOpen] = useState(false);
  const [konamiIdx, setKonamiIdx] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Konami Code Logic
      if (e.key.toLowerCase() === KONAMI_CODE[konamiIdx].toLowerCase() || e.key === KONAMI_CODE[konamiIdx]) {
        if (konamiIdx === KONAMI_CODE.length - 1) {
          alert('Initializing God Mode... You found the secret. Let\'s connect! 🚀');
          setKonamiIdx(0);
          setTermOpen(true); // Open terminal as reward
        } else {
          setKonamiIdx(prev => prev + 1);
        }
      } else {
        setKonamiIdx(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiIdx]);

  return (
    <div className="min-h-screen bg-bg text-text font-sans scroll-smooth selection:bg-accent/30 selection:text-white">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <Cursor />
          <CommandPalette isOpen={cmdOpen} setIsOpen={setCmdOpen} />
          <TerminalOS isOpen={termOpen} onClose={() => setTermOpen(false)} />
          <Navbar onOpenCmd={() => setCmdOpen(true)} />
          
          {/* Floating Terminal Toggle */}
          <button
            onClick={() => setTermOpen(true)}
            className="fixed bottom-6 left-6 z-50 p-4 bg-surface/80 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 hover:border-accent hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300 group"
            title="Open TerminalOS"
          >
            <TerminalIcon className="w-6 h-6 text-text2 group-hover:text-accent transition-colors" />
          </button>

          <main>
            <Hero />
            <About />
            <Projects />
            <AISection />
            <Skills />
            <Experience />
            <GitHub />
            <HireMe />
            <Contact />
          </main>
          
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
