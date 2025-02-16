import { AnimationEvent, ButtonHTMLAttributes, FC, useEffect, useRef, useState } from "react"
import classes from "./MyButton.module.css"
import { FaArrowRight } from "react-icons/fa6"
import { ImCheckmark } from "react-icons/im"
import { MdReportGmailerrorred } from "react-icons/md"
import useSensorScreen from "@hooks/useIsSensorScreen"

type TMyButtonProps = {
    addedClassName?: string,
    isLoading?: boolean,
    isSubmitSuccessful?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const MyButton: FC<TMyButtonProps> = ({ children, addedClassName, isLoading, isSubmitSuccessful, ...props }) => {

    const [hoverState, setHoverState] = useState<"initial" | "mouseJustLeft" | "hovered">("initial")
    const [fakeLoading, setFakeLoading] = useState(false)
    const [animationPlayed, setAnimationPlayed] = useState<"hover-start" | "mouse-leave" | "hover-finished" | "loading" | "success" | "error" | null>(null)
    const timerFromSubmitToResponse = useRef<NodeJS.Timeout>()
    const isScreenSensor = useSensorScreen()

    const disabledDueToState = animationPlayed === "loading" || animationPlayed === "success"
    const isStatusAnimationPlayed = animationPlayed === "loading" || animationPlayed == "success" || animationPlayed === "error"

    const buttonClasses = `${classes["button"]} ${addedClassName}
    ${animationPlayed === "hover-start" ? classes["button--hover-start"] : ""}
    ${animationPlayed === "mouse-leave" ? classes["button--mouse-left"] : ""}
    ${animationPlayed === "hover-finished" ? classes["button--hovered"] : ""}
    ${animationPlayed === "loading" ? classes["button--loading"] : ""}
    ${animationPlayed === "success" ? classes["button--success"] : ""}
    ${animationPlayed === "error" ? classes["button--error"] : ""}
    `

    useEffect(() => {
        if (isLoading) {
            setAnimationPlayed("loading")

            setFakeLoading(true)
            timerFromSubmitToResponse.current = setTimeout(() => {
                setFakeLoading(false)
            }, 1000)
        }
        if (isSubmitSuccessful && !fakeLoading) {
            setAnimationPlayed("success")
        }
        if (isSubmitSuccessful === false && !fakeLoading) {
            setAnimationPlayed("error")
        }
    }, [isLoading, isSubmitSuccessful])

    useEffect(() => {
        if (isSubmitSuccessful && !fakeLoading) {
            setAnimationPlayed("success")
        }
        if (isSubmitSuccessful === false && !fakeLoading) {
            setAnimationPlayed("error")
        }
    }, [fakeLoading, isSubmitSuccessful])

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
        if (e.animationName === classes["hide-status-icon"]) {
            setAnimationPlayed(null)
        }
    }

    const handleMouseLeave = () => {
        if (isScreenSensor) return
        setHoverState("mouseJustLeft")
        if (animationPlayed === "hover-start" || isStatusAnimationPlayed) return
        setAnimationPlayed("mouse-leave")
    }

    const handleMouseEnter = () => {
        if (isScreenSensor) return
        setHoverState("hovered")
        if (isStatusAnimationPlayed) return
        setAnimationPlayed("hover-start")
    }

    return (
        <button
            {...props}
            onAnimationEnd={handleAnimationEnd}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className={buttonClasses}
            disabled={props.disabled || disabledDueToState}
        >
            <span className={classes["button__text-container"]}>
                <div className={classes["button__status-icon-container"]}>
                    <div className={classes["button__checkmark-icon"]}>
                        <ImCheckmark />
                    </div>
                    <div className={classes["button__error-icon"]}>
                        <MdReportGmailerrorred />
                    </div>
                </div>
                <span className={classes["button__text"]}>
                    {children}&nbsp;<FaArrowRight />
                </span>
            </span>
        </button>
    )
}

export default MyButton