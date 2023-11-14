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
    return (
        <VStack space={STYLE_VARIABLES.smSpacing}>
            <Text style={styles.title}>{getCoinName({ name, symbol })}</Text>

            <HStack space={STYLE_VARIABLES.smSpacing}>
                {!isFavoriteList && !!marketCapRank && (
                    <CoinMarketCapRank rank={marketCapRank} />
                )}

                <Text>{symbol.toUpperCase()}</Text>
            </HStack>
        </VStack>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: STYLE_VARIABLES.headingFontSize,
        fontWeight: 'bold',
    },
});
