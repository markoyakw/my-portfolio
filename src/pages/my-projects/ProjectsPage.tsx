import { forwardRef } from "react"
import QuizzApp from "./projects/QuizzApp"
import classes from "./ProjectsPage.module.css"
import useAppearAnimationAttributes from "@hooks/useAppearAnimationProps/useAppearAnimationProps"

type TProjectsPageProps = {
    isInView: boolean
}

const ProjectsPage = forwardRef<HTMLDivElement, TProjectsPageProps>(({ isInView }, ref) => {

    const { animationClassName, delayStyle } = useAppearAnimationAttributes({
        type: "fade-in",
        delay: "0.1s",
        show: isInView
    })
    const containerClassName = `${classes["container"]} ${animationClassName}`

    return (
        <div ref={ref} className={containerClassName} style={delayStyle}>
            <h2 className={classes["title"]}>My projects:</h2>
            <QuizzApp />
        </div>
    )
})

export default ProjectsPage