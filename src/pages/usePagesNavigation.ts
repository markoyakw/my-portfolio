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
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }

        const timeout = setTimeout(() => {
            if (visibilityMap["/"] && lastNavigationPath !== "/") {
                navigate("/*", { replace: true });
                setLastNavigationPath("/*");
            } else if (visibilityMap["/about-me"] && lastNavigationPath !== "/about-me") {
                navigate("/about-me/", { replace: true });
                setLastNavigationPath("/about-me/");
            } else if (visibilityMap["/my-projects"] && lastNavigationPath !== "/my-projects") {
                navigate("/my-projects/", { replace: true });
                setLastNavigationPath("/my-projects/");
            } else if (visibilityMap["/contact-me"] && lastNavigationPath !== "/contact-me") {
                navigate("/contact-me/", { replace: true });
                setLastNavigationPath("/contact-me/");
            } else if (visibilityMap["/resume"] && lastNavigationPath !== "/resume") {
                navigate("/resume/", { replace: true });
                setLastNavigationPath("/resume/");
            }
        }, 1000);

        setScrollTimeout(timeout);

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [visibilityMap, lastNavigationPath, navigate]);

    const scrollToCorrespondingToPathnameElement = (pathname: string) => {
        const pageRef = observedElements.find((element) => element.key === pathname)?.ref;
        if (!pageRef || !pageRef.current) return;
        pageRef.current.scrollIntoView();
    };

    useEffect(() => {
        scrollToCorrespondingToPathnameElement(location.pathname);
    }, [location]);

    useEffect(() => {
        if (location.pathname.endsWith("*") || location.pathname.endsWith("/")) {
            const cleanPathname = location.pathname.slice(0, -1).replace("/", "");
            scrollToCorrespondingToPathnameElement(cleanPathname);
            navigate(cleanPathname, { replace: true });
        }
    }, []);
};

export default usePagesNav;