import { StyleSheet } from 'react-native';

import { FlatList } from 'native-base';

import { TCoinList, ICoin } from '../../types/coinList';

import CoinItem from './CoinItem';
import ListSeparator from './ListSeparator';

interface ICoinsListProps {
    coinList: TCoinList;
    isLoading: boolean;
    getMoreCoins: () => Promise<void>;
}

export default function CoinList({
    coinList,
    isLoading,
    getMoreCoins,
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
        return `${item.id}${item.price}`;
    };

    const onEndReached = (): void => {
        if (!isLoading) {
            getMoreCoins();
        }
    };

    return (
        <FlatList
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
