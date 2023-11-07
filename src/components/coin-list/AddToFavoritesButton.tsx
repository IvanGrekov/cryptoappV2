import { useState, useEffect } from 'react';

import { IconButton, FavouriteIcon } from 'native-base';

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
        getFavoriteList().then((favoriteList) =>
            setIsFavorite(favoriteList.includes(symbol)),
        );
    }, [symbol]);

    const handleAddToFavorites = (): void => {
        setIsFavorite(!isFavorite);

        isFavorite ? removeFromFavoriteList(symbol) : addToFavoriteList(symbol);
    };

    return (
        <IconButton
            icon={<FavouriteIcon />}
            variant="ghost"
            colorScheme={isFavorite ? 'rose' : 'gray'}
            onPress={handleAddToFavorites}
        />
    );
}
