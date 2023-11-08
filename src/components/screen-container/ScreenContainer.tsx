import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { Box } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';

export default function ScreenContainer({
    children,
}: PropsWithChildren): JSX.Element {
    return <Box style={styles.container}>{children}</Box>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: STYLE_VARIABLES.bgColor,
    },
});
