import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Terminal, Shield, Zap } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const bootLogs = [
    'INIC: Xenon Biosystems Booting...',
    'SYS: Loading Direct-Link Drivers...',
    'NET: Connecting to Quantum AI Mesh...',
    'SEC: Cryptographic Handshakes Verified.',
    'BIO: Calibrating Myoelectric Sockets...',
    'NEUR: Stimulating Cortex Sync Channels...',
    'OPT: Adjusting Multi-Focus HUD...',
    'SYS: Apex Cybernetics Interface Online.'
  ];

  useEffect(() => {
    // Increment progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsFinished(true);
          return 100;
        }
        const step = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + step, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Add logs dynamically as progress increases
    const logIndex = Math.min(
      Math.floor((progress / 100) * bootLogs.length),
      bootLogs.length - 1
    );
    
    if (logs.length <= logIndex) {
      setLogs((prev) => [...prev, bootLogs[logIndex]]);
    }
  }, [progress]);

  useEffect(() => {
    if (isFinished) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [isFinished, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 bg-[#050816] z-50 flex flex-col items-center justify-center p-4 font-mono select-none"
    >
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7A00FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00F5FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-lg glass-panel p-6 rounded-lg border border-[#00F5FF]/30 relative shadow-2xl shadow-[#00F5FF]/5">
        {/* Decorative corner brackets */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00F5FF]" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00F5FF]" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00F5FF]" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00F5FF]" />

        <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#00F5FF] animate-pulse" />
            <span className="text-sm font-semibold tracking-wider text-white uppercase font-display">XENON_SYS_LOADER</span>
          </div>
          <span className="text-[#00FF9D] text-xs">ONLINE</span>
        </div>

        {/* Dynamic Diagnostics Log */}
        <div className="h-44 bg-black/40 rounded border border-white/5 p-4 overflow-y-auto mb-6 text-xs flex flex-col gap-1.5 scrollbar-thin">
          <AnimatePresence>
            {logs.map((log, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-start gap-1.5 ${
                  log.startsWith('BIO') || log.startsWith('NEUR')
                    ? 'text-[#7A00FF]'
                    : log.startsWith('SEC') || log.startsWith('ONLINE') || log.startsWith('SYS: Apex')
                    ? 'text-[#00FF9D]'
                    : 'text-[#00F5FF]'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>{log}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Diagnostic Stat Bars */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <Shield className="w-3.5 h-3.5 text-[#7A00FF]" />
            <span>BIOSEC: ENABLED</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/60 justify-end">
            <Zap className="w-3.5 h-3.5 text-[#00FF9D]" />
            <span>LINK_RATE: 600 GBPS</span>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div>
          <div className="flex justify-between items-center text-xs mb-2">
            <span className="text-white/40 uppercase">SYNAPSE INTEGRATION:</span>
            <span className="text-[#00F5FF] font-bold">{progress}%</span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-0.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full rounded-full bg-gradient-to-r from-[#7A00FF] via-[#00F5FF] to-[#00FF9D] shadow-[0_0_10px_rgba(0,245,255,0.5)]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
