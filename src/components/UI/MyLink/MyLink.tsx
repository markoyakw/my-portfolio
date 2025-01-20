import { FC, ReactNode } from "react"
import classes from "./MyLink.module.css"
import { NavLink } from "react-router-dom"

type TMyLinkProps = {
    children: ReactNode,
    href: string,
    addedClassName?: string
}

const MyLink: FC<TMyLinkProps> = ({ children, href, addedClassName }) => {

    const getLinkClasses = (isActive: boolean) => {
        return isActive
            ? `${classes["link"]} ${classes["link--active"]} ${addedClassName}`
            : `${classes["link"]} ${addedClassName}`
    }

    return (
        <NavLink to={href} className={({ isActive }) => getLinkClasses(isActive)}>
            {children}
        </NavLink>
    )
}

export default MyLink