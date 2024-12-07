import { FC, ReactElement } from "react"
import classes from "./MyNavLink.module.css"
import MyLink from "../MyLink/MyLink"

type TNavLinkProps = {
    icon: ReactElement,
    children: string,
    href: string
}

const MyNavLink: FC<TNavLinkProps> = ({ icon, children, href }) => {
    return (
        <MyLink href={href} addedClassName={classes["container"]}>
            <div className={classes["icon"]}>
                {icon}
            </div>
            {children}
        </MyLink>
    )
}

export default MyNavLink