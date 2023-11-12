import { useState, useEffect } from 'react';

import { useIsFocused } from '@react-navigation/native';

import { ICoin } from '../types/coinList';

import useDebounce from './debounce.hooks';

type TUseSearchCoin = () => {
    searchValue: string;
    data: ICoin | null;
    isLoading: boolean;
    error: string;
    onChangeSearchValue: (value: string) => void;
};

let abortController = new AbortController();

export const useSearchCoin: TUseSearchCoin = () => {
    const isFocused = useIsFocused();

    const [searchValue, setSearchValue] = useState('');
    const debouncedValue = useDebounce({
        value: searchValue,
        delay: 2000,
    });

    const [data, setData] = useState<ICoin | null>(null);
    const [isLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!isFocused) {
            setSearchValue('');
            setData(null);
            setError('');

            return;
        }

        console.log('debouncedValue', debouncedValue);

        return () => {
            abortController.abort();
            abortController = new AbortController();
        };
    }, [isFocused, debouncedValue]);

    return {
        searchValue,
        data,
        isLoading,
        error,
        onChangeSearchValue: setSearchValue,
    };
};
