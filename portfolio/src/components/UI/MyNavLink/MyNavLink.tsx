import { FC, ReactElement } from "react"
import classes from "./MyNavLink.module.css"
import { NavLink } from "react-router-dom"

type TNavLinkProps = {
    icon: ReactElement,
    children: string,
    href: string,
    className?: string
}

const MyNavLink: FC<TNavLinkProps> = ({ icon, children, href, className }) => {

    const getLinkClasses = (isActive: boolean) => {
        return isActive
            ? `${classes["container"]} ${classes["container--active"]} ${className}`
            : `${classes["container"]} ${className}`
    }

    return (
        <NavLink to={href}
            className={({ isActive }) => {
                if (isActive) {
                    console.log(href)
                }
                return getLinkClasses(isActive)
            }}
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