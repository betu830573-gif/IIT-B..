export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  category: 'neural' | 'vision' | 'strength' | 'quantum';
  specs: string[];
  imageUrl: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  decimals?: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  category: string;
  designer: string;
}

export interface TimelineItem {
  id: string;
  phase: string;
  year: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  details: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  upgradeCode: string;
  rating: number;
  avatarUrl: string;
  quote: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  accentColor: 'cyan' | 'purple' | 'green';
  features: string[];
  isPopular?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
