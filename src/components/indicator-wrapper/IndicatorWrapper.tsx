import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { Box } from 'native-base';

import { styleVariables } from '../../constants/style';

interface IIndicatorWrapperProps extends PropsWithChildren {
    style?: Record<string, unknown>;
}

const SIZE = 150;

export default function IndicatorWrapper({
    style = {},
    children,
}: IIndicatorWrapperProps): JSX.Element {
    const styles = StyleSheet.create({
        indicatorWrapper: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            zIndex: 1,
            width: SIZE,
            height: SIZE,
            transform: [
                { translateX: -(SIZE / 2) },
                { translateY: -(SIZE / 2) },
            ],
            padding: 10,
            borderRadius: styleVariables.mdRadius,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: styleVariables.fgOpacity,
            ...style,
        },
    });

    return (
        <Box style={{ ...styles.indicatorWrapper, ...style }}>{children}</Box>
    );
}
