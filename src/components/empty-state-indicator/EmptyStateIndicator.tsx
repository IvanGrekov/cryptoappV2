import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { VStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import IndicatorWrapper from '../indicator-wrapper/IndicatorWrapper';

interface IEmptyStateIndicatorProps extends PropsWithChildren {
    text?: string;
}

export default function EmptyStateIndicator({
    text = 'No data',
    children,
}: IEmptyStateIndicatorProps): JSX.Element {
    return (
        <IndicatorWrapper>
            <VStack space={STYLE_VARIABLES.mdSpacing}>
                <Text style={styles.emptyState}>{text}</Text>

                {children}
            </VStack>
        </IndicatorWrapper>
    );
}

const styles = StyleSheet.create({
    emptyState: {
        color: STYLE_VARIABLES.bgColor,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
