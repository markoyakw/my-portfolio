import MyCustomCursor from '@components/UI/MyCursor/MyCursorHoverArea'
import { FC } from 'react'
import PreviewVideo from '../../MyProjectFeatureVideo/MyProjectFeatureVideo'
import classes from "../../ProjectsPage.module.css"
import MyProjectFeatureInProgress from '../../MyProjectFeatureVideo/MyProjectFeatureInProgress'

export type TMyProjectInfoButton = {
    previewVideoSrc?: string;
    previewImgSrc: string;
    title: string
}


const MyProjectFeatureButton: FC<TMyProjectInfoButton> = ({ title, previewVideoSrc, previewImgSrc }) => {

    const getCursorProps = () => {
        if (previewVideoSrc) {
            return {
                cursor: <PreviewVideo title={title} src={previewVideoSrc} />
            }
        }
        else {
            return {
                cursor: < MyProjectFeatureInProgress />,
                translateXPercent: 5,
                translateYPercent: -60
            }
        }
    }

    return (
        <MyCustomCursor {...getCursorProps()}>
            <div className={classes["card__feature-button"]}>
                <h3>{title}</h3>
                <img className={classes["card__feature-button-image"]} src={previewImgSrc} />
            </div>
        </MyCustomCursor>
    )
}

export default MyProjectFeatureButton