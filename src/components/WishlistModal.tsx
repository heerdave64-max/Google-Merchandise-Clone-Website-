import React from 'react';
import { X, Trash2, ShoppingBag, Heart } from 'lucide-react';
import { CurrencyCode, LanguageCode, Product } from '../types';
import { ProductVisual } from './ProductVisual';
import { formatCurrency } from '../data/currencies';
import { TRANSLATIONS } from '../data/i18n';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Product[];
  onRemoveWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  currency: CurrencyCode;
  lang: LanguageCode;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlist,
  onRemoveWishlist,
  onAddToCart,
  currency,
  lang
}) => {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  if (!isOpen) return null;

  return (
    <div
      id="wishlist-modal-overlay"
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            <h3 className="text-lg font-bold text-gray-900">Saved Items ({wishlist.length})</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 max-h-[60vh] overflow-y-auto divide-y divide-gray-100 space-y-3">
          {wishlist.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              <Heart className="w-12 h-12 text-gray-300 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-700">No saved items yet</p>
              <p className="text-xs text-gray-400 mt-1">
                Tap the heart icon on any product card to save it for later.
              </p>
            </div>
          ) : (
            wishlist.map((item) => (
              <div key={item.id} className="pt-3 first:pt-0 flex items-center justify-between gap-3">
                <div className="w-14 h-14 bg-gray-100 rounded-lg p-1 flex items-center justify-center shrink-0 border border-gray-200/60">
                  <ProductVisual product={item} size="sm" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-gray-800 line-clamp-1">{item.name}</p>
                  <p className="text-[11px] text-gray-500">{item.brand}</p>
                  <p className="text-xs font-extrabold text-gray-900 mt-0.5">
                    {formatCurrency(item.price, currency)}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      onAddToCart(item);
                      onRemoveWishlist(item);
                    }}
                    className="p-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-xs font-semibold flex items-center gap-1 transition"
                    title="Move to bag"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span className="hidden sm:inline">{t.product.addToBag}</span>
                  </button>

                  <button
                    onClick={() => onRemoveWishlist(item)}
                    className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-gray-50 transition"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-end">
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
