import { StyleSheet } from 'react-native';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Pressable, List } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { TRootTabsParamList, ERouteNames } from '../../types/routes';

import CoinItemContent, { ICoinItemContentProps } from './CoinItemContent';
import { getPrevPagePath } from './utils/coinItem.utils';

type TCoinItemProps = Pick<ICoinItemContentProps, 'isFavoriteList' | 'coin'> & {
    isSearchList?: boolean;
    onItemPress?: () => void;
};

export default function CoinItem({
    coin,
    isFavoriteList,
    isSearchList,
    onItemPress,
}: TCoinItemProps): JSX.Element {
    const navigation = useNavigation<NavigationProp<TRootTabsParamList>>();

    const { symbol } = coin;

    const onPress = (): void => {
        if (!onItemPress) {
            return navigation.navigate(ERouteNames.DETAILS, {
                symbol,
                prevPage: getPrevPagePath({ isFavoriteList, isSearchList }),
            });
        }

        onItemPress();
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
                    <CoinItemContent
                        coin={coin}
                        isFavoriteList={isFavoriteList}
                        isHovered={isHovered}
                        isPressed={isPressed}
                        isFocused={isFocused}
                    />
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
});
