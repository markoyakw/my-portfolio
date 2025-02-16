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

    const animationAttributes = useMemo(() => {

        const animationClassName = `${classes["appear-container"]} ${classes["appear-container--" + type]} ${show ? "" : classes["appear-container--hide"]}`
        const delayStyle: CSSProperties = {
            animationDelay: delay
        }

        return {
            animationClassName: animationClassName,
            delayStyle
        }

    }, [type, delay, show])

    return animationAttributes
}

export default useAppearAnimationAttributes