import { ColorSchemeType } from 'native-base/lib/typescript/components/types';

export const getIndustryBadgeColor = (industry: string): ColorSchemeType => {
    const lowerCaseIndustry = industry.toLowerCase();

    if (lowerCaseIndustry === 'payment') {
        return 'green';
    }

    if (lowerCaseIndustry === 'stablecoin') {
        return 'blue';
    }

    return 'coolGray';
};

export const getPriceChangeBadgeColor = (
    priceChange: number,
): ColorSchemeType => {
    if (priceChange < 0) {
        return 'red';
    }

    if (priceChange > 0) {
        return 'green';
    }

    return 'coolGray';
};

export const roundPrice = (price: number): string => {
    if (price < 1) {
        return price.toFixed(5);
    }

    if (price < 10) {
        return price.toFixed(4);
    }

    if (price < 100) {
        return price.toFixed(3);
    }

    return price.toFixed(2);
};

export const roundPriceChange = (priceChange: number): string => {
    return priceChange.toFixed(2);
};

export const roundMarketCap = (marketCap: number): string => {
    return (marketCap / 1_000_000_000).toFixed(3);
};

export const roundSupply = (marketCap: number): string => {
    return (marketCap / 1_000_000).toFixed(2);
};
