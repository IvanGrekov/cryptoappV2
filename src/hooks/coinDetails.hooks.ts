import { useState, useEffect } from 'react';

import { ICoinDetails } from '../types/coinDetails';
import { getCoinAsset, refreshCoinAsset } from '../utils/coinAsset.utils';

type TUseCoinDetails = (args: {
    symbol: string;
    initialData?: ICoinDetails;
}) => {
    data: ICoinDetails | null;
    isLoading: boolean;
    isRefreshing: boolean;
    error: string;
    refreshCoinDetails: () => void;
};

let abortController = new AbortController();

export const useCoinDetails: TUseCoinDetails = ({
    symbol,
    initialData = null,
}) => {
    const [data, setData] = useState<ICoinDetails | null>(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!symbol) {
            return;
        }

        getCoinAsset({
            symbol,
            setIsLoading,
            setData,
            setError,
            abortController,
        });

        return () => {
            abortController.abort();
            abortController = new AbortController();
        };
    }, [symbol]);

    return {
        data,
        isLoading,
        isRefreshing,
        error,
        refreshCoinDetails: (): void => {
            refreshCoinAsset({
                symbol,
                setIsRefreshing,
                setData,
                setError,
                abortController,
            });
        },
    };
};
