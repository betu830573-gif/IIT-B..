import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

interface AccordionProps {
  items: FAQItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`rounded-xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'border-[#00F5FF]/40 bg-gradient-to-r from-[#00F5FF]/5 via-transparent to-transparent shadow-[0_0_15px_rgba(0,245,255,0.05)]'
                : 'border-white/5 bg-white/[0.01] hover:border-white/10'
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full text-left p-5 flex items-center justify-between gap-4 font-sans select-none cursor-none interactive-hover"
            >
              <span className={`font-medium tracking-wide text-sm md:text-base ${
                isOpen ? 'text-[#00F5FF] text-glow-cyan font-semibold' : 'text-white'
              }`}>
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className={`w-7 h-7 rounded-full flex items-center justify-center border shrink-0 ${
                  isOpen ? 'border-[#00F5FF]/30 text-[#00F5FF] bg-[#00F5FF]/10' : 'border-white/10 text-white/50'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="p-5 pt-0 border-t border-white/5 text-sm text-white/70 leading-relaxed font-sans">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
