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
            previewVideoSrc: newTestFeatureVideo
        },
        {
            title: "6 types of questions",
            previewImgSrc: questionTypesFeatureImg,
        },
        {
            title: "Managing quizz time frame",
            previewImgSrc: timeFeatureImg,
        },
        {
            title: "Automatic grades and journal",
            previewImgSrc: gradingFeatureImg,
        },
        {
            title: "Sharing quizzes via link or QR-code",
            previewImgSrc: sharingFeatureImg,
        },
        {
            title: "AI-assisted materials highlight",
            previewImgSrc: aiHighlightFeatureImg,
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