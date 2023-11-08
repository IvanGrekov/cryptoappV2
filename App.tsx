import { SafeAreaView, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar, Box } from 'native-base';

import Header from './src/components/header/Header';
import { THEME, STYLE_VARIABLES } from './src/constants/style';
import Routes from './src/routes';

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <NativeBaseProvider theme={THEME}>
                <SafeAreaView>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor={STYLE_VARIABLES.bgColor}
                    />

                    <Box style={styles.appWrapper}>
                        <Header />
                        <Routes />
                    </Box>
                </SafeAreaView>
            </NativeBaseProvider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    appWrapper: {
        height: '100%',
        backgroundColor: STYLE_VARIABLES.bgColor,
    },
});

export default App;
