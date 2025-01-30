import { FC, useMemo } from 'react'
import classes from './MyProjectFeatureVideo.module.css'
import getRandomColor from '@utils/getRandomColor'
import AnimatedLoaderText from '@components/UI/animations/AnimatedLoaderText/AnimatedLoaderText';
import MyCursorLabel from '@components/UI/MyCursor/MyCursorLabel';

type TPreviewVideo = {
    src?: string;
    title: string
}

const PreviewVideo: FC<TPreviewVideo> = ({ src, title }) => {
    const randomColorStyle = useMemo(() => {
        return { backgroundColor: getRandomColor() }
    }, [])

    return (
        src
            ? <div className={classes["card__feature-video-container"]} style={randomColorStyle} >
                <h3 className={classes["card__feature-video-title"]}>
                    {title}
                </h3>
                <video muted autoPlay className={classes["card__feature-video"]}>
                    <source src={src} type="video/mp4" />
                </video>
            </div >

            : <MyCursorLabel>
                <h3 className={`${classes["card__feature-video-title"]} ${classes["card__feature-video-title--in-progress"]}`}>
                    <AnimatedLoaderText>
                        In development...
                    </AnimatedLoaderText>
                </h3>
            </MyCursorLabel>
    )
}

export default PreviewVideo