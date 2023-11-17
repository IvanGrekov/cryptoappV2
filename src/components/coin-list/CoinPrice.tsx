import React from 'react';
import { StyleSheet } from 'react-native';

import { VStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ICoin } from '../../types/coinList';

import { roundPrice, roundMarketCap } from './utils/coinItem.utils';

type TCoinPriceProps = Pick<ICoin, 'price' | 'marketCap'>;

export default function CoinPrice({
    price,
    marketCap,
}: TCoinPriceProps): JSX.Element {
    return (
        <VStack space={STYLE_VARIABLES.smSpacing}>
            <Text style={styles.price}>{`${roundPrice(price)}`}</Text>

            <Text style={styles.marketCap}>
                {`Market cap: ${roundMarketCap(marketCap)}`}
            </Text>
        </VStack>
    );
}

const styles = StyleSheet.create({
    price: {
        fontSize: STYLE_VARIABLES.mdFontSize,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    marketCap: {
        textAlign: 'right',
    },
});
