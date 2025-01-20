import MyCustomCursor from '@components/UI/MyCustomCursor/MyCustomCursor'
import { FC } from 'react'
import PreviewVideo from '../MyProjectFeatureVideo/MyProjectFeatureVideo'
import classes from "../ProjectsPage.module.css"

export type TMyProjectInfoButton = {
    previewVideoSrc?: string;
    previewImgSrc: string;
    title: string
}

const MyProjectInfoButton: FC<TMyProjectInfoButton> = ({ title, previewVideoSrc, previewImgSrc }) => {
    return (
        <MyCustomCursor cursor={
            <PreviewVideo title={title} src={previewVideoSrc} />
        }>
            <div className={classes["card__feature-button"]}>
                <h3>{title}</h3>
                <img className={classes["card__feature-button-image"]} src={previewImgSrc} />
            </div>
        </MyCustomCursor>
    )
}

export default MyProjectInfoButton