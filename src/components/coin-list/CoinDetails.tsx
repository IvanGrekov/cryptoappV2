import { StyleSheet } from 'react-native';

import { VStack, Text, HStack } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ICoin } from '../../types/coinList';
import { getCoinName } from '../../utils/coinItem.utils';
import CoinMarketCapRank from '../coin-market-cap-rank/CoinMarketCapRank';

type TCoinDetailsProps = Pick<ICoin, 'name' | 'symbol' | 'marketCapRank'> & {
    isFavoriteList?: boolean;
};

export default function CoinDetails({
    name,
    symbol,
    marketCapRank,
    isFavoriteList,
}: TCoinDetailsProps): JSX.Element {
    const coinSymbol = symbol.toUpperCase();
    const coinName = isFavoriteList
        ? coinSymbol
        : getCoinName({ name, symbol });

    return (
        <VStack space={STYLE_VARIABLES.smSpacing}>
            <Text style={styles.name}>{coinName}</Text>

            {!isFavoriteList && (
                <HStack space={STYLE_VARIABLES.smSpacing}>
                    {!!marketCapRank && (
                        <CoinMarketCapRank rank={marketCapRank} />
                    )}

                    <Text>{coinSymbol}</Text>
                </HStack>
            )}
        </VStack>
    );
}

const styles = StyleSheet.create({
    name: {
        fontSize: STYLE_VARIABLES.lgHeadingFontSize,
        fontWeight: 'bold',
    },
});
