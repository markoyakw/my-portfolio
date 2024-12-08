import { useRef, useState } from "react"
import classes from "../Header.module.css"
import MyNavLink from "@components/UI/MyNavLink/MyNavLink"
import { IoHomeSharp } from "react-icons/io5"
import { BsEmojiSunglassesFill } from "react-icons/bs"
import { MdOutlineWork } from "react-icons/md"
import { AiFillMessage } from "react-icons/ai"
import { PiReadCvLogoFill } from "react-icons/pi"
import ActiveNavLinkHighlight from "./ActiveNavLinkHighlight"
import useGetActiveNavLinkRect from "./useGetActiveNavLinkRect"

const NavBar = () => {
    const navBarRef = useRef<HTMLElement>(null)
    const { activeLinkRect } = useGetActiveNavLinkRect(navBarRef)
    const [hoveredLinkRect, setHoveredLinkRect] = useState<DOMRectReadOnly | null>(null)

    return (
        <nav className={classes["main-column"]} ref={navBarRef}>
            <MyNavLink href='/' icon={<IoHomeSharp />} setHoveredLinkRect={setHoveredLinkRect}>
                Home
            </MyNavLink>
            <div className={classes["center-column"]}>
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
            {hoveredLinkRect && <ActiveNavLinkHighlight highlightedRect={hoveredLinkRect} addedClassName={classes["nav-link-highlight--hovered"]} />}
            {activeLinkRect && <ActiveNavLinkHighlight highlightedRect={activeLinkRect} addedClassName={classes["nav-link-highlight--active"]} />}
        </nav>
    )
}

export default NavBar