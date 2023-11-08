import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteProp, ParamListBase } from '@react-navigation/native';
import { HamburgerIcon, FavouriteIcon } from 'native-base';

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

    if (routeName === ERouteNames.LIST) {
        return STYLE_VARIABLES.bgColor;
    }

    return STYLE_VARIABLES.red;
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
    if (routeName === ERouteNames.LIST) {
        const iconColor = getTabNavigatorColor({ focused, routeName });

        return <HamburgerIcon size={size} color={iconColor} />;
    }

    const iconColor = getTabNavigatorColor({ focused, routeName });

    return <FavouriteIcon size={size} color={iconColor} />;
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
