import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, HStack, Text } from 'native-base';

import { styleVariables } from '../../constants/style';
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
        padding: styleVariables.mdPadding,
        paddingBottom: 20,
    },
    text: {
        fontSize: 24,
        lineHeight: 24,
        fontWeight: 'bold',
    },
});
