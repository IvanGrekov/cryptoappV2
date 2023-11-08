import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CoinListScreenContent from '../components/coin-list-screen/CoinListScreen';
import FavoriteListScreen from '../components/favorite-list-screen/FavoriteListScreen';
import { ERouteNames } from '../types/routes';
import { getTabNavigatorOptions } from '../utils/tabNavigator.utils';

const Tab = createBottomTabNavigator();

export default function Routes(): JSX.Element {
    return (
        <Tab.Navigator
            initialRouteName={ERouteNames.LIST}
            screenOptions={getTabNavigatorOptions}
        >
            <Tab.Screen
                name={ERouteNames.LIST}
                component={CoinListScreenContent}
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
        </Tab.Navigator>
    );
}
