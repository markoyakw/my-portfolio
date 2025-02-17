import { RefObject, useEffect, useMemo, useState } from "react";
import AboutMePage from "./about-me/AboutMePage";
import HomePage from "./home/HomePage";
import ProjectsPage from "./my-projects/ProjectsPage";
import { useLocation, useNavigate } from "react-router-dom";
import ResumePage from "./resume/ResumePage";
import useObserver from "@hooks/useObserveIntersection";
import ContactMePage from "./contact-me/ContactMePage";
import useDebounce from "@hooks/useDebounce";

const Pages = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [homePageRef, isHomePageInView, isHomePageInViewAtAll] = useObserver({
        threshold: 0.7,
        checkInViewAtAll: true,
        debounceTime: 300
    });
    const [aboutMePageRef, isAboutMePageInView, isAboutMePageInViewAtAll] = useObserver({
        threshold: 0.7,
        checkInViewAtAll: true,
        debounceTime: 300
    });
    const [projectsPageRef, isProjectsPageInView, isProjectsPageInViewAtAll] = useObserver({
        threshold: 0.7,
        checkInViewAtAll: true,
        debounceTime: 300
    });
    const [contactMePageRef, isContactMePageInView, isContactMePageInViewAtAll] = useObserver({
        threshold: 0.7,
        checkInViewAtAll: true,
        debounceTime: 300
    });
    const [resumePageRef, isResumePageInView] = useObserver({
        threshold: 0.7,
        checkInViewAtAll: true,
    });

    const pageToUrlDictionary = useMemo<Record<string, RefObject<HTMLElement>>>(
        () => ({
            "/": homePageRef,
            "/about-me": aboutMePageRef,
            "/my-projects": projectsPageRef,
            "/contact-me": contactMePageRef,
            "/resume": resumePageRef,
        }),
        [homePageRef, aboutMePageRef, projectsPageRef, contactMePageRef, resumePageRef]
    );

    const [currentPage, setCurrentPage] = useState<string>(location.pathname);

    const handleScroll = useDebounce(() => {
        if (isHomePageInView) {
            setCurrentPage("/*");
        } else if (isAboutMePageInView) {
            setCurrentPage("/about-me/");
        } else if (isProjectsPageInView) {
            setCurrentPage("/my-projects/");
        } else if (isContactMePageInView) {
            setCurrentPage("/contact-me/");
        } else if (isResumePageInView) {
            setCurrentPage("/resume/");
        }
    }, 500); 

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        if (currentPage !== location.pathname) {
            navigate(currentPage);
        }
    }, [currentPage, navigate, location.pathname]);

    const scrollToCorrespondingToPathnameElement = (pathname: string) => {
        const pageRef = pageToUrlDictionary[pathname];
        if (!pageRef || !pageRef.current) return;
        pageRef.current.scrollIntoView();
    };

    useEffect(() => {
        const pathname = location.pathname;
        scrollToCorrespondingToPathnameElement(pathname);
    }, [location]);

    useEffect(() => {
        if (location.pathname.endsWith("*") || location.pathname.endsWith("/")) {
            scrollToCorrespondingToPathnameElement(location.pathname.slice(0, -1));
            navigate(location.pathname.slice(0, -1));
        }
    }, []);

    return (
        <>
            <HomePage ref={homePageRef} isInView={isHomePageInViewAtAll || false} />
            <AboutMePage ref={aboutMePageRef} isInView={isAboutMePageInViewAtAll || false} />
            <ProjectsPage ref={projectsPageRef} isInView={isProjectsPageInViewAtAll || false} />
            <ContactMePage ref={contactMePageRef} isInView={isContactMePageInViewAtAll || false} />
            <ResumePage ref={resumePageRef} />
        </>
    );
};

export default Pages;