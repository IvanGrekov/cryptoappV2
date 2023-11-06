import { useState, useEffect } from 'react';

import { ICoin } from '../types/coinList';
import { getCoinList, getMoreCoins } from '../utils/coinList.utils';

type TUseCoinList = () => {
    coinList: ICoin[];
    isLoading: boolean;
    error: string;
    getMoreCoins: () => Promise<void>;
};

export const useCoinList: TUseCoinList = () => {
    const [coinList, setCoinList] = useState<ICoin[]>([]);
    const [isLoading, setIsLoading] = useState(false);
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
        error,
        getMoreCoins: () =>
            getMoreCoins({
                pageNumber,
                setIsLoading,
                setCoinList,
                setPageNumber,
                setError,
            }),
    };
};
