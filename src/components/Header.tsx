import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, Search, X, Heart, Sparkles, Globe, DollarSign } from 'lucide-react';
import { CategoryFilter, CurrencyCode, LanguageCode, Product, CreatorAffiliate } from '../types';
import { ALL_CURRENCIES, formatCurrency } from '../data/currencies';
import { SUPPORTED_LANGUAGES, TRANSLATIONS } from '../data/i18n';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  activeCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
  onOpenCart: () => void;
  onOpenWishlist?: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  allProducts: Product[];
  onSelectProduct: (product: Product) => void;
  currency: CurrencyCode;
  onSelectCurrency: (c: CurrencyCode) => void;
  lang: LanguageCode;
  onSelectLang: (l: LanguageCode) => void;
  onOpenInfluencerHub: () => void;
  activeCreator: CreatorAffiliate | null;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  activeCategory,
  onSelectCategory,
  onOpenCart,
  onOpenWishlist,
  searchQuery,
  onSearchChange,
  allProducts,
  onSelectProduct,
  currency,
  onSelectCurrency,
  lang,
  onSelectLang,
  onOpenInfluencerHub,
  activeCreator
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: 'Hoodies', label: t.categories.hoodies },
    { key: 'T-Shirts', label: t.categories.tshirts },
    { key: 'YouTube Gear', label: t.categories.youtube },
    { key: 'Lifestyle', label: t.categories.lifestyle },
    { key: 'Stationery', label: t.categories.stationery },
    { key: 'Eco-Friendly', label: t.categories.ecoFriendly }
  ];

  // Quick suggestions based on searchQuery
  const searchSuggestions = searchQuery.trim()
    ? allProducts.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
      if (currencyRef.current && !currencyRef.current.contains(e.target as Node)) {
        setIsCurrencyOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (e: React.MouseEvent, cat: CategoryFilter) => {
    e.preventDefault();
    onSelectCategory(cat);
    const prodSection = document.getElementById('products');
    if (prodSection) {
      prodSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentLang = SUPPORTED_LANGUAGES.find(l => l.code === lang) || SUPPORTED_LANGUAGES[0];
  const currentCurr = ALL_CURRENCIES.find(c => c.code === currency) || ALL_CURRENCIES[0];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 gap-3 sm:gap-4">
          
          {/* Brand / Logo */}
          <div
            id="brand-logo"
            onClick={() => onSelectCategory('All')}
            className="flex items-center space-x-2 cursor-pointer select-none group shrink-0"
          >
            <div className="flex items-center tracking-tight text-2xl sm:text-3xl font-bold">
              <span className="text-blue-600 group-hover:scale-105 transition-transform inline-block">G</span>
              <span className="text-red-500 group-hover:scale-105 transition-transform inline-block">o</span>
              <span className="text-yellow-500 group-hover:scale-105 transition-transform inline-block">o</span>
              <span className="text-blue-600 group-hover:scale-105 transition-transform inline-block">g</span>
              <span className="text-green-600 group-hover:scale-105 transition-transform inline-block">l</span>
              <span className="text-red-500 group-hover:scale-105 transition-transform inline-block">e</span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-700 bg-gray-100 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-gray-200/80 shadow-xs">
              Merch
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-6 font-medium text-xs xl:text-sm text-gray-700">
            {categories.map(({ key, label }) => {
              const isActive = activeCategory === key;
              const isYouTube = key === 'YouTube Gear';
              const isEco = key === 'Eco-Friendly';

              let textColorClass = 'hover:text-blue-600 text-gray-600';
              if (isYouTube) textColorClass = 'hover:text-red-600 text-red-600 font-semibold';
              if (isEco) textColorClass = 'hover:text-green-600 text-green-700 font-semibold';
              if (isActive) textColorClass = 'text-blue-600 font-semibold';

              return (
                <a
                  key={key}
                  id={`nav-link-${key.toLowerCase().replace(/\s+/g, '-')}`}
                  href="#products"
                  onClick={(e) => handleNavClick(e, key)}
                  className={`relative py-1 transition-colors ${textColorClass} flex items-center gap-1`}
                >
                  <span>{label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Search Bar & Switchers & Actions */}
          <div className="flex items-center space-x-1.5 sm:space-x-2.5">
            
            {/* Search Input Container */}
            <div ref={searchRef} className="relative">
              <div className="relative">
                <input
                  id="search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    onSearchChange(e.target.value);
                    setIsSearchFocused(true);
                  }}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder={t.searchPlaceholder}
                  className="bg-gray-100 text-xs sm:text-sm rounded-full pl-8 sm:pl-9 pr-7 sm:pr-8 py-1.5 sm:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-32 sm:w-56 md:w-64 lg:w-60 xl:w-72 border border-transparent focus:bg-white transition shadow-2xs text-gray-800 placeholder-gray-400"
                />
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 absolute left-2.5 sm:left-3 top-2.5 text-gray-400 pointer-events-none" />
                
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="absolute right-2 sm:right-2.5 top-2 sm:top-2.5 text-gray-400 hover:text-gray-600"
                    title="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Instant Search Results Dropdown */}
              {isSearchFocused && searchQuery.trim().length > 0 && (
                <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-gray-200 py-3 z-50 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-4 pb-2 border-b border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                    <span>Matching "{searchQuery}"</span>
                    <span className="text-blue-600 font-semibold">{searchSuggestions.length} found</span>
                  </div>

                  {searchSuggestions.length > 0 ? (
                    <div className="divide-y divide-gray-100 max-h-72 overflow-y-auto">
                      {searchSuggestions.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => {
                            onSelectProduct(item);
                            setIsSearchFocused(false);
                          }}
                          className="px-4 py-2.5 hover:bg-blue-50/50 cursor-pointer flex items-center justify-between transition group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center p-1 shrink-0 border border-gray-200/60">
                              <span className="text-xs font-bold text-gray-500">{item.name.charAt(0)}</span>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-gray-800 group-hover:text-blue-600 line-clamp-1">
                                {item.name}
                              </p>
                              <span className="text-[10px] text-gray-500">{item.brand}</span>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-gray-900 shrink-0 ml-2">
                            {formatCurrency(item.price, currency)}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-xs text-gray-500">
                      {t.sections.noProductsFound}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Currency Selector */}
            <div ref={currencyRef} className="relative">
              <button
                id="currency-switcher-btn"
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-xs font-bold text-gray-700 transition"
                title="Change Currency"
              >
                <span>{currentCurr.flag}</span>
                <span>{currentCurr.code}</span>
                <span className="text-gray-400 font-normal">({currentCurr.symbol})</span>
              </button>

              {isCurrencyOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-44 bg-white rounded-xl shadow-xl border border-gray-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100">
                    Select Currency
                  </div>
                  {ALL_CURRENCIES.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        onSelectCurrency(c.code);
                        setIsCurrencyOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between transition ${
                        currency === c.code
                          ? 'bg-blue-50 text-blue-700 font-bold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{c.flag}</span>
                        <span>{c.code}</span>
                      </div>
                      <span className="font-semibold text-gray-500">{c.symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Selector */}
            <div ref={langRef} className="relative hidden sm:block">
              <button
                id="language-switcher-btn"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-xs font-medium text-gray-700 transition"
                title="Change Language"
              >
                <span>{currentLang.flag}</span>
                <span className="hidden md:inline font-semibold">{currentLang.nativeName}</span>
                <Globe className="w-3.5 h-3.5 text-gray-400" />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100">
                    Choose Language
                  </div>
                  {SUPPORTED_LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        onSelectLang(l.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between transition ${
                        lang === l.code
                          ? 'bg-blue-50 text-blue-700 font-bold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{l.flag}</span>
                        <span>{l.nativeName}</span>
                      </div>
                      <span className="text-[10px] text-gray-400">{l.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Influencer / Creator Hub Button */}
            <button
              id="creator-hub-btn"
              onClick={onOpenInfluencerHub}
              className="flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-2.5 sm:px-3 py-1.5 rounded-lg shadow-2xs transition text-xs font-bold"
              title="Creator Partner & Affiliate Hub"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden md:inline">Creators</span>
              {activeCreator && (
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              )}
            </button>

            {/* Wishlist Button */}
            {onOpenWishlist && (
              <button
                id="wishlist-btn"
                onClick={onOpenWishlist}
                className="relative p-2 text-gray-600 hover:text-red-500 rounded-full hover:bg-gray-100 transition hidden sm:flex items-center justify-center"
                title="Saved Items"
                aria-label="Wishlist"
              >
                <Heart className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 bg-red-500 text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-xs">
                    {wishlistCount}
                  </span>
                )}
              </button>
            )}

            {/* Cart Icon Trigger */}
            <button
              id="cart-btn"
              onClick={onOpenCart}
              className="relative p-2 text-gray-700 hover:text-blue-600 rounded-full hover:bg-gray-100 transition flex items-center justify-center group"
              title="Shopping Cart"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform group-hover:scale-105" />
              {cartCount > 0 && (
                <span
                  id="cart-badge"
                  className="absolute top-0.5 right-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full h-4.5 w-4.5 min-w-[18px] flex items-center justify-center shadow-xs ring-2 ring-white animate-in zoom-in-50 duration-200"
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
