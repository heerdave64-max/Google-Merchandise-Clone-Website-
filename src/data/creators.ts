import { CreatorAffiliate } from '../types';

export const FEATURED_CREATORS: CreatorAffiliate[] = [
  {
    id: 'creator-mkbhd',
    name: 'Marques Brownlee',
    handle: '@mkbhd',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    bio: 'Tech reviewer & creator focused on crisp aesthetics, matte black finishes, and quality everyday gear.',
    code: 'MKBHD15',
    discountPercent: 15,
    commissionPercent: 10,
    totalReferrals: 1420,
    totalSalesVolumeUSD: 58420,
    earningsUSD: 5842,
    featuredProductIds: ['prod-bottle-02', 'prod-sleeve-10', 'prod-hoodie-05', 'prod-bag-04']
  },
  {
    id: 'creator-sarah',
    name: 'Sarah Coder',
    handle: '@sarahcodes',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    bio: 'Fullstack engineer & educator sharing dev desk setups, cozy hoodies, and clean productivity tools.',
    code: 'SARAHDEV',
    discountPercent: 12,
    commissionPercent: 10,
    totalReferrals: 890,
    totalSalesVolumeUSD: 36200,
    earningsUSD: 3620,
    featuredProductIds: ['prod-hoodie-05', 'prod-lamp-07', 'prod-mug-12', 'prod-tee-01']
  },
  {
    id: 'creator-mrbeast',
    name: 'MrBeast',
    handle: '@mrbeast',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    bio: 'YouTube creator. Official Google & YouTube community partner outfitting viewers with durable merchandise.',
    code: 'BEAST10',
    discountPercent: 10,
    commissionPercent: 8,
    totalReferrals: 4180,
    totalSalesVolumeUSD: 164000,
    earningsUSD: 13120,
    featuredProductIds: ['prod-crew-06', 'prod-bottle-02', 'prod-bag-04', 'prod-key-11']
  },
  {
    id: 'creator-veritasium',
    name: 'Veritasium',
    handle: '@veritasium',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    bio: 'Science enthusiast & creator diving deep into physics, computing history, and sustainability.',
    code: 'SCIENCE15',
    discountPercent: 15,
    commissionPercent: 10,
    totalReferrals: 640,
    totalSalesVolumeUSD: 24800,
    earningsUSD: 2480,
    featuredProductIds: ['prod-note-08', 'prod-bot-03', 'prod-tee-01', 'prod-tote-09']
  },
  {
    id: 'creator-techlead',
    name: 'Patrick (Ex-Google)',
    handle: '@techlead',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    bio: 'Former Google Staff Software Engineer reviewing official swag, hoodies, and desk merchandise.',
    code: 'EXGOOGLE',
    discountPercent: 20,
    commissionPercent: 12,
    totalReferrals: 1120,
    totalSalesVolumeUSD: 49500,
    earningsUSD: 5940,
    featuredProductIds: ['prod-hoodie-13', 'prod-key-11', 'prod-mug-12', 'prod-hoodie-05']
  }
];

export function findCreatorByCode(code: string): CreatorAffiliate | undefined {
  const cleanCode = code.trim().toUpperCase();
  return FEATURED_CREATORS.find(c => c.code.toUpperCase() === cleanCode);
}
