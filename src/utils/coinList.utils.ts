import { Dispatch, SetStateAction } from 'react';

import {
    getCoinsList as getCoinsListQuery,
    getSymbolList as getSymbolListQuery,
} from '../api/coinList';
import { ICoin } from '../types/coinList';

interface IGetCoinListArgs {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setCoinList: Dispatch<SetStateAction<ICoin[]>>;
    setPageNumber: Dispatch<SetStateAction<number>>;
    setError: Dispatch<SetStateAction<string>>;
}

type TGetCoinList = (args: IGetCoinListArgs) => Promise<void>;

export const getCoinList: TGetCoinList = async ({
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

interface IGetSymbolListArgs extends IGetCoinListArgs {
    symbols: string[];
}

type TGetSymbolList = (args: IGetSymbolListArgs) => Promise<void>;

export const getSymbolList: TGetSymbolList = async ({
    symbols,
    setIsLoading,
    setCoinList,
    setPageNumber,
    setError,
}) => {
    try {
        setIsLoading(true);
        const result = await getSymbolListQuery(symbols);

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

interface IGetMoreCoinsArgs extends IGetCoinListArgs {
    pageNumber: number;
}

type TGetMoreCoins = (args: IGetMoreCoinsArgs) => Promise<void>;

export const getMoreCoins: TGetMoreCoins = async ({
    pageNumber,
    setIsLoading,
    setCoinList,
    setPageNumber,
    setError,
}) => {
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

type TGetMoreSymbols = (args: IGetSymbolListArgs) => Promise<void>;

export const getMoreSymbols: TGetMoreSymbols = async ({
    symbols,
    setIsLoading,
    setCoinList,
    setPageNumber,
    setError,
}) => {
    try {
        setIsLoading(true);
        const result = await getSymbolListQuery(symbols);

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

type IRefreshCoinListArgs = Omit<IGetCoinListArgs, 'setIsLoading'> & {
    setIsRefreshing: Dispatch<SetStateAction<boolean>>;
};

type TRefreshCoinList = (args: IRefreshCoinListArgs) => Promise<void>;

export const refreshCoinList: TRefreshCoinList = async ({
    setIsRefreshing,
    setCoinList,
    setPageNumber,
    setError,
}) => {
    try {
        setIsRefreshing(true);
        const result = await getCoinsListQuery();

        if (Array.isArray(result)) {
            setCoinList(result);
            setPageNumber(1);
        } else {
            setError(result.errorMessage);
        }
    } catch {
        setError('Something went wrong');
    } finally {
        setIsRefreshing(false);
    }
};

interface IRefreshSymbolListArgs extends IRefreshCoinListArgs {
    symbols: string[];
}

type TRefreshSymbolList = (args: IRefreshSymbolListArgs) => Promise<void>;

export const refreshSymbolList: TRefreshSymbolList = async ({
    symbols,
    setIsRefreshing,
    setCoinList,
    setPageNumber,
    setError,
}) => {
    try {
        setIsRefreshing(true);
        const result = await getSymbolListQuery(symbols);

        if (Array.isArray(result)) {
            setCoinList(result);
            setPageNumber(1);
        } else {
            setError(result.errorMessage);
        }
    } catch {
        setError('Something went wrong');
    } finally {
        setIsRefreshing(false);
    }
};
