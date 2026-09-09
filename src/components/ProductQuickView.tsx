import React, { useState } from 'react';
import { X, Star, ShoppingBag, Check, Leaf } from 'lucide-react';
import { CurrencyCode, LanguageCode, Product } from '../types';
import { ProductVisual } from './ProductVisual';
import { formatCurrency } from '../data/currencies';
import { TRANSLATIONS } from '../data/i18n';

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size?: string, color?: string, quantity?: number) => void;
  currency: CurrencyCode;
  lang: LanguageCode;
}

export const ProductQuickView: React.FC<ProductQuickViewProps> = ({
  product,
  onClose,
  onAddToCart,
  currency,
  lang
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.sizes ? product.sizes[0] : undefined
  );
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product.colors ? product.colors[0].name : undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div
      id="product-quick-view-overlay"
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full p-5 sm:p-7 shadow-2xl relative animate-in zoom-in-95 duration-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition z-10"
          title="Close quick view"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Visual Side */}
          <div className="bg-gray-100 rounded-xl aspect-square flex items-center justify-center p-6 relative border border-gray-200/60">
            {product.badge && (
              <span className="absolute top-3 left-3 bg-gray-900 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                {product.badge}
              </span>
            )}
            <ProductVisual product={product} size="lg" />
          </div>

          {/* Info Side */}
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                {product.brand}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mt-1 leading-snug">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mt-2">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-xs font-bold text-gray-800">{product.rating}</span>
                <span className="text-xs text-gray-400">• {product.reviewsCount} reviews</span>
                {product.ecoCertified && (
                  <span className="ml-auto inline-flex items-center gap-1 text-[11px] text-green-700 bg-green-50 px-2 py-0.5 rounded font-medium border border-green-200">
                    <Leaf className="w-3 h-3 text-green-600" />
                    Eco-Certified
                  </span>
                )}
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-2.5">
              <span className="text-2xl font-extrabold text-gray-900">
                {formatCurrency(product.price, currency)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {formatCurrency(product.originalPrice, currency)}
                </span>
              )}
            </div>

            <p className="text-xs text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Features list */}
            {product.features && (
              <ul className="text-xs text-gray-600 space-y-1 bg-gray-50 p-3 rounded-lg border border-gray-100">
                {product.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Size Selector */}
            {product.sizes && (
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1.5">
                  Size: <span className="font-normal text-gray-500">{selectedSize}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition ${
                        selectedSize === s
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selector */}
            {product.colors && (
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1.5">
                  Color: <span className="font-normal text-gray-500">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-6 h-6 rounded-full border-2 transition-transform ${
                        selectedColor === c.name
                          ? 'ring-2 ring-blue-500 scale-110'
                          : 'hover:scale-105'
                      } ${c.bgClass}`}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart Actions */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-200 font-bold text-sm transition cursor-pointer"
                >
                  -
                </button>
                <span className="w-8 text-center text-xs font-bold text-gray-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-200 font-bold text-sm transition cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 font-bold py-2.5 px-4 rounded-xl text-xs transition shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                  added ? 'bg-green-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>{t.product.addedToBag}</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>
                      {t.product.addToBag} ({formatCurrency(product.price * quantity, currency)})
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
