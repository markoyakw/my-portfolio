import { FC } from "react"
import classes from "../Nav.module.css"

type TActiveNavLinkHighlightProps = {
    highlightedRect: DOMRectReadOnly | null,
    addedClassName?: string
}

const ActiveNavLinkHighlight: FC<TActiveNavLinkHighlightProps> = ({ highlightedRect, addedClassName }) => {

    const activeNavLinkClassName = `${classes["nav-link-highlight"]} ${addedClassName}`

    return (
        <div className={activeNavLinkClassName}
            style={{
                width: highlightedRect?.width,
                height: highlightedRect?.height,
                top: highlightedRect?.y,
            }} />
    )
}

export default ActiveNavLinkHighlight