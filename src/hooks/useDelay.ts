import { useState, useCallback, useEffect } from "react";

type TDelayOptions = {
    isOneTime?: boolean,
    shouldStart?: boolean
}

const useDelay = (delayMs: number, options: TDelayOptions): [boolean, () => void] => {

    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (!options.shouldStart) return
        startDelay()
    }, [options?.shouldStart])

    const startDelay = useCallback(() => {
        if (options && options.isOneTime && isReady) return
        setIsReady(false);
        setTimeout(() => setIsReady(true), delayMs);
    }, [delayMs, options]);

    return [isReady, startDelay];
};

export default useDelay;
