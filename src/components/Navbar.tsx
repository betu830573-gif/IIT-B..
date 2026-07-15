import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Menu, X, Check, MousePointerClick } from 'lucide-react';

interface NavbarProps {
  customCursorEnabled: boolean;
  setCustomCursorEnabled: (val: boolean) => void;
}

export default function Navbar({ customCursorEnabled, setCustomCursorEnabled }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { label: 'About', targetId: 'about-section' },
    { label: 'Features', targetId: 'features-section' },
    { label: 'Stats', targetId: 'stats-section' },
    { label: 'Gallery', targetId: 'gallery-section' },
    { label: 'Evolution', targetId: 'timeline-section' },
    { label: 'Testimonials', targetId: 'testimonials-section' },
    { label: 'Pricing', targetId: 'pricing-section' },
    { label: 'FAQ', targetId: 'faq-section' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background dark fill trigger
      setScrolled(window.scrollY > 40);

      // Scroll progress percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-mono ${
        scrolled
          ? 'bg-[#050816]/90 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Top Scroll Progress Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5">
        <motion.div
          style={{ width: `${scrollProgress}%` }}
          className="h-full bg-gradient-to-r from-[#7A00FF] via-[#00F5FF] to-[#00FF9D]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo Branding */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-none interactive-hover select-none group"
        >
          <div className="w-9 h-9 border-2 border-[#00F5FF] flex items-center justify-center rotate-45 transition-all group-hover:border-[#00FF9D]">
            <div className="w-3.5 h-3.5 bg-[#7A00FF] -rotate-45 group-hover:bg-[#00FF9D] transition-all"></div>
          </div>
          <div>
            <span className="font-display font-black text-lg tracking-tighter text-white">
              XENON.OS
            </span>
            <span className="text-[8px] font-mono block text-[#00FF9D] tracking-widest leading-none uppercase">
              APEX_LINK
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 7).map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.targetId)}
              className="text-xs uppercase font-semibold tracking-wider text-white/60 hover:text-[#00F5FF] transition-colors duration-200 cursor-none interactive-hover"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('pricing-section')}
            className="text-xs uppercase px-5 py-2 border border-[#7A00FF] rounded-full text-white hover:bg-[#7A00FF]/20 transition-all cursor-none interactive-hover font-mono"
          >
            Access Console
          </button>
        </div>

        {/* Action Widgets */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Custom Cursor Toggle Button */}
          <button
            onClick={() => setCustomCursorEnabled(!customCursorEnabled)}
            className="flex items-center gap-1.5 text-[10px] uppercase border border-white/10 px-2.5 py-1.5 rounded-md hover:border-[#00F5FF]/30 hover:bg-white/5 transition-all cursor-none interactive-hover text-white/60"
            title="Toggle interactive cursor style"
          >
            <MousePointerClick className="w-3.5 h-3.5 text-[#00F5FF]" />
            <span>Cursor: </span>
            <span className={customCursorEnabled ? 'text-[#00FF9D] font-bold' : 'text-white/40'}>
              {customCursorEnabled ? 'CYBER' : 'STD'}
            </span>
          </button>

          {/* Secure Sync Node indicator */}
          <div className="flex items-center gap-1.5 bg-[#00FF9D]/10 px-3 py-1.5 rounded-full border border-[#00FF9D]/25">
            <span className="w-1.5 h-1.5 bg-[#00FF9D] rounded-full animate-ping" />
            <span className="text-[10px] text-[#00FF9D] font-bold uppercase tracking-wider">
              LINK: SECURE
            </span>
          </div>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Cursor Toggle even on tablet */}
          <button
            onClick={() => setCustomCursorEnabled(!customCursorEnabled)}
            className="flex items-center gap-1 text-[10px] uppercase border border-white/10 px-2 py-1 rounded hover:border-[#00F5FF]/30 text-white/60"
          >
            <span className={customCursorEnabled ? 'text-[#00FF9D]' : 'text-white/40'}>CYBER</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 border border-white/10 rounded flex items-center justify-center text-white hover:border-[#00F5FF]/40 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-[#050816]/95 border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4 font-mono text-center">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollToSection(link.targetId)}
                  className="text-sm uppercase font-bold text-white/80 hover:text-[#00F5FF] py-2 transition-colors border-b border-white/5"
                >
                  {link.label}
                </motion.button>
              ))}

              <div className="flex flex-col items-center gap-4 mt-4">
                <div className="flex items-center gap-2 bg-[#00FF9D]/10 px-4 py-2 rounded-full border border-[#00FF9D]/20">
                  <span className="w-2 h-2 bg-[#00FF9D] rounded-full animate-pulse" />
                  <span className="text-xs text-[#00FF9D] font-bold uppercase tracking-wider">
                    LINK: SECURE
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
