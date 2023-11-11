import { StyleSheet } from 'react-native';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Pressable, List, HStack, Image } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ICoin } from '../../types/coinList';
import { TRootTabsParamList, ERouteNames } from '../../types/routes';

import AddToFavoritesButton from './AddToFavoritesButton';
import CoinDetails from './CoinDetails';
import CoinPrice from './CoinPrice';
import { getPrevPagePath } from './utils/coinItem.utils';

interface ICoinItemProps {
    coin: ICoin;
    isFavoriteList?: boolean;
    isSearchList?: boolean;
}

export default function CoinItem({
    coin,
    isFavoriteList,
    isSearchList,
}: ICoinItemProps): JSX.Element {
    const navigation = useNavigation<NavigationProp<TRootTabsParamList>>();

    const { name, imageUrl, symbol } = coin;

    const onPress = (): void => {
        navigation.navigate(ERouteNames.DETAILS, {
            symbol,
            prevPage: getPrevPagePath({ isFavoriteList, isSearchList }),
        });
    };

    return (
        <List.Item style={styles.item}>
            <Pressable style={styles.itemButton} onPress={onPress}>
                {({
                    isHovered,
                    isPressed,
                    isFocused,
                }: {
                    isHovered: boolean;
                    isPressed: boolean;
                    isFocused: boolean;
                }): JSX.Element => (
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

                            <CoinDetails
                                coin={coin}
                                isFavoriteList={isFavoriteList}
                            />
                        </HStack>

                        <HStack space={STYLE_VARIABLES.smSpacing}>
                            <CoinPrice coin={coin} />
                            <AddToFavoritesButton symbol={symbol} />
                        </HStack>
                    </HStack>
                )}
            </Pressable>
        </List.Item>
    );
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        paddingVertical: 0,
        paddingRight: STYLE_VARIABLES.xsPadding,
        paddingLeft: 0,
    },
    itemButton: {
        width: '100%',
    },
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
