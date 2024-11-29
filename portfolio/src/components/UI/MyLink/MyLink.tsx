import { FC, ReactNode } from "react"
import classes from "./MyLink.module.css"
import { NavLink } from "react-router-dom"

type TMyLinkProps = {
    children: ReactNode,
    href: string,
    customCursor?: ReactNode
}

const MyLink: FC<TMyLinkProps> = ({ children, href, customCursor }) => {

    const getLinkClasses = (isActive: boolean) => {
        return isActive
            ? `${classes["link"]} ${classes["link--active"]}`
            : classes["link"]
    }

    return (
        <NavLink to={href} className={({ isActive }) => getLinkClasses(isActive)}>
            {children}
        </NavLink>
    )
}

export default MyLink