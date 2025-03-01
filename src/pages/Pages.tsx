import { useMemo, useRef } from "react";
import AboutMePage from "./about-me/AboutMePage";
import HomePage from "./home/HomePage";
import ProjectsPage from "./my-projects/ProjectsPage";
import ResumePage from "./resume/ResumePage";
import ContactMePage from "./contact-me/ContactMePage";
import { useMultiObserver } from "@hooks/useMultiObserver";
import usePagesScrollNavigation from "./usePagesScrollNavigation"

const Pages = () => {
    const homePageRef = useRef<HTMLDivElement>(null);
    const aboutMePageRef = useRef<HTMLDivElement>(null);
    const projectsPageRef = useRef<HTMLDivElement>(null);
    const contactMePageRef = useRef<HTMLDivElement>(null);
    const resumePageRef = useRef<HTMLDivElement>(null);

    const observedElements = useMemo(() => [
        { key: "/", ref: homePageRef },
        { key: "/about-me", ref: aboutMePageRef },
        { key: "/my-projects", ref: projectsPageRef },
        { key: "/contact-me", ref: contactMePageRef },
        { key: "/resume", ref: resumePageRef },
    ], []);

    const visibilityMap = useMultiObserver(observedElements);
    usePagesScrollNavigation(visibilityMap, observedElements);

    return (
        <>
            <HomePage ref={homePageRef} />
            <AboutMePage ref={aboutMePageRef} isInView={visibilityMap["/about-me"] || false} />
            <ProjectsPage ref={projectsPageRef} isInView={visibilityMap["/my-projects"] || false} />
            <ContactMePage ref={contactMePageRef} isInView={visibilityMap["/contact-me"] || false} />
            <ResumePage ref={resumePageRef} />
        </>
    );
};

export default Pages;