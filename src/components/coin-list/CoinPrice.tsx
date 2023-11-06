import React from 'react';
import { StyleSheet } from 'react-native';

import { VStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ICoin } from '../../types/coinList';

import { roundPrice, roundMarketCap } from './utils/coinItem.utils';

interface ICoinPriceProps {
    coin: ICoin;
}

export default function CoinPrice({ coin }: ICoinPriceProps): JSX.Element {
    const { marketCap, price } = coin;

    return (
        <VStack space={STYLE_VARIABLES.smSpacing}>
            <Text style={styles.price}>{`$${roundPrice(price)}`}</Text>

            <Text style={styles.marketCap}>
                {`Market cap: $${roundMarketCap(marketCap)} bln`}
            </Text>
        </VStack>
    );
}

const styles = StyleSheet.create({
    price: {
        fontSize: STYLE_VARIABLES.headingFontSize,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    marketCap: {
        textAlign: 'right',
    },
});
