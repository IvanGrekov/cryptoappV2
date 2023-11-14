import { StyleSheet, RefreshControl } from 'react-native';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ScrollView, VStack, Box } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { useSearchCoin } from '../../hooks/searchCoin.hooks';
import { TRootTabsParamList, ERouteNames } from '../../types/routes';
import CoinItem from '../coin-list/CoinItem';
import EmptyStateIndicator from '../empty-state-indicator/EmptyStateIndicator';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';
import ScreenContainer from '../screen-container/ScreenContainer';
import SearchField from '../search-field/SearchField';

export default function SearchScreen(): JSX.Element {
    const navigation = useNavigation<NavigationProp<TRootTabsParamList>>();

    const {
        searchValue,
        data,
        isLoading,
        isRefreshing,
        error,
        onChangeSearchValue,
        refreshCoinDetails,
    } = useSearchCoin();

    const onItemPress = (): void => {
        if (!data) {
            return;
        }

        return navigation.navigate(ERouteNames.DETAILS, {
            symbol: searchValue,
            prevPage: ERouteNames.SEARCH,
            data,
        });
    };

    return (
        <ScreenContainer>
            <LoadingIndicator
                isLoading={isLoading || (!data && !error && !!searchValue)}
            />

            {!isLoading && <ErrorIndicator error={error} />}

            {!data && !error && !isLoading && !searchValue && (
                <EmptyStateIndicator text="No Search Results" />
            )}

            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={refreshCoinDetails}
                    />
                }
            >
                <VStack space={STYLE_VARIABLES.xsSpacing}>
                    <Box style={styles.fieldWrapper}>
                        <SearchField
                            value={searchValue}
                            onChangeText={onChangeSearchValue}
                        />
                    </Box>

                    {!!data && (
                        <CoinItem
                            coin={data}
                            isSearchList={true}
                            onItemPress={onItemPress}
                        />
                    )}
                </VStack>
            </ScrollView>
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    fieldWrapper: {
        padding: STYLE_VARIABLES.smPadding,
    },
});
