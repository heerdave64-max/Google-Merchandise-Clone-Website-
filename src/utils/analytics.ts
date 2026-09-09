import { Product, CartItem, OrderConfirmation } from '../types';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Safe wrapper around window.gtag for GA4 e-commerce tracking
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  } catch (err) {
    console.debug('Analytics event failed:', err);
  }
}

export function trackPageView(pagePath: string, pageTitle?: string) {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: pagePath,
        page_title: pageTitle || document.title,
        page_location: window.location.href,
      });
    }
  } catch (err) {
    console.debug('Analytics pageview failed:', err);
  }
}

export function trackAddToCart(product: Product, quantity = 1, size?: string, color?: string, currency = 'USD') {
  trackEvent('add_to_cart', {
    currency,
    value: product.price * quantity,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        item_brand: product.brand,
        item_category: product.category,
        item_variant: [size, color].filter(Boolean).join(' / ') || undefined,
        price: product.price,
        quantity,
      },
    ],
  });
}

export function trackRemoveFromCart(item: CartItem, currency = 'USD') {
  trackEvent('remove_from_cart', {
    currency,
    value: item.product.price * item.quantity,
    items: [
      {
        item_id: item.product.id,
        item_name: item.product.name,
        item_brand: item.product.brand,
        item_category: item.product.category,
        item_variant: [item.selectedSize, item.selectedColor].filter(Boolean).join(' / ') || undefined,
        price: item.product.price,
        quantity: item.quantity,
      },
    ],
  });
}

export function trackViewItem(product: Product, currency = 'USD') {
  trackEvent('view_item', {
    currency,
    value: product.price,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        item_brand: product.brand,
        item_category: product.category,
        price: product.price,
      },
    ],
  });
}

export function trackBeginCheckout(items: CartItem[], totalValue: number, currency = 'USD') {
  trackEvent('begin_checkout', {
    currency,
    value: totalValue,
    items: items.map((item) => ({
      item_id: item.product.id,
      item_name: item.product.name,
      item_brand: item.product.brand,
      item_category: item.product.category,
      item_variant: [item.selectedSize, item.selectedColor].filter(Boolean).join(' / ') || undefined,
      price: item.product.price,
      quantity: item.quantity,
    })),
  });
}

export function trackPurchase(order: OrderConfirmation) {
  trackEvent('purchase', {
    transaction_id: order.orderId,
    value: order.total,
    tax: order.tax,
    shipping: order.shipping,
    currency: order.currency,
    coupon: order.creatorAffiliate?.code || undefined,
    items: order.items.map((item) => ({
      item_id: item.product.id,
      item_name: item.product.name,
      item_brand: item.product.brand,
      item_category: item.product.category,
      item_variant: [item.selectedSize, item.selectedColor].filter(Boolean).join(' / ') || undefined,
      price: item.product.price,
      quantity: item.quantity,
    })),
  });
}
