
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900/10 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-sky-400 font-black uppercase tracking-[0.3em] text-[10px]">Partners</span>
          <h2 className="text-4xl md:text-6xl font-black mt-4 tracking-tight uppercase">VOICES OF <span className="gradient-text">TRACTION.</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden max-w-6xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-16 bg-neutral-950 relative group">
              <i className="fa-solid fa-quote-right text-6xl text-white/5 absolute top-12 right-12 group-hover:text-sky-500/10 transition-colors"></i>
              <p className="text-xl text-neutral-300 font-medium leading-relaxed mb-12 relative z-10 italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-5">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-sm border border-white/10 grayscale group-hover:grayscale-0 transition-all" />
                <div>
                  <h5 className="font-black text-white text-sm uppercase tracking-widest">{t.name}</h5>
                  <p className="text-[10px] text-sky-400 font-black uppercase tracking-[0.2em] mt-1">{t.role} @ {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
