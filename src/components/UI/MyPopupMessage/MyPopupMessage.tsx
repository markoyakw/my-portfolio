import { CSSProperties, FC, useMemo } from "react";
import classes from "./MyPopupMessage.module.css"

type TMyPopupMessageProps = {
    message: string;
    addedClassName?: string;
    type?: "error" | "success";
    delay?: number;
    isVisible: boolean
}

const MyPopupMessage: FC<TMyPopupMessageProps> = ({ message, addedClassName, type, delay = 0, isVisible }) => {

    const className = `
    ${classes["popup-message"]}
    ${type ? classes["popup-message--" + type] : ""}
    ${addedClassName ? addedClassName : ""}
    ${!isVisible ? classes["popup-message--hidden"] : ""}
    `

    const style = useMemo<CSSProperties>(() => {
        if (!delay) return {}
        return {
            transitionDelay: delay / 1000 + "s",
        }
    }, [])

    return (
        <div className={className} style={style}>
            {message}
        </div>
    )
}

export default MyPopupMessage