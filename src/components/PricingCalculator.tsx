import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Brain, Eye, Zap, RefreshCw } from 'lucide-react';

interface UpgradeOption {
  id: string;
  name: string;
  price: number;
  category: string;
  icon: React.ReactNode;
  enhancement: number; // Percent increase in transhuman score
}

export default function PricingCalculator() {
  const options: UpgradeOption[] = [
    {
      id: 'opt-cortex',
      name: 'Omni-Cerebral Sync V4 (Cortex Connection)',
      price: 8500,
      category: 'Neural',
      icon: <Brain className="w-4 h-4" />,
      enhancement: 35
    },
    {
      id: 'opt-eye',
      name: 'Optic HUD Receptor (Electromagnetic Overlay)',
      price: 4200,
      category: 'Sensory',
      icon: <Eye className="w-4 h-4" />,
      enhancement: 20
    },
    {
      id: 'opt-heart',
      name: 'Quantum Nano-Core (Bio-Thermal Battery)',
      price: 15000,
      category: 'Processor',
      icon: <Zap className="w-4 h-4" />,
      enhancement: 30
    },
    {
      id: 'opt-limbs',
      name: 'Myoelectric Titanium Limbs (Exo-Strength)',
      price: 11000,
      category: 'Physical',
      icon: <Shield className="w-4 h-4" />,
      enhancement: 15
    }
  ];

  const [selectedIds, setSelectedIds] = useState<string[]>(['opt-cortex', 'opt-eye']);
  const [successMsg, setSuccessMsg] = useState(false);

  const toggleOption = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
    setSuccessMsg(false);
  };

  const calculateTotal = () => {
    const basePrice = 2500; // Base surgery and calibration fee
    const upgradesPrice = options
      .filter((opt) => selectedIds.includes(opt.id))
      .reduce((sum, opt) => sum + opt.price, 0);
    return basePrice + upgradesPrice;
  };

  const calculateScore = () => {
    const baseScore = 15; // Human base score
    const upgradesScore = options
      .filter((opt) => selectedIds.includes(opt.id))
      .reduce((sum, opt) => sum + opt.enhancement, 0);
    return Math.min(baseScore + upgradesScore, 100);
  };

  const resetSelection = () => {
    setSelectedIds([]);
    setSuccessMsg(false);
  };

  const handleInitialize = () => {
    setSuccessMsg(true);
  };

  const totalCost = calculateTotal();
  const upgradeScore = calculateScore();

  return (
    <div className="w-full max-w-4xl mx-auto glass-panel rounded-xl border border-[#00F5FF]/20 overflow-hidden relative shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#7A00FF]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00FF9D]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="p-6 md:p-8 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-bold text-white tracking-wider flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 bg-[#00F5FF] rounded-full animate-pulse" />
            SYNAPSE LABS: CONFIGURATION ENGINE
          </h3>
          <p className="text-sm text-white/60 mt-1 font-sans">
            Customize your modular bionics. Construct your personal enhancement specifications.
          </p>
        </div>
        <button
          onClick={resetSelection}
          className="flex items-center gap-1.5 text-xs text-[#00F5FF] hover:text-[#00FF9D] font-mono uppercase bg-white/5 px-3 py-1.5 rounded border border-[#00F5FF]/20 hover:border-[#00FF9D]/30 transition-all cursor-none interactive-hover"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Clear Core
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Options List */}
        <div className="lg:col-span-7 p-6 md:p-8 flex flex-col gap-4 border-r border-white/10">
          <span className="text-xs font-mono text-[#7A00FF] uppercase tracking-widest font-bold">
            AVAILABLE HARDWARE UPGRADES
          </span>

          <div className="flex flex-col gap-3">
            {options.map((opt) => {
              const isSelected = selectedIds.includes(opt.id);
              return (
                <div
                  key={opt.id}
                  onClick={() => toggleOption(opt.id)}
                  className={`p-4 rounded-lg border transition-all duration-300 cursor-none flex items-center justify-between gap-4 select-none ${
                    isSelected
                      ? 'border-[#00F5FF] bg-gradient-to-r from-[#00F5FF]/10 to-transparent shadow-[0_0_15px_rgba(0,245,255,0.05)]'
                      : 'border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all ${
                        isSelected
                          ? 'bg-[#00F5FF]/15 border-[#00F5FF] text-[#00F5FF]'
                          : 'bg-white/5 border-white/10 text-white/50'
                      }`}
                    >
                      {opt.icon}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-white/40 block">
                        {opt.category.toUpperCase()} SYSTEM
                      </span>
                      <span className="font-sans font-medium text-white text-sm md:text-base">
                        {opt.name.split(' (')[0]}
                      </span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[#00FF9D] font-mono font-bold block text-sm">
                      +${opt.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-[#7A00FF] font-mono font-bold">
                      +{opt.enhancement}% Integration
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Diagnostic Panel */}
        <div className="lg:col-span-5 p-6 md:p-8 bg-black/40 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-mono text-[#00FF9D] uppercase tracking-widest font-bold block">
              DIAGNOSTIC TELEMETRY
            </span>

            {/* Transhuman Integration Score */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-white/60">INTEGRATION RATING:</span>
                <span
                  className={`font-bold font-mono ${
                    upgradeScore >= 80
                      ? 'text-[#00FF9D]'
                      : upgradeScore >= 50
                      ? 'text-[#00F5FF]'
                      : 'text-[#7A00FF]'
                  }`}
                >
                  {upgradeScore}% TRANSHUMAN
                </span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/10">
                <motion.div
                  initial={{ width: '15%' }}
                  animate={{ width: `${upgradeScore}%` }}
                  className={`h-full rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(0,245,255,0.4)] ${
                    upgradeScore >= 80
                      ? 'bg-[#00FF9D]'
                      : upgradeScore >= 50
                      ? 'bg-[#00F5FF]'
                      : 'bg-[#7A00FF]'
                  }`}
                />
              </div>
              <p className="text-[10px] text-white/40 font-mono">
                {upgradeScore >= 80
                  ? 'SYS_WARNING: Near-singularity neural resonance detected. Biological components optimized.'
                  : upgradeScore >= 50
                  ? 'SYS_INFO: Balanced human-cybernetic integration. High neural synergy.'
                  : 'SYS_INFO: Minor enhancements calibrated. Human core dominant.'}
              </p>
            </div>

            {/* Calculations block */}
            <div className="border-t border-b border-white/5 py-4 space-y-2.5 font-mono text-xs">
              <div className="flex justify-between text-white/60">
                <span>BASE ADAPTATION FEE:</span>
                <span>$2,500</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>MODULE ADD-ONS ({selectedIds.length}):</span>
                <span>
                  $
                  {options
                    .filter((opt) => selectedIds.includes(opt.id))
                    .reduce((sum, opt) => sum + opt.price, 0)
                    .toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-[#00F5FF] font-bold text-sm pt-2 border-t border-white/5">
                <span>TOTAL PROJECTED COST:</span>
                <span>${totalCost.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {successMsg ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3 bg-[#00FF9D]/10 border border-[#00FF9D]/30 text-[#00FF9D] rounded font-mono text-xs text-center"
              >
                SURGERY LINK INITIALIZED. CONNECTING TO COGNITIVE SECURE CHECKOUT...
              </motion.div>
            ) : (
              <button
                onClick={handleInitialize}
                disabled={selectedIds.length === 0}
                className="w-full bg-gradient-to-r from-[#7A00FF] to-[#00F5FF] hover:from-[#00F5FF] hover:to-[#00FF9D] text-white font-display text-xs font-bold uppercase tracking-widest py-3 px-4 rounded transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-40 disabled:pointer-events-none cursor-none interactive-hover shadow-[0_0_15px_rgba(122,0,255,0.3)] hover:shadow-[0_0_20px_rgba(0,245,255,0.5)]"
              >
                Book Adaptation Surgery
              </button>
            )}
            <p className="text-[10px] text-white/30 text-center font-mono uppercase">
              All surgeries managed by robotic precision at local Xenon Labs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
