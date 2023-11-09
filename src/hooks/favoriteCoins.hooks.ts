import { useState, useEffect } from 'react';

import { useIsFocused } from '@react-navigation/native';

import { ICoin } from '../types/coinList';
import { getFavoriteList } from '../utils/favoriteList.utils';

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

    const [favoriteList, setFavoriteList] = useState<TFavoriteList>([]);
    const [coinList, setCoinList] = useState<ICoin[]>([]);
    const [isLoading] = useState(false);
    const [isRefreshing] = useState(false);
    const [error] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        if (!isFocused) {
            setFavoriteList(null);
            setCoinList([]);
            setPageNumber(0);

            return;
        }

        getFavoriteList().then((list: string[]) => setFavoriteList(list));
    }, [isFocused]);

    useEffect(() => {
        if (!isFocused) {
            setCoinList([]);
            setPageNumber(0);

            // return;
        }

        // getCoinList({
        //     setIsLoading,
        //     setCoinList,
        //     setPageNumber,
        //     setError,
        // });
    }, [isFocused]);

    // TODO: remove (IG)
    pageNumber;

    return {
        favoriteList,
        coinList,
        isLoading,
        isRefreshing,
        error,
        getMoreCoins: async (): Promise<void> => {
            //
        },
        refreshCoinList: async (): Promise<void> => {
            //
        },
    };
};
