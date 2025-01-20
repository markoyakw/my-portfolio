import { forwardRef } from "react"
import QuizzApp from "./Projects/QuizzApp"
import classes from "./ProjectsPage.module.css"

const ProjectsPage = forwardRef<HTMLDivElement>((_, ref) => {

    return (
        <div ref={ref} className={classes["container"]}>
            <h2 className={classes["title"]}>My projects:</h2>
            <QuizzApp />
        </div>
    )
})

export default ProjectsPage