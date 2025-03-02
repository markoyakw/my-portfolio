import { CSSProperties, useEffect, useMemo, useState } from "react"
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

    const [isFirstAppearHappened, setIsFirstAppearHappened] = useState(false)

    useEffect(() => {
        if (show && !isFirstAppearHappened) {
            setIsFirstAppearHappened(true)
        }
    }, [show])

    const animationClassName = useMemo(() => {
        const animationClassName = `${classes["appear-container"]}
        ${classes["appear-container--" + type]}
        ${show ? classes["appear-container--show"] : classes["appear-container--hide"]}
        ${isFirstAppearHappened ? classes["appear-container--after-first-appearance"] : ""}
        `
        return animationClassName
    }, [show])

    const delayStyle = useMemo(() => {
        return {
            animationDelay: delay
        }
    }, [])

    return {
        animationClassName: animationClassName,
        delayStyle
    }
}

export default useAppearAnimationAttributes