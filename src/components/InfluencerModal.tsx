import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Award,
  Copy,
  Check,
  TrendingUp,
  DollarSign,
  Users,
  ShoppingBag,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Wallet
} from 'lucide-react';
import { CreatorAffiliate, CurrencyCode, LanguageCode, Product } from '../types';
import { FEATURED_CREATORS } from '../data/creators';
import { formatCurrency } from '../data/currencies';
import { TRANSLATIONS } from '../data/i18n';
import { ProductVisual } from './ProductVisual';

interface InfluencerModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeCreator: CreatorAffiliate | null;
  onApplyCreator: (creator: CreatorAffiliate) => void;
  onClearCreator: () => void;
  currency: CurrencyCode;
  lang: LanguageCode;
  allProducts: Product[];
  onQuickViewProduct: (product: Product) => void;
}

export const InfluencerModal: React.FC<InfluencerModalProps> = ({
  isOpen,
  onClose,
  activeCreator,
  onApplyCreator,
  onClearCreator,
  currency,
  lang,
  allProducts,
  onQuickViewProduct
}) => {
  const [activeTab, setActiveTab] = useState<'fans' | 'creators'>('fans');
  const [customHandle, setCustomHandle] = useState('@mycreativechannel');
  const [customCode, setCustomCode] = useState('CREATOR15');
  const [isCopied, setIsCopied] = useState(false);
  const [payoutSuccess, setPayoutSuccess] = useState(false);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  if (!isOpen) return null;

  const handleCopyLink = () => {
    const url = `https://store.google.com/merchandise?ref=${customCode}`;
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2400);
  };

  const handleSimulatePayout = () => {
    setPayoutSuccess(true);
    setTimeout(() => setPayoutSuccess(false), 4500);
  };

  return (
    <div
      id="influencer-modal-overlay"
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full p-5 sm:p-7 shadow-2xl relative animate-in zoom-in-95 duration-200 my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-gray-100 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                {t.creatorHub.title}
              </h3>
            </div>
            <p className="text-xs text-gray-500 mt-1 max-w-xl">
              {t.creatorHub.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mt-4 shrink-0">
          <button
            onClick={() => setActiveTab('fans')}
            className={`flex-1 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition flex items-center justify-center gap-2 ${
              activeTab === 'fans'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>{t.creatorHub.tabFan}</span>
          </button>
          <button
            onClick={() => setActiveTab('creators')}
            className={`flex-1 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition flex items-center justify-center gap-2 ${
              activeTab === 'creators'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>{t.creatorHub.tabCreator}</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-4 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'fans' ? (
            /* TAB 1: Fans & Community Storefronts */
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-3.5 flex items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-bold text-blue-900 block sm:inline">
                    💡 Creator Partner Guarantee:
                  </span>{' '}
                  <span className="text-blue-800">
                    Applying any creator's referral code automatically grants you their exclusive fan discount on all eligible items.
                  </span>
                </div>
                {activeCreator && (
                  <button
                    onClick={onClearCreator}
                    className="shrink-0 bg-white hover:bg-gray-50 text-red-600 border border-red-200 px-3 py-1 rounded-lg font-semibold text-[11px] transition shadow-2xs"
                  >
                    {t.creatorHub.removeCreator}
                  </button>
                )}
              </div>

              {/* Creator Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FEATURED_CREATORS.map((creator) => {
                  const isSelected = activeCreator?.code === creator.code;
                  const faveProducts = allProducts.filter((p) =>
                    creator.featuredProductIds.includes(p.id)
                  );

                  return (
                    <div
                      key={creator.id}
                      className={`border rounded-xl p-4 transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/40 ring-2 ring-blue-500/20 shadow-sm'
                          : 'border-gray-200 bg-white hover:border-gray-300 shadow-2xs'
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={creator.avatarUrl}
                              alt={creator.name}
                              className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100 shadow-2xs"
                              referrerPolicy="no-referrer"
                            />
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h4 className="font-bold text-gray-900 text-sm">{creator.name}</h4>
                                <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-1.5 py-0.2 rounded">
                                  Verified
                                </span>
                              </div>
                              <p className="text-xs text-gray-500">{creator.handle}</p>
                            </div>
                          </div>

                          <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 font-extrabold text-xs px-2.5 py-1 rounded-lg">
                            {creator.discountPercent}% OFF
                          </span>
                        </div>

                        <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                          {creator.bio}
                        </p>

                        {/* Curated Products preview */}
                        {faveProducts.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <p className="text-[11px] font-semibold text-gray-500 mb-2">
                              {creator.name.split(' ')[0]}'s Top Merch Picks:
                            </p>
                            <div className="flex items-center gap-2 overflow-x-auto pb-1">
                              {faveProducts.map((p) => (
                                <button
                                  key={p.id}
                                  onClick={() => {
                                    onQuickViewProduct(p);
                                    onClose();
                                  }}
                                  className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 p-1 flex items-center justify-center shrink-0 hover:border-blue-500 transition group"
                                  title={`View ${p.name}`}
                                >
                                  <ProductVisual product={p} size="sm" />
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                        <div className="text-xs">
                          <span className="text-gray-400">Code:</span>{' '}
                          <code className="bg-gray-100 text-gray-800 font-bold px-1.5 py-0.5 rounded border border-gray-200">
                            {creator.code}
                          </code>
                        </div>

                        {isSelected ? (
                          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" />
                            <span>{t.creatorHub.applied}</span>
                          </span>
                        ) : (
                          <button
                            onClick={() => onApplyCreator(creator)}
                            className="bg-gray-900 hover:bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition flex items-center gap-1 shadow-2xs"
                          >
                            <span>{t.creatorHub.applyCreatorCode}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* TAB 2: Creator Dashboard & Earnings */
            <div className="space-y-6">
              {/* Creator Referral Link Generator */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-5">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span>{t.creatorHub.yourRefLink}</span>
                  </h4>
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                    Tier 1: 10% Cash Commission
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-[11px] font-semibold text-gray-600 block mb-1">
                      Your Creator Handle / Channel
                    </label>
                    <input
                      type="text"
                      value={customHandle}
                      onChange={(e) => setCustomHandle(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-gray-600 block mb-1">
                      Custom Fan Referral Code
                    </label>
                    <input
                      type="text"
                      value={customCode}
                      onChange={(e) => setCustomCode(e.target.value.toUpperCase())}
                      className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-xs font-mono font-bold text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-2">
                  <div className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs font-mono text-gray-600 truncate">
                    https://store.google.com/merchandise?ref={customCode}
                  </div>
                  <button
                    onClick={handleCopyLink}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition flex items-center justify-center gap-1.5 shadow-2xs shrink-0"
                  >
                    {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{isCopied ? t.creatorHub.copied : t.creatorHub.copyLink}</span>
                  </button>
                  <button
                    onClick={() => {
                      const tempCreator: CreatorAffiliate = {
                        id: 'custom-creator',
                        name: customHandle.replace('@', ''),
                        handle: customHandle,
                        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
                        bio: 'Custom creator affiliate partnership.',
                        code: customCode,
                        discountPercent: 15,
                        commissionPercent: 10,
                        totalReferrals: 0,
                        totalSalesVolumeUSD: 0,
                        earningsUSD: 0,
                        featuredProductIds: []
                      };
                      onApplyCreator(tempCreator);
                    }}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-3 py-2 rounded-lg transition flex items-center justify-center gap-1 shrink-0"
                  >
                    <span>{t.creatorHub.testInCart}</span>
                  </button>
                </div>
              </div>

              {/* Real-time Earnings in Selected Currency */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    <span>{t.creatorHub.dashboardTitle}</span>
                  </h4>
                  <span className="text-xs text-gray-500">
                    Live currency conversion: <strong className="text-gray-800">{currency}</strong>
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-white border border-gray-200 rounded-xl p-3.5 shadow-2xs">
                    <p className="text-[11px] font-semibold text-gray-500">{t.creatorHub.metricClicks}</p>
                    <p className="text-xl font-extrabold text-gray-900 mt-1">14,280</p>
                    <span className="text-[10px] text-emerald-600 font-bold">↑ 18% this month</span>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-3.5 shadow-2xs">
                    <p className="text-[11px] font-semibold text-gray-500">{t.creatorHub.metricOrders}</p>
                    <p className="text-xl font-extrabold text-gray-900 mt-1">384</p>
                    <span className="text-[10px] text-emerald-600 font-bold">2.69% conversion</span>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-3.5 shadow-2xs">
                    <p className="text-[11px] font-semibold text-gray-500">{t.creatorHub.metricSales}</p>
                    <p className="text-xl font-extrabold text-gray-900 mt-1">
                      {formatCurrency(58420, currency)}
                    </p>
                    <span className="text-[10px] text-gray-400">Total fan merchandise</span>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 shadow-2xs">
                    <p className="text-[11px] font-semibold text-emerald-800">{t.creatorHub.metricEarnings}</p>
                    <p className="text-xl font-extrabold text-emerald-700 mt-1">
                      {formatCurrency(5842, currency)}
                    </p>
                    <span className="text-[10px] text-emerald-800 font-bold">Available Payout</span>
                  </div>
                </div>

                {/* Instant Payout Action */}
                <div className="mt-4 bg-white border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Wallet className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Direct Deposit Ready</p>
                      <p className="text-[11px] text-gray-500">
                        Payout balance of {formatCurrency(5842, currency)} is verified for instant transfer.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleSimulatePayout}
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition shadow-2xs flex items-center justify-center gap-2"
                  >
                    <DollarSign className="w-4 h-4" />
                    <span>{t.creatorHub.requestPayout}</span>
                  </button>
                </div>

                {/* Payout Success Notice */}
                {payoutSuccess && (
                  <div className="mt-3 p-3.5 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-xl text-xs flex items-center gap-2.5 animate-in slide-in-from-bottom-2">
                    <Check className="w-5 h-5 text-emerald-700 shrink-0" />
                    <div>
                      <p className="font-bold">{t.creatorHub.payoutModalTitle}</p>
                      <p className="text-[11px] text-emerald-800">{t.creatorHub.payoutSuccess}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-gray-100 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold px-4 py-2 rounded-lg transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
