import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export enum ERouteNames {
    LIST = 'List',
    FAVORITES = 'Favorites',
    DETAILS = 'Details',
}

export type TRootTabsParamList = {
    List: undefined;
    Favorites: undefined;
    Details: { symbol: string };
};

export type TRootTabScreenProps<T extends keyof TRootTabsParamList> =
    BottomTabScreenProps<TRootTabsParamList, T>;
