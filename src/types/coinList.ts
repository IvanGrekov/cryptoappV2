export interface IApiCoin {
    CoinInfo: {
        Id: string;
        Name: string;
        FullName: string;
        ImageUrl: string;
    };
    RAW: {
        USD: {
            PRICE: number;
            MKTCAP: number;
            FROMSYMBOL: string;
        } | null;
    } | null;
}

export type TApiCoinList = IApiCoin[];

export interface ICoin {
    id: string;
    name: string;
    fullName: string;
    symbol: string;
    imageUrl: string;
    price: number;
    marketCap: number;
    marketCapRank?: number;
}

export type TCoinList = ICoin[];
