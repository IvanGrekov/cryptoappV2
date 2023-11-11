import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

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
    };
};

export type TRootTabScreenProps<
    T extends keyof TRootTabsParamList = ERouteNames,
> = BottomTabScreenProps<TRootTabsParamList, T>;
