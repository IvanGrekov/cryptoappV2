import { useState, useEffect } from 'react';

import { IconButton, FavouriteIcon } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import {
    getFavoriteList,
    addToFavoriteList,
    removeFromFavoriteList,
} from '../../utils/favoriteList.utils';

interface IAddToFavoritesButtonProps {
    symbol: string;
}

export default function AddToFavoritesButton({
    symbol,
}: IAddToFavoritesButtonProps): JSX.Element {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        getFavoriteList().then((favoriteList: string[]) =>
            setIsFavorite(favoriteList.includes(symbol)),
        );
    }, [symbol]);

    const handleAddToFavorites = (): void => {
        setIsFavorite(!isFavorite);
        isFavorite ? removeFromFavoriteList(symbol) : addToFavoriteList(symbol);
    };

    return (
        <IconButton
            icon={
                <FavouriteIcon
                    color={
                        isFavorite
                            ? STYLE_VARIABLES.red
                            : STYLE_VARIABLES.blackOpacity
                    }
                />
            }
            variant="ghost"
            colorScheme="rose"
            onPress={handleAddToFavorites}
        />
    );
}
