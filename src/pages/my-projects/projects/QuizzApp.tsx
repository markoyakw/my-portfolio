import { TTechStackIcon } from "@components/UI/MyIcon/MyIcon"
import newTestFeatureVideo from "@assets/project-screenshots/quizz-app/features/new-test-video.mp4"
import MyProject from "../MyProjectItem/MyProjectItem"
import { TMyProjectInfoButton } from "../MyProjectItem/MyProjectFeatures/MyProjectFeatureButton"

const QuizzApp = () => {

    const techStack: TTechStackIcon = ["react", "nextJs", "typescript", "javascript", "html", "css"]

    const projectInfoButtonArr: TMyProjectInfoButton[] = [
        {
            title: "Creating and edditing quizzes",
            previewVideoSrc: newTestFeatureVideo,
            backgroundColor: "var(--color-variety-4)"
        },
        {
            title: "6 types of questions",
            backgroundColor: "var(--color-primary)"
        },
        {
            title: "Managing quizz time frame",
            backgroundColor: "var(--color-primary)"
        },
        {
            title: "Automatic grades and journal",
            backgroundColor: "var(--color-primary)"
        },
        {
            title: "Sharing quizzes via link or QR-code",
            backgroundColor: "var(--color-primary)"
        },
        {
            title: "AI-assisted materials highlight",
            backgroundColor: "var(--color-variety-5)"
        }
    ]

    return (
        <MyProject
            appUrl="https://yakovenkodiploma.vercel.app/"
            githubUrl="https://github.com/markoyakw/diploma_frontend/"
            techStack={techStack}
            title="Quizz app for Master's degree final project"
            projectInfoButtonArr={projectInfoButtonArr}
        />
    )
}

export default QuizzApp