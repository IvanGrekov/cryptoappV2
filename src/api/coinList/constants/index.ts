export const BASE_URL = 'https://min-api.cryptocompare.com/data';

export const END_POINTS = {
    getCryptoList: '/top/mktcapfull',
    getMultiSymbols: '/pricemultifull',
    getCryptoPrice: '/pricemulti',
};

export const CURRENCY = 'USD';

export const MAX_COINS_LENGTH = 300;
export const COINS_PER_PAGE = 15;
export const MAX_PAGE_NUMBER = MAX_COINS_LENGTH / COINS_PER_PAGE + 1;
