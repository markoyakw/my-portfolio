import { FC, ReactNode } from "react"
import classes from "./MyLink.module.css"

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
        <a href={href}>
            {children}
        </a>
    )
}

export default MyLink