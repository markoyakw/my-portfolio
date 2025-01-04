import { FC, useEffect, useRef, useState } from "react"
import classes from "../Nav.module.css"
import MyNavLink from "@components/Nav/NavBar/MyNavLink/MyNavLink"
import { IoHomeSharp } from "react-icons/io5"
import { BsEmojiSunglassesFill } from "react-icons/bs"
import { MdOutlineWork } from "react-icons/md"
import { AiFillMessage } from "react-icons/ai"
import { PiReadCvLogoFill } from "react-icons/pi"
import ActiveNavLinkHighlight from "./ActiveNavLinkHighlight"
import useGetActiveNavLinkRect from "./useGetActiveNavLinkRect"

type TNavBar = {
    className: string,
    isMobileSideBarTransitionHappening: boolean
}

const NavBar: FC<TNavBar> = ({ className, isMobileSideBarTransitionHappening }) => {

    const navBarRef = useRef<HTMLDivElement>(null)
    const navBarItemAligmentRef = useRef<HTMLDivElement>(null)
    const { activeLinkRect, recalculateHighlightRect, isNavBarMutationObserved } = useGetActiveNavLinkRect(navBarRef, navBarItemAligmentRef)
    const [hoveredLinkRect, setHoveredLinkRect] = useState<DOMRectReadOnly | null>(null)

    useEffect(() => {
        if (isMobileSideBarTransitionHappening) {

        }
    }, [isMobileSideBarTransitionHappening])

    return (
        <nav className={className} ref={navBarRef}>
            {/* <nav className={className} ref={navBarRef} onTransitionEnd={recalculateHighlightRect}> */}
            <div className={classes["nav-bar__main-column"]} >
                <MyNavLink href='/' icon={<IoHomeSharp />} isHoverAnimationSource setHoveredLinkRect={setHoveredLinkRect}>
                    Home
                </MyNavLink>
                <div ref={navBarItemAligmentRef} className={classes["nav-bar__center-column"]}>
                    <MyNavLink href='/about-me' icon={<BsEmojiSunglassesFill />} setHoveredLinkRect={setHoveredLinkRect}>
                        About me
                    </MyNavLink>
                    <MyNavLink href='/my-projects' icon={<MdOutlineWork />} setHoveredLinkRect={setHoveredLinkRect}>
                        Projects
                    </MyNavLink>
                    <MyNavLink href='/contact-me' icon={<AiFillMessage />} setHoveredLinkRect={setHoveredLinkRect}>
                        Contact me
                    </MyNavLink>
                </div>
                <MyNavLink href='/resume' icon={<PiReadCvLogoFill />} setHoveredLinkRect={setHoveredLinkRect}>
                    Resume
                </MyNavLink>
                {(!isNavBarMutationObserved && activeLinkRect) && <ActiveNavLinkHighlight highlightedRect={activeLinkRect} addedClassName={`${classes["nav-link-highlight--active"]} `} />}
                {(!isNavBarMutationObserved && hoveredLinkRect) && <ActiveNavLinkHighlight highlightedRect={hoveredLinkRect} addedClassName={classes["nav-link-highlight--hovered"]} />}
            </div>
        </nav>
    )
}

export default NavBar