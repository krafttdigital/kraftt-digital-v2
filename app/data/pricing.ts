export type PricingCurrency = 'INR' | 'USD';

export type RegionalAmount<T = string> = Readonly<Record<PricingCurrency, T>>;

export const pricing = {
  audit: { INR: '₹999', USD: '$24' },
  serviceEntry: { INR: '₹8K', USD: '$199' },
  websiteCalculator: {
    starter: { INR: 12_000, USD: 299 },
    business: { INR: 25_000, USD: 599 },
    growth: { INR: 45_000, USD: 999 },
    brandIdentity: { INR: 12_000, USD: 299 },
    seoMonthly: { INR: 12_000, USD: 299 },
  },
  socialStarterMonthly: { INR: 12_000, USD: 299 },
  seoRetainerMonthly: { INR: 12_000, USD: 299 },
} as const satisfies Record<string, unknown>;

const standalonePriceReferences: ReadonlyArray<RegionalAmount> = [
  pricing.audit,
  pricing.serviceEntry,
  { INR: '₹1,500/month', USD: '$39/month' },
  { INR: '₹12,000/year', USD: '$299/year' },
  { INR: '₹150 each', USD: '$4 each' },
  { INR: '₹8,200/month', USD: '$199/month' },
  { INR: '₹10,000/month', USD: '$249/month' },
];

const pairedPricePattern = /₹([\d,]+)(\/(?:month|year))?\s*\/\s*\$([\d,]+)(\/(?:month|year))?/g;

export function currencyForCountry(countryCode?: string | null): PricingCurrency {
  const normalizedCode = countryCode?.trim().toUpperCase();
  if (!normalizedCode || !/^[A-Z]{2}$/.test(normalizedCode) || normalizedCode === 'XX' || normalizedCode === 'ZZ') return 'INR';
  return normalizedCode === 'IN' ? 'INR' : 'USD';
}

export function formatRegionalAmount(value: number, currency: PricingCurrency, maximumFractionDigits = 0) {
  return new Intl.NumberFormat(currency === 'INR' ? 'en-IN' : 'en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits,
  }).format(Number.isFinite(value) ? value : 0);
}

/**
 * Selects already-authored regional prices from existing copy. It never converts
 * or derives one market's price from the other.
 */
export function regionalizePriceCopy(copy: string, currency: PricingCurrency) {
  let localized = copy.replace(
    pairedPricePattern,
    (_match, inrAmount: string, inrCadence: string | undefined, usdAmount: string, usdCadence: string | undefined) =>
      currency === 'INR'
        ? `₹${inrAmount}${inrCadence ?? ''}`
        : `$${usdAmount}${usdCadence ?? ''}`,
  );

  if (currency === 'USD') {
    for (const reference of standalonePriceReferences) {
      localized = localized.replaceAll(reference.INR, reference.USD);
    }
  }

  return localized;
}
