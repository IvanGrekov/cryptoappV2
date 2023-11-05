import { ActivityIndicator, StyleSheet } from 'react-native';

import { Box, Text } from 'native-base';

import { styleVariables } from '../../constants/style';
import { useCoinList } from '../../hooks/coinList.hooks';
import CoinList from '../coin-list/CoinList';
import Header from '../header/Header';
import IndicatorWrapper from '../indicator-wrapper/IndicatorWrapper';

export default function AppContent(): JSX.Element {
    const { coinList, isLoading, error, getMoreCoins } = useCoinList();

    return (
        <Box style={styles.contentBox}>
            <Box style={styles.mainContent}>
                <Header />

                {!!isLoading && (
                    <IndicatorWrapper>
                        <ActivityIndicator
                            size="large"
                            color={styleVariables.bgColor}
                        />
                    </IndicatorWrapper>
                )}

                {!!error && (
                    <IndicatorWrapper
                        style={{
                            backgroundColor: styleVariables.redOpacity,
                        }}
                    >
                        <Text style={styles.error}>{error}</Text>
                    </IndicatorWrapper>
                )}

                <CoinList
                    coinList={coinList}
                    isLoading={isLoading}
                    getMoreCoins={getMoreCoins}
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
        color: styleVariables.bgColor,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
