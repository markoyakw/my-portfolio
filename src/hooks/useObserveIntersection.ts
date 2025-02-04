import { useEffect, useState, useRef } from 'react';

interface UseObserverOptions {
    root?: Element | null;   // The element or browser (null) as a wievport
    rootMargin?: string;     // Margin around the root
    threshold?: number | number[];  // Percentage of visibility (0 to 1)
}

const useObserver = <T extends HTMLElement = HTMLDivElement>(
    options: UseObserverOptions = {}
): [React.RefObject<T>, boolean] => {
    const [inView, setInView] = useState(false);
    const elementRef = useRef<T>(null);

    useEffect(() => {
        const { root = null, rootMargin = '0px', threshold = 0 } = options;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { root, rootMargin, threshold }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [options]);

    return [elementRef, inView];
};

export default useObserver;
