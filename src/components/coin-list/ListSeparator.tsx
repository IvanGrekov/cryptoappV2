import React from 'react';
import { StyleSheet } from 'react-native';

import { Box } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';

export default function ListSeparator(): JSX.Element {
    return <Box style={styles.listSepartor} />;
}

const styles = StyleSheet.create({
    listSepartor: {
        height: 1,
        backgroundColor: STYLE_VARIABLES.grayOpacity,
    },
});
