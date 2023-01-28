import { useState, useEffect } from 'react';

export default function useCounter(hasToIncrement = true) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => hasToIncrement ? (prevCounter + 1) : (prevCounter - 1));
        }, 1000);

        return () => clearInterval(interval);
    }, [hasToIncrement]);

    return counter;
}
