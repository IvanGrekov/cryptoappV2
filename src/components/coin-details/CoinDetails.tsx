import { Text } from 'native-base';

import { ICoinDetails } from '../../types/coinDetails';

interface ICoinDetailsProps {
    coin: ICoinDetails;
}

export default function CoinDetails({ coin }: ICoinDetailsProps): JSX.Element {
    const { fullName } = coin;

    return <Text>{fullName}</Text>;
}
