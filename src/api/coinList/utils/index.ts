import { COIN_IMAGES_URL } from '../../../constants/coinList';
import {
    TApiCoinList,
    TCoinList,
    TApiSymbolList,
} from '../../../types/coinList';

export const formatCoinList = (data?: TApiCoinList): TCoinList => {
    if (!data) {
        return [];
    }

    const result: TCoinList = [];

    data.forEach((coin) => {
        if (!coin.RAW || !coin.RAW.USD) {
            return;
        }

        const { Id, Name, FullName, ImageUrl } = coin.CoinInfo;
        const { PRICE, MKTCAP, FROMSYMBOL } = coin.RAW.USD;

        result.push({
            id: Id,
            name: Name,
            fullName: FullName,
            symbol: FROMSYMBOL,
            imageUrl: `${COIN_IMAGES_URL}${ImageUrl}`,
            price: PRICE,
            marketCap: MKTCAP,
        });
    });

    return result;
};

export const formatSymbolList = (data: TApiSymbolList): TCoinList => {
    const result: TCoinList = [];

    for (const symbol of Object.values(data.RAW)) {
        const { FROMSYMBOL, PRICE, MKTCAP, IMAGEURL } = symbol.USD;

        result.push({
            id: `${MKTCAP}`,
            name: FROMSYMBOL,
            fullName: FROMSYMBOL,
            symbol: FROMSYMBOL,
            imageUrl: `${COIN_IMAGES_URL}${IMAGEURL}`,
            price: PRICE,
            marketCap: MKTCAP,
        });
    }

    return result;
};
