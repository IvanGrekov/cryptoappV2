import React from 'react';

import { Accordion, HStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ICoinDetails } from '../../types/coinDetails';

import AccordionDetails from './AccordionDetails';
import AccordionIcon from './AccordionIcon';
import AccordionSummary from './AccordionSummary';
import AccordionWrapper from './AccordionWrapper';

type TCoinDescriptionProps = Pick<ICoinDetails, 'explorers'>;

export default function Explorers({
    explorers,
}: TCoinDescriptionProps): JSX.Element | null {
    if (!explorers || !explorers.length) {
        return null;
    }

    return (
        <AccordionWrapper>
            <Accordion.Item>
                <AccordionSummary>
                    Explorers
                    <AccordionIcon />
                </AccordionSummary>

                <AccordionDetails>
                    {explorers.map(({ name, url }) => (
                        <HStack key={name}>
                            <Text fontSize={STYLE_VARIABLES.smFontSize}>
                                {name}
                            </Text>
                            <Text>{' - '}</Text>
                            <Text fontSize={STYLE_VARIABLES.smFontSize}>
                                {url}
                            </Text>
                        </HStack>
                    ))}
                </AccordionDetails>
            </Accordion.Item>
        </AccordionWrapper>
    );
}
