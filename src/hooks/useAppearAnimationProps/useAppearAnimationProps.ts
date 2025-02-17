import { CSSProperties, useMemo } from "react"
import classes from "./appearAnimation.module.css"

type TAppearType = "from-top" | "from-bottom" | "from-left" | "from-right" | "fade-in"

type TAppearAnimationProps = {
    type: TAppearType,
    delay?: CSSProperties["animationDelay"],
    addedClassName?: string,
    show?: boolean
}

type TAnimationAttributes = {
    animationClassName: string,
    delayStyle: CSSProperties
}

const useAppearAnimationAttributes = ({ type, delay, show = true }: TAppearAnimationProps): TAnimationAttributes => {

    const animationClassName = useMemo(() => {
        const animationClassName = `${classes["appear-container"]} ${classes["appear-container--" + type]} ${show ? "" : classes["appear-container--hide"]}`
        return animationClassName
    }, [show, type])

    const delayStyle = useMemo(() => {
        return {
            animationDelay: delay
        }
    }, [delay])

    return {
        animationClassName: animationClassName,
        delayStyle
    }
}

export default useAppearAnimationAttributes