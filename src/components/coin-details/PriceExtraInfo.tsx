import { StyleSheet } from 'react-native';

import { VStack, HStack, Text, Badge } from 'native-base';

import { STYLE_VARIABLES, THEME } from '../../constants/style';
import { ICoinDetails } from '../../types/coinDetails';

import Divider from './Divider';
import { roundMarketCap, roundSupply } from './utils';

export type TPriceExtraInfoProps = Pick<
    ICoinDetails,
    'marketCap' | 'maxSupply' | 'issuedSupply'
>;

export default function PriceExtraInfo({
    marketCap,
    maxSupply,
    issuedSupply,
}: TPriceExtraInfoProps): JSX.Element {
    return (
        <HStack justifyContent="space-between">
            <VStack>
                <Badge variant="outline" style={styles.priceExtraInfoBadge}>
                    Market Cap
                </Badge>

                <Text style={styles.priceExtraInfo}>{` $${roundMarketCap(
                    marketCap,
                )} bln`}</Text>
            </VStack>

            <Divider orientation="vertical" />

            {!!maxSupply && (
                <VStack>
                    <Badge variant="outline" style={styles.priceExtraInfoBadge}>
                        Max Supply
                    </Badge>

                    <Text style={styles.priceExtraInfo}>
                        {` ${roundSupply(maxSupply)} bln`}
                    </Text>
                </VStack>
            )}

            <Divider orientation="vertical" />

            {!!maxSupply && !!issuedSupply && (
                <VStack>
                    <Badge variant="outline" style={styles.priceExtraInfoBadge}>
                        Issued Supply
                    </Badge>

                    <Text style={styles.priceExtraInfo}>
                        {` ${roundSupply(issuedSupply)} bln`}
                    </Text>
                </VStack>
            )}
        </HStack>
    );
}

const styles = StyleSheet.create({
    priceExtraInfoBadge: {
        marginBottom: STYLE_VARIABLES.mdSpacing,
        borderRadius: STYLE_VARIABLES.xsRadius,
    },
    priceExtraInfo: {
        fontSize: STYLE_VARIABLES.mdFontSize,
        color: THEME.colors.coolGray[600],
    },
});
