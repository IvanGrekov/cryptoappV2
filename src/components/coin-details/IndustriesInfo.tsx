import { StyleSheet } from 'react-native';

import { HStack, Badge } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ICoinDetails } from '../../types/coinDetails';

import { getIndustryBadgeColor } from './utils';

type TIndustriesInfoProps = Pick<ICoinDetails, 'assetIndustries'>;

export default function IndustriesInfo({
    assetIndustries,
}: TIndustriesInfoProps): JSX.Element | null {
    if (!assetIndustries) {
        return null;
    }

    return (
        <HStack space={STYLE_VARIABLES.smSpacing} style={styles.badgeList}>
            {assetIndustries.map((industry) => {
                const colorScheme = getIndustryBadgeColor(industry);

                return (
                    <Badge
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
        paddingHorizontal: STYLE_VARIABLES.xsPadding,
    },
    badge: {
        borderRadius: STYLE_VARIABLES.xsRadius,
    },
});
