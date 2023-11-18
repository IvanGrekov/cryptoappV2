import { StyleSheet } from 'react-native';

import { Accordion, VStack, HStack, Link, Badge, Text } from 'native-base';

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
                    <VStack space={STYLE_VARIABLES.smSpacing}>
                        <HStack space={STYLE_VARIABLES.smSpacing}>
                            <Link href={websiteUrl}>
                                <Badge
                                    variant="outline"
                                    colorScheme="info"
                                    style={styles.badge}
                                >
                                    Website
                                </Badge>
                            </Link>

                            <Link href={whitePageUrl}>
                                <Badge
                                    variant="outline"
                                    colorScheme="text"
                                    style={styles.badge}
                                >
                                    White Paper
                                </Badge>
                            </Link>
                        </HStack>

                        <Text fontSize={STYLE_VARIABLES.smFontSize}>
                            {assetDescription}
                        </Text>
                    </VStack>
                </AccordionDetails>
            </Accordion.Item>
        </AccordionWrapper>
    );
}

const styles = StyleSheet.create({
    badge: {
        borderRadius: STYLE_VARIABLES.xsRadius,
    },
});
