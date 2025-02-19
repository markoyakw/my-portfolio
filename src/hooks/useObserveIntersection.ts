import { useEffect, useState, useRef } from 'react';

interface UseObserverOptions {
  root?: Element | null;   
  rootMargin?: string;     
  threshold?: number | number[];
  checkInViewAtAll?: boolean;
  debounceTime?: number;
}

const useObserver = <T extends HTMLElement = HTMLDivElement>(
  options: UseObserverOptions = {}
): [React.RefObject<T>, boolean, boolean | undefined] => {
  const [isInView, setInView] = useState(false);
  const [isInViewAtAll, setIsInViewAtAll] = useState(false);
  const elementRef = useRef<T>(null);
  const timeoutRef = useRef<number | null>(null);

  const {
    root = null,
    rootMargin = '0px',
    threshold = 0,
    checkInViewAtAll = false,
    debounceTime = 0,
  } = options;

  useEffect(() => {
    const handleIntersection = ([entry]: IntersectionObserverEntry[]) => {
      // If the element is intersecting (entering view), debounce the update.
      if (entry.isIntersecting) {
        if (debounceTime > 0) {
          if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
          }
          timeoutRef.current = window.setTimeout(() => {
            setInView(true);
            if (checkInViewAtAll) {
              setIsInViewAtAll(entry.intersectionRatio >= 0.15);
            }
          }, debounceTime);
        } else {
          setInView(true);
          if (checkInViewAtAll) {
            setIsInViewAtAll(entry.intersectionRatio >= 0.15);
          }
        }
      } else {
        // If leaving view, update immediately.
        if (timeoutRef.current !== null) {
          clearTimeout(timeoutRef.current);
        }
        setInView(false);
        if (checkInViewAtAll) {
          setIsInViewAtAll(false);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root,
      rootMargin,
      threshold,
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [root, rootMargin, threshold, checkInViewAtAll, debounceTime]);

  return [elementRef, isInView, checkInViewAtAll ? isInViewAtAll : undefined];
};

export default useObserver;
