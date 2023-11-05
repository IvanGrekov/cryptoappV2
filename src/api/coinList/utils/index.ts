import { COIN_IMAGES_URL } from '../../../constants/coinList';
import { TApiCoinList, TCoinList } from '../../../types/coinList';

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
