import { StyleSheet } from 'react-native';

import { List, HStack, Image } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ICoin } from '../../types/coinList';

import AddToFavoritesButton from './AddToFavoritesButton';
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
                    space={STYLE_VARIABLES.mdSpacing}
                >
                    <Image
                        source={{ uri: `${imageUrl}` }}
                        alt={name}
                        style={styles.image}
                    />

                    <CoinDetails coin={coin} />
                </HStack>

                <HStack space={STYLE_VARIABLES.smSpacing}>
                    <CoinPrice coin={coin} />
                    <AddToFavoritesButton />
                </HStack>
            </HStack>
        </List.Item>
    );
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        paddingHorizontal: STYLE_VARIABLES.xsPadding,
        paddingVertical: STYLE_VARIABLES.mdPadding,
    },
    itemContent: {
        width: '100%',
        justifyContent: 'space-between',
    },
    itemDetails: {
        alignItems: 'center',
    },
    image: {
        width: STYLE_VARIABLES.coinImgSize,
        height: STYLE_VARIABLES.coinImgSize,
        borderRadius: STYLE_VARIABLES.coinImgSize / 2,
    },
});
