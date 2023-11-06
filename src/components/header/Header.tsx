import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, HStack, Text } from 'native-base';

import { STYLE_VARIABLES, THEME } from '../../constants/style';
import { EImageSizeType } from '../../types/images';
import Logo from '../logo/Logo';

export default function Header(): JSX.Element {
    return (
        <Box style={styles.header}>
            <HStack space={4} alignItems="center">
                <Logo size={EImageSizeType.XS} />
                <Text style={styles.text}>CryptoCoins</Text>
            </HStack>
        </Box>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: STYLE_VARIABLES.mdPadding,
    },
    text: {
        color: THEME.colors.gray[700],
        fontSize: STYLE_VARIABLES.extraHeadingFontSize,
        lineHeight: STYLE_VARIABLES.extraHeadingFontSize,
        fontWeight: 'bold',
    },
});
