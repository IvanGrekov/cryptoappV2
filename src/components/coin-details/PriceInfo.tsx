import { StyleSheet } from 'react-native';

import { VStack, HStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ICoinDetails } from '../../types/coinDetails';

import { SIDE_PADDING } from './constants';
import { roundPrice, roundMarketCap } from './utils';

type TPriceInfoProps = Pick<ICoinDetails, 'price' | 'marketCap' | 'change24h'>;

export default function PriceInfo({
    price,
    marketCap,
    change24h,
}: TPriceInfoProps): JSX.Element {
    return (
        <HStack style={styles.container}>
            <VStack>
                <HStack>
                    <Text style={styles.title}>Price:</Text>
                    <Text style={styles.title}>{`$${roundPrice(price)}`}</Text>
                </HStack>

                <HStack>
                    <Text style={styles.title}>Market Cap:</Text>
                    <Text style={styles.title}>{`$${roundMarketCap(
                        marketCap,
                    )} bln`}</Text>
                </HStack>
            </VStack>

            <Text>{change24h}</Text>
        </HStack>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIDE_PADDING,
    },
    title: {
        fontSize: STYLE_VARIABLES.headingFontSize,
    },
});
