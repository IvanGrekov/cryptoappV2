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
    let number;

    switch (true) {
        case price < 1:
            number = price.toFixed(5);
            break;

        case price < 10:
            number = price.toFixed(4);
            break;

        case price < 100:
            number = price.toFixed(3);
            break;

        default:
            number = price.toFixed(2);
    }

    return `$${number}`;
};

export const roundPriceChange = (priceChange: number): string => {
    return priceChange.toFixed(2);
};

export const roundMarketCap = (marketCap: number): string => {
    let number;
    let text;

    if (marketCap < 1_000_000_000) {
        number = marketCap / 1_000_000;
        text = 'mln';
    } else {
        number = marketCap / 1_000_000_000;
        text = 'bln';
    }

    return `$${number.toFixed(3)} ${text}`;
};

export const roundSupply = (supply: number): string => {
    if (supply <= 0) {
        return '∞';
    }

    let number;
    let text;

    if (supply < 1_000_000_000) {
        number = supply / 1_000_000;
        text = 'mln';
    } else {
        number = supply / 1_000_000_000;
        text = 'bln';
    }

    return `${number.toFixed(2)} ${text}`;
};
