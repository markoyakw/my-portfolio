import { FC, useMemo, useRef, useState } from 'react'
import MyProjectInfo from './MyProjectInfo'
import { TTechStackIcon } from '@components/UI/MyIcon/MyIcon';
import classes from "../ProjectsPage.module.css"
import MyProjectInfoButton, { TMyProjectInfoButton } from './MyProjectFeatures/MyProjectFeatureButton';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import LinksToMyProject from './LinksToMyProject/LinksToMyProject';
import MyCustomCursor from '@components/UI/MyCursor/MyCursorHoverArea';
import CircularText from '@components/UI/CircularText/CircularText';
import MyProjectHoverCursor from './MyProjectHoverCursor/MyProjectHoverCursor';

type TMyProject = {
    techStack: TTechStackIcon;
    title: string;
    projectInfoButtonArr: TMyProjectInfoButton[];
    githubUrl: string,
    appUrl: string,
}

const MyProject: FC<TMyProject> = ({ techStack, title, projectInfoButtonArr, githubUrl, appUrl }) => {

    const [isProjectFeaturesOpenMobile, setIsProjectFeaturesOpenMobile] = useState<boolean | null>(null)

    const featureButtonsContainerRef = useRef<HTMLDivElement>(null)
    const appLinksRef = useRef<HTMLDivElement>(null)

    const noCursorChilrenArr = useMemo(() => {
        if (!featureButtonsContainerRef.current || !appLinksRef.current) return []
        return [featureButtonsContainerRef.current, appLinksRef.current]
    }, [featureButtonsContainerRef.current, appLinksRef.current])

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
        <MyCustomCursor noCursorChilrenArr={noCursorChilrenArr} cursor={<MyProjectHoverCursor />} disableBasicCursor>
            <div className={classes["card"]}>
                <MyProjectInfo techStack={techStack} title={title} projectInfoButtonArr={projectInfoButtonArr} />
                <div className={dropDownClassName}>
                    <h2>Project links:</h2>
                    <LinksToMyProject githubUrl={githubUrl} appUrl={appUrl} ref={appLinksRef} />
                    <h2>Project features:</h2>
                    <div className={classes["card__feature-buttons-container"]} ref={featureButtonsContainerRef}>
                        {projectInfoButtonArr.map((myProjectButton, myProjectButtonId) => {
                            return <MyProjectInfoButton
                                key={myProjectButtonId}
                                previewImgSrc={myProjectButton.previewImgSrc}
                                previewVideoSrc={myProjectButton.previewVideoSrc}
                                title={myProjectButton.title}
                                backgroundColor={myProjectButton.backgroundColor}
                            />
                        })}
                    </div>
                </div>

                {/* <IoIosArrowDroprightCircle className={`${classes["card__arrow-icon"]} ${classes["card__arrow-icon--link"]}`} /> */}

                <div className={dropdownIconButtonClassName}>
                    <IoIosArrowDroprightCircle onClick={() => toggleIsProjectFeaturesOpenMobile()} />
                </div>
            </div>
        </MyCustomCursor>
    )
}

export default MyProject