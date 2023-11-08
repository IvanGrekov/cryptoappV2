import { Text, Button } from 'native-base';

import { useFavoriteCoins } from '../../hooks/favoriteCoins.hooks';
import { TRootTabScreenProps, ERouteNames } from '../../types/routes';
import EmptyStateIndicator from '../empty-state-indicator/EmptyStateIndicator';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';
import ScreenContainer from '../screen-container/ScreenContainer';

type TFavoriteLisTRootTabScreenProps = TRootTabScreenProps<'Favorites'>;

export default function FavoriteListScreen({
    navigation,
}: TFavoriteLisTRootTabScreenProps): JSX.Element {
    const { favoriteList, isLoading, error } = useFavoriteCoins();

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

            {favoriteList.map((favorite: string) => (
                <Text key={favorite}>{favorite}</Text>
            ))}
        </ScreenContainer>
    );
}
