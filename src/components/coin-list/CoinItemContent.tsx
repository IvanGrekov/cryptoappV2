import { StyleSheet } from 'react-native';

import { HStack, Image } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ICoin } from '../../types/coinList';
import AddToFavoritesButton from '../add-to-favorites-button/AddToFavoritesButton';

import CoinDetails from './CoinDetails';
import CoinPrice from './CoinPrice';

export interface ICoinItemContentProps {
    coin: ICoin;
    isHovered: boolean;
    isPressed: boolean;
    isFocused: boolean;
    isFavoriteList?: boolean;
}

export default function CoinItemContent({
    coin,
    isFavoriteList,
    isHovered,
    isPressed,
    isFocused,
}: ICoinItemContentProps): JSX.Element {
    const { imageUrl, name, symbol } = coin;

    return (
        <HStack
            style={styles.itemContent}
            bgColor={
                isHovered || isPressed || isFocused
                    ? STYLE_VARIABLES.blackInvisible
                    : undefined
            }
        >
            <HStack
                style={styles.itemDetails}
                space={STYLE_VARIABLES.mdSpacing}
            >
                <Image
                    source={{ uri: `${imageUrl}` }}
                    alt={name}
                    style={styles.image}
                />

                <CoinDetails {...coin} isFavoriteList={isFavoriteList} />
            </HStack>

            <HStack space={STYLE_VARIABLES.smSpacing}>
                <CoinPrice {...coin} />
                <AddToFavoritesButton symbol={symbol} />
            </HStack>
        </HStack>
    );
}

const styles = StyleSheet.create({
    itemContent: {
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: STYLE_VARIABLES.xsPadding,
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
