
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="work" className="py-32 bg-neutral-950 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-xl">
            <span className="text-sky-400 font-black uppercase tracking-[0.3em] text-[10px]">Proof of Concept</span>
            <h2 className="text-5xl md:text-8xl font-black mt-4 tracking-tight uppercase italic leading-none">BEYOND THE <span className="gradient-text">VIEW.</span></h2>
          </div>
          <p className="text-neutral-500 max-w-sm font-medium leading-relaxed uppercase tracking-widest text-[10px]">
            Scroll retention. Viewer psychology. Conversion metrics. Our stacked library represents millions of hours of watch time engineered for results.
          </p>
        </div>

        {/* Improved Stacked Videos Showcase */}
        <div 
          className="relative min-h-[700px] flex items-center justify-center perspective-container"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="relative w-full max-w-xl h-[450px]">
            {PROJECTS.map((project, i) => {
              // Create a tighter stack by default, and a wider fan on hover
              const total = PROJECTS.length;
              const mid = (total - 1) / 2;
              
              const rotation = hovered 
                ? (i - mid) * 12 
                : (i - mid) * 4;
                
              const translateX = hovered 
                ? (i - mid) * 180 
                : (i - mid) * 15;
                
              const translateY = hovered 
                ? Math.abs(i - mid) * 30 
                : i * -8;
                
              const zIndex = total - i;
              const scale = hovered ? 1 : 1 - (i * 0.04);

              return (
                <div 
                  key={project.id}
                  className="absolute inset-0 video-stack-card group cursor-pointer"
                  style={{
                    zIndex,
                    transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg) scale(${scale})`,
                    opacity: hovered ? 1 : 1 - (i * 0.15)
                  }}
                >
                  <div className="w-full h-full relative rounded-sm overflow-hidden bg-neutral-900 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 video-scanline opacity-40"></div>
                    
                    {/* Hover Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sky-400 font-black text-[10px] tracking-widest uppercase mb-2">{project.category}</span>
                      <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 italic leading-none">{project.title}</h3>
                      <div className="flex items-center justify-between border-t border-white/20 pt-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                            <i className="fa-solid fa-play text-white text-[10px]"></i>
                          </div>
                          <span className="text-white font-black text-sm uppercase tracking-widest">{project.stats}</span>
                        </div>
                        <i className="fa-solid fa-arrow-up-right text-sky-400 text-sm"></i>
                      </div>
                    </div>

                    {/* Stack Label */}
                    {!hovered && i === 0 && (
                      <div className="absolute top-10 left-10 z-20">
                         <div className="bg-sky-500 text-black px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] inline-block shadow-lg">
                          ACTIVE CASE STUDY
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Interaction Guide */}
          <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-500 ${hovered ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
               <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-neutral-500">Discover Our Library</span>
               <div className="w-px h-16 bg-gradient-to-b from-sky-500/50 to-transparent"></div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
           <div className="group">
             <div className="text-5xl font-black mb-2 italic tracking-tighter uppercase group-hover:text-sky-400 transition-colors">98.4%</div>
             <div className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Retention Benchmark</div>
           </div>
           <div className="group">
             <div className="text-5xl font-black mb-2 italic tracking-tighter uppercase group-hover:text-sky-400 transition-colors">120M+</div>
             <div className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Impressions / Mo</div>
           </div>
           <div className="group">
             <div className="text-5xl font-black mb-2 italic tracking-tighter uppercase group-hover:text-sky-400 transition-colors">24/7</div>
             <div className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Content Engine</div>
           </div>
           <div className="group">
             <div className="text-5xl font-black mb-2 italic tracking-tighter uppercase group-hover:text-sky-400 transition-colors">$0</div>
             <div className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Ad Spend Required</div>
           </div>
        </div>

        <div className="mt-32 text-center">
          <a href="#contact" className="inline-block px-16 py-7 border border-white/10 rounded-sm font-black text-[10px] tracking-[0.4em] hover:bg-white hover:text-black transition-all uppercase italic">
            Access Private Portfolio Library
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
