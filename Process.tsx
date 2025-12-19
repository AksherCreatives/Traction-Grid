
import React, { useState } from 'react';

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  const steps = [
    { 
      num: '01', 
      title: 'INTEL & BLUEPRINT', 
      status: 'PHASE READY',
      desc: 'Algorithm deep-dive. We extract your brand DNA and engineer a high-retention content architecture.',
      icon: 'fa-map-location-dot'
    },
    { 
      num: '02', 
      title: 'CORE PRODUCTION', 
      status: 'CONSTRUCTING',
      desc: 'Execution phase. We transform raw data into cinematic visual assets designed for maximum audience capture.',
      icon: 'fa-microchip'
    },
    { 
      num: '03', 
      title: 'ALGORITHMIC SCALE', 
      status: 'VICTORY STATE',
      desc: 'The win. Automated distribution and A/B optimization to dominate the grid and lock in exponential growth.',
      icon: 'fa-trophy'
    }
  ];

  return (
    <section id="process" className="py-32 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #0ea5e920 0%, transparent 70%)' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <span className="text-sky-400 font-black uppercase tracking-[0.4em] text-[10px] animate-pulse">System Initialization</span>
          <h2 className="text-5xl md:text-8xl font-black mt-4 uppercase tracking-tighter italic">THE <span className="gradient-text">CAMPAIGN</span> PATH.</h2>
        </div>

        {/* Gamified Mission Track */}
        <div className="relative max-w-6xl mx-auto px-4">
          
          {/* Central Track Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2 hidden md:block">
            {/* Moving Pulse */}
            <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-transparent via-sky-500 to-transparent animate-track-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {steps.map((step, i) => (
              <div 
                key={step.num}
                onMouseEnter={() => setActiveStep(i)}
                className={`relative flex flex-col items-center group cursor-pointer transition-all duration-500 ${activeStep === i ? 'scale-105' : 'scale-100 opacity-60'}`}
              >
                {/* Stage Node */}
                <div className="relative z-20 mb-12">
                  <div className={`w-24 h-24 rotate-45 border-2 flex items-center justify-center transition-all duration-500 bg-neutral-950 ${activeStep === i ? 'border-sky-400 shadow-[0_0_30px_rgba(14,165,233,0.3)]' : 'border-white/10'}`}>
                    <div className="-rotate-45 text-2xl text-white group-hover:text-sky-400 transition-colors">
                      <i className={`fa-solid ${step.icon}`}></i>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className={`absolute -top-4 -right-8 px-3 py-1 text-[8px] font-black tracking-widest uppercase transition-all duration-500 whitespace-nowrap ${activeStep === i ? 'bg-sky-500 text-black' : 'bg-neutral-800 text-neutral-500'}`}>
                    {step.status}
                  </div>

                  {/* Connecting Line Vertical for Mobile */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-16 bg-white/5 md:hidden"></div>
                </div>

                {/* Content Card */}
                <div className={`text-center transition-all duration-500 ${activeStep === i ? 'translate-y-0' : 'translate-y-4'}`}>
                  <span className="text-sky-400/50 font-black text-xs block mb-2 tracking-widest">STAGE {step.num}</span>
                  <h4 className="text-2xl font-black mb-6 tracking-tighter uppercase italic">{step.title}</h4>
                  <p className="text-neutral-500 text-[11px] font-black uppercase tracking-[0.2em] leading-relaxed max-w-[280px] mx-auto group-hover:text-neutral-300 transition-colors">
                    {step.desc}
                  </p>
                </div>

                {/* Highlight Underline */}
                <div className={`h-1 mt-10 transition-all duration-700 ease-out bg-sky-500 ${activeStep === i ? 'w-full' : 'w-0 opacity-0'}`}></div>
                
                {/* Corner Accents (Gaming Style) */}
                <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 transition-all duration-500 ${activeStep === i ? 'border-sky-400' : 'border-transparent'}`}></div>
                <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 transition-all duration-500 ${activeStep === i ? 'border-sky-400' : 'border-transparent'}`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="mt-40 max-w-4xl mx-auto">
          <div className="flex justify-between items-end mb-4">
             <div className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500">System Optimization Progress</div>
             <div className="text-sky-400 font-black italic">
               {activeStep === 0 ? '33%' : activeStep === 1 ? '66%' : activeStep === 2 ? '100%' : '0%'}
             </div>
          </div>
          <div className="h-1 w-full bg-white/5 relative overflow-hidden">
             <div 
               className="h-full bg-sky-500 transition-all duration-1000 ease-in-out relative"
               style={{ width: `${(( (activeStep ?? -1) + 1) / 3) * 100}%` }}
             >
               <div className="absolute top-0 right-0 w-2 h-full bg-white animate-pulse shadow-[0_0_10px_white]"></div>
             </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes track-pulse {
          0% { left: -20%; }
          100% { left: 120%; }
        }
        .animate-track-pulse {
          animation: track-pulse 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Process;
