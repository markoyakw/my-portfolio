import { FC, ReactElement, useEffect, useRef } from "react"
import classes from "./MyNavLink.module.css"
import { NavLink, useLocation } from "react-router-dom"

type TNavLinkProps = {
    icon: ReactElement,
    children: string,
    href: string,
    addedClassName?: string,
    setHoveredLinkRect: (rect: DOMRectReadOnly | null) => void,
    onClick?: () => void
}

const MyNavLink: FC<TNavLinkProps> = ({
    icon,
    children,
    href,
    addedClassName,
    setHoveredLinkRect,
    onClick
}) => {

    const NavLinkRef = useRef<HTMLAnchorElement>(null)
    const rect = NavLinkRef?.current?.getBoundingClientRect()
    const getNavLinkClasses = (isActive: boolean) => {
        return `${classes["container"]} ${addedClassName} ${isActive ? classes["container--active"] : ""}`
    }
    const params = useLocation()

    const handleMouseEnter = () => {
        if (!NavLinkRef.current || !setHoveredLinkRect) return
        setHoveredLinkRect(rect || null)
    }
    const handleMouseLeave = () => {
        if (!setHoveredLinkRect) return
        const newRectCenteredX = (rect?.x || 0) + ((rect?.width || 0) / 2)
        const newRectCenteredY = (rect?.y || 0) + ((rect?.height || 0) / 2)
        const newRect = new DOMRect(newRectCenteredX, newRectCenteredY, 0, 0)
        setHoveredLinkRect(newRect)
    }

    //set active link as animation source (highlight block will move from its position)
    useEffect(() => {
        if (href === params.pathname && rect) {
            setHoveredLinkRect(rect)
            setHoveredLinkRect({
                ...rect,
                height: 0,
                width: 0,
                x: rect.x + rect.width / 2,
                y: rect.y + rect.height / 2,
            })
        }
    }, [NavLinkRef.current])

    return (
        <NavLink to={href}
            ref={NavLinkRef}
            className={({ isActive }) => getNavLinkClasses(isActive)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
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