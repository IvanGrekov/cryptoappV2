import { Box, Link, Image } from 'native-base';

import { ICoinDetails } from '../../types/coinDetails';
import { EImageSizeType } from '../../types/images';

type TTwitterAccountProps = Pick<ICoinDetails, 'twitterAccount'>;

export default function TwitterAccount({
    twitterAccount,
}: TTwitterAccountProps): JSX.Element | null {
    if (!twitterAccount) {
        return null;
    }

    return (
        <Box alignItems="center">
            <Link href={twitterAccount.url}>
                <Image
                    source={require('../../assets/TwitterLogo.png')}
                    alt="Dollar sign"
                    size={EImageSizeType.SM}
                />
            </Link>
        </Box>
    );
}
