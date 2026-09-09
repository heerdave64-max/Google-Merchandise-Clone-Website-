import React from 'react';
import { Home, Grid, ShoppingBag, Heart, Sparkles } from 'lucide-react';

interface MobileBottomNavProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenInfluencerHub: () => void;
  activeTab: 'home' | 'shop' | 'cart' | 'wishlist' | 'creators';
  onSelectTab: (tab: 'home' | 'shop' | 'cart' | 'wishlist' | 'creators') => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenInfluencerHub,
  activeTab,
  onSelectTab
}) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 flex justify-around py-2 z-40 shadow-lg select-none">
      {/* Home */}
      <button
        onClick={() => {
          onSelectTab('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center text-xs font-medium py-1 px-2.5 ${
          activeTab === 'home' ? 'text-blue-600 font-semibold' : 'text-gray-500 hover:text-blue-600'
        }`}
      >
        <Home className="w-5 h-5 mb-0.5" />
        <span>Home</span>
      </button>

      {/* Shop */}
      <button
        onClick={() => {
          onSelectTab('shop');
          const el = document.getElementById('products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className={`flex flex-col items-center text-xs font-medium py-1 px-2.5 ${
          activeTab === 'shop' ? 'text-blue-600 font-semibold' : 'text-gray-500 hover:text-blue-600'
        }`}
      >
        <Grid className="w-5 h-5 mb-0.5" />
        <span>Shop</span>
      </button>

      {/* Creators / Influencer Portal */}
      <button
        onClick={() => {
          onSelectTab('creators');
          onOpenInfluencerHub();
        }}
        className={`flex flex-col items-center text-xs font-medium py-1 px-2.5 ${
          activeTab === 'creators' ? 'text-indigo-600 font-bold' : 'text-gray-500 hover:text-indigo-600'
        }`}
      >
        <Sparkles className="w-5 h-5 mb-0.5 text-amber-500" />
        <span>Creators</span>
      </button>

      {/* Wishlist */}
      <button
        onClick={() => {
          onSelectTab('wishlist');
          onOpenWishlist();
        }}
        className={`flex flex-col items-center text-xs font-medium py-1 px-2.5 relative ${
          activeTab === 'wishlist' ? 'text-blue-600 font-semibold' : 'text-gray-500 hover:text-blue-600'
        }`}
      >
        <Heart className="w-5 h-5 mb-0.5" />
        <span>Saved</span>
        {wishlistCount > 0 && (
          <span className="absolute top-0.5 right-1.5 bg-red-500 text-white text-[9px] font-bold rounded-full h-3.5 w-3.5 flex items-center justify-center">
            {wishlistCount}
          </span>
        )}
      </button>

      {/* Cart */}
      <button
        onClick={() => {
          onSelectTab('cart');
          onOpenCart();
        }}
        className="flex flex-col items-center text-gray-500 hover:text-blue-600 text-xs font-medium py-1 px-2.5 relative cursor-pointer"
      >
        <ShoppingBag className="w-5 h-5 mb-0.5" />
        <span>Cart</span>
        {cartCount > 0 && (
          <span className="absolute top-0.5 right-1.5 bg-red-500 text-white text-[9px] font-bold rounded-full h-3.5 w-3.5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>
    </nav>
  );
};
