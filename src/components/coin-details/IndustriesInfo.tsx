import { StyleSheet } from 'react-native';

import { HStack, Badge } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';

import { getIndustryBadgeColor } from './utils/industries.utils';

interface IIndustriesInfoProps {
    assetIndustries: string[];
}

export default function IndustriesInfo({
    assetIndustries,
}: IIndustriesInfoProps): JSX.Element {
    return (
        <HStack style={styles.badgeList}>
            {assetIndustries.map((industry) => {
                const colorScheme = getIndustryBadgeColor(industry);

                return (
                    <Badge
                        key={industry}
                        variant="outline"
                        colorScheme={colorScheme}
                        style={styles.badge}
                    >
                        {industry}
                    </Badge>
                );
            })}
        </HStack>
    );
}

const styles = StyleSheet.create({
    badgeList: {
        flexWrap: 'wrap',
        gap: STYLE_VARIABLES.lgSpacing,
        paddingHorizontal: STYLE_VARIABLES.xsPadding,
    },
    badge: {
        borderRadius: STYLE_VARIABLES.xsRadius,
    },
});
