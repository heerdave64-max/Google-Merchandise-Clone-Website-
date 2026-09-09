import React, { useState, useMemo, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { InfluencerBanner } from './components/InfluencerBanner';
import { Hero } from './components/Hero';
import { CategoryPills } from './components/CategoryPills';
import { CategoryShowcase } from './components/CategoryShowcase';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductQuickView } from './components/ProductQuickView';
import { WishlistModal } from './components/WishlistModal';
import { InfluencerModal } from './components/InfluencerModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { INITIAL_PRODUCTS } from './data/products';
import { findCreatorByCode } from './data/creators';
import { TRANSLATIONS } from './data/i18n';
import {
  Product,
  CartItem,
  CategoryFilter,
  BrandFilter,
  SortOption,
  OrderConfirmation,
  CurrencyCode,
  LanguageCode,
  CreatorAffiliate
} from './types';
import { SlidersHorizontal, CheckCircle, ArrowUpDown, ArrowLeft, Sparkles } from 'lucide-react';
import {
  trackAddToCart,
  trackRemoveFromCart,
  trackViewItem,
  trackBeginCheckout,
  trackPurchase,
  trackPageView
} from './utils/analytics';

export default function App() {
  // Localization & Currency State
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const [lang, setLang] = useState<LanguageCode>('en');

  // Creator Affiliate Partner State
  const [activeCreator, setActiveCreator] = useState<CreatorAffiliate | null>(null);
  const [isInfluencerModalOpen, setIsInfluencerModalOpen] = useState(false);

  // Products state
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);

  // Cart seeded items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'prod-hoodie-05-L-Cloud Grey',
      productId: 'prod-hoodie-05',
      product: INITIAL_PRODUCTS[0],
      quantity: 1,
      selectedSize: 'L',
      selectedColor: 'Cloud Grey'
    },
    {
      id: 'prod-bottle-02-Matte Black',
      productId: 'prod-bottle-02',
      product: INITIAL_PRODUCTS.find(p => p.id === 'prod-bottle-02') || INITIAL_PRODUCTS[1],
      quantity: 1,
      selectedColor: 'Matte Black'
    }
  ]);

  // Wishlist state
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Navigation & Filter state
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedBrand, setSelectedBrand] = useState<BrandFilter>('All Merch');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [mobileTab, setMobileTab] = useState<'home' | 'shop' | 'cart' | 'wishlist' | 'creators'>('home');

  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const handleOpenQuickView = (product: Product) => {
    trackViewItem(product, currency);
    setQuickViewProduct(product);
  };

  // Discount & Promo state
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  // Check URL query parameters on initial load (e.g. ?ref=MKBHD15)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const refCode = params.get('ref');
      if (refCode) {
        const found = findCreatorByCode(refCode);
        if (found) {
          setActiveCreator(found);
          setDiscountCode(found.code);
          setDiscountPercent(found.discountPercent);
          showToast(`Applied ${found.name}'s referral code (${found.discountPercent}% OFF)`);
        }
      }
      const langParam = params.get('lang') as LanguageCode;
      if (langParam && ['en', 'es', 'de', 'fr', 'ja', 'hi'].includes(langParam)) {
        setLang(langParam);
      }
      const currParam = params.get('currency') as CurrencyCode;
      if (currParam && ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'INR'].includes(currParam)) {
        setCurrency(currParam);
      }
    } catch {
      // safe fallback
    }
  }, []);

  // Track virtual pageviews for SPA navigation across categories, brands, and search
  useEffect(() => {
    let path = '/';
    let title = 'Google Merchandise Store';
    if (searchQuery.trim()) {
      path = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      title = `Search: ${searchQuery.trim()} | Google Merchandise Store`;
    } else if (activeCategory !== 'All') {
      path = `/category/${encodeURIComponent(activeCategory.toLowerCase().replace(/\s+/g, '-'))}`;
      title = `${activeCategory} | Google Merchandise Store`;
    } else if (selectedBrand !== 'All Merch') {
      path = `/brand/${encodeURIComponent(selectedBrand.toLowerCase().replace(/\s+/g, '-'))}`;
      title = `${selectedBrand} | Google Merchandise Store`;
    }
    trackPageView(path, title);
  }, [activeCategory, selectedBrand, searchQuery]);

  // Cart operations
  const handleAddToCart = (
    product: Product,
    selectedSize?: string,
    selectedColor?: string,
    quantity: number = 1
  ) => {
    const itemKey = `${product.id}-${selectedSize || 'default'}-${selectedColor || 'default'}`;

    setCartItems((prev) => {
      const existingIdx = prev.findIndex((item) => item.id === itemKey);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            id: itemKey,
            productId: product.id,
            product,
            quantity,
            selectedSize,
            selectedColor
          }
        ];
      }
    });

    showToast(`Added "${product.name}" to cart`);
    trackAddToCart(product, quantity, selectedSize, selectedColor, currency);
  };

  const handleUpdateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    const itemToRemove = cartItems.find((item) => item.id === cartItemId);
    if (itemToRemove) {
      trackRemoveFromCart(itemToRemove, currency);
    }
    setCartItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast(`Removed "${product.name}" from saved items`);
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast(`Saved "${product.name}" to wishlist`);
        return [...prev, product];
      }
    });
  };

  // Promo code & Influencer code validation
  const handleApplyDiscount = (code: string) => {
    const upper = code.trim().toUpperCase();

    // Check influencer partner codes
    const creator = findCreatorByCode(upper);
    if (creator) {
      setActiveCreator(creator);
      setDiscountCode(creator.code);
      setDiscountPercent(creator.discountPercent);
      showToast(`🎉 Supporting ${creator.name}! ${creator.discountPercent}% OFF fan discount applied.`);
      return {
        success: true,
        message: `Supporting ${creator.name}! ${creator.discountPercent}% OFF fan discount applied.`,
        creator
      };
    }

    // Standard coupons
    if (upper === 'GOOGLE20') {
      setActiveCreator(null);
      setDiscountCode('GOOGLE20');
      setDiscountPercent(20);
      return { success: true, message: 'Success! 20% discount applied to your cart.' };
    } else if (upper === 'BUILDER' || upper === 'CREATOR10') {
      setActiveCreator(null);
      setDiscountCode(upper);
      setDiscountPercent(10);
      return { success: true, message: 'Success! 10% discount applied to your cart.' };
    }

    return { success: false, message: 'Invalid code. Try "MKBHD15", "BEAST10", "SARAHDEV", or "GOOGLE20".' };
  };

  const handleRemoveDiscount = () => {
    setDiscountCode('');
    setDiscountPercent(0);
    setActiveCreator(null);
  };

  const handleApplyCreatorFromModal = (creator: CreatorAffiliate) => {
    setActiveCreator(creator);
    setDiscountCode(creator.code);
    setDiscountPercent(creator.discountPercent);
    showToast(`🎉 Applied ${creator.name}'s exclusive ${creator.discountPercent}% discount!`);
  };

  // Brand counts calculation
  const brandCounts = useMemo(() => {
    const counts: Record<BrandFilter, number> = {
      'All Merch': products.length,
      Google: products.filter((p) => p.brandCategory === 'Google').length,
      YouTube: products.filter((p) => p.brandCategory === 'YouTube').length,
      Android: products.filter((p) => p.brandCategory === 'Android').length,
      'Google Cloud': products.filter((p) => p.brandCategory === 'Google Cloud').length
    };
    return counts;
  }, [products]);

  // Filtered & Sorted products for category view
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (activeCategory !== 'All') {
        if (activeCategory === 'Eco-Friendly' && !p.ecoCertified) {
          return false;
        } else if (activeCategory === 'YouTube Gear' && (p.brandCategory !== 'YouTube' && p.category !== 'YouTube Gear')) {
          return false;
        } else if (activeCategory === 'Hoodies' && p.itemGroup !== 'hoodies' && p.category !== 'Hoodies') {
          return false;
        } else if (activeCategory === 'T-Shirts' && p.itemGroup !== 'tshirts' && p.category !== 'T-Shirts') {
          return false;
        } else if (activeCategory === 'Lifestyle' && p.itemGroup !== 'lifestyle' && p.category !== 'Lifestyle') {
          return false;
        } else if (activeCategory === 'Stationery' && p.itemGroup !== 'stationery' && p.category !== 'Stationery') {
          return false;
        } else if (
          activeCategory !== 'Eco-Friendly' &&
          activeCategory !== 'YouTube Gear' &&
          activeCategory !== 'Hoodies' &&
          activeCategory !== 'T-Shirts' &&
          activeCategory !== 'Lifestyle' &&
          activeCategory !== 'Stationery' &&
          p.category !== activeCategory
        ) {
          return false;
        }
      }

      // Brand filter
      if (selectedBrand !== 'All Merch') {
        if (p.brandCategory !== selectedBrand) {
          return false;
        }
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesBrand = p.brand.toLowerCase().includes(q);
        const matchesDesc = p.description.toLowerCase().includes(q);
        const matchesCategory = p.category.toLowerCase().includes(q);
        if (!matchesName && !matchesBrand && !matchesDesc && !matchesCategory) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0);
      return b.reviewsCount - a.reviewsCount; // popular
    });
  }, [products, activeCategory, selectedBrand, searchQuery, sortBy]);

  // Order Calculations
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const discountedSubtotal = subtotal - discountAmount;
  const shippingCost = discountedSubtotal >= 50.00 || cartItems.length === 0 ? 0.00 : 5.99;
  const tax = discountedSubtotal * 0.0825;
  const finalTotal = discountedSubtotal + shippingCost + tax;

  const handleOrderCompleted = (_order: OrderConfirmation) => {
    trackPurchase(_order);
    setCartItems([]);
    setIsCartOpen(false);
  };

  // Determine if we should show the Category Showcase layout vs full category grid
  const isShowcaseMode = activeCategory === 'All' && selectedBrand === 'All Merch' && !searchQuery.trim();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pb-16 md:pb-0 flex flex-col font-sans">
      
      {/* Announcement Bar */}
      <AnnouncementBar
        currency={currency}
        lang={lang}
        onOpenInfluencerHub={() => setIsInfluencerModalOpen(true)}
      />

      {/* Header & Navigation */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSelectedBrand('All Merch');
          setSearchQuery('');
        }}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        allProducts={products}
        onSelectProduct={(p) => handleOpenQuickView(p)}
        currency={currency}
        onSelectCurrency={setCurrency}
        lang={lang}
        onSelectLang={setLang}
        onOpenInfluencerHub={() => setIsInfluencerModalOpen(true)}
        activeCreator={activeCreator}
      />

      {/* Active Influencer Referral Bar */}
      {activeCreator && (
        <InfluencerBanner
          creator={activeCreator}
          onClearCreator={handleRemoveDiscount}
          onOpenHub={() => setIsInfluencerModalOpen(true)}
          lang={lang}
        />
      )}

      {/* Hero Section */}
      <Hero
        onShopNewArrivals={() => {
          setActiveCategory('All');
          setSelectedBrand('All Merch');
          setSortBy('newest');
          const el = document.getElementById('products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onExploreBrands={() => {
          const el = document.getElementById('brands');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onSelectMemberCollection={() => {
          setSelectedBrand('Google');
          setActiveCategory('Hoodies');
          const el = document.getElementById('products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenInfluencerHub={() => setIsInfluencerModalOpen(true)}
        lang={lang}
      />

      {/* Category & Brand Pills Section */}
      <CategoryPills
        selectedBrand={selectedBrand}
        onSelectBrand={(brand) => {
          setSelectedBrand(brand);
          const el = document.getElementById('products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        brandCounts={brandCounts}
      />

      {/* Main Products Section */}
      <main id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 flex-1 w-full">
        
        {/* If in Showcase mode (All categories), render the category showcase */}
        {isShowcaseMode ? (
          <CategoryShowcase
            products={products}
            onSelectCategory={(cat) => {
              setActiveCategory(cat);
              const el = document.getElementById('products');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onAddToCart={handleAddToCart}
            onQuickView={(p) => handleOpenQuickView(p)}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            currency={currency}
            lang={lang}
          />
        ) : (
          /* Full Category Grid View */
          <div>
            {/* Breadcrumb & Section Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 pb-4 border-b border-gray-200">
              <div>
                <button
                  onClick={() => {
                    setActiveCategory('All');
                    setSelectedBrand('All Merch');
                    setSearchQuery('');
                  }}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 mb-2 group transition cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  <span>{t.sections.backToAll}</span>
                </button>

                <div className="flex items-center gap-2.5">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                    {searchQuery
                      ? `Search: "${searchQuery}"`
                      : selectedBrand !== 'All Merch'
                      ? `${selectedBrand} Gear`
                      : activeCategory}
                  </h2>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                    {filteredProducts.length} items
                  </span>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Full department catalog for {activeCategory}. Prices displayed in <strong>{currency}</strong>.
                </p>
              </div>

              {/* Sort Controls */}
              <div className="flex items-center gap-2.5 self-stretch sm:self-auto justify-between sm:justify-end">
                <div className="flex items-center gap-1.5 text-xs text-gray-600 bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 shadow-2xs">
                  <ArrowUpDown className="w-3.5 h-3.5 text-gray-500" />
                  <span className="font-medium hidden sm:inline">{t.sections.sort}:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="bg-transparent border-none text-xs font-bold text-gray-800 focus:outline-none cursor-pointer"
                  >
                    <option value="popular">{t.sections.sortPopular}</option>
                    <option value="newest">{t.sections.sortNewest}</option>
                    <option value="rating">{t.sections.sortRating}</option>
                    <option value="price-asc">{t.sections.sortPriceAsc}</option>
                    <option value="price-desc">{t.sections.sortPriceDesc}</option>
                  </select>
                </div>

                <button
                  onClick={() => {
                    setSelectedBrand('All Merch');
                    setActiveCategory('All');
                    setSearchQuery('');
                  }}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline transition cursor-pointer"
                >
                  {t.sections.resetFilters}
                </button>
              </div>
            </div>

            {/* Responsive Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onQuickView={(p) => handleOpenQuickView(p)}
                    isWishlisted={wishlist.some((w) => w.id === product.id)}
                    onToggleWishlist={handleToggleWishlist}
                    currency={currency}
                    lang={lang}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 shadow-2xs max-w-lg mx-auto my-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3 text-gray-400">
                  <SlidersHorizontal className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-gray-800 mb-1">
                  {t.sections.noProductsFound}
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  {t.sections.noProductsDesc} "{searchQuery}".
                </p>
                <button
                  onClick={() => {
                    setSelectedBrand('All Merch');
                    setActiveCategory('All');
                    setSearchQuery('');
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition"
                >
                  {t.sections.resetFilters}
                </button>
              </div>
            )}
          </div>
        )}

      </main>

      {/* Slide-Over Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          trackBeginCheckout(cartItems, finalTotal, currency);
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        discountCode={discountCode}
        discountPercent={discountPercent}
        onApplyDiscount={handleApplyDiscount}
        onRemoveDiscount={handleRemoveDiscount}
        currency={currency}
        lang={lang}
        activeCreator={activeCreator}
      />

      {/* Express Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        subtotal={subtotal}
        discount={discountAmount}
        shipping={shippingCost}
        tax={tax}
        total={finalTotal}
        onOrderCompleted={handleOrderCompleted}
        currency={currency}
        lang={lang}
        activeCreator={activeCreator}
      />

      {/* Product Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        currency={currency}
        lang={lang}
      />

      {/* Wishlist Modal */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveWishlist={handleToggleWishlist}
        onAddToCart={(p) => handleAddToCart(p)}
        currency={currency}
        lang={lang}
      />

      {/* Influencer & Creator Affiliate Hub Modal */}
      <InfluencerModal
        isOpen={isInfluencerModalOpen}
        onClose={() => setIsInfluencerModalOpen(false)}
        activeCreator={activeCreator}
        onApplyCreator={handleApplyCreatorFromModal}
        onClearCreator={handleRemoveDiscount}
        currency={currency}
        lang={lang}
        allProducts={products}
        onQuickViewProduct={(p) => handleOpenQuickView(p)}
      />

      {/* Mobile Bottom Toolbar */}
      <MobileBottomNav
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenInfluencerHub={() => setIsInfluencerModalOpen(true)}
        activeTab={mobileTab}
        onSelectTab={setMobileTab}
      />

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div
          id="toast-notification"
          className="fixed bottom-18 md:bottom-6 right-4 sm:right-6 bg-gray-900 text-white text-xs font-medium px-4 py-3 rounded-xl shadow-xl z-50 flex items-center gap-3 animate-in slide-in-from-bottom-3 duration-200 border border-gray-800"
        >
          <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
          <span>{toastMessage}</span>
          <button
            onClick={() => {
              setToastMessage(null);
              setIsCartOpen(true);
            }}
            className="text-blue-400 hover:text-blue-300 font-bold underline text-[11px] ml-1 cursor-pointer"
          >
            View Bag
          </button>
        </div>
      )}

      {/* Store Footer */}
      <Footer
        currency={currency}
        lang={lang}
        onOpenInfluencerHub={() => setIsInfluencerModalOpen(true)}
      />

    </div>
  );
}
