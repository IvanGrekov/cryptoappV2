import { StyleSheet } from 'react-native';

import { List, HStack, Image } from 'native-base';

import { styleVariables } from '../../constants/style';
import { ICoin } from '../../types/coinList';

import CoinDetails from './CoinDetails';
import CoinPrice from './CoinPrice';

interface ICoinItemProps {
    coin: ICoin;
}

export default function CoinItem({ coin }: ICoinItemProps): JSX.Element {
    const { name, imageUrl } = coin;

    return (
        <List.Item style={styles.item}>
            <HStack style={styles.itemContent}>
                <HStack
                    style={styles.itemDetails}
                    space={styleVariables.mdSpacing}
                >
                    <Image
                        source={{ uri: `${imageUrl}` }}
                        alt={name}
                        style={styles.image}
                    />

                    <CoinDetails coin={coin} />
                </HStack>

                <CoinPrice coin={coin} />
            </HStack>
        </List.Item>
    );
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        paddingHorizontal: styleVariables.xsPadding,
        paddingVertical: styleVariables.mdPadding,
    },
    itemContent: {
        width: '100%',
        justifyContent: 'space-between',
    },
    itemDetails: {
        alignItems: 'center',
    },
    image: {
        width: styleVariables.coinImgSize,
        height: styleVariables.coinImgSize,
        borderRadius: styleVariables.coinImgSize / 2,
    },
});
