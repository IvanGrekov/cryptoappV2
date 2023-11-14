import { Divider as NativeDivider } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';

interface IDividerProps {
    orientation?: 'horizontal' | 'vertical';
}

export default function Divider({
    orientation = 'horizontal',
}: IDividerProps): JSX.Element {
    return (
        <NativeDivider
            orientation={orientation}
            _light={{
                bg: STYLE_VARIABLES.blackInvisible,
            }}
            _dark={{
                bg: STYLE_VARIABLES.blackInvisible,
            }}
        />
    );
}
