import { TTechStackIcon } from '@components/UI/MyIcon/MyIcon'
import classes from '../ProjectsPage.module.css'
import { FC } from 'react';
import MyIconWithLabel from '@components/UI/MyIcon/MyIconWithLabel';
import { TMyProjectInfoButton } from './MyProjectInfoButton';

type TMyProject = {
    techStack: TTechStackIcon;
    title: string;
    projectInfoButtonArr: TMyProjectInfoButton[];
}

const MyProjectInfo: FC<TMyProject> = ({ techStack, title, projectInfoButtonArr }) => {
    return (
        <div className={classes["card__project-info-row"]}>
            <div className={classes["card__tech-stack"]}>
                {techStack.map((iconName, iconId) => <MyIconWithLabel
                    key={iconId}
                    label={iconName}
                    name={iconName}
                    addedClassName={classes["card__tech-stack-item"]}
                />)}
            </div>
            <div className={classes["card__project-info-column"]}>
                <h3 className={classes["card__project-title"]}>
                    {title}
                </h3>
                <div className={classes["card__project-feature-list"]}>
                    <h3>Functionality:</h3>
                    <ul>
                        {projectInfoButtonArr.map(({ title }, featureId) => {
                            return <li key={featureId}>{title}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MyProjectInfo