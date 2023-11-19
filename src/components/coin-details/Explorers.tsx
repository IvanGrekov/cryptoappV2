import { StyleSheet } from 'react-native';

import { Accordion, HStack, Link, Badge } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { IExplorer } from '../../types/coinDetails';

import AccordionDetails from './AccordionDetails';
import AccordionIcon from './AccordionIcon';
import AccordionSummary from './AccordionSummary';
import AccordionWrapper from './AccordionWrapper';

interface IExplorersProps {
    explorers: IExplorer[];
}

export default function Explorers({
    explorers,
}: IExplorersProps): JSX.Element | null {
    if (!explorers.length) {
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
                    <HStack style={styles.list}>
                        {explorers.map(({ name, url }) => (
                            <Link key={url} href={url}>
                                <Badge
                                    variant="outline"
                                    colorScheme="info"
                                    style={styles.badge}
                                >
                                    {name}
                                </Badge>
                            </Link>
                        ))}
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
});
