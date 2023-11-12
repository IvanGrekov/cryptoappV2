import { IApiCoinAsset, ICoinDetails } from '../../types/coinDetails';
import { TCoinList, TApiCoinList, TApiSymbolList } from '../../types/coinList';

import { BASE_URL, END_POINTS, CURRENCY, COINS_PER_PAGE } from './constants';
import { IError } from './types';
import { formatCoinList, formatSymbolList, formatSymbolAsset } from './utils';

type TGetCoinsList = (args: {
    pageNumber?: number;
    abortController?: AbortController;
}) => Promise<TCoinList | IError>;

export const getCoinsList: TGetCoinsList = ({
    pageNumber = 0,
    abortController,
}) => {
    const URL = `${BASE_URL}${END_POINTS.getCryptoList}`;
    const PAGINATION_PARAMS = `limit=${COINS_PER_PAGE}&page=${pageNumber}`;

    return fetch(`${URL}?tsym=${CURRENCY}&${PAGINATION_PARAMS}`, {
        signal: abortController?.signal,
        headers: {
            Authorization: `Apikey ${process.env.COIN_LIST_API_KEY}`,
        },
    })
        .then(async (response) => {
            const parsedResponse = await response.json();

            if (parsedResponse.Message === 'Success') {
                return formatCoinList(parsedResponse.Data as TApiCoinList);
            }

            return {
                errorMessage: 'Something went wrong',
            };
        })
        .catch((e) => {
            console.error(e);

            return {
                errorMessage: 'Something went wrong',
            };
        });
};

type TGetSymbolList = (args: {
    symbols: string[];
    abortController?: AbortController;
}) => Promise<TCoinList | IError>;

export const getSymbolList: TGetSymbolList = ({ symbols, abortController }) => {
    const URL = `${BASE_URL}${END_POINTS.getMultiSymbols}`;
    const SYMBOLS_PARAM = `fsyms=${symbols.join(',')}`;

    return fetch(`${URL}?tsyms=${CURRENCY}&${SYMBOLS_PARAM}`, {
        signal: abortController?.signal,
        headers: {
            Authorization: `Apikey ${process.env.COIN_LIST_API_KEY}`,
        },
    })
        .then(async (response) => {
            if (response.status !== 200) {
                return {
                    errorMessage: 'Something went wrong',
                };
            }

            const parsedResponse = await response.json();

            return formatSymbolList(parsedResponse as TApiSymbolList);
        })
        .catch((e) => {
            console.error(e);

            return {
                errorMessage: 'Something went wrong',
            };
        });
};

type TGetCoinBySymbol = (args: {
    symbol: string;
    abortController?: AbortController;
}) => Promise<ICoinDetails | IError>;

export const getCoinBySymbol: TGetCoinBySymbol = ({
    symbol,
    abortController,
}) => {
    const URL = `${BASE_URL}${END_POINTS.getCoinBySymbol}`;

    return fetch(`${URL}?asset_symbol=${symbol}`, {
        signal: abortController?.signal,
        headers: {
            Authorization: `Apikey ${process.env.COIN_LIST_API_KEY}`,
        },
    })
        .then(async (response) => {
            const parsedResponse = (await response.json()) as IApiCoinAsset;

            if (parsedResponse.Err.message) {
                return {
                    errorMessage: 'Coin not found. Correct the name',
                };
            }

            return formatSymbolAsset(parsedResponse);
        })
        .catch((e) => {
            console.error(e);

            return {
                errorMessage: 'Something went wrong',
            };
        });
};
