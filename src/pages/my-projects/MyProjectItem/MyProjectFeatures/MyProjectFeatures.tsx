import { FC } from "react"
import classes from "../ProjectsPage.module.css"
import MyProjectFeatureButton, { TMyProjectInfoButton } from "./MyProjectFeatureButton";
import MyCursorLabel from "@components/UI/MyCursor/MyCursorLabel";
import AnimatedLoaderText from "@components/UI/animations/AnimatedLoaderText/AnimatedLoaderText";

type TMyProjectFeaturesProps = {
    projectInfoButtonArr: TMyProjectInfoButton[];
}

const Test = () => (
    <MyCursorLabel>
        <h3 className={`${classes["card__feature-video-title"]} ${classes["card__feature-video-title--in-progress"]}`}>
            <AnimatedLoaderText>
                In development...
            </AnimatedLoaderText>
        </h3>
    </MyCursorLabel>
)

const MyProjectFeatures: FC<TMyProjectFeaturesProps> = ({ projectInfoButtonArr }) => {
    return (
        <div className={classes["card__feature-buttons-container"]}>
            {projectInfoButtonArr.map((myProjectButton, myProjectButtonId) => {
                return myProjectButton.previewVideoSrc
                    ? <MyProjectFeatureButton
                        key={myProjectButtonId}
                        previewImgSrc={myProjectButton.previewImgSrc}
                        previewVideoSrc={myProjectButton.previewVideoSrc}
                        title={myProjectButton.title}
                    />
                    : <Test />
            })}
        </div>
    )
}

export default MyProjectFeatures