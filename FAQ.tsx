
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-neutral-950 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <span className="text-sky-400 font-black uppercase tracking-[0.3em] text-[10px]">Questions</span>
          <h2 className="text-4xl md:text-6xl font-black mt-4 uppercase tracking-tighter">STILL <span className="gradient-text">UNSURE?</span></h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-sm overflow-hidden bg-neutral-900/30">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-black text-sm uppercase tracking-widest">{faq.question}</span>
                <i className={`fa-solid ${openIndex === i ? 'fa-minus' : 'fa-plus'} text-sky-400 transition-transform`}></i>
              </button>
              {openIndex === i && (
                <div className="px-8 pb-8 text-neutral-500 text-xs font-medium uppercase tracking-widest leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
