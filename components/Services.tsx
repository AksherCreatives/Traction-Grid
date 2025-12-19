
import React, { useState, useRef } from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-32 bg-neutral-950 relative overflow-hidden perspective-container"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <span className="text-sky-400 font-black uppercase tracking-[0.3em] text-[10px]">Expertise</span>
          <h2 className="text-4xl md:text-8xl font-black mt-4 mb-8 tracking-tighter uppercase italic leading-none">
            UNFAIR <span className="gradient-text">ADVANTAGE.</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base font-medium leading-relaxed uppercase tracking-widest max-w-xl mx-auto">
            Engineered systems designed to dominate the organic grid and build untouchable brand equity through retention psychology.
          </p>
        </div>

        {/* Sliding Mouse Reactive Stack */}
        <div className="relative h-[600px] flex items-center justify-center">
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
            {SERVICES.map((service, i) => {
              const total = SERVICES.length;
              const mid = (total - 1) / 2;
              const offset = i - mid;
              
              // Spread distance increases when hovered
              const spreadX = isHovered ? (offset * 320) : (offset * 40);
              // Slight vertical stagger
              const spreadY = isHovered ? (Math.abs(offset) * 20) : (offset * 10);
              // Rotation fanning effect
              const rotation = isHovered ? (offset * 5) : (offset * 2);
              
              // Mouse reactive tilt for the entire stack
              const mouseTiltX = (mousePos.y - 0.5) * -15;
              const mouseTiltY = (mousePos.x - 0.5) * 15;

              return (
                <div 
                  key={service.id}
                  className="absolute w-[300px] md:w-[350px] aspect-[3/4] transition-all duration-700 ease-out group cursor-crosshair"
                  style={{
                    transform: `
                      translateX(${spreadX}px) 
                      translateY(${spreadY}px) 
                      rotateZ(${rotation}deg) 
                      rotateX(${mouseTiltX}deg) 
                      rotateY(${mouseTiltY}deg)
                      scale(${isHovered ? 1 : 1 - (Math.abs(offset) * 0.05)})
                    `,
                    zIndex: isHovered && Math.abs(mousePos.x - (i/total)) < 0.1 ? 50 : 10 + (total - Math.abs(offset)),
                  }}
                >
                  <div className="w-full h-full bg-neutral-900 border border-white/10 p-10 flex flex-col justify-between relative overflow-hidden rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] group-hover:border-sky-500/50 transition-colors">
                    {/* Background Detail */}
                    <div className="absolute top-0 right-0 p-8 text-white/5 font-black text-7xl italic select-none pointer-events-none uppercase">
                      0{i + 1}
                    </div>
                    
                    <div>
                      <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center mb-10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                        <i className={`fa-solid ${service.icon} text-2xl`}></i>
                      </div>
                      <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter italic leading-none">{service.title}</h3>
                      <p className="text-neutral-500 text-[10px] leading-relaxed font-black uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] font-black tracking-widest uppercase text-neutral-600 group-hover:text-sky-400 transition-colors">Capability 0{i + 1}</span>
                      <div className="w-2 h-2 rounded-full bg-sky-500/20 group-hover:bg-sky-400 group-hover:animate-ping"></div>
                    </div>

                    {/* Scanline effect inside card */}
                    <div className="absolute inset-0 video-scanline opacity-10 group-hover:opacity-20 pointer-events-none"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interaction Message */}
        <div className={`text-center mt-20 transition-all duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <div className="inline-flex items-center gap-4 px-6 py-2 border border-white/5 rounded-full bg-white/5 backdrop-blur-sm">
             <i className="fa-solid fa-arrow-pointer text-sky-400 animate-bounce"></i>
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">Hover to expand our stack</span>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
         <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at center, #0ea5e910 0%, transparent 70%)' }}></div>
      </div>
    </section>
  );
};

export default Services;
