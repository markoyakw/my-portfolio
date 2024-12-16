import { AnimationEvent, ButtonHTMLAttributes, FC, useState } from "react"
import classes from "./MyButton.module.css"
import { FaArrowRight } from "react-icons/fa6"

type TMyButtonProps = {
    addedClassName?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const MyButton: FC<TMyButtonProps> = ({ children, addedClassName, ...props }) => {

    const [hoverState, setHoverState] = useState<"initial" | "mouseJustLeft" | "hovered">("initial")
    const [animationPlayed, setAnimationPlayed] = useState<"hover-start" | "mouse-leave" | null | "hover-finished">(null)

    const buttonClasses = `${classes["button"]} ${addedClassName}
     ${animationPlayed === "hover-start" ? classes["button--hover-start"] : ""}
      ${animationPlayed === "mouse-leave" ? classes["button--mouse-left"] : ""}
        ${animationPlayed === "hover-finished" ? classes["button--hovered"] : ""}
        `


    const handleAnimationEnd = (e: AnimationEvent<HTMLButtonElement>) => {
        if (e.animationName === classes["mouse-leave"]) {
            setAnimationPlayed(null)
        }
        if (e.animationName === classes["hover"]) {
            if (hoverState === "mouseJustLeft") {
                setAnimationPlayed("mouse-leave")
                return
            }
            setAnimationPlayed("hover-finished")
        }
    }

    const handleMouseLeave = () => {
        setHoverState("mouseJustLeft")
        if (animationPlayed === "hover-start") {
            return
        }
        setAnimationPlayed("mouse-leave")
    }

    const handleMouseEnter = () => {
        setAnimationPlayed("hover-start")
        setHoverState("hovered")
    }


    return (
        <button
            {...props}
            onAnimationEnd={handleAnimationEnd}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className={buttonClasses}
        >
            {children}&nbsp;<FaArrowRight />
        </button>
    )
}

export default MyButton