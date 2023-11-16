import React from 'react';

import { Accordion, HStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ICoinDetails } from '../../types/coinDetails';

import AccordionDetails from './AccordionDetails';
import AccordionIcon from './AccordionIcon';
import AccordionSummary from './AccordionSummary';
import AccordionWrapper from './AccordionWrapper';

type TCoinDescriptionProps = Pick<ICoinDetails, 'projectLeaders'>;

export default function ProjectLeaders({
    projectLeaders,
}: TCoinDescriptionProps): JSX.Element | null {
    if (!projectLeaders || !projectLeaders.length) {
        return null;
    }

    return (
        <AccordionWrapper>
            <Accordion.Item>
                <AccordionSummary>
                    Project Leaders
                    <AccordionIcon />
                </AccordionSummary>

                <AccordionDetails>
                    {projectLeaders.map(({ leaderType, fullName }) => (
                        <HStack key={`${leaderType}-${fullName}`}>
                            <Text fontSize={STYLE_VARIABLES.smFontSize}>
                                {leaderType}
                            </Text>
                            <Text>{' - '}</Text>
                            <Text fontSize={STYLE_VARIABLES.smFontSize}>
                                {fullName}
                            </Text>
                        </HStack>
                    ))}
                </AccordionDetails>
            </Accordion.Item>
        </AccordionWrapper>
    );
}
