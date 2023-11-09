import { TCoinList, TApiCoinList, TApiSymbolList } from '../../types/coinList';

import { BASE_URL, END_POINTS, CURRENCY, COINS_PER_PAGE } from './constants';
import { IError } from './types';
import { formatCoinList, formatSymbolList } from './utils';

export const getCoinsList = (page = 0): Promise<TCoinList | IError> => {
    const URL = `${BASE_URL}${END_POINTS.getCryptoList}`;
    const PAGINATION_PARAMS = `limit=${COINS_PER_PAGE}&page=${page}`;

    return fetch(`${URL}?tsym=${CURRENCY}&${PAGINATION_PARAMS}`, {
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

export const getSymbolList = (
    symbols: string[],
): Promise<TCoinList | IError> => {
    const URL = `${BASE_URL}${END_POINTS.getMultiSymbols}`;
    const SYMBOLS_PARAM = `fsyms=${symbols.join(',')}`;

    return fetch(`${URL}?tsyms=${CURRENCY}&${SYMBOLS_PARAM}`, {
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
