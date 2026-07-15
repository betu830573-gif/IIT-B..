import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, Eye, Shield, Zap, Check, Star, ArrowUp, Mail, 
  Github, Twitter, MessageSquare, Cpu, ArrowRight, ChevronRight, 
  ShieldCheck, Activity, Compass 
} from 'lucide-react';

import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import PricingCalculator from './components/PricingCalculator';
import StatCounter from './components/StatCounter';
import TimelineSection from './components/TimelineSection';
import Accordion from './components/Accordion';

import { 
  FEATURES_DATA, STATS_DATA, GALLERY_DATA, 
  TESTIMONIALS_DATA, PRICING_DATA, FAQS_DATA, HERO_IMAGE 
} from './data';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [customCursorEnabled, setCustomCursorEnabled] = useState(true);
  const [typedHeadline, setTypedHeadline] = useState('');
  const [email, setEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const fullHeadline = 'BECOME MORE THAN HUMAN';

  // Symmetrical scroll listener to show "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple, elegant typing effect for the hero headline
  useEffect(() => {
    if (loading) return;

    let index = 0;
    const interval = setInterval(() => {
      setTypedHeadline((prev) => prev + fullHeadline.charAt(index));
      index++;
      if (index >= fullHeadline.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [loading]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setNewsletterSubscribed(true);
      setEmail('');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const renderIcon = (category: string) => {
    switch (category) {
      case 'neural':
        return <Brain className="w-6 h-6 text-[#7A00FF]" />;
      case 'vision':
        return <Eye className="w-6 h-6 text-[#00F5FF]" />;
      case 'strength':
        return <Shield className="w-6 h-6 text-[#00FF9D]" />;
      case 'quantum':
        return <Zap className="w-6 h-6 text-[#00F5FF]" />;
      default:
        return <Cpu className="w-6 h-6 text-white" />;
    }
  };

  const getAccentColorClass = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'border-[#00F5FF]/20 hover:border-[#00F5FF]/60 text-[#00F5FF] shadow-[#00F5FF]/5';
      case 'purple':
        return 'border-[#7A00FF]/20 hover:border-[#7A00FF]/60 text-[#7A00FF] shadow-[#7A00FF]/5';
      case 'green':
        return 'border-[#00FF9D]/20 hover:border-[#00FF9D]/60 text-[#00FF9D] shadow-[#00FF9D]/5';
      default:
        return 'border-white/10 hover:border-white/30 text-white';
    }
  };

  return (
    <div className={`min-h-screen bg-[#050816] text-white relative font-sans overflow-x-hidden ${customCursorEnabled ? 'custom-cursor-active' : ''}`}>
      
      {/* Loading Sequence */}
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Custom Cursor Overlay */}
          {customCursorEnabled && <CustomCursor />}

          {/* Interactive Particle Backdrop */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <ParticleBackground />
          </div>

          {/* Symmetrical Floating Glowing Elements */}
          <div className="absolute top-[15%] right-[10%] w-96 h-96 bg-[#00F5FF]/5 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
          <div className="absolute top-[40%] left-[5%] w-[450px] h-[450px] bg-[#7A00FF]/5 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
          <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-[#00FF9D]/5 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

          {/* Header & Navbar */}
          <Navbar 
            customCursorEnabled={customCursorEnabled} 
            setCustomCursorEnabled={setCustomCursorEnabled} 
          />

          {/* --- HERO SECTION --- */}
          <section id="hero-section" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              {/* Top Tech Pill */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md select-none"
              >
                <span className="w-2 h-2 bg-[#00F5FF] rounded-full animate-ping" />
                <span className="text-xs font-mono tracking-widest text-[#00F5FF] uppercase font-bold">
                  APEX CYBERNETICS SYNERGY : ACTIVE
                </span>
              </motion.div>

              {/* Dynamic Large Headline */}
              <div className="space-y-4">
                <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase select-none leading-none">
                  <span className="text-white block">{typedHeadline}</span>
                  <span className="text-transparent text-stroke-cyan text-glow-cyan block mt-2">OS INTERACTION</span>
                  <span className="text-[#00F5FF] cursor-blink"></span>
                </h1>
                
                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                  className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-sans leading-relaxed"
                >
                  Experience the next generation of AI-powered cybernetic evolution. Direct-link neural interfaces, augmented bionics, and quantum processing elements built for transhumanity.
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              >
                <button
                  onClick={() => scrollToSection('about-section')}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#7A00FF] via-[#00F5FF] to-[#00FF9D] hover:scale-105 active:scale-95 text-white font-display text-xs font-black uppercase tracking-widest py-4 px-8 rounded shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all duration-300 cursor-none interactive-hover"
                >
                  Explore Modules
                </button>
                <button
                  onClick={() => scrollToSection('pricing-section')}
                  className="w-full sm:w-auto border-2 border-[#00F5FF] hover:border-[#00FF9D] bg-black/40 hover:bg-[#00F5FF]/10 text-white font-display text-xs font-black uppercase tracking-widest py-4 px-8 rounded transition-all duration-300 cursor-none interactive-hover flex items-center justify-center gap-2"
                >
                  <span>Join the Future</span>
                  <ArrowRight className="w-4 h-4 text-[#00F5FF]" />
                </button>
              </motion.div>
            </div>

            {/* Bottom Anchor Prompt */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 font-mono text-[10px] select-none animate-bounce">
              <span>INITIALIZE SCROLL</span>
              <div className="w-[1px] h-8 bg-gradient-to-b from-[#00F5FF] to-transparent" />
            </div>
          </section>

          {/* --- ABOUT SECTION --- */}
          <section id="about-section" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10 border-t border-white/5 bg-cyber-dots">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Descriptive info */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-3">
                  <span className="text-xs font-mono text-[#00F5FF] uppercase tracking-widest font-bold block">
                    BIOLOGICAL ADVANCEMENT OVERVIEW
                  </span>
                  <h2 className="font-display text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
                    FUSING BIOLOGY WITH <br className="hidden md:block"/>
                    <span className="text-transparent text-stroke-cyan text-glow-cyan">
                      QUANTUM NETWORKS
                    </span>
                  </h2>
                </div>

                <p className="text-sm md:text-base text-white/70 font-sans leading-relaxed">
                  For centuries, humanity has designed machines to serve outward purposes. Today, we turn that computing force inward. Our micro-synaptic implants allow direct semantic integration, letting you communicate with machines at thoughts-per-second velocity. Expand your visual grid, secure your organic core, and unlock physical force benchmarks once deemed impossible.
                </p>

                {/* Technical Pillar Mini-Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div className="p-5 rounded-lg border border-white/5 bg-white/[0.01] hover:border-[#00F5FF]/20 transition-all">
                    <Brain className="w-5 h-5 text-[#7A00FF] mb-2 animate-float" />
                    <span className="text-sm font-semibold text-white block mb-1">Cortex Synapses</span>
                    <p className="text-xs text-white/50 leading-relaxed font-sans">
                      Micro-meshes aligning to neurons to map memory files with absolute parity.
                    </p>
                  </div>
                  <div className="p-5 rounded-lg border border-white/5 bg-white/[0.01] hover:border-[#00FF9D]/20 transition-all">
                    <ShieldCheck className="w-5 h-5 text-[#00FF9D] mb-2 animate-float" style={{ animationDelay: '2s' }} />
                    <span className="text-sm font-semibold text-white block mb-1">Titanium Framework</span>
                    <p className="text-xs text-white/50 leading-relaxed font-sans">
                      Lightweight alloy supports that shield structural joins and absorb kinetic shocks.
                    </p>
                  </div>
                  <div className="p-5 rounded-lg border border-white/5 bg-white/[0.01] hover:border-[#00F5FF]/20 transition-all">
                    <Eye className="w-5 h-5 text-[#00F5FF] mb-2 animate-float" style={{ animationDelay: '4s' }} />
                    <span className="text-sm font-semibold text-white block mb-1">Ocular Overlays</span>
                    <p className="text-xs text-white/50 leading-relaxed font-sans">
                      Live semantic feeds that parse environments across thermal spectrums.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Premium Cyber Portrait */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-[#00F5FF]/30 p-2 bg-gradient-to-br from-[#00F5FF]/10 via-transparent to-[#7A00FF]/10 group shadow-2xl">
                  {/* Glowing bracket lines */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00F5FF]" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00F5FF]" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00F5FF]" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00F5FF]" />

                  {/* Real Generated Hero Asset Image */}
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img
                      src={HERO_IMAGE}
                      alt="Cyborg evolution portrait representation"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Live Tech Overlay stats */}
                    <div className="absolute bottom-4 left-4 right-4 font-mono text-[9px] text-[#00FF9D]/80 flex justify-between items-center bg-black/60 backdrop-blur-sm p-2 rounded border border-[#00FF9D]/20">
                      <span>CALIBRATION: ONLINE</span>
                      <span>SYNERGY: 99.85%</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* --- FEATURES SECTION --- */}
          <section id="features-section" className="py-24 px-4 md:px-8 bg-black/30 relative z-10 border-t border-b border-white/5 bg-cyber-dots">
            <div className="max-w-7xl mx-auto space-y-16">
              
              <div className="text-center space-y-3">
                <span className="text-xs font-mono text-[#7A00FF] uppercase tracking-widest font-bold block">
                  COGNITIVE AND PHYSICAL REPAIRS
                </span>
                <h2 className="font-display text-4xl md:text-6xl font-black text-transparent text-stroke-purple uppercase tracking-tighter leading-none">
                  APEX UPGRADE MODULES
                </h2>
                <div className="w-24 h-[3px] bg-gradient-to-r from-[#7A00FF] to-[#00F5FF] mx-auto" />
              </div>

              {/* Grid with custom image cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {FEATURES_DATA.map((feat) => (
                  <motion.div
                    key={feat.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className="group rounded-xl overflow-hidden border border-white/5 bg-white/[0.01] hover:border-[#00F5FF]/30 transition-all flex flex-col justify-between"
                  >
                    {/* Card Image Area with Overlay */}
                    <div className="relative h-48 overflow-hidden bg-black">
                      <img
                        src={feat.imageUrl}
                        alt={feat.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                      
                      {/* Category Floating Icon Badge */}
                      <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg">
                        {renderIcon(feat.category)}
                      </div>
                    </div>

                    {/* Card Info Area */}
                    <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="font-display text-lg font-bold text-white group-hover:text-[#00F5FF] transition-colors">
                          {feat.title}
                        </h3>
                        <p className="text-xs text-white/60 font-sans leading-relaxed">
                          {feat.description}
                        </p>
                      </div>

                      {/* Diagnostic Specs Area on hover */}
                      <div className="border-t border-white/5 pt-3 space-y-1.5 font-mono text-[10px] text-white/40">
                        {feat.specs.map((spec, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 bg-[#00FF9D] rounded-full" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>

          {/* --- STATISTICS SECTION --- */}
          <section id="stats-section" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
            <div className="glass-panel rounded-xl border border-white/5 py-12 px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative shadow-xl overflow-hidden">
              
              {/* Symmetrical glowing backdrop */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00F5FF]/5 rounded-full blur-[90px] pointer-events-none" />

              {STATS_DATA.map((stat) => (
                <div key={stat.id} className="space-y-2 relative z-10 select-none">
                  <StatCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    decimals={stat.decimals} 
                  />
                  <div className="text-xs uppercase font-mono tracking-widest text-[#00FF9D]/80 font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- GALLERY SECTION --- */}
          <section id="gallery-section" className="py-24 px-4 md:px-8 bg-black/20 relative z-10 border-t border-white/5 bg-cyber-dots">
            <div className="max-w-7xl mx-auto space-y-16">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-3 max-w-xl">
                  <span className="text-xs font-mono text-[#00FF9D] uppercase tracking-widest font-bold block">
                    MODULAR CATALOG LAYOUT
                  </span>
                  <h2 className="font-display text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                    CYBERNETIC <br/>
                    <span className="text-transparent text-stroke-green text-glow-green">SPEC SHEETS</span>
                  </h2>
                  <p className="text-sm text-white/60 font-sans mt-3">
                    Detailed close-ups and blueprint schematics from Xenon Design Labs showing certified implants.
                  </p>
                </div>
                
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 p-2 rounded text-xs font-mono text-white/60 uppercase select-none">
                  <Activity className="w-3.5 h-3.5 text-[#00FF9D] animate-pulse" />
                  <span>Interactive blueprint mesh overlay enabled</span>
                </div>
              </div>

              {/* Responsive Grid with hover zoom effects */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {GALLERY_DATA.map((item) => (
                  <div
                    key={item.id}
                    className="group relative rounded-xl overflow-hidden border border-white/5 bg-black/40 aspect-square flex flex-col justify-end p-6 shadow-xl cursor-none interactive-hover"
                  >
                    {/* Background zooming image */}
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-75"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient bottom cover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

                    {/* Blue holographic scanlines effect on hover */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,245,255,0.15)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Spec overlay detailing card */}
                    <div className="relative z-10 space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#00F5FF] uppercase bg-[#00F5FF]/10 px-2.5 py-0.5 rounded border border-[#00F5FF]/20 inline-block">
                        {item.category}
                      </span>
                      
                      <div>
                        <h3 className="font-display text-base font-bold text-white tracking-wide">
                          {item.title}
                        </h3>
                        <p className="text-xs text-white/50 font-sans">
                          {item.subtitle}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center text-[9px] font-mono text-white/40">
                        <span>DESIGNER: {item.designer}</span>
                        <ChevronRight className="w-3 h-3 text-[#00FF9D]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* --- TIMELINE SECTION --- */}
          <section id="timeline-section" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10 bg-cyber-dots">
            <div className="space-y-16">
              
              <div className="text-center space-y-3 max-w-2xl mx-auto">
                <span className="text-xs font-mono text-[#00F5FF] uppercase tracking-widest font-bold block">
                  CHRONOLOGICAL PATHWAY
                </span>
                <h2 className="font-display text-4xl md:text-6xl font-black text-transparent text-stroke-cyan text-glow-cyan uppercase tracking-tighter leading-none">
                  CHRONICLE OF SYNTHESIS
                </h2>
                <p className="text-sm text-white/60 font-sans leading-relaxed mt-2">
                  Chart our progress as we advance human potential from initial bionic limbs to direct cloud cybernetic consciousness.
                </p>
              </div>

              <TimelineSection />

            </div>
          </section>

          {/* --- TESTIMONIALS --- */}
          <section id="testimonials-section" className="py-24 px-4 md:px-8 bg-black/25 relative z-10 border-t border-b border-white/5 bg-cyber-dots">
            <div className="max-w-7xl mx-auto space-y-16">
              
              <div className="text-center space-y-3">
                <span className="text-xs font-mono text-[#7A00FF] uppercase tracking-widest font-bold block">
                  VERIFIED UPGRADE REVIEWS
                </span>
                <h2 className="font-display text-4xl md:text-6xl font-black text-transparent text-stroke-purple uppercase tracking-tighter leading-none">
                  ENHANCED TESTIMONIALS
                </h2>
                <div className="w-24 h-[3px] bg-gradient-to-r from-[#7A00FF] to-[#00F5FF] mx-auto" />
              </div>

              {/* Three user profile cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {TESTIMONIALS_DATA.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:border-[#7A00FF]/30 transition-all flex flex-col justify-between gap-6 relative shadow-xl overflow-hidden group"
                  >
                    {/* Visual glowing highlight line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#7A00FF] to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />

                    <div className="space-y-4">
                      {/* Rating and code identifier */}
                      <div className="flex justify-between items-center">
                        <div className="flex gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#00FF9D] text-[#00FF9D]" />
                          ))}
                        </div>
                        <span className="font-mono text-[9px] text-white/40 tracking-widest uppercase">
                          SYN_CODE: {item.upgradeCode}
                        </span>
                      </div>

                      <p className="text-sm text-white/70 font-sans leading-relaxed italic">
                        "{item.quote}"
                      </p>
                    </div>

                    {/* Author profile card */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-[#00F5FF]/30">
                        <img
                          src={item.avatarUrl}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-white block">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-mono text-[#00F5FF] uppercase block">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* --- PRICING SECTION --- */}
          <section id="pricing-section" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10 bg-cyber-dots">
            <div className="space-y-20">
              
              <div className="text-center space-y-3 max-w-2xl mx-auto">
                <span className="text-xs font-mono text-[#00FF9D] uppercase tracking-widest font-bold block">
                  CHOOSE YOUR HARDWARE SUITE
                </span>
                <h2 className="font-display text-4xl md:text-6xl font-black text-transparent text-stroke-green text-glow-green uppercase tracking-tighter leading-none">
                  ADAPTATION PLANS
                </h2>
                <p className="text-sm text-white/60 font-sans leading-relaxed mt-2">
                  Select a certified upgrade pack or configure your custom core using our advanced simulator below.
                </p>
              </div>

              {/* Plan cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {PRICING_DATA.map((plan) => (
                  <div
                    key={plan.id}
                    className={`p-6 md:p-8 rounded-xl border glass-panel flex flex-col justify-between gap-8 relative shadow-xl overflow-hidden group ${
                      plan.isPopular 
                        ? 'border-[#7A00FF]/40 bg-[#7A00FF]/[0.02] shadow-[#7A00FF]/10' 
                        : 'border-white/5 bg-white/[0.01]'
                    }`}
                  >
                    {/* Popular accent indicator banner */}
                    {plan.isPopular && (
                      <div className="absolute top-4 right-4 bg-[#7A00FF] text-white text-[9px] font-mono uppercase px-2.5 py-1 rounded font-bold tracking-widest">
                        RECOMMENDED BUILD
                      </div>
                    )}

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-display text-xl font-bold text-white tracking-wide uppercase mb-1">
                          {plan.name}
                        </h3>
                        <p className="text-xs text-white/50 font-sans leading-relaxed">
                          {plan.description}
                        </p>
                      </div>

                      {/* Pricing block */}
                      <div className="flex items-baseline gap-1 font-mono">
                        <span className="text-3xl md:text-4xl font-black text-white tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-xs text-white/40 uppercase">
                          / {plan.period}
                        </span>
                      </div>

                      {/* Divider line */}
                      <div className="h-[1px] bg-white/5" />

                      {/* Plan Feature checklist */}
                      <ul className="space-y-3">
                        {plan.features.map((feat, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-white/70 font-sans">
                            <Check className="w-4 h-4 text-[#00FF9D] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => scrollToSection('pricing-calculator-block')}
                      className={`w-full py-3 px-4 rounded text-xs font-display font-bold uppercase tracking-wider text-center transition-all duration-300 cursor-none interactive-hover ${
                        plan.isPopular
                          ? 'bg-gradient-to-r from-[#7A00FF] to-[#00F5FF] text-white shadow-[0_0_15px_rgba(122,0,255,0.4)] hover:shadow-[0_0_20px_rgba(0,245,255,0.6)]'
                          : 'border border-white/20 hover:border-[#00F5FF]/50 bg-white/5 hover:bg-[#00F5FF]/10 text-white'
                      }`}
                    >
                      Initialize Link Upgrades
                    </button>
                  </div>
                ))}
              </div>

              {/* Dynamic Interactive Calculator Block */}
              <div id="pricing-calculator-block" className="pt-12">
                <div className="text-center space-y-2 mb-8">
                  <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">
                    Modular Upgrade Configurator
                  </h3>
                  <p className="text-xs text-white/50 font-sans max-w-md mx-auto">
                    Toggle distinct hardware additions to simulate your custom localized build pricing.
                  </p>
                </div>
                <PricingCalculator />
              </div>

            </div>
          </section>

          {/* --- FAQ SECTION --- */}
          <section id="faq-section" className="py-24 px-4 md:px-8 bg-black/20 relative z-10 border-t border-white/5 bg-cyber-dots">
            <div className="max-w-7xl mx-auto space-y-16">
              
              <div className="text-center space-y-3">
                <span className="text-xs font-mono text-[#00F5FF] uppercase tracking-widest font-bold block">
                  SYSTEM DOCUMENTATION
                </span>
                <h2 className="font-display text-4xl md:text-6xl font-black text-transparent text-stroke-cyan text-glow-cyan uppercase tracking-tighter leading-none">
                  FAQ & TECHNICAL SPECS
                </h2>
                <div className="w-24 h-[3px] bg-gradient-to-r from-[#00F5FF] to-[#7A00FF] mx-auto" />
              </div>

              <Accordion items={FAQS_DATA} />

            </div>
          </section>

          {/* --- FOOTER & SIGNUP --- */}
          <footer className="bg-[#050816]/95 border-t border-white/5 relative z-10 pt-20 pb-8 px-4 md:px-8 bg-cyber-dots">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
              
              {/* Left description brand block */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3 select-none">
                  <div className="w-9 h-9 border-2 border-[#00F5FF] flex items-center justify-center rotate-45">
                    <div className="w-3.5 h-3.5 bg-[#7A00FF]"></div>
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

                <p className="text-xs text-white/50 leading-relaxed font-sans max-w-md">
                  Xenon Apex Systems designs, manufactures, and integrates room-temperature quantum implants and direct-link cortical pathways for transhuman evolution. All upgrades are fully reversible and certified under global biosecurity parameters.
                </p>

                {/* Social media connections */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#00F5FF] hover:border-[#00F5FF]/30 transition-all cursor-none interactive-hover"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#00F5FF] hover:border-[#00F5FF]/30 transition-all cursor-none interactive-hover"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#00F5FF] hover:border-[#00F5FF]/30 transition-all cursor-none interactive-hover"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Center spacers / quick links */}
              <div className="lg:col-span-3 grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="space-y-3">
                  <span className="text-[#00F5FF] font-bold uppercase tracking-wider block">NAVIGATE</span>
                  <button onClick={() => scrollToSection('about-section')} className="text-white/60 hover:text-white block transition-all cursor-none interactive-hover">ABOUT</button>
                  <button onClick={() => scrollToSection('features-section')} className="text-white/60 hover:text-white block transition-all cursor-none interactive-hover">FEATURES</button>
                  <button onClick={() => scrollToSection('gallery-section')} className="text-white/60 hover:text-white block transition-all cursor-none interactive-hover">BLUEPRINTS</button>
                </div>
                <div className="space-y-3">
                  <span className="text-[#7A00FF] font-bold uppercase tracking-wider block">SUPPORT</span>
                  <button onClick={() => scrollToSection('pricing-section')} className="text-white/60 hover:text-white block transition-all cursor-none interactive-hover">PRICING</button>
                  <button onClick={() => scrollToSection('faq-section')} className="text-white/60 hover:text-white block transition-all cursor-none interactive-hover">FAQ</button>
                  <a href="#about" className="text-white/60 hover:text-white block transition-all cursor-none interactive-hover">SECURITY</a>
                </div>
              </div>

              {/* Right newsletter subscription module */}
              <div className="lg:col-span-4 space-y-4">
                <span className="text-xs font-mono text-[#00FF9D] uppercase tracking-widest font-bold block">
                  SUBSCRIBE TO CONSCIOUSNESS NEWS
                </span>
                <p className="text-xs text-white/50 leading-relaxed font-sans">
                  Receive priority updates on room-temperature qubit advancements and lab availability schedules.
                </p>

                {newsletterSubscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-3 bg-[#00FF9D]/15 border border-[#00FF9D]/30 text-[#00FF9D] rounded font-mono text-xs text-center"
                  >
                    COGNITIVE LINK SUBSCRIPTION ACTIVATED.
                  </motion.div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter synapse email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-grow bg-black/40 border border-white/10 rounded px-3 py-2 text-xs font-sans text-white placeholder-white/30 focus:outline-none focus:border-[#00F5FF]/50 transition-colors cursor-none"
                    />
                    <button
                      type="submit"
                      className="bg-white/5 hover:bg-[#00F5FF]/15 border border-white/10 hover:border-[#00F5FF]/40 text-white px-4 py-2 rounded text-xs font-mono uppercase tracking-wider transition-all cursor-none interactive-hover shrink-0"
                    >
                      Link
                    </button>
                  </form>
                )}
              </div>

            </div>

            {/* Bottom copyright and scrolling bar */}
            <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-white/40">
              <span>© 2026 XENON APEX BIOSYSTEMS INC. ALL RIGHTS SECURED.</span>
              <span>COGNITIVE LICENSE ID: XN-7729-APX</span>
            </div>

            {/* Back to top dynamic button */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-[#050816]/90 border border-[#00F5FF]/30 shadow-[0_0_10px_rgba(0,245,255,0.3)] flex items-center justify-center text-white hover:text-[#00F5FF] hover:border-[#00F5FF] transition-all z-40 cursor-none interactive-hover"
                  title="Scroll to system top"
                >
                  <ArrowUp className="w-4 h-4" />
                </motion.button>
              )}
            </AnimatePresence>
          </footer>

        </>
      )}

    </div>
  );
}
