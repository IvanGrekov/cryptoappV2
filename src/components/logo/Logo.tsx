import React from 'react';

import { Image } from 'native-base';

import { EImageSizeType } from '../../types/images';

interface ILogoProps {
    size: EImageSizeType;
}

export default function Logo({ size }: ILogoProps): JSX.Element {
    return (
        <Image
            source={require('../../assets/Logo.png')}
            alt="Dollar sign"
            size={size}
        />
    );
}
