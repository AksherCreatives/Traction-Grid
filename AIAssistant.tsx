
import React, { useState, useRef, useEffect } from 'react';
import { getStrategistResponse } from '../services/geminiService';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "I'm the Traction Grid Strategist. How can I assist with your video content goals today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getStrategistResponse(userMsg, messages);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-96 glass-card border border-white/10 rounded-sm shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300">
          <div className="p-4 bg-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-black flex items-center justify-center text-white">
                <i className="fa-solid fa-bolt-lightning text-xs"></i>
              </div>
              <span className="font-black text-black text-xs uppercase tracking-widest">TG Strategist</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black/50 hover:text-black">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4 bg-black/40">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-sm text-sm ${m.role === 'user' ? 'bg-sky-600 text-white' : 'bg-neutral-800 text-neutral-200'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-neutral-800 p-3 rounded-sm flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-neutral-900 border-t border-white/5 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about retention..."
              className="flex-1 bg-neutral-800 border-none rounded-sm px-4 py-2 text-xs focus:ring-1 focus:ring-sky-500 outline-none"
            />
            <button 
              onClick={handleSend}
              className="w-10 h-10 bg-white text-black rounded-sm flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors"
            >
              <i className="fa-solid fa-paper-plane text-xs"></i>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-white text-black rounded-sm shadow-xl flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all hover:scale-105 active:scale-95 group relative"
        >
          <i className="fa-solid fa-sparkles text-xl"></i>
          <span className="absolute right-20 bg-neutral-900 border border-white/10 px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Content Audit AI
          </span>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
