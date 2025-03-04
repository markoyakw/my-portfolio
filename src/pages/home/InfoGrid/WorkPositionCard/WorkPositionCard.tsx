import classes from "./WorkPositionCard.module.css"
import { FC } from "react"
import TextReveal from "@components/UI/animations/TextReveal/TextReveal"

const WorkPositionCard: FC<{ isRevealAnimationReady: boolean }> = ({ isRevealAnimationReady }) => {

    const containerClassName = `${classes["work-position"]}`

    if (!isRevealAnimationReady) return null
    return (
        <strong>
            <h1 className={containerClassName}>
                <div>
                    <TextReveal delay={500}>FRONT</TextReveal>
                    <i><TextReveal delay={500}>&nbsp;end&nbsp;</TextReveal></i>
                </div>
                <TextReveal delay={800}>DEVELOPER</TextReveal>
            </h1>
        </strong>
    )
}

export default WorkPositionCard