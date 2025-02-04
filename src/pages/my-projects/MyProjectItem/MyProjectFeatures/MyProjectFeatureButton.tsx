import MyCustomCursor from '@components/UI/MyCursor/MyCursorHoverArea'
import { CSSProperties, FC, useMemo } from 'react'
import PreviewVideo from '../../MyProjectFeatureVideo/MyProjectFeatureVideo'
import classes from "../../ProjectsPage.module.css"
import MyProjectFeatureInProgress from '../../MyProjectFeatureVideo/MyProjectFeatureInProgress'

export type TMyProjectInfoButton = {
    previewVideoSrc?: string;
    previewImgSrc: string;
    title: string;
    backgroundColor: CSSProperties["backgroundColor"]
}


const MyProjectFeatureButton: FC<TMyProjectInfoButton> = ({ title, previewVideoSrc, previewImgSrc, backgroundColor }) => {

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

    const featureButtonStyle = useMemo<CSSProperties>(() => {
        return {
            backgroundColor: backgroundColor
        }
    }, [])

    return (
        <MyCustomCursor {...getCursorProps()} normalizeOverflowOutsideOfScreen>
            <div className={classes["card__feature-button"]} style={featureButtonStyle}>
                <h3>{title}</h3>
            </div>
        </MyCustomCursor>
    )
}

export default MyProjectFeatureButton