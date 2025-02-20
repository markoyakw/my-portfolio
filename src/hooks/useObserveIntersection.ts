import { useEffect, useState, useRef } from 'react';

interface UseObserverOptions {
    root?: Element | null;   // The element or browser as a viewport (if value = null)
    rootMargin?: string;     // Margin around the root
    threshold?: number | number[];  // Decimal of visibility (0 to 1)
    checkInViewAtAll?: boolean; // is `isInViewAtAll` should be observed
    debounceTime?: number;
}

const useObserver = <T extends HTMLElement = HTMLDivElement>(
    options: UseObserverOptions = {}
): [React.RefObject<T>, boolean, boolean | undefined] => {

    const [isInView, setInView] = useState(false);
    const [isInViewAtAll, setIsInViewAtAll] = useState(false);
    const elementRef = useRef<T>(null);

    const { root = null, rootMargin = '0px', threshold = 0, checkInViewAtAll = false } = options;

    useEffect(() => {
        const handleIntersection = ([entry]: IntersectionObserverEntry[]) => {
            setInView(entry.isIntersecting);

            if (checkInViewAtAll && entry.isIntersecting) {
                setIsInViewAtAll(true);
            }
        };

        const observer = new IntersectionObserver(
            handleIntersection,
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

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
            if (observerAtAll) {
                observerAtAll.observe(currentElement);
            }
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
                if (observerAtAll) {
                    observerAtAll.unobserve(currentElement);
                }
            }
        };
    }, [root, rootMargin, threshold, checkInViewAtAll]);

    return [elementRef, isInView, checkInViewAtAll ? isInViewAtAll : undefined];
};

export default useObserver;