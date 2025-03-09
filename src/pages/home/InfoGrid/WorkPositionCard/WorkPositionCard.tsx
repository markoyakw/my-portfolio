import classes from "./WorkPositionCard.module.css"
import { FC } from "react"
import TextReveal from "@components/UI/animations/TextReveal/TextReveal"

const WorkPositionCard: FC<{ isRevealAnimationReady: boolean }> = ({ isRevealAnimationReady }) => {

    const containerClassName = `${classes["work-position"]}`

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
                <TextReveal shouldAnimationStart={isRevealAnimationReady} delay={200}>
                    DEVELOPER
                </TextReveal>
            </h1>
        </strong>
    )
}

export default WorkPositionCard