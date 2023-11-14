const MAX_NAME_LENGTH = 12;
const MAX_NAME_LENGTH_BIG = 16;

type TGetCoinName = (args: {
    name: string;
    symbol: string;
    isBig?: boolean;
}) => string;

export const getCoinName: TGetCoinName = ({ name, symbol, isBig }) => {
    if (isBig) {
        name.length > MAX_NAME_LENGTH_BIG ? symbol.toUpperCase() : name;
    }

    return name.length > MAX_NAME_LENGTH ? symbol.toUpperCase() : name;
};
