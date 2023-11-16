import { Accordion, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ICoinDetails } from '../../types/coinDetails';

import AccordionDetails from './AccordionDetails';
import AccordionIcon from './AccordionIcon';
import AccordionSummary from './AccordionSummary';
import AccordionWrapper from './AccordionWrapper';

type TCoinDescriptionProps = Pick<
    ICoinDetails,
    'assetDescription' | 'websiteUrl' | 'whitePageUrl'
>;

export default function CoinDescription({
    assetDescription,
    websiteUrl,
    whitePageUrl,
}: TCoinDescriptionProps): JSX.Element | null {
    if (!assetDescription) {
        return null;
    }

    return (
        <AccordionWrapper>
            <Accordion.Item>
                <AccordionSummary>
                    Description
                    <AccordionIcon />
                </AccordionSummary>

                <AccordionDetails>
                    <Text fontSize={STYLE_VARIABLES.smFontSize}>
                        {websiteUrl}
                    </Text>

                    <Text fontSize={STYLE_VARIABLES.smFontSize}>
                        {whitePageUrl}
                    </Text>

                    <Text fontSize={STYLE_VARIABLES.smFontSize}>
                        {assetDescription}
                    </Text>
                </AccordionDetails>
            </Accordion.Item>
        </AccordionWrapper>
    );
}
