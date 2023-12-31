import { useState, useEffect } from 'react';

import { useIsFocused } from '@react-navigation/native';

import { ICoin } from '../types/coinList';
import {
    getSymbolList,
    getMoreSymbols,
    refreshSymbolList,
} from '../utils/coinList.utils';
import {
    getFavoriteList,
    getFavoriteListByPage,
} from '../utils/favoriteList.utils';

type TFavoriteList = string[] | null;

type TUseFavoriteCoins = () => {
    favoriteList: TFavoriteList;
    coinList: ICoin[];
    isLoading: boolean;
    isRefreshing: boolean;
    error: string;
    getMoreCoins: () => Promise<void>;
    refreshCoinList: () => Promise<void>;
};

export const useFavoriteCoins: TUseFavoriteCoins = () => {
    const isFocused = useIsFocused();

    const [favoriteList, setFavoriteList] = useState<TFavoriteList>(null);
    const [coinList, setCoinList] = useState<ICoin[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        if (!isFocused) {
            setFavoriteList(null);
            setCoinList([]);
            setPageNumber(0);
            setError('');

            return;
        }

        getFavoriteList().then((list: string[]) => setFavoriteList(list));
    }, [isFocused]);

    useEffect(() => {
        if (!isFocused) {
            return;
        }

        if (!favoriteList?.length) {
            return;
        }

        getSymbolList({
            symbols: getFavoriteListByPage({
                favoriteList,
            }),
            setIsLoading,
            setCoinList,
            setPageNumber,
            setError,
        });
    }, [isFocused, favoriteList]);

    const getMoreCoins = (): Promise<void> => {
        if (!favoriteList?.length) {
            return Promise.resolve();
        }

        const symbols = getFavoriteListByPage({
            favoriteList,
            pageNumber,
        });
        if (!symbols.length) {
            return Promise.resolve();
        }

        return getMoreSymbols({
            symbols,
            setIsLoading,
            setCoinList,
            setPageNumber,
            setError,
        });
    };

    const refreshCoinList = async (): Promise<void> => {
        if (!favoriteList?.length) {
            return Promise.resolve();
        }

        try {
            setIsRefreshing(true);

            const upToDateFavoriteList = await getFavoriteList();
            setFavoriteList(upToDateFavoriteList);
            await refreshSymbolList({
                symbols: getFavoriteListByPage({
                    favoriteList: upToDateFavoriteList,
                }),
                setIsRefreshing,
                setCoinList,
                setPageNumber,
                setError,
            });
        } catch {
            setError('Something went wrong');
        } finally {
            setIsRefreshing(false);
        }
    };

    return {
        favoriteList,
        coinList,
        isLoading,
        isRefreshing,
        error,
        getMoreCoins,
        refreshCoinList,
    };
};
