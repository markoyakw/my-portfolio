import useAppearAnimationAttributes from "@hooks/useAppearAnimationProps/useAppearAnimationProps"
import classes from "./WorkPositionCard.module.css"
import { FC } from "react"

const WorkPositionCard: FC<{ isInView: boolean }> = ({isInView}) => {

    const { animationClassName, delayStyle } = useAppearAnimationAttributes({
        type: "fade-in",
        delay: "0.25s",
        show: isInView
    })

    const containerClassName = `${classes["work-position"]} ${animationClassName}`

    return (
        <strong>
            <h1 className={containerClassName} style={delayStyle}>
                <div>
                    FRONT <i>end</i>&nbsp;
                </div>
                DEVELOPER
            </h1>
        </strong>
    )
}

export default WorkPositionCard