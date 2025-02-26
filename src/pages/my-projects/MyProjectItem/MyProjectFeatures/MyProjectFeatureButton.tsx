import MyCustomCursor from '@components/UI/MyCursor/MyCustomCursor'
import { CSSProperties, FC, useMemo, useState } from 'react'
import PreviewVideo from './MyProjectFeatureVideo/MyProjectFeatureVideo'
import classes from "../../ProjectsPage.module.css"
import MyProjectFeatureInProgress from './MyProjectFeatureVideo/MyProjectFeatureInProgress'
import useSensorScreen from '@hooks/useIsSensorScreen'
import MyPopupWindow from '@components/UI/MyPopup/MyPopupWindow'
import MyPopupMessage from '@components/UI/MyPopupMessage/MyPopupMessage'

export type TMyProjectInfoButton = {
    previewVideoSrc?: string;
    title: string;
    backgroundColor: CSSProperties["backgroundColor"]
}


const MyProjectFeatureButton: FC<TMyProjectInfoButton> = ({ title, previewVideoSrc, backgroundColor }) => {

    const isSensorScreen = useSensorScreen()
    const [isProjectFeaturePopupOpen, setIsProjectFeaturePopupOpen] = useState(false)
    const toggleProjectFeaturePopup = () => setIsProjectFeaturePopupOpen(oldValue => !oldValue)

    const getCursorProps = () => {
        if (previewVideoSrc) {
            return {
                cursor: <PreviewVideo title={title} src={previewVideoSrc} isLoadingStarted={true} startLoadingWhenVisible={true} />
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

    const handleMobileCardFeatureButtonClick = () => {
        if (!isSensorScreen) return
        toggleProjectFeaturePopup()
    }

    return (
        <>
            <MyCustomCursor {...getCursorProps()} normalizeOverflowOutsideOfScreen>
                <div className={classes["card__feature-button"]} style={featureButtonStyle} onClick={handleMobileCardFeatureButtonClick}>
                    <h3>{title}</h3>
                </div>
            </MyCustomCursor>
            {previewVideoSrc
                ? <MyPopupWindow isOpen={isProjectFeaturePopupOpen} toggleIsOpen={toggleProjectFeaturePopup}>
                    <PreviewVideo title={title} src={previewVideoSrc} isLoadingStarted={isProjectFeaturePopupOpen} />
                </MyPopupWindow>

                : <MyPopupMessage isVisible={isProjectFeaturePopupOpen} disappearFunction={toggleProjectFeaturePopup} disappearIn={3000}>
                    This feature is still in development 👷🚧
                </MyPopupMessage>
            }
        </>
    )
}

export default MyProjectFeatureButton