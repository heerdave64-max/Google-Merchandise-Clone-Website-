import { CurrencyCode } from '../types';

export interface CurrencyConfig {
  code: CurrencyCode;
  name: string;
  symbol: string;
  flag: string;
  exchangeRate: number; // relative to 1 USD
  decimals: number;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: {
    code: 'USD',
    name: 'US Dollar',
    symbol: '$',
    flag: '🇺🇸',
    exchangeRate: 1.0,
    decimals: 2
  },
  EUR: {
    code: 'EUR',
    name: 'Euro',
    symbol: '€',
    flag: '🇪🇺',
    exchangeRate: 0.92,
    decimals: 2
  },
  GBP: {
    code: 'GBP',
    name: 'British Pound',
    symbol: '£',
    flag: '🇬🇧',
    exchangeRate: 0.79,
    decimals: 2
  },
  JPY: {
    code: 'JPY',
    name: 'Japanese Yen',
    symbol: '¥',
    flag: '🇯🇵',
    exchangeRate: 155.0,
    decimals: 0
  },
  CAD: {
    code: 'CAD',
    name: 'Canadian Dollar',
    symbol: 'CA$',
    flag: '🇨🇦',
    exchangeRate: 1.36,
    decimals: 2
  },
  INR: {
    code: 'INR',
    name: 'Indian Rupee',
    symbol: '₹',
    flag: '🇮🇳',
    exchangeRate: 83.5,
    decimals: 2
  }
};

export const ALL_CURRENCIES: CurrencyConfig[] = Object.values(CURRENCIES);

export function convertPrice(usdAmount: number, currencyCode: CurrencyCode): number {
  const currency = CURRENCIES[currencyCode] || CURRENCIES.USD;
  return usdAmount * currency.exchangeRate;
}

export function formatCurrency(usdAmount: number, currencyCode: CurrencyCode): string {
  const currency = CURRENCIES[currencyCode] || CURRENCIES.USD;
  const converted = usdAmount * currency.exchangeRate;

  if (currency.decimals === 0) {
    return `${currency.symbol}${Math.round(converted).toLocaleString()}`;
  }

  return `${currency.symbol}${converted.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}
