import { Button } from 'native-base';

import { useFavoriteCoins } from '../../hooks/favoriteCoins.hooks';
import { TRootTabScreenProps, ERouteNames } from '../../types/routes';
import CoinList from '../coin-list/CoinList';
import EmptyStateIndicator from '../empty-state-indicator/EmptyStateIndicator';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';
import ScreenContainer from '../screen-container/ScreenContainer';

export default function FavoriteListScreen({
    navigation,
}: TRootTabScreenProps): JSX.Element {
    const {
        favoriteList,
        coinList,
        isLoading,
        isRefreshing,
        error,
        getMoreCoins,
        refreshCoinList,
    } = useFavoriteCoins();

    if (!favoriteList) {
        return (
            <ScreenContainer>
                <LoadingIndicator />
            </ScreenContainer>
        );
    }

    if (!favoriteList.length) {
        return (
            <ScreenContainer>
                <EmptyStateIndicator text="No Favorite Coins">
                    <Button
                        onPress={(): void => {
                            navigation.navigate(ERouteNames.LIST);
                        }}
                    >
                        Coins List
                    </Button>
                </EmptyStateIndicator>
            </ScreenContainer>
        );
    }

    return (
        <ScreenContainer>
            <LoadingIndicator isLoading={isLoading} />

            <ErrorIndicator error={error} />

            <CoinList
                coinList={coinList}
                isLoading={isLoading}
                isRefreshing={isRefreshing}
                isFavoriteList={true}
                getMoreCoins={getMoreCoins}
                refreshCoinList={refreshCoinList}
            />
        </ScreenContainer>
    );
}
