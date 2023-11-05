import { StyleSheet } from 'react-native';

import { VStack, Text, HStack, Box } from 'native-base';

import { styleVariables } from '../../constants/style';
import { ICoin } from '../../types/coinList';

import { getCoinName } from './utils/coinItem.utils';

interface ICoinDetailsProps {
    coin: ICoin;
}

export default function CoinDetails({ coin }: ICoinDetailsProps): JSX.Element {
    const { name, symbol, marketCapRank } = coin;

    return (
        <VStack space={styleVariables.smSpacing}>
            <Text style={styles.title}>{getCoinName({ name, symbol })}</Text>

            <HStack space={styleVariables.smSpacing}>
                <Box style={styles.rankWrapper}>
                    <Text style={styles.rank}>{marketCapRank}</Text>
                </Box>

                <Text>{symbol.toUpperCase()}</Text>
            </HStack>
        </VStack>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: styleVariables.headingFontSize,
        fontWeight: 'bold',
    },
    rankWrapper: {
        borderRadius: styleVariables.xsRadius,
        backgroundColor: styleVariables.grayColor,
    },
    rank: {
        paddingHorizontal: styleVariables.xsPadding,
        fontWeight: 'bold',
    },
});
