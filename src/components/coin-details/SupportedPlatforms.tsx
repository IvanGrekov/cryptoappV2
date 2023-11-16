import React from 'react';

import { Accordion, HStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ICoinDetails } from '../../types/coinDetails';

import AccordionDetails from './AccordionDetails';
import AccordionIcon from './AccordionIcon';
import AccordionSummary from './AccordionSummary';
import AccordionWrapper from './AccordionWrapper';

type TCoinDescriptionProps = Pick<ICoinDetails, 'supportedPlatforms'>;

export default function SupportedPlatforms({
    supportedPlatforms,
}: TCoinDescriptionProps): JSX.Element | null {
    if (!supportedPlatforms || !supportedPlatforms.length) {
        return null;
    }

    return (
        <AccordionWrapper>
            <Accordion.Item>
                <AccordionSummary>
                    Supported Platforms
                    <AccordionIcon />
                </AccordionSummary>

                <AccordionDetails>
                    {supportedPlatforms.map(({ blockchain, tokenStandard }) => (
                        <HStack key={`${blockchain}-${tokenStandard}`}>
                            <Text fontSize={STYLE_VARIABLES.smFontSize}>
                                {blockchain}
                            </Text>
                            <Text>{' - '}</Text>
                            <Text fontSize={STYLE_VARIABLES.smFontSize}>
                                {tokenStandard}
                            </Text>
                        </HStack>
                    ))}
                </AccordionDetails>
            </Accordion.Item>
        </AccordionWrapper>
    );
}
