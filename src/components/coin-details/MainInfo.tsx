import { StyleSheet } from 'react-native';

import { VStack, HStack, Image, Text, Box } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ICoinDetails } from '../../types/coinDetails';
import { getCoinName } from '../../utils/coinItem.utils';
import CoinMarketCapRank from '../coin-market-cap-rank/CoinMarketCapRank';

import IndustriesInfo from './IndustriesInfo';
import TwitterAccount from './TwitterAccount';
import { SIDE_PADDING } from './constants';

type TMainInfoProps = Pick<
    ICoinDetails,
    | 'fullName'
    | 'symbol'
    | 'imageUrl'
    | 'marketCapRank'
    | 'assetIndustries'
    | 'twitterAccount'
>;

export default function MainInfo({
    fullName,
    symbol,
    imageUrl,
    marketCapRank,
    assetIndustries,
    twitterAccount,
}: TMainInfoProps): JSX.Element {
    return (
        <VStack style={styles.container}>
            <HStack space={STYLE_VARIABLES.xsSpacing} style={styles.mainInfo}>
                <HStack
                    space={STYLE_VARIABLES.xsSpacing}
                    style={styles.nameWrapper}
                >
                    <Image
                        source={{ uri: `${imageUrl}` }}
                        alt={fullName}
                        style={styles.image}
                    />

                    <Text style={styles.name}>
                        {getCoinName({ name: fullName, symbol, isBig: true })}
                    </Text>
                </HStack>

                <CoinMarketCapRank rank={marketCapRank} isBig={true} />
            </HStack>

            <HStack space={STYLE_VARIABLES.xsSpacing} style={styles.extraInfo}>
                {!!assetIndustries && !!assetIndustries.length && (
                    <Box flexShrink={1}>
                        <IndustriesInfo assetIndustries={assetIndustries} />
                    </Box>
                )}

                {!!twitterAccount && (
                    <TwitterAccount twitterAccount={twitterAccount} />
                )}
            </HStack>
        </VStack>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: STYLE_VARIABLES.xsPadding,
        paddingRight: SIDE_PADDING,
    },
    mainInfo: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: STYLE_VARIABLES.lgSpacing,
    },
    nameWrapper: {
        alignItems: 'center',
    },
    image: {
        width: STYLE_VARIABLES.imgSize,
        height: STYLE_VARIABLES.imgSize,
        borderRadius: STYLE_VARIABLES.imgSize / 2,
    },
    name: {
        fontSize: STYLE_VARIABLES.xlFontSize,
        lineHeight: STYLE_VARIABLES.xlFontSize,
        fontWeight: 'bold',
    },
    extraInfo: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
