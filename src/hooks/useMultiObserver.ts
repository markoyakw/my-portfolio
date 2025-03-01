import { useEffect, useState, RefObject } from "react";

type ObservedElement = {
    key: string;
    ref: RefObject<HTMLElement>;
};

type VisibilityMap = Record<string, boolean>;

export const useMultiObserver = (observedElements: ObservedElement[]): VisibilityMap => {
    const [visibilityMap, setVisibilityMap] = useState<VisibilityMap>({});

    useEffect(() => {
        const viewportHeight = window.innerHeight;
        const bottomRootMargin = viewportHeight / 4
        const topRootMargin = bottomRootMargin / 6

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const key = entry.target.getAttribute("data-observer-key");
                    if (!key) return;

                    setVisibilityMap((prev) => ({ ...prev, [key]: entry.isIntersecting }));
                });
            },
            { root: null, rootMargin: `-${topRootMargin}px 0px -${bottomRootMargin}px 0px`, threshold: 0 }
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
