import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const usePagesNav = (
    visibilityMap: Record<string, boolean>,
    observedElements: { key: string; ref: React.RefObject<HTMLElement> }[]
) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [lastNavigationPath, setLastNavigationPath] = useState<string | null>(null);
    const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const NAVIGATE_AFTER_SCROLL_DEBOUNCE_TIME = 1000
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }

        const timeout = setTimeout(() => {

            // Count observed element with higher index as current

            const visiblePaths = Object.keys(visibilityMap)
                .filter((path) => visibilityMap[path] && lastNavigationPath !== path);

            const visiblePath = visiblePaths.pop();

            if (visiblePath) {
                const params = new URLSearchParams(location.search);
                params.set("noAutoScroll", "true");

                navigate(`${visiblePath}?${params.toString()}`, { replace: true });
                setLastNavigationPath(visiblePath);
            }
            
        }, NAVIGATE_AFTER_SCROLL_DEBOUNCE_TIME);

        setScrollTimeout(timeout);

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [visibilityMap]);

    const scrollToCorrespondingToPathnameElement = (pathname: string, search: string) => {
        const pageRef = observedElements.find((element) => element.key === pathname)?.ref;
        if (!pageRef || !pageRef.current) return;
        const searchParams = new URLSearchParams(search);
        if (searchParams.get("noAutoScroll")) return
        pageRef.current.scrollIntoView();
    };

    useEffect(() => {
        scrollToCorrespondingToPathnameElement(location.pathname, location.search);
    }, [location]);

    useEffect(() => {
        scrollToCorrespondingToPathnameElement(location.pathname, location.search);
        navigate(location.pathname, { replace: true });
    }, []);
};

export default usePagesNav;