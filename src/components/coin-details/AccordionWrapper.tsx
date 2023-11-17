import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { Accordion } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';

export default function AccordionWrapper({
    children,
}: PropsWithChildren): JSX.Element {
    return <Accordion style={styles.wrapper}>{children}</Accordion>;
}

const styles = StyleSheet.create({
    wrapper: {
        margin: 0,
        borderColor: STYLE_VARIABLES.blackInvisible,
        borderRadius: 0,
    },
});
