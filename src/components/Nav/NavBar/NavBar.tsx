import { FC, useRef, useState } from "react"
import classes from "../Nav.module.css"
import MyNavLink from "@components/Nav/NavBar/MyNavLink/MyNavLink"
import { IoHomeSharp } from "react-icons/io5"
import { BsEmojiSunglassesFill } from "react-icons/bs"
import { MdOutlineWork } from "react-icons/md"
import { AiFillMessage } from "react-icons/ai"
import { PiReadCvLogoFill } from "react-icons/pi"
import ActiveNavLinkHighlight from "./ActiveNavLinkHighlight"
import useGetActiveNavLinkRect from "./useGetActiveNavLinkRect"
import getRelativeRect from "@utils/getRelativeRect"
import openResumePage from "@utils/openResumePage"
import useAppearAnimationAttributes from "@hooks/useAppearAnimationProps/useAppearAnimationProps"
import { useMainLoadingDelay } from "@hooks/useMainLoadingDelay"

type TNavBar = {
    className: string,
}

const NavBar: FC<TNavBar> = ({ className }) => {

    const navBarRef = useRef<HTMLDivElement>(null)
    const { activeLinkRect } = useGetActiveNavLinkRect(navBarRef)
    const [hoveredLinkRect, setHoveredLinkRect] = useState<DOMRectReadOnly | null>(null)

    const getRelativeHoveredLinkRect = () => {
        const navBar = navBarRef.current
        if (!navBar || !hoveredLinkRect) return null
        const navBarRect = navBar.getBoundingClientRect()
        return getRelativeRect(hoveredLinkRect, navBarRect)
    }

    const { isLoadingDelayFinished } = useMainLoadingDelay()
    const { animationClassName } = useAppearAnimationAttributes({
        type: "from-top",
        show: isLoadingDelayFinished
    })

    const containerClassName = `${className} ${animationClassName}`

    return (
        <nav className={containerClassName} ref={navBarRef}>
            <div className={classes["nav-bar__main-column"]} >
                <MyNavLink href='/' icon={<IoHomeSharp />} setHoveredLinkRect={setHoveredLinkRect}>
                    Home
                </MyNavLink>
                <div className={classes["nav-bar__center-column"]}>
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
                <MyNavLink href='/resume' icon={<PiReadCvLogoFill />} setHoveredLinkRect={setHoveredLinkRect} onClick={openResumePage}>
                    Resume
                </MyNavLink>
                {activeLinkRect && <ActiveNavLinkHighlight highlightedRect={activeLinkRect} addedClassName={`${classes["nav-link-highlight--active"]} `} />}
                {hoveredLinkRect && <ActiveNavLinkHighlight highlightedRect={getRelativeHoveredLinkRect()} addedClassName={classes["nav-link-highlight--hovered"]} />}
            </div>
        </nav>
    )
}

export default NavBar