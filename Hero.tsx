
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const libraryThumbnails = [
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400',
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=400',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400',
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400',
    'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=400',
    'https://images.unsplash.com/photo-1536240478700-b8673f6e9279?q=80&w=400',
  ];

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center overflow-hidden bg-neutral-950 perspective-container">
      {/* LEFT CONTENT AREA */}
      <div className="relative z-20 w-full md:w-[60%] px-6 md:pl-24 pt-32 pb-20 flex flex-col justify-center items-start text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-black tracking-[0.2em] text-sky-400 border border-sky-400/20 rounded-full bg-sky-400/5 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          PREMIUM VIDEO INFRASTRUCTURE
        </div>
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black mb-10 leading-[0.85] tracking-tighter uppercase italic">
          THE <span className="gradient-text">GRID</span> FOR <br/>HIGH-GROWTH.
        </h1>
        
        <p className="text-neutral-400 text-lg md:text-xl max-w-xl mb-12 font-medium leading-relaxed uppercase tracking-tight">
          Algorithm-first video strategy. We engineered the content systems that scale views, retention, and enterprise value.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto">
          <a href="#contact" className="w-full sm:w-auto px-12 py-6 bg-white text-black rounded-full font-black text-sm tracking-widest hover:bg-sky-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 uppercase shadow-2xl shadow-white/5">
            Apply to scale
          </a>
          <a href="#work" className="w-full sm:w-auto px-12 py-6 glass-card rounded-full text-white font-black text-sm tracking-widest hover:bg-white/5 transition-all transform hover:scale-105 active:scale-95 border border-white/10 uppercase">
            Case Studies
          </a>
        </div>

        <div className="mt-20 flex gap-8 text-neutral-500 text-[10px] font-black uppercase tracking-[0.2em]">
          <span>Trusted by top 1% creators</span>
          <span className="text-white/20">|</span>
          <span>500M+ Views Generated</span>
        </div>
      </div>

      {/* RIGHT SLIDING SHOWCASE (100% OPACITY + REVERSED TILT) */}
      <div className="hidden md:flex absolute right-0 top-0 w-[45%] h-full z-10 items-center justify-center overflow-hidden">
        <div 
          className="flex gap-6 h-[160%] py-20 transition-transform duration-500 ease-out"
          style={{ 
            // Reversed Tilt: rotateZ is now positive 12deg
            transform: `rotateZ(12deg) rotateY(${mousePos.x * -20}deg) rotateX(${mousePos.y * 20}deg) scale(1.15)` 
          }}
        >
          {/* Vertical Strip 1 */}
          <div className="flex flex-col gap-6 animate-vertical-slide-up mt-[-10%]">
            {[...libraryThumbnails, ...libraryThumbnails].map((img, i) => (
              <div key={`v1-${i}`} className="w-72 aspect-[9/16] bg-neutral-900 border border-white/10 rounded-sm overflow-hidden flex-shrink-0 relative group shadow-2xl shadow-black/50">
                <img src={img} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 scale-110" alt="Work item" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute inset-0 video-scanline opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>

          {/* Vertical Strip 2 */}
          <div className="flex flex-col gap-6 animate-vertical-slide-down">
            {[...libraryThumbnails, ...libraryThumbnails].reverse().map((img, i) => (
              <div key={`v2-${i}`} className="w-72 aspect-[9/16] bg-neutral-900 border border-white/10 rounded-sm overflow-hidden flex-shrink-0 relative group shadow-2xl shadow-black/50">
                <img src={img} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 scale-110" alt="Work item" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute inset-0 video-scanline opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Shadow Overlay to blend with the text area - adjusted for reversed tilt */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-transparent z-20"></div>
        {/* Top/Bottom Fade for infinite look */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-neutral-950 to-transparent z-20"></div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent z-20"></div>
      </div>

      <style>{`
        @keyframes vertical-slide-up {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes vertical-slide-down {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
        .animate-vertical-slide-up {
          animation: vertical-slide-up 70s linear infinite;
        }
        .animate-vertical-slide-down {
          animation: vertical-slide-down 70s linear infinite;
        }
      `}</style>
      
      {/* Background Grid for text area */}
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
    </section>
  );
};

export default Hero;
