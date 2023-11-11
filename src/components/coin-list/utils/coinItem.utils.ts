import { ERouteNames, TDetailsPrevPage } from '../../../types/routes';

const MAX_NAME_LENGTH = 12;

type TGetCoinName = (args: { name: string; symbol: string }) => string;

export const getCoinName: TGetCoinName = ({ name, symbol }) => {
    return name.length > MAX_NAME_LENGTH ? symbol.toUpperCase() : name;
};

export const roundMarketCap = (marketCap: number): string => {
    return (marketCap / 1_000_000_000).toFixed(2);
};

export const roundPrice = (price: number): string => {
    if (price < 1) {
        return price.toFixed(3);
    }

    if (price < 10) {
        return price.toFixed(2);
    }

    if (price < 100) {
        return price.toFixed(1);
    }

    return price.toFixed(0);
};

type TGetPrevPagePath = (args: {
    isSearchList?: boolean;
    isFavoriteList?: boolean;
}) => TDetailsPrevPage;

export const getPrevPagePath: TGetPrevPagePath = ({
    isSearchList,
    isFavoriteList,
}) => {
    if (isSearchList) {
        return ERouteNames.SEARCH;
    }

    if (isFavoriteList) {
        return ERouteNames.FAVORITES;
    }

    return ERouteNames.LIST;
};
