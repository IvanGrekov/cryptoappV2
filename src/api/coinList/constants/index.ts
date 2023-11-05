export const BASE_URL = 'https://min-api.cryptocompare.com/data';
export const API_KEY =
    '4836bd7db03506fa93abbf5169723fc658590029a1dc9298da2f7067bd25231a';

export const END_POINTS = {
    getCryptoList: `/top/mktcapfull`,
    getCryptoPrice: `/pricemulti`,
};

export const CURRENCY = 'USD';

export const MAX_COINS_LENGTH = 300;
export const COINS_PER_PAGE = 15;
export const MAX_PAGE_NUMBER = MAX_COINS_LENGTH / COINS_PER_PAGE + 1;
