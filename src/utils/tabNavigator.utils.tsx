import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteProp, ParamListBase } from '@react-navigation/native';
import { HamburgerIcon, FavouriteIcon, SearchIcon } from 'native-base';

import { STYLE_VARIABLES } from '../constants/style';
import { ERouteNames } from '../types/routes';

type TGetTabNavigatorColor = (args: {
    routeName: string;
    focused: boolean;
}) => string;

const getTabNavigatorColor: TGetTabNavigatorColor = ({
    focused,
    routeName,
}) => {
    if (!focused) {
        return STYLE_VARIABLES.grayOpacity;
    }

    if (routeName === ERouteNames.FAVORITES) {
        return STYLE_VARIABLES.red;
    }

    return STYLE_VARIABLES.bgColor;
};

type TGetTabNavigatorIcon = (args: {
    routeName: string;
    focused: boolean;
    size: number;
}) => JSX.Element;

const getTabNavigatorIcon: TGetTabNavigatorIcon = ({
    routeName,
    focused,
    size,
}) => {
    const iconColor = getTabNavigatorColor({ focused, routeName });

    if (routeName === ERouteNames.FAVORITES) {
        return <FavouriteIcon size={size} color={iconColor} />;
    }

    if (routeName === ERouteNames.SEARCH) {
        return <SearchIcon size={size} color={iconColor} />;
    }

    return <HamburgerIcon size={size} color={iconColor} />;
};

type TGetTabNavigatorOptions = (args: {
    route: RouteProp<ParamListBase, string>;
    navigation: unknown;
}) => BottomTabNavigationOptions;

export const getTabNavigatorOptions: TGetTabNavigatorOptions = ({ route }) => {
    const routeName = route.name;

    return {
        tabBarIcon: (props) =>
            getTabNavigatorIcon({
                ...props,
                routeName,
            }),
        tabBarInactiveTintColor: getTabNavigatorColor({
            routeName,
            focused: false,
        }),
        tabBarActiveTintColor: getTabNavigatorColor({
            routeName,
            focused: true,
        }),
        tabBarStyle: {
            height: 55,
            paddingBottom: 5,
            backgroundColor: STYLE_VARIABLES.black,
            borderTopWidth: 0,
        },
    };
};
