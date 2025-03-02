import { useState, useCallback, useEffect } from "react";

type TDelayOptions = {
    startDelayRightAway: boolean
}

const useDelay = (delayMs: number, options?: TDelayOptions): [boolean, () => void] => {

    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (options && options.startDelayRightAway) {
            startDelay()
        }
    }, [])

    const startDelay = useCallback(() => {
        setIsReady(false);
        setTimeout(() => setIsReady(true), delayMs);
    }, [delayMs]);

    return [isReady, startDelay];
};

export default useDelay;
