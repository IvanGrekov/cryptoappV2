import { StyleSheet } from 'react-native';

import { Box, Link, Image, Badge } from 'native-base';

import { ICoinDetails } from '../../types/coinDetails';
import { EImageSizeType } from '../../types/images';

type TTwitterAccountProps = Pick<ICoinDetails, 'twitterAccount'>;

export default function TwitterAccount({
    twitterAccount,
}: TTwitterAccountProps): JSX.Element | null {
    if (!twitterAccount) {
        return null;
    }

    const { url, followers } = twitterAccount;
    const followersNumber = Math.round(followers / 1_000);

    return (
        <Box style={styles.container}>
            <Link href={url}>
                <Badge
                    variant="solid"
                    colorScheme="info"
                    rounded="full"
                    style={styles.badge}
                >
                    {`${followersNumber} k`}
                </Badge>

                <Image
                    source={require('../../assets/TwitterLogo.png')}
                    alt="twitter logo"
                    size={EImageSizeType.SM}
                />
            </Link>
        </Box>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: -5,
    },
    badge: {
        position: 'absolute',
        zIndex: 1,
        top: -3,
        right: -7,
    },
});
