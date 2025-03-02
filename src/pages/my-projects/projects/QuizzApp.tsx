import { TTechStackIcon } from "@components/UI/MyIcon/MyIcon"
import MyProject from "../MyProjectItem/MyProjectItem"
import { TMyProjectInfoButton } from "../MyProjectItem/MyProjectFeatures/MyProjectFeatureButton"

import newTestFeatureVideo from "@assets/project-preview-videos/quizz-app/features/new-test-video.mp4"
import AutoGradingFeatureVideo from "@assets/project-preview-videos/quizz-app/features/auto-grading.mp4"
import questionTypesFeatureVideo from "@assets/project-preview-videos/quizz-app/features/question-types.mp4"
import timeManagingFeatureVideo from "@assets/project-preview-videos/quizz-app/features/time-managing.mp4"
import testSharingFeatureVideo from "@assets/project-preview-videos/quizz-app/features/test-sharing.mp4"
import aiFeatureVideo from "@assets/project-preview-videos/quizz-app/features/ai-feature.mp4"

const QuizzApp = () => {

    const techStack: TTechStackIcon = ["react", "nextJs", "typescript", "javascript", "html", "css"]

    const projectInfoButtonArr: TMyProjectInfoButton[] = [
        {
            title: "Creating and edditing quizzes",
            backgroundColor: "var(--color-variety-4)",
            previewVideoSrc: newTestFeatureVideo,
        },
        {
            title: "6 types of questions",
            backgroundColor: "var(--color-primary)",
            previewVideoSrc: questionTypesFeatureVideo
        },
        {
            title: "Managing quizz time frame",
            backgroundColor: "var(--color-primary)",
            previewVideoSrc: timeManagingFeatureVideo
        },
        {
            title: "Automatic grades and journal",
            backgroundColor: "var(--color-primary)",
            previewVideoSrc: AutoGradingFeatureVideo
        },
        {
            title: "Sharing quizzes via link or QR-code",
            backgroundColor: "var(--color-primary)",
            previewVideoSrc: testSharingFeatureVideo
        },
        {
            title: "AI-assisted materials highlight",
            backgroundColor: "var(--color-variety-5)",
            previewVideoSrc: aiFeatureVideo
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