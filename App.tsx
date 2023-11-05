/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, SafeAreaView } from 'react-native';

import { NativeBaseProvider, StatusBar, Box } from 'native-base';

import AppContent from './src/components/app-content/AppContent';
import { styleVariables } from './src/constants/style';

function App(): JSX.Element {
    return (
        <NativeBaseProvider>
            <SafeAreaView>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={styleVariables.bgColor}
            />
            <Box style={styles.appWrapper}>
                <AppContent />
            </Box>
            </SafeAreaView>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    appWrapper: {
        height: '100%',
        backgroundColor: styleVariables.bgColor,
    },
});

export default App;
