import React from 'react';
import { ArrowRight, Sparkles, Flame, Shirt, Video, Coffee, Leaf } from 'lucide-react';
import { CategoryFilter, CurrencyCode, LanguageCode, Product } from '../types';
import { ProductCard } from './ProductCard';
import { TRANSLATIONS } from '../data/i18n';

interface CategoryShowcaseProps {
  products: Product[];
  onSelectCategory: (category: CategoryFilter) => void;
  onAddToCart: (product: Product, size?: string, color?: string) => void;
  onQuickView: (product: Product) => void;
  wishlist: Product[];
  onToggleWishlist: (product: Product) => void;
  currency: CurrencyCode;
  lang: LanguageCode;
}

interface ShowcaseGroup {
  id: string;
  categoryKey: CategoryFilter;
  itemGroup: 'hoodies' | 'tshirts' | 'youtube' | 'lifestyle' | 'stationery';
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
  accentBorder: string;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  products,
  onSelectCategory,
  onAddToCart,
  onQuickView,
  wishlist,
  onToggleWishlist,
  currency,
  lang
}) => {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const showcaseGroups: ShowcaseGroup[] = [
    {
      id: 'showcase-hoodies',
      categoryKey: 'Hoodies',
      itemGroup: 'hoodies',
      icon: <Flame className="w-5 h-5 text-blue-600" />,
      title: t.showcaseTitles.hoodies,
      description: t.showcaseTitles.hoodiesDesc,
      badge: 'Heavyweight Fleece',
      accentBorder: 'border-blue-500'
    },
    {
      id: 'showcase-tshirts',
      categoryKey: 'T-Shirts',
      itemGroup: 'tshirts',
      icon: <Shirt className="w-5 h-5 text-emerald-600" />,
      title: t.showcaseTitles.tshirts,
      description: t.showcaseTitles.tshirtsDesc,
      badge: '100% GOTS Organic',
      accentBorder: 'border-emerald-500'
    },
    {
      id: 'showcase-youtube',
      categoryKey: 'YouTube Gear',
      itemGroup: 'youtube',
      icon: <Video className="w-5 h-5 text-red-600" />,
      title: t.showcaseTitles.youtube,
      description: t.showcaseTitles.youtubeDesc,
      badge: 'Creator Studio Drop',
      accentBorder: 'border-red-500'
    },
    {
      id: 'showcase-lifestyle',
      categoryKey: 'Lifestyle',
      itemGroup: 'lifestyle',
      icon: <Coffee className="w-5 h-5 text-amber-600" />,
      title: t.showcaseTitles.lifestyle,
      description: t.showcaseTitles.lifestyleDesc,
      badge: 'Desk Collectibles',
      accentBorder: 'border-amber-500'
    },
    {
      id: 'showcase-stationery',
      categoryKey: 'Stationery',
      itemGroup: 'stationery',
      icon: <Leaf className="w-5 h-5 text-green-600" />,
      title: t.showcaseTitles.stationery,
      description: t.showcaseTitles.stationeryDesc,
      badge: 'Zero Plastic RPET',
      accentBorder: 'border-green-500'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Overview introduction */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              {t.sections.curatedShowcase}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl">
            {t.sections.curatedDesc}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg shrink-0">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>All departments in stock</span>
        </div>
      </div>

      {/* Each Curated Category Section */}
      {showcaseGroups.map((group) => {
        const groupProducts = products.filter((p) => p.itemGroup === group.itemGroup);
        // Show the top 3-4 items from each category
        const previewItems = groupProducts.slice(0, 4);

        if (previewItems.length === 0) return null;

        return (
          <section
            key={group.id}
            id={group.id}
            className="scroll-mt-24 bg-gradient-to-b from-gray-50/50 to-white pt-6 pb-8 px-4 sm:px-6 rounded-2xl border border-gray-200/80 shadow-2xs"
          >
            {/* Category Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-white rounded-lg border border-gray-200 shadow-2xs">
                    {group.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        {group.title}
                      </h3>
                      <span className="bg-gray-100 text-gray-700 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-gray-200">
                        {group.badge}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 line-clamp-1">
                      {group.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* View Whole Category Action */}
              <button
                id={`view-all-${group.itemGroup}-btn`}
                onClick={() => {
                  onSelectCategory(group.categoryKey);
                  const el = document.getElementById('products');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="self-start sm:self-auto bg-white hover:bg-blue-50 border border-gray-300 hover:border-blue-400 text-blue-700 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 transition shadow-2xs group shrink-0 cursor-pointer"
              >
                <span>
                  {t.sections.viewAll} ({groupProducts.length})
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Showcase Items Grid (3 or 4 items) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
              {previewItems.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onQuickView={onQuickView}
                  isWishlisted={wishlist.some((w) => w.id === product.id)}
                  onToggleWishlist={onToggleWishlist}
                  currency={currency}
                  lang={lang}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};
