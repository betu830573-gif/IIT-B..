import { FeatureItem, StatItem, GalleryItem, TimelineItem, TestimonialItem, PricingPlan, FAQItem } from './types';

export const HERO_IMAGE = '/src/assets/images/cyborg_hero_1784082527708.jpg';

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'feat-1',
    title: 'Neural Intelligence',
    description: 'Direct-link brain integration fusing your cognitive cortex with high-speed quantum databases.',
    category: 'neural',
    specs: ['600 Gbps transfer speed', '0.01ms neural latency', 'AI-assisted memory retrieval'],
    imageUrl: '/src/assets/images/neural_interface_1784082460384.jpg'
  },
  {
    id: 'feat-2',
    title: 'Cyber Vision',
    description: 'Ocular implants providing augmented-reality feeds, thermal tracking, and multi-spectrum vision.',
    category: 'vision',
    specs: ['8K multi-focus overlay', 'Thermal & Electromagnetic sensors', 'Instant face-recognition HUD'],
    imageUrl: '/src/assets/images/cyber_vision_1784082477173.jpg'
  },
  {
    id: 'feat-3',
    title: 'Robotic Strength',
    description: 'Sleek carbon-fiber exo-prosthetics restoring and multiplying biological muscular output by 10x.',
    category: 'strength',
    specs: ['Carbon-fiber titanium casing', '12,000 N grip force capacity', 'Real-time sensory response feedback'],
    imageUrl: '/src/assets/images/robotic_strength_1784082492260.jpg'
  },
  {
    id: 'feat-4',
    title: 'Quantum Processing',
    description: 'Bio-electronic quantum chipsets executing localized calculations instantly at room temperatures.',
    category: 'quantum',
    specs: ['64 Qubits localized', 'Room-temp bio-superconductor', 'Asynchronous AI subroutines'],
    imageUrl: '/src/assets/images/quantum_processing_1784082508814.jpg'
  }
];

export const STATS_DATA: StatItem[] = [
  {
    id: 'stat-1',
    label: 'AI Sync Accuracy',
    value: 99.9,
    suffix: '%',
    decimals: 1
  },
  {
    id: 'stat-2',
    label: 'Enhanced Citizens',
    value: 1200000,
    suffix: '+',
    decimals: 0
  },
  {
    id: 'stat-3',
    label: 'Global Cyber Labs',
    value: 258,
    suffix: '',
    decimals: 0
  },
  {
    id: 'stat-4',
    label: 'Active AI Network',
    value: 24,
    suffix: '/7',
    decimals: 0
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Cortex Sync Module',
    subtitle: 'Neural Integration Upgrade',
    imageUrl: '/src/assets/images/neural_interface_1784082460384.jpg',
    category: 'Cognitive',
    designer: 'Xenon Neuro Labs'
  },
  {
    id: 'gal-2',
    title: 'Apex Bionic Optic-X',
    subtitle: 'Augmented HUD Receptor',
    imageUrl: '/src/assets/images/cyber_vision_1784082477173.jpg',
    category: 'Sensory',
    designer: 'Neo-Vision Systems'
  },
  {
    id: 'gal-3',
    title: 'Titanium Exo-Grip v4',
    subtitle: 'Myoelectric Kinetic Arm',
    imageUrl: '/src/assets/images/robotic_strength_1784082492260.jpg',
    category: 'Physical',
    designer: 'Heavy Industries Corp'
  },
  {
    id: 'gal-4',
    title: 'Quantum Bio-Core',
    subtitle: 'Sub-Thermal Co-Processor',
    imageUrl: '/src/assets/images/quantum_processing_1784082508814.jpg',
    category: 'Processor',
    designer: 'Quantum Biosystems'
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'time-1',
    phase: 'Phase 01: Hybrid Organs',
    year: 'PRESENT',
    title: 'Myoelectric Integration',
    description: 'Seamless biological anchoring of smart mechanical limbs. Direct signal routing via remaining motor nerves with high responsive accuracy.',
    status: 'completed',
    details: ['Nerve-to-silicon synapses', 'Carbon fiber structural frames', 'Haptic pressure feedback']
  },
  {
    id: 'time-2',
    phase: 'Phase 02: Neural Interlink',
    year: '2028',
    title: 'Cerebral AI Conductor',
    description: 'Implanted nanotechnology creating high-bandwidth wireless pathways between the brain and cloud artificial intelligence models.',
    status: 'in-progress',
    details: ['Nanobot neural mesh networks', 'Sub-millisecond semantic stream', 'Visual overlay augmentation']
  },
  {
    id: 'time-3',
    phase: 'Phase 03: The Singularity',
    year: '2035',
    title: 'Transhuman Synthesis',
    description: 'The absolute culmination of organic and digital minds. Consciousness expansion across decentralized, self-healing quantum networks.',
    status: 'planned',
    details: ['Full biological digitizing', 'Infinite cognitive lifespan', 'Multidimensional cloud presence']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Valerie Kross',
    role: 'Cybernetic Security Specialist',
    upgradeCode: 'OPT-V3_CORT-9',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'Upgrading to the Cyber Vision and Cortex Sync changed my entire perception of threat vectors. I can visualize threat code blocks overlayed onto physical network terminals instantly. The latency is practically non-existent!'
  },
  {
    id: 'test-2',
    name: 'Dr. James Mercer',
    role: 'Quantum Physicist & Biosystems Dev',
    upgradeCode: 'QNT-CORE_V2',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'The room-temperature quantum processor handles millions of complex molecular calculations inside my cortex while I sleep. I wake up with complete, structured proofs that used to take my mainframe server clusters weeks.'
  },
  {
    id: 'test-3',
    name: 'Kaelen Vance',
    role: 'Pro Athletes Federation Champion',
    upgradeCode: 'EXO-ARM_STR4',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'Having the Robotic Strength module is like reclaiming my career and instantly expanding it tenfold. Standard weight limitations literally disappeared. The feedback calibration feels entirely natural, like real flesh and bone.'
  }
];

