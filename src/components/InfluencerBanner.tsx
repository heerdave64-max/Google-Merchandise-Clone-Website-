import React from 'react';
import { Sparkles, X, Award, ExternalLink } from 'lucide-react';
import { CreatorAffiliate, LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/i18n';

interface InfluencerBannerProps {
  creator: CreatorAffiliate;
  onClearCreator: () => void;
  onOpenHub: () => void;
  lang: LanguageCode;
}

export const InfluencerBanner: React.FC<InfluencerBannerProps> = ({
  creator,
  onClearCreator,
  onOpenHub,
  lang
}) => {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <aside
      id="influencer-active-banner"
      aria-label="Active Creator Referral"
      className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-950 text-white py-2 px-4 shadow-sm border-b border-indigo-700/40"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <img
              src={creator.avatarUrl}
              alt={creator.name}
              className="w-7 h-7 rounded-full object-cover ring-2 ring-blue-400"
              referrerPolicy="no-referrer"
            />
            <span className="absolute -bottom-1 -right-1 bg-amber-400 text-gray-900 p-0.5 rounded-full" title="Verified Partner">
              <Award className="w-2.5 h-2.5" />
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <span className="bg-blue-500/30 text-blue-200 border border-blue-400/30 px-2 py-0.5 rounded-full font-bold text-[10px] tracking-wide">
              {t.creatorHub.activeSupporting}
            </span>
            <span className="font-semibold text-white">
              {creator.name} <span className="text-blue-200 font-normal">({creator.handle})</span>:
            </span>
            <span className="text-emerald-300 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              {creator.discountPercent}% OFF applied with code {creator.code}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={onOpenHub}
            className="flex items-center gap-1 text-blue-200 hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md transition font-semibold text-[11px]"
          >
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>{t.influencerPortalBtn}</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </button>

          <button
            onClick={onClearCreator}
            className="text-gray-300 hover:text-white p-1 hover:bg-white/10 rounded transition"
            title={t.creatorHub.removeCreator}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
