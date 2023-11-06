import { ActivityIndicator, StyleSheet } from 'react-native';

import { Box, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { useCoinList } from '../../hooks/coinList.hooks';
import CoinList from '../coin-list/CoinList';
import Header from '../header/Header';
import IndicatorWrapper from '../indicator-wrapper/IndicatorWrapper';

export default function AppContent(): JSX.Element {
    const {
        coinList,
        isLoading,
        isRefreshing,
        error,
        getMoreCoins,
        refreshCoinList,
    } = useCoinList();

    return (
        <Box style={styles.contentBox}>
            <Box style={styles.mainContent}>
                <Header />

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
            </Box>
        </Box>
    );
}

const styles = StyleSheet.create({
    contentBox: {
        flex: 1,
    },
    mainContent: {
        flex: 1,
    },
    error: {
        color: STYLE_VARIABLES.bgColor,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
