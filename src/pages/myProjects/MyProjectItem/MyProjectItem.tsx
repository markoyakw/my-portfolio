import { FC, useState } from 'react'
import MyProjectInfo from './MyProjectInfo'
import { TTechStackIcon } from '@components/UI/MyIcon/MyIcon';
import classes from "../ProjectsPage.module.css"
import MyProjectInfoButton, { TMyProjectInfoButton } from './MyProjectInfoButton';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

type TMyProject = {
    techStack: TTechStackIcon;
    title: string;
    projectInfoButtonArr: TMyProjectInfoButton[];
    backgroundImageUrl: string;
    href: string
}

const MyProject: FC<TMyProject> = ({ techStack, title, projectInfoButtonArr, backgroundImageUrl, href }) => {

    const [isHovered, setIsHovered] = useState(false)
    const projectCardClassName = `${classes["card"]} ${isHovered ? classes["card--hovered"] : ""}`

    return (
        <div className={classes["card__plain-color-background"]}>
            <a target='_blank' href={href} style={{ backgroundImage: `url(${backgroundImageUrl})` }}
                className={projectCardClassName} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
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
            </a>
        </div>
    )
}

export default MyProject