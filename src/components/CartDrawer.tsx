import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, Lock, ShoppingBag, ArrowRight, Zap, Check, Tag, Sparkles } from 'lucide-react';
import { CartItem, CurrencyCode, LanguageCode, CreatorAffiliate } from '../types';
import { ProductVisual } from './ProductVisual';
import { formatCurrency } from '../data/currencies';
import { TRANSLATIONS } from '../data/i18n';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQuantity: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onProceedToCheckout: () => void;
  discountCode: string;
  discountPercent: number;
  onApplyDiscount: (code: string) => { success: boolean; message: string; creator?: CreatorAffiliate };
  onRemoveDiscount: () => void;
  currency: CurrencyCode;
  lang: LanguageCode;
  activeCreator: CreatorAffiliate | null;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  discountCode,
  discountPercent,
  onApplyDiscount,
  onRemoveDiscount,
  currency,
  lang,
  activeCreator
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  if (!isOpen) return null;

  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const subtotalAfterDiscount = subtotal - discountAmount;
  const freeShippingThreshold = 50.00;
  const isFreeShipping = subtotalAfterDiscount >= freeShippingThreshold;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotalAfterDiscount);
  const shippingProgress = Math.min(100, Math.round((subtotalAfterDiscount / freeShippingThreshold) * 100));
  const shippingCost = isFreeShipping || items.length === 0 ? 0.00 : 5.99;
  const estimatedTax = subtotalAfterDiscount * 0.0825; // 8.25%
  const total = subtotalAfterDiscount + shippingCost + estimatedTax;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = onApplyDiscount(promoInput.trim());
    if (res.success) {
      setPromoMessage({ type: 'success', text: res.message });
      setPromoInput('');
    } else {
      setPromoMessage({ type: 'error', text: res.message });
    }
  };

  return (
    <div
      id="cart-drawer"
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex justify-end transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300 relative z-50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Header */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/70">
          <div className="flex items-center space-x-2.5">
            <ShoppingBag className="w-5 h-5 text-blue-600" />
            <h3 className="text-base sm:text-lg font-bold text-gray-900">
              {t.cart.title}
            </h3>
            <span
              id="cart-drawer-count"
              className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded-full"
            >
              {totalItemCount}
            </span>
          </div>
          <button
            id="cart-close-btn"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-1.5 rounded-full transition cursor-pointer"
            title="Close cart"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Notification & Meter */}
        <div className="px-4 sm:px-5 py-3 bg-blue-50/60 border-b border-blue-100/60 text-xs">
          <div className="flex items-center justify-between font-semibold mb-1.5">
            {isFreeShipping ? (
              <span className="text-green-700 flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-green-600" />
                <span>{t.cart.unlockedFreeShipping}</span>
              </span>
            ) : (
              <span className="text-blue-900 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-yellow-600" />
                <span>
                  {t.cart.addMoreForFree.replace(
                    '${amount}',
                    formatCurrency(remainingForFreeShipping, currency)
                  )}
                </span>
              </span>
            )}
            <span className="text-gray-500 font-mono text-[11px]">{shippingProgress}%</span>
          </div>

          <div className="w-full bg-blue-200/60 rounded-full h-1.5 overflow-hidden">
            <div
              className={`h-full transition-all duration-300 rounded-full ${
                isFreeShipping ? 'bg-green-600' : 'bg-blue-600'
              }`}
              style={{ width: `${shippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div
          id="cart-items"
          className="flex-1 p-4 sm:p-5 overflow-y-auto divide-y divide-gray-100 space-y-4"
        >
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-4">
                <ShoppingBag className="w-8 h-8 stroke-1" />
              </div>
              <h4 className="text-base font-bold text-gray-800 mb-1">
                {t.cart.empty}
              </h4>
              <p className="text-xs text-gray-500 max-w-xs mb-6">
                {t.cart.emptyDesc}
              </p>
              <button
                onClick={onClose}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>{t.cart.browseProducts}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="pt-4 first:pt-0 flex items-start justify-between gap-3 group"
              >
                {/* Visual Thumbnail */}
                <div className="w-16 h-16 rounded-lg bg-gray-100 p-1 flex items-center justify-center shrink-0 border border-gray-200/70 overflow-hidden">
                  <ProductVisual product={item.product} size="sm" />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-gray-800 line-clamp-1">
                    {item.product.name}
                  </p>
                  
                  {/* Variant info */}
                  <div className="flex flex-wrap items-center gap-x-2 text-xs text-gray-500 mt-0.5">
                    {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                    {item.selectedSize && item.selectedColor && <span>•</span>}
                    {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                    {!item.selectedSize && !item.selectedColor && (
                      <span>{item.product.brand}</span>
                    )}
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-3 mt-2.5">
                    <div className="inline-flex items-center border border-gray-200 rounded-md bg-gray-50 overflow-hidden shadow-2xs">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-200 text-gray-600 transition"
                        title="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center font-bold text-xs text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-200 text-gray-600 transition"
                        title="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500 text-xs flex items-center gap-1 transition"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span className="text-[11px] hidden sm:inline">Remove</span>
                    </button>
                  </div>
                </div>

                {/* Line total price */}
                <div className="text-right shrink-0">
                  <p className="font-extrabold text-sm text-gray-900">
                    {formatCurrency(item.product.price * item.quantity, currency)}
                  </p>
                  {item.quantity > 1 && (
                    <span className="text-[10px] text-gray-400 block">
                      {formatCurrency(item.product.price, currency)} ea
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer / Subtotal & Checkout */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-4 sm:p-5 space-y-3 bg-gray-50/50">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="space-y-1">
              {discountPercent > 0 ? (
                <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                    {activeCreator ? (
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Tag className="w-3.5 h-3.5 text-emerald-600" />
                    )}
                    <span>
                      {activeCreator ? (
                        <>
                          Creator <strong>{activeCreator.name}</strong> ({activeCreator.code}) - {discountPercent}% OFF
                        </>
                      ) : (
                        <>
                          Code <strong>{discountCode}</strong> ({discountPercent}% OFF)
                        </>
                      )}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={onRemoveDiscount}
                    className="text-gray-400 hover:text-red-500 text-xs font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                    placeholder="Discount or Creator Code (e.g. MKBHD15)"
                    className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase tracking-wider"
                  />
                  <button
                    type="submit"
                    className="bg-gray-800 hover:bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition cursor-pointer"
                  >
                    {t.cart.apply}
                  </button>
                </div>
              )}
              {promoMessage && (
                <p className={`text-[11px] ${promoMessage.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {promoMessage.text}
                </p>
              )}
            </form>

            {/* Price Calculations */}
            <div className="space-y-1 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>{t.cart.subtotal}:</span>
                <span id="cart-subtotal" className="font-semibold text-gray-900">
                  {formatCurrency(subtotal, currency)}
                </span>
              </div>

              {discountPercent > 0 && (
                <div className="flex justify-between text-green-600 font-semibold">
                  <span>{t.cart.discount} ({discountPercent}%):</span>
                  <span>-{formatCurrency(discountAmount, currency)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>{t.cart.shipping}:</span>
                <span className={shippingCost === 0 ? 'text-green-600 font-bold' : 'text-gray-800'}>
                  {shippingCost === 0 ? t.cart.freeShipping : formatCurrency(shippingCost, currency)}
                </span>
              </div>

              <div className="flex justify-between">
                <span>{t.cart.estimatedTax}:</span>
                <span className="text-gray-800">{formatCurrency(estimatedTax, currency)}</span>
              </div>

              <div className="flex justify-between items-center font-extrabold text-base text-gray-900 pt-2 border-t border-gray-200">
                <span>{t.cart.total}:</span>
                <span className="text-lg text-blue-600">{formatCurrency(total, currency)}</span>
              </div>
            </div>

            {/* Express Checkout Button */}
            <button
              id="express-checkout-btn"
              onClick={onProceedToCheckout}
              className="w-full bg-green-600 hover:bg-green-700 active:scale-98 text-white font-bold py-3.5 rounded-xl transition shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
            >
              <Lock className="w-4 h-4 text-green-100" />
              <span>{t.cart.checkout}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
