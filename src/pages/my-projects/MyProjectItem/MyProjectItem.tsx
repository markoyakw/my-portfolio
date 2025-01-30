import { FC, useState } from 'react'
import MyProjectInfo from './MyProjectInfo'
import { TTechStackIcon } from '@components/UI/MyIcon/MyIcon';
import classes from "../ProjectsPage.module.css"
import MyProjectInfoButton, { TMyProjectInfoButton } from './MyProjectFeatureButton';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

type TMyProject = {
    techStack: TTechStackIcon;
    title: string;
    projectInfoButtonArr: TMyProjectInfoButton[];
}

const MyProject: FC<TMyProject> = ({ techStack, title, projectInfoButtonArr }) => {

    const [isHovered, setIsHovered] = useState(false)
    const projectCardClassName = `${classes["card"]} ${isHovered ? classes["card--hovered"] : ""}`

    return (
        <div className={projectCardClassName}
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
        >
            <MyProjectInfo techStack={techStack} title={title} projectInfoButtonArr={projectInfoButtonArr} />
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
            <IoIosArrowDroprightCircle className={classes["card__arrow-icon"]} />
        </div>
    )
}

export default MyProject