import { ICoin } from './coinList';

interface IToplistBaseRank {
    TOTAL_MKT_CAP_USD: number;
}

// 'PAYMENT', 'STABLECOIN', ...
interface IApiAssetIndustry {
    ASSET_INDUSTRY: string;
}

interface IApiSupportedPlatform {
    BLOCKCHAIN?: string;
    TOKEN_STANDARD?: string;
}

interface IApiTwitterAccount {
    URL: string;
    FOLLOWERS: number;
}

interface IApiProjectLeader {
    LEADER_TYPE: string;
    FULL_NAME: string;
}

interface IApiExplorerAddress {
    URL: string;
}

export interface IApiCoinAsset {
    Data: {
        NAME: string;
        SYMBOL: string;
        PRICE_USD: number;
        TOTAL_MKT_CAP_USD: number;
        SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD: number;
        LOGO_URL: string;
        TOPLIST_BASE_RANK: IToplistBaseRank;
        ASSET_INDUSTRIES?: IApiAssetIndustry[];
        SUPPORTED_PLATFORMS?: IApiSupportedPlatform[];
        SUPPLY_MAX?: number;
        SUPPLY_ISSUED?: number;
        TWITTER_ACCOUNTS?: IApiTwitterAccount[];
        WHITE_PAPER_URL?: string;
        WEBSITE_URL?: string;
        ASSET_DESCRIPTION_SNIPPET?: string;
        ASSET_DESCRIPTION_SUMMARY?: string;
        PROJECT_LEADERS?: IApiProjectLeader[];
        EXPLORER_ADDRESSES?: IApiExplorerAddress[];
    };
    Err: {
        message?: string;
    };
}

export interface ISupportedPlatform {
    blockchain: string;
    tokenStandard: string;
}

export interface ITwitterAccount {
    url: string;
    followers: number;
}

export interface IProjectLeader {
    leaderType: string;
    fullName: string;
}

export interface IExplorer {
    name: string;
    url: string;
}

export interface ICoinDetails extends ICoin {
    marketCapRank: number;
    change24h: number;
    assetDescription?: string;
    assetIndustries?: string[];
    supportedPlatforms?: ISupportedPlatform[];

    // in case is not a stablecoin and value is valid (> 0)
    maxSupply?: number;
    issuedSupply?: number;

    whitePageUrl?: string;
    websiteUrl?: string;
    twitterAccount?: ITwitterAccount;

    projectLeaders?: IProjectLeader[];
    explorers?: IExplorer[];
}
