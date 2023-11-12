import { StyleSheet } from 'react-native';

import { VStack, Box } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { useSearchCoin } from '../../hooks/searchCoin.hooks';
import CoinItem from '../coin-list/CoinItem';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';
import ScreenContainer from '../screen-container/ScreenContainer';
import SearchField from '../search-field/SearchField';

export default function SearchScreen(): JSX.Element {
    const { searchValue, data, isLoading, error, onChangeSearchValue } =
        useSearchCoin();

    return (
        <ScreenContainer>
            <LoadingIndicator isLoading={isLoading} />

            <ErrorIndicator error={error} />

            <VStack space={STYLE_VARIABLES.mdSpacing}>
                <Box style={styles.fieldWrapper}>
                    <SearchField
                        value={searchValue}
                        onChangeText={onChangeSearchValue}
                    />
                </Box>

                {!!data && <CoinItem coin={data} isSearchList={true} />}
            </VStack>
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    fieldWrapper: {
        padding: STYLE_VARIABLES.smPadding,
    },
});
