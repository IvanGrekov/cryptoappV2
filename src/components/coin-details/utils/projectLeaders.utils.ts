import { ColorSchemeType } from 'native-base/lib/typescript/components/types';

export const getProjectLeaderColor = (leaderType: string): ColorSchemeType => {
    const lowerCaseLeaderType = leaderType.toLowerCase();

    if (lowerCaseLeaderType === 'founder') {
        return 'info';
    }

    return 'dark';
};
