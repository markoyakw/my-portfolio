import { FC, useMemo, useRef } from 'react'
import classes from './MyProjectFeatureVideo.module.css'
import getRandomColor from '@utils/getRandomColor'
import MyVideo from '@components/UI/MyVideo/MyVideo';
import useWindowSize from '@hooks/useWindowSize';

type TPreviewVideo = {
    src: string;
    title: string;
    isLoadingStarted?: boolean;
    startLoadingWhenVisible?: boolean
}

const PreviewVideo: FC<TPreviewVideo> = ({ src, title, isLoadingStarted, startLoadingWhenVisible }) => {

    const { width: windowWidth, height: windowHeight } = useWindowSize()
    const titleRef = useRef<HTMLHeadingElement>(null)

    const randomColorStyle = useMemo(() => {
        return { backgroundColor: getRandomColor() }
    }, [])

    const titleHeightVariablesStyle = useMemo(() => {
        const defaultHeight = "100px"
        if (titleRef.current) {
            const height = titleRef.current.offsetHeight;
            return { "--title-height": `${height}px` };
        }
        return { "--title-height": defaultHeight };
    }, [windowWidth, windowHeight]);

    return (
        <div className={classes["card__feature-video-container"]} style={{ ...randomColorStyle, ...titleHeightVariablesStyle }} >
            <h3 className={classes["card__feature-video-title"]} ref={titleRef}>
                {title}
            </h3>
            <MyVideo muted autoPlay className={classes["card__feature-video"]} src={src} controls={false}
                isLoadingStarted={isLoadingStarted} startLoadingWhenVisible={startLoadingWhenVisible}
            />
        </div >
    )
}

export default PreviewVideo