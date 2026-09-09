import React, { useState } from 'react';
import { Heart, Eye, Check, Star, ShoppingBag } from 'lucide-react';
import { CurrencyCode, LanguageCode, Product } from '../types';
import { ProductVisual } from './ProductVisual';
import { formatCurrency } from '../data/currencies';
import { TRANSLATIONS } from '../data/i18n';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size?: string, color?: string) => void;
  onQuickView: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  currency: CurrencyCode;
  lang: LanguageCode;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
  isWishlisted,
  onToggleWishlist,
  currency,
  lang
}) => {
  const [justAdded, setJustAdded] = useState(false);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultSize = product.sizes ? product.sizes[0] : undefined;
    const defaultColor = product.colors ? product.colors[0].name : undefined;
    onAddToCart(product, defaultSize, defaultColor);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  const getBadgeColor = (badge?: string) => {
    switch (badge) {
      case 'Eco-Organic':
        return 'bg-green-600 text-white';
      case 'Top Rated':
        return 'bg-red-600 text-white';
      case 'Staff Pick':
        return 'bg-amber-600 text-white';
      case 'New':
        return 'bg-blue-600 text-white';
      case 'Member Exclusive':
        return 'bg-purple-600 text-white';
      case 'Creator Pick':
        return 'bg-indigo-600 text-white';
      default:
        return 'bg-gray-800 text-white';
    }
  };

  return (
    <div
      id={`product-card-${product.id}`}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col justify-between relative"
    >
      <div>
        {/* Visual Showcase Box */}
        <div
          onClick={() => onQuickView(product)}
          className="relative bg-gray-100 aspect-square flex items-center justify-center overflow-hidden cursor-pointer group-hover:bg-gray-50 transition-colors"
        >
          {/* Top-Left Badge */}
          {product.badge && (
            <span
              className={`absolute top-2.5 left-2.5 ${getBadgeColor(
                product.badge
              )} text-[10px] font-bold px-2 py-0.5 rounded shadow-xs z-10`}
            >
              {product.badge}
            </span>
          )}

          {/* Top-Right Wishlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            className="absolute top-2.5 right-2.5 p-1.5 bg-white/90 backdrop-blur-xs rounded-full text-gray-500 hover:text-red-500 hover:bg-white shadow-xs z-10 transition-colors"
            title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            aria-label="Wishlist toggle"
          >
            <Heart
              className={`w-4 h-4 ${
                isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'
              }`}
            />
          </button>

          {/* Centered Graphic */}
          <ProductVisual product={product} size="md" />

          {/* Quick View Overlay Button on Hover */}
          <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="bg-white text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 pointer-events-auto transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Eye className="w-3.5 h-3.5 text-gray-600" />
              <span>{t.product.quickView}</span>
            </span>
          </div>
        </div>

        {/* Product Meta */}
        <div className="p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
              {product.brand}
            </p>
            {/* Rating */}
            <div className="flex items-center gap-0.5 text-xs text-amber-500 font-semibold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="text-gray-700 text-[11px]">{product.rating}</span>
              <span className="text-gray-400 text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          <h3
            onClick={() => onQuickView(product)}
            className="font-bold text-gray-800 text-xs sm:text-sm mt-1 line-clamp-2 hover:text-blue-600 cursor-pointer transition-colors min-h-[32px] sm:min-h-[40px]"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Price & Optional Original Price */}
          <div className="flex items-baseline gap-2 mt-2">
            <p className="text-gray-900 font-extrabold text-sm sm:text-base">
              {formatCurrency(product.price, currency)}
            </p>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                {formatCurrency(product.originalPrice, currency)}
              </span>
            )}
            {product.originalPrice && (
              <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                Save {formatCurrency(product.originalPrice - product.price, currency)}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-3 sm:p-4 pt-0">
        <button
          id={`add-to-cart-${product.id}`}
          onClick={handleAdd}
          className={`w-full font-medium py-2 rounded-lg text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer active:scale-98 ${
            justAdded
              ? 'bg-green-600 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {justAdded ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>{t.product.addedToBag}</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{t.product.addToBag}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
