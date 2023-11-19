import { StyleSheet } from 'react-native';

import { Accordion, HStack, Badge, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { ISupportedPlatform } from '../../types/coinDetails';

import AccordionDetails from './AccordionDetails';
import AccordionIcon from './AccordionIcon';
import AccordionSummary from './AccordionSummary';
import AccordionWrapper from './AccordionWrapper';
import { getPlatformBadgeColor } from './utils/platforms.utils';

interface ISupportedPlatformsProps {
    supportedPlatforms: ISupportedPlatform[];
}

export default function SupportedPlatforms({
    supportedPlatforms,
}: ISupportedPlatformsProps): JSX.Element | null {
    if (!supportedPlatforms.length) {
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
                    <HStack style={styles.list}>
                        {supportedPlatforms.map(
                            ({ tokenStandard, blockchain }) => (
                                <Badge
                                    key={`${tokenStandard}-${blockchain}`}
                                    variant="solid"
                                    colorScheme={getPlatformBadgeColor(
                                        tokenStandard,
                                    )}
                                    style={styles.badge}
                                >
                                    <HStack style={styles.supportedPlatform}>
                                        <Text style={styles.tokenStandard}>
                                            {tokenStandard}
                                        </Text>
                                        <Text>{' - '}</Text>
                                        <Text>{blockchain}</Text>
                                    </HStack>
                                </Badge>
                            ),
                        )}
                    </HStack>
                </AccordionDetails>
            </Accordion.Item>
        </AccordionWrapper>
    );
}

const styles = StyleSheet.create({
    list: {
        flexWrap: 'wrap',
        gap: STYLE_VARIABLES.mdSpacing,
    },
    badge: {
        borderRadius: STYLE_VARIABLES.xsRadius,
    },
    supportedPlatform: {
        alignItems: 'center',
    },
    tokenStandard: {
        fontWeight: 'bold',
    },
});
