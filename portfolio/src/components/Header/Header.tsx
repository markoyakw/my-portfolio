import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import classes from "./Header.module.css"
import { PiReadCvLogoFill } from 'react-icons/pi'
import { AiFillMessage } from 'react-icons/ai'
import { MdOutlineWork } from 'react-icons/md'
import { BsEmojiSunglassesFill } from 'react-icons/bs'
import { IoHomeSharp } from 'react-icons/io5'
import MyNavLink from '@components/UI/MyNavLink/MyNavLink'
import { useEffect, useMemo, useRef, useState } from 'react'
import ActiveNavLinkHighlight from './ActiveNavLinkHighlight'

const Header = () => {

    const navBarRef = useRef<HTMLElement>(null)

    const NavBar = () => {
        const params = useLocation()
        const [activeLinkRect, setActiveLinkRect] = useState<DOMRectReadOnly>()
        const URIToHTMLAnchorMap = useMemo(() => new Map<string, HTMLAnchorElement>(), [])

        useEffect(() => {
            const navBar = navBarRef.current
            if (!navBar) return
            const navChildrenArr = Array.from(navBar.children)

            navChildrenArr.forEach(HTMLItem => {
                if (HTMLItem.tagName === "A") {
                    const HTMLAnchor = HTMLItem as HTMLAnchorElement
                    const pathname = new URL(HTMLAnchor.href).pathname
                    URIToHTMLAnchorMap.set(pathname, HTMLItem as HTMLAnchorElement)
                }
                if (HTMLItem.tagName === "DIV") {
                    const secondaryLinkArr = Array.from(HTMLItem.children) as HTMLElement[]
                    secondaryLinkArr.forEach(HTMLElement => {
                        if (HTMLElement.tagName !== "A") return
                        const HTMLAnchor = HTMLElement as HTMLAnchorElement
                        const pathname = new URL(HTMLAnchor.href).pathname
                        URIToHTMLAnchorMap.set(pathname, HTMLAnchor)
                    })
                }
            })
        }, [navBarRef])

        useEffect(() => {
            const activeAnchorHTML = URIToHTMLAnchorMap.get(params.pathname)
            if (!activeAnchorHTML) return
            const activeLinkRect = activeAnchorHTML.getBoundingClientRect()
            setActiveLinkRect(activeLinkRect)
        }, [params, window])

        return (
            <nav className={classes["main-column"]} ref={navBarRef}>
                <MyNavLink href='/' icon={<IoHomeSharp />}>
                    Home
                </MyNavLink>
                <div className={classes["center-column"]}>
                    <MyNavLink href='/about-me' icon={<BsEmojiSunglassesFill />}>
                        About me
                    </MyNavLink>
                    <MyNavLink href='/my-projects' icon={<MdOutlineWork />}>
                        Projects
                    </MyNavLink>
                    <MyNavLink href='/contact-me' icon={<AiFillMessage />}>
                        Contact me
                    </MyNavLink>
                </div>
                <MyNavLink href='/resume' icon={<PiReadCvLogoFill />}>
                    Resume
                </MyNavLink>
                {activeLinkRect && <ActiveNavLinkHighlight highlightedRect={activeLinkRect} />}
            </nav>
        )
    }

    return (
        <BrowserRouter>
            <div className={classes["size-dummy"]}>
                <header className={classes["header"]}>
                    <NavBar />
                </header>
            </div>
            <Routes>
                <Route path="/" element={<></>} />
                <Route path="/about-me" element={<></>} />
                <Route path="/my-projects" element={<></>} />
                <Route path="/contact-me" element={<></>} />
                <Route path="/resume" element={<></>} />
            </Routes>
        </BrowserRouter >
    )
}

export default Header