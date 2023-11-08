import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { useIsFocused } from '@react-navigation/native';
import { Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { getFavoriteList } from '../../utils/favoriteList.utils';
import ScreenContainer from '../screen-container/ScreenContainer';

export default function FavoriteListScreen(): JSX.Element {
    const isFocused = useIsFocused();
    const [favoriteList, setFavoriteList] = useState<string[]>([]);

    useEffect(() => {
        getFavoriteList().then((list: string[]) => setFavoriteList(list));
    }, [isFocused]);

    if (!favoriteList.length) {
        return (
            <ScreenContainer>
                <Text style={styles.error}>No favorite coins</Text>
            </ScreenContainer>
        );
    }

    return (
        <ScreenContainer>
            {favoriteList.map((favorite: string) => (
                <Text key={favorite}>{favorite}</Text>
            ))}
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    error: {
        color: STYLE_VARIABLES.bgColor,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