export const PRICING_DATA: PricingPlan[] = [
  {
    id: 'price-starter',
    name: 'Starter',
    price: '$4,999',
    period: 'one-time upgrade',
    description: 'Perfect for biological enhancement enthusiasts seeking sensory expansion and basic connectivity.',
    accentColor: 'cyan',
    features: [
      'Ocular Cyber HUD Upgrade (V1)',
      'Direct Neural Sync Lite (10 Gbps)',
      'Basic Bionic Haptic Feedback',
      'Standard 1-Year Lab Warranty',
      'Lifetime Cloud Diagnostic Support'
    ]
  },
  {
    id: 'price-pro',
    name: 'Pro Upgrade',
    price: '$14,999',
    period: 'one-time upgrade',
    description: 'Our most sought-after system, providing peak physical performance and multi-threat system overlays.',
    accentColor: 'purple',
    isPopular: true,
    features: [
      'Advanced Cyber Vision HUD (8K)',
      'Neural Sync Pro (100 Gbps stream)',
      'Robotic Exo-Strength Arm (Titanium)',
      'AI Assistant Core (Co-Processor V2)',
      'Modular Upgrade Compatibility',
      'Priority Lab Support & Tuning'
    ]
  },
  {
    id: 'price-elite',
    name: 'Elite Singularity',
    price: '$49,999',
    period: 'one-time upgrade',
    description: 'The ultimate pinnacle of biological modification, preparing your mind and physical form for the Singularity.',
    accentColor: 'green',
    features: [
      'Full Dual-Eye Bionic Optic-Max',
      'Quantum Processing Core (64 Qubits)',
      'Direct Cortex-Cloud Integration',
      'Dual Carbon Exo-Limbs (Physical Force)',
      '24/7 Deep Lab Calibration Access',
      'Priority Singularity Node Reservation'
    ]
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How safe is the initial neural connection procedure?',
    answer: 'The micro-synaptic installation is a completely non-invasive, robotic-assisted out-patient session. The nanotech meshes attach organically to your brain cortex over a period of 48 hours without causing discomfort, strictly operating under medical and robotic system safety parameters.'
  },
  {
    id: 'faq-2',
    question: 'Are cybernetic parts upgradable over time?',
    answer: 'Absolutely. All cybernetics designed by Xenon are fully modular. If a newer optical sensor, quantum processor, or exo-arm joint is released, you can simply stop by any of our global labs for a quick hot-swap calibration that takes less than an hour.'
  },
  {
    id: 'faq-3',
    question: 'Can my cybernetics be hacked or shut down remotely?',
    answer: 'Xenon utilizes military-grade quantum cryptography. Every neural connection and motor routing runs on localized, zero-trust cryptographic handshakes. The sub-thermal co-processor features hardware-level sandboxing, blocking external interference.'
  },
  {
    id: 'faq-4',
    question: 'What happens if the localized power grid goes down?',
    answer: 'All cybernetic enhancements operate on highly efficient internal bio-thermal energy generators. They charge passively using your own biological body heat and sugar metabolism, ensuring your prosthetics and vision implants stay online even in complete outages.'
  },
  {
    id: 'faq-5',
    question: 'Is financing available for the transhuman plans?',
    answer: 'Yes. We offer modular biological asset leasing and deferred credit pathways in partnership with major decentralized credit networks. Enhanced citizens are also eligible for Xenon cybernetic career networks to cover upgrade costs.'
  }
];
