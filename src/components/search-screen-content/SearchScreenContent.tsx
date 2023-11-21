import { StyleSheet, RefreshControl } from 'react-native';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ScrollView, VStack, Box } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ICoinDetails } from '../../types/coinDetails';
import { ERouteNames, TRootTabsParamList } from '../../types/routes';
import CoinItem from '../coin-list/CoinItem';
import SearchField from '../search-field/SearchField';

interface ISearchScreenContentProps {
    data: ICoinDetails | null;
    searchValue: string;
    isRefreshing: boolean;
    onChangeSearchValue: (value: string) => void;
    refreshCoinDetails: () => void;
}

export default function SearchScreenContent({
    data,
    searchValue,
    isRefreshing,
    onChangeSearchValue,
    refreshCoinDetails,
}: ISearchScreenContentProps): JSX.Element {
    const navigation = useNavigation<NavigationProp<TRootTabsParamList>>();

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
    );
}

const styles = StyleSheet.create({
    fieldWrapper: {
        padding: STYLE_VARIABLES.smPadding,
    },
});
