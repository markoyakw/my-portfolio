import { useEffect, useState, useRef } from 'react';

interface UseObserverOptions {
    root?: Element | null;   // The element or browser as a viewport (if value = null)
    rootMargin?: string;     // Margin around the root
    threshold?: number | number[];  // Decimal of visibility (0 to 1)
    checkInViewAtAll?: boolean; // Flag to determine if `isInViewAtAll` should be observed
}

const useObserver = <T extends HTMLElement = HTMLDivElement>(
    options: UseObserverOptions = {}
): [React.RefObject<T>, boolean, boolean | undefined] => {
    const [inView, setInView] = useState(false);
    const [isInViewAtAll, setIsInViewAtAll] = useState(false);
    const elementRef = useRef<T>(null);

    const { root = null, rootMargin = '0px', threshold = 0, checkInViewAtAll = false } = options;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { root, rootMargin, threshold }
        );

        let observerAtAll: IntersectionObserver | null = null;
        if (checkInViewAtAll) {
            observerAtAll = new IntersectionObserver(
                ([entry]) => {
                    setIsInViewAtAll(entry.isIntersecting);
                },
                { root, rootMargin, threshold: 0 }
            );
        }

        if (elementRef.current) {
            observer.observe(elementRef.current);
            if (observerAtAll) {
                observerAtAll.observe(elementRef.current);
            }
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
                if (observerAtAll) {
                    observerAtAll.unobserve(elementRef.current);
                }
            }
        };
    }, [options]);

    return [elementRef, inView, checkInViewAtAll ? isInViewAtAll : undefined];
};

export default useObserver;