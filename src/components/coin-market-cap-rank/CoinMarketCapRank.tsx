import { StyleSheet } from 'react-native';

import { Text, Box } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';

interface ICoinMarketCapRankProps {
    rank: number;
    isBig?: boolean;
}

export default function CoinMarketCapRank({
    rank,
    isBig,
}: ICoinMarketCapRankProps): JSX.Element {
    return (
        <Box style={[styles.rankWrapper, isBig && styles.rankWrapperBig]}>
            <Text style={[styles.rank, isBig && styles.rankBig]}>{rank}</Text>
        </Box>
    );
}

const styles = StyleSheet.create({
    rankWrapper: {
        borderRadius: STYLE_VARIABLES.xsRadius,
        backgroundColor: STYLE_VARIABLES.blackOpacity,
    },
    rankWrapperBig: {
        borderRadius: STYLE_VARIABLES.smRadius,
    },
    rank: {
        color: STYLE_VARIABLES.bgColor,
        paddingHorizontal: STYLE_VARIABLES.xsPadding,
        fontWeight: 'bold',
    },
    rankBig: {
        paddingHorizontal: STYLE_VARIABLES.smPadding,
        paddingVertical: STYLE_VARIABLES.xsPadding,
        fontSize: STYLE_VARIABLES.headingFontSize,
    },
});
