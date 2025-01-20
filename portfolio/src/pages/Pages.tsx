import { useEffect } from "react"
import AboutMePage from "./aboutMe/AboutMePage.tsx"
import HomePage from "./home/HomePage"
import ProjectsPage from "./myProjects/ProjectsPage.tsx"
import { useLocation, useNavigate } from "react-router-dom"
import ResumePage from "./resume/ResumePage"
import openResumePage from "@utils/openResumePage"
import useObserver from "@hooks/useObserveIntersection"
import ContactMePage from "./contactMe/ContactMePage"

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

    useEffect(() => {
        switch (location.pathname) {
            case "/": {
                homePageRef.current?.scrollIntoView()
                break
            }
            case "/about-me": {
                aboutMePageRef.current?.scrollIntoView()
                break
            }
            case "/my-projects": {
                projectsPageRef.current?.scrollIntoView()
                break
            }
            case "/contact-me": {
                contactMePageRef.current?.scrollIntoView()
                break
            }
            case "/resume": {
                resumePageRef.current?.scrollIntoView()
                openResumePage()
                break
            }
            default: {
                break
            }
        }
    }, [location])

    useEffect(() => {
        if (location.pathname.endsWith("*") || location.pathname.endsWith("/")) {
            navigate(location.pathname.slice(0, -1))
        }
    }, [])

    return (
        <>
            <HomePage ref={homePageRef} />
            <AboutMePage ref={aboutMePageRef} />
            <ProjectsPage ref={projectsPageRef} />
            <ContactMePage ref={contactMePageRef} />
            < ResumePage />
        </>
    )
}

export default Pages