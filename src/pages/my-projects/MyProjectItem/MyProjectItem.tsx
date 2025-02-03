import { FC, useState } from 'react'
import MyProjectInfo from './MyProjectInfo'
import { TTechStackIcon } from '@components/UI/MyIcon/MyIcon';
import classes from "../ProjectsPage.module.css"
import MyProjectInfoButton, { TMyProjectInfoButton } from './MyProjectFeatures/MyProjectFeatureButton';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import LinksToMyProject from './LinksToMyProject/LinksToMyProject';

type TMyProject = {
    techStack: TTechStackIcon;
    title: string;
    projectInfoButtonArr: TMyProjectInfoButton[];
    githubUrl: string,
    appUrl: string
}

const MyProject: FC<TMyProject> = ({ techStack, title, projectInfoButtonArr, githubUrl, appUrl }) => {

    const [isHovered, setIsHovered] = useState(false)
    const [isProjectFeaturesOpenMobile, setIsProjectFeaturesOpenMobile] = useState<boolean | null>(null)
    const projectCardClassName = `${classes["card"]} ${isHovered ? classes["card--hovered"] : ""}`

    //separate check for true/false is there because of possible null value for not interacted with menu 
    const dropDownClassName = `
    ${classes["card__dropdown-container"]} 
    ${isProjectFeaturesOpenMobile === true ? classes["card__dropdown-container--mobile-open"] : ""}
    ${isProjectFeaturesOpenMobile === false ? classes["card__dropdown-container--mobile-close"] : ""}
    `
    const dropdownIconButtonClassName = `
    ${classes["card__arrow-icon"]}
    ${classes["card__arrow-icon--dropdown"]}
    ${isProjectFeaturesOpenMobile ? classes["card__arrow-icon--dropdown-is-open"] : ""}
    `

    const toggleIsProjectFeaturesOpenMobile = () => {
        setIsProjectFeaturesOpenMobile(oldValue => !oldValue)
    }

    return (
        <div className={projectCardClassName}
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
        >

            <MyProjectInfo techStack={techStack} title={title} projectInfoButtonArr={projectInfoButtonArr} />
            <div className={dropDownClassName}>
                <LinksToMyProject githubUrl={githubUrl} appUrl={appUrl} />
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
            </div>

            {/* <IoIosArrowDroprightCircle className={`${classes["card__arrow-icon"]} ${classes["card__arrow-icon--link"]}`} /> */}

            <div className={dropdownIconButtonClassName}>
                <IoIosArrowDroprightCircle onClick={() => toggleIsProjectFeaturesOpenMobile()} />
            </div>
        </div>
    )
}

export default MyProject