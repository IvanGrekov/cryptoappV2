import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { STYLE_VARIABLES } from '../constants/style';
import { ERouteNames, TRootTabScreenProps } from '../types/routes';

export const getStackNavigationOptions = (): NativeStackNavigationOptions => {
    return {
        headerTintColor: STYLE_VARIABLES.black,
        headerStyle: {
            backgroundColor: STYLE_VARIABLES.bgColor,
        },
    };
};

type TGetDetailsScreenOptions = (
    args: TRootTabScreenProps<ERouteNames.DETAILS>,
) => NativeStackNavigationOptions;

export const getDetailsScreenOptions: TGetDetailsScreenOptions = ({
    route,
}) => {
    const { symbol, prevPage } = route.params;

    return {
        title: symbol,
        headerBackTitle: prevPage,
    };
};
