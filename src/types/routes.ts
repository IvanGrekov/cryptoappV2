import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { ICoinDetails } from './coinDetails';

export enum ERouteNames {
    HOME = 'Home',
    LIST = 'List',
    FAVORITES = 'Favorites',
    DETAILS = 'Details',
    SEARCH = 'Search',
}

export type TDetailsPrevPage =
    | ERouteNames.FAVORITES
    | ERouteNames.LIST
    | ERouteNames.SEARCH;

export type TRootTabsParamList = {
    Home: undefined;
    List: undefined;
    Favorites: undefined;
    Search: undefined;
    Details: {
        symbol: string;
        prevPage: TDetailsPrevPage;
        data?: ICoinDetails;
    };
};

export type TRootTabScreenProps<
    T extends keyof TRootTabsParamList = ERouteNames,
> = BottomTabScreenProps<TRootTabsParamList, T>;
