import { StyleSheet } from 'react-native';

import { VStack } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ICoinDetails } from '../../types/coinDetails';

import Divider from './Divider';
import MainInfo from './MainInfo';
import PriceInfo from './PriceInfo';

interface ICoinDetailsProps {
    coin: ICoinDetails;
}

export default function CoinDetails({ coin }: ICoinDetailsProps): JSX.Element {
    console.log(JSON.stringify(coin, null, 2));

    return (
        <VStack space={STYLE_VARIABLES.mdSpacing} style={styles.container}>
            <MainInfo {...coin} />

            <Divider />

            <PriceInfo {...coin} />
        </VStack>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: STYLE_VARIABLES.smPadding,
    },
});
