
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    "500M+ VIEWS GENERATED", "2M+ SUBSCRIBERS GAINED", "$15M+ REVENUE FOR CLIENTS", 
    "72% AVERAGE RETENTION", "1500+ VIDEOS PRODUCED", "24H TURNAROUND"
  ];

  return (
    <div className="bg-white py-6 overflow-hidden border-y border-white/10">
      <div className="flex whitespace-nowrap animate-infinite-scroll">
        {[...stats, ...stats].map((stat, i) => (
          <span key={i} className="text-black font-black text-xs tracking-[0.3em] mx-12 uppercase">
            {stat}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Stats;
