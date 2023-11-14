import { Divider as NativeDivider } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';

export default function Divider(): JSX.Element {
    return (
        <NativeDivider
            _light={{
                bg: STYLE_VARIABLES.blackInvisible,
            }}
            _dark={{
                bg: STYLE_VARIABLES.blackInvisible,
            }}
        />
    );
}
