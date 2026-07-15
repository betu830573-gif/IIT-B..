import React from 'react';
import { motion } from 'motion/react';
import { TIMELINE_DATA } from '../data';
import { CheckCircle2, PlayCircle, Calendar } from 'lucide-react';

export default function TimelineSection() {
  return (
    <div className="relative">
      {/* Dynamic connecting vertical timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00F5FF] via-[#7A00FF] to-[#00FF9D] transform md:-translate-x-1/2 opacity-50 hidden md:block" />

      <div className="space-y-12 relative">
        {TIMELINE_DATA.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-stretch md:justify-between relative ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline center node indicator */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#050816] border-2 border-dashed border-[#00F5FF] transform -translate-y-1/2 top-4 md:top-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center shadow-[0_0_10px_rgba(0,245,255,0.8)]">
                <div className={`w-1.5 h-1.5 rounded-full ${
                  item.status === 'completed' 
                    ? 'bg-[#00FF9D]' 
                    : item.status === 'in-progress' 
                    ? 'bg-[#00F5FF]' 
                    : 'bg-[#7A00FF]'
                }`} />
              </div>

              {/* Grid content blocks */}
              <div className="w-full md:w-[45%] pl-10 md:pl-0">
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`p-6 rounded-xl border glass-panel relative overflow-hidden transition-all duration-300 ${
                    item.status === 'completed'
                      ? 'border-[#00FF9D]/25 bg-[#00FF9D]/[0.01]'
                      : item.status === 'in-progress'
                      ? 'border-[#00F5FF]/25 bg-[#00F5FF]/[0.01]'
                      : 'border-[#7A00FF]/25 bg-[#7A00FF]/[0.01]'
                  }`}
                >
                  {/* Neon border glow line */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] ${
                    item.status === 'completed'
                      ? 'bg-gradient-to-r from-[#00FF9D] to-transparent'
                      : item.status === 'in-progress'
                      ? 'bg-gradient-to-r from-[#00F5FF] to-transparent'
                      : 'bg-gradient-to-r from-[#7A00FF] to-transparent'
                  }`} />

                  {/* Year Tag & Status */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-0.5 rounded text-xs font-mono font-bold tracking-wider flex items-center gap-1.5 ${
                      item.status === 'completed'
                        ? 'bg-[#00FF9D]/15 text-[#00FF9D]'
                        : item.status === 'in-progress'
                        ? 'bg-[#00F5FF]/15 text-[#00F5FF]'
                        : 'bg-[#7A00FF]/15 text-[#7A00FF]'
                    }`}>
                      <Calendar className="w-3.5 h-3.5" />
                      {item.year}
                    </span>

                    <span className="text-[10px] font-mono text-white/40 uppercase">
                      {item.status === 'completed' && 'INTEGRATED'}
                      {item.status === 'in-progress' && 'CALIBRATING'}
                      {item.status === 'planned' && 'PLANNED LINK'}
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-bold text-white tracking-wide mb-1">
                    {item.title}
                  </h4>
                  <span className="text-xs font-mono text-white/50 block mb-3 uppercase">
                    {item.phase}
                  </span>

                  <p className="text-sm text-white/70 font-sans leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Phase Details Check-list */}
                  <div className="border-t border-white/5 pt-3 space-y-1.5">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/60 font-mono">
                        {item.status === 'completed' ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF9D] shrink-0" />
                        ) : (
                          <PlayCircle className="w-3.5 h-3.5 text-[#00F5FF] shrink-0 animate-pulse" />
                        )}
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Empty placeholder spacer for alignment on desktop */}
              <div className="hidden md:block w-[45%]" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
