// import { useCoinList } from '../../hooks/coinList.hooks';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';
import ScreenContainer from '../screen-container/ScreenContainer';

export default function SearchScreen(): JSX.Element {
    // const {
    //     coinList,
    //     isLoading,
    //     isRefreshing,
    //     error,
    //     getMoreCoins,
    //     refreshCoinList,
    // } = useCoinList();

    return (
        <ScreenContainer>
            <LoadingIndicator isLoading={false} />

            <ErrorIndicator error="" />
        </ScreenContainer>
    );
}
