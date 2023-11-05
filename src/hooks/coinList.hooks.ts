import { useState, useCallback, useEffect } from 'react';

import { getCoinsList as getCoinsListQuery } from '../api/coinList';
import { MAX_PAGE_NUMBER } from '../api/coinList/constants';
import { ICoin } from '../types/coinList';

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
    const [pageNumber, setPageNumber] = useState(1);

    const getCoinList = useCallback(async (): Promise<void> => {
        try {
            setIsLoading(true);
            const result = await getCoinsListQuery();

            if (Array.isArray(result)) {
                setCoinList(result);
                setPageNumber((prev) => ++prev);
            } else {
                setError("You've exceeded the Rate Limit");
            }
        } catch {
            setError('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        getCoinList();
    }, [getCoinList]);

    const getMoreCoins = useCallback(async (): Promise<void> => {
        if (pageNumber === MAX_PAGE_NUMBER) {
            return;
        }

        try {
            setIsLoading(true);
            const result = await getCoinsListQuery(pageNumber);

            if (Array.isArray(result)) {
                setCoinList((prev) => [...prev, ...result]);
                setPageNumber((prev) => ++prev);
            } else {
                setError("You've exceeded the Rate Limit");
            }
        } catch {
            setError('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    }, [pageNumber]);

    return {
        coinList,
        isLoading,
        error,
        getMoreCoins,
    };
};
