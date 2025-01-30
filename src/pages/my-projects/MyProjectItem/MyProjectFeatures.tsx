import classes from "../ProjectsPage.module.css"

type TMyProjectFeaturesProps = 
const MyProjectFeatures = () => {
    return (
        <div className={classes["card__feature-buttons-container"]}>
            {projectInfoButtonArr.map((myProjectButton, myProjectButtonId) => {
                return <MyProjectInfoButton
                    key={myProjectButtonId}
                    previewImgSrc={myProjectButton.previewImgSrc}
                    previewVideoSrc={myProjectButton.previewVideoSrc}
                    title={myProjectButton.title}
                />
            })}
        </div>
    )
}

export default MyProjectFeatures