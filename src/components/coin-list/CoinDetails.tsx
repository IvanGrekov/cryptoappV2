import { StyleSheet } from 'react-native';

import { VStack, Text, HStack, Box } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ICoin } from '../../types/coinList';

import { getCoinName } from './utils/coinItem.utils';

interface ICoinDetailsProps {
    coin: ICoin;
    isFavoriteList?: boolean;
}

export default function CoinDetails({
    coin,
    isFavoriteList,
}: ICoinDetailsProps): JSX.Element {
    const { name, symbol, marketCapRank } = coin;

    return (
        <VStack space={STYLE_VARIABLES.smSpacing}>
            <Text style={styles.title}>{getCoinName({ name, symbol })}</Text>

            <HStack space={STYLE_VARIABLES.smSpacing}>
                {!isFavoriteList && (
                    <Box style={styles.rankWrapper}>
                        <Text style={styles.rank}>{marketCapRank}</Text>
                    </Box>
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
    rankWrapper: {
        borderRadius: STYLE_VARIABLES.xsRadius,
        backgroundColor: STYLE_VARIABLES.blackOpacity,
    },
    rank: {
        color: STYLE_VARIABLES.bgColor,
        paddingHorizontal: STYLE_VARIABLES.xsPadding,
        fontWeight: 'bold',
    },
});
