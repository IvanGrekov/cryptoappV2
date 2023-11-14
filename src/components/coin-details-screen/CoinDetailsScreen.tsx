import { TRootTabScreenProps, ERouteNames } from '../../types/routes';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';
import ScreenContainer from '../screen-container/ScreenContainer';

export default function CoinDetailsScreen({
    route,
}: TRootTabScreenProps<ERouteNames.DETAILS>): JSX.Element {
    const { symbol, data } = route.params;

    console.log('symbol', symbol);
    console.log('data', data);

    return (
        <ScreenContainer>
            <LoadingIndicator isLoading={false} />

            <ErrorIndicator error="" />
        </ScreenContainer>
    );
}
