
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-black tracking-tighter flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-sm">
                <span className="font-black">TG</span>
              </div>
              <span>TRACTION GRID</span>
            </div>
            <p className="text-neutral-500 max-w-sm mb-10 leading-relaxed font-medium text-sm uppercase tracking-wide">
              The algorithm-first agency for high-growth brands. Cinematic short and long-form content mastery since 2020.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-neutral-500 hover:text-sky-400 transition-all text-xl">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="#" className="text-neutral-500 hover:text-sky-400 transition-all text-xl">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className="text-neutral-500 hover:text-sky-400 transition-all text-xl">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-neutral-500 hover:text-sky-400 transition-all text-xl">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-black mb-8 tracking-[0.3em] uppercase text-[10px] text-sky-400">Capabilities</h5>
            <ul className="space-y-4 text-neutral-500 text-[10px] font-black uppercase tracking-widest">
              <li><a href="#services" className="hover:text-white transition-colors">Vertical Viral</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">YouTube Narrative</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Retention Audit</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Paid Social Video</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-black mb-8 tracking-[0.3em] uppercase text-[10px] text-sky-400">Direct</h5>
            <ul className="space-y-4 text-neutral-500 text-[10px] font-black uppercase tracking-widest">
              <li>grid@traction.agency</li>
              <li>+1 (555) 000-VIDS</li>
              <li>SOMA District</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-neutral-600">
          <p>© 2024 Traction Grid. Engineered for retention.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
