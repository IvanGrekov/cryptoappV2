import { TCoinList, TApiCoinList } from '../../types/coinList';

import { BASE_URL, END_POINTS, CURRENCY, COINS_PER_PAGE } from './constants';
import { IError } from './types';
import { formatCoinList } from './utils';

export const getCoinsList = (page = 0): Promise<TCoinList | IError> => {
    const URL = `${BASE_URL}${END_POINTS.getCryptoList}`;
    const PAGINATION_PARAMS = `limit=${COINS_PER_PAGE}&page=${page}`;

    return fetch(`${URL}?tsym=${CURRENCY}&${PAGINATION_PARAMS}`)
        .then(async (response) => {
            const parsedResponse = await response.json();

            if (parsedResponse.Message === 'Success') {
                return formatCoinList(parsedResponse.Data as TApiCoinList);
            }

            return parsedResponse as IError;
        })
        .catch((e) => {
            console.error(e);

            return [];
        });
};
