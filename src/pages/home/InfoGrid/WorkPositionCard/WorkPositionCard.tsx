import classes from "./WorkPositionCard.module.css"
import { FC } from "react"
import TextReveal from "@components/UI/animations/TextReveal/TextReveal"
import useDelay from "@hooks/useDelay"

const WorkPositionCard: FC<{ isRevealAnimationReady: boolean }> = ({ isRevealAnimationReady }) => {

    const containerClassName = `${classes["work-position"]}`
    const [lastLineRevealDelay] = useDelay(200, { shouldStart: isRevealAnimationReady, isOneTime: true })

    return (
        <strong>
            <h1 className={containerClassName}>
                <div className={classes["front-end-row"]}>
                    <TextReveal shouldAnimationStart={isRevealAnimationReady}>
                        FRONT
                    </TextReveal>
                    <TextReveal shouldAnimationStart={isRevealAnimationReady}>
                        end
                    </TextReveal>
                </div>
                <TextReveal shouldAnimationStart={lastLineRevealDelay}>
                    DEVELOPER
                </TextReveal>
            </h1>
        </strong>
    )
}

export default WorkPositionCard