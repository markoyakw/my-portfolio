import { useState, useCallback } from "react";

type TDelayOptions = {
    isReadyRightAway: boolean
}

const useDelay = (delayMs: number, options?: TDelayOptions): [boolean, () => void] => {
    
    const [isReady, setIsReady] = useState(() => {
        if (options && options.isReadyRightAway) {
            return true
        }
        else return false
    });

    const startDelay = useCallback(() => {
        setIsReady(false);
        setTimeout(() => setIsReady(true), delayMs);
    }, [delayMs]);

    return [isReady, startDelay];
};

export default useDelay;
