
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-neutral-950/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-black tracking-tighter flex items-center gap-3">
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm">
            <span className="text-black font-black text-lg">TG</span>
          </div>
          <span className="hidden sm:inline">TRACTION GRID</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 font-bold text-[10px] tracking-[0.2em] uppercase">
          <a href="#work" className="hover:text-sky-400 transition-colors">Work</a>
          <a href="#services" className="hover:text-sky-400 transition-colors">Expertise</a>
          <a href="#process" className="hover:text-sky-400 transition-colors">Process</a>
          <a href="#contact" className="bg-white text-black px-6 py-2.5 rounded-sm hover:bg-sky-500 hover:text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0">START PROJECT</a>
        </div>

        <button className="md:hidden text-2xl">
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
