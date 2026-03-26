import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TerminalOS = ({ isOpen, onClose }: TerminalProps) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ command: string; output: React.ReactNode }[]>([
    {
      command: 'init',
      output: (
        <div className="text-ai">
          VedanshOS v2.0.4 loaded.<br />
          Type <span className="text-accent">'help'</span> to see available commands.
        </div>
      )
    }
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let output: React.ReactNode = '';

    switch (trimmed) {
      case 'help':
        output = (
          <ul className="list-inside space-y-1 text-text2">
            <li><span className="text-accent">help</span>    - Show this message</li>
            <li><span className="text-accent">projects</span> - List flagship projects</li>
            <li><span className="text-accent">skills</span>   - List technical capabilities</li>
            <li><span className="text-accent">contact</span>  - Display contact info</li>
            <li><span className="text-accent">resume</span>   - Download / view resume</li>
            <li><span className="text-accent">clear</span>    - Clear terminal history</li>
          </ul>
        );
        break;
      case 'projects':
        output = (
          <div className="text-text2">
            [1] PurifAI - Advanced AI-powered data cleaning & synthetic data generation.<br/>
            [2] RBAC Dashboard - Secure role-based route management system.<br/>
            [3] MediMeet - Healthcare appointment & WebRTC platform.
          </div>
        );
        break;
      case 'skills':
        output = (
          <div className="text-text2 grid grid-cols-2 gap-2">
            <div><span className="text-ai">Frontend:</span> React, TypeScript, Tailwind, Framer Motion</div>
            <div><span className="text-ai">Backend:</span> Node.js, Express, Python, Flask</div>
            <div><span className="text-ai">AI/ML:</span> Pandas, Scikit-Learn, Prompt Engineering</div>
            <div><span className="text-ai">Database:</span> MongoDB, SQL</div>
          </div>
        );
        break;
      case 'contact':
        output = (
          <div className="text-text2">
            Email: <a href="mailto:hello@vedanshwagh.com" className="text-accent hover:underline">hello@vedanshwagh.com</a><br/>
            GitHub: <a href="https://github.com/Vedansh24" target="_blank" className="text-accent hover:underline">github.com/Vedansh24</a><br/>
            LinkedIn: <a href="https://linkedin.com/in/vedanshwagh" target="_blank" className="text-accent hover:underline">linkedin.com/in/vedanshwagh</a>
          </div>
        );
        break;
      case 'resume':
        output = <div className="text-text2">Available for internships and opportunities. <a href="javascript:void(0)" onClick={() => document.getElementById('hire-me')?.scrollIntoView()} className="text-accent underline">Redirecting to Hire Me section...</a></div>;
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case '':
        output = '';
        break;
      default:
        output = <div className="text-red-400">Command not found: {trimmed}. Type 'help' for available commands.</div>;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={`fixed z-[110] bg-[#0a0f1c]/95 border border-white/10 shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden font-mono text-sm transition-all duration-300 ${
            isMaximized ? 'inset-4 rounded-xl' : 'bottom-6 right-6 w-full max-w-lg h-[400px] rounded-xl'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5 select-none">
            <div className="flex items-center gap-2">
              <TerminalIcon size={16} className="text-text3" />
              <span className="text-text3 font-medium text-xs tracking-wider">vedansh@devos:~</span>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setIsMaximized(!isMaximized)} className="text-text3 hover:text-white transition-colors">
                {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
              </button>
              <button onClick={onClose} className="text-text3 hover:text-red-400 transition-colors">
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {history.map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center gap-2 text-text">
                  <span className="text-green-400">➜</span>
                  <span className="text-blue-400">~</span>
                  <span>{item.command}</span>
                </div>
                {item.output && <div className="ml-4">{item.output}</div>}
              </div>
            ))}
            
            {/* Input Line */}
            <div className="flex items-center gap-2 text-text">
              <span className="text-green-400">➜</span>
              <span className="text-blue-400">~</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleCommand(input);
                }}
                autoFocus
                className="flex-1 bg-transparent border-none outline-none text-text placeholder-white/20"
                spellCheck="false"
              />
            </div>
            <div ref={endRef} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalOS;
