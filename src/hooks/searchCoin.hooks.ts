import { useState, useEffect } from 'react';

import { ICoin } from '../types/coinList';

import useDebounce from './debounce.hooks';

type TUseSearchCoin = () => {
    searchValue: string;
    onChangeSearchValue: (value: string) => void;
    data: ICoin | null;
    isLoading: boolean;
    error: string;
};

export const useSearchCoin: TUseSearchCoin = () => {
    const [searchValue, setSearchValue] = useState('');
    const debouncedValue = useDebounce({
        value: searchValue,
        delay: 2000,
    });

    useEffect(() => {
        console.log(debouncedValue);
    }, [debouncedValue]);

    return {
        searchValue,
        onChangeSearchValue: setSearchValue,
        data: null,
        isLoading: false,
        error: '',
    };
};
