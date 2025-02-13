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
        threshold: 0.9,
    });
    const [aboutMePageRef, isAboutMePageInView] = useObserver({
        threshold: 0.9,
    });
    const [projectsPageRef, isProjectsPageInView] = useObserver({
        threshold: 0.9,
    })
    const [contactMePageRef, isContactMePageInView] = useObserver({
        threshold: 0.9,
    })
    const [resumePageRef, isResumePageInView] = useObserver({
        threshold: 0.9,
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
        // if (pathname === "/resume") {
        //     openResumePage()
        // }
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
            <AboutMePage ref={aboutMePageRef} />
            <ProjectsPage ref={projectsPageRef} />
            <ContactMePage ref={contactMePageRef} />
            <ResumePage ref={resumePageRef} />
        </>
    )
}

export default Pages