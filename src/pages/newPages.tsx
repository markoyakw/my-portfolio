import { RefObject, useEffect } from "react"
import AboutMePage from "./about-me/AboutMePage"
import HomePage from "./home/HomePage"
import ProjectsPage from "./my-projects/ProjectsPage"
import { useLocation, useNavigate } from "react-router-dom"
import ResumePage from "./resume/ResumePage"
import useObserver from "@hooks/useObserveIntersection"
import ContactMePage from "./contact-me/ContactMePage"

const Pages = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const [homePageRef, isHomePageInView] = useObserver({
        threshold: 0.9
    });
    const [aboutMePageRef, isAboutMePageInView, isAboutMePageInViewAtAll] = useObserver({
        threshold: 0.9,
        checkInViewAtAll: true
    });
    const [projectsPageRef, isProjectsPageInView, isProjectsPageInViewAtAll] = useObserver({
        threshold: 0.9,
        checkInViewAtAll: true
    })
    const [contactMePageRef, isContactMePageInView, isContactMePageInViewAtAll] = useObserver({
        threshold: 0.9,
        checkInViewAtAll: true,
    })
    const [resumePageRef, isResumePageInView] = useObserver({
        threshold: 0.9
    })

    const pageToUrlDictionary: Record<string, RefObject<HTMLElement>> = {
        "/": homePageRef,
        "/about-me": aboutMePageRef,
        "/my-projects": projectsPageRef,
        "/contact-me": contactMePageRef,
        "/resume": resumePageRef
    }

    useEffect(() => {
        if (isHomePageInView) {
            navigate("/*")
        }
    }, [isHomePageInView])

    useEffect(() => {
        if (isAboutMePageInView) {
            navigate("/about-me/")
        }
    }, [isAboutMePageInView])

    useEffect(() => {
        if (isProjectsPageInView) {
            navigate("/my-projects/")
        }
    }, [isProjectsPageInView])

    useEffect(() => {
        if (isContactMePageInView) {
            navigate("/contact-me/")
        }
    }, [isContactMePageInView])

    useEffect(() => {
        if (isResumePageInView) {
            navigate("/resume/")
        }
    }, [isResumePageInView])

    const scrollToCorrespondingToPathnameElement = (pathname: string) => {
        const pageRef = pageToUrlDictionary[pathname]
        if (!pageRef || !pageRef.current) return
        pageRef.current.scrollIntoView()
    }

    useEffect(() => {
        const pathname = location.pathname as string
        scrollToCorrespondingToPathnameElement(pathname)
    }, [location])

    useEffect(() => {
        if (location.pathname.endsWith("*") || location.pathname.endsWith("/")) {
            scrollToCorrespondingToPathnameElement(location.pathname.slice(0, -1))
            navigate(location.pathname.slice(0, -1))
        }
    }, [])

    return (
        <>
            <HomePage ref={homePageRef} />
            <AboutMePage ref={aboutMePageRef} isInView={isAboutMePageInViewAtAll || false} />
            <ProjectsPage ref={projectsPageRef} isInView={isProjectsPageInViewAtAll || false} />
            <ContactMePage ref={contactMePageRef} isInView={isContactMePageInViewAtAll || false} />
            <ResumePage ref={resumePageRef} />
        </>
    )
}

export default Pages