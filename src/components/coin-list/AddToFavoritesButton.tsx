import { IconButton, FavouriteIcon } from 'native-base';

export default function AddToFavoritesButton(): JSX.Element {
    return (
        <IconButton
            icon={<FavouriteIcon />}
            variant="ghost"
            colorScheme="gray"
        />
    );
}
