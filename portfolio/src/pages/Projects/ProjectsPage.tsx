import { TTechStackIcon } from "@components/UI/MyIcon/MyIcon"
import classes from "./ProjectsPage.module.css"

const ProjectsPage = () => {

    // const technologiesUsed: TTechStackIcon[] = [
    //     "nextJs", "react"
    // ]

    return (
        <div className={classes["container"]}>
            <h2>My projects:</h2>
            <div className={classes["card"]}>
                <div>Quizz app for Master's degree final project</div>
                <div>{ }</div>
            </div>
        </div>
    )
}

export default ProjectsPage