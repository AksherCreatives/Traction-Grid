
import { Project, Testimonial, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern Finance',
    category: 'YouTube & Reels',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    description: 'Scaled from 10k to 250k followers in 90 days using our retention-first scripting system.',
    stats: '25M+ Views'
  },
  {
    id: '2',
    title: 'Peak Performance',
    category: 'Short-Form Viral',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    description: 'Engineered a series of 15-second high-retention TikTok hooks for a global product launch.',
    stats: '4.2M Likes'
  },
  {
    id: '3',
    title: 'Tech Founders',
    category: 'B2B Authority',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    description: 'Produced cinematic long-form deep-dives that positioned the CEO as a top industry voice.',
    stats: '82% Retention'
  },
  {
    id: '4',
    title: 'Lifestyle Elite',
    category: 'Daily Vlogs',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800',
    description: 'Automated the post-production for a daily creator, saving them 40+ hours per week.',
    stats: '300% ROI'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Jason Mark',
    role: 'Creator',
    company: 'Mark Media',
    content: 'Traction Grid didn\'t just edit my videos, they built my brand. Their system for hooks is honestly scary.',
    avatar: 'https://i.pravatar.cc/150?u=jason'
  },
  {
    id: '2',
    name: 'Sarah Kim',
    role: 'Founder',
    company: 'Skala Agency',
    content: 'The 3-step process is what sold me. Clarity, speed, and results. We doubled our revenue in 4 months.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Retention Scripting',
    description: 'Psychological hooks and structures that force viewers to watch until the very end.',
    icon: 'fa-pen-nib'
  },
  {
    id: '2',
    title: 'Viral Editing',
    description: 'Fast-paced, high-engagement editing with custom motion graphics and sound design.',
    icon: 'fa-scissors'
  },
  {
    id: '3',
    title: 'Channel Management',
    description: 'A-Z management of your YouTube, TikTok, and Instagram accounts to maximize reach.',
    icon: 'fa-bolt-lightning'
  },
  {
    id: '4',
    title: 'Monetization Strategy',
    description: 'Converting your attention into backend revenue through high-ticket offers and funnels.',
    icon: 'fa-dollar-sign'
  }
];

export const FAQS = [
  {
    question: "How long does it take to see results?",
    answer: "Our clients typically see a massive spike in engagement within the first 14 days of posting our optimized content."
  },
  {
    question: "Do I need to be a professional on camera?",
    answer: "No. Our scripting and coaching process will make you look like a pro, even if it's your first time recording."
  },
  {
    question: "What platforms do you support?",
    answer: "We specialize in YouTube (Long & Shorts), Instagram Reels, TikTok, and LinkedIn Video."
  },
  {
    question: "Is this a monthly subscription?",
    answer: "We work on a performance-based retainer model designed to align our goals with your growth."
  }
];
