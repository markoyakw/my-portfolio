import { FC } from "react"
import classes from "./Header.module.css"

type TActiveNavLinkHighlightProps = {
    highlightedRect: DOMRectReadOnly
}

const ActiveNavLinkHighlight: FC<TActiveNavLinkHighlightProps> = ({ highlightedRect }) => {
    return (
        <div className={classes["active-nav-link-highlight"]}
            style={{
                width: highlightedRect?.width,
                height: highlightedRect?.height,
                top: highlightedRect?.y,
                left: highlightedRect?.x,
            }} />
    )
}

export default ActiveNavLinkHighlight