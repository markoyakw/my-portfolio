import { useEffect, useState, RefObject } from "react";

type ObservedElement = {
    key: string;
    ref: RefObject<HTMLElement>;
};

type VisibilityMap = Record<string, boolean>;

export const useMultiObserver = (observedElements: ObservedElement[]): VisibilityMap => {
    const [visibilityMap, setVisibilityMap] = useState<VisibilityMap>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const key = entry.target.getAttribute("data-observer-key");
                    if (!key) return;

                    const { top, bottom } = entry.boundingClientRect;
                    const viewportHeight = window.innerHeight;

                    const isFullyOut = bottom < 0 || top > viewportHeight;

                    setVisibilityMap((prev) => ({ ...prev, [key]: !isFullyOut }));
                });
            },
            { root: null, rootMargin: "0px", threshold: [0] }
        );

        observedElements.forEach(({ key, ref }) => {
            if (ref.current) {
                ref.current.setAttribute("data-observer-key", key);
                observer.observe(ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [observedElements]);

    return visibilityMap;
};
