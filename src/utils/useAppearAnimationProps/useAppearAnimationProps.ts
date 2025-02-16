import { CSSProperties, useMemo } from "react"
import classes from "./appearAnimation.module.css"

type TAppearType = "from-top" | "from-bottom" | "from-left" | "from-right"

type TAppearAnimationProps = {
    type: TAppearType,
    delay?: CSSProperties["animationDelay"],
    addedClassName?: string
}

type TAnimationAttributes = {
    animationClassName: string,
    delayStyle: CSSProperties
}

const useAppearAnimationAttributes = ({ type, delay }: TAppearAnimationProps): TAnimationAttributes => {

    const animationAttributes = useMemo(() => {

        const animationClassName = `${classes["appear-container"]} ${classes["appear-container--" + type]}`
        const delayStyle: CSSProperties = {
            animationDelay: delay
        }

        return {
            animationClassName: animationClassName,
            delayStyle
        }

    }, [type, delay])

    return animationAttributes
}

export default useAppearAnimationAttributes