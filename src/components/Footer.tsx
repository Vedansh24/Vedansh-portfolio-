import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-bg border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-text3 text-sm flex items-center justify-center gap-2">
          Designed & Built by <span className="text-white font-medium">Vedansh Wagh</span>
        </p>
        <p className="text-text3 text-xs mt-2 font-mono opacity-60">
          © {new Date().getFullYear()} — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
