import { useState, useEffect } from 'react';

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

export const useCoinList: TUseCoinList = () => {
    const [coinList, setCoinList] = useState<ICoin[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        getCoinList({
            setIsLoading,
            setCoinList,
            setPageNumber,
            setError,
        });
    }, []);

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
