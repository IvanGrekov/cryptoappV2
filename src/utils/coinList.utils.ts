import { Dispatch, SetStateAction } from 'react';

import { getCoinsList as getCoinsListQuery } from '../api/coinList';
import { MAX_PAGE_NUMBER } from '../api/coinList/constants';
import { ICoin } from '../types/coinList';

type TGetCoinListQuery = (args: {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setCoinList: Dispatch<SetStateAction<ICoin[]>>;
    setPageNumber: Dispatch<SetStateAction<number>>;
    setError: Dispatch<SetStateAction<string>>;
}) => Promise<void>;

export const getCoinList: TGetCoinListQuery = async ({
    setIsLoading,
    setCoinList,
    setPageNumber,
    setError,
}) => {
    try {
        setIsLoading(true);
        const result = await getCoinsListQuery();

        if (Array.isArray(result)) {
            setCoinList(result);
            setPageNumber((prev) => ++prev);
        } else {
            setError(result.errorMessage);
        }
    } catch {
        setError('Something went wrong');
    } finally {
        setIsLoading(false);
    }
};

type TGetMoreCoins = (args: {
    pageNumber: number;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setCoinList: Dispatch<SetStateAction<ICoin[]>>;
    setPageNumber: Dispatch<SetStateAction<number>>;
    setError: Dispatch<SetStateAction<string>>;
}) => Promise<void>;

export const getMoreCoins: TGetMoreCoins = async ({
    pageNumber,
    setIsLoading,
    setCoinList,
    setPageNumber,
    setError,
}) => {
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
            setError(result.errorMessage);
        }
    } catch {
        setError('Something went wrong');
    } finally {
        setIsLoading(false);
    }
};
