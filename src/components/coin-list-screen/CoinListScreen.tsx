import { ActivityIndicator, StyleSheet } from 'react-native';

import { Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { useCoinList } from '../../hooks/coinList.hooks';
import CoinList from '../coin-list/CoinList';
import IndicatorWrapper from '../indicator-wrapper/IndicatorWrapper';
import ScreenContainer from '../screen-container/ScreenContainer';

export default function CoinListScreen(): JSX.Element {
    const {
        coinList,
        isLoading,
        isRefreshing,
        error,
        getMoreCoins,
        refreshCoinList,
    } = useCoinList();

    return (
        <ScreenContainer>
            {!!isLoading && (
                <IndicatorWrapper>
                    <ActivityIndicator
                        size="large"
                        color={STYLE_VARIABLES.bgColor}
                    />
                </IndicatorWrapper>
            )}

            {!!error && (
                <IndicatorWrapper
                    style={{
                        backgroundColor: STYLE_VARIABLES.redOpacity,
                    }}
                >
                    <Text style={styles.error}>{error}</Text>
                </IndicatorWrapper>
            )}

            <CoinList
                coinList={coinList}
                isLoading={isLoading}
                isRefreshing={isRefreshing}
                getMoreCoins={getMoreCoins}
                refreshCoinList={refreshCoinList}
            />
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    error: {
        color: STYLE_VARIABLES.bgColor,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
