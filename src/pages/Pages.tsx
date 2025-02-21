import { useEffect, useMemo, useRef } from "react";
import AboutMePage from "./about-me/AboutMePage";
import HomePage from "./home/HomePage";
import ProjectsPage from "./my-projects/ProjectsPage";
import ResumePage from "./resume/ResumePage";
import ContactMePage from "./contact-me/ContactMePage";
import { useMultiObserver } from "@hooks/useMultiObserver";
import useURLChange from "@hooks/hoi";

const Pages = () => {
    const location = useURLChange();
    const navigate = (newPath: string) => {
        window.history.pushState({}, "", newPath);
        // console.log("URL changed to:", newPath);
    };

    const homePageRef = useRef<HTMLDivElement>(null)
    const aboutMePageRef = useRef<HTMLDivElement>(null)
    const projectsPageRef = useRef<HTMLDivElement>(null)
    const contactMePageRef = useRef<HTMLDivElement>(null)
    const resumePageRef = useRef<HTMLDivElement>(null)

    const observedElements = useMemo(() => [
        { key: "/home", ref: homePageRef },
        { key: "/about-me", ref: aboutMePageRef },
        { key: "/my-projects", ref: projectsPageRef },
        { key: "/contact-me", ref: contactMePageRef },
        { key: "/resume", ref: resumePageRef },
    ], [])

    const visibilityMap = useMultiObserver(observedElements);

    const isHomePageInView = visibilityMap[""];
    const isAboutMePageInView = visibilityMap["/about-me"];
    const isProjectsPageInView = visibilityMap["/my-projects"];
    const isContactMePageInView = visibilityMap["/contact-me"];
    const isResumePageInView = visibilityMap["/resume"];

    useEffect(() => {
        if (isHomePageInView) {
            navigate("/*");
        } else if (isAboutMePageInView) {
            navigate("/about-me/");
        } else if (isProjectsPageInView) {
            navigate("/my-projects/");
        } else if (isContactMePageInView) {
            navigate("/contact-me/");
        } else if (isResumePageInView) {
            navigate("/resume/");
        }
    }, [isHomePageInView, isAboutMePageInView, isProjectsPageInView, isContactMePageInView, isResumePageInView]);

    const scrollToCorrespondingToPathnameElement = (pathname: string) => {
        const pageRef = observedElements.find((element) => element.key === pathname)?.ref;
        if (!pageRef || !pageRef.current) return;
        pageRef.current.scrollIntoView();
    };

    useEffect(() => {
        scrollToCorrespondingToPathnameElement(location);
    }, [location]);

    useEffect(() => {
        if (location.endsWith("*") || location.endsWith("/")) {
            const cleanPathname = location.slice(0, -1).replace("/", "");
            scrollToCorrespondingToPathnameElement(cleanPathname);
            navigate(cleanPathname);
        }
    }, []);

    return (
        <>
            <HomePage ref={homePageRef} />
            <AboutMePage ref={aboutMePageRef} isInView={isAboutMePageInView || false} />
            <ProjectsPage ref={projectsPageRef} isInView={isProjectsPageInView || false} />
            <ContactMePage ref={contactMePageRef} isInView={isContactMePageInView || false} />
            <ResumePage ref={resumePageRef} />
        </>
    );
};

export default Pages;