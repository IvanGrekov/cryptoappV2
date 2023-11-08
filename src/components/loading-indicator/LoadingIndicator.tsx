import { ActivityIndicator } from 'react-native';

import { STYLE_VARIABLES } from '../../constants/style';
import IndicatorWrapper from '../indicator-wrapper/IndicatorWrapper';

interface ILoadingIndicatorProps {
    isLoading?: boolean;
}

export default function LoadingIndicator({
    isLoading = true,
}: ILoadingIndicatorProps): JSX.Element | null {
    if (!isLoading) {
        return null;
    }

    return (
        <IndicatorWrapper>
            <ActivityIndicator size="large" color={STYLE_VARIABLES.bgColor} />
        </IndicatorWrapper>
    );
}
