import { useMemo, useRef } from "react";
import AboutMePage from "./about-me/AboutMePage";
import HomePage from "./home/HomePage";
import ProjectsPage from "./my-projects/ProjectsPage";
import ResumePage from "./resume/ResumePage";
import ContactMePage from "./contact-me/ContactMePage";
import { useMultiObserver } from "@hooks/useMultiObserver";
import usePagesScrollNavigation from "./usePagesScrollNavigation"
import { useMainLoadingDelay } from "@hooks/useMainLoadingDelay";

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
    const { isLoadingDelayFinished } = useMainLoadingDelay()

    return (
        <>
            <HomePage ref={homePageRef} isInView={visibilityMap["/"] && isLoadingDelayFinished} />
            <AboutMePage ref={aboutMePageRef} isInView={visibilityMap["/about-me"] && isLoadingDelayFinished} />
            <ProjectsPage ref={projectsPageRef} isInView={visibilityMap["/my-projects"] && isLoadingDelayFinished} />
            <ContactMePage ref={contactMePageRef} isInView={visibilityMap["/contact-me"] && isLoadingDelayFinished} />
            <ResumePage ref={resumePageRef} isInView={visibilityMap["/resume"] && isLoadingDelayFinished} />
        </>
    );
};

export default Pages;