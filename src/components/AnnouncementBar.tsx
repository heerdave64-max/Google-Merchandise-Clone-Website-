import React, { useState } from 'react';
import { Zap, Leaf, Sparkles, X } from 'lucide-react';
import { CurrencyCode, LanguageCode } from '../types';
import { formatCurrency } from '../data/currencies';
import { TRANSLATIONS } from '../data/i18n';

interface AnnouncementBarProps {
  currency: CurrencyCode;
  lang: LanguageCode;
  onOpenInfluencerHub: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  currency,
  lang,
  onOpenInfluencerHub
}) => {
  const [dismissed, setDismissed] = useState(false);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  if (dismissed) return null;

  return (
    <aside
      aria-label="Store Announcements"
      className="bg-gray-900 text-white text-xs py-2.5 px-4 font-medium relative border-b border-gray-800 transition-all select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-4 gap-y-1.5 text-center pr-6">
        <div className="flex items-center gap-1.5 text-yellow-400">
          <Zap className="w-3.5 h-3.5 fill-yellow-400" />
          <span className="font-semibold text-white">
            {t.announcementText} {formatCurrency(50, currency)}
          </span>
        </div>

        <span className="hidden sm:inline text-gray-600">•</span>

        <div className="flex items-center gap-1.5 text-green-400">
          <Leaf className="w-3.5 h-3.5" />
          <span className="font-semibold">100% GOTS & RPET Certified</span>
        </div>

        <span className="hidden md:inline text-gray-600">•</span>

        {/* Creator Affiliate program link */}
        <button
          onClick={onOpenInfluencerHub}
          className="flex items-center gap-1.5 bg-gradient-to-r from-blue-900/60 to-purple-900/60 hover:from-blue-800 hover:to-purple-800 text-blue-200 hover:text-white px-2.5 py-0.5 rounded-full border border-blue-500/30 transition text-[11px] font-semibold"
        >
          <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
          <span>{t.creatorTag}: Code <strong>MKBHD15</strong> (15% OFF)</span>
        </button>
      </div>

      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-1 rounded transition"
        title="Dismiss announcement"
        aria-label="Dismiss announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
};
