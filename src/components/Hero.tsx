import React from 'react';
import { ArrowRight, Package, ShieldCheck, RefreshCw, Sparkles, Award } from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/i18n';

interface HeroProps {
  onShopNewArrivals: () => void;
  onExploreBrands: () => void;
  onSelectMemberCollection: () => void;
  onOpenInfluencerHub?: () => void;
  lang: LanguageCode;
}

export const Hero: React.FC<HeroProps> = ({
  onShopNewArrivals,
  onExploreBrands,
  onSelectMemberCollection,
  onOpenInfluencerHub,
  lang
}) => {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-gray-50 py-10 md:py-16 border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Hero Left Content */}
          <div className="md:w-1/2 space-y-5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-blue-100/80 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.hero.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {t.hero.title}
            </h1>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
              <button
                id="hero-shop-btn"
                onClick={onShopNewArrivals}
                className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition text-sm flex items-center gap-2 group cursor-pointer"
              >
                <span>{t.hero.shopNewArrivals}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-explore-btn"
                onClick={onExploreBrands}
                className="bg-white border border-gray-300 hover:bg-gray-50 active:scale-95 text-gray-700 font-medium px-5 py-3 rounded-lg transition text-sm shadow-xs cursor-pointer"
              >
                {t.hero.exploreBrands}
              </button>

              {onOpenInfluencerHub && (
                <button
                  id="hero-creator-btn"
                  onClick={onOpenInfluencerHub}
                  className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-indigo-200 hover:border-indigo-300 text-indigo-900 font-bold px-4 py-3 rounded-lg transition text-sm shadow-2xs flex items-center gap-1.5"
                >
                  <Award className="w-4 h-4 text-indigo-600" />
                  <span>Creator Program</span>
                </button>
              )}
            </div>

            {/* Quick Guarantees Strip */}
            <div className="pt-4 grid grid-cols-3 gap-2 border-t border-gray-200/80 max-w-md mx-auto md:mx-0 text-left">
              <div className="flex items-center gap-1.5 text-[11px] text-gray-600 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>100% Genuine</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-gray-600 font-medium">
                <Package className="w-3.5 h-3.5 text-green-600 shrink-0" />
                <span>Zero Plastic</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-gray-600 font-medium">
                <RefreshCw className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Spotlight Card */}
          <div className="md:w-1/2 flex justify-center w-full">
            <div className="relative max-w-md w-full">
              
              {/* Background gradient decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-md opacity-25" />

              <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-red-50 text-red-600 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-red-100">
                      Worldwide Exclusive
                    </span>
                    <span className="text-xs font-semibold text-gray-400">
                      Season 2026
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {t.hero.memberDrop}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
                    {t.hero.memberDropDesc}
                  </p>
                </div>

                {/* Micro Showcase Badges */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-100 mb-5 bg-gray-50/70 rounded-xl px-3 text-center">
                  <div>
                    <span className="text-[10px] text-gray-500 font-medium block">Hoodies</span>
                    <span className="text-xs font-bold text-gray-900">380 GSM</span>
                  </div>
                  <div className="border-x border-gray-200">
                    <span className="text-[10px] text-gray-500 font-medium block">T-Shirts</span>
                    <span className="text-xs font-bold text-gray-900">100% GOTS</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-medium block">Delivery</span>
                    <span className="text-xs font-bold text-gray-900">Carbon 0</span>
                  </div>
                </div>

                <button
                  onClick={onSelectMemberCollection}
                  className="w-full bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-xs transition group cursor-pointer"
                >
                  <span>Explore Featured Gear</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gray-300" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
