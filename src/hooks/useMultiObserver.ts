import { useEffect, useState, useRef, RefObject } from "react";

type ObservedElement = {
  key: string; 
  ref: RefObject<HTMLElement>;
};

type VisibilityMap = Record<string, boolean>;

interface UseMultiObserverOptions extends IntersectionObserverInit {
  debounceTime?: number;
}

export const useMultiObserver = (
  observedElements: ObservedElement[],
  { debounceTime = 0, ...observerOptions }: UseMultiObserverOptions = {}
): VisibilityMap => {
  const [visibilityMap, setVisibilityMap] = useState<VisibilityMap>({});
  const timeoutRefs = useRef<Record<string, number>>({});

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const key = entry.target.getAttribute("data-observer-key");
        if (!key) return;

        if (entry.isIntersecting) {
          if (debounceTime > 0) {
            if (timeoutRefs.current[key]) {
              clearTimeout(timeoutRefs.current[key]);
            }
            timeoutRefs.current[key] = window.setTimeout(() => {
              setVisibilityMap((prev) => ({ ...prev, [key]: true }));
            }, debounceTime);
          } else {
            setVisibilityMap((prev) => ({ ...prev, [key]: true }));
          }
        } else {
          if (timeoutRefs.current[key]) {
            clearTimeout(timeoutRefs.current[key]);
          }
          setVisibilityMap((prev) => ({ ...prev, [key]: false }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    observedElements.forEach(({ key, ref }) => {
      const element = ref.current;
      if (element) {
        element.setAttribute("data-observer-key", key);
        observer.observe(element);
      }
    });

    return () => {
      observedElements.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
      observer.disconnect();
      Object.values(timeoutRefs.current).forEach(clearTimeout);
    };
  }, [observedElements, observerOptions.root, observerOptions.rootMargin, observerOptions.threshold, debounceTime]);

  return visibilityMap;
};
