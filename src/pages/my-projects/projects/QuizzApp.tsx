import { TTechStackIcon } from "@components/UI/MyIcon/MyIcon"
import newTestFeatureImg from "@assets/project-screenshots/quizz-app/features/new-test.png"
import questionTypesFeatureImg from "@assets/project-screenshots/quizz-app/features/question-types.png"
import timeFeatureImg from "@assets/project-screenshots/quizz-app/features/time.png"
import gradingFeatureImg from "@assets/project-screenshots/quizz-app/features/grading.png"
import sharingFeatureImg from "@assets/project-screenshots/quizz-app/features/sharing.png"
import aiHighlightFeatureImg from "@assets/project-screenshots/quizz-app/features/ai-highlight.png"
import newTestFeatureVideo from "@assets/project-screenshots/quizz-app/features/new-test-video.mp4"
import MyProject from "../MyProjectItem/MyProjectItem"
import { TMyProjectInfoButton } from "../MyProjectItem/MyProjectFeatures/MyProjectFeatureButton"

const QuizzApp = () => {

    const techStack: TTechStackIcon = ["react", "nextJs", "typescript", "javascript", "html", "css"]

    const projectInfoButtonArr: TMyProjectInfoButton[] = [
        {
            title: "Creating and edditing quizzes",
            previewImgSrc: newTestFeatureImg,
            previewVideoSrc: newTestFeatureVideo,
            backgroundColor: "var(--color-project-button-variety-4)"
        },
        {
            title: "6 types of questions",
            previewImgSrc: questionTypesFeatureImg,
            backgroundColor: "var(--color-project-button-variety-2)"
        },
        {
            title: "Managing quizz time frame",
            previewImgSrc: timeFeatureImg,
            backgroundColor: "var(--color-project-button-variety-2)"
        },
        {
            title: "Automatic grades and journal",
            previewImgSrc: gradingFeatureImg,
            backgroundColor: "var(--color-project-button-variety-2)"
        },
        {
            title: "Sharing quizzes via link or QR-code",
            previewImgSrc: sharingFeatureImg,
            backgroundColor: "var(--color-project-button-variety-2)"
        },
        {
            title: "AI-assisted materials highlight",
            previewImgSrc: aiHighlightFeatureImg,
            backgroundColor: "var(--color-project-button-variety-3)"
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