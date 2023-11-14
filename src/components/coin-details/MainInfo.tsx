import { StyleSheet } from 'react-native';

import { VStack, HStack, Image, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ICoinDetails } from '../../types/coinDetails';
import { getCoinName } from '../../utils/coinItem.utils';
import CoinMarketCapRank from '../coin-market-cap-rank/CoinMarketCapRank';

import IndustriesInfo from './IndustriesInfo';
import { SIDE_PADDING } from './constants';

type TMainInfoProps = Pick<
    ICoinDetails,
    'fullName' | 'symbol' | 'imageUrl' | 'marketCapRank' | 'assetIndustries'
>;

export default function MainInfo({
    fullName,
    symbol,
    imageUrl,
    marketCapRank,
    assetIndustries,
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

            <IndustriesInfo assetIndustries={assetIndustries} />
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
        marginBottom: STYLE_VARIABLES.xlSpacing,
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
        fontSize: STYLE_VARIABLES.xlHeadingFontSize,
        lineHeight: STYLE_VARIABLES.xlHeadingFontSize,
        fontWeight: 'bold',
    },
});
