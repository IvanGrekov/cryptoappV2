import { useState, useEffect } from 'react';

import { useIsFocused } from '@react-navigation/native';

import { ICoin } from '../types/coinList';
import {
    getCoinList,
    getMoreCoins,
    refreshCoinList,
} from '../utils/coinList.utils';

type TUseCoinList = () => {
    coinList: ICoin[];
    isLoading: boolean;
    isRefreshing: boolean;
    error: string;
    getMoreCoins: () => Promise<void>;
    refreshCoinList: () => Promise<void>;
};

let abortController = new AbortController();

export const useCoinList: TUseCoinList = () => {
    const isFocused = useIsFocused();

    const [coinList, setCoinList] = useState<ICoin[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        if (!isFocused) {
            setCoinList([]);
            setPageNumber(0);

            return () => {
                abortController.abort();
                abortController = new AbortController();
            };
        }

        getCoinList({
            setIsLoading,
            setCoinList,
            setPageNumber,
            setError,
            abortController,
        });
    }, [isFocused]);

    return {
        coinList,
        isLoading,
        isRefreshing,
        error,
        getMoreCoins: () =>
            getMoreCoins({
                pageNumber,
                setIsLoading,
                setCoinList,
                setPageNumber,
                setError,
            }),
        refreshCoinList: () =>
            refreshCoinList({
                setIsRefreshing,
                setCoinList,
                setPageNumber,
                setError,
            }),
    };
};
