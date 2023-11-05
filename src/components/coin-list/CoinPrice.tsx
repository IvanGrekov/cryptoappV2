import React from 'react';
import { StyleSheet } from 'react-native';

import { VStack, Text } from 'native-base';

import { styleVariables } from '../../constants/style';
import { ICoin } from '../../types/coinList';

import { roundPrice, roundMarketCap } from './utils/coinItem.utils';

interface ICoinPriceProps {
    coin: ICoin;
}

export default function CoinPrice({ coin }: ICoinPriceProps): JSX.Element {
    const { marketCap, price } = coin;

    return (
        <VStack space={styleVariables.smSpacing}>
            <Text style={styles.price}>{`$${roundPrice(price)}`}</Text>

            <Text style={styles.marketCap}>
                {`Market cap: $${roundMarketCap(marketCap)} bln`}
            </Text>
        </VStack>
    );
}

const styles = StyleSheet.create({
    price: {
        fontSize: styleVariables.headingFontSize,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    marketCap: {
        textAlign: 'right',
    },
});
