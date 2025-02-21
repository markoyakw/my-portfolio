import { useEffect, useRef, useState } from "react";

const useIsInView = <T extends HTMLElement = HTMLDivElement>(): [React.RefObject<T>, boolean] => {
    const elementRef = useRef<T>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
            console.log(`Element ${entry.target.tagName} is ${entry.isIntersecting ? "visible" : "not visible"}`);
        }, {
            threshold: 0.01, // Fires when at least 1% of the element is visible
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
            observer.disconnect();
        };
    }, []);

    return [elementRef, isIntersecting];
};

export default useIsInView;
