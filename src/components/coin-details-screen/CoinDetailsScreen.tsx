import { TRootTabScreenProps, ERouteNames } from '../../types/routes';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';
import ScreenContainer from '../screen-container/ScreenContainer';

export default function CoinDetailsScreen({
    route,
}: TRootTabScreenProps<ERouteNames.DETAILS>): JSX.Element {
    const { symbol } = route.params;
    symbol;

    return (
        <ScreenContainer>
            <LoadingIndicator isLoading={false} />

            <ErrorIndicator error="" />
        </ScreenContainer>
    );
}
