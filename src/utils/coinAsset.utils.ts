import { Dispatch, SetStateAction } from 'react';

import { getCoinBySymbol as getCoinBySymbolQuery } from '../api/coinList';
import { ICoinDetails } from '../types/coinDetails';

interface IGetCoinAssetArgs {
    symbol: string;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setData: Dispatch<SetStateAction<ICoinDetails | null>>;
    setError: Dispatch<SetStateAction<string>>;
    abortController?: AbortController;
}

type TGetCoinAsset = (args: IGetCoinAssetArgs) => Promise<void>;

export const getCoinAsset: TGetCoinAsset = async ({
    symbol,
    setIsLoading,
    setData,
    setError,
    abortController,
}) => {
    try {
        setIsLoading(true);
        const result = await getCoinBySymbolQuery({ symbol, abortController });

        if ('errorMessage' in result) {
            setError(result.errorMessage);
            setData(null);

            return;
        }

        setData(result);
        setError('');
    } catch {
        setError('Something went wrong');
    } finally {
        setIsLoading(false);
    }
};

type IRefreshCoinAssetArgs = Omit<IGetCoinAssetArgs, 'setIsLoading'> & {
    setIsRefreshing: Dispatch<SetStateAction<boolean>>;
};

type TRefreshCoinAsset = (args: IRefreshCoinAssetArgs) => Promise<void>;

export const refreshCoinAsset: TRefreshCoinAsset = async ({
    symbol,
    setIsRefreshing,
    setData,
    setError,
    abortController,
}) => {
    try {
        setIsRefreshing(true);
        const result = await getCoinBySymbolQuery({ symbol, abortController });

        if ('errorMessage' in result) {
            setError(result.errorMessage);
            setData(null);

            return;
        }

        setData(result);
        setError('');
    } catch {
        setError('Something went wrong');
    } finally {
        setIsRefreshing(false);
    }
};
