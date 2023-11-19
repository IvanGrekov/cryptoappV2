import { StyleSheet } from 'react-native';

import { VStack, HStack, Text, Badge } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ICoinDetails } from '../../types/coinDetails';

import PriceExtraInfo, { TPriceExtraInfoProps } from './PriceExtraInfo';
import { SIDE_PADDING } from './constants';
import {
    getPriceChangeBadgeColor,
    roundPrice,
    roundPriceChange,
} from './utils/price.utils';

type TPriceInfoProps = Pick<ICoinDetails, 'price' | 'change24h'> &
    TPriceExtraInfoProps;

export default function PriceInfo({
    price,
    change24h,
    ...rest
}: TPriceInfoProps): JSX.Element {
    const priceChangeColor = getPriceChangeBadgeColor(change24h);

    return (
        <VStack space={STYLE_VARIABLES.mdSpacing} style={styles.container}>
            <HStack style={styles.priceWrapper}>
                <Text style={styles.price}>{`${roundPrice(price)}`}</Text>

                <Badge
                    variant="outline"
                    colorScheme={priceChangeColor}
                    style={styles.priceChangeBadge}
                    _text={{ fontSize: STYLE_VARIABLES.smFontSize }}
                >
                    {`24h: ${roundPriceChange(change24h)}%`}
                </Badge>
            </HStack>

            <PriceExtraInfo {...rest} />
        </VStack>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIDE_PADDING,
    },
    priceWrapper: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    price: {
        fontSize: STYLE_VARIABLES.xxlFontSize,
        lineHeight: STYLE_VARIABLES.xxlFontSize,
    },
    priceChangeBadge: {
        borderRadius: STYLE_VARIABLES.xsRadius,
    },
});
