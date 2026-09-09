import React from 'react';
import { Globe, ShieldCheck, Heart, Leaf, Sparkles } from 'lucide-react';
import { CurrencyCode, LanguageCode } from '../types';
import { ALL_CURRENCIES } from '../data/currencies';
import { SUPPORTED_LANGUAGES, TRANSLATIONS } from '../data/i18n';

interface FooterProps {
  currency: CurrencyCode;
  lang: LanguageCode;
  onOpenInfluencerHub?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currency,
  lang,
  onOpenInfluencerHub
}) => {
  const currentCurr = ALL_CURRENCIES.find(c => c.code === currency) || ALL_CURRENCIES[0];
  const currentLang = SUPPORTED_LANGUAGES.find(l => l.code === lang) || SUPPORTED_LANGUAGES[0];
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <footer className="bg-white border-t border-gray-200 py-10 mt-16 text-gray-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-gray-100">
          <div>
            <h4 className="text-gray-900 font-bold uppercase tracking-wider text-[11px] mb-3">
              Shop Brands
            </h4>
            <ul className="space-y-2">
              <li><a href="#products" className="hover:text-blue-600 transition">Google Apparel</a></li>
              <li><a href="#products" className="hover:text-blue-600 transition">YouTube Gear</a></li>
              <li><a href="#products" className="hover:text-blue-600 transition">Android Collectibles</a></li>
              <li><a href="#products" className="hover:text-blue-600 transition">Google Cloud Swag</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold uppercase tracking-wider text-[11px] mb-3">
              Sustainability
            </h4>
            <ul className="space-y-2">
              <li><span className="text-gray-600">100% GOTS Organic Cotton</span></li>
              <li><span className="text-gray-600">RPET Recycled Fabrics</span></li>
              <li><span className="text-gray-600">Carbon Neutral Shipping</span></li>
              <li><span className="text-gray-600">Plastic-Free Packaging</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold uppercase tracking-wider text-[11px] mb-3">
              Creator & Partners
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenInfluencerHub}
                  className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1.5 transition text-left"
                >
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>{t.influencerPortalBtn}</span>
                </button>
              </li>
              <li><span className="text-gray-600">Affiliate Referral Generator</span></li>
              <li><span className="text-gray-600">Creator Commission Payouts</span></li>
              <li><span className="text-gray-600">Community Collab Drops</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold uppercase tracking-wider text-[11px] mb-3">
              Store Localization
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg w-fit">
                <span>{currentCurr.flag}</span>
                <span className="font-semibold">{currentCurr.code}</span>
                <span className="text-gray-400">({currentCurr.symbol})</span>
                <span className="text-gray-300">•</span>
                <span>{currentLang.nativeName}</span>
              </div>
              <p className="text-[11px] text-gray-400">
                Official Google Store global fulfillment with real-time multi-currency pricing and multi-language support.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <div className="flex items-center tracking-tight text-lg font-bold">
              <span className="text-blue-600">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-600">g</span>
              <span className="text-green-600">l</span>
              <span className="text-red-500">e</span>
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-gray-500 text-[11px]">
              © {new Date().getFullYear()} Google LLC. All rights reserved.
            </span>
          </div>

          <div className="flex items-center space-x-6 text-[11px]">
            <span className="hover:text-gray-800 transition cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-800 transition cursor-pointer">Terms of Service</span>
            <span className="hover:text-gray-800 transition cursor-pointer">Sustainability Report</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
