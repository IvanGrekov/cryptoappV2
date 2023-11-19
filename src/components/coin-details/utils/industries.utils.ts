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
