import { ERouteNames, TDetailsPrevPage } from '../../../types/routes';

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

export const roundMarketCap = (marketCap: number): string => {
    let number;
    let text;

    if (marketCap < 1_000_000_000) {
        number = marketCap / 1_000_000;
        text = 'mln';
    } else {
        number = marketCap / 1_000_000_000;
        text = 'bln';
    }

    return `$${number.toFixed(2)} ${text}`;
};

export const roundPrice = (price: number): string => {
    let number;

    switch (true) {
        case price < 1:
            number = price.toFixed(3);
            break;

        case price < 10:
            number = price.toFixed(2);
            break;

        case price < 100:
            number = price.toFixed(1);
            break;

        default:
            number = price.toFixed(0);
    }

    return `$${number}`;
};
