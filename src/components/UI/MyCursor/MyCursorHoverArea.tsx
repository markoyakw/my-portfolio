import { FC, memo, MouseEventHandler, ReactNode } from "react"
import classes from "./MyCursor.module.css"

type TCursorHoverAreaProps = {
    disableBasicCursor?: boolean,
    handleMouseMove: MouseEventHandler,
    handleMouseLeave: MouseEventHandler,
    children: ReactNode
}

const MyCursorHoverArea: FC<TCursorHoverAreaProps> = ({
    disableBasicCursor,
    handleMouseMove,
    handleMouseLeave,
    children
}) => {
    
    return (
        <div
            className={`${classes["custom-cursor__hover-container"]} ${disableBasicCursor ? classes["custom-cursor__hover-container--no-basic-cursor"] : ""}`}

            onMouseOver={handleMouseMove}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    )
}

export default memo(MyCursorHoverArea)