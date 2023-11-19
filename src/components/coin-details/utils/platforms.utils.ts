import { ColorSchemeType } from 'native-base/lib/typescript/components/types';

export const getPlatformBadgeColor = (platforms: string): ColorSchemeType => {
    const lowerCasePlatforms = platforms.toLowerCase();

    if (lowerCasePlatforms.startsWith('bep')) {
        return 'warning';
    }

    if (lowerCasePlatforms.startsWith('erc')) {
        return 'info';
    }

    if (lowerCasePlatforms.startsWith('trc')) {
        return 'error';
    }

    return 'dark';
};
