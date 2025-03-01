import useObserver from "@hooks/useObserveIntersection";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import classes from "./MyVideo.module.css"
import MyLoaderSpinner from "../MyLoaderSpinner/MyLoaderSpinner";
import useWindowSize from "@hooks/useWindowSize";

type MyVideoProps = {
    src: string;
    poster?: string;
    preload?: "auto" | "metadata" | "none";
    controls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    className?: string;
    type?: string

    title?: string
    shouldStartLoading: boolean | undefined;
    startLoadingWhenVisible?: boolean;
};

const MyVideo: FC<MyVideoProps> = ({
    src,
    poster,
    preload = "metadata",
    controls = true,
    autoPlay = false,
    loop = false,
    muted = false,
    className = "",
    type = "video/mp4",

    title,
    shouldStartLoading,
    startLoadingWhenVisible,
}) => {

    const [isLoadingStartedState, setIsLoadingStartedState] = useState(false)
    const [videoRef, isVideoInView] = startLoadingWhenVisible ? useObserver<HTMLVideoElement>() : [null, false];
    const [isLoading, setIsLoading] = useState(true)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const { width: windowWidth, height: windowHeight } = useWindowSize()

    useEffect(() => {
        if (shouldStartLoading) {
            setIsLoadingStartedState(true)
        }
        if (isVideoInView) {
            setIsLoadingStartedState(true)
        }
    }, [shouldStartLoading, isVideoInView, startLoadingWhenVisible])

    const videoClassName = `${classes["video"]} ${isLoading ? classes["video--loading"] : ""}`
    const containerClassName = `${classes["video__container"]} ${className}`

    return (
        <div className={containerClassName}>
            {isLoading &&
                <div className={classes["loader__container"]}>
                    <MyLoaderSpinner />
                </div>
            }
            <video
                className={videoClassName}
                ref={videoRef}
                poster={poster}
                preload={preload}
                controls={controls}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                onLoadedData={() => setTimeout(() => setIsLoading(false), 1000)}
            >
                {isLoadingStartedState && <source src={src} type={type} />}
            </video>
        </div>
    );
};

export default MyVideo;
