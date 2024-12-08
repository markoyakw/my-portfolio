import { FC } from "react"
import classes from "../Header.module.css"

type TActiveNavLinkHighlightProps = {
    highlightedRect: DOMRectReadOnly,
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
                left: highlightedRect?.x,
            }} />
    )
}

export default ActiveNavLinkHighlight