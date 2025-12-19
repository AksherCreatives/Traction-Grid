
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 bg-sky-500/5 blur-[120px] pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto border border-white/10 p-16 md:p-24 rounded-sm bg-neutral-900/50 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-sky-500"></div>
          
          <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
            SCALE TO <span className="gradient-text">MILLIONS.</span>
          </h2>
          <p className="text-lg text-neutral-400 mb-12 max-w-xl mx-auto font-medium uppercase tracking-wide">
            Stop guessing the algorithm. Start building a content engine that actually works.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-5 bg-white text-black rounded-sm font-black text-xs tracking-[0.2em] hover:bg-sky-500 hover:text-white transition-all transform hover:-translate-y-1 uppercase">
              Schedule Audit
            </button>
            <button className="px-12 py-5 border border-white/20 rounded-sm text-white font-black text-xs tracking-[0.2em] hover:bg-white/10 transition-all transform hover:-translate-y-1 uppercase">
              Start Project
            </button>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-10 text-neutral-500">
             <div className="flex items-center gap-3">
               <i className="fa-solid fa-check text-sky-400"></i>
               <span className="text-[10px] font-black uppercase tracking-widest">Growth Guarantee</span>
             </div>
             <div className="flex items-center gap-3">
               <i className="fa-solid fa-check text-sky-400"></i>
               <span className="text-[10px] font-black uppercase tracking-widest">Full IP Ownership</span>
             </div>
             <div className="flex items-center gap-3">
               <i className="fa-solid fa-check text-sky-400"></i>
               <span className="text-[10px] font-black uppercase tracking-widest">24h Turnaround</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
