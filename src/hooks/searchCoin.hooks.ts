import { useState, useEffect } from 'react';

import { useIsFocused } from '@react-navigation/native';

import { ICoinDetails } from '../types/coinDetails';
import { getCoinAsset, refreshCoinAsset } from '../utils/coinAsset.utils';

import useDebounce from './debounce.hooks';

type TUseSearchCoin = () => {
    searchValue: string;
    data: ICoinDetails | null;
    isLoading: boolean;
    isRefreshing: boolean;
    error: string;
    onChangeSearchValue: (value: string) => void;
    refreshCoinList: () => void;
};

let abortController = new AbortController();

export const useSearchCoin: TUseSearchCoin = () => {
    const isFocused = useIsFocused();

    const [searchValue, setSearchValue] = useState('');
    const debouncedValue = useDebounce({
        value: searchValue,
        delay: 1000,
    });

    const [data, setData] = useState<ICoinDetails | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!searchValue) {
            setData(null);
            setError('');
        }
    }, [searchValue]);

    useEffect(() => {
        if (!isFocused) {
            setSearchValue('');
            setData(null);
            setError('');

            return;
        }

        if (!debouncedValue) {
            return;
        }

        getCoinAsset({
            symbol: debouncedValue,
            setIsLoading,
            setData,
            setError,
            abortController,
        });

        return () => {
            abortController.abort();
            abortController = new AbortController();
        };
    }, [isFocused, debouncedValue]);

    return {
        searchValue,
        data,
        isLoading,
        isRefreshing,
        error,
        onChangeSearchValue: (value: string): void => {
            setSearchValue(value.toUpperCase());
        },
        refreshCoinList: (): void => {
            refreshCoinAsset({
                symbol: debouncedValue,
                setIsRefreshing,
                setData,
                setError,
                abortController,
            });
        },
    };
};
