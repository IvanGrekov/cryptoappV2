import { StyleSheet, RefreshControl } from 'react-native';

import { FlatList } from 'native-base';

import { TCoinList, ICoin } from '../../types/coinList';

import CoinItem from './CoinItem';
import ListSeparator from './ListSeparator';

interface ICoinsListProps {
    coinList: TCoinList;
    isLoading: boolean;
    isRefreshing: boolean;
    getMoreCoins: () => Promise<void>;
    refreshCoinList: () => Promise<void>;
}

export default function CoinList({
    coinList,
    isLoading,
    isRefreshing,
    getMoreCoins,
    refreshCoinList,
}: ICoinsListProps): JSX.Element {
    const renderItem = ({
        item,
        index,
    }: {
        item: ICoin;
        index: number;
    }): JSX.Element => {
        return <CoinItem coin={{ ...item, marketCapRank: ++index }} />;
    };

    const createKeyExtractor = (item: ICoin): string => {
        return item.id;
    };

    const onEndReached = (): void => {
        if (!isLoading) {
            getMoreCoins();
        }
    };

    return (
        <FlatList
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={refreshCoinList}
                />
            }
            style={styles.list}
            data={coinList}
            onEndReachedThreshold={0.5}
            renderItem={renderItem}
            keyExtractor={createKeyExtractor}
            onEndReached={onEndReached}
            ItemSeparatorComponent={ListSeparator}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        flexGrow: 1,
    },
});
