import React, { useState } from 'react';
import { X, Lock, CheckCircle2, Truck, CreditCard } from 'lucide-react';
import { CartItem, CreatorAffiliate, CurrencyCode, LanguageCode, OrderConfirmation } from '../types';
import { formatCurrency } from '../data/currencies';
import { TRANSLATIONS } from '../data/i18n';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
  onOrderCompleted: (order: OrderConfirmation) => void;
  currency: CurrencyCode;
  lang: LanguageCode;
  activeCreator?: CreatorAffiliate | null;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  subtotal,
  discount,
  shipping,
  tax,
  total,
  onOrderCompleted,
  currency,
  lang,
  activeCreator
}) => {
  const [step, setStep] = useState<'details' | 'processing' | 'success'>('details');
  const [, setPaymentMethod] = useState<'gpay' | 'card'>('gpay');
  const [completedOrder, setCompletedOrder] = useState<OrderConfirmation | null>(null);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const [formData, setFormData] = useState({
    fullName: 'Alex Miller',
    email: 'alex.miller@example.com',
    address: '1600 Amphitheatre Pkwy',
    city: 'Mountain View',
    zip: '94043',
    country: 'United States',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '12/28',
    cardCvc: '•••'
  });

  if (!isOpen) return null;

  const handlePlaceOrder = (method: 'gpay' | 'card') => {
    setPaymentMethod(method);
    setStep('processing');

    setTimeout(() => {
      const order: OrderConfirmation = {
        orderId: `G-MERCH-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }),
        items: [...items],
        subtotal,
        discount,
        shipping,
        tax,
        total,
        currency,
        creatorAffiliate: activeCreator
          ? {
              name: activeCreator.name,
              code: activeCreator.code,
              discountPercent: activeCreator.discountPercent
            }
          : undefined,
        customer: {
          fullName: formData.fullName,
          email: formData.email,
          address: formData.address,
          city: formData.city,
          zip: formData.zip,
          country: formData.country
        },
        paymentMethod: method
      };
      setCompletedOrder(order);
      setStep('success');
      onOrderCompleted(order);
    }, 1200);
  };

  return (
    <div
      id="checkout-modal-overlay"
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition"
          title="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1: Details & Payment */}
        {step === 'details' && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{t.checkout.title}</h3>
                <p className="text-xs text-gray-500">Official Google Merchandise Store</p>
              </div>
            </div>

            {/* Instant Google Pay 1-Click Button */}
            <div className="mb-6 bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500 font-medium mb-2.5">{t.checkout.instantPay}</p>
              <button
                id="gpay-instant-btn"
                onClick={() => handlePlaceOrder('gpay')}
                className="w-full bg-black hover:bg-gray-900 active:scale-98 text-white font-semibold py-3 px-4 rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span className="text-sm font-medium">Buy with</span>
                <span className="font-bold tracking-tight text-base flex items-center">
                  <span className="text-blue-400">G</span>
                  <span className="text-red-400">o</span>
                  <span className="text-yellow-400">o</span>
                  <span className="text-blue-400">g</span>
                  <span className="text-green-400">l</span>
                  <span className="text-red-400">e</span>
                  <span className="ml-1 text-white font-normal">Pay</span>
                </span>
              </button>
            </div>

            <div className="relative flex py-2 items-center mb-5">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-3 text-xs text-gray-400 uppercase tracking-wider font-semibold">
                Or enter details
              </span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* Shipping Address Form */}
            <div className="space-y-3.5 mb-6">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                {t.checkout.shippingAddress}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <input
                type="text"
                placeholder="Street Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="grid grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="ZIP / Postal"
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Order Summary Line */}
            <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 mb-6 flex justify-between items-center text-xs">
              <div>
                <span className="text-gray-500">{items.length} items in cart</span>
                <span className="font-semibold text-gray-800 ml-2">
                  • Express ({shipping === 0 ? 'Free' : formatCurrency(shipping, currency)})
                </span>
              </div>
              <span className="font-extrabold text-base text-gray-900">
                {formatCurrency(total, currency)}
              </span>
            </div>

            {/* Standard Complete Order Button */}
            <button
              id="complete-order-btn"
              onClick={() => handlePlaceOrder('card')}
              className="w-full bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-bold py-3.5 rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <CreditCard className="w-4 h-4" />
              <span>
                {t.checkout.completeOrder} ({formatCurrency(total, currency)})
              </span>
            </button>
          </div>
        )}

        {/* STEP 2: Processing */}
        {step === 'processing' && (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin mb-6"></div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Authorizing Secure Payment...</h3>
            <p className="text-xs text-gray-500">Connecting with Payment Gateway in {currency}</p>
          </div>
        )}

        {/* STEP 3: Order Confirmation */}
        {step === 'success' && completedOrder && (
          <div className="text-center py-4 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="text-[11px] font-bold uppercase tracking-wider text-green-700 bg-green-50 px-2.5 py-0.5 rounded-full border border-green-200">
              Payment Successful
            </span>

            <h3 className="text-2xl font-extrabold text-gray-900 mt-2 mb-1">
              {t.checkout.thankYou}
            </h3>

            <p className="text-xs text-gray-500 max-w-sm mx-auto mb-6">
              {t.checkout.orderConfirmed} <strong>{completedOrder.customer.email}</strong>.
            </p>

            {/* Order Details Receipt Box */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-left space-y-3 mb-6 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-500">Order Number:</span>
                <span className="font-mono font-bold text-gray-900">{completedOrder.orderId}</span>
              </div>

              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-500">Estimated Delivery:</span>
                <span className="font-bold text-green-700 flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" />
                  <span>3-5 Business Days (Express)</span>
                </span>
              </div>

              <div className="space-y-1.5 py-1">
                {completedOrder.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-gray-700">
                    <span className="line-clamp-1">{item.quantity}x {item.product.name}</span>
                    <span className="font-semibold shrink-0 ml-2">
                      {formatCurrency(item.product.price * item.quantity, currency)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-gray-200 flex justify-between items-center font-bold text-sm text-gray-900">
                <span>Total Paid:</span>
                <span className="text-blue-600">{formatCurrency(completedOrder.total, currency)}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-3 rounded-xl transition shadow-md cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
