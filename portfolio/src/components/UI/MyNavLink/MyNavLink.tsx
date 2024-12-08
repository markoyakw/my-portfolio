import { FC, ReactElement, useRef } from "react"
import classes from "./MyNavLink.module.css"
import { NavLink } from "react-router-dom"

type TNavLinkProps = {
    icon: ReactElement,
    children: string,
    href: string,
    addedClassName?: string,
    setHoveredLinkRect?: (rect: DOMRectReadOnly | null) => void,
}

const MyNavLink: FC<TNavLinkProps> = ({
    icon,
    children,
    href,
    addedClassName,
    setHoveredLinkRect
}) => {

    const NavLinkRef = useRef<HTMLAnchorElement>(null)
    const rect = NavLinkRef?.current?.getBoundingClientRect()
    const linkClasses = `${classes["container"]} ${addedClassName}`

    const handleMouseEnter = () => {
        if (!NavLinkRef.current || !setHoveredLinkRect) return
        setHoveredLinkRect(rect || null)
    }
    const handleMouseLeave = () => {
        if (!setHoveredLinkRect) return
        setHoveredLinkRect(new DOMRect((rect?.x || 0) + ((rect?.width || 0) / 2), (rect?.y || 0) + ((rect?.height || 0) / 2), 0, 0))
    }

    return (
        <NavLink to={href}
            ref={NavLinkRef}
            className={linkClasses}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            <div className={classes["icon"]}>
                {icon}
            </div>
            <span className={classes["label"]}>
                {children}
            </span>

        </NavLink>
    )
}

export default MyNavLink