import { useState, useEffect } from 'react';

interface IUseDebounceArgs<T> {
    value: T;
    delay: number;
}

export default function useDebounce<T>({
    value,
    delay,
}: IUseDebounceArgs<T>): T {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debouncedValue;
}
