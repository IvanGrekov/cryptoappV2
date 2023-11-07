import AsyncStorage from '@react-native-async-storage/async-storage';

import { FAVORITE_LIST_STORAGE_KEY } from '../constants/favoriteList';

export const getFavoriteList = async (): Promise<string[]> => {
    try {
        const value = await AsyncStorage.getItem(FAVORITE_LIST_STORAGE_KEY);

        return value ? JSON.parse(value) : [];
    } catch (e) {
        console.warn(e);

        return [];
    }
};

export const addToFavoriteList = async (symbol: string): Promise<void> => {
    const favoriteList = await getFavoriteList();

    if (favoriteList.includes(symbol)) {
        return;
    }

    try {
        favoriteList.push(symbol);

        await AsyncStorage.setItem(
            FAVORITE_LIST_STORAGE_KEY,
            JSON.stringify(favoriteList),
        );
    } catch (e) {
        console.warn(e);
    }
};

export const removeFromFavoriteList = async (symbol: string): Promise<void> => {
    const favoriteList = await getFavoriteList();

    if (!favoriteList.includes(symbol)) {
        return;
    }

    try {
        const newList = favoriteList.filter((item) => item !== symbol);

        await AsyncStorage.setItem(
            FAVORITE_LIST_STORAGE_KEY,
            JSON.stringify(newList),
        );
    } catch (e) {
        console.warn(e);
    }
};
