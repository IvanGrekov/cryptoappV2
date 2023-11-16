import { StyleSheet } from 'react-native';

import { VStack } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ICoinDetails } from '../../types/coinDetails';

import CoinDescription from './CoinDescription';
import Divider from './Divider';
import Explorers from './Explorers';
import ProjectLeaders from './Explorers copy';
import MainInfo from './MainInfo';
import PriceInfo from './PriceInfo';
import SupportedPlatforms from './SupportedPlatforms';

interface ICoinDetailsProps {
    coin: ICoinDetails;
}

export default function CoinDetails({ coin }: ICoinDetailsProps): JSX.Element {
    const { supportedPlatforms, explorers, projectLeaders } = coin;

    return (
        <VStack space={STYLE_VARIABLES.mdSpacing} style={styles.container}>
            <MainInfo {...coin} />

            <Divider />

            <PriceInfo {...coin} />

            <Divider />

            <CoinDescription {...coin} />

            <SupportedPlatforms supportedPlatforms={supportedPlatforms} />

            <Explorers explorers={explorers} />

            <ProjectLeaders projectLeaders={projectLeaders} />
        </VStack>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: STYLE_VARIABLES.smPadding,
    },
});
