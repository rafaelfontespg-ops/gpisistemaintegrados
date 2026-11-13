export type PageId = 
  | 'home' 
  | 'about' 
  | 'solutions' 
  | 'solution-detail' 
  | 'blog' 
  | 'downloads' 
  | 'contact'
  | 'sos-maria-da-penha';

export interface SolutionFaqItem {
  question: string;
  answer: string;
}

export interface Solution {
  id: string;
  slug: string;
  name: string;
  summary: string;
  shortDescription?: string;
  fullTextParagraphs: string[];
  youtubeUrlPlaceholder?: string;
  youtubeUrl?: string;
  iconName?: string;
  category?: string;
  categoryLabel?: string;
  fullDescription?: string;
  keyBenefit?: string;
  problemSolved?: string;
  benefits?: string[];
  features?: string[];
  differentiators?: string[];
  integrations?: string[];
  demoVideoUrl?: string;

  // Official structured solution page fields:
  presentationParagraphs?: string[];
  problemSolvedParagraphs?: string[];
  featuresIntro?: string;
  videoStatusText?: string;
  differentiatorsParagraphs?: string[];
  integrationsIntroParagraphs?: string[];
  faqs?: SolutionFaqItem[];
}

export interface Metric {
  label: string;
  value: string;
  number: number;
  suffix: string;
  description: string;
  iconName: string;
}

export interface SuccessCase {
  id: string;
  municipality: string;
  state: string;
  population: string;
  solutionUsed: string;
  metricHighlight: string;
  quote: string;
  author: string;
  role: string;
  results: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  author: string;
  image: string;
  featured?: boolean;
}

export interface Material {
  id: string;
  title: string;
  type: 'E-book' | 'Infográfico' | 'Guia Prático' | 'Modelo TR';
  category: string;
  description: string;
  pages: string;
  downloadsCount: string;
  coverImage: string;
  downloadUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Geral' | 'Segurança & LGPD' | 'Implantação' | 'Suporte' | 'Licitação';
}

export interface ClientLogo {
  id: string;
  name: string;
  type: 'Prefeitura' | 'Câmara' | 'Instituto' | 'Autarquia';
  state: string;
}
