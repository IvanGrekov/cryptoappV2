import { useSearchCoin } from '../../hooks/searchCoin.hooks';
import EmptyStateIndicator from '../empty-state-indicator/EmptyStateIndicator';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';
import ScreenContainer from '../screen-container/ScreenContainer';
import SearchScreenContent from '../search-screen-content/SearchScreenContent';

export default function SearchScreen(): JSX.Element {
    const {
        data,
        searchValue,
        isLoading,
        isRefreshing,
        error,
        onChangeSearchValue,
        refreshCoinDetails,
    } = useSearchCoin();

    return (
        <ScreenContainer>
            <LoadingIndicator
                isLoading={isLoading || (!data && !error && !!searchValue)}
            />

            {!isLoading && <ErrorIndicator error={error} />}

            {!data && !error && !isLoading && !searchValue && (
                <EmptyStateIndicator text="No Search Results" />
            )}

            <SearchScreenContent
                data={data}
                searchValue={searchValue}
                isRefreshing={isRefreshing}
                onChangeSearchValue={onChangeSearchValue}
                refreshCoinDetails={refreshCoinDetails}
            />
        </ScreenContainer>
    );
}
