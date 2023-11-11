import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export enum ERouteNames {
    HOME = 'Home',
    LIST = 'List',
    FAVORITES = 'Favorites',
    DETAILS = 'Details',
}

export type TRootTabsParamList = {
    Home: undefined;
    List: undefined;
    Favorites: undefined;
    Details: {
        symbol: string;
        prevPage: ERouteNames.FAVORITES | ERouteNames.LIST;
    };
};

export type TRootTabScreenProps<
    T extends keyof TRootTabsParamList = ERouteNames,
> = BottomTabScreenProps<TRootTabsParamList, T>;
