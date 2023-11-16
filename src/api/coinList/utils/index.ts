import { COIN_IMAGES_URL } from '../../../constants/coinList';
import { IApiCoinAsset, ICoinDetails } from '../../../types/coinDetails';
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

        const { Id, FullName, ImageUrl } = coin.CoinInfo;
        const { PRICE, MKTCAP, FROMSYMBOL } = coin.RAW.USD;

        result.push({
            id: Id,
            name: FullName,
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

const getAssetIndustries = (
    data?: IApiCoinAsset['Data']['ASSET_INDUSTRIES'],
): string[] | undefined => {
    return data?.map(({ ASSET_INDUSTRY }) => ASSET_INDUSTRY);
};

const getTwitterAccount = (
    data?: IApiCoinAsset['Data']['TWITTER_ACCOUNTS'],
): ICoinDetails['twitterAccount'] => {
    const mainTwitterAccount = data?.[0];

    if (!mainTwitterAccount) {
        return undefined;
    }

    return {
        url: mainTwitterAccount.URL,
        followers: mainTwitterAccount.FOLLOWERS,
    };
};

const getSupportedPlatforms = (
    data?: IApiCoinAsset['Data']['SUPPORTED_PLATFORMS'],
): ICoinDetails['supportedPlatforms'] => {
    const filteredData = data?.filter(
        ({ BLOCKCHAIN, TOKEN_STANDARD }) => BLOCKCHAIN && TOKEN_STANDARD,
    );

    return filteredData?.map(({ BLOCKCHAIN, TOKEN_STANDARD }) => ({
        blockchain: BLOCKCHAIN,
        tokenStandard: TOKEN_STANDARD,
    })) as ICoinDetails['supportedPlatforms'];
};

const getProjectLeaders = (
    data?: IApiCoinAsset['Data']['PROJECT_LEADERS'],
): ICoinDetails['projectLeaders'] => {
    return data?.map(({ LEADER_TYPE, FULL_NAME }) => ({
        leaderType: LEADER_TYPE,
        fullName: FULL_NAME,
    }));
};

const getExplorers = (
    data?: IApiCoinAsset['Data']['EXPLORER_ADDRESSES'],
): ICoinDetails['explorers'] => {
    return data?.map(({ URL }) => {
        const name = URL.split('/')[2];

        return {
            name,
            url: URL,
        };
    });
};

export const formatSymbolAsset = (data: IApiCoinAsset): ICoinDetails => {
    const {
        NAME,
        SYMBOL,
        LOGO_URL,
        PRICE_USD,
        TOTAL_MKT_CAP_USD,
        TOPLIST_BASE_RANK,
        SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD,
        ASSET_INDUSTRIES,
        ASSET_DESCRIPTION_SNIPPET,
        ASSET_DESCRIPTION_SUMMARY = ASSET_DESCRIPTION_SNIPPET,
        SUPPLY_MAX,
        SUPPLY_ISSUED,
        WEBSITE_URL,
        WHITE_PAPER_URL,
        TWITTER_ACCOUNTS,
        PROJECT_LEADERS,
        EXPLORER_ADDRESSES,
        SUPPORTED_PLATFORMS,
    } = data.Data;

    return {
        id: `${TOTAL_MKT_CAP_USD}`,
        name: NAME,
        fullName: NAME,
        symbol: SYMBOL,
        imageUrl: LOGO_URL,
        price: PRICE_USD,
        marketCap: TOTAL_MKT_CAP_USD,
        marketCapRank: TOPLIST_BASE_RANK.CIRCULATING_MKT_CAP_USD,
        change24h: SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD,
        assetDescription: ASSET_DESCRIPTION_SUMMARY,
        assetIndustries: getAssetIndustries(ASSET_INDUSTRIES),
        maxSupply: SUPPLY_MAX ? SUPPLY_MAX : undefined,
        issuedSupply: SUPPLY_MAX && SUPPLY_ISSUED ? SUPPLY_ISSUED : undefined,
        websiteUrl: WEBSITE_URL,
        whitePageUrl: WHITE_PAPER_URL,
        twitterAccount: getTwitterAccount(TWITTER_ACCOUNTS),
        projectLeaders: getProjectLeaders(PROJECT_LEADERS),
        supportedPlatforms: getSupportedPlatforms(SUPPORTED_PLATFORMS),
        explorers: getExplorers(EXPLORER_ADDRESSES),
    };
};
