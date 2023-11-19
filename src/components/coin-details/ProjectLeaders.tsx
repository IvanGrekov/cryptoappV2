import { StyleSheet } from 'react-native';

import { Accordion, HStack, Badge, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { IProjectLeader } from '../../types/coinDetails';

import AccordionDetails from './AccordionDetails';
import AccordionIcon from './AccordionIcon';
import AccordionSummary from './AccordionSummary';
import AccordionWrapper from './AccordionWrapper';
import { getProjectLeaderColor } from './utils/projectLeaders.utils';

interface IProjectLeadersProps {
    projectLeaders: IProjectLeader[];
}

export default function ProjectLeadersProps({
    projectLeaders,
}: IProjectLeadersProps): JSX.Element | null {
    if (!projectLeaders.length) {
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
                    <HStack style={styles.list}>
                        {projectLeaders.map(({ leaderType, fullName }) => (
                            <Badge
                                key={`${leaderType}-${fullName}`}
                                variant="solid"
                                colorScheme={getProjectLeaderColor(leaderType)}
                                style={styles.badge}
                            >
                                <HStack style={styles.projectLeader}>
                                    <Text style={styles.leaderType}>
                                        {leaderType}
                                    </Text>
                                    <Text style={styles.text}>{' - '}</Text>
                                    <Text style={styles.text}>{fullName}</Text>
                                </HStack>
                            </Badge>
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
    projectLeader: {
        alignItems: 'center',
    },
    leaderType: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: 'white',
    },
    text: {
        color: 'white',
    },
});
