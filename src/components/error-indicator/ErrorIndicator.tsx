import { StyleSheet } from 'react-native';

import { Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import IndicatorWrapper from '../indicator-wrapper/IndicatorWrapper';

interface IErrorIndicatorProps {
    error?: string;
}

export default function ErrorIndicator({
    error,
}: IErrorIndicatorProps): JSX.Element | null {
    if (!error) {
        return null;
    }

    return (
        <IndicatorWrapper
            style={{
                backgroundColor: STYLE_VARIABLES.redOpacity,
            }}
        >
            <Text style={styles.error}>{error}</Text>
        </IndicatorWrapper>
    );
}

const styles = StyleSheet.create({
    error: {
        color: STYLE_VARIABLES.bgColor,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
