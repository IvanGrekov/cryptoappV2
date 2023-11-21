import { PropsWithChildren, ReactNode } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CoinDetailsScreen from '../components/coin-details-screen/CoinDetailsScreen';
import CoinListScreen from '../components/coin-list-screen/CoinListScreen';
import FavoriteListScreen from '../components/favorite-list-screen/FavoriteListScreen';
import SearchScreen from '../components/search-screen/SearchScreen';
import { TRootTabsParamList, ERouteNames } from '../types/routes';
import {
    getStackNavigationOptions,
    getDetailsScreenOptions,
} from '../utils/stackNavigator.utils';
import { getTabNavigatorOptions } from '../utils/tabNavigator.utils';

const Tab = createBottomTabNavigator<TRootTabsParamList>();
const Stack = createNativeStackNavigator<TRootTabsParamList>();

function HomeRoutes({ children }: PropsWithChildren): JSX.Element {
    return (
        <>
            {children}

            <Tab.Navigator
                initialRouteName={ERouteNames.LIST}
                screenOptions={getTabNavigatorOptions}
            >
                <Tab.Screen
                    name={ERouteNames.LIST}
                    component={CoinListScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Tab.Screen
                    name={ERouteNames.FAVORITES}
                    component={FavoriteListScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Tab.Screen
                    name={ERouteNames.SEARCH}
                    component={SearchScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Tab.Navigator>
        </>
    );
}

interface IRoutesProps {
    homeScreenChildren?: ReactNode;
}

export default function Routes({
    homeScreenChildren,
}: IRoutesProps): JSX.Element {
    return (
        <Stack.Navigator
            initialRouteName={ERouteNames.HOME}
            screenOptions={getStackNavigationOptions}
        >
            <Stack.Screen
                name={ERouteNames.HOME}
                options={{ headerShown: false }}
            >
                {(props): JSX.Element => (
                    <HomeRoutes {...props}>{homeScreenChildren}</HomeRoutes>
                )}
            </Stack.Screen>

            <Stack.Screen
                name={ERouteNames.DETAILS}
                component={CoinDetailsScreen}
                options={getDetailsScreenOptions}
            />
        </Stack.Navigator>
    );
}
