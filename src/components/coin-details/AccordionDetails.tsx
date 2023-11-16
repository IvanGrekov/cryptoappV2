import { PropsWithChildren } from 'react';

import { Accordion, VStack } from 'native-base';

export default function AccordionDetails({
    children,
}: PropsWithChildren): JSX.Element {
    return (
        <Accordion.Details>
            <VStack paddingX={1}>{children}</VStack>
        </Accordion.Details>
    );
}
